import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Heart, ArrowUpRight, Facebook, Send } from 'lucide-react';

export default function Footer() {
  // === GLOBAL WMIT TRACKING ENGINE ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    const cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    const visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    const sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Contact info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-extrabold shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path d="M12 8V16M8 12H16" />
                </svg>
              </div>
              <div>
                <span className="block font-extrabold text-white text-lg uppercase tracking-wide">I.M.C SHOP</span>
                <span className="block text-[9px] text-emerald-400 font-bold uppercase tracking-wider">Licensed Pharmacy</span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Your trusted partner for genuine medicines, life-saving drugs, surgical equipments, and premium wellness essentials in Gaya, Bihar.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Medical Road, Kareem Ganj, Gaya, Bihar 823001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:06205874653" className="hover:text-emerald-400 transition-colors">06205874653</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="mailto:contact@imcshopgaya.com" className="hover:text-emerald-400 transition-colors">contact@imcshopgaya.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Working Hours & Location Map Preview */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase border-b border-slate-800 pb-2">
              Store Hours
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-500" />
                <div>
                  <p className="font-bold text-slate-200">Daily Pharmacy Operations</p>
                  <p className="text-slate-400">Monday - Sunday: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="p-3 bg-slate-900/50 border border-slate-900 rounded-xl space-y-1">
                <p className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Emergency Support
                </p>
                <p className="text-[11px] text-slate-400">Call 06205874653 for priority medical requirements outside business hours.</p>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <li>
                <Link to="/" className="hover:text-emerald-400 hover:underline transition-all flex items-center gap-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 hover:underline transition-all flex items-center gap-1">
                  About Store
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 hover:underline transition-all flex items-center gap-1">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 hover:underline transition-all flex items-center gap-1">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 hover:underline transition-all flex items-center gap-1">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Micro Call-to-action */}
            <div className="pt-2">
              <h5 className="text-xs font-bold uppercase text-slate-400 mb-2">Connect with us</h5>
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-slate-900 hover:bg-emerald-600 hover:text-white rounded-lg transition-all border border-slate-800 text-slate-400"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/916205874653"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-slate-900 hover:bg-emerald-600 hover:text-white rounded-lg transition-all border border-slate-800 text-slate-400"
                  aria-label="Connect on WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map Anchor & Local Info */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase border-b border-slate-800 pb-2">
              Gaya Branch Map
            </h4>
            <div className="rounded-xl overflow-hidden border border-slate-900 h-28 bg-slate-900 relative group">
              {/* Mock premium mini map design */}
              <div className="absolute inset-0 bg-slate-900/60 flex flex-col justify-center items-center text-center p-3 z-10 transition-colors group-hover:bg-slate-900/40">
                <MapPin className="w-6 h-6 text-rose-500 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Medical Road, Gaya</span>
                <span className="text-[9px] text-slate-300">Near Kareem Ganj</span>
              </div>
              <a 
                href="https://maps.google.com/?q=Medical+Road,+Kareem+Ganj,+Gaya,+Bihar+823001" 
                target="_blank" 
                rel="noreferrer"
                className="absolute inset-0 w-full h-full z-20 flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-slate-950/80 to-transparent"
              >
                <span className="text-[10px] bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-1 px-3.5 rounded-md flex items-center gap-1 shadow-sm">
                  Get Directions <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>
              {/* Abstract layout grid representing map block */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 opacity-20 pointer-events-none">
                <div className="border-r border-b border-slate-500"></div>
                <div className="border-r border-b border-slate-500 bg-slate-800"></div>
                <div className="border-r border-b border-slate-500"></div>
                <div className="border-b border-slate-500"></div>
                <div className="border-r border-b border-slate-500"></div>
                <div className="border-r border-b border-slate-500"></div>
                <div className="border-r border-b border-slate-500 bg-slate-800"></div>
                <div className="border-b border-slate-500"></div>
                <div className="border-r border-slate-500"></div>
                <div className="border-r border-slate-500"></div>
                <div className="border-r border-slate-500"></div>
                <div></div>
              </div>
            </div>
            <p className="text-[10px] text-slate-500 leading-normal">
              Located near prime medical centers on Medical Road for quick emergency access.
            </p>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="border-t border-slate-900 pt-6 pb-6 text-[11px] text-slate-500 space-y-2">
          <div className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-900">
            <ShieldAlert className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed text-left">
              <strong>Disclaimer:</strong> All medical information published on this website is intended as a general portfolio preview of I.M.C SHOP Gaya. This website is not a substitute for professional medical advice, diagnosis, or treatment. Prescription medications are sold strictly on presentation of a valid prescription issued by a registered medical practitioner.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start text-xs text-slate-400 pt-1">
            <Link to="/about" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-emerald-400 transition-colors">Refund & Return Policy</Link>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left flex items-center gap-1">
            &copy; {new Date().getFullYear()} <span className="font-bold text-white uppercase">I.M.C SHOP</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1 text-center sm:text-right font-medium text-slate-500">
            <span>Developed by</span>
            <a 
              href="https://main.webmakerit.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-0.5 font-bold transition-all"
            >
              WMIT <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
