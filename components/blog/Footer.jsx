'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-black text-white">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4">InsightBlog</h3>
              <p className="text-slate-400 text-sm max-w-xs">
                Your source for quality articles on technology, design, and professional growth.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20v-7.21H5.93v-2.94h2.36V7.33c0-2.33 1.43-3.61 3.48-3.61.99 0 1.84.07 2.09.1v2.42h-1.44c-1.13 0-1.35.53-1.35 1.32v1.73h2.69l-.35 2.94h-2.34V20H8.29z" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 002.856-3.47 10 10 0 01-2.856 1.102 4.993 4.993 0 00-8.631 4.555A14.148 14.148 0 011.671 3.149a4.993 4.993 0 001.523 6.573 4.992 4.992 0 01-2.26-.616v.06a4.993 4.993 0 003.997 4.9 4.996 4.996 0 01-2.212.085 4.994 4.994 0 004.644 3.461A10.025 10.025 0 010 14.966a14.34 14.34 0 007.671 2.496c9.143 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.789 0-9.514h3.554v1.347c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.586 4.251 4.995v4.745zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.958.77-1.715 1.958-1.715 1.187 0 1.927.757 1.927 1.715 0 .953-.74 1.715-1.97 1.715zm1.581 11.597H3.635V9.738h3.283v10.714zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Videos
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Professional
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Interviews
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-sm text-center">
              © {currentYear} InsightBlog. All rights reserved. | Made with ❤️ by developers for developers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
