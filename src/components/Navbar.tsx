import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, subParam?: string) => void;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onRequestQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string, subParam?: string) => {
    onNavigate(page, subParam);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs py-2.5'
            : 'bg-white border-b border-neutral-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Authentic MN Services Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group text-left flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0678AE] rounded-sm py-1 cursor-pointer"
              aria-label="MN Services Home"
            >
              <img
                src="/src/assets/logo_transparent.png"
                alt="MN Services"
                className="h-8 sm:h-9 md:h-10 w-auto max-w-[200px] sm:max-w-[240px] object-contain"
                onError={(e) => {
                  // Fallback to original logo if needed
                  const target = e.currentTarget;
                  if (target.src.indexOf('logo.png') === -1) {
                    target.src = '/src/assets/logo.png';
                  }
                }}
              />
            </button>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700">
              <button
                onClick={() => handleNavClick('home')}
                className={`transition-colors hover:text-[#0678AE] relative py-1 cursor-pointer ${
                  currentPage === 'home'
                    ? 'text-[#0678AE] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#09B199]'
                    : ''
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`transition-colors hover:text-[#0678AE] relative py-1 cursor-pointer ${
                  currentPage === 'about'
                    ? 'text-[#0678AE] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#09B199]'
                    : ''
                }`}
              >
                About
              </button>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('services')}
                  className={`flex items-center gap-1 transition-colors hover:text-[#0678AE] relative py-1 cursor-pointer ${
                    currentPage === 'services' || currentPage === 'service-detail'
                      ? 'text-[#0678AE] font-semibold'
                      : ''
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-neutral-100 py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-4 py-2 border-b border-neutral-100 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Commercial Facilities
                    </div>
                    {SERVICES_DATA.map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => handleNavClick('service-detail', srv.id)}
                        className="w-full text-left px-4 py-2.5 text-xs sm:text-sm text-neutral-700 hover:bg-[#E8F8F5] hover:text-[#0678AE] flex items-center justify-between group transition-colors cursor-pointer"
                      >
                        <span className="font-medium">{srv.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#09B199] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                    <div className="border-t border-neutral-100 mt-1 pt-1 px-4 py-2">
                      <button
                        onClick={() => handleNavClick('services')}
                        className="text-xs font-semibold text-[#0678AE] hover:text-[#09B199] hover:underline cursor-pointer"
                      >
                        View All Services &rarr;
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('industries')}
                className={`transition-colors hover:text-[#0678AE] relative py-1 cursor-pointer ${
                  currentPage === 'industries'
                    ? 'text-[#0678AE] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#09B199]'
                    : ''
                }`}
              >
                Industries
              </button>

              <button
                onClick={() => handleNavClick('service-areas')}
                className={`transition-colors hover:text-[#0678AE] relative py-1 cursor-pointer ${
                  currentPage === 'service-areas'
                    ? 'text-[#0678AE] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#09B199]'
                    : ''
                }`}
              >
                Service Areas
              </button>

              <button
                onClick={() => handleNavClick('careers')}
                className={`transition-colors hover:text-[#0678AE] relative py-1 cursor-pointer ${
                  currentPage === 'careers'
                    ? 'text-[#0678AE] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#09B199]'
                    : ''
                }`}
              >
                Careers
              </button>
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="hidden md:flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-[#0678AE] transition-colors py-1.5 px-2 rounded cursor-pointer"
                title="Call MN Services Direct"
              >
                <Phone className="w-3.5 h-3.5 text-[#09B199]" />
                <span className="tabular-nums">{COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={onRequestQuote}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0678AE] hover:bg-[#055C86] rounded-md transition-colors whitespace-nowrap shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0678AE] cursor-pointer"
              >
                Request a Free Quote
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-700 hover:text-[#0678AE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0678AE] rounded-md cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6 pt-16">
              <div className="border-b border-neutral-100 pb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                  Navigation
                </span>
                <div className="mt-3 flex flex-col space-y-3">
                  <button
                    onClick={() => handleNavClick('home')}
                    className="text-left text-base font-medium text-neutral-800 hover:text-[#0B2545] py-1"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="text-left text-base font-medium text-neutral-800 hover:text-[#0B2545] py-1"
                  >
                    About MN Services
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="text-left text-base font-medium text-neutral-800 hover:text-[#0B2545] py-1"
                  >
                    All Services (6 Divisions)
                  </button>
                  <button
                    onClick={() => handleNavClick('industries')}
                    className="text-left text-base font-medium text-neutral-800 hover:text-[#0B2545] py-1"
                  >
                    Industries Served
                  </button>
                  <button
                    onClick={() => handleNavClick('service-areas')}
                    className="text-left text-base font-medium text-neutral-800 hover:text-[#0B2545] py-1"
                  >
                    Twin Cities Service Areas
                  </button>
                  <button
                    onClick={() => handleNavClick('careers')}
                    className="text-left text-base font-medium text-neutral-800 hover:text-[#0B2545] py-1"
                  >
                    Careers & Employment
                  </button>
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="text-left text-base font-medium text-neutral-800 hover:text-[#0B2545] py-1"
                  >
                    Contact & Locations
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                  Core Services
                </span>
                <div className="mt-2 space-y-2">
                  {SERVICES_DATA.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => handleNavClick('service-detail', srv.id)}
                      className="block w-full text-left text-sm text-neutral-600 hover:text-[#0B2545] py-1"
                    >
                      {srv.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-100 pt-6 mt-6 space-y-4">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="flex items-center gap-3 text-sm font-semibold text-neutral-900 bg-neutral-50 p-3 rounded-lg border border-neutral-200"
              >
                <Phone className="w-4 h-4 text-[#1C64F2]" />
                <span className="tabular-nums">{COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#0B2545] hover:bg-[#134074] rounded-lg shadow-sm"
              >
                Request a Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
