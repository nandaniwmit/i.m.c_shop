import { useEffect } from 'react';
import { Shield, Award, Target, Eye, Heart, Compass, History, HelpCircle, CheckSquare } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = "About Us | I.M.C SHOP - Trust & Medical Heritage in Gaya";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Understand the core values, history, and pharmaceutical standards at I.M.C SHOP Gaya. Read our mission, timeline, and owner message.');
    }
  }, []);

  const coreValues = [
    { title: "Sourcing Authenticity", desc: "Every single vial, capsule, and device is sourced directly with verifiable manufacturer invoices.", icon: <Shield className="w-6 h-6 text-emerald-600" /> },
    { title: "Continuous Preservation", desc: "Strict adherence to storage temperatures for vaccines and insulin via back-up power cooling.", icon: <Compass className="w-6 h-6 text-emerald-600" /> },
    { title: "Empathetic Advice", desc: "Our pharmacists spend time with patients explaining dosage, drug interactions, and storage.", icon: <Heart className="w-6 h-6 text-emerald-600" /> }
  ];

  const milestones = [
    { year: "Initial Sourcing Setup", title: "Inception on Medical Road", desc: "Founded with a small, focused inventory of essential life-saving therapies to support Gaya clinical hubs." },
    { year: "State-of-the-Art Upgrade", title: "Cold Chain Cold-Storage Integration", desc: "Established continuous refrigeration zones and power reserves to guarantee insulin and specialized vaccine efficacy." },
    { year: "Digital Enablement", title: "WhatsApp Order & Checker Engine", desc: "Introduced digital inventory check and instant WhatsApp-based checkout to make elder care medicine procurement seamless." }
  ];

  return (
    <div className="font-sans text-slate-800 dark:text-slate-100 bg-slate-50/50 dark:bg-slate-950/20">
      
      {/* Page Header Banner */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-100 bg-white/10 px-3.5 py-1.5 rounded-full">
            Our Legacy & Standards
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">About I.M.C SHOP</h1>
          <p className="text-sm md:text-base text-emerald-50 max-w-2xl mx-auto leading-relaxed">
            Discover the patient-first philosophy, rigorous quality checks, and local heritage that define our pharmacy operations on Medical Road, Gaya.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex text-xs font-semibold text-slate-400 gap-1.5">
          <a href="/" className="hover:text-emerald-600">Home</a>
          <span>/</span>
          <span className="text-slate-600 dark:text-slate-300">About Store</span>
        </nav>
      </div>

      {/* Business Story */}
      <section className="py-12 md:py-20 bg-white dark:bg-slate-900 mt-6 rounded-3xl max-w-7xl mx-auto border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-md">
              Established with care
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              The Lifeline of Gaya: How We Started
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Medical Road, Kareem Ganj has long been the medical epicenter of Gaya, Bihar. Thousands of patients visit daily seeking health recoveries. Yet, locating verifiable, genuine medicines at reasonable rates under correct storage conditions was often a challenge.
            </p>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              I.M.C SHOP was founded to address this critical gap. Rather than stocking generic brands indiscriminately, we specialized in high-efficacy therapeutics, critical diabetes management protocols, respiratory care, pediatric medications, and specialized surgical equipment.
            </p>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
              Today, we serve as the primary retail node for families and medical professionals seeking certified, cold-chain-preserved pharmaceuticals.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {/* Store Highlights Counter Grid */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-left space-y-4">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm border-b border-slate-200 dark:border-slate-700 pb-2">
                Certified Store Overview
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-xs">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Licensed by Drugs Control Administration (Bihar State)</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>24/7 Power Backup with cooling units for insulin & injectables</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Interactive barcode stock checking ensures no expired drugs</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Qualified B.Pharm & D.Pharm professionals on duty</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-left space-y-4 shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              To supply 100% genuine medical supplies and personal health aids to Gaya's community. We guarantee that every medicine sold possesses the maximum therapeutic efficacy, handled responsibly by certified personnel under accurate clinical storage conditions.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-left space-y-4 shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              To remain the most trusted, digitall-integrated independent pharmacy in Gaya, known for setting benchmark standardizations in medicine handling, patient consulting, local doorstep delivery, and prescription verification.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
              How We Function
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
              Values That Drive Our Everyday Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {coreValues.map((val, idx) => (
              <div key={idx} className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-center">
                  {val.icon}
                </div>
                <h4 className="font-extrabold text-slate-850 dark:text-slate-200 text-base">{val.title}</h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
            Our Timeline
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Our Professional Journey
          </h2>
        </div>

        <div className="relative border-l-2 border-emerald-100 dark:border-emerald-950 max-w-3xl mx-auto pl-6 md:pl-8 space-y-12 text-left">
          {milestones.map((mil, idx) => (
            <div key={idx} className="relative">
              {/* Chronological dot */}
              <div className="absolute -left-10 md:-left-12 top-1 w-6 h-6 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900 shadow-sm flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <span className="inline-block text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-md mb-2">
                  {mil.year}
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base md:text-lg">
                  {mil.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {mil.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Owner Message block */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 rounded-b-3xl max-w-7xl mx-auto mb-12 shadow-sm border">
        <div className="px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 font-extrabold flex items-center justify-center text-3xl mb-4 border border-emerald-100/60 dark:border-emerald-800/20 shadow-sm">
              IMC
            </div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-base leading-none">Management Team</h4>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider font-semibold">I.M.C SHOP Owner Group</p>
          </div>

          <div className="lg:col-span-8 space-y-4 text-left border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 pt-6 lg:pt-0 lg:pl-10">
            <span className="text-xl font-bold text-emerald-600 block">"Your recovery is our standard"</span>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
              "We understand that behind every medicine name on a prescription lies a family seeking wellness, an anxious parent caring for an infant, or a child procuring life-support tablets for elderly parents. Medicine retail is not just commerce; it is a sacred trust. That is why we personally inspect drug invoice channels and ensure that cold preservation never halts. Thank you Gaya for trusting us."
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
