import React, { useState, memo } from 'react';

const industries = [
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    title: 'Empower your',
    highlight: 'e-commerce business',
    description: 'Streamline payment management with a unified dashboard, enabling both online and in-person payment collection while enhancing conversion rates and minimizing fraud.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    companies: ['Flipkart', 'Myntra', 'Nykaa', 'Meesho'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'education',
    name: 'Education',
    title: 'Transform your',
    highlight: 'education platform',
    description: 'Accept fees seamlessly with automated recurring payments, instant settlements, and comprehensive reports. Enable students to pay through multiple payment modes.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    companies: ['BYJU\'S', 'Unacademy', 'UpGrad', 'Coursera'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'bfsi',
    name: 'BFSI',
    title: 'Revolutionize your',
    highlight: 'financial services',
    description: 'Build seamless payment experiences for insurance premiums, loan EMIs, and investment transactions with our secure and compliant payment infrastructure.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    companies: ['HDFC', 'ICICI', 'Paytm Money', 'Zerodha'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'saas',
    name: 'SaaS',
    title: 'Scale your',
    highlight: 'SaaS platform',
    description: 'Automate subscription billing, manage trials, handle upgrades/downgrades, and reduce involuntary churn with smart retry logic and intelligent routing.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    companies: ['Freshworks', 'Zoho', 'Clevertap', 'Postman'],
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'freelancer',
    name: 'Freelancer',
    title: 'Simplify your',
    highlight: 'freelance payments',
    description: 'Accept payments globally, create professional invoices, track payments, and get paid instantly. Perfect for consultants, designers, and developers.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80',
    companies: ['Upwork', 'Fiverr', 'Toptal', 'Freelancer'],
    color: 'from-orange-500 to-red-600'
  }
];

const IndustryShowcase = memo(() => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (industry) => {
    if (industry.id === activeIndustry.id) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndustry(industry);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Powering every industry.
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Powering all disruptors.
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 pb-4 border-b border-gray-200 dark:border-gray-700 animate-[fadeInUp_0.8s_ease-out_forwards_0.2s] opacity-0">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => handleTabChange(industry)}
              className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                activeIndustry.id === industry.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg scale-105'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div 
            className={`space-y-6 transition-all duration-500 ${
              isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
            }`}
          >
            <div>
              <h4 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {activeIndustry.title}
              </h4>
              <h4 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${activeIndustry.color} bg-clip-text text-transparent mb-6`}>
                {activeIndustry.highlight}
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {activeIndustry.description}
              </p>
            </div>

            {/* Company Logos */}
            <div className="pt-6">
              <div className="flex flex-wrap items-center gap-6">
                {activeIndustry.companies.map((company, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:shadow-md transition-shadow duration-200"
                  >
                    {company}
                  </div>
                ))}
                <div className="text-gray-500 dark:text-gray-400 font-medium">
                  + 70,000 others
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className={`px-8 py-4 bg-gradient-to-r ${activeIndustry.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300`}>
                Explore Solutions →
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div 
            className={`relative transition-all duration-500 ${
              isTransitioning ? 'opacity-0 scale-95 translate-x-8' : 'opacity-100 scale-100 translate-x-0'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activeIndustry.color} opacity-20 z-10`}></div>
              
              {/* Image */}
              <img 
                src={activeIndustry.image}
                alt={activeIndustry.name}
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Icons */}
              <div className="absolute top-8 right-8 z-20 space-y-4">
                <div className="w-16 h-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center animate-float">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="w-16 h-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-16 h-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute bottom-8 left-8 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 min-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${activeIndustry.color} rounded-xl flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">98.5%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

IndustryShowcase.displayName = 'IndustryShowcase';

export default IndustryShowcase;
