import { FileText, Clock, ChevronRight } from 'lucide-react';
import { HealthTip } from '../types';

export default function HealthTips() {
  const tips: HealthTip[] = [
    {
      id: "tip-001",
      title: "Understanding Prescription vs OTC Medicines",
      excerpt: "What is the difference and why is a doctor's signature mandatory for schedule drugs?",
      content: "Prescription medications (like antibiotics, cardiac drugs, or neuro medications) require precision dosing. Unsupervised consumption leads to drug resistance or dangerous side effects, whereas OTC medicines can be safely bought with pharmacist advice.",
      category: "Dosage",
      date: "July 28, 2026",
      readTime: "3 min read"
    },
    {
      id: "tip-002",
      title: "How to Store Temperature-Sensitive Medicines",
      excerpt: "Keeping your insulin, syrups, and vaccines fully effective during hot Gaya summers.",
      content: "Many medications lose their potency if exposed to heat above 25°C. Ensure insulin is placed in the refrigerator door (never freeze). Keep standard capsules in dry, cool boxes away from direct bathroom moisture.",
      category: "Wellness",
      date: "July 12, 2026",
      readTime: "4 min read"
    },
    {
      id: "tip-003",
      title: "Preventing Seasonal Dust Allergies in Bihar",
      excerpt: "Effective prevention tips to combat asthma and bronchial irritants during changing dry weather.",
      content: "Ensure you wash your face after outdoor transit. Use prescribed anti-allergic pills at fixed hours. Keep an active ORS solution handy if dealing with simultaneous heat stress.",
      category: "Prevention",
      date: "June 25, 2026",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="space-y-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <article
            key={tip.id}
            className="group flex flex-col justify-between bg-slate-50/50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 hover:bg-white dark:hover:bg-slate-900 hover:shadow-md hover:border-emerald-100 dark:hover:border-emerald-950 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-lg">
                  {tip.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  {tip.readTime}
                </span>
              </div>

              <h4 className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-base md:text-lg mb-2">
                {tip.title}
              </h4>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                {tip.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">{tip.date}</span>
              <button className="text-xs font-bold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Full Guide
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
