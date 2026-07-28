import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Pill, Phone, MapPin, Menu, X, Sun, Moon, ShoppingBag, Clock } from 'lucide-react';
import { useWhatsAppOrder } from '../context/WhatsAppOrderContext';

export default function Header() {
  const { openOrderForm } = useWhatsAppOrder();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Persistent theme logic
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    return 'light'; // Light theme default by primary philosophy
  });

  useEffect(() => {
    // Sync theme class to html tag
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Store', path: '/about' },
    { name: 'Services & Meds', path: '/services' },
    { name: 'Store Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="w-full font-sans sticky top-0 z-40 transition-all duration-200">
      
      {/* Emergency Ribbon Bar - Topmost context */}
      <div className="bg-emerald-700 dark:bg-emerald-950 text-white text-xs py-2 px-4 flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-emerald-800 dark:border-emerald-900/60 shadow-inner">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 justify-center md:justify-start">
          <span className="inline-flex items-center gap-1 font-bold">
            <Pill className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
            Licensed Pharmacy (Gaya, Bihar)
          </span>
          <span className="hidden sm:inline text-emerald-200">|</span>
          <span className="inline-flex items-center gap-1 text-emerald-100">
            <MapPin className="w-3 h-3 text-emerald-300" />
            Medical Road, Gaya, Bihar 823001
          </span>
        </div>
        
        <div className="flex items-center gap-4 justify-center md:justify-end font-semibold">
          <span className="inline-flex items-center gap-1 text-emerald-100">
            <Clock className="w-3 h-3 text-emerald-300" />
            Open Daily: 8:00 AM - 10:00 PM
          </span>
          <a 
            href="tel:06205874653" 
            className="bg-white/10 hover:bg-white/20 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white transition-all flex items-center gap-1 shrink-0"
          >
            <Phone className="w-3 h-3" />
            Support: 06205874653
          </a>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className={`w-full transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/95 backdrop-blur-md py-3 shadow-md border-slate-100 dark:border-slate-800' 
          : 'bg-white dark:bg-slate-900 py-4.5 border-slate-100 dark:border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo - Custom beautiful SVG pairing */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform duration-200">
              {/* Clean custom logo design */}
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <path d="M12 8V16M8 12H16" />
              </svg>
            </div>
            <div>
              <span className="block font-extrabold tracking-tight text-slate-900 dark:text-white text-xl uppercase leading-none">
                I.M.C Shop
              </span>
              <span className="block text-[10px] text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase mt-0.5">
                Genuine Medicine Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `text-sm font-bold tracking-wide transition-all hover:text-emerald-600 dark:hover:text-emerald-400 relative py-1 ${
                  isActive 
                    ? 'text-emerald-600 dark:text-emerald-400 font-extrabold after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600 dark:after:bg-emerald-400 after:rounded-full' 
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Practical Toolbar Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5 text-emerald-700" /> : <Sun className="w-5 h-5 text-amber-400" />}
            </button>

            {/* Sticky Order Button */}
            <button
              onClick={() => openOrderForm()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 active:bg-emerald-800 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow shadow-emerald-600/15 group"
            >
              <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Order Medicines
            </button>

            {/* Mobile Hamburger toggle button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:bg-slate-100"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Slide-Down menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-xl py-4 px-4 space-y-3 absolute top-full left-0 z-30 transition-all font-sans">
          <div className="space-y-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `block px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  isActive 
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 font-extrabold border-l-4 border-emerald-600 dark:border-emerald-500' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openOrderForm();
              }}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center text-sm flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              WhatsApp Quick Order
            </button>
            <a
              href="tel:06205874653"
              className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-center text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              Call Pharmacy Staff
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
