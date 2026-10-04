import React, { useState } from 'react';
import {
  COMPANY_INFO
} from '../data/companyData';
import {
  Users,
  CheckCircle,
  MapPin,
  Clock,
  Heart,
  Shield,
  ArrowRight,
  Briefcase,
  Mail,
  Phone,
  CheckCircle2
} from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: string, subParam?: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    shiftPreference: 'Evening / Night Shift',
    position: 'Commercial Janitorial Specialist',
    experience: '1-3 years',
    authorized: true,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="bg-[#06253C] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,177,153,0.22),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#09B199]">
              <span>Careers at MN Services</span>
              <span aria-hidden="true">·</span>
              <span>500+ Twin Cities Professionals</span>
              <span aria-hidden="true">·</span>
              <span>Equal Opportunity Employer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight text-balance">
              Join a Team Built on Respect and Reliability
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed text-balance">
              At MN Services, our employees are the heart of our 50-year reputation. We provide steady hours, flexible shifts, location-matched assignments close to your home, and a supportive family-owned environment.
            </p>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH MN SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
              The Employee Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight mt-2 text-balance">
              Why Professionals Choose MN Services
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2">
              We treat our cleaning specialists, floor technicians, and field supervisors like the essential professionals they are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl border border-neutral-200 bg-[#FBFBFA] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0678AE] text-white flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-neutral-900 text-base font-display">
                Location Matching
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We assign you to commercial buildings and facilities within your own community, saving you transit time and fuel costs.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200 bg-[#FBFBFA] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0678AE] text-white flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-neutral-900 text-base font-display">
                Flexible Shift Models
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Choose from daytime porter schedules, evening shifts (after 5 PM), or weekend routes that fit your family obligations.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200 bg-[#FBFBFA] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0678AE] text-white flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-neutral-900 text-base font-display">
                Supportive Leadership
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                As a family-owned company, our leadership team knows your name, provides top-tier equipment, and listens to your feedback.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200 bg-[#FBFBFA] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0678AE] text-white flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-neutral-900 text-base font-display">
                Paid Professional Training
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Learn advanced commercial stripping, waxing, chemical safety, and hospital-grade sanitization techniques from experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE ROLES & DIRECT INQUIRY FORM */}
      <section className="py-20 bg-[#FBFBFA] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: General Roles Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
                  Opportunity Profiles
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 mt-1">
                  Ongoing Career Tracks
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  We are always seeking motivated, detail-oriented individuals across the Greater Twin Cities Metro.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-white rounded-xl border border-neutral-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-neutral-900">Commercial Janitorial Specialist</h3>
                    <span className="text-[11px] font-medium text-[#078E7A] bg-[#E8F8F5] px-2 py-0.5 rounded">Part-Time / Full-Time</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Perform high-touch sanitization, restroom care, vacuuming, and common area maintenance for corporate and institutional facilities.
                  </p>
                </div>

                <div className="p-5 bg-white rounded-xl border border-neutral-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-neutral-900">Commercial Floor Care Technician</h3>
                    <span className="text-[11px] font-medium text-[#078E7A] bg-[#E8F8F5] px-2 py-0.5 rounded">Specialty Division</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Operate high-speed rotary burnishers, chemical stripping equipment, and carpet extractors across large commercial facilities.
                  </p>
                </div>

                <div className="p-5 bg-white rounded-xl border border-neutral-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-neutral-900">Facility Lead / Quality Supervisor</h3>
                    <span className="text-[11px] font-medium text-[#078E7A] bg-[#E8F8F5] px-2 py-0.5 rounded">Leadership Track</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Conduct weekly quality inspections, train onboarding crew members, and maintain direct client communication.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-neutral-200/50 rounded-lg text-xs text-neutral-700 space-y-1">
                <div className="font-semibold text-neutral-900">Direct Human Resources Inquiries</div>
                <div>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#0678AE] hover:underline">{COMPANY_INFO.email}</a></div>
                <div>Phone: <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-[#0678AE] hover:underline">{COMPANY_INFO.phone}</a></div>
                <div className="text-[11px] text-neutral-500 pt-1">Office: {COMPANY_INFO.address.full}</div>
              </div>
            </div>

            {/* Right: Direct Application Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-[#09B199] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-neutral-900">
                    Application Received
                  </h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-neutral-900">{formData.fullName}</span>. Our HR recruitment team in New Hope, MN will review your background and call you within 1-2 business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#0678AE] text-white text-xs font-semibold rounded-md hover:bg-[#055C86] transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block mb-1">
                      Direct Application
                    </span>
                    <h2 className="text-2xl font-bold font-display text-neutral-900">
                      Apply to Join MN Services
                    </h2>
                    <p className="text-xs text-neutral-600 mt-1">
                      No resume required. Complete this simple form and our hiring manager will connect with you.
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
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(612) 000-0000"
                        className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
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
                        placeholder="you@email.com"
                        className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        City / Suburb Where You Live *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Minneapolis, Brooklyn Park, Plymouth"
                        className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Position of Interest
                      </label>
                      <select
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                      >
                        <option>Commercial Janitorial Specialist</option>
                        <option>Commercial Floor Care Technician</option>
                        <option>Day Porter / Building Custodian</option>
                        <option>Facility Lead / Quality Supervisor</option>
                        <option>General Inquiries</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Preferred Shift
                      </label>
                      <select
                        value={formData.shiftPreference}
                        onChange={(e) => setFormData({ ...formData, shiftPreference: e.target.value })}
                        className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                      >
                        <option>Evening / Night Shift (after 5 PM)</option>
                        <option>Daytime Shift (Day Porter)</option>
                        <option>Weekend Shifts Only</option>
                        <option>Flexible / Any Shift</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Tell Us About Your Work Experience or Background (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe previous cleaning, maintenance, or warehouse experience..."
                      className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="text-[11px] text-neutral-500">
                      Must be legally authorized to work in the United States.
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#0678AE] hover:bg-[#055C86] text-white text-xs font-semibold rounded-md shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Submit Application</span>
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
