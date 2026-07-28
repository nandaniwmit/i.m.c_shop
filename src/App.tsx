import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WhatsAppOrderProvider } from './context/WhatsAppOrderContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppOrderModal from './components/WhatsAppOrderModal';
import FloatingButtons from './components/FloatingButtons';
import { Loader2 } from 'lucide-react';

// Lazy loading all 5 required pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-slate-500 bg-slate-50 dark:bg-slate-950">
      <Loader2 className="w-10 h-10 animate-spin text-emerald-600 mb-2" />
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Loading Page...</span>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <WhatsAppOrderProvider>
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
          
          {/* Sticky Navigation & Emergency support ribbon */}
          <Header id="app-header" />

          {/* Main Routable Content View */}
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home id="page-home" />} />
                <Route path="/about" element={<About id="page-about" />} />
                <Route path="/services" element={<Services id="page-services" />} />
                <Route path="/gallery" element={<Gallery id="page-gallery" />} />
                <Route path="/contact" element={<Contact id="page-contact" />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Floating Action Widgets */}
          <FloatingButtons id="app-floating-buttons" />

          {/* Global Checkout slideover drawer */}
          <WhatsAppOrderModal id="app-whatsapp-modal" />

          {/* Styled Footer containing WMIT tracking logic */}
          <Footer id="app-footer" />

        </div>
      </WhatsAppOrderProvider>
    </Router>
  );
}
