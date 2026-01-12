import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif mb-4">VILLA SEKIPAN</h3>
            <p className="text-primary-200 text-sm leading-relaxed">
              Experience luxury and tranquility in our exclusive villa.
              A perfect sanctuary for your getaway.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-primary-200 hover:text-white text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/villa" className="text-primary-200 hover:text-white text-sm transition-colors">
                  The Villa
                </a>
              </li>
              <li>
                <a href="/book" className="text-primary-200 hover:text-white text-sm transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="/booking-status" className="text-primary-200 hover:text-white text-sm transition-colors">
                  Booking Status
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-200">
              <li>Email: info@villasekipan.com</li>
              <li>Phone: +62 XXX XXX XXXX</li>
              <li>Location: Bali, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700 text-center">
          <p className="text-primary-300 text-sm">
            &copy; {new Date().getFullYear()} Villa Sekipan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
