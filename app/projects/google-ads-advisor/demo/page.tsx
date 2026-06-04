"use client";

import { useState } from "react";

interface Analysis {
  executiveSummary: string;
  scores: {
    marketingHealth: number;
    opportunityScore: number;
    efficiencyScore: number;
  };
  scoreRationale: {
    marketingHealth: string;
    opportunityScore: string;
    efficiencyScore: string;
  };
  growthOpportunities: Array<{
    title: string;
    description: string;
    estimatedImpact: string;
    timeframe: string;
  }>;
  wastedSpend: Array<{
    area: string;
    description: string;
    estimatedWaste: string;
    recommendation: string;
  }>;
  keywordRecommendations: Array<{
    keyword: string;
    matchType: string;
    rationale: string;
    estimatedSearchVolume: string;
  }>;
  landingPageRecommendations: Array<{
    issue: string;
    recommendation: string;
    priority: string;
    expectedImpact: string;
  }>;
  strategicRecommendations: {
    highImpact: Array<{ action: string; rationale: string; estimatedROI: string }>;
    mediumImpact: Array<{ action: string; rationale: string; estimatedROI: string }>;
    quickWins: Array<{ action: string; rationale: string; estimatedROI: string }>;
  };
}

function ScoreRing({ score, label, color, rationale }: { score: number; label: string; color: string; rationale: string }) {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
          <circle
            cx="50" cy="50" r="40" fill="none"
            stroke={color} strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-black text-gray-900">{score}</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-bold text-gray-900">{label}</p>
        <p className="text-xs text-gray-500 mt-1 max-w-32">{rationale}</p>
      </div>
    </div>
  );
}

function ImpactBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    High: "bg-red-50 text-red-700 border-red-200",
    Medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
    Low: "bg-green-50 text-green-700 border-green-200",
  };
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${colors[level] || colors.Medium}`}>
      {level} Impact
    </span>
  );
}

export default function DemoPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    industry: "",
    monthlySpend: "",
    primaryGoal: "",
    adsData: "",
    searchTermsData: "",
  });

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setAnalysis(data.analysis);
        setStep(3);
      } else {
        setError(data.error || "Analysis failed. Please try again.");
      }
    } catch {
      setError("Connection error. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setFormData(prev => ({ ...prev, [field]: ev.target?.result as string || "" }));
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen" style={{ background: "#f8f8f8" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a0e6e 0%, #2d1b9e 50%, #3b28c8 100%)" }} className="px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <a href="/" className="text-white/60 text-sm hover:text-white transition-colors">← Steven Moore</a>
            <h1 className="text-white font-black text-xl mt-1">AI Google Ads Growth Advisor</h1>
            <p className="text-white/60 text-sm">Automated campaign analysis</p>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/80 text-xs">
            Portfolio Demo
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Step indicator */}
        <div className="flex items-center gap-4 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step >= s ? "text-white" : "bg-gray-200 text-gray-500"
              }`} style={step >= s ? { background: "#2d1b9e" } : {}}>
                {s}
              </div>
              <span className={`text-sm font-medium ${step >= s ? "text-gray-900" : "text-gray-400"}`}>
                {s === 1 ? "Business Info" : s === 2 ? "Ad Data" : "Analysis"}
              </span>
              {s < 3 && <div className="w-8 h-px bg-gray-300 mx-2" />}
            </div>
          ))}
        </div>

        {/* Step 1: Business Info */}
        {step === 1 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Business Information</h2>
            <p className="text-gray-500 mb-8">Tell us about your business and advertising goals.</p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={e => setFormData(p => ({ ...p, companyName: e.target.value }))}
                  placeholder="Acme Corporation"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Website URL</label>
                <input
                  type="url"
                  value={formData.websiteUrl}
                  onChange={e => setFormData(p => ({ ...p, websiteUrl: e.target.value }))}
                  placeholder="https://acmecorp.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Industry *</label>
                <select
                  value={formData.industry}
                  onChange={e => setFormData(p => ({ ...p, industry: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-400 transition-colors bg-white"
                >
                  <option value="">Select industry...</option>
                  <option>SaaS / Software</option>
                  <option>E-Commerce / Retail</option>
                  <option>Healthcare</option>
                  <option>Financial Services</option>
                  <option>Real Estate</option>
                  <option>Legal Services</option>
                  <option>Education</option>
                  <option>Home Services</option>
                  <option>Restaurant / Food</option>
                  <option>Travel / Hospitality</option>
                  <option>Manufacturing / B2B</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Ad Spend (USD) *</label>
                <input
                  type="number"
                  value={formData.monthlySpend}
                  onChange={e => setFormData(p => ({ ...p, monthlySpend: e.target.value }))}
                  placeholder="5000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-400 transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Primary Business Goal *</label>
                <select
                  value={formData.primaryGoal}
                  onChange={e => setFormData(p => ({ ...p, primaryGoal: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-400 transition-colors bg-white"
                >
                  <option value="">Select primary goal...</option>
                  <option>Increase qualified leads</option>
                  <option>Drive e-commerce sales</option>
                  <option>Boost brand awareness</option>
                  <option>Reduce cost per acquisition</option>
                  <option>Increase app installs</option>
                  <option>Drive store visits</option>
                  <option>Increase phone calls</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={!formData.companyName || !formData.industry || !formData.monthlySpend || !formData.primaryGoal}
                className="font-bold px-8 py-3 rounded-full text-sm text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:opacity-90"
                style={{ background: "#2d1b9e" }}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Ad Data */}
        {step === 2 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Upload Ad Data</h2>
            <p className="text-gray-500 mb-2">Upload your Google Ads exports for a deeper analysis. Both fields are optional — we can analyze with just your business info.</p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <p className="text-amber-800 text-sm font-medium">🔒 Privacy Note: Your data is processed securely and never stored. It is only used to generate your analysis.</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Google Ads Export (CSV)</label>
                <p className="text-xs text-gray-500 mb-3">Export from: Google Ads → Reports → Predefined Reports → Campaigns</p>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-indigo-300 transition-colors">
                  <input
                    type="file"
                    accept=".csv,.txt"
                    onChange={handleFileUpload("adsData")}
                    className="hidden"
                    id="ads-upload"
                  />
                  <label htmlFor="ads-upload" className="cursor-pointer">
                    <div className="text-3xl mb-2">📊</div>
                    <p className="text-sm font-semibold text-gray-700">
                      {formData.adsData ? "✓ File uploaded" : "Click to upload Google Ads CSV"}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">CSV files only</p>
                  </label>
                </div>
                {formData.adsData && (
                  <p className="text-xs text-green-600 mt-2 font-medium">✓ Ad data loaded ({formData.adsData.split('\n').length} rows)</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Search Terms Report (CSV)</label>
                <p className="text-xs text-gray-500 mb-3">Export from: Google Ads → Keywords → Search Terms</p>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-indigo-300 transition-colors">
                  <input
                    type="file"
                    accept=".csv,.txt"
                    onChange={handleFileUpload("searchTermsData")}
                    className="hidden"
                    id="search-upload"
                  />
                  <label htmlFor="search-upload" className="cursor-pointer">
                    <div className="text-3xl mb-2">🔍</div>
                    <p className="text-sm font-semibold text-gray-700">
                      {formData.searchTermsData ? "✓ File uploaded" : "Click to upload Search Terms CSV"}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">CSV files only</p>
                  </label>
                </div>
                {formData.searchTermsData && (
                  <p className="text-xs text-green-600 mt-2 font-medium">✓ Search terms loaded ({formData.searchTermsData.split('\n').length} rows)</p>
                )}
              </div>
            </div>

            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="font-semibold px-6 py-3 rounded-full text-sm border border-gray-200 hover:border-gray-300 text-gray-600 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="font-bold px-8 py-3 rounded-full text-sm text-white disabled:opacity-60 transition-all hover:opacity-90 flex items-center gap-2"
                style={{ background: "#2d1b9e" }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  "Generate Analysis →"
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Analysis Results */}
        {step === 3 && analysis && (
          <div className="space-y-6">

            {/* Header card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">{formData.companyName} — Growth Analysis</h2>
                  <p className="text-gray-500 text-sm mt-1">{formData.industry} · ${parseInt(formData.monthlySpend).toLocaleString()}/mo spend · {formData.primaryGoal}</p>
                </div>
                <button
                  onClick={() => { setStep(1); setAnalysis(null); setFormData({ companyName: "", websiteUrl: "", industry: "", monthlySpend: "", primaryGoal: "", adsData: "", searchTermsData: "" }); }}
                  className="text-sm font-semibold px-4 py-2 rounded-full border border-gray-200 hover:border-indigo-300 text-gray-600 transition-colors"
                >
                  New Analysis
                </button>
              </div>

              {/* Score rings */}
              <div className="grid grid-cols-3 gap-8 py-6 border-y border-gray-100">
                <ScoreRing
                  score={analysis.scores.marketingHealth}
                  label="Marketing Health"
                  color="#2d1b9e"
                  rationale={analysis.scoreRationale.marketingHealth}
                />
                <ScoreRing
                  score={analysis.scores.opportunityScore}
                  label="Opportunity Score"
                  color="#059669"
                  rationale={analysis.scoreRationale.opportunityScore}
                />
                <ScoreRing
                  score={analysis.scores.efficiencyScore}
                  label="Efficiency Score"
                  color="#d97706"
                  rationale={analysis.scoreRationale.efficiencyScore}
                />
              </div>

              {/* Executive summary */}
              <div className="mt-6">
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-3">Executive Summary</h3>
                <p className="text-gray-700 leading-relaxed">{analysis.executiveSummary}</p>
              </div>
            </div>

            {/* Strategic Recommendations */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-gray-900 mb-6">Strategic Recommendations</h3>
              <div className="space-y-6">
                {[
                  { key: "highImpact", label: "High Impact Actions", color: "#dc2626", bg: "#fef2f2" },
                  { key: "mediumImpact", label: "Medium Impact Actions", color: "#d97706", bg: "#fffbeb" },
                  { key: "quickWins", label: "Quick Wins", color: "#059669", bg: "#ecfdf5" },
                ].map(({ key, label, color, bg }) => (
                  <div key={key}>
                    <h4 className="text-sm font-bold mb-3" style={{ color }}>{label}</h4>
                    <div className="space-y-3">
                      {analysis.strategicRecommendations[key as keyof typeof analysis.strategicRecommendations].map((item, i) => (
                        <div key={i} className="rounded-xl p-4 border" style={{ background: bg, borderColor: color + "30" }}>
                          <p className="font-bold text-gray-900 text-sm">{item.action}</p>
                          <p className="text-gray-600 text-sm mt-1">{item.rationale}</p>
                          <p className="text-xs font-semibold mt-2" style={{ color }}>Expected: {item.estimatedROI}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Opportunities */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-gray-900 mb-6">Growth Opportunities</h3>
              <div className="space-y-4">
                {analysis.growthOpportunities.map((opp, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl p-5 hover:border-indigo-200 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{opp.title}</h4>
                      <div className="flex gap-2 shrink-0 ml-4">
                        <ImpactBadge level={opp.estimatedImpact} />
                        <span className="text-xs px-2 py-0.5 rounded-full border bg-gray-50 text-gray-600 border-gray-200 font-medium">{opp.timeframe}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{opp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Wasted Spend */}
            {analysis.wastedSpend.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-gray-900 mb-6">Wasted Spend Analysis</h3>
                <div className="space-y-4">
                  {analysis.wastedSpend.map((waste, i) => (
                    <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-gray-900">{waste.area}</h4>
                        <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-1 rounded-full">{waste.estimatedWaste}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{waste.description}</p>
                      <p className="text-sm text-green-700 font-medium">→ {waste.recommendation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Keyword Recommendations */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-gray-900 mb-6">Keyword Recommendations</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 pr-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Keyword</th>
                      <th className="text-left py-3 pr-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Match Type</th>
                      <th className="text-left py-3 pr-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Volume</th>
                      <th className="text-left py-3 text-xs font-bold text-gray-400 uppercase tracking-widest">Rationale</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analysis.keywordRecommendations.map((kw, i) => (
                      <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td className="py-3 pr-4 font-semibold text-gray-900">{kw.keyword}</td>
                        <td className="py-3 pr-4">
                          <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-xs font-medium">{kw.matchType}</span>
                        </td>
                        <td className="py-3 pr-4 text-gray-600">{kw.estimatedSearchVolume}</td>
                        <td className="py-3 text-gray-600 text-xs">{kw.rationale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Landing Page Recommendations */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-gray-900 mb-6">Landing Page Recommendations</h3>
              <div className="space-y-4">
                {analysis.landingPageRecommendations.map((rec, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{rec.issue}</h4>
                      <ImpactBadge level={rec.priority} />
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{rec.recommendation}</p>
                    <p className="text-xs text-green-700 font-semibold">Expected: {rec.expectedImpact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer note */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-gray-500 text-sm">
                This analysis was generated by an AI model based on the information provided.
                Built by <a href="/" className="font-semibold" style={{ color: "#2d1b9e" }}>Steven Moore</a> as a portfolio project demonstrating AI-assisted business consulting.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
