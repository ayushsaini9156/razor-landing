import React, { memo } from 'react';

const currencies = [
  { symbol: '£', label: 'GBP', color: 'bg-green-100', textColor: 'text-green-700' },
  { symbol: '€', label: 'EUR', color: 'bg-blue-100', textColor: 'text-blue-700' },
  { symbol: '$', label: 'USD', color: 'bg-purple-100', textColor: 'text-purple-700' },
  { symbol: '¥', label: 'JPY', color: 'bg-pink-100', textColor: 'text-pink-700' },
  { symbol: 'A$', label: 'AUD', color: 'bg-orange-100', textColor: 'text-orange-700' },
  { symbol: '₹', label: 'INR', color: 'bg-cyan-100', textColor: 'text-cyan-700' }
];

const AnnouncementBanner = memo(() => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-800 py-3 md:py-4 border-b border-blue-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <span className="text-gray-700 dark:text-gray-200 font-medium text-sm md:text-base">
              MoneySaver <span className="text-blue-600 dark:text-blue-400 font-semibold">Export Account</span>
            </span>
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
              Global cards, Apple Pay, bank transfers. Low fees, local support.
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {currencies.map((currency) => (
                <div 
                  key={currency.label}
                  className={`${currency.color} ${currency.textColor} w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transform hover:scale-110 transition-transform duration-200 cursor-pointer shadow-sm`}
                  title={currency.label}
                >
                  {currency.symbol}
                </div>
              ))}
            </div>
            <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 text-sm whitespace-nowrap shadow-md hover:shadow-lg">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

AnnouncementBanner.displayName = 'AnnouncementBanner';

export default AnnouncementBanner;
