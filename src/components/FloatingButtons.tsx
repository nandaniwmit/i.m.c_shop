import { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';
import { useWhatsAppOrder } from '../context/WhatsAppOrderContext';

export default function FloatingButtons() {
  const { openOrderForm } = useWhatsAppOrder();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 font-sans select-none pointer-events-none">
      
      {/* 1. Back To Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-white shadow-lg pointer-events-auto transition-all cursor-pointer border border-white/10 flex items-center justify-center animate-fade-in"
          title="Scroll to Top"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* 2. Floating Click to Call Button */}
      <a
        href="tel:06205874653"
        className="p-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 pointer-events-auto transition-all cursor-pointer flex items-center justify-center"
        title="Call Pharmacy Staff"
        aria-label="Call store"
      >
        <Phone className="w-5.5 h-5.5" />
      </a>

      {/* 3. Floating WhatsApp Trigger Button */}
      <button
        onClick={() => openOrderForm()}
        className="p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 pointer-events-auto transition-all cursor-pointer flex items-center justify-center relative group"
        title="Order via WhatsApp"
        aria-label="WhatsApp checkout"
      >
        {/* Breathing ring pulse */}
        <span className="absolute inset-0 rounded-full border-4 border-emerald-400 animate-ping opacity-25 pointer-events-none"></span>
        <MessageSquare className="w-6 h-6 fill-white text-emerald-500" />
        
        {/* Tooltip badge */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-900 dark:bg-slate-800 text-white font-extrabold text-[10px] tracking-wide uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow border border-white/5">
          Order Medicines Now
        </span>
      </button>

    </div>
  );
}
