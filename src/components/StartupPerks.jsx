import React, { memo, useState } from 'react';

const StartupPerks = memo(() => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 transition-colors duration-300 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-700 rounded-full opacity-10 dark:opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 dark:from-purple-600 dark:to-pink-700 rounded-full opacity-10 dark:opacity-20 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm mb-4">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Exclusive Startup Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Power Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Startup Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Unlock exclusive perks worth ₹30 Lakhs to accelerate your growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Enhanced Blue Card */}
          <div 
            className="group relative animate-[fadeInUp_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden group-hover:shadow-blue-500/50 dark:group-hover:shadow-blue-400/30 transition-all duration-500 border border-white/10">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Sparkle effects */}
              <div className="absolute top-10 right-10 w-2 h-2 bg-white rounded-full animate-pulse opacity-70"></div>
              <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-50" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>

              <div className="relative z-10">
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="inline-block">₹30L</span>
                  <span className="block text-2xl md:text-3xl mt-2 opacity-90">in benefits</span>
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '50ms'}}>
                  with Razorpay
                </h3>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '100ms'}}>
                  Startup Perks
                </h3>
                
                {/* Animated divider */}
                <div className="relative mb-8">
                  <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-white via-blue-200 to-white rounded-full transition-all duration-1000 ${isHovered ? 'w-full' : 'w-24'}`}></div>
                  </div>
                </div>
                
                {/* Benefits List */}
                <ul className="space-y-3 mb-8">
                  {['Cloud credits & tools', 'Marketing resources', 'Expert mentorship'].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/item">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg group-hover/item:translate-x-1 transition-transform">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="group/btn relative px-8 py-4 bg-white text-blue-600 dark:text-indigo-600 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Know More
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Right - Enhanced Founders Illustration */}
          <div className="relative animate-[fadeInUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
            <div className="group/card relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 rounded-3xl overflow-hidden p-8 md:p-12 border border-purple-200/30 dark:border-purple-700/30 shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover/card:translate-x-[200%] transition-transform duration-1500"></div>

              <div className="aspect-[4/3] flex items-center justify-center relative">
                <div className="relative w-full max-w-md">
                  {/* Founder 1 - Left */}
                  <div className="absolute left-4 md:left-8 top-12 transform -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer group/founder1">
                    <div className="w-28 h-36 md:w-32 md:h-40 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl shadow-2xl flex items-end p-4 border-2 border-white/20 group-hover/founder1:shadow-blue-500/50 transition-all duration-300">
                      <div className="w-full space-y-2">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full mx-auto group-hover/founder1:scale-110 transition-transform duration-300 flex items-center justify-center">
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="h-2 bg-white/70 rounded w-3/4 mx-auto animate-pulse"></div>
                        <div className="h-2 bg-white/50 rounded w-1/2 mx-auto animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-pulse">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Founder 2 - Right */}
                  <div className="absolute right-4 md:right-8 top-8 transform rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer group/founder2">
                    <div className="w-28 h-36 md:w-32 md:h-40 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-2xl shadow-2xl flex items-end p-4 border-2 border-white/20 group-hover/founder2:shadow-purple-500/50 transition-all duration-300">
                      <div className="w-full space-y-2">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full mx-auto group-hover/founder2:scale-110 transition-transform duration-300 flex items-center justify-center">
                          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                        </div>
                        <div className="h-2 bg-white/70 rounded w-3/4 mx-auto animate-pulse"></div>
                        <div className="h-2 bg-white/50 rounded w-1/2 mx-auto animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-pulse" style={{animationDelay: '0.5s'}}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Center Benefits Badge */}
                  <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 animate-[fadeInUp_1s_ease-out_1s] opacity-0 [animation-fill-mode:forwards]">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 flex items-center space-x-3 border border-gray-200 dark:border-gray-700 hover:scale-110 hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer group/badge">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover/badge:rotate-12 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Total Benefits</div>
                        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">₹30L+</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating perk icons */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-float">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg hover:scale-110 transition-transform cursor-pointer">
                      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 animate-float" style={{animationDelay: '1.5s'}}>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg hover:scale-110 transition-transform cursor-pointer">
                      <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full opacity-20 dark:opacity-30 blur-3xl animate-float"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 dark:opacity-30 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -left-8 w-24 h-24 bg-indigo-500 rounded-full opacity-10 dark:opacity-20 blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
});

StartupPerks.displayName = 'StartupPerks';

export default StartupPerks;
