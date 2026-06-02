import { experience, profile, projects, strengths } from "@/lib/profile";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#f8f8f8' }}>

      {/* Hero */}
      <div className="hero-bg">
        <nav className="max-w-5xl mx-auto px-12 py-5 flex justify-between items-center">
          <a href="/" className="font-black text-xl">
            <span className="text-white">Steven </span>
            <span style={{ color: 'rgba(180,170,255,0.75)' }}>Moore</span>
          </a>
          <div className="flex items-center gap-8 text-sm" style={{ color: 'rgba(200,190,255,0.85)' }}>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="bg-white font-bold px-5 py-2 rounded-full text-sm hover:bg-indigo-50 transition-colors" style={{ color: '#2d1b9e' }}>
              Contact me
            </a>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-12 pt-12 pb-8 flex items-start justify-between gap-12">
          <div>
            <h1 className="font-black leading-none" style={{ fontSize: '6rem', lineHeight: 1 }}>
              <div className="text-white">Steven</div>
              <div style={{ color: 'rgba(170,155,255,0.7)' }}>Moore</div>
            </h1>
            <a href="#experience" className="inline-flex items-center mt-8 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-2.5 rounded-full text-sm transition-colors">
              My experience
            </a>
          </div>
          <div className="max-w-sm pt-8 text-right">
            <p className="text-white/90 text-lg leading-relaxed font-medium">
              I bring enterprise sales expertise and Google Cloud architecture knowledge together, helping companies grow and scale smarter.
            </p>
          </div>
        </div>
      </div>

      {/* About strip */}
      <div className="max-w-5xl mx-auto px-12 pt-20 pb-16 flex items-center gap-16">
        <div className="flex-1">
          <h2 className="text-2xl font-black text-gray-900 mb-4">I'm a Sr Account Manager & Enterprise Account Executive from Los Angeles.</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            With 8+ years driving revenue growth at Oracle, Uber, Edify, and FusionZone, I've built a track record of consistently exceeding quota and earning Presidents Club. Currently managing a $3M book of business as Sr Account Manager at Oracle NetSuite, and previously led enterprise account growth at FusionZone. My Google Cloud Professional Architect certification lets me bridge technical teams and business outcomes, a rare combination in enterprise sales.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="/about" className="font-bold px-5 py-2.5 rounded-full text-sm text-white hover:opacity-90 transition-colors" style={{ background: '#2d1b9e' }}>More about me</a>
            <a href="/resume.pdf" download="Steven_Moore_Resume.pdf" className="border border-gray-200 hover:border-indigo-400 text-gray-600 hover:text-indigo-700 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors">Download Resume</a>
          </div>
        </div>
        <div className="w-48 h-48 rounded-3xl overflow-hidden shrink-0 shadow-xl ring-4 ring-indigo-100">
          <img src="/headshot.JPEG" alt="Steven Moore" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-12 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {strengths.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">{s.label}</p>
              <p className="font-black text-gray-900 text-lg">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div style={{ background: '#f0f0f5' }} className="py-16" id="experience">
        <div className="max-w-5xl mx-auto px-12">
          <h2 className="text-2xl font-black text-gray-900 mb-10">Experience</h2>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #2d1b9e, transparent)' }}></div>
            <div className="space-y-5">
              {experience.map((role, index) => (
                <div key={role.company} className="relative pl-10">
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2"
                    style={index === 0 ? { background: '#2d1b9e', borderColor: '#6d5ae0', boxShadow: '0 0 10px rgba(45,27,158,0.4)' } : { background: 'white', borderColor: '#d1d5db' }}>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">{role.title}</h3>
                      <span className="text-xs text-gray-400 font-mono bg-gray-50 px-3 py-1 rounded-full border border-gray-100">{role.years}</span>
                    </div>
                    <p className="text-sm font-semibold mb-3" style={{ color: '#2d1b9e' }}>{role.company}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Certifications */}
      <div style={{ background: '#f0f0f5' }} className="py-16">
        <div className="max-w-5xl mx-auto px-12">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Certifications</h2>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-5 max-w-lg">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: '#f0eeff', border: '1px solid #ddd8ff' }}>
              <span className="font-black text-xl" style={{ color: '#2d1b9e' }}>✓</span>
            </div>
            <div>
              <p className="font-bold text-gray-900">Google Cloud Professional Cloud Architect</p>
              <p className="text-gray-400 text-sm mt-0.5">Verified · Google Cloud</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="py-20" id="contact">
        <div className="w-full px-12 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Want to connect?</h2>
          <p className="text-gray-500 mb-10 max-w-md mx-auto">Open to new roles, collaborations, and conversations.</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href={profile.links.linkedin} className="text-white font-bold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-colors" style={{ background: '#2d1b9e' }}>LinkedIn</a>
            <a href={profile.links.github} className="border border-gray-200 hover:border-indigo-300 text-gray-600 hover:text-indigo-700 font-semibold px-6 py-3 rounded-full text-sm transition-colors">GitHub</a>
            <a href={`mailto:${profile.links.email}`} className="border border-gray-200 hover:border-indigo-300 text-gray-600 hover:text-indigo-700 font-semibold px-6 py-3 rounded-full text-sm transition-colors">Email Me</a>
          </div>
        </div>
      </div>

      {/* Wave footer */}
      <div style={{ background: '#2d1b9e', marginTop: '60px' }} className="relative">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', marginTop: '-60px' }}>
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill="#2d1b9e"/>
          <path d="M0,80 C240,140 480,20 720,80 C960,140 1200,20 1440,80 L1440,120 L0,120 Z" fill="#1a0e6e" opacity="0.6"/>
        </svg>
        <div style={{ background: '#1a0e6e' }} className="py-10 text-center">
          <p className="text-white/40 text-xs">Built with Next.js · Hosted on Google Cloud · {new Date().getFullYear()}</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href={profile.links.github} className="text-white/50 hover:text-white transition-colors text-sm">GitHub</a>
            <a href={profile.links.linkedin} className="text-white/50 hover:text-white transition-colors text-sm">LinkedIn</a>
          </div>
        </div>
      </div>

    </div>
  );
}
