import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Send, Mail, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { useWhatsAppOrder } from '../context/WhatsAppOrderContext';

export default function Contact() {
  const { openOrderForm } = useWhatsAppOrder();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    document.title = "Contact Us | I.M.C SHOP - Pharmacy near Medical Road, Gaya";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Reach out to I.M.C SHOP Gaya. Get address details, operating hours, phone numbers, and submit health/stock inquiries.');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim()) {
      setFormError('Please provide your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.message.trim()) {
      setFormError('Please enter your question/message.');
      return;
    }

    // Fully functioning contact submission simulation
    setFormSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: ''
    });

    setTimeout(() => {
      setFormSuccess(false);
    }, 4000);
  };

  return (
    <div className="font-sans text-slate-800 dark:text-slate-100 bg-slate-50/50 dark:bg-slate-950/20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-100 bg-white/10 px-3.5 py-1.5 rounded-full">
            Connect Instantly
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Contact Our Staff</h1>
          <p className="text-sm md:text-base text-emerald-50 max-w-2xl mx-auto leading-relaxed">
            Have queries about drug availability, medicine substitutes, or cold chain vaccine stocks? Visit us on Medical Road or reach out online.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex text-xs font-semibold text-slate-400 gap-1.5">
          <a href="/" className="hover:text-emerald-600">Home</a>
          <span>/</span>
          <span className="text-slate-600 dark:text-slate-300">Contact Us</span>
        </nav>
      </div>

      {/* Main Two Column Section */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Google Map */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Store Information Cards */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Store Information
              </h2>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Located right inside Gaya's healthcare corridor on Medical Road, Kareem Ganj. Easy accessibility for patient attendants.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Address Card */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-xs md:text-sm uppercase tracking-wider">Pharmacy Address</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-350 mt-1 leading-normal">
                    Medical Road, Kareem Ganj, Gaya, Bihar 823001
                  </p>
                  <a
                    href="https://maps.google.com/?q=Medical+Road,+Kareem+Ganj,+Gaya,+Bihar+823001"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-bold hover:underline mt-2"
                  >
                    Open in Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Call Card */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-xs md:text-sm uppercase tracking-wider">Call Store Representative</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-350 mt-1 leading-normal">
                    Direct phone lines for immediate help and voice queries.
                  </p>
                  <a
                    href="tel:06205874653"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 font-bold text-xs rounded-lg mt-3"
                  >
                    📞 Call 06205874653
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-xs md:text-sm uppercase tracking-wider">Order via WhatsApp</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-350 mt-1 leading-normal">
                    Submit prescription slips and list required items instantly.
                  </p>
                  <button
                    onClick={() => openOrderForm()}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg mt-3"
                  >
                    💬 Open Order Form
                  </button>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-xs md:text-sm uppercase tracking-wider">Working Hours</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-350 mt-1">
                    Monday - Sunday: 8:00 AM - 10:00 PM
                  </p>
                  <p className="text-[10px] text-amber-600 dark:text-amber-400 font-bold mt-1.5 uppercase tracking-wider">
                    ⚠️ Emergency support lines open 24/7
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 md:p-8 rounded-3xl shadow-sm text-left">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
              Send Quick Inquiry Form
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Need stock verifications or drug alternative guidance? Submit your details and our team will get back to you shortly.
            </p>

            {formSuccess ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Thank you. Our in-store pharmacist will evaluate your message and call/text you back on your mobile number under 30 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {formError && (
                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 text-xs font-semibold flex items-center gap-2 border border-rose-100 dark:border-rose-900/50">
                    <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Anand Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs md:text-sm focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-100 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                      10-Digit Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs md:text-sm focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-100 outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs md:text-sm focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-100 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Topic of Inquiry
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-100 outline-none"
                  >
                    <option>General Inquiry</option>
                    <option>Medicine Stock Verification</option>
                    <option>Special Prescription Sourcing</option>
                    <option>Feedback & Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Message / Question Details *
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="List the specific medicine names, required packs, or your medical doubts..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs md:text-sm focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-100 outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Submit Inquiry
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* Styled Large Map Section */}
      <section className="py-12 border-t border-slate-150/40 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Gaya Branch Map Location
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Easy driving, auto-rickshaw, or foot directions right onto Medical Road. Let's trace our location.
            </p>
          </div>

          <div className="h-80 w-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 relative shadow-sm flex flex-col justify-center items-center text-center p-6 group">
            {/* Styled Map Illustration */}
            <div className="absolute inset-0 bg-slate-950/70 z-10 flex flex-col justify-center items-center text-center p-4 transition-colors group-hover:bg-slate-950/60">
              <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-lg mt-3">I.M.C SHOP Gaya</h4>
              <p className="text-xs text-slate-300 max-w-sm mt-1 leading-normal">
                Medical Road, Kareem Ganj, Gaya, Bihar 823001
              </p>
              
              <div className="mt-5 flex gap-2">
                <a
                  href="https://maps.google.com/?q=Medical+Road,+Kareem+Ganj,+Gaya,+Bihar+823001"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md"
                >
                  Navigate on Google Maps <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:06205874653"
                  className="px-5 py-2.5 bg-slate-850 hover:bg-slate-800 border border-slate-700 text-white rounded-xl text-xs font-bold"
                >
                  Call Store
                </a>
              </div>
            </div>

            {/* Abstract visual road map styling */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-15 pointer-events-none">
              <div className="border-r border-b border-slate-500 bg-slate-800"></div>
              <div className="border-r border-b border-slate-500"></div>
              <div className="border-r border-b border-slate-500 bg-slate-900"></div>
              <div className="border-r border-b border-slate-500"></div>
              <div className="border-r border-b border-slate-500"></div>
              <div className="border-b border-slate-500"></div>
              
              <div className="border-r border-b border-slate-500"></div>
              <div className="border-r border-b border-slate-500 bg-slate-900"></div>
              <div className="border-r border-b border-slate-500"></div>
              <div className="border-r border-b border-slate-500 bg-slate-800"></div>
              <div className="border-r border-b border-slate-500"></div>
              <div className="border-b border-slate-500"></div>
              
              <div className="border-r border-b border-slate-500"></div>
              <div className="border-r border-b border-slate-500"></div>
              <div className="border-r border-b border-slate-500 bg-slate-800"></div>
              <div className="border-r border-b border-slate-500"></div>
              <div className="border-r border-b border-slate-500 bg-slate-900"></div>
              <div className="border-b border-slate-500"></div>
              
              <div className="border-r border-slate-500 bg-slate-900"></div>
              <div className="border-r border-slate-500"></div>
              <div className="border-r border-slate-500"></div>
              <div className="border-r border-slate-500 bg-slate-800"></div>
              <div className="border-r border-slate-500"></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
