import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero.png';

const VillaPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Villa Image */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Hero Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-primary-900/50 to-primary-900/60"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">The Villa</h1>
          <p className="text-xl md:text-2xl font-light">Experience Unparalleled Luxury</p>
        </div>
      </section>

      {/* Villa Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-primary-900 mb-6">Your Private Paradise</h2>
            <p className="text-lg text-primary-700 leading-relaxed">
              Villa Sekipan is a masterpiece of contemporary design, seamlessly blending modern luxury
              with natural beauty. Perched in a serene location, our exclusive villa offers breathtaking
              views, world-class amenities, and the ultimate privacy for your perfect escape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 border border-primary-200">
              <div className="text-4xl font-serif text-gold-600 mb-2">5</div>
              <p className="text-sm uppercase tracking-wider text-primary-700">Bedrooms</p>
            </div>
            <div className="text-center p-6 border border-primary-200">
              <div className="text-4xl font-serif text-gold-600 mb-2">6</div>
              <p className="text-sm uppercase tracking-wider text-primary-700">Bathrooms</p>
            </div>
            <div className="text-center p-6 border border-primary-200">
              <div className="text-4xl font-serif text-gold-600 mb-2">10</div>
              <p className="text-sm uppercase tracking-wider text-primary-700">Max Guests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <h2 className="text-4xl font-serif text-center mb-16 text-primary-900">Premium Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2 text-primary-900">Infinity Pool</h3>
                <p className="text-primary-700">
                  25-meter infinity pool with panoramic views, perfect for morning laps or sunset relaxation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2 text-primary-900">Private Chef</h3>
                <p className="text-primary-700">
                  Enjoy gourmet meals prepared by your personal chef in our fully-equipped professional kitchen.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2 text-primary-900">Spa & Wellness</h3>
                <p className="text-primary-700">
                  Private spa room with massage table, sauna, and premium wellness facilities for ultimate relaxation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2 text-primary-900">Home Theater</h3>
                <p className="text-primary-700">
                  State-of-the-art cinema room with 4K projection, surround sound, and plush seating for 12.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2 text-primary-900">Private Garden</h3>
                <p className="text-primary-700">
                  Landscaped tropical garden with exotic plants, outdoor lounge areas, and meditation spaces.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2 text-primary-900">Smart Technology</h3>
                <p className="text-primary-700">
                  Fully automated smart home system, high-speed WiFi throughout, and integrated entertainment systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bedrooms */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-serif text-center mb-16 text-primary-900">Luxurious Accommodations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="border border-primary-200 p-6">
              <h3 className="text-2xl font-serif mb-3 text-primary-900">Master Suite</h3>
              <p className="text-primary-700 mb-4">
                Expansive master bedroom with king-size bed, private terrace, walk-in closet,
                and en-suite bathroom with jacuzzi tub and rainfall shower.
              </p>
              <div className="text-sm text-primary-600">
                <p>• King Bed</p>
                <p>• Private Terrace</p>
                <p>• En-suite Bathroom</p>
                <p>• Ocean View</p>
              </div>
            </div>

            <div className="border border-primary-200 p-6">
              <h3 className="text-2xl font-serif mb-3 text-primary-900">Guest Suites</h3>
              <p className="text-primary-700 mb-4">
                Four beautifully appointed guest suites, each with queen or king beds,
                private bathrooms, and elegant furnishings.
              </p>
              <div className="text-sm text-primary-600">
                <p>• Queen/King Beds</p>
                <p>• Private Bathrooms</p>
                <p>• Air Conditioning</p>
                <p>• Garden/Pool View</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl font-serif mb-6 text-primary-900">Prime Location</h2>
          <p className="text-lg text-primary-700 leading-relaxed mb-8">
            Nestled in a tranquil enclave yet conveniently located near pristine beaches,
            world-class restaurants, and cultural attractions. Experience the perfect balance
            of privacy and accessibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold text-primary-900 mb-1">Beach</p>
              <p className="text-primary-600">5 minutes drive</p>
            </div>
            <div>
              <p className="font-semibold text-primary-900 mb-1">Restaurants</p>
              <p className="text-primary-600">Walking distance</p>
            </div>
            <div>
              <p className="font-semibold text-primary-900 mb-1">Airport</p>
              <p className="text-primary-600">45 minutes drive</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900 text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-serif mb-6">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 text-primary-200">
            Experience the ultimate luxury at Villa Sekipan. Check availability and reserve your dates today.
          </p>
          <Link to="/book" className="btn-gold inline-block">
            Check Availability
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VillaPage;
