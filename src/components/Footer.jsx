import React, { memo } from 'react';

// Simple Social Icon SVGs
const FacebookIcon = () => (
    <svg className="w-6 h-6 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg className="w-6 h-6 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.162 5.654a8.384 8.384 0 01-2.427.665 4.195 4.195 0 001.83-2.336 8.423 8.423 0 01-2.677 1.026 4.187 4.187 0 00-7.143 3.81 11.823 11.823 0 01-8.583-4.346 4.196 4.196 0 001.293 5.584 4.168 4.168 0 01-1.896-.523v.053a4.194 4.194 0 003.368 4.103 4.226 4.226 0 01-1.89.072 4.19 4.19 0 003.906 2.91 8.425 8.425 0 01-5.21 1.802c-.339 0-.675-.02-.998-.06.436.257.946.406 1.496.406 1.795 0 3.395-.607 4.526-1.603 1.13-1 1.944-2.302 2.3-3.79A11.867 11.867 0 0012 12c.76 0 1.503.09 2.22.26.06-.06.12-.12.18-.18.72-.72 1.45-1.45 2.18-2.18.73-.73 1.46-1.46 2.19-2.19.1-.1.2-.2.3-.3.07-.07.13-.14.2-.21z" />
    </svg>
  );

const InstagramIcon = () => (
  <svg className="w-6 h-6 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2c2.716 0 3.056.012 4.12.06c1.064.049 1.79.22 2.428.465a4.904 4.904 0 011.897 1.258 4.904 4.904 0 011.258 1.897c.246.638.417 1.364.465 2.428.048 1.064.06 1.404.06 4.12v.06c0 2.716-.012 3.056-.06 4.12-.049 1.064-.22 1.79-.465 2.428a4.904 4.904 0 01-1.258 1.897 4.904 4.904 0 01-1.897 1.258c-.638.246-1.364.417-2.428.465-1.064.048-1.404.06-4.12.06h-.06c-2.716 0-3.056-.012-4.12-.06-1.064-.049-1.79-.22-2.428-.465a4.904 4.904 0 01-1.897-1.258 4.904 4.904 0 01-1.258-1.897c-.246-.638-.417-1.364-.465-2.428-.048-1.064-.06-1.404-.06-4.12v-.06c0-2.716.012-3.056.06-4.12.049-1.064.22-1.79.465-2.428a4.904 4.904 0 011.258-1.897A4.904 4.904 0 015.654 2.46c.638-.246 1.364-.417 2.428-.465C9.12 1.932 9.46 1.92 12 1.92h.06zm0 2.22a7.86 7.86 0 100 15.72 7.86 7.86 0 000-15.72zm0 3.483a4.377 4.377 0 110 8.754 4.377 4.377 0 010-8.754zm5.023-1.616a1.047 1.047 0 100 2.094 1.047 1.047 0 000-2.094z" clipRule="evenodd" />
  </svg>
);

const Footer = memo(() => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 relative overflow-hidden border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400 via-pink-400 to-blue-400 dark:from-purple-600 dark:via-pink-600 dark:to-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Top Section with CTA */}
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 mb-16 text-center transform hover:scale-[1.02] transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-purple-500/50 overflow-hidden group">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">Ready to get started?</h3>
            <p className="text-lg md:text-xl mb-6 text-white/90 max-w-2xl mx-auto">
              Join 10,000+ businesses growing with Razorpay. Start accepting payments in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-blue-600 dark:text-indigo-600 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:bg-gray-50 dark:hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                Sign Up Now →
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/20 dark:hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 mb-12">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-2">
            <a href="/" className="mb-6 inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1 -m-1">
              <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="140" height="40" rx="8" fill="url(#paint0_linear_footer)" />
                <path d="M30 12L40 20L30 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="50" y="26" fill="white" className="font-bold text-xl">Razorpay</text>
                <defs>
                  <linearGradient id="paint0_linear_footer" x1="0" y1="0" x2="140" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6"/>
                    <stop offset="1" stopColor="#8B5CF6"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="sr-only">Razorpay Home</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              India's leading payment gateway trusted by 10M+ businesses. Accept payments, automate payouts, and scale your business with our complete financial suite.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700 dark:text-gray-300">PCI DSS Level 1 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700 dark:text-gray-300">RBI Approved Payment Aggregator</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700 dark:text-gray-300">99.99% Uptime Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Payment Gateway</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Payment Links</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Payment Pages</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Subscriptions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Smart Collect</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Route</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Payouts</a></li>
            </ul>
          </div>

          {/* Column 3: Banking */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Banking+</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">RazorpayX</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Current Account</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Payroll</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Vendor Payments</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Tax Payments</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Corporate Cards</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Partners</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Enterprise</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 5: Resources */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Support Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Webinars</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 -m-1 block">Community</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 pb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Stay Updated</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Get the latest updates on new products and upcoming sales</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; {year} Razorpay. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Security</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Follow us:</span>
            <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-200 hover:scale-110">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-200 hover:scale-110">
              <TwitterIcon />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-pink-600 dark:hover:bg-pink-500 hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-200 hover:scale-110">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-700 dark:hover:bg-blue-600 hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-200 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-red-600 dark:hover:bg-red-500 hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-200 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
