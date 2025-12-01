import React, { useState, useEffect, memo } from 'react';

// Hamburger Icon SVG
const HamburgerIcon = ({ isOpen }) => (
  <svg
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {isOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    )}
  </svg>
);

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownData = {
    payments: [
      { name: 'Payment Gateway', desc: 'Accept payments online', icon: '💳' },
      { name: 'Payment Links', desc: 'Share & collect payments', icon: '🔗' },
      { name: 'Payment Pages', desc: 'No-code payment pages', icon: '📄' },
      { name: 'Subscriptions', desc: 'Recurring billing', icon: '🔄' },
    ],
    banking: [
      { name: 'RazorpayX', desc: 'Business banking', icon: '🏦' },
      { name: 'Current Account', desc: 'Zero balance account', icon: '💰' },
      { name: 'Corporate Cards', desc: 'Expense management', icon: '💳' },
      { name: 'Vendor Payments', desc: 'Automate payouts', icon: '📤' },
    ],
    resources: [
      { name: 'Documentation', desc: 'API references', icon: '📚' },
      { name: 'Blog', desc: 'Latest updates', icon: '📝' },
      { name: 'Support', desc: 'Get help', icon: '💬' },
      { name: 'Case Studies', desc: 'Success stories', icon: '📊' },
    ],
  };

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const newIsDark = !isDark;
    
    setIsDark(newIsDark);
    
    if (newIsDark) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Dark mode activated');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Light mode activated');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50/95 via-indigo-50/95 to-purple-50/95 dark:from-gray-900/95 dark:via-blue-900/30 dark:to-purple-900/30 backdrop-blur-xl shadow-lg border-b border-blue-200/50 dark:border-blue-800/50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1 -m-1">
          <svg className="w-32 h-8" viewBox="0 0 120 30" fill="none">
            <path d="M10 8L16 15L10 22" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="22" y="20" fill="currentColor" className="font-bold text-lg fill-gray-900 dark:fill-white">Razorpay</text>
          </svg>
          <span className="sr-only">Razorpay Home</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Payments Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown('payments')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1">
              Payments
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'payments' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'payments' && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50 animate-[fadeInUp_0.2s_ease-out]">
                {dropdownData.payments.map((item, idx) => (
                  <a key={idx} href="#" className="flex items-start gap-3 px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors group">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">{item.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Banking+ Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown('banking')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1">
              Banking+
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'banking' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'banking' && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50 animate-[fadeInUp_0.2s_ease-out]">
                {dropdownData.banking.map((item, idx) => (
                  <a key={idx} href="#" className="flex items-start gap-3 px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors group">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">{item.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1">Payroll</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1">Partners</a>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown('resources')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1">
              Resources
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'resources' && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50 animate-[fadeInUp_0.2s_ease-out]">
                {dropdownData.resources.map((item, idx) => (
                  <a key={idx} href="#" className="flex items-start gap-3 px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors group">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">{item.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1">Pricing</a>
        </div>

        {/* CTA Buttons - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" 
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Support Icon */}
          <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" aria-label="Support">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          
          {/* India Flag Dropdown */}
          <button className="flex items-center space-x-1 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span className="text-2xl">🇮🇳</span>
            <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <button
            className="px-6 py-2 text-blue-600 dark:text-blue-400 font-semibold border border-blue-600 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Login to Razorpay"
          >
            Login
          </button>
          <button
            className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Sign Up for Razorpay"
          >
            Sign Up →
          </button>
        </div>

        {/* Mobile Theme Toggle & Hamburger */}
        <div className="lg:hidden flex items-center space-x-2">
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" 
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          
          <button
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white dark:bg-gray-900 pb-4 shadow-inner border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-cyan-500 dark:hover:text-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">Products</a>
            <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-cyan-500 dark:hover:text-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">Solutions</a>
            <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-cyan-500 dark:hover:text-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">Developers</a>
            <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-cyan-500 dark:hover:text-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">Resources</a>
            <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-cyan-500 dark:hover:text-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">Pricing</a>
            <button
              className="mt-4 px-6 py-2 bg-cyan-500 dark:bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 dark:hover:bg-cyan-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              aria-label="Get Started with Razorpay"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
