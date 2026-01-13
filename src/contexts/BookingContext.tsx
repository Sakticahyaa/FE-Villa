import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { DateRange, GuestInfo, PromoCode } from '../types';

interface BookingContextType {
  dateRange: DateRange;
  setDateRange: (dates: DateRange) => void;
  guestInfo: GuestInfo | null;
  setGuestInfo: (info: GuestInfo) => void;
  promoCode: string;
  setPromoCode: (code: string) => void;
  appliedPromo: PromoCode | null;
  setAppliedPromo: (promo: PromoCode | null) => void;
  pricing: {
    originalPrice: number;
    discountAmount: number;
    finalPrice: number;
  };
  setPricing: (pricing: { originalPrice: number; discountAmount: number; finalPrice: number }) => void;
  resetBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [dateRange, setDateRange] = useState<DateRange>({ checkIn: null, checkOut: null });
  const [guestInfo, setGuestInfo] = useState<GuestInfo | null>(null);
  const [promoCode, setPromoCode] = useState<string>('');
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [pricing, setPricing] = useState({
    originalPrice: 0,
    discountAmount: 0,
    finalPrice: 0,
  });

  const resetBooking = () => {
    setDateRange({ checkIn: null, checkOut: null });
    setGuestInfo(null);
    setPromoCode('');
    setAppliedPromo(null);
    setPricing({ originalPrice: 0, discountAmount: 0, finalPrice: 0 });
  };

  return (
    <BookingContext.Provider
      value={{
        dateRange,
        setDateRange,
        guestInfo,
        setGuestInfo,
        promoCode,
        setPromoCode,
        appliedPromo,
        setAppliedPromo,
        pricing,
        setPricing,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
