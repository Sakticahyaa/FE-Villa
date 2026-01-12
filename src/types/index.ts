export interface Villa {
  id: string;
  name: string;
  description: string;
  location: string;
  images: string[];
  amenities: string[];
  capacity: number;
  basePrice: number;
}

export interface DateRange {
  checkIn: Date | null;
  checkOut: Date | null;
}

export interface PricingRule {
  id: string;
  type: 'base' | 'date-specific' | 'recurring';
  price: number;
  startDate?: Date;
  endDate?: Date;
  daysOfWeek?: number[]; // 0-6 for Sunday-Saturday
  label?: string;
}

export interface PromoCode {
  code: string;
  discountPercentage: number;
  affiliateId?: string;
  validFrom: Date;
  validUntil: Date;
  isActive: boolean;
}

export interface GuestInfo {
  fullName: string;
  email: string;
  phone: string;
  idNumber: string;
  numberOfGuests: number;
  specialRequests?: string;
}

export interface BookingSummary {
  dates: DateRange;
  numberOfNights: number;
  originalPrice: number;
  promoCode?: string;
  discountAmount: number;
  finalPrice: number;
  guestInfo: GuestInfo;
}

export interface PaymentProof {
  file: File;
  transferDate: Date;
  transferAmount: number;
}

export interface Booking {
  id: string;
  bookingReference: string;
  villa: Villa;
  dates: DateRange;
  guestInfo: GuestInfo;
  pricing: {
    originalPrice: number;
    discountAmount: number;
    finalPrice: number;
    promoCode?: string;
  };
  paymentProof?: PaymentProof;
  status: 'pending' | 'confirmed' | 'rejected' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface CalendarDate {
  date: Date;
  status: 'available' | 'booked' | 'blocked';
  price?: number;
  bookingId?: string;
}
