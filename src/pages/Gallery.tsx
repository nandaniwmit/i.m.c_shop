import { useState, useEffect } from 'react';
import { Filter, Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon, ZoomIn, ShoppingBag } from 'lucide-react';
import { GalleryItem } from '../types';
import { useWhatsAppOrder } from '../context/WhatsAppOrderContext';

export default function Gallery() {
  const { openOrderForm } = useWhatsAppOrder();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Store Gallery | I.M.C SHOP - Pharmacy Tour & Equipment";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Take a virtual tour of I.M.C SHOP Gaya. See our clean medicine shelves, cold-chain refrigeration setup, and clinical products cabinets.');
    }
  }, []);

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      title: "Licensed Store Front View",
      category: "store-front",
      imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      description: "Our professional branch on Medical Road, Gaya, displaying the bright green pharmacy cross sign for immediate visibility."
    },
    {
      id: "gal-2",
      title: "Main Medicine Shelf Counter",
      category: "interior",
      imageUrl: "https://images.unsplash.com/photo-1607619056574-7b8d304f3c6f?auto=format&fit=crop&w=800&q=80",
      description: "Clean, organized interior cabinets holding genuine brands categorized systematically for fast prescription compilation."
    },
    {
      id: "gal-3",
      title: "Clinical Monitoring Devices",
      category: "medical-devices",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      description: "Digital BP monitors, pulse oximeters, thermal scanners, and glucometer kits ready for customer checkout."
    },
    {
      id: "gal-4",
      title: "Cold-Chain Refrigerator Zone",
      category: "medical-devices",
      imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      description: "Strictly monitored refrigeration cabinet storing temperature-sensitive insulin cartridges, injectables, and vaccines."
    },
    {
      id: "gal-5",
      title: "Pediatric & Baby Wellness Rack",
      category: "products",
      imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      description: "Exhaustive range of top baby formulas, diapers, dermatologically safe baby cleansers, and mother care supplements."
    },
    {
      id: "gal-6",
      title: "Clinical Dispensation Hub",
      category: "interior",
      imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbbc88?auto=format&fit=crop&w=800&q=80",
      description: "Licensed pharmacists cross-referencing critical prescription codes with digital invoice software for maximum clinical safety."
    }
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (id: string) => {
    const idx = galleryItems.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (lightboxIndex === null) return;
    if (direction === 'next') {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    } else {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const categories = [
    { key: 'All', label: '📸 All Photos' },
    { key: 'store-front', label: '🏢 Store Front' },
    { key: 'interior', label: '🚪 Interior View' },
    { key: 'products', label: '🍼 Baby & OTC Products' },
    { key: 'medical-devices', label: '🩺 Medical Devices' }
  ];

  return (
    <div className="font-sans text-slate-800 dark:text-slate-100 bg-slate-50/50 dark:bg-slate-950/20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-100 bg-white/10 px-3.5 py-1.5 rounded-full">
            Virtual Pharmacy Tour
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Our Store Gallery</h1>
          <p className="text-sm md:text-base text-emerald-50 max-w-2xl mx-auto leading-relaxed">
            Take a look at our hygienic setup, organized medicine shelves, cold-chain units, and certified clinical equipment stock on Medical Road, Gaya.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex text-xs font-semibold text-slate-400 gap-1.5">
          <a href="/" className="hover:text-emerald-600">Home</a>
          <span>/</span>
          <span className="text-slate-600 dark:text-slate-300">Store Gallery</span>
        </nav>
      </div>

      {/* Gallery Filter controls */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-850 pb-6">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-350">
            <Filter className="w-5 h-5 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-wider">Filter Store Views:</span>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`py-2 px-4 rounded-xl text-xs font-bold border transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm shadow-emerald-650/10'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-350 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid View */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-100 dark:hover:border-emerald-950 transition-all flex flex-col justify-between text-left"
            >
              <div className="relative overflow-hidden aspect-video bg-slate-950">
                {/* Standard image with referral policy fallback safety */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Dark Hover overlay with actions */}
                <div 
                  className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 cursor-pointer"
                  onClick={() => openLightbox(item.id)}
                >
                  <span className="p-3 bg-white/25 backdrop-blur-md hover:bg-white/40 text-white rounded-full transition-all">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>

                <span className="absolute left-4 top-4 text-[10px] font-extrabold uppercase bg-emerald-600 text-white px-2.5 py-1 rounded-lg">
                  {item.category.replace('-', ' ')}
                </span>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base leading-tight group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="pt-4 border-t border-slate-100 dark:border-slate-850 flex justify-between items-center text-xs">
                  <button
                    onClick={() => openLightbox(item.id)}
                    className="font-bold text-slate-500 dark:text-slate-400 hover:text-emerald-600 transition-colors flex items-center gap-1"
                  >
                    <Eye className="w-4 h-4" /> Expand Photo
                  </button>
                  <button
                    onClick={() => openOrderForm(item.title)}
                    className="font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Order items
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Micro Info banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-300 rounded-3xl border border-emerald-100/50 dark:border-emerald-900/30 text-left flex items-start gap-3">
          <ImageIcon className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
          <p className="text-xs leading-relaxed">
            <strong>Virtual Verification:</strong> Our physical shelves located on Medical Road are designed to keep medication packages protected from moisture and heat. If you need a real-time photo of a specific medicine box or manufacturing batch/expiry label before shipment, click WhatsApp Order and request a photo check. Our staff will coordinate immediately.
          </p>
        </div>
      </section>

      {/* Full Screen Lightbox Modal with controls */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-slate-950/95 text-white font-sans p-4 select-none">
          {/* Top Actions bar */}
          <div className="w-full flex justify-between items-center py-2 px-4 z-10">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Photo {lightboxIndex + 1} of {galleryItems.length} — {galleryItems[lightboxIndex].category.toUpperCase()}
            </span>
            <button
              onClick={closeLightbox}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white outline-none"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Photo viewport */}
          <div className="flex-1 flex items-center justify-between relative max-w-5xl mx-auto w-full gap-4">
            
            {/* Previous slide arrow */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all outline-none shrink-0"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Displaying Image with beautiful cover controls */}
            <div className="flex-1 flex flex-col items-center justify-center max-h-[70vh] relative overflow-hidden">
              <img
                src={galleryItems[lightboxIndex].imageUrl}
                alt={galleryItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-2xl scale-100 transition-transform duration-300"
              />
            </div>

            {/* Next slide arrow */}
            <button
              onClick={() => navigateLightbox('next')}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all outline-none shrink-0"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Bottom Descriptive Panel */}
          <div className="w-full bg-slate-900/80 border-t border-slate-800 p-6 rounded-t-3xl max-w-4xl mx-auto text-left space-y-2 z-10 backdrop-blur-md">
            <h4 className="text-lg font-extrabold text-white">
              {galleryItems[lightboxIndex].title}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {galleryItems[lightboxIndex].description}
            </p>
            <div className="pt-2 flex justify-between items-center">
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                📍 Location: I.M.C SHOP Gaya
              </span>
              <button
                onClick={() => {
                  const name = galleryItems[lightboxIndex as number].title;
                  closeLightbox();
                  openOrderForm(name);
                }}
                className="py-1.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold"
              >
                Inquire Category Items
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
