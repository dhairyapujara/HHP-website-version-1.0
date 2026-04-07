import { BarChart3, Quote, Landmark, Microscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="high-tech clinical laboratory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_-evyur8k749g8_j0g3Bv8g6kjSxlOjBkbW5r195ENH3f2Va2eOPHYfmu09N1k1Ik_iWTrt5mDDLNyBJNzQmLEgxvYDWqpxEk8A0ZsI6yZejvjYDRPaDvhp076CJvYcn5PEd6fDLpJCTsDTbxuh59IZPiv9sGd6J_y7y73Hxu3YtzfJuBfoUt1Sqw351qpMvbAKCVLfSNA3SqYMkii7SlQ8th1Nqb0I1jPKFFFX7a3RyuKtw395Imd6rm3cTOcetPeGW_DHe8gyY" />
          <div className="absolute inset-0 bg-gradient-to-r from-on-background/90 via-on-background/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold tracking-widest uppercase font-label">
              Strategic Insight • Platform Architecture
            </span>
            <h1 className="text-white font-headline font-extrabold text-5xl md:text-7xl leading-[1.1] mb-8 tracking-tighter">
              Why Brilliant Science Dies in the Lab
            </h1>
            <p className="text-surface-variant text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              Closing the "Platforming Gap" between breakthrough discovery and clinical delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Content Area */}
      <section className="max-w-screen-2xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Sidebar: Key Takeaways (Asymmetric Design) */}
          <aside className="lg:col-span-4 order-2 lg:order-1 space-y-8">
            <div className="bg-surface-container-low p-8 rounded-xl">
              <h3 className="font-headline font-bold text-primary text-xl mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                Critical Dimensions
              </h3>
              <ul className="space-y-6">
                <li className="group">
                  <div className="text-xs font-bold text-outline uppercase tracking-widest mb-1">01</div>
                  <h4 className="font-headline font-semibold text-on-surface group-hover:text-primary transition-colors">The Architecture Void</h4>
                  <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">Discovery is only 10% of the battle. The remaining 90% is the platform that carries it to the patient.</p>
                </li>
                <li className="group">
                  <div className="text-xs font-bold text-outline uppercase tracking-widest mb-1">02</div>
                  <h4 className="font-headline font-semibold text-on-surface group-hover:text-primary transition-colors">Capital Disconnect</h4>
                  <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">Traditional VC models often prioritize "exits" over "enduring infrastructure," leaving innovation stranded.</p>
                </li>
                <li className="group">
                  <div className="text-xs font-bold text-outline uppercase tracking-widest mb-1">03</div>
                  <h4 className="font-headline font-semibold text-on-surface group-hover:text-primary transition-colors">Operational Friction</h4>
                  <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">Siloed data and fragmented supply chains act as a tax on human life.</p>
                </li>
                <li className="group">
                  <div className="text-xs font-bold text-outline uppercase tracking-widest mb-1">04</div>
                  <h4 className="font-headline font-semibold text-on-surface group-hover:text-primary transition-colors">The Fix: Platformization</h4>
                  <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">Unified delivery models that treat health tech as a coherent ecosystem rather than a collection of tools.</p>
                </li>
              </ul>
            </div>
            
            {/* Sidebar CTA */}
            <div className="bg-primary p-8 rounded-xl text-on-primary">
              <h4 className="font-headline font-bold text-lg mb-4">Request the Framework</h4>
              <p className="text-sm text-primary-fixed/80 mb-6">Join our quarterly executive briefing on clinical infrastructure.</p>
              <button className="w-full bg-surface-container-lowest text-primary py-3 rounded-lg font-bold text-sm hover:bg-primary-fixed transition-colors">Download PDF</button>
            </div>
          </aside>

          {/* Main Article Body */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-12">
            <div className="prose prose-slate max-w-none">
              <p className="text-2xl font-body text-on-surface leading-relaxed first-letter:text-7xl first-letter:font-headline first-letter:font-extrabold first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                In the current landscape of human health, we are witnessing a paradox: scientific discovery is accelerating at an exponential rate, yet the actual delivery of these solutions to patients is trapped in a linear, industrial-age bottleneck. This "Platforming Gap" represents the single greatest barrier to longevity and health equity in the 21st century.
              </p>
              
              <div className="my-12">
                <h2 className="font-headline font-extrabold text-3xl mb-6 text-on-surface tracking-tight">The Myth of the Lone Discovery</h2>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                  We celebrate the moment of 'Eureka' in the laboratory, but that moment is functionally useless without the architecture of execution. Clinical precision requires more than just a molecular breakthrough; it requires a financial and operational vehicle capable of navigating regulatory minefields and global supply constraints.
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  Most brilliant science dies not because it was wrong, but because it was unsupported by a robust commercialization platform. We are effectively trying to run 5G software on steam-powered hardware.
                </p>
              </div>

              {/* Pull Quote Section */}
              <div className="relative py-12 px-8 my-16 bg-surface-container-lowest rounded-2xl shadow-sm border-l-8 border-primary overflow-hidden">
                <Quote className="w-32 h-32 text-primary-fixed-variant/20 absolute -top-6 -right-6 rotate-180 select-none" />
                <blockquote className="relative z-10">
                  <p className="font-headline italic font-bold text-4xl text-on-surface leading-tight">
                    "The Innovation is Here. The Architecture is Missing."
                  </p>
                </blockquote>
              </div>

              <div className="space-y-8">
                <h2 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight">Bridging the Chasm</h2>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  Fixing the platforming gap requires a fundamental shift in how we deploy capital. Instead of funding isolated products, we must fund the interconnected systems that support them. This includes:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-surface-container rounded-lg">
                    <Landmark className="w-8 h-8 text-primary mb-4" />
                    <h5 className="font-bold font-headline mb-2">Financial Authority</h5>
                    <p className="text-sm text-on-surface-variant">Sophisticated venture models that align investor horizons with clinical timelines.</p>
                  </div>
                  <div className="p-6 bg-surface-container rounded-lg">
                    <Microscope className="w-8 h-8 text-primary mb-4" />
                    <h5 className="font-bold font-headline mb-2">Clinical Precision</h5>
                    <p className="text-sm text-on-surface-variant">Infrastructure that allows for rapid, iterative testing and real-world evidence generation.</p>
                  </div>
                </div>

                <p className="text-lg text-on-surface-variant leading-relaxed">
                  At The Human Health Platform, we believe that by building the 'Digital Curator' model of health investment, we can ensure that no life-saving discovery is left behind in the lab.
                </p>
              </div>

              {/* Author Attribution */}
              <div className="mt-20 pt-12 border-t border-outline-variant flex flex-col md:flex-row gap-8 items-center">
                <div className="flex -space-x-4">
                  <div className="w-16 h-16 rounded-full border-4 border-surface bg-slate-200 overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Stephen Ippolito" src="https://wwd.com/wp-content/uploads/2018/05/stephen-ippolito-bandier.jpg" />
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-surface bg-slate-200 overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Dhairya Pujara" src="https://images.squarespace-cdn.com/content/v1/674d251d873ca25dc3403e5c/8aa97eed-fe0e-4ce6-9d5d-c5543be27475/Dhairya+Pujara+headshot.jpg?format=2500w" />
                  </div>
                </div>
                <div>
                  <p className="text-on-surface font-headline font-bold text-lg">Stephen Ippolito & Dhairya Pujara</p>
                  <p className="text-on-surface-variant text-sm uppercase tracking-widest font-label font-medium">Founding Partners, The Human Health Platform</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Insights / Newsletter Bento */}
      <section className="bg-surface-container-low py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="font-headline font-extrabold text-4xl text-on-surface tracking-tighter">Continuing the Dialogue</h2>
              <p className="text-on-surface-variant mt-2">Further reading on the evolution of health infrastructure.</p>
            </div>
            <Link to="#" className="text-primary font-bold flex items-center gap-2 group">
              Explore Insights 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl hover:shadow-lg transition-shadow">
              <span className="text-xs font-bold text-primary mb-4 block">Venture Advisory</span>
              <h3 className="font-headline font-bold text-xl mb-4 leading-snug">The 2024 Longevity Capital Report</h3>
              <p className="text-on-surface-variant text-sm mb-6">Analyzing the shift from reactive to proactive healthcare investments.</p>
              <Link to="#" className="text-on-surface font-semibold text-sm underline decoration-primary underline-offset-4">Read Article</Link>
            </div>
            
            {/* Related 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl hover:shadow-lg transition-shadow">
              <span className="text-xs font-bold text-primary mb-4 block">Clinical Precision</span>
              <h3 className="font-headline font-bold text-xl mb-4 leading-snug">Rethinking Clinical Trial Logistics</h3>
              <p className="text-on-surface-variant text-sm mb-6">How decentralized platforms are accelerating market entry by 40%.</p>
              <Link to="#" className="text-on-surface font-semibold text-sm underline decoration-primary underline-offset-4">Read Article</Link>
            </div>
            
            {/* Newsletter Form (Bento Style) */}
            <div className="bg-primary-container p-8 rounded-xl text-on-primary-container flex flex-col justify-between">
              <div>
                <h3 className="font-headline font-bold text-xl mb-2">The Weekly Curator</h3>
                <p className="text-sm opacity-80 mb-6">Strategic intelligence delivered to your inbox every Monday.</p>
              </div>
              <div className="space-y-3">
                <input className="w-full bg-white/10 border-none rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-primary-fixed px-4 py-3" placeholder="Email Address" type="email" />
                <button className="w-full bg-white text-primary-container py-3 rounded-lg font-bold hover:bg-surface-container-lowest transition-colors">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
