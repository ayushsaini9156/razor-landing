import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const slides = [
    {
      title: 'Easy In-Store Payments',
      subtitle: 'for India\'s boldest disruptors',
      features: 'Quick Payments | Seamless Integration | Top-tier UPI stack',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Payment Infrastructure',
      subtitle: 'for the Internet',
      features: 'Accept payments | Send payouts | Manage your business',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Business Banking',
      subtitle: 'that understands your needs',
      features: 'Current Account | Corporate Cards | Vendor Payments',
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/40 dark:to-purple-900/40 pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden transition-colors duration-300">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Decorative shapes with enhanced animations */}
      <div className="absolute top-32 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-700 rounded-full opacity-20 dark:opacity-30 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-500 dark:from-indigo-600 dark:to-purple-700 rounded-full opacity-20 dark:opacity-30 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-500 dark:from-purple-600 dark:to-pink-700 rounded-full opacity-10 dark:opacity-20 blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 dark:bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start min-h-[650px]">
          
          {/* Left Column - Text Content */}
          <div className={`space-y-6 text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm animate-[slideInLeft_0.8s_ease-out]">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trusted by 10M+ businesses</span>
            </div>
            
            {/* Carousel Navigation */}
            <div className="flex items-center gap-3 mb-4">
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="group p-3 rounded-xl bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-blue-900/30 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/60 dark:hover:to-indigo-900/60 transition-all duration-300 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-x-1"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Dot Indicators */}
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === idx 
                        ? 'w-8 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400' 
                        : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="group p-3 rounded-xl bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-blue-900/30 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/60 dark:hover:to-indigo-900/60 transition-all duration-300 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:translate-x-1"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Headline with transition */}
            <div key={currentSlide} className="animate-[fadeInUp_0.6s_ease-out]">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                <span className={`bg-gradient-to-r ${slides[currentSlide].gradient} dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300`}>
                  {slides[currentSlide].title}
                </span>
                <br />
                <span className="text-gray-900 dark:text-white inline-block transform hover:translate-x-2 transition-transform duration-300">{slides[currentSlide].subtitle}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {slides[currentSlide].features}
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 mb-8 animate-[fadeInUp_0.8s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">50M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Transactions</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">10M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Businesses</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-[fadeInUp_1s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]">
              <button className="group px-8 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-blue-600 dark:text-blue-400 font-semibold rounded-xl border-2 border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg">
                <span className="flex items-center gap-2">
                  View Demo
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Product Image/Mockup */}
          <div className={`relative transition-all duration-1000 delay-300 lg:sticky lg:top-24 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative max-w-lg mx-auto">
              {/* Glowing effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-40 dark:opacity-60 animate-pulse"></div>
              
              {/* Product showcase with 3D effect */}
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl shadow-2xl p-6 md:p-8 transform hover:scale-[1.02] hover:rotate-1 transition-all duration-500 border border-white/10">
                {/* Product Card Header */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 mb-4 md:mb-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs md:text-sm font-semibold mb-1 group-hover:translate-x-1 transition-transform">Razorpay POS</div>
                      <div className="text-xs opacity-80">POWERED BY WOW! MOMO</div>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  </div>
                </div>
                
                {/* Device Mockup */}
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl transform hover:rotate-1 transition-transform duration-300 hover:shadow-blue-500/20">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 rounded-xl overflow-hidden relative group">
                    {/* Shimmer effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    {/* POS Screen */}
                    <div className="absolute inset-0 p-4 flex flex-col">
                      {/* Logo */}
                      <div className="flex justify-center mb-4 animate-[fadeInUp_0.6s_ease-out]">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer">
                          <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Payment Info */}
                      <div className="space-y-2 mb-4 animate-[fadeInUp_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                        <div className="h-2.5 bg-gray-300 rounded-full w-3/4 mx-auto animate-pulse"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-1/2 mx-auto animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      </div>
                      
                      {/* Amount Display */}
                      <div className="flex-1 flex items-center justify-center animate-[fadeInUp_1s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                        <div className="text-center space-y-2 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                          <div className="text-xs md:text-sm text-gray-500 font-medium">Amount</div>
                          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">₹ 1,250</div>
                        </div>
                      </div>
                      
                      {/* QR Code */}
                      <div className="w-24 h-24 md:w-28 md:h-28 mx-auto bg-white border-4 border-gray-300 rounded-xl p-2 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-[fadeInUp_1.2s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg relative overflow-hidden">
                          <div className="absolute inset-2 grid grid-cols-4 grid-rows-4 gap-0.5">
                            {[...Array(16)].map((_, i) => (
                              <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent'} rounded-sm hover:bg-blue-400 transition-colors duration-300`}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-center text-gray-500 mt-2 animate-[fadeInUp_1.4s_ease-out_0.8s] opacity-0 [animation-fill-mode:forwards]">
                        <span className="inline-flex items-center gap-1">
                          Scan to Pay
                          <svg className="w-3 h-3 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Founder Badge */}
                <div className="mt-4 md:mt-6 text-white text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="text-xs uppercase tracking-wide opacity-70 mb-1">WOW! MOMO FOUNDER</div>
                  <div className="text-xl md:text-2xl font-signature italic bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Sagar</div>
                </div>
              </div>
              
              {/* Floating Elements with enhanced animations */}
              <div className="absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-blue-400 rounded-full opacity-20 blur-2xl animate-float pointer-events-none"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 md:w-40 md:h-40 bg-indigo-400 rounded-full opacity-20 blur-2xl animate-float pointer-events-none" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/2 -right-10 w-20 h-20 bg-purple-400 rounded-full opacity-10 blur-2xl animate-float pointer-events-none" style={{animationDelay: '2.5s'}}></div>
              
              {/* Floating icons around the card */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-float hover:scale-110 transition-transform cursor-pointer">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-float hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '1s'}}>
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="absolute top-1/3 -left-6 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-float hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '2s'}}>
                <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;