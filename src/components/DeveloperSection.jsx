import React, { useState, memo } from 'react';

const developerFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Integrations',
    description: 'Find all popular platform SDKs, plugin, server integrations in our integration stack.',
    link: 'View Docs'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'API Reference',
    description: 'Comprehensive documentation to build powerful payment solutions.',
    link: 'View Docs'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Webhooks',
    description: 'Receive real-time notifications for all payment related transactions and events.',
    link: 'View Docs'
  }
];

const codeSnippets = {
  curl: `curl -u [YOUR_KEY_ID]:[YOUR_KEY_SECRET] \\
  -X POST https://api.razorpay.com/v1/orders \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 50000,
    "currency": "INR",
    "receipt": "receipt#1"
  }'`,
  node: `const Razorpay = require('razorpay');

const instance = new Razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET'
});

const order = await instance.orders.create({
  amount: 50000,
  currency: "INR",
  receipt: "receipt#1"
});`,
  python: `import razorpay

client = razorpay.Client(
  auth=("YOUR_KEY_ID", "YOUR_KEY_SECRET")
)

order = client.order.create({
  "amount": 50000,
  "currency": "INR",
  "receipt": "receipt#1"
})`,
  php: `<?php
require('razorpay-php/Razorpay.php');

use Razorpay\\Api\\Api;

$api = new Api($key_id, $key_secret);

$order = $api->order->create([
  'amount' => 50000,
  'currency' => 'INR',
  'receipt' => 'receipt#1'
]);`
};

const DeveloperSection = memo(() => {
  const [activeLanguage, setActiveLanguage] = useState('curl');
  const [copied, setCopied] = useState(false);

  const languages = [
    { id: 'curl', name: 'cURL' },
    { id: 'node', name: 'Node.js' },
    { id: 'python', name: 'Python' },
    { id: 'php', name: 'PHP' }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[activeLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-4 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
            Razorpay is built
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-green-400 break-words">&lt;for developers by developers&gt;</span>
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 animate-[fadeInUp_0.8s_ease-out_forwards_0.2s] opacity-0">
          {developerFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 md:mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{feature.title}</h4>
              <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">{feature.description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
              >
                {feature.link}
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Code Example Section */}
        <div className="animate-[fadeInUp_0.8s_ease-out_forwards_0.4s] opacity-0">
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
            {/* Left - Try it out */}
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                Try it out
                <br className="hidden sm:block" />
                for yourself
              </h4>
              <svg className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto lg:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Right - Code Editor */}
            <div className="flex-1 w-full">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Editor Header */}
                <div className="bg-slate-900/90 px-3 md:px-6 py-3 md:py-4 border-b border-white/10 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                    {/* Language Tabs */}
                    <div className="flex gap-1 md:gap-2 overflow-x-auto scrollbar-hide">
                      {languages.map((lang) => (
                        <button
                          key={lang.id}
                          onClick={() => setActiveLanguage(lang.id)}
                          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-medium text-sm md:text-base whitespace-nowrap transition-all duration-200 ${
                            activeLanguage === lang.id
                              ? 'bg-blue-500 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-slate-700'
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 md:gap-3">
                    <button
                      onClick={copyToClipboard}
                      className="p-1.5 md:p-2 hover:bg-slate-700 rounded-lg transition-colors group"
                      title={copied ? 'Copied!' : 'Copy code'}
                    >
                      {copied ? (
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                    <button className="p-1.5 md:p-2 hover:bg-slate-700 rounded-lg transition-colors hidden sm:block">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-4 md:p-6 overflow-x-auto">
                  <pre className="text-xs sm:text-sm md:text-base">
                    <code className="text-gray-300 font-mono whitespace-pre">
                      {codeSnippets[activeLanguage]}
                    </code>
                  </pre>
                </div>

                {/* Footer */}
                <div className="bg-slate-900/50 px-4 md:px-6 py-2.5 md:py-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="whitespace-nowrap">API Endpoint Ready</span>
                  </div>
                  <button className="text-xs md:text-sm text-blue-400 hover:text-blue-300 font-medium whitespace-nowrap">
                    Run Example →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center px-4 animate-[fadeInUp_0.8s_ease-out_forwards_0.6s] opacity-0">
          <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6">
            Explore comprehensive documentation and start building today
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm md:text-base font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap">
              View Full Documentation →
            </button>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm md:text-base font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
              Join Developer Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

DeveloperSection.displayName = 'DeveloperSection';

export default DeveloperSection;
