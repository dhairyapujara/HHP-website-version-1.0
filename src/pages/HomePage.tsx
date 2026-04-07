import { Rocket, Building2, Wallet, ClipboardList, Navigation, GraduationCap, PenTool, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-[921px] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0 opacity-20">
          <img alt="Scientific Research" className="w-full h-full object-cover grayscale brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9MbtXlGEhzVQKRjQTCYS9zaq1ZF-G_ZbnH9gOibU-vzPkTN2IM4hxxlQU0ggZ0Tqq6I6s5XDCuctI-MAahJkXNgSGD5vARa_0U_40MwavtD3dhSFZ2YUwdPXAQPDjzZIT4a6zBewdOHBYb2kqo1_yJCYclkXBFrk_-GGOjmj9a2Be4leLH3tQWn2gKl9CNyL4el6rLwdANWnWyhselVICTIzWfQQabCjD83YhKLNKmC_uqVs6HnTfYxOOw7OBSBWe1Qz7Lnxq9eE" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-screen-2xl">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold tracking-widest uppercase mb-8">
              Institutional Architecture
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-background mb-8 leading-[0.9]">
              Bridging the Gap Between <span className="text-primary italic">Breakthrough Science</span> and Market Reality.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-12">
              We deploy strategic capital and operational architecture to turn academic innovation into accessible, preventive healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-headline font-bold text-lg hover:shadow-xl transition-all">
                Our Strategy
              </button>
              <button className="border border-outline text-on-surface px-8 py-4 rounded-lg font-headline font-bold text-lg hover:bg-surface-container-low transition-all">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* The Why Section */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
                <img alt="Architecture and Finance" className="rounded-xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-2EuMflzytUvAkuBJppQaec1DeMKe3Bj0NHgtMBPjrBjwAhgAzpFC6L8f9ueie_FSyOiKfLRVW-q6p2gLuwU8PC48sqDNT9wKGAI5pbRZ5WRxlPGCU7i_4P_Ov3kDgwe8WGAg-wSQqvkvq0hpRyEVQXZW3PjpifvWexoL5SCgbcrif6pdinBq5SntrPlcjgZvF26E0oIzoStVcGjYFJcd24rdBjwgKD-QQUEAkx3nulJ0WBFzp0NpoJl4cKekFPLvto_JH0pM5cw" />
                <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-xl shadow-lg z-20 max-w-xs border-l-4 border-primary">
                  <p className="text-on-surface font-headline font-bold leading-tight">
                    "Solving the platforming gap for high-science founders."
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-background">
                The Innovation is Here. <br />The Architecture is Missing.
              </h2>
              <div className="h-1 w-24 bg-primary rounded-full"></div>
              <p className="text-lg text-on-surface-variant leading-relaxed font-light">
                The U.S. generates world-class intellectual property in diagnostics, therapeutics, and computational biology, yet much of it remains trapped in the lab. Founders face a "platforming gap" between early Seed grants and institutional Series A.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed font-light">
                We built the Human Health Platform to bridge this gap. We don't just invest; we actively architect the commercial, regulatory, and financial pathways required to bring clinical-grade solutions to the public.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Ycenter Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="bg-surface-container-low rounded-2xl p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm font-label font-bold text-primary uppercase tracking-[0.2em]">Our Ecosystem</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-background mb-8 leading-tight">
                Powered by <a className="inline-block align-middle ml-2" href="https://ycenter.org" target="_blank" rel="noreferrer"><img alt="Ycenter Logo" className="h-12 md:h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ujRFtoLKyMouR6WrasVfRQhLKyOp5Q0FNMbF-n6xTTpIwSa-RmiblI6MJ1kxgQ5lnXiUsG1HM8TDbyGLvUGMbMUeTeoNK2hLD2dqs6yG2zmfa3PdGfzoKo7p-QLLbTwr8fVO1M1fXWfguoql7EhJ3Uq3VSWUi-gqOQBrvK18jd82ytCoEEd-zz0hpe4v4DO5LReUbzF9w25vgGoUoOH5m2lEP2KD9q0A2MiLcuDtqKfuGgD9FplX7UO5PyJ3gTD9yXPJDXjr6Hf6Q" /></a>
              </h2>
              <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-8">
                The Human Health Platform is powered by Ycenter, an award-winning global consulting firm led by biomedical engineer Dhairya Pujara. By bridging the gap between Fortune 500 operational excellence (Abbott, Merck) and the agile demands of university-born startups, Ycenter provides the practical, early-stage Go-to-Market (GTM) reality required to scale clinical innovation.
              </p>
              <div className="flex flex-wrap items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                  <span className="font-headline font-bold text-2xl tracking-tighter">Abbott</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-headline font-bold text-2xl tracking-tighter">MERCK</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white rounded-xl shadow-sm flex items-center justify-center p-8 text-center border border-outline-variant">
                <div className="space-y-4 flex flex-col items-center">
                  <Rocket className="w-10 h-10 text-primary" />
                  <p className="font-headline font-bold text-sm">Agile Startup Strategy</p>
                </div>
              </div>
              <div className="aspect-square bg-white rounded-xl shadow-sm flex items-center justify-center p-8 text-center border border-outline-variant mt-8">
                <div className="space-y-4 flex flex-col items-center">
                  <Building2 className="w-10 h-10 text-primary" />
                  <p className="font-headline font-bold text-sm">Fortune 500 Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The What Section: Dual Engine */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-5xl font-headline font-extrabold tracking-tighter text-on-background mb-6">Our Dual Engine</h2>
            <p className="text-on-surface-variant text-lg">A integrated approach to capital deployment and operational excellence.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Venture Capital Card */}
            <div className="bg-surface-container-lowest p-12 rounded-xl border-l-8 border-primary shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <Wallet className="w-10 h-10 text-primary fill-primary/20" />
                <h3 className="text-3xl font-headline font-bold text-on-background">Venture Capital</h3>
              </div>
              <p className="text-sm font-label font-bold text-primary uppercase tracking-widest mb-4">Series A Preferred-Equity</p>
              <p className="text-on-surface-variant leading-relaxed mb-8 text-lg font-light">
                We deploy strategic capital into companies advancing prevention, diagnostics, and data-driven care. We focus on scientifically validated, capital-efficient companies that have dual-use applications across civilian and strategic defense infrastructures.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-on-surface">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  Clinical-Grade Diagnostics
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  Biocomputational Platforms
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  Preventive Infrastructure
                </li>
              </ul>
              <a className="inline-flex items-center gap-2 font-headline font-bold text-primary group-hover:gap-4 transition-all" href="#">
                Investment Thesis <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            {/* Advisory Card */}
            <div className="bg-surface-container-high p-12 rounded-xl shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <ClipboardList className="w-10 h-10 text-primary fill-primary/20" />
                <h3 className="text-3xl font-headline font-bold text-on-background">Venture Advisory</h3>
              </div>
              <p className="text-sm font-label font-bold text-primary uppercase tracking-widest mb-4">Institutional Strategy</p>
              <p className="text-on-surface-variant leading-relaxed mb-8 text-lg font-light">
                We partner directly with founders, professor-inventors, and University Commercialization Offices to navigate the messy reality of getting to market.
              </p>
              <div className="space-y-6">
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex items-start gap-4">
                  <Navigation className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-headline font-bold text-on-background mb-2">GTM & Regulatory Navigation</h4>
                    <p className="text-sm text-on-surface-variant">FDA approval guidance and targeted Go-To-Market strategies for complex clinical products.</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-headline font-bold text-on-background mb-2">University IP Strategy</h4>
                    <p className="text-sm text-on-surface-variant">Strategic classification of academic IP portfolios (Hot, Cold, Shelved) to identify hidden value.</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex items-start gap-4">
                  <PenTool className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-headline font-bold text-on-background mb-2">Capital Architecture</h4>
                    <p className="text-sm text-on-surface-variant">Structuring complex transitions, including royalty deals, fair market buyout analysis, and call options.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Spotlight Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm font-label font-bold text-primary uppercase tracking-[0.2em]">Active Engagement</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-background mb-6 leading-tight">
                Accelerating Clinical Deployment with <span className="text-primary">Rizlab Health</span>
              </h2>
              <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-8">
                We are actively supporting Rizlab Health through our integrated fund and advisory model. By combining strategic capital with operational architecture, we are accelerating the deployment of their breakthrough rapid blood analysis platform (Cyto-Sense) into both civilian and defense healthcare infrastructures.
              </p>
              <div>
                <a href="https://www.rizlabhealth.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-headline font-bold text-primary hover:gap-4 transition-all">
                  Visit Rizlab Health <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img alt="Rizlab Health Technology" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-5xl font-headline font-extrabold tracking-tighter text-on-background mb-6">Leadership</h2>
            <p className="text-on-surface-variant text-lg">Uniting clinical precision with institutional financial authority.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Leader 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant flex flex-col md:flex-row gap-8 items-center md:items-start group hover:shadow-lg transition-all duration-300">
              <div className="w-32 rounded-lg bg-surface-container-high overflow-hidden shrink-0 h-44">
                <img alt="Stephen Ippolito" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all object-top" src="https://wwd.com/wp-content/uploads/2018/05/stephen-ippolito-bandier.jpg" />
              </div>
              <div className="space-y-3 text-center md:text-left">
                <h3 className="text-2xl font-headline font-extrabold text-on-background">Stephen Ippolito</h3>
                <p className="text-primary font-label font-bold text-xs uppercase tracking-widest">Managing Partner</p>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  15+ years in investment banking, growth equity, and operating leadership. Expert in M&A, structuring, and governance.
                </p>
              </div>
            </div>
            {/* Leader 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant flex flex-col md:flex-row gap-8 items-center md:items-start group hover:shadow-lg transition-all duration-300">
              <div className="w-32 rounded-lg bg-surface-container-high overflow-hidden shrink-0 h-44">
                <img alt="Dhairya Pujara" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.squarespace-cdn.com/content/v1/674d251d873ca25dc3403e5c/8aa97eed-fe0e-4ce6-9d5d-c5543be27475/Dhairya+Pujara+headshot.jpg?format=2500w" />
              </div>
              <div className="space-y-3 text-center md:text-left">
                <h3 className="text-2xl font-headline font-extrabold text-on-background">Dhairya Pujara</h3>
                <p className="text-primary font-label font-bold text-xs uppercase tracking-widest">Venture Partner</p>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  Biomedical engineer, founder of Ycenter. Expert in complex systems innovation and global healthcare deployments (Abbott, Merck).
                </p>
              </div>
            </div>
            
            {/* Ecosystem of Experts */}
            <div className="md:col-span-2 bg-primary-container p-8 rounded-xl shadow-sm flex flex-col md:flex-row gap-8 items-center text-center md:text-left group hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <h3 className="text-2xl font-headline font-extrabold text-on-primary-container">Ecosystem of Experts</h3>
                <p className="text-primary-fixed font-label font-bold text-xs uppercase tracking-widest">20+ Advisors & Institutional Investors</p>
                <p className="text-on-primary-container/90 leading-relaxed text-sm max-w-4xl">
                  Our core leadership is backed by a robust network of specialized advisors and institutional investors. This ecosystem provides comprehensive support across critical growth vectors, including FDA clearance pathways, strategic capital formation, advanced IP architecture, and defense sector procurement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Callout */}
      <section className="py-24 bg-on-background text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img alt="Data Visualization" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwDSdfTYK7XYyUZmm_5KVgneVd5Zna7aG1aq0lzyhSjspDaTtyk97iVzrtEulK_19KqA_fDr5t11GH8h6yOOZsEWf8l95O-2qbpWZ9K_L4w2pwLDb1Ncx9JitixkhL_bRuzEVB865G9bwZvO0xmkoPiwPBGCScQpTCgIXrOpBlbJcxvBd9m7OG2cJOkqqN83F1JIWbnT6MdZVA7-FIPYyK7-x6Chm3Ufb8PNOhbv1jXVApmGIjkjvoVPEHtTPY1G2XJpPv5haiJEc" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-screen-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-headline font-bold mb-6">Built by Clinicians, <br />Scaled by Capital Experts.</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We understand the precision of the lab and the authority of the market. Our platform is the bridge that unites them.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-5xl font-headline font-extrabold text-primary-fixed mb-2">$500M+</div>
                <div className="text-xs font-label uppercase tracking-widest text-slate-500">Capital Advised</div>
              </div>
              <div>
                <div className="text-5xl font-headline font-extrabold text-primary-fixed mb-2">12+</div>
                <div className="text-xs font-label uppercase tracking-widest text-slate-500">Core Institutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
