import { useEffect } from 'react';
import { Pill, Activity, ShieldCheck, Heart, ArrowUpRight, HelpCircle } from 'lucide-react';
import { useWhatsAppOrder } from '../context/WhatsAppOrderContext';
import MedicineStockChecker from '../components/MedicineStockChecker';

export default function Services() {
  const { openOrderForm } = useWhatsAppOrder();

  useEffect(() => {
    document.title = "Services & Medicine Stock | I.M.C SHOP Gaya";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Check real-time medicine stock on Medical Road, Gaya. Discover our clinical categories including prescription medicines, OTC drugs, and maternal care.');
    }
  }, []);

  const serviceCategories = [
    {
      id: "cat-1",
      title: "Prescription Medicines",
      desc: "Authentic, licensed pharmaceuticals sourced exclusively with verified distributor batches. We carry major brands for chronic conditions.",
      icon: "🩺",
      tags: ["Diabetic Care (Metformin, Glimepiride)", "Cardiology (Telmisartan, Atorvastatin)", "Antibiotics (Amoxicillin, Azithromycin)", "Neurology & Respiratory"],
      ctaText: "Order Prescription Meds"
    },
    {
      id: "cat-2",
      title: "Healthcare Devices",
      desc: "Accurate clinical self-monitoring devices with direct product warranty support in Gaya.",
      icon: "🔌",
      tags: ["Digital Blood Pressure Monitors", "Glucometers & Test Strips", "Compressor Nebulizers", "Infrared Thermometers"],
      ctaText: "Order Health Devices"
    },
    {
      id: "cat-3",
      title: "OTC Wellness & Supplements",
      desc: "Premium vitamins and general health capsules to support active daily metabolic and defense profiles.",
      icon: "💊",
      tags: ["B-Complex & Multivitamin Tablets", "Vitamin D3 (60K Chewable Packs)", "Zinc & Vitamin C Supplements", "Calcium & Joint Nutrition"],
      ctaText: "Order Supplements"
    },
    {
      id: "cat-4",
      title: "Surgical & Clinical Supplies",
      desc: "Sterilized dressings, support braces, and hygienic disposables for clinical or post-surgery home recovery.",
      icon: "🩹",
      tags: ["Crepe Bandages & Micro-pore Tapes", "Disposable Syringes & Cannulas", "Knee, Wrist & Lumbar Braces", "Clinical Hand Rubs & Mask Packs"],
      ctaText: "Order Surgical Supplies"
    },
    {
      id: "cat-5",
      title: "Baby & Mother Care",
      desc: "Hypoallergenic skin ointments, premium dietary formulas, and nursery essentials curated for baby safety.",
      icon: "🍼",
      tags: ["Stage Infant Milk Formulas", "Premium Diapers & Wet Wipes", "Gentle Baby Lotions & Oils", "Maternal Supplement Powders"],
      ctaText: "Order Baby Care"
    },
    {
      id: "cat-6",
      title: "Dermato Personal Care",
      desc: "Doctor-approved moisturizers, restorative sunscreens, and safe face cleansing ranges.",
      icon: "🧴",
      tags: ["Cetaphil Dry Skin Cleanser", "Sebamed Baby & Adult Ranges", "Moisturizing Lotions & Aloe Gel", "Acne & Sebum Control Care"],
      ctaText: "Order Personal Care"
    }
  ];

  return (
    <div className="font-sans text-slate-800 dark:text-slate-100 bg-slate-50/50 dark:bg-slate-950/20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-100 bg-white/10 px-3.5 py-1.5 rounded-full">
            Explore Store Inventory
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Services & Medicines Stock</h1>
          <p className="text-sm md:text-base text-emerald-50 max-w-2xl mx-auto leading-relaxed">
            Verify stock availability instantly on our digital inventory checker or browse store medical categories below before placing an order.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex text-xs font-semibold text-slate-400 gap-1.5">
          <a href="/" className="hover:text-emerald-600">Home</a>
          <span>/</span>
          <span className="text-slate-600 dark:text-slate-300">Services & Stock</span>
        </nav>
      </div>

      {/* EXCLUSIVE FEATURE: Live Medicine Stock Checker */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker onSelectMedicineForOrder={openOrderForm} />
      </section>

      {/* Category Wise Services Breakdown */}
      <section className="py-12 md:py-20 bg-white dark:bg-slate-900 border-t border-slate-150/40 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
              Full Store Categories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
              Clinical Services & Product Categories
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Learn about our main stock groups and medical support programs running daily near Kareem Ganj.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat) => (
              <div
                key={cat.id}
                className="p-6 md:p-8 bg-slate-50/60 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-3xl flex flex-col justify-between text-left group hover:bg-white dark:hover:bg-slate-900 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-200">
                      {cat.icon}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/40 py-1 px-2.5 rounded-lg">
                      <ShieldCheck className="w-3.5 h-3.5" /> Checked
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {cat.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="mt-5 space-y-2">
                    <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">Popular in Gaya:</span>
                    <ul className="space-y-1.5">
                      {cat.tags.map((tag, idx) => (
                        <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => openOrderForm(cat.title)}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm shadow-emerald-600/10"
                  >
                    {cat.ctaText}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Emergency Stock Inquiries */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 text-left relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
          <div className="absolute right-0 bottom-0 top-0 w-1/4 opacity-10 pointer-events-none bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:16px_16px]" />
          
          <div className="max-w-xl space-y-2">
            <h3 className="text-xl md:text-2xl font-extrabold text-white flex items-center gap-2">
              <Activity className="w-6 h-6 text-emerald-400 animate-pulse" />
              Unable to locate a specialized drug?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our Medical Road branch maintains special direct channels with oncology, critical cardiac therapy, and neurological medicine distributors. Submit your prescription via WhatsApp, and we can organize express state procurement for you under 24 hours.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => openOrderForm("Special Direct Sourcing")}
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
            >
              Inquire Now
            </button>
            <a
              href="tel:06205874653"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              Call Manager
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
