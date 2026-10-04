import React, { useState } from 'react';
import {
  COMPANY_INFO,
  SERVICES_DATA,
  INDUSTRIES_DATA
} from '../data/companyData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Building2,
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    facilityType: 'Corporate Office',
    serviceNeeded: 'Commercial Janitorial Services',
    sqft: '25,000 – 50,000 sq. ft.',
    city: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'MN-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(code);
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="bg-[#06253C] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,177,153,0.22),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#09B199]">
              <span>Free Onsite Walkthrough & Proposal</span>
              <span aria-hidden="true">·</span>
              <span>2-Hour Business Response</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight text-balance">
              Tell Us About Your Facility.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed text-balance">
              We'll inspect your property, discuss your specific operational schedules, and build a transparent commercial proposal designed around your exact needs.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT & FORM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Company Location */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
                  Headquarters & Operations
                </span>
                <h2 className="text-2xl font-bold font-display text-neutral-900 mt-1">
                  MN Services Operations Center
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                  Centrally located in New Hope to provide rapid response and dedicated supervisory coverage across the entire Twin Cities Metro.
                </p>
              </div>

              {/* Direct Details Box */}
              <div className="bg-[#FBFBFA] p-6 rounded-xl border border-neutral-200 space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#09B199] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-semibold">Corporate Address</strong>
                    <span className="text-neutral-600">{COMPANY_INFO.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#09B199] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-semibold">Telephone</strong>
                    <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-neutral-600 hover:text-[#0678AE] font-medium tabular-nums">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#09B199] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-semibold">Email Inquiries</strong>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-neutral-600 hover:text-[#0678AE]">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#09B199] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-semibold">Operations Hours</strong>
                    <span className="text-neutral-600">{COMPANY_INFO.hours}</span>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-6 bg-[#06253C] text-white rounded-xl space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#09B199]">
                  Our Commitment
                </div>
                <div className="text-sm font-bold font-display text-white">
                  "It's our job to manage the quality of your facilities cleaning, not yours."
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  We guarantee direct communication, weekly supervisory audits, and customized solutions that eliminate internal maintenance headaches.
                </p>
                <div className="pt-2 flex items-center gap-4 text-[11px] text-neutral-300 border-t border-white/10">
                  <span>Bonded & Insured</span>
                  <span>·</span>
                  <span>50+ Years in MN</span>
                  <span>·</span>
                  <span>15M+ Sq. Ft.</span>
                </div>
              </div>
            </div>

            {/* Right: High-Converting Form */}
            <div className="lg:col-span-7 bg-[#FBFBFA] rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-[#09B199] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-neutral-900">
                    Walkthrough Request Received
                  </h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. Our senior operations team in New Hope is reviewing your {formData.facilityType.toLowerCase()} specifications. We will contact you within 2 business hours.
                  </p>
                  <div className="p-4 bg-white rounded-lg border border-neutral-200 max-w-xs mx-auto text-xs font-mono text-neutral-700">
                    Confirmation Code: <strong className="text-[#0678AE]">{referenceCode}</strong>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#0678AE] text-white text-xs font-semibold rounded-md hover:bg-[#055C86] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block mb-1">
                      Facility Walkthrough & Quote
                    </span>
                    <h2 className="text-2xl font-bold font-display text-neutral-900">
                      Request Your Free Proposal
                    </h2>
                    <p className="text-xs text-neutral-600 mt-1">
                      Complete this form to schedule a site walkthrough with an MN Services facility director.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Henderson"
                        className="w-full text-xs px-3 py-2 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Company or Facility Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Wayzata Corporate Center"
                        className="w-full text-xs px-3 py-2 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jhenderson@company.com"
                        className="w-full text-xs px-3 py-2 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Direct Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(952) 000-0000"
                        className="w-full text-xs px-3 py-2 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Facility Type *
                      </label>
                      <select
                        value={formData.facilityType}
                        onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                        className="w-full text-xs px-3 py-2 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                      >
                        {INDUSTRIES_DATA.map((ind) => (
                          <option key={ind.id} value={ind.name}>{ind.name}</option>
                        ))}
                        <option value="General Commercial Property">General Commercial Property</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Primary Service Needed *
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full text-xs px-3 py-2 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Complete Facility Maintenance Bundle">Complete Facility Maintenance Bundle</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Approximate Square Footage
                      </label>
                      <select
                        value={formData.sqft}
                        onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
                        className="w-full text-xs px-3 py-2 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                      >
                        <option>Under 10,000 sq. ft.</option>
                        <option>10,000 – 25,000 sq. ft.</option>
                        <option>25,000 – 50,000 sq. ft.</option>
                        <option>50,000 – 100,000 sq. ft.</option>
                        <option>100,000+ sq. ft.</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Facility City / Suburb
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Minnetonka, Plymouth, Minneapolis"
                        className="w-full text-xs px-3 py-2 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Facility Details or Specific Challenges (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Need hard floor stripping and waxing before winter; interest in day porter service."
                      className="w-full text-xs px-3 py-2 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-500">
                      All walkthroughs are 100% free with no obligation.
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#0678AE] hover:bg-[#055C86] text-white text-xs font-semibold rounded-md shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Request a Free Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
