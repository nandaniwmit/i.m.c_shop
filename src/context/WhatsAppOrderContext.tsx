import { createContext, useContext, useState, ReactNode } from 'react';

interface WhatsAppOrderContextType {
  isFormOpen: boolean;
  prefilledMedicine: string;
  openOrderForm: (medicineName?: string) => void;
  closeOrderForm: () => void;
}

const WhatsAppOrderContext = createContext<WhatsAppOrderContextType | undefined>(undefined);

export function WhatsAppOrderProvider({ children }: { children: ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const openOrderForm = (medicineName?: string) => {
    if (medicineName) {
      setPrefilledMedicine(medicineName);
    } else {
      setPrefilledMedicine('');
    }
    setIsFormOpen(true);
  };

  const closeOrderForm = () => {
    setIsFormOpen(false);
    setPrefilledMedicine('');
  };

  return (
    <WhatsAppOrderContext.Provider value={{ isFormOpen, prefilledMedicine, openOrderForm, closeOrderForm }}>
      {children}
    </WhatsAppOrderContext.Provider>
  );
}

export function useWhatsAppOrder() {
  const context = useContext(WhatsAppOrderContext);
  if (!context) {
    throw new Error('useWhatsAppOrder must be used within a WhatsAppOrderProvider');
  }
  return context;
}
