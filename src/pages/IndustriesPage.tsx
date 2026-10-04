import React, { useState } from 'react';
import {
  INDUSTRIES_DATA,
  COMPANY_INFO
} from '../data/companyData';
import {
  Building2,
  CheckCircle,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Phone,
  Layers,
  ChevronRight
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (page: string, subParam?: string) => void;
  onRequestQuote: (industryName?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onRequestQuote }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES_DATA[0].id);

  const activeIndustry = INDUSTRIES_DATA.find((i) => i.id === selectedIndustry) || INDUSTRIES_DATA[0];

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="bg-[#06253C] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(9,177,153,0.2),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#09B199]">
              <span>11 Specialized Commercial Sectors</span>
              <span aria-hidden="true">·</span>
              <span>Tailored Compliance</span>
              <span aria-hidden="true">·</span>
              <span>Active Supervisory Audits</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight text-balance">
              Facilities & Industries We Serve
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed text-balance">
              From Class A corporate high-rises and terminal-clean healthcare suites to industrial production floors, MN Services delivers customized protocols matched to your specific operational environment.
            </p>
          </div>
        </div>
      </section>

      {/* SECTOR SELECTOR & SPOTLIGHT */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Nav List */}
            <div className="lg:col-span-4 bg-[#FBFBFA] p-4 rounded-xl border border-neutral-200 space-y-1">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Select an Industry
              </div>
              {INDUSTRIES_DATA.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`w-full text-left px-3.5 py-3 rounded-lg text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                    ind.id === selectedIndustry
                      ? 'bg-[#0678AE] text-white shadow-xs font-semibold'
                      : 'text-neutral-700 hover:bg-[#E8F8F5]'
                  }`}
                >
                  <span className="truncate">{ind.name}</span>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${ind.id === selectedIndustry ? 'text-white' : 'text-neutral-400'}`} />
                </button>
              ))}
            </div>

            {/* Right Detailed Panel */}
            <div className="lg:col-span-8 bg-white rounded-xl border border-neutral-200 p-6 sm:p-10 shadow-xs space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-200 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#09B199] uppercase tracking-wider">
                    Commercial Sector Profile
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 mt-1">
                    {activeIndustry.name}
                  </h2>
                </div>
                <div className="bg-[#FBFBFA] border border-neutral-200 px-4 py-2 rounded-lg text-right sm:text-center shrink-0">
                  <div className="text-2xl font-bold font-display text-[#0678AE]">{activeIndustry.stat}</div>
                  <div className="text-[11px] text-neutral-500 font-medium">{activeIndustry.statLabel}</div>
                </div>
              </div>

              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                {activeIndustry.description}
              </p>

              {/* Challenges vs Solutions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-lg border border-rose-200/80 bg-rose-50/30 space-y-3">
                  <div className="flex items-center gap-2 text-rose-900 font-bold text-xs uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span>Sector Challenges</span>
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    {activeIndustry.challenges.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-lg border border-[#09B199]/30 bg-[#E8F8F5] space-y-3">
                  <div className="flex items-center gap-2 text-[#078E7A] font-bold text-xs uppercase tracking-wider">
                    <CheckCircle className="w-4 h-4 text-[#09B199]" />
                    <span>MN Services Custom Protocol</span>
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    {activeIndustry.solutions.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#09B199] font-bold">✓</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Facility Subtypes */}
              <div className="pt-4 border-t border-neutral-100">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Representative Facility Types Supported
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeIndustry.facilityTypes.map((ft, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-neutral-100 text-neutral-800 px-3 py-1 rounded-md font-medium"
                    >
                      {ft}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-500">
                  Ready to audit your {activeIndustry.name.toLowerCase()} facility?
                </div>
                <button
                  onClick={() => onRequestQuote(activeIndustry.name)}
                  className="px-6 py-2.5 bg-[#0678AE] hover:bg-[#055C86] text-white text-xs font-semibold rounded-md shadow-xs transition-colors cursor-pointer"
                >
                  Request Walkthrough for {activeIndustry.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL INDUSTRIES GRID */}
      <section className="py-20 bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
              Complete Spectrum
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight mt-2 text-balance">
              Explore All 11 Commercial Sectors
            </h2>
            <p className="text-neutral-600 text-sm mt-2">
              Click any industry card to load its specialized operational profile above.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.id}
                onClick={() => {
                  setSelectedIndustry(ind.id);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  ind.id === selectedIndustry
                    ? 'border-[#0678AE] bg-white ring-2 ring-[#0678AE]/20 shadow-md'
                    : 'border-neutral-200 bg-white hover:border-[#09B199] hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#09B199] mb-1">
                    {ind.stat} {ind.statLabel}
                  </div>
                  <h3 className="text-lg font-bold font-display text-neutral-900">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-3 leading-relaxed">
                    {ind.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-[#0678AE] font-semibold">
                  <span>View Inspection Protocol</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
