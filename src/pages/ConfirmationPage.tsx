import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ConfirmationPage: React.FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>();

  return (
    <div className="section-padding bg-primary-50 min-h-screen flex items-center">
      <div className="container-custom max-w-3xl">
        <div className="bg-white p-8 md:p-12 shadow-sm text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif text-primary-900 mb-4">
            Booking Submitted Successfully!
          </h1>

          <p className="text-lg text-primary-700 mb-8">
            Your booking reference number is
          </p>

          <div className="bg-gold-50 border-2 border-gold-600 p-4 mb-8 inline-block">
            <p className="text-2xl font-bold font-mono text-gold-900">{bookingId}</p>
          </div>

          <div className="text-left bg-primary-50 p-6 mb-8">
            <h2 className="text-xl font-serif text-primary-900 mb-4">What Happens Next?</h2>
            <ol className="space-y-3 text-primary-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gold-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <span>
                  <strong>We're reviewing your payment:</strong> Our team will verify your bank transfer within 24 hours.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gold-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </span>
                <span>
                  <strong>Confirmation email:</strong> Once approved, you'll receive a confirmation email with your booking details and check-in instructions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gold-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </span>
                <span>
                  <strong>Prepare for your stay:</strong> We'll send you owner contact information and everything you need for a smooth check-in.
                </span>
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 mb-8">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> Keep your booking reference number ({bookingId}) safe. You can use it to check your booking status or contact us if needed.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-primary-700">
              A confirmation email has been sent to your email address with all the booking details.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/" className="btn-primary">
                Return to Homepage
              </Link>
              <button
                onClick={() => window.print()}
                className="btn-secondary"
              >
                Print Confirmation
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-primary-200">
            <h3 className="text-lg font-serif text-primary-900 mb-3">Need Help?</h3>
            <p className="text-sm text-primary-700">
              If you have any questions about your booking, please contact us:
            </p>
            <div className="mt-3 text-sm text-primary-700">
              <p>Email: info@villasekipan.com</p>
              <p>Phone: +62 XXX XXX XXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
