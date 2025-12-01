import React, { memo } from 'react';

const actions = [
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ), 
    text: 'Get recommendations', 
    highlight: true 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ), 
    text: 'Accept Payments' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ), 
    text: 'Make Payouts' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ), 
    text: 'Start Business Banking' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ), 
    text: 'Get Credit' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ), 
    text: 'Automate Payroll' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ), 
    text: 'Something else?' 
  }
];

const HeroActionBar = memo(() => {
  return (
    <div className="bg-gradient-to-r from-white via-blue-50/30 to-indigo-50/30 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20 py-4 md:py-6 shadow-lg rounded-2xl -mt-8 relative z-20 animate-[fadeInUp_1s_ease-out_forwards_0.5s] opacity-0 transition-colors duration-300 border border-blue-100/50 dark:border-blue-800/50 backdrop-blur-sm">
      <div className="px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md text-sm md:text-base ${
                action.highlight
                  ? 'bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 border-2 border-blue-300 dark:border-blue-600'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 border border-transparent hover:border-blue-200 dark:hover:border-blue-700'
              }`}
              aria-label={action.text}
            >
              {action.icon}
              <span className="whitespace-nowrap">{action.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});

HeroActionBar.displayName = 'HeroActionBar';

export default HeroActionBar;
