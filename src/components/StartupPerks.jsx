import React, { memo } from 'react';

const StartupPerks = memo(() => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Blue Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white animate-[slideInLeft_0.8s_ease-out_forwards] opacity-0">
            <h2 className="text-5xl font-bold mb-4">₹30L in benefits</h2>
            <h3 className="text-4xl font-bold mb-6">with Razorpay</h3>
            <h3 className="text-4xl font-bold mb-8">Startup Perks</h3>
            
            <div className="w-24 h-1 bg-white/30 mb-8"></div>
            
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Know More
            </button>
          </div>

          {/* Right - Founders Illustration */}
          <div className="relative animate-[slideInRight_0.8s_ease-out_forwards] opacity-0">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl overflow-hidden p-8">
              <div className="aspect-[4/3] flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Founder 1 - Left */}
                  <div className="absolute left-8 top-12 transform -rotate-6 hover:rotate-0 transition-all duration-300">
                    <div className="w-32 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl flex items-end p-4">
                      <div className="w-full space-y-2">
                        <div className="w-12 h-12 bg-white/90 rounded-full mx-auto"></div>
                        <div className="h-2 bg-white/70 rounded w-3/4 mx-auto"></div>
                        <div className="h-2 bg-white/50 rounded w-1/2 mx-auto"></div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                  </div>

                  {/* Founder 2 - Right */}
                  <div className="absolute right-8 top-8 transform rotate-6 hover:rotate-0 transition-all duration-300">
                    <div className="w-32 h-40 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-2xl flex items-end p-4">
                      <div className="w-full space-y-2">
                        <div className="w-12 h-12 bg-white/90 rounded-full mx-auto"></div>
                        <div className="h-2 bg-white/70 rounded w-3/4 mx-auto"></div>
                        <div className="h-2 bg-white/50 rounded w-1/2 mx-auto"></div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                  </div>

                  {/* Center Benefits Badge */}
                  <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2">
                    <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Benefits</div>
                        <div className="text-lg font-bold text-gray-900">₹30L+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl animate-float"></div>
            <div className="absolute -top-4 -right-4 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
});

StartupPerks.displayName = 'StartupPerks';

export default StartupPerks;
