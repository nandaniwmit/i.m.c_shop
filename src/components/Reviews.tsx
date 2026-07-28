import { Star, CheckCircle, Quote } from 'lucide-react';
import { Review } from '../types';

export default function Reviews() {
  const reviewsList: Review[] = [
    {
      id: "rev-001",
      name: "Amit Kumar Verma",
      location: "Kareem Ganj, Gaya",
      rating: 5,
      comment: "I.M.C Shop has been our family's trusted pharmacy on Medical Road for years. They always have chronic illness medicines like insulin and blood pressure pills in stock. Very polite staff and honest pricing.",
      date: "July 24, 2026"
    },
    {
      id: "rev-002",
      name: "Dr. S. K. Pathak",
      location: "AP Colony, Gaya",
      rating: 5,
      comment: "Highly reliable pharmacy store. They stock genuine medicines from reputed manufacturers. I often recommend my patients to check stock here because they follow strict storage guidelines for temperature-sensitive drugs.",
      date: "June 15, 2026"
    },
    {
      id: "rev-003",
      name: "Rina Kumari Devi",
      location: "Kandwa, Gaya",
      rating: 5,
      comment: "Ordering on WhatsApp was extremely simple. I sent the doctor's prescription list in the morning and they delivered it right to our gate in Kareem Ganj by afternoon. Highly recommended for elders!",
      date: "May 28, 2026"
    }
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase bg-emerald-50 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full border border-emerald-100/60 dark:border-emerald-900/30">
          ⭐⭐⭐⭐⭐ Trust & Care
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
          What Gaya Residents Say About I.M.C SHOP
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
          Verified patient testimonials and customer feedback regarding our pharmaceutical services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviewsList.map((rev) => (
          <div
            key={rev.id}
            className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative flex flex-col justify-between group hover:shadow-md hover:border-emerald-100 dark:hover:border-slate-800 transition-all"
          >
            <div>
              {/* Quote Mark Icon */}
              <Quote className="absolute right-6 top-6 w-8 h-8 text-slate-100 dark:text-slate-800 group-hover:text-emerald-50 dark:group-hover:text-emerald-950/20 transition-colors pointer-events-none" />
              
              {/* Stars Row */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed mb-6">
                "{rev.comment}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 font-extrabold flex items-center justify-center text-sm uppercase">
                {rev.name.substring(0, 2)}
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5 leading-none">
                  {rev.name}
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified Customer" />
                </h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                  {rev.location} • {rev.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
