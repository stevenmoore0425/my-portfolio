import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { companyName, industry, monthlySpend, primaryGoal, websiteUrl, adsData, searchTermsData } = body;

    const prompt = `You are an expert Google Ads strategist and business consultant. Analyze the following business and advertising data, then provide a comprehensive growth advisory report.

BUSINESS INFORMATION:
- Company: ${companyName}
- Website: ${websiteUrl || "Not provided"}
- Industry: ${industry}
- Monthly Ad Spend: $${monthlySpend}
- Primary Goal: ${primaryGoal}

GOOGLE ADS DATA:
${adsData ? `\`\`\`\n${adsData}\n\`\`\`` : "No Google Ads export provided"}

SEARCH TERMS DATA:
${searchTermsData ? `\`\`\`\n${searchTermsData}\n\`\`\`` : "No search terms report provided"}

Provide a detailed analysis in the following JSON format. Be specific, data-driven, and actionable. Base your analysis on the data provided and industry best practices.

IMPORTANT CONSTRAINTS to keep the response complete and well-formed:
- Limit growthOpportunities to exactly 3 items
- Limit wastedSpend to exactly 3 items
- Limit keywordRecommendations to exactly 5 items
- Limit landingPageRecommendations to exactly 3 items
- Limit each strategicRecommendations sub-array (highImpact, mediumImpact, quickWins) to exactly 2 items
- Keep all descriptions concise (1-2 sentences each)

Return ONLY valid JSON with this exact structure:
{
  "executiveSummary": "2-3 paragraph executive summary of findings and key opportunities",
  "scores": {
    "marketingHealth": <number 0-100>,
    "opportunityScore": <number 0-100>,
    "efficiencyScore": <number 0-100>
  },
  "scoreRationale": {
    "marketingHealth": "Brief explanation of this score",
    "opportunityScore": "Brief explanation of this score",
    "efficiencyScore": "Brief explanation of this score"
  },
  "growthOpportunities": [
    {
      "title": "Opportunity title",
      "description": "Detailed description",
      "estimatedImpact": "High/Medium/Low",
      "timeframe": "Short-term/Medium-term/Long-term"
    }
  ],
  "wastedSpend": [
    {
      "area": "Area of waste",
      "description": "Description of the issue",
      "estimatedWaste": "Estimated monthly waste amount or percentage",
      "recommendation": "What to do about it"
    }
  ],
  "keywordRecommendations": [
    {
      "keyword": "Keyword or theme",
      "matchType": "Broad/Phrase/Exact",
      "rationale": "Why this keyword matters",
      "estimatedSearchVolume": "High/Medium/Low"
    }
  ],
  "landingPageRecommendations": [
    {
      "issue": "Issue identified",
      "recommendation": "Specific recommendation",
      "priority": "High/Medium/Low",
      "expectedImpact": "Expected improvement"
    }
  ],
  "strategicRecommendations": {
    "highImpact": [
      {
        "action": "Action to take",
        "rationale": "Why this matters",
        "estimatedROI": "Expected return"
      }
    ],
    "mediumImpact": [
      {
        "action": "Action to take",
        "rationale": "Why this matters",
        "estimatedROI": "Expected return"
      }
    ],
    "quickWins": [
      {
        "action": "Action to take",
        "rationale": "Why this matters",
        "estimatedROI": "Expected return"
      }
    ]
  }
}`;

    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 16000,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== "text") {
      throw new Error("Unexpected response type from AI model");
    }

    // Extract JSON from the response
    const jsonMatch = content.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No JSON found in response");
    }

    const analysis = JSON.parse(jsonMatch[0]);

    return NextResponse.json({ success: true, analysis });
  } catch (error) {
    console.error("Analysis error:", error);
    return NextResponse.json(
      { success: false, error: "Analysis failed. Please try again." },
      { status: 500 }
    );
  }
}
