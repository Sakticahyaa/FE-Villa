import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { differenceInDays } from 'date-fns';
import { useBooking } from '../contexts/BookingContext';
import Calendar from '../components/Calendar';
import type { GuestInfo } from '../types';

const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    dateRange,
    setDateRange,
    setGuestInfo,
    promoCode,
    setPromoCode,
    appliedPromo,
    setAppliedPromo,
    pricing,
    setPricing,
  } = useBooking();

  const [step, setStep] = useState<'dates' | 'promo' | 'info'>('dates');
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  // Guest form state
  const [formData, setFormData] = useState<GuestInfo>({
    fullName: '',
    email: '',
    phone: '',
    idNumber: '',
    numberOfGuests: 1,
    specialRequests: '',
  });

  // Mock data - Replace with actual API calls
  const basePrice = 2000000; // IDR 2,000,000 per night
  const bookedDates: Date[] = []; // Get from API
  const blockedDates: Date[] = []; // Get from API

  const numberOfNights = dateRange.checkIn && dateRange.checkOut
    ? differenceInDays(dateRange.checkOut, dateRange.checkIn)
    : 0;

  const calculatePrice = () => {
    if (numberOfNights <= 0) return;

    const originalPrice = basePrice * numberOfNights;
    let discountAmount = 0;

    if (appliedPromo) {
      discountAmount = (originalPrice * appliedPromo.discountPercentage) / 100;
    }

    const finalPrice = originalPrice - discountAmount;

    setPricing({ originalPrice, discountAmount, finalPrice });
  };

  useEffect(() => {
    calculatePrice();
  }, [dateRange, appliedPromo, numberOfNights]);

  const handleDateSelect = (date: Date) => {
    if (!dateRange.checkIn || (dateRange.checkIn && dateRange.checkOut)) {
      // Set check-in date
      setDateRange({ checkIn: date, checkOut: null });
    } else if (dateRange.checkIn && !dateRange.checkOut) {
      // Set check-out date
      if (date > dateRange.checkIn) {
        setDateRange({ ...dateRange, checkOut: date });
      } else {
        // If selected date is before check-in, reset
        setDateRange({ checkIn: date, checkOut: null });
      }
    }
  };

  const handleApplyPromo = () => {
    setPromoError('');
    setPromoSuccess('');

    // Mock promo code validation - Replace with API call
    const validPromoCodes = [
      { code: 'TRAVEL10', discountPercentage: 10, affiliateId: 'aff1', validFrom: new Date(), validUntil: new Date(2026, 11, 31), isActive: true },
      { code: 'SUMMER25', discountPercentage: 25, affiliateId: 'aff2', validFrom: new Date(), validUntil: new Date(2026, 11, 31), isActive: true },
    ];

    const promo = validPromoCodes.find(p => p.code === promoCode.toUpperCase());

    if (promo) {
      setAppliedPromo(promo);
      setPromoSuccess(`${promo.discountPercentage}% discount applied!`);
    } else {
      setPromoError('Invalid promo code');
      setAppliedPromo(null);
    }
  };

  const handleRemovePromo = () => {
    setPromoCode('');
    setAppliedPromo(null);
    setPromoSuccess('');
    setPromoError('');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 'dates') {
      if (!dateRange.checkIn || !dateRange.checkOut) {
        alert('Please select check-in and check-out dates');
        return;
      }
      setStep('promo');
    } else if (step === 'promo') {
      setStep('info');
    } else if (step === 'info') {
      // Validate form
      if (!formData.fullName || !formData.email || !formData.phone || !formData.idNumber) {
        alert('Please fill in all required fields');
        return;
      }

      setGuestInfo(formData);
      navigate('/review');
    }
  };

  const canProceed = () => {
    if (step === 'dates') {
      return dateRange.checkIn && dateRange.checkOut;
    }
    return true;
  };

  return (
    <div className="section-padding bg-primary-50">
      <div className="container-custom max-w-6xl">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 ${step === 'dates' ? 'text-gold-600' : step === 'promo' || step === 'info' ? 'text-primary-900' : 'text-primary-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step === 'dates' ? 'border-gold-600 bg-gold-50' : step === 'promo' || step === 'info' ? 'border-primary-900 bg-primary-900 text-white' : 'border-primary-300'}`}>
                1
              </div>
              <span className="hidden md:inline text-sm font-medium">Select Dates</span>
            </div>

            <div className="w-12 h-0.5 bg-primary-300"></div>

            <div className={`flex items-center gap-2 ${step === 'promo' ? 'text-gold-600' : step === 'info' ? 'text-primary-900' : 'text-primary-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step === 'promo' ? 'border-gold-600 bg-gold-50' : step === 'info' ? 'border-primary-900 bg-primary-900 text-white' : 'border-primary-300'}`}>
                2
              </div>
              <span className="hidden md:inline text-sm font-medium">Promo Code</span>
            </div>

            <div className="w-12 h-0.5 bg-primary-300"></div>

            <div className={`flex items-center gap-2 ${step === 'info' ? 'text-gold-600' : 'text-primary-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step === 'info' ? 'border-gold-600 bg-gold-50' : 'border-primary-300'}`}>
                3
              </div>
              <span className="hidden md:inline text-sm font-medium">Guest Info</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-serif text-primary-900 mb-6">
                {step === 'dates' && 'Select Your Dates'}
                {step === 'promo' && 'Apply Promo Code (Optional)'}
                {step === 'info' && 'Guest Information'}
              </h2>

              {/* Step 1: Date Selection */}
              {step === 'dates' && (
                <div>
                  <Calendar
                    onDateSelect={handleDateSelect}
                    selectedDates={dateRange}
                    bookedDates={bookedDates}
                    blockedDates={blockedDates}
                  />

                  {dateRange.checkIn && dateRange.checkOut && (
                    <div className="mt-6 p-4 bg-primary-50 border border-primary-200">
                      <p className="text-sm text-primary-700">
                        <strong>Check-in:</strong> {dateRange.checkIn.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                      <p className="text-sm text-primary-700 mt-2">
                        <strong>Check-out:</strong> {dateRange.checkOut.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                      <p className="text-sm text-primary-700 mt-2">
                        <strong>Number of nights:</strong> {numberOfNights}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Promo Code */}
              {step === 'promo' && (
                <div>
                  <p className="text-primary-700 mb-6">
                    Have a promo code? Enter it below to get a discount on your booking.
                  </p>

                  {!appliedPromo ? (
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                        placeholder="Enter promo code"
                        className="input-field flex-1 uppercase"
                      />
                      <button
                        onClick={handleApplyPromo}
                        className="btn-primary"
                        disabled={!promoCode}
                      >
                        Apply
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200">
                      <div>
                        <p className="font-medium text-green-900">Code: {appliedPromo.code}</p>
                        <p className="text-sm text-green-700">{appliedPromo.discountPercentage}% discount applied</p>
                      </div>
                      <button
                        onClick={handleRemovePromo}
                        className="text-red-600 hover:text-red-800 text-sm underline"
                      >
                        Remove
                      </button>
                    </div>
                  )}

                  {promoError && (
                    <p className="mt-3 text-sm text-red-600">{promoError}</p>
                  )}
                  {promoSuccess && (
                    <p className="mt-3 text-sm text-green-600">{promoSuccess}</p>
                  )}

                  <button
                    onClick={() => setStep('info')}
                    className="btn-secondary mt-6"
                  >
                    Skip
                  </button>
                </div>
              )}

              {/* Step 3: Guest Information */}
              {step === 'info' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="input-field"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary-900 mb-2">
                        ID Number / Passport *
                      </label>
                      <input
                        type="text"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleFormChange}
                        className="input-field"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary-900 mb-2">
                        Number of Guests *
                      </label>
                      <input
                        type="number"
                        name="numberOfGuests"
                        value={formData.numberOfGuests}
                        onChange={handleFormChange}
                        min="1"
                        max="10"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-900 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleFormChange}
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Any special requirements or requests..."
                    ></textarea>
                  </div>
                </form>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-6">
              {step !== 'dates' && (
                <button
                  onClick={() => {
                    if (step === 'info') setStep('promo');
                    else if (step === 'promo') setStep('dates');
                  }}
                  className="btn-secondary"
                >
                  Back
                </button>
              )}

              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="btn-primary flex-1"
              >
                {step === 'info' ? 'Review Booking' : 'Continue'}
              </button>
            </div>
          </div>

          {/* Pricing Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 shadow-sm sticky top-24">
              <h3 className="text-xl font-serif text-primary-900 mb-4">Booking Summary</h3>

              <div className="space-y-3 text-sm">
                {dateRange.checkIn && dateRange.checkOut ? (
                  <>
                    <div className="flex justify-between text-primary-700">
                      <span>IDR {basePrice.toLocaleString()} × {numberOfNights} night{numberOfNights > 1 ? 's' : ''}</span>
                      <span>IDR {pricing.originalPrice.toLocaleString()}</span>
                    </div>

                    {appliedPromo && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount ({appliedPromo.discountPercentage}%)</span>
                        <span>- IDR {pricing.discountAmount.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="pt-3 border-t border-primary-200">
                      <div className="flex justify-between font-semibold text-lg text-primary-900">
                        <span>Total</span>
                        <span>IDR {pricing.finalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-primary-600 text-center py-4">Select dates to see pricing</p>
                )}
              </div>

              {appliedPromo && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 text-sm">
                  <p className="font-medium text-green-900">🎉 Promo Applied</p>
                  <p className="text-green-700">{appliedPromo.code} - {appliedPromo.discountPercentage}% off</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
