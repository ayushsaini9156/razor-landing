import React, { memo } from 'react';

// Real company logos as SVG components
const companies = [
  {
    name: 'Swiggy',
    logo: (
      <svg className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" viewBox="0 0 559 825" fill="currentColor">
        <path d="M542 229q-15-6-29.5-9T482 217q-42 0-71 30-28 31-28 73 0 21 7.5 40t21.5 32q14 13 33 20.5t42 7.5q28 0 51-11v55q-24 12-56 12-37 0-67-13t-51-36q-21-24-33-55-11-32-11-68 0-37 11.5-68t33-53.5 50.5-35 65-12.5q30 0 55 7.5t45 19.5v55zM280 158q23-11 56-11t62 13 51 36q21 23 32.5 54t11.5 68q0 37-11 68.5t-32 54-50.5 35T337 489q-33 0-56-11v124h-60V158h59zm59 272q29 0 51-11.5t36-30.5q14-19 20.5-43.5T453 298q0-23-7-44t-20.5-37-33-24.5-43.5-9q-30 0-56 12v259q25 16 46 16zM57 209h70l71 204 74-204h67L210 483h-52L57 209z"/>
        <path d="M472 532q10-1 18-4 8-2 14.5-7t10-11.5 3.5-16.5q0-13-10-20-9-8-28-8h-27v67h19zm-60 128h-60V471h88q21 0 35.5 5t24.5 14q10 9 15.5 20.5T521 534q0 25-18 40t-43 18l71 68h-72l-60-58v58h-7zm-201-28q25 0 42.5-11.5t28.5-30 15-42 4-46.5q0-25-4-47-3-22-15.5-39T251 390t-42-7q-25 0-43 9-18 8-30 24-11 15-17 37-5 21-5 46 0 26 5 47.5t17 37 30 24 42.5 8.5zm-3 60q-40 0-72.5-14T128 646q-35-28-55-68T53 492q0-44 20-84.5T127 339q34-28 73.5-43T277 281q41 0 74 15t58 42.5 38.5 67T462 492t-14.5 87-38.5 68q-25 28-58 43.5T277 706z"/>
      </svg>
    )
  },
  {
    name: 'Zomato',
    logo: (
      <svg className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" viewBox="0 0 1024 1024" fill="currentColor">
        <path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0zm234.7 797.7c-18 18-45.3 26.3-80.5 26.3H357.8c-35.2 0-62.5-8.3-80.5-26.3-18-18-26.3-45.3-26.3-80.5V306.8c0-35.2 8.3-62.5 26.3-80.5 18-18 45.3-26.3 80.5-26.3h308.4c35.2 0 62.5 8.3 80.5 26.3 18 18 26.3 45.3 26.3 80.5v410.4c0 35.2-8.3 62.5-26.3 80.5z"/>
        <path d="M357.8 250h308.4c25.6 0 44.5 5.8 57.3 18.5 12.8 12.8 18.5 31.7 18.5 57.3v410.4c0 25.6-5.8 44.5-18.5 57.3-12.8 12.8-31.7 18.5-57.3 18.5H357.8c-25.6 0-44.5-5.8-57.3-18.5-12.8-12.8-18.5-31.7-18.5-57.3V325.8c0-25.6 5.8-44.5 18.5-57.3 12.8-12.8 31.7-18.5 57.3-18.5z" fill="#fff"/>
      </svg>
    )
  },
  {
    name: 'Airbnb',
    logo: (
      <svg className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" viewBox="0 0 1000 1000" fill="currentColor">
        <path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"/>
      </svg>
    )
  },
  {
    name: 'Uber',
    logo: (
      <svg className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" viewBox="0 0 1035 377" fill="currentColor">
        <path d="M414.6 161.3v88.4h-69.8V95.1h69.8v23c14.8-17.9 35.8-27.8 59.8-27.8 50.3 0 85.8 38.8 85.8 96.8v113.1h-69.8V200c0-29.8-16.8-48.3-42.3-48.3-25.8 0-33.5 18.5-33.5 9.6zm429.1-3.6c-8.6-26.3-31.3-45.3-62.3-45.3-36.3 0-64.3 27.3-64.3 68.3 0 40.5 28 68.3 64.3 68.3 31 0 53.8-19 62.3-45.3h72.3c-11.3 63.3-66.3 107.3-134.5 107.3-78.3 0-136.8-58-136.8-130.3s58.5-130.3 136.8-130.3c68.3 0 123.3 44 134.5 107.3h-72.3zM141.4 0v300.1H71.6V0h69.8zm-3.5 356.9c0-22.8 18.5-41.3 41.3-41.3s41.3 18.5 41.3 41.3-18.5 41.3-41.3 41.3-41.3-18.6-41.3-41.3zm688.8-257.6h71v197.6c0 1.8 1.3 3.1 3.1 3.1h61.8v50.1h-78.3c-34.8 0-57.5-22.8-57.5-53.2V99.3z"/>
      </svg>
    )
  },
  {
    name: 'BookMyShow',
    logo: (
      <svg className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" viewBox="0 0 200 60" fill="currentColor">
        <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">BookMyShow</text>
      </svg>
    )
  },
  {
    name: 'Ola',
    logo: (
      <svg className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" viewBox="0 0 200 80" fill="currentColor">
        <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="6"/>
        <text x="75" y="52" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold">la</text>
      </svg>
    )
  },
  {
    name: 'Myntra',
    logo: (
      <svg className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" viewBox="0 0 200 60" fill="currentColor">
        <text x="10" y="42" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" letterSpacing="2">MYNTRA</text>
      </svg>
    )
  },
  {
    name: 'Flipkart',
    logo: (
      <svg className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" viewBox="0 0 200 60" fill="currentColor">
        <rect x="10" y="10" width="35" height="40" fill="currentColor" rx="5"/>
        <text x="50" y="42" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold">lipkart</text>
      </svg>
    )
  },
  {
    name: 'Cred',
    logo: (
      <svg className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" viewBox="0 0 150 60" fill="currentColor">
        <text x="10" y="42" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="900" letterSpacing="3">CRED</text>
      </svg>
    )
  },
  {
    name: 'PhonePe',
    logo: (
      <svg className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" viewBox="0 0 180 60" fill="currentColor">
        <circle cx="25" cy="30" r="18" fill="currentColor"/>
        <text x="48" y="40" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold">PhonePe</text>
      </svg>
    )
  },
  {
    name: 'Paytm',
    logo: (
      <svg className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" viewBox="0 0 150 60" fill="currentColor">
        <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold">Paytm</text>
      </svg>
    )
  },
  {
    name: 'Dream11',
    logo: (
      <svg className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" viewBox="0 0 180 60" fill="currentColor">
        <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold">Dream11</text>
      </svg>
    )
  },
];

const MovingHeadlines = memo(() => {
  return (
    <section className="py-12 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-y border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 mb-6">
        <h3 className="text-center text-sm md:text-base font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
          Trusted by 10,000+ Leading Businesses
        </h3>
      </div>
      <div className="relative flex whitespace-nowrap overflow-hidden">
        {/* Marquee 1 */}
        <div className="flex-shrink-0 flex items-center justify-around animate-marquee" style={{ animationDuration: '40s' }}>
          {companies.map((company, index) => (
            <div key={`1-${index}`} className="mx-8 lg:mx-12 flex items-center text-gray-700 dark:text-gray-400" title={company.name}>
              {company.logo}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {companies.map((company, index) => (
            <div key={`1-dup-${index}`} className="mx-8 lg:mx-12 flex items-center text-gray-700" title={company.name}>
              {company.logo}
            </div>
          ))}
        </div>

        {/* Marquee 2 - Duplicate for seamless loop */}
        <div className="flex-shrink-0 flex items-center justify-around animate-marquee" style={{ animationDuration: '40s' }}>
          {companies.map((company, index) => (
            <div key={`2-${index}`} className="mx-8 lg:mx-12 flex items-center text-gray-700" title={company.name}>
              {company.logo}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {companies.map((company, index) => (
            <div key={`2-dup-${index}`} className="mx-8 lg:mx-12 flex items-center text-gray-700" title={company.name}>
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

MovingHeadlines.displayName = 'MovingHeadlines';

export default MovingHeadlines;
