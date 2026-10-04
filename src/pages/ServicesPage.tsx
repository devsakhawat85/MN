import React, { useState } from 'react';
import {
  SERVICES_DATA,
  COMPANY_INFO
} from '../data/companyData';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
  ChevronRight,
  Shield,
  Layers,
  Wrench,
  Zap,
  Calendar
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string, subParam?: string) => void;
  onRequestQuote: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onRequestQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredServices = activeFilter === 'all'
    ? SERVICES_DATA
    : activeFilter === 'cleaning'
    ? SERVICES_DATA.filter((s) => ['janitorial', 'stripping-waxing', 'carpet-cleaning'].includes(s.id))
    : SERVICES_DATA.filter((s) => ['electrical-maintenance', 'plumbing-maintenance', 'event-setups'].includes(s.id));

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="bg-[#06253C] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,177,153,0.2),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#09B199]">
              <span>6 Core Facility Divisions</span>
              <span aria-hidden="true">·</span>
              <span>15M+ Sq. Ft. Daily</span>
              <span aria-hidden="true">·</span>
              <span>Unified Contract Management</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight text-balance">
              Commercial Cleaning & Facility Maintenance Services
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed text-balance">
              MN Services provides a comprehensive single-source maintenance solution. From daily custodial teams and clinical disinfection to advanced floor restoration and facility systems care.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER CONTROLS & OVERVIEW */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Interactive Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg border border-neutral-200">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-white text-[#0678AE] shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                All 6 Divisions
              </button>
              <button
                onClick={() => setActiveFilter('cleaning')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  activeFilter === 'cleaning'
                    ? 'bg-white text-[#0678AE] shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Custodial & Floor Care
              </button>
              <button
                onClick={() => setActiveFilter('maintenance')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  activeFilter === 'maintenance'
                    ? 'bg-white text-[#0678AE] shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Building Systems & Events
              </button>
            </div>

            <div className="text-xs text-neutral-500 font-medium">
              Showing <span className="font-bold text-neutral-900">{filteredServices.length}</span> specialized commercial divisions
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES LISTING */}
      <section className="py-20 bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredServices.map((srv, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden transition-all hover:shadow-md"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative aspect-16/10 lg:aspect-auto min-h-[280px] bg-neutral-200 ${isReversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {srv.badge && (
                      <div className="absolute top-4 left-4 bg-[#06253C]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded">
                        {srv.badge}
                      </div>
                    )}
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#09B199] uppercase tracking-wider">
                          Division 0{index + 1}
                        </span>
                        <div className="text-[11px] font-semibold text-neutral-500">
                          Weekly Inspection Oversight
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900">
                        {srv.title}
                      </h2>

                      <p className="text-neutral-700 text-sm leading-relaxed">
                        {srv.fullDesc}
                      </p>

                      {/* Key Features */}
                      <div className="pt-2">
                        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                          Core Capabilities
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {srv.features.slice(0, 4).map((feat, fidx) => (
                            <div key={fidx} className="flex items-start gap-2 text-xs text-neutral-700">
                              <CheckCircle className="w-3.5 h-3.5 text-[#09B199] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Specs Row */}
                      <div className="pt-4 border-t border-neutral-100 grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {srv.specs.map((sp, sidx) => (
                          <div key={sidx} className="text-xs">
                            <span className="text-neutral-400 block text-[10px] uppercase font-mono">{sp.label}</span>
                            <span className="font-semibold text-neutral-800">{sp.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-6 mt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <button
                        onClick={() => onNavigate('service-detail', srv.id)}
                        className="w-full sm:w-auto px-5 py-2.5 bg-[#0678AE] hover:bg-[#055C86] text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Detailed Scope & FAQs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onRequestQuote(srv.title)}
                        className="w-full sm:w-auto px-5 py-2.5 border border-neutral-300 hover:border-neutral-500 text-neutral-800 text-xs font-medium rounded-md transition-colors text-center cursor-pointer"
                      >
                        Request Quote for This Service
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY BUNDLE SERVICES BANNER */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#031726] text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
                Single-Vendor Efficiency
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white text-balance">
                Consolidate Your Vendor Roster With MN Services
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Managing separate contracts for daily janitorial, carpet extraction, floor stripping, ballasts, and plumbing repairs wastes valuable administrative hours. With MN Services, one responsible contact oversees all facility maintenance with consolidated monthly invoicing and uniform quality standards.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onRequestQuote()}
                  className="px-6 py-3 bg-[#09B199] hover:bg-[#078E7A] text-white font-semibold text-xs rounded-md shadow-xs transition-colors cursor-pointer"
                >
                  Request a Consolidated Proposal
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="px-6 py-3 border border-neutral-600 hover:border-white text-neutral-200 hover:text-white text-xs font-medium rounded-md transition-colors text-center cursor-pointer"
                >
                  Speak With an Operations Lead: {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
