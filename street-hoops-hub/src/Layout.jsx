import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from './utils';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'About & Get Involved', page: 'AboutAndGetInvolved' },
  ];

  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600;700;800;900&display=swap');
        
        :root {
          --navy: #1E3A5F;
          --orange: #FF8C00;
          --gold: #FFD700;
          --light-blue: #7DB9E8;
          --light-gray: #F0F4F8;
          --urban-dark: #0a1628;
          --street-orange: #FF6B00;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
        }
        
        h1, h2, h3, .headline {
          font-family: 'Bebas Neue', cursive;
          letter-spacing: 0.5px;
        }
      `}</style>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-[var(--orange)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex-shrink-0">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6960549f0752b9e1ec43bff1/9db46aaf7_a4ff6a24-b98f-42bc-a235-ee5d46e914c9.png" 
                alt="HCSHy1000 - Hub City Street Hoops Logo" 
                className="h-16 w-auto"
                width="120"
                height="64"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`text-base font-bold tracking-wide transition-all relative ${
                    currentPageName === link.page
                      ? 'text-[var(--orange)]'
                      : 'text-[var(--navy)] hover:text-[var(--orange)]'
                  }`}
                >
                  {link.name}
                  {currentPageName === link.page && (
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[var(--orange)]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                asChild
                className="bg-[var(--orange)] hover:bg-[var(--street-orange)] text-white font-bold tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(255,140,0,0.5)] transition-all duration-300 transform hover:scale-110"
              >
                <Link to={createPageUrl('AboutAndGetInvolved')}>GET INVOLVED</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[var(--navy)]"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto border-t-4 border-[var(--orange)]">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-lg font-medium ${
                    currentPageName === link.page
                      ? 'text-[var(--orange)]'
                      : 'text-[var(--navy)]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  asChild
                  className="w-full bg-[var(--orange)] hover:bg-[var(--street-orange)] text-white h-14 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to={createPageUrl('AboutAndGetInvolved')} onClick={() => setMobileMenuOpen(false)}>
                    GET INVOLVED
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[var(--urban-dark)] text-white border-t-4 border-[var(--orange)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-[var(--orange)]">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <a href="tel:8062837868" className="block hover:text-[var(--orange)] transition-colors">(806) 283-7868</a>
                <a href="mailto:hcshy1000@yahoo.com" className="block hover:text-[var(--orange)] transition-colors">hcshy1000@yahoo.com</a>
                <p className="mt-4">Lubbock, Texas</p>
                <a href="https://hubcitystreethoops.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--orange)] transition-colors">hubcitystreethoops.com</a>
                <a href="https://www.facebook.com/hubcitystreethoops" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--orange)] transition-colors mt-2">
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-[var(--orange)]">Quick Links</h3>
              <div className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="block hover:text-[var(--orange)] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-[var(--orange)]">Stay Connected</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=100070226963288&sk=photos" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition-colors" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://instagram.com/hcsh_y1000" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition-colors" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* 501(c)(3) Badge */}
            <div>
              <div className="bg-[var(--orange)] text-white rounded-lg p-6 text-center">
                <p className="text-2xl font-bold mb-2">501(c)(3)</p>
                <p className="text-sm">Nonprofit Organization</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 HCSHy1000 - Hub City Street Hoops. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}