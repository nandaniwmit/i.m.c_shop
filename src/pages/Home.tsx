import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, CheckCircle, ArrowRight, ArrowUpRight, HelpCircle, Shield, Truck, Award, HeartHandshake, Eye } from 'lucide-react';
import { useWhatsAppOrder } from '../context/WhatsAppOrderContext';
import Reviews from '../components/Reviews';
import HealthTips from '../components/HealthTips';

export default function Home() {
  const { openOrderForm } = useWhatsAppOrder();

  useEffect(() => {
    // Dynamic SEO update for the Home page
    document.title = "I.M.C SHOP | Medical Store in Gaya, Bihar - Genuine Medicines";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Your trusted retail pharmacy on Medical Road, Gaya. Offering genuine prescription medicines, OTC drugs, healthcare items, and personal care at genuine prices.');
    }
  }, []);

  const featuredServices = [
    { title: "Prescription Medicines", desc: "100% authentic drugs procured from approved medical distributors with batch number tracing.", icon: "🩺" },
    { title: "Healthcare Devices", desc: "Reliable electronic BP monitors, blood glucose meters, pulse oximeters, and nebulizers.", icon: "🔌" },
    { title: "OTC Wellness Products", desc: "Wide range of daily vitamins, immune-boosters, organic herbal supplements, and dietary items.", icon: "💊" },
    { title: "Surgical Supplies", desc: "Premium bandages, orthopedic braces, disposable syringes, and clinical hygiene products.", icon: "🩹" },
    { title: "Baby & Mother Care", desc: "Baby milk formulas, safe diapers, dermatologically-approved baby lotions, and nursing essentials.", icon: "🍼" },
    { title: "Chronic Disease Kits", desc: "Specialized packs for Diabetes, Hypertension, Asthma, and Thyroid at discounted rates.", icon: "❤️" }
  ];

  const featuredProducts = [
    { name: "Accu-Chek Active Glucose Meter", brand: "Roche Diagnostics", mrp: 1599, discPrice: 1349, img: "🩺", rating: 4.8 },
    { name: "Digital Infrared Thermometer", brand: "BPL Medical", mrp: 2100, discPrice: 1650, img: "🌡️", rating: 4.7 },
    { name: "Dr. Trust Compressor Nebulizer", brand: "Dr. Trust", mrp: 1850, discPrice: 1490, img: "💨", rating: 4.9 },
    { name: "Volini Pain Relief Spray (100g)", brand: "Sun Pharma", mrp: 320, discPrice: 285, img: "🧴", rating: 4.6 }
  ];

  const faqs = [
    { q: "Do you deliver medicines within Gaya?", a: "Yes, we offer fast doorstep delivery to Kareem Ganj, AP Colony, Medical Road, and surrounding neighborhoods in Gaya. Place your order on WhatsApp!" },
    { q: "Is a medical prescription mandatory?", a: "For prescription-only drugs (Schedule H / X), a valid signed doctor's prescription is legally mandatory. You can upload it through our WhatsApp form. OTC wellness products do not require any prescription." },
    { q: "Are the medicines sold here genuine?", a: "Absolutely. I.M.C SHOP is a fully licensed pharmacy. We source 100% of our products directly from certified manufacturer representatives with clear batch invoice records." }
  ];

  return (
    <div className="font-sans text-slate-800 dark:text-slate-100 bg-slate-50/50 dark:bg-slate-950/20">
      
      {/* 1. Hero Banner Section with clean medical layouts */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white pt-20 pb-24 md:py-32">
        {/* Background abstract medical patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-teal-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-emerald-100 text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
              Your Trusted Gaya Pharmacy Partner
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Genuine Medicines & Healthcare Needs
            </h1>
            
            <p className="text-base md:text-lg text-emerald-50 max-w-xl leading-relaxed">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices. Served with expert care on Medical Road, Gaya.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => openOrderForm()}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 active:bg-slate-100 text-emerald-800 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/10 cursor-pointer transition-all"
              >
                <MessageSquare className="w-4.5 h-4.5 text-emerald-600" />
                WhatsApp Order
              </button>
              
              <a
                href="tel:06205874653"
                className="px-6 py-3.5 rounded-xl bg-transparent border border-white/40 hover:bg-white/10 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4.5 h-4.5 text-emerald-300" />
                Call Store: 06205874653
              </a>

              <a
                href="https://maps.google.com/?q=Medical+Road,+Kareem+Ganj,+Gaya,+Bihar+823001"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-emerald-100 font-semibold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <MapPin className="w-4.5 h-4.5" />
                Get Directions
              </a>
            </div>

            {/* Micro stats ribbon */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-md">
              <div>
                <span className="block text-2xl font-bold text-white">100%</span>
                <span className="text-[10px] text-emerald-200 uppercase tracking-wider font-semibold">Genuine Drugs</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">10K+</span>
                <span className="text-[10px] text-emerald-200 uppercase tracking-wider font-semibold">Patients Served</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">Daily</span>
                <span className="text-[10px] text-emerald-200 uppercase tracking-wider font-semibold">Home Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Floating Card Illustration */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden text-left">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-emerald-300 animate-pulse" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    <path d="M12 8V16M8 12H16" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base">I.M.C SHOP Gaya</h3>
                  <p className="text-xs text-emerald-200">Registered Pharmacy No. DL-823001</p>
                </div>
              </div>

              {/* Simulated prescription checkout slip */}
              <div className="bg-slate-900/60 rounded-2xl p-5 border border-white/5 space-y-4">
                <div className="flex justify-between items-center text-xs text-emerald-300 font-bold tracking-wider uppercase border-b border-white/10 pb-2">
                  <span>Prescription Order</span>
                  <span>Direct checkout</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">📍 Delivery address:</span>
                    <span className="text-white font-semibold">Medical Road, Gaya</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">📦 Delivery time:</span>
                    <span className="text-emerald-300 font-semibold">Under 3 hours</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">🛡️ Safety code:</span>
                    <span className="text-white font-semibold">Seal Verified</span>
                  </div>
                </div>

                <button
                  onClick={() => openOrderForm()}
                  className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Submit Prescription
                </button>
              </div>

              {/* Small trust badge */}
              <div className="mt-6 flex items-center gap-2 justify-center text-xs text-emerald-200 font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-300" />
                <span>Verified Pharmacist on Duty</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Short About Preview */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative text-left space-y-4">
            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Legacy of Reliable Healthcare in Gaya Since Inception
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              For several years, I.M.C SHOP has been a pillar of the local healthcare network on Medical Road, Gaya. We set up our store with a single, clear purpose: to bridge the gap between people and original, affordable life-saving medicines.
            </p>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
              We verify every manufacturer's drug batch and preserve temperature-sensitive medications under continuous cold chain systems.
            </p>
            
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 dark:hover:bg-emerald-900 font-bold rounded-xl text-sm transition-all"
              >
                Read Our Story
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </div>
          </div>

          {/* Grid of 4 beautiful indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-left">
              <Shield className="w-8 h-8 text-emerald-600 mb-4" />
              <h4 className="font-bold text-slate-850 dark:text-slate-200 text-base">100% Original Products</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Direct procurement from licensed brands prevents counterfeit entries.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-left">
              <Truck className="w-8 h-8 text-emerald-600 mb-4" />
              <h4 className="font-bold text-slate-850 dark:text-slate-200 text-base">Doorstep Delivery</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Prompt local prescription dispatch across Gaya for home-bound patients.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-left">
              <Award className="w-8 h-8 text-emerald-600 mb-4" />
              <h4 className="font-bold text-slate-850 dark:text-slate-200 text-base">Licensed & Compliant</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Strict adherence to drugs department licensing guidelines for your safety.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-left">
              <HeartHandshake className="w-8 h-8 text-emerald-600 mb-4" />
              <h4 className="font-bold text-slate-850 dark:text-slate-200 text-base">Caring Staff support</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Qualified local pharmacists who answer queries clearly and respect patients.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Featured Services (Maximum 6) */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="text-left">
              <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
                What We Offer
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
                Complete Pharmacy Solutions under one roof
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline shrink-0"
            >
              Explore Category Services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((serv, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-left flex flex-col justify-between hover:shadow-md hover:border-emerald-100 dark:hover:border-slate-700 transition-all group"
              >
                <div>
                  <span className="block text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    {serv.icon}
                  </span>
                  <h4 className="font-bold text-slate-850 dark:text-slate-200 text-base group-hover:text-emerald-600 transition-colors">
                    {serv.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed">
                    {serv.desc}
                  </p>
                </div>
                
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => openOrderForm(serv.title)}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    Inquire Now <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Featured High-Demand Healthcare Products */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
              Essential Store Stock
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
              Featured Health Devices & Over-The-Counter Essentials
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Browse hot-selling medical items. Select any product to order instantly on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod, index) => (
              <div
                key={index}
                className="p-5 bg-slate-50/50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 rounded-2xl flex flex-col justify-between text-left hover:bg-white dark:hover:bg-slate-900 hover:shadow-md transition-all group"
              >
                <div>
                  {/* Mock image container */}
                  <div className="w-full aspect-square rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-4xl mb-4 group-hover:scale-105 transition-transform duration-300">
                    {prod.img}
                  </div>
                  
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">
                    {prod.brand}
                  </span>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                    {prod.name}
                  </h4>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                      ₹{prod.discPrice}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ₹{prod.mrp}
                    </span>
                    <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded">
                      -{Math.round(((prod.mrp - prod.discPrice) / prod.mrp) * 100)}%
                    </span>
                  </div>

                  <button
                    onClick={() => openOrderForm(prod.name)}
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs transition-all uppercase tracking-wider"
            >
              <Eye className="w-4 h-4 text-emerald-600" />
              Check Full Live Stock & Meds
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Customer Reviews Preview Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reviews />
        </div>
      </section>

      {/* 6. FAQ Preview */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
              Got Questions?
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"
              >
                <h4 className="font-extrabold text-slate-850 dark:text-slate-200 text-sm flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  {faq.q}
                </h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2.5 pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Have other inquiries? Visit our Contact Page
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. CTA Home Banner */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-8 md:p-12 text-left relative overflow-hidden shadow-lg shadow-emerald-950/10">
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-5 pointer-events-none bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:20px_20px]" />
          
          <div className="max-w-2xl relative z-10 space-y-4">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Need Urgent Medicines Delivered to Your Home?
            </h3>
            <p className="text-sm text-emerald-100 max-w-lg leading-relaxed">
              Skip the queues on Medical Road. Simply upload your prescription or search stock online and order via WhatsApp. Our delivery executive will drop them at your gate.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => openOrderForm()}
                className="bg-white hover:bg-emerald-50 text-emerald-800 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                Order via WhatsApp
              </button>
              <a
                href="tel:06205874653"
                className="bg-emerald-800/40 hover:bg-emerald-800/60 border border-white/20 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                Call: 06205874653
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Latest Health Tips Preview Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
              Stay Informed
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
              Latest Health & Wellness Guidance
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Simple medicine guidelines and health monitoring practices reviewed by our in-store pharmacologists.
            </p>
          </div>

          <HealthTips />

        </div>
      </section>

      {/* 9. Newsletter Block */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <span className="text-[10px] font-extrabold uppercase text-emerald-600 dark:text-emerald-400 tracking-widest">
              Weekly Health Newsletter
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
              Subscribe for Smart Tips & Local Medicine Stock Alerts
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              Get notified when seasonal vaccine campaigns, child care supplement camps, or fresh stocks arrive on Medical Road. No spam. Unsubscribe anytime.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! You are subscribed to I.M.C SHOP alerts."); }} className="max-w-md mx-auto pt-4 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
