export default function GoogleAdsAdvisorPage() {
  return (
    <div className="min-h-screen" style={{ background: "#f8f8f8" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1a0e6e 0%, #2d1b9e 50%, #3b28c8 100%)" }} className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <a href="/" className="text-white/60 text-sm hover:text-white transition-colors">← Back to Portfolio</a>
          <div className="mt-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/80 text-xs mb-4">
              Portfolio Project · Not a Google Product
            </div>
            <h1 className="text-5xl font-black text-white leading-tight mb-4">
              AI-Powered Google Ads<br />Growth Advisor
            </h1>
            <p className="text-white/80 text-xl max-w-2xl leading-relaxed mb-8">
              An AI-powered marketing advisor that analyzes websites and advertising data to identify growth opportunities, reduce wasted spend, and generate executive-ready recommendations.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/projects/google-ads-advisor/demo"
                className="bg-white font-bold px-6 py-3 rounded-full text-sm hover:bg-gray-50 transition-colors"
                style={{ color: "#2d1b9e" }}
              >
                View Live Demo →
              </a>
              <a
                href="https://github.com/stevenmoore0425/my-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                View Code on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 space-y-12">

        {/* The Problem */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#2d1b9e" }}>The Problem</h2>
          <h3 className="text-2xl font-black text-gray-900 mb-4">SMBs spend millions on ads without knowing where growth opportunities exist</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Small and medium-sized businesses collectively spend billions on Google Ads each year. Most have access to detailed performance data — but lack the time, expertise, or resources to translate that data into actionable strategy. They see numbers, but not opportunities.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is exactly the gap that a skilled Account Strategist fills — analyzing data, spotting inefficiencies, and crafting recommendations that drive real business outcomes. This project demonstrates how AI can scale that expertise.
          </p>
        </div>

        {/* The Solution */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#2d1b9e" }}>The Solution</h2>
          <h3 className="text-2xl font-black text-gray-900 mb-6">AI-powered analysis that thinks like a senior strategist</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "📊", title: "Marketing Health Score", desc: "Holistic 0-100 score evaluating campaign structure, spend efficiency, and growth trajectory" },
              { icon: "🎯", title: "Opportunity Identification", desc: "AI identifies high-value growth opportunities based on business data, industry benchmarks, and search trends" },
              { icon: "💸", title: "Wasted Spend Analysis", desc: "Pinpoints inefficient keywords, search terms, and campaigns that are burning budget without results" },
              { icon: "🔑", title: "Keyword Strategy", desc: "Recommends new keywords and match types based on business goals and competitive landscape" },
              { icon: "🏠", title: "Landing Page Insights", desc: "Identifies conversion rate optimization opportunities based on current ad strategy" },
              { icon: "📋", title: "Executive Recommendations", desc: "Prioritized action plan organized by impact: High Impact, Medium Impact, and Quick Wins" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#2d1b9e" }}>How This Works</h2>
          <h3 className="text-2xl font-black text-gray-900 mb-6">Workflow architecture</h3>
          <div className="space-y-4">
            {[
              { step: "1", title: "Data Collection", desc: "User inputs business context (industry, spend, goals) and optionally uploads Google Ads CSV exports" },
              { step: "2", title: "Structured Prompt Engineering", desc: "Business data is formatted into a detailed prompt that instructs the AI model to act as a senior Google Ads strategist" },
              { step: "3", title: "AI Analysis", desc: "The AI model analyzes the data against industry best practices and generates structured JSON output covering all recommendation categories" },
              { step: "4", title: "Dashboard Rendering", desc: "The structured JSON is parsed and rendered into an executive-ready dashboard with score visualizations, prioritized recommendations, and detailed action plans" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 rounded-xl" style={{ background: "#f0eeff" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-white shrink-0" style={{ background: "#2d1b9e" }}>
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xs font-black uppercase tracking-widest mb-6" style={{ color: "#2d1b9e" }}>Built With</h2>
          <div className="flex flex-wrap gap-3">
            {["Next.js 16", "TypeScript", "TailwindCSS", "Node.js API Routes", "Docker", "Google Cloud Run", "Cloud Build", "Artifact Registry"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full border text-sm font-semibold" style={{ background: "#f0eeff", color: "#2d1b9e", borderColor: "#ddd8ff" }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#2d1b9e" }}>Why This Matters</h2>
          <h3 className="text-2xl font-black text-gray-900 mb-4">Demonstrating the intersection of AI, data analysis, and customer success</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            This project isn't just a technical demo — it mirrors the actual workflow of a Google Account Strategist or Customer Success Manager. It demonstrates practical skills that translate directly to enterprise technology sales roles:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Consultative Selling", desc: "Framing technical analysis as business outcomes" },
              { label: "Data-Driven Decision Making", desc: "Using real advertising data to generate actionable insights" },
              { label: "Executive Communication", desc: "Presenting findings in a clear, prioritized format" },
              { label: "AI Implementation", desc: "Practical application of LLMs to solve real business problems" },
              { label: "Customer Success", desc: "Understanding what customers need to grow" },
              { label: "Business Strategy", desc: "Translating data into prioritized action plans" },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <a
            href="/projects/google-ads-advisor/demo"
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-white text-lg hover:opacity-90 transition-all"
            style={{ background: "#2d1b9e" }}
          >
            Try the Live Demo →
          </a>
          <p className="text-gray-400 text-sm mt-4">No account required · Results in ~15 seconds</p>
        </div>

      </div>
    </div>
  );
}
