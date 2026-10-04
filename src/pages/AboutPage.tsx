import React from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Users,
  Award,
  HeartHandshake,
  Clock,
  ArrowRight,
  Sparkles,
  MapPin,
  ClipboardCheck,
  UserCheck,
  Building
} from 'lucide-react';
import {
  COMPANY_INFO,
  HISTORY_MILESTONES,
  TESTIMONIALS,
  SERVICE_AREAS
} from '../data/companyData';

interface AboutPageProps {
  onNavigate: (page: string, subParam?: string) => void;
  onRequestQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="bg-[#06253C] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(9,177,153,0.22),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#09B199]">
              <span>Established 1974</span>
              <span aria-hidden="true">·</span>
              <span>Twin Cities, Minnesota</span>
              <span aria-hidden="true">·</span>
              <span>Family-Owned & Operated</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight text-balance">
              Built on Experience.<br />
              <span className="text-[#09B199]">Trusted for Generations.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed text-balance">
              For over five decades, MN Services has partnered with Minnesota business leaders to take complete ownership of facility cleanliness, longevity, and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* 2 & 4. ORIGIN STORY & JIM GLOVER */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-neutral-200 aspect-4/3">
                <img
                  src="/src/assets/images/about_facility_operations_1791139413246.jpg"
                  alt="MN Services operational leadership"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-xs text-neutral-600 flex items-center gap-3">
                <Award className="w-5 h-5 text-[#0678AE] shrink-0" />
                <span>Operating with continuous family stewardship from our headquarters at 5608 International Parkway in New Hope, MN.</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
                Our Origin Story
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight text-balance">
                Founded on Direct Accountability and Personal Care
              </h2>

              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                When Jim Glover founded MN Services over 50 years ago, he recognized a glaring failure across commercial cleaning: facility managers were constantly left to inspect, document, and complain about substandard work. Cleaning companies would win a contract, disappear, and let the burden fall squarely on the client.
              </p>

              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                Jim established a foundational principle that guides every crew and supervisor today: <strong className="text-neutral-900">"It's our job to manage the quality of your facilities cleaning, not yours."</strong>
              </p>

              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                Rather than treating janitorial care as a low-margin commodity, MN Services instituted weekly supervisory inspections, direct phone-line account management, and rigorous staff selection. Over five decades later, we still answer our own phones, audit our own work, and treat every client as a generational partner.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-neutral-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-[#0678AE] tabular-nums">50+</div>
                  <div className="text-xs text-neutral-500 font-medium">Years in Business</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-[#0678AE] tabular-nums">15M+</div>
                  <div className="text-xs text-neutral-500 font-medium">Sq. Ft. Daily</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-[#0678AE] tabular-nums">500+</div>
                  <div className="text-xs text-neutral-500 font-medium">Local Professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5, 6 & 7. MISSION & PHILOSOPHY */}
      <section className="py-20 bg-[#FBFBFA] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#0678AE] text-white flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                Our Mission Statement
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                To provide commercial property owners, facility directors, and institutional leaders with worry-free facility cleanliness and maintenance through dependable local personnel, proactive quality oversight, and unwavering integrity.
              </p>
            </div>

            {/* Philosophy Card */}
            <div className="bg-[#06253C] text-white p-8 rounded-xl border border-neutral-800 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#09B199] text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Our Core Philosophy
              </h3>
              <p className="text-neutral-200 text-sm leading-relaxed">
                "It's our job to manage the quality of your facilities cleaning, not yours." You manage your business, your team, and your growth; MN Services manages every detail of your building’s cleanliness, sanitation, and physical maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8, 9, 10, 11: QUALITY CONTROL, WORKER SELECTION, ACCOUNT MANAGEMENT & FLEXIBILITY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
              The Operational Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight mt-2 text-balance">
              How We Deliver Consistency Every Single Day
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
              We eliminate turnover chaos and service drop-offs through four disciplined operating pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1: Quality Control */}
            <div className="p-8 rounded-xl border border-neutral-200 bg-[#FBFBFA] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#0678AE] text-white flex items-center justify-center">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                Weekly Quality Inspections
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Our operations managers conduct unannounced, detailed physical inspections while cleaning crews are on duty. Using comprehensive inspection matrices, we evaluate high-touch disinfection, floor sheen, corner detailing, and restroom sanitization before any issue reaches a building occupant.
              </p>
              <ul className="text-xs text-neutral-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#09B199]" />
                  <span>Quantitative scoring logged in facility dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#09B199]" />
                  <span>Immediate on-the-spot coaching and corrections</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#09B199]" />
                  <span>Monthly quality reports shared directly with clients</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Worker Selection */}
            <div className="p-8 rounded-xl border border-neutral-200 bg-[#FBFBFA] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#0678AE] text-white flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                Rigorous Worker Selection & Training
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Great facility maintenance begins with trustworthy individuals. Every candidate undergoes multi-jurisdiction criminal background checks, employment verifications, and drug screenings. Crucially, we match team members to buildings near their own homes, reducing commute fatigue and slashing industry turnover.
              </p>
              <ul className="text-xs text-neutral-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#09B199]" />
                  <span>Full background checks, bonding, and site security badging</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#09B199]" />
                  <span>OSHA safety, bloodborne pathogen & chemical certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#09B199]" />
                  <span>Above-market wages and supportive, respectful leadership</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Dedicated Account Management */}
            <div className="p-8 rounded-xl border border-neutral-200 bg-[#FBFBFA] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#0678AE] text-white flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                Dedicated Account Management
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                You will never call an anonymous call center or submit a generic ticket that gets lost in a queue. You are assigned a named, senior account manager with direct mobile phone access. If you need immediate daytime porter dispatch, extra event teardown, or winter salt remediation, you speak with the person in charge.
              </p>
              <ul className="text-xs text-neutral-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#09B199]" />
                  <span>Single point of contact for contracts, billing, and day-to-day operations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#09B199]" />
                  <span>24/7 emergency response and rapid escalation dispatch</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#09B199]" />
                  <span>Regular quarterly reviews to optimize budgets and scope</span>
                </li>
              </ul>
            </div>

            {/* Pillar 4: Customized Programs */}
            <div className="p-8 rounded-xl border border-neutral-200 bg-[#FBFBFA] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#0678AE] text-white flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                Customized Programs & Full Flexibility
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                No two facilities have the same floor substrates, foot traffic density, or operating shifts. We design custom scopes specifying daily routines, weekly deep passes, and seasonal floor care routines so you pay only for what your building actually requires.
              </p>
              <ul className="text-xs text-neutral-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#09B199]" />
                  <span>Shift models: Day porters, evening crews, or overnight teams</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#09B199]" />
                  <span>Bundled maintenance: Janitorial, floor waxing, electrical, and plumbing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#09B199]" />
                  <span>Zero locked-in rigid contracts; we earn your business each month</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 50+ YEAR TIMELINE */}
      <section className="py-24 bg-[#031726] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
              Five Decades of Growth
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight mt-2 text-balance">
              50+ Years Serving Minnesota
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
              From Jim Glover’s first cleaning accounts in 1974 to maintaining 15M+ square feet today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-white/20">
            {HISTORY_MILESTONES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex items-center justify-between flex-col sm:flex-row gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full sm:w-[45%] bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                    <span className="text-xs font-mono font-bold text-[#09B199] block mb-1">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold font-display text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#09B199] text-white flex items-center justify-center font-mono text-xs font-bold ring-4 ring-[#031726] z-10">
                    {idx + 1}
                  </div>

                  <div className="hidden sm:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13 & 14. CTA BANNER */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
            Partner With MN Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight text-balance">
            Experience the Difference of Dedicated Quality Oversight
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Stop checking trash cans and worrying about whether floors were buffed. Let our experienced Twin Cities team take full responsibility for your facility.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRequestQuote}
              className="px-8 py-3.5 bg-[#0678AE] hover:bg-[#055C86] text-white font-semibold text-sm rounded-md shadow-md transition-colors cursor-pointer"
            >
              Request a Free Facility Walkthrough
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-3.5 border border-neutral-300 hover:border-neutral-500 text-neutral-800 font-medium text-sm rounded-md transition-colors cursor-pointer"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
