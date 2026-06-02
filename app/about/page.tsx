import { profile } from "@/lib/profile";

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: '#f8f8f8' }}>

      {/* Hero with diagonal cut */}
      <div className="hero-bg">
        <nav className="relative z-10 w-full px-12 py-5 flex justify-between items-center">
          <a href="/" className="font-black text-xl tracking-tight">
            <span className="text-white">Steven </span>
            <span style={{ color: 'rgba(180,170,255,0.75)' }}>Moore</span>
          </a>
          <div className="flex items-center gap-8 text-sm" style={{ color: 'rgba(200,190,255,0.85)' }}>
            <a href="/#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="/#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="/about" className="text-white font-bold">About</a>
            <a href="/#contact"
              className="bg-white font-bold px-5 py-2 rounded-full text-sm hover:bg-indigo-50 transition-colors"
              style={{ color: '#2d1b9e' }}>
              Contact me
            </a>
          </div>
        </nav>

        <div className="relative z-10 w-full px-12 pt-12 pb-8 flex flex-col items-center text-center">
          <img
            src="/headshot.JPEG"
            alt="Steven Moore"
            className="w-28 h-28 rounded-2xl object-cover ring-4 ring-white/20 shadow-xl mb-4"
          />
          <h1 className="text-5xl font-black text-white leading-tight">Steven Moore</h1>
          <p className="mt-2 text-lg font-medium" style={{ color: 'rgba(180,170,255,0.85)' }}>
            Sr Account Manager and Enterprise Account Executive
          </p>
          <p className="mt-1 text-sm" style={{ color: 'rgba(200,190,255,0.6)' }}>Los Angeles, CA · Open to new roles</p>
        </div>
      </div>

      {/* White body */}
      <div className="max-w-5xl mx-auto px-12 pt-24 pb-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6">About</h2>
          <div className="space-y-5 text-gray-500 leading-relaxed">
            <p>
              I'm Steven Moore, a Sr Account Manager and Enterprise Account Executive with a Google Cloud
              Professional Cloud Architect certification and 8+ years of experience helping companies grow
              revenue, adopt technology, and solve complex business problems. Currently managing a $3M book
              of business at Oracle NetSuite, and previously drove account growth and expansion at FusionZone.
              I've consistently ranked at the top of my teams, earning Presidents Club multiple times.
            </p>
            <p>
              What sets me apart is the combination of a strong sales background with a technical foundation.
              My GCP Cloud Architect certification isn't just a credential. It means I can have real conversations
              with product, engineering, and infrastructure teams, and translate technical solutions into business
              outcomes for customers.
            </p>
            <p>
              I'm currently looking for my next role where I can bring together enterprise sales expertise and
              cloud architecture knowledge to drive meaningful impact, ideally at a company pushing the boundaries
              of what cloud infrastructure can do.
            </p>
            <p className="text-gray-400 italic text-sm">
              Outside of work I enjoy exploring LA, staying active, and continuously sharpening my cloud skills
              through hands-on GCP projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href="/resume.pdf" download="Steven_Moore_Resume.pdf"
              className="text-white font-bold px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition-colors"
              style={{ background: '#2d1b9e' }}>
              Download Resume
            </a>
            <a href={profile.links.linkedin}
              className="border border-gray-200 hover:border-indigo-300 text-gray-600 hover:text-indigo-700 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${profile.links.email}`}
              className="border border-gray-200 hover:border-indigo-300 text-gray-600 hover:text-indigo-700 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors">
              Email
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Certifications</h3>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: '#f0eeff', border: '1px solid #ddd8ff' }}>
                <span className="font-black" style={{ color: '#2d1b9e' }}>✓</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Google Cloud Professional Cloud Architect</p>
                <p className="text-gray-400 text-xs mt-0.5">Verified · Google Cloud</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Education</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <p className="font-bold text-gray-900 text-sm">American Academy of Arts</p>
                <p className="text-gray-400 text-xs mt-1">Bachelor of Arts · 2012-2015</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <p className="font-bold text-gray-900 text-sm">Santa Monica College</p>
                <p className="text-gray-400 text-xs mt-1">Associate, Business Administration · 2015-2017</p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Enterprise SaaS Sales", "Consultative Sales", "Cloud Architecture", "Contract Negotiation",
                "Customer Success", "Forecasting", "Value-Based Selling", "GCP", "Business Intelligence",
                "Terraform", "Cloud Run", "BigQuery"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-lg border text-sm font-medium"
                  style={{ background: '#f0eeff', color: '#2d1b9e', borderColor: '#ddd8ff' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        <p>Built with Next.js · Hosted on Google Cloud · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
