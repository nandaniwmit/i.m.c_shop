import { useState, useEffect } from 'react';
import { Search, Loader2, Pill, AlertCircle, ShoppingCart, CheckCircle2, HelpCircle } from 'lucide-react';
import { Medicine } from '../types';

interface MedicineStockCheckerProps {
  onSelectMedicineForOrder?: (medicineName: string) => void;
}

export default function MedicineStockChecker({ onSelectMedicineForOrder }: MedicineStockCheckerProps) {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // API integration is made easy here: simply replace this fetch path with your actual production endpoint.
    fetch('/medicineStock.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch medicine stock. Server returned status ' + res.status);
        }
        return res.json();
      })
      .then((data: Medicine[]) => {
        setMedicines(data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn('Unable to fetch medicine stock from JSON, using preloaded fallback.', err);
        // Resilient fallback to avoid visual breaks
        const fallbackMedicines: Medicine[] = [
          { id: "med-001", name: "Dolo 650mg (Paracetamol)", brand: "Micro Labs Ltd", mrp: 30.50, availableQuantity: 150, expiry: "2027-12", status: "Available" },
          { id: "med-002", name: "Mox 500mg (Amoxicillin Antibiotic)", brand: "Sun Pharmaceutical Industries", mrp: 118.00, availableQuantity: 85, expiry: "2027-08", status: "Available" },
          { id: "med-003", name: "Glycomet 500mg (Metformin - Diabetes)", brand: "USV Pvt Ltd", mrp: 45.20, availableQuantity: 12, expiry: "2028-01", status: "Limited Stock" },
          { id: "med-004", name: "Lipivas 10mg (Atorvastatin - Cholesterol)", brand: "Cipla Ltd", mrp: 84.50, availableQuantity: 40, expiry: "2027-10", status: "Available" },
          { id: "med-005", name: "Pan 40mg (Pantoprazole - Acidity)", brand: "Alkem Laboratories", mrp: 110.00, availableQuantity: 0, expiry: "2027-05", status: "Out of Stock" },
          { id: "med-006", name: "Azee 500mg (Azithromycin Antibiotic)", brand: "Cipla Ltd", mrp: 129.80, availableQuantity: 65, expiry: "2027-11", status: "Available" },
          { id: "med-007", name: "Montair LC (Montelukast + Levocetirizine)", brand: "Cipla Ltd", mrp: 218.00, availableQuantity: 8, expiry: "2027-09", status: "Limited Stock" },
          { id: "med-008", name: "D3-Must 60K (Vitamin D3 Chewable)", brand: "Mankind Pharma", mrp: 92.00, availableQuantity: 200, expiry: "2028-04", status: "Available" },
          { id: "med-009", name: "Okacet 10mg (Cetirizine - Allergy)", brand: "Cipla Ltd", mrp: 18.20, availableQuantity: 300, expiry: "2028-06", status: "Available" },
          { id: "med-010", name: "Telma 40mg (Telmisartan - Blood Pressure)", brand: "Glenmark Pharmaceuticals", mrp: 94.60, availableQuantity: 5, expiry: "2027-11", status: "Limited Stock" },
          { id: "med-011", name: "Electral Powder ORS (Rehydration)", brand: "FDC Ltd", mrp: 22.40, availableQuantity: 500, expiry: "2028-03", status: "Available" },
          { id: "med-012", name: "Brufen 400mg (Ibuprofen Painkiller)", brand: "Abbott India", mrp: 15.00, availableQuantity: 0, expiry: "2027-02", status: "Out of Stock" }
        ];
        setMedicines(fallbackMedicines);
        setLoading(false);
      });
  }, []);

  const filteredMedicines = medicines.filter((med) => {
    const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          med.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || med.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: Medicine['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200/50 dark:border-amber-800/30">
            <AlertCircle className="w-3.5 h-3.5" />
            Limited Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border border-rose-200/50 dark:border-rose-800/30">
            <AlertCircle className="w-3.5 h-3.5" />
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Pill className="w-5 h-5 text-emerald-600" />
            Real-Time Medicine Stock Checker
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Check local availability at I.M.C SHOP, Medical Road, Gaya. Updated daily.
          </p>
        </div>
        
        {/* Quick Help Tip */}
        <div className="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-400 text-xs py-2 px-3 rounded-xl border border-emerald-100 dark:border-emerald-900/50 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 shrink-0" />
          <span>Cannot find your medicine? Click WhatsApp Order to submit your prescription.</span>
        </div>
      </div>

      {/* Controls: Search and Status Filters */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
        <div className="relative md:col-span-8">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by Medicine Name, Brand, Active Ingredient..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-200 placeholder-slate-400 transition-all text-sm"
          />
        </div>
        
        <div className="md:col-span-4 flex gap-2">
          {['All', 'Available', 'Limited Stock', 'Out of Stock'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`flex-1 text-center py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                statusFilter === status
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-600/10'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              {status === 'All' ? 'Show All' : status}
            </button>
          ))}
        </div>
      </div>

      {/* Loading state */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12 text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin text-emerald-600 mb-2" />
          <p className="text-sm">Querying Gaya Store Inventory...</p>
        </div>
      ) : (
        <>
          {filteredMedicines.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20">
              <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="font-semibold text-slate-700 dark:text-slate-300">No matching medicines found</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto px-4">
                We regularly stock thousands of brands at our Medical Road branch. Click "WhatsApp Order" below to share your prescription and we will procure it for you immediately.
              </p>
              {onSelectMedicineForOrder && (
                <button
                  onClick={() => onSelectMedicineForOrder(searchQuery || "Special Prescription")}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Order Custom Prescriptions
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMedicines.map((med) => (
                <div
                  key={med.id}
                  className="p-5 bg-slate-50/60 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/50 hover:border-emerald-200 dark:hover:border-emerald-950 rounded-2xl flex flex-col justify-between transition-all group hover:shadow-md"
                >
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {med.brand}
                      </span>
                      {getStatusBadge(med.status)}
                    </div>
                    
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base leading-snug group-hover:text-emerald-600 transition-colors">
                      {med.name}
                    </h4>

                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-4 py-2 border-y border-slate-100 dark:border-slate-800/50 text-xs">
                      <div>
                        <span className="text-slate-400">MRP price:</span>
                        <p className="font-bold text-slate-700 dark:text-slate-200">₹{med.mrp.toFixed(2)}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Expiry info:</span>
                        <p className="font-semibold text-slate-600 dark:text-slate-300">{med.expiry}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 mt-4 pt-1">
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      In Stock: <strong className="text-slate-600 dark:text-slate-300">{med.availableQuantity} units</strong>
                    </span>
                    
                    {onSelectMedicineForOrder && (
                      <button
                        onClick={() => onSelectMedicineForOrder(med.name)}
                        disabled={med.status === 'Out of Stock'}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          med.status === 'Out of Stock'
                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                            : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 transition-colors cursor-pointer border border-emerald-100 dark:border-emerald-900/30'
                        }`}
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Order
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
