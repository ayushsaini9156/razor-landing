import React, { useState, memo } from 'react';

const tabs = ['Top Products', 'On Website/App', 'Plugins', 'On Social Media', 'In-Store', 'Cross-Border', 'With Smart Ad-Ons'];

const featuresData = [
  {
    icon: (
      <svg className="w-8 h-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Accept Payments',
    description: 'Accept payments online with 100+ payment modes including UPI, cards, wallets, and net banking.',
    bgColor: 'bg-cyan-100',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Instant Settlements',
    description: 'Get instant access to your funds 24x7 with our real-time settlement feature.',
    bgColor: 'bg-blue-100',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c.002 2.96.967 5.764 2.636 8.055L12 22.95l6.42-2.895A12.007 12.007 0 0021.056 12c0-2.96-.967-5.764-2.636-8.055z" />
      </svg>
    ),
    title: 'Secure & Compliant',
    description: 'PCI DSS Level 1 compliant with bank-grade security and fraud detection powered by AI.',
    bgColor: 'bg-purple-100',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Developer Friendly',
    description: 'Easy-to-integrate APIs, SDKs, and comprehensive documentation for quick implementation.',
    bgColor: 'bg-green-100',
  },
];

const products = [
  {
    title: 'Pay using card',
    badge: 'NO CODE',
    icon: (
      <svg className="w-16 h-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    description: 'Accept credit and debit card payments',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Seamless Payments',
    badge: 'NO CODE',
    icon: (
      <svg className="w-16 h-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Integrate payment gateway easily',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Mobile Payments',
    badge: 'NO CODE',
    icon: (
      <svg className="w-16 h-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Accept payments on mobile devices',
    bgColor: 'bg-purple-50'
  },
  {
    title: 'Seamless In-Store Payments',
    icon: (
      <svg className="w-16 h-16 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: 'POS solutions for retail stores',
    bgColor: 'bg-cyan-50'
  }
];

const Features = memo(() => {
  const [activeTab, setActiveTab] = useState('Top Products');

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-[fadeInUp_0.8s_ease-out_forwards] [animation-delay:0.2s] opacity-0">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            The all in one <span className="text-green-600">finance platform</span>
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            you've been looking for
          </h3>
          
          <div className="flex items-center space-x-6 text-gray-600 mb-8">
            <span className="font-medium">With Razorpay, you can:</span>
            <div className="flex space-x-6">
              <button className="font-medium hover:text-blue-600 transition-colors">Accept Payments</button>
              <button className="font-medium hover:text-blue-600 transition-colors">Make Payouts</button>
              <button className="font-medium hover:text-blue-600 transition-colors">Start Business Banking</button>
              <button className="font-medium hover:text-blue-600 transition-colors">Automate Payroll</button>
              <button className="font-medium hover:text-blue-600 transition-colors">Get Credit & Loans</button>
            </div>
          </div>
        </div>

        {/* Accept Payments Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 mb-12 animate-[fadeInUp_0.8s_ease-out_forwards] [animation-delay:0.4s] opacity-0">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Accept Payments</h3>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-4 font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 border border-blue-200/50 dark:border-blue-700/50 hover:border-transparent overflow-hidden backdrop-blur-sm"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
                <div className="absolute inset-[2px] bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 dark:from-gray-800 dark:via-blue-900/30 dark:to-purple-900/30 rounded-2xl -z-10"></div>
                
                {product.badge && (
                  <span className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 shadow-lg">
                    {product.badge}
                  </span>
                )}
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{product.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{product.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
                
                {/* Shine effect */}
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Original Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/90 via-blue-50/60 to-indigo-50/60 dark:from-gray-800/90 dark:via-blue-900/30 dark:to-purple-900/30 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 focus-within:shadow-2xl focus:outline-none animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 border border-blue-200/40 dark:border-blue-700/40"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className={`relative w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transform group-hover:rotate-6 transition-all duration-300`}>
                {feature.icon}
              </div>
              <h3 className="relative text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="relative text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Features.displayName = 'Features';

export default Features;
