import React, { memo } from 'react';

const products = [
    {
      id: 1,
      name: 'Payment Gateway',
      description: 'Accept payments with 100+ payment modes. Start accepting domestic and international payments.',
      icon: (
        <svg className="w-10 h-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      badge: 'Most Popular',
      badgeColor: 'bg-cyan-100 text-cyan-700',
    },
    {
      id: 2,
      name: 'Payment Links',
      description: 'Share payment links via SMS, email, or WhatsApp. No website or app needed.',
      icon: (
        <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      badge: null,
      badgeColor: '',
    },
    {
      id: 3,
      name: 'Payment Pages',
      description: 'Create customized payment pages for your products without coding.',
      icon: (
        <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      badge: 'New',
      badgeColor: 'bg-green-100 text-green-700',
    },
    {
      id: 4,
      name: 'Subscriptions',
      description: 'Automate recurring billing. Support monthly, yearly, and custom billing cycles.',
      icon: (
        <svg className="w-10 h-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      badge: null,
      badgeColor: '',
    },
    {
      id: 5,
      name: 'Smart Routing',
      description: 'Optimize payment success rates with intelligent transaction routing.',
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      badge: null,
      badgeColor: '',
    },
    {
      id: 6,
      name: 'Instant Settlements',
      description: 'Get instant access to funds 24x7 with zero additional charges.',
      icon: (
        <svg className="w-10 h-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      badge: null,
      badgeColor: '',
    },
];

const Highlights = memo(() => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out_forwards] [animation-delay:0.2s] opacity-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful products to build and scale your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/40 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 focus-within:shadow-2xl focus:outline-none animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 border border-blue-200/60 dark:border-blue-700/60 overflow-hidden backdrop-blur-sm"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
              <div className="absolute inset-[2px] bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 dark:from-gray-800 dark:via-blue-900/30 dark:to-purple-900/30 rounded-2xl -z-10"></div>
              
              {/* Animated background orb */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 via-indigo-500/30 to-purple-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {product.badge && (
                <span className={`relative z-10 inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${product.badgeColor} shadow-sm mb-4`}>
                  {product.badge === 'Most Popular' && '🔥'}
                  {product.badge === 'New' && '✨'}
                  {product.badge}
                </span>
              )}
              
              <div className="relative z-10 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {product.icon}
              </div>
              
              <h3 className="relative z-10 text-2xl font-semibold text-gray-900 dark:text-white mb-3">{product.name}</h3>
              <p className="relative z-10 text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{product.description}</p>
              
              <a href="#" className="relative z-10 inline-flex items-center text-cyan-500 dark:text-cyan-400 font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                Learn More
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              {/* Shine effect */}
              <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Highlights.displayName = 'Highlights';

export default Highlights;
