import React, { useState, useEffect } from 'react';
import { X, Send, Phone, MessageSquare, Upload, Calendar, Check, AlertCircle } from 'lucide-react';
import { useWhatsAppOrder } from '../context/WhatsAppOrderContext';

export default function WhatsAppOrderModal() {
  const { isFormOpen, prefilledMedicine, closeOrderForm } = useWhatsAppOrder();
  
  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: '',
    hasPrescription: 'No',
    message: '',
    preferredTime: 'Anytime (9:00 AM - 9:00 PM)'
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isFormOpen) {
      setFormData(prev => ({
        ...prev,
        medicineName: prefilledMedicine || prev.medicineName
      }));
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFormOpen, prefilledMedicine]);

  if (!isFormOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
      setFormData(prev => ({ ...prev, hasPrescription: 'Yes' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Quick Validation
    if (!formData.customerName.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!formData.mobileNumber.trim() || formData.mobileNumber.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.address.trim()) {
      setError('Please provide your delivery address in Gaya.');
      return;
    }
    if (!formData.medicineName.trim()) {
      setError('Please specify the medicine names required.');
      return;
    }

    // Format WhatsApp Message
    const businessWhatsApp = '916205874653'; // Formatted 06205874653 for India API
    const messageTemplate = `Hello I.M.C SHOP
Medicine Order
-----------------------------------
Customer Name: ${formData.customerName}
Phone: ${formData.mobileNumber}
Email: ${formData.email || 'N/A'}
Medicine Required: ${formData.medicineName}
Address: ${formData.address}
Prescription: ${formData.hasPrescription}${prescriptionFile ? ` (${prescriptionFile.name})` : ''}
Preferred Delivery Time: ${formData.preferredTime}
Notes/Message: ${formData.message || 'None'}`;

    const encodedText = encodeURIComponent(messageTemplate);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${businessWhatsApp}&text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      closeOrderForm();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end font-sans">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={closeOrderForm}
      />

      {/* Slide-over Panel */}
      <div className="relative w-full max-w-lg h-full bg-white dark:bg-slate-900 shadow-2xl flex flex-col z-10 transition-transform duration-300">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 bg-emerald-600 dark:bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <MessageSquare className="w-6 h-6 text-emerald-100 animate-pulse" />
            <div>
              <h3 className="font-bold text-lg">Order via WhatsApp</h3>
              <p className="text-xs text-emerald-100 dark:text-slate-400">Easy checkout in 60 seconds</p>
            </div>
          </div>
          <button 
            onClick={closeOrderForm}
            className="p-1.5 rounded-full hover:bg-emerald-700 dark:hover:bg-slate-800 transition-colors text-white"
            aria-label="Close panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {success ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Redirecting to WhatsApp...</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                Your order is structured! Please click send in the WhatsApp window to finalize.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Info banner */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                <span className="font-bold text-emerald-600 dark:text-emerald-400">⚡ Fast & Genuine:</span> We deliver original medicines with cash/UPI on delivery across Gaya. Upload your prescription or list the items below.
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 text-xs font-semibold flex items-center gap-2 border border-rose-100 dark:border-rose-900/50">
                  <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Customer Name *
                </label>
                <input
                  type="text"
                  required
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-100 outline-none"
                />
              </div>

              {/* Dual Column Contacts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="10-digit number"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-100 outline-none"
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
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-100 outline-none"
                  />
                </div>
              </div>

              {/* Medicine items */}
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Medicines Required *
                </label>
                <textarea
                  required
                  name="medicineName"
                  rows={2}
                  value={formData.medicineName}
                  onChange={handleInputChange}
                  placeholder="Specify medicine name, brand & required strip/tablet quantity..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-100 outline-none resize-none"
                />
              </div>

              {/* Delivery Address */}
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Full Delivery Address (Gaya) *
                </label>
                <textarea
                  required
                  name="address"
                  rows={2}
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="House No, Road Name, Landmark, Gaya, Bihar 823001"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-100 outline-none resize-none"
                />
              </div>

              {/* Prescription Attachment Simulation */}
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Do you have a Prescription?
                </label>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {['No', 'Yes'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, hasPrescription: option }))}
                      className={`py-2 px-4 text-xs font-bold rounded-xl border transition-all text-center ${
                        formData.hasPrescription === option
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-400 font-extrabold'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {option === 'Yes' ? '🟢 Yes, I have a copy' : '⚪ No, it is OTC/I know names'}
                    </button>
                  ))}
                </div>

                {formData.hasPrescription === 'Yes' && (
                  <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <input
                      type="file"
                      id="prescription-file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="prescription-file" className="cursor-pointer flex flex-col items-center justify-center">
                      <Upload className="w-6 h-6 text-emerald-600 mb-1.5" />
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        {prescriptionFile ? 'File selected: ' + prescriptionFile.name : 'Select or drop Prescription Image/PDF'}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1">Accepts PNG, JPG, PDF up to 10MB</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Preferred Time & Note */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Preferred Delivery Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-100 outline-none"
                  >
                    <option>Anytime (9:00 AM - 9:00 PM)</option>
                    <option>Morning (9:00 AM - 1:00 PM)</option>
                    <option>Afternoon (1:00 PM - 5:00 PM)</option>
                    <option>Evening (5:00 PM - 9:00 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Additional Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="e.g. Ring doorbell, bring change..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-100 outline-none"
                  />
                </div>
              </div>

            </form>
          )}
        </div>

        {/* Footer Buttons */}
        {!success && (
          <div className="px-6 py-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSubmit}
              className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all text-sm"
            >
              <Send className="w-4 h-4" />
              Send Order via WhatsApp
            </button>
            <a
              href="tel:06205874653"
              className="py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              Call Store Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
