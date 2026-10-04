import React from 'react';
import {
  SERVICES_DATA,
  COMPANY_INFO,
  TESTIMONIALS
} from '../data/companyData';
import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  Layers,
  Phone,
  HelpCircle,
  Calendar
} from 'lucide-react';

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (page: string, subParam?: string) => void;
  onRequestQuote: (serviceTitle?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onNavigate,
  onRequestQuote,
}) => {
  const service = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  // Specific FAQs based on service
  const faqs = [
    {
      q: 'How frequently are onsite quality inspections conducted?',
      a: 'A dedicated MN Services operations supervisor visits your facility weekly while crews are active. We score floor sheen, restroom disinfection, corner detailing, and trash replenishment using our proprietary quality matrix.'
    },
    {
      q: 'Can cleaning schedules be structured around our facility shifts?',
      a: 'Yes. We offer daytime porter programs for active continuous restocking, evening custodial shifts, and overnight deep maintenance to prevent any interference with your employees, visitors, or clients.'
    },
    {
      q: 'What measures are taken for building security and key control?',
      a: 'All MN Services personnel are bonded, fully insured, background-checked, and assigned photo ID security credentials. Keycards and physical access keys are managed through strict dual-custody logging.'
    },
    {
      q: 'How does Minnesota winter weather affect this service?',
      a: 'Minnesota winters introduce destructive road salt, slush, and heavy grit. We adjust chemical dilutions, utilize neutralizing floor rinses, and deploy specialized winter matting programs to protect your interior substrates.'
    }
  ];

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="bg-[#06253C] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(9,177,153,0.2),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#09B199]">
              <button
                onClick={() => onNavigate('services')}
                className="hover:underline cursor-pointer"
              >
                Services
              </button>
              <span aria-hidden="true">/</span>
              <span>{service.title}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight text-balance">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed text-balance">
              {service.shortDesc}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onRequestQuote(service.title)}
                className="px-6 py-3 bg-[#0678AE] hover:bg-[#055C86] text-white font-semibold text-xs rounded-md shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request a Free Quote for {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-medium text-xs rounded-md transition-colors text-center cursor-pointer"
              >
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE DETAILS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Description */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
                  Service Overview & Scope
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 text-balance">
                  Engineered for High-Traffic Commercial Facilities
                </h2>
                <p className="text-neutral-700 text-base leading-relaxed">
                  {service.fullDesc}
                </p>
                <div className="p-4 bg-neutral-50 border-l-4 border-[#09B199] rounded-r-lg text-sm text-neutral-700 italic">
                  "It's our job to manage the quality of your facilities cleaning, not yours." We ensure this service is executed with complete autonomy and measurable quality so you never have to supervise our personnel.
                </div>
              </div>

              {/* Service Image Slot */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-neutral-200 aspect-16/9 bg-neutral-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scope Features List */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display text-neutral-900">
                  Included in This Scope of Work
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg border border-neutral-200 bg-[#FBFBFA] flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-[#09B199] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-neutral-800 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits of Outsourcing to MN Services */}
              <div className="space-y-4 pt-6 border-t border-neutral-200">
                <h3 className="text-xl font-bold font-display text-neutral-900">
                  The Benefits of Outsourcing to MN Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded bg-[#0678AE] text-white flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <div className="font-bold text-neutral-900 text-sm">Active Supervision</div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Weekly unannounced audits eliminate the need for internal staff to check bathrooms or walk corridors.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded bg-[#0678AE] text-white flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <div className="font-bold text-neutral-900 text-sm">Long-Tenured Crews</div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Location-matched scheduling reduces turnover, keeping trusted faces in your building month after month.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded bg-[#0678AE] text-white flex items-center justify-center font-bold text-xs">
                      3
                    </div>
                    <div className="font-bold text-neutral-900 text-sm">Predictable Invoicing</div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Transparent monthly billing with zero surprise fees or unexpected surcharges.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-4 pt-6 border-t border-neutral-200">
                <h3 className="text-xl font-bold font-display text-neutral-900">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {faqs.map((faq, fidx) => (
                    <div key={fidx} className="p-4 rounded-lg border border-neutral-200 bg-[#FBFBFA]">
                      <div className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#09B199]" />
                        <span>{faq.q}</span>
                      </div>
                      <p className="text-xs text-neutral-600 mt-2 leading-relaxed pl-6">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Quick Specs Card */}
              <div className="bg-[#FBFBFA] rounded-xl border border-neutral-200 p-6 space-y-4">
                <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                  Technical Specifications
                </div>
                <div className="space-y-3">
                  {service.specs.map((sp, idx) => (
                    <div key={idx} className="border-b border-neutral-200/80 pb-2">
                      <div className="text-[11px] text-neutral-500 font-mono">{sp.label}</div>
                      <div className="text-xs font-bold text-neutral-800">{sp.value}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="text-[11px] text-neutral-500 font-mono mb-2">Available Frequencies</div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.frequencies.map((freq, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-[#E8F8F5] text-[#078E7A] px-2 py-0.5 rounded"
                      >
                        {freq}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <button
                    onClick={() => onRequestQuote(service.title)}
                    className="w-full py-3 bg-[#0678AE] hover:bg-[#055C86] text-white text-xs font-semibold rounded-md shadow-xs transition-colors cursor-pointer"
                  >
                    Request a Customized Proposal
                  </button>
                </div>
              </div>

              {/* Other Services Navigation */}
              <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-3">
                <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                  All Facility Divisions
                </div>
                <div className="space-y-1">
                  {SERVICES_DATA.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => onNavigate('service-detail', s.id)}
                      className={`w-full text-left p-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                        s.id === service.id
                          ? 'bg-[#06253C] text-white font-semibold'
                          : 'text-neutral-700 hover:bg-[#E8F8F5]'
                      }`}
                    >
                      <span className="truncate">{s.title}</span>
                      <ArrowRight className="w-3 h-3 shrink-0 ml-1" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct Support Card */}
              <div className="bg-[#031726] text-white rounded-xl p-6 space-y-3">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#09B199]">
                  Emergency & Walkthrough Dispatch
                </div>
                <div className="text-sm font-bold font-display text-white">
                  Speak Directly With Operations
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Call our New Hope headquarters for immediate consultation or same-day walkthrough scheduling.
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="block text-center py-2.5 bg-[#09B199] hover:bg-[#078E7A] text-white text-xs font-semibold rounded-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 inline mr-1 text-white" />
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
