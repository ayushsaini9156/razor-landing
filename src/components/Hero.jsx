import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Easy In-Store Payments',
      subtitle: 'for India\'s boldest disruptors',
      features: 'Quick Payments | Seamless Integration | Top-tier UPI stack'
    },
    {
      title: 'Payment Infrastructure',
      subtitle: 'for the Internet',
      features: 'Accept payments | Send payouts | Manage your business'
    },
    {
      title: 'Business Banking',
      subtitle: 'that understands your needs',
      features: 'Current Account | Corporate Cards | Vendor Payments'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/40 dark:to-purple-900/40 pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden transition-colors duration-300">
      {/* Decorative shapes */}
      <div className="absolute top-32 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-700 rounded-full opacity-20 dark:opacity-30 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-500 dark:from-indigo-600 dark:to-purple-700 rounded-full opacity-20 dark:opacity-30 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start min-h-[650px]">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-left animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0">
            
            {/* Carousel Navigation */}
            <div className="flex items-center space-x-4 mb-4">
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="p-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 hover:from-blue-200 hover:to-indigo-200 dark:hover:from-blue-800/60 dark:hover:to-indigo-800/60 transition-all duration-200 border border-blue-200/50 dark:border-blue-700/50"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="p-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 hover:from-blue-200 hover:to-indigo-200 dark:hover:from-blue-800/60 dark:hover:to-indigo-800/60 transition-all duration-200 border border-blue-200/50 dark:border-blue-700/50"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Headline with transition */}
            <div className="transition-all duration-500 ease-in-out">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">{slides[currentSlide].subtitle}</span>
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {slides[currentSlide].features}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:via-indigo-600 dark:hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Sign Up Now →
              </button>
              <button className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Know More
              </button>
            </div>
          </div>

          {/* Right Column - Product Image/Mockup */}
          <div className="relative animate-[fadeInUp_0.8s_ease-out_forwards_0.3s] opacity-0 lg:sticky lg:top-24">
            <div className="relative max-w-lg mx-auto">
              {/* Product showcase with 3D effect */}
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl shadow-2xl p-6 md:p-8 transform hover:scale-[1.02] transition-all duration-500">
                {/* Product Card Header */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 mb-4 md:mb-6 text-white border border-white/20">
                  <div className="text-xs md:text-sm font-semibold mb-1">Razorpay POS</div>
                  <div className="text-xs opacity-80">POWERED BY WOW! MOMO</div>
                </div>
                
                {/* Device Mockup */}
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl transform hover:rotate-1 transition-transform duration-300">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 rounded-xl overflow-hidden relative">
                    {/* POS Screen */}
                    <div className="absolute inset-0 p-4 flex flex-col">
                      {/* Logo */}
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                          <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Payment Info */}
                      <div className="space-y-2 mb-4">
                        <div className="h-2.5 bg-gray-300 rounded-full w-3/4 mx-auto"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-1/2 mx-auto"></div>
                      </div>
                      
                      {/* Amount Display */}
                      <div className="flex-1 flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <div className="text-xs md:text-sm text-gray-500 font-medium">Amount</div>
                          <div className="text-2xl md:text-3xl font-bold text-gray-800">₹ 1,250</div>
                        </div>
                      </div>
                      
                      {/* QR Code */}
                      <div className="w-24 h-24 md:w-28 md:h-28 mx-auto bg-white border-4 border-gray-300 rounded-xl p-2 shadow-md">
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg relative overflow-hidden">
                          <div className="absolute inset-2 grid grid-cols-4 grid-rows-4 gap-0.5">
                            {[...Array(16)].map((_, i) => (
                              <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent'} rounded-sm`}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-center text-gray-500 mt-2">Scan to Pay</div>
                    </div>
                  </div>
                </div>
                
                {/* Founder Badge */}
                <div className="mt-4 md:mt-6 text-white text-center">
                  <div className="text-xs uppercase tracking-wide opacity-70 mb-1">WOW! MOMO FOUNDER</div>
                  <div className="text-xl md:text-2xl font-signature italic">Sagar</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-blue-400 rounded-full opacity-20 blur-2xl animate-float pointer-events-none"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 md:w-40 md:h-40 bg-indigo-400 rounded-full opacity-20 blur-2xl animate-float pointer-events-none" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;