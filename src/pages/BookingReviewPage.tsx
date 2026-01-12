import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../contexts/BookingContext';
import { differenceInDays } from 'date-fns';

const BookingReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { dateRange, guestInfo, appliedPromo, pricing } = useBooking();

  if (!dateRange.checkIn || !dateRange.checkOut || !guestInfo) {
    navigate('/book');
    return null;
  }

  const numberOfNights = differenceInDays(dateRange.checkOut, dateRange.checkIn);

  const handleConfirm = () => {
    // Navigate to payment page
    navigate('/payment');
  };

  return (
    <div className="section-padding bg-primary-50">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-serif text-primary-900 mb-8">Review Your Booking</h1>

        <div className="bg-white p-8 shadow-sm mb-6">
          <h2 className="text-2xl font-serif text-primary-900 mb-6">Booking Details</h2>

          {/* Dates */}
          <div className="mb-6 pb-6 border-b border-primary-200">
            <h3 className="font-semibold text-primary-900 mb-3">Stay Dates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary-700">
              <div>
                <p className="text-sm text-primary-600">Check-in</p>
                <p className="font-medium">{dateRange.checkIn.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              <div>
                <p className="text-sm text-primary-600">Check-out</p>
                <p className="font-medium">{dateRange.checkOut.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-primary-600">{numberOfNights} night{numberOfNights > 1 ? 's' : ''}</p>
          </div>

          {/* Guest Information */}
          <div className="mb-6 pb-6 border-b border-primary-200">
            <h3 className="font-semibold text-primary-900 mb-3">Guest Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-primary-600">Full Name</p>
                <p className="font-medium text-primary-900">{guestInfo.fullName}</p>
              </div>
              <div>
                <p className="text-primary-600">Email</p>
                <p className="font-medium text-primary-900">{guestInfo.email}</p>
              </div>
              <div>
                <p className="text-primary-600">Phone</p>
                <p className="font-medium text-primary-900">{guestInfo.phone}</p>
              </div>
              <div>
                <p className="text-primary-600">ID Number</p>
                <p className="font-medium text-primary-900">{guestInfo.idNumber}</p>
              </div>
              <div>
                <p className="text-primary-600">Number of Guests</p>
                <p className="font-medium text-primary-900">{guestInfo.numberOfGuests}</p>
              </div>
            </div>
            {guestInfo.specialRequests && (
              <div className="mt-4">
                <p className="text-sm text-primary-600">Special Requests</p>
                <p className="text-sm text-primary-900">{guestInfo.specialRequests}</p>
              </div>
            )}
          </div>

          {/* Pricing */}
          <div>
            <h3 className="font-semibold text-primary-900 mb-3">Price Breakdown</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-primary-700">
                <span>Base price ({numberOfNights} nights)</span>
                <span>IDR {pricing.originalPrice.toLocaleString()}</span>
              </div>
              {appliedPromo && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({appliedPromo.code} - {appliedPromo.discountPercentage}%)</span>
                  <span>- IDR {pricing.discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="pt-3 border-t border-primary-200">
                <div className="flex justify-between font-semibold text-xl text-primary-900">
                  <span>Total Amount</span>
                  <span>IDR {pricing.finalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/book')}
            className="btn-secondary"
          >
            Edit Booking
          </button>
          <button
            onClick={handleConfirm}
            className="btn-primary flex-1"
          >
            Confirm & Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingReviewPage;
