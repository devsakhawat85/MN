import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

interface FooterProps {
  onNavigate: (page: string, subParam?: string) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <footer className="bg-[#061526] text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Band */}
        <div className="pb-12 mb-12 border-b border-neutral-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
              Twin Cities Facility Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              "It's our job to manage the quality of your facilities cleaning, not yours."
            </h2>
            <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
              Locally owned and family operated for over 50 years. Maintaining 15M+ square feet of commercial space every single day across the Greater Twin Cities Metro.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <button
              onClick={onRequestQuote}
              className="px-6 py-3 bg-[#09B199] hover:bg-[#078E7A] text-white font-semibold text-sm rounded-md transition-colors text-center shadow-xs cursor-pointer"
            >
              Request a Free Facility Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-white font-medium text-sm rounded-md transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#09B199]" />
              <span className="tabular-nums">Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* 4-Column Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800/80 text-sm">
          {/* Col 1: Identity & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/src/assets/logo_white.png"
                alt="MN Services"
                className="h-8 sm:h-9 w-auto max-w-[220px] object-contain opacity-95"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = '/src/assets/logo.png';
                }}
              />
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Premier commercial cleaning, high-performance floor care, and comprehensive facilities maintenance for property managers, corporate facilities, and institutions throughout Minnesota.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#09B199] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Phone className="w-4 h-4 text-[#09B199] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white transition-colors tabular-nums">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Mail className="w-4 h-4 text-[#09B199] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-400">
                <Clock className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>24/7 Operations & Emergency Dispatch</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <span className="text-xs uppercase tracking-wider text-white font-semibold block mb-4">
              Services
            </span>
            <ul className="space-y-2 text-xs text-neutral-400">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => {
                      onNavigate('service-detail', srv.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left py-0.5 flex items-center gap-1 group cursor-pointer"
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#09B199] hover:underline font-medium cursor-pointer"
                >
                  View All Capabilities &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Sectors */}
          <div>
            <span className="text-xs uppercase tracking-wider text-white font-semibold block mb-4">
              Company
            </span>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left py-0.5"
                >
                  About MN Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left py-0.5"
                >
                  50+ Year History & Jim Glover
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('industries');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left py-0.5"
                >
                  Industries We Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('service-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left py-0.5"
                >
                  Twin Cities Coverage
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('careers');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left py-0.5"
                >
                  Careers & Employment
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left py-0.5"
                >
                  Contact Operations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Communities */}
          <div>
            <span className="text-xs uppercase tracking-wider text-white font-semibold block mb-4">
              Service Areas
            </span>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-neutral-400">
              <button onClick={() => onNavigate('service-areas')} className="text-left hover:text-white">Minneapolis</button>
              <button onClick={() => onNavigate('service-areas')} className="text-left hover:text-white">St. Paul</button>
              <button onClick={() => onNavigate('service-areas')} className="text-left hover:text-white">Minnetonka</button>
              <button onClick={() => onNavigate('service-areas')} className="text-left hover:text-white">Plymouth</button>
              <button onClick={() => onNavigate('service-areas')} className="text-left hover:text-white">Eden Prairie</button>
              <button onClick={() => onNavigate('service-areas')} className="text-left hover:text-white">Edina</button>
              <button onClick={() => onNavigate('service-areas')} className="text-left hover:text-white">Bloomington</button>
              <button onClick={() => onNavigate('service-areas')} className="text-left hover:text-white">Maple Grove</button>
              <button onClick={() => onNavigate('service-areas')} className="text-left hover:text-white">Woodbury</button>
              <button onClick={() => onNavigate('service-areas')} className="text-left hover:text-white">Roseville</button>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800">
              <span className="text-xs text-neutral-500">
                Bonded & Fully Insured in Minnesota
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-neutral-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <span>OSHA & CDC Sanitization Compliant</span>
            <span>·</span>
            <span>New Hope, Minnesota</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
