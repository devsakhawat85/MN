import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Building2,
  Sparkles,
  MapPin,
  Phone,
  ChevronRight,
  Layers,
  Award,
  Users,
  Clock,
  Quote
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES_DATA,
  INDUSTRIES_DATA,
  WHY_US_POINTS,
  APPROACH_STEPS,
  TESTIMONIALS,
  SERVICE_AREAS
} from '../data/companyData';
import { VideoSection } from '../components/VideoSection';

interface HomePageProps {
  onNavigate: (page: string, subParam?: string) => void;
  onRequestQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onRequestQuote }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedMetroRegion, setSelectedMetroRegion] = useState<string>('All');

  const filteredAreas = selectedMetroRegion === 'All'
    ? SERVICE_AREAS
    : SERVICE_AREAS.filter((a) => a.region === selectedMetroRegion);

  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-[#061526] text-white overflow-hidden">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_commercial_facility_1791139367122.jpg"
            alt="Immaculate commercial facility atrium maintained by MN Services"
            className="w-full h-full object-cover object-center brightness-60 scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061526] via-[#061526]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061526] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-6">
            {/* Clean unboxed metadata separator */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#09B199]">
              <span>Twin Cities Commercial Facility Care</span>
              <span aria-hidden="true">·</span>
              <span>Family-Owned Since 1974</span>
              <span aria-hidden="true">·</span>
              <span>15M+ Sq. Ft. Daily</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08] text-balance">
              Your Facility.<br />
              <span className="text-[#09B199]">Our Responsibility.</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl text-balance">
              Professional cleaning and facility maintenance that lets you focus on what matters most — running your business. We manage the details so you never have to.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onRequestQuote}
                className="px-7 py-3.5 bg-[#0678AE] hover:bg-[#055C86] text-white font-semibold text-sm sm:text-base rounded-md shadow-lg transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0678AE]"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm sm:text-base rounded-md transition-all duration-150 text-center cursor-pointer"
              >
                Explore Our Services
              </button>
            </div>

            {/* Direct Phone Trust Marker */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#09B199]" />
                <span>Bonded & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#09B199]" />
                <span>Weekly Field Inspections</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#09B199]" />
                <span>24/7 Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / STATS BAR */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="border-l-2 border-[#0B2545] pl-4 sm:pl-6 space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#0B2545] tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-neutral-900">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-500 leading-tight">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION: EDITORIAL STYLE */}
      <section className="py-24 bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-neutral-200 aspect-4/3">
                <img
                  src="/src/assets/images/about_facility_operations_1791139413246.jpg"
                  alt="MN Services operational manager reviewing inspection checklist"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Editorial Stat Box */}
              <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:-right-6 bg-[#0B2545] text-white p-6 rounded-lg shadow-xl max-w-xs border border-white/10 hidden sm:block">
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                  Our Core Principle
                </div>
                <p className="text-sm font-medium mt-1 leading-snug">
                  "It's our job to manage the quality of your facilities cleaning, not yours."
                </p>
                <div className="mt-3 text-[11px] text-neutral-300 font-mono">
                  — Jim Glover, Founder
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#09B199]">
                Commercial Facility Expertise
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 tracking-tight leading-tight text-balance">
                More Than Cleaning.<br />
                Complete Facility Support.
              </h2>

              <p className="text-neutral-700 text-base leading-relaxed">
                Most commercial cleaning complaints occur because facilities managers are forced to become unpaid quality inspectors. You shouldn't have to walk your floors every morning checking for missed trash, unpolished entries, or streaked glass.
              </p>

              <p className="text-neutral-700 text-base leading-relaxed">
                MN Services operates with proactive supervision. Our field managers conduct weekly inspections while crews are on site, catching details before you or your tenants ever notice them. We handle everything from nightly janitorial and heavy-duty floor restoration to emergency lighting and minor plumbing.
              </p>

              {/* Bullet Features */}
              <div className="space-y-3 pt-2">
                {[
                  'Weekly unannounced quality audits with quantitative scoring',
                  'Dedicated account manager with single-call accountability',
                  'Customized cleaning schedules built around your building shifts',
                  'Screened, bonded, and long-tenured local Twin Cities crews'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-neutral-800">
                    <CheckCircle className="w-4 h-4 text-[#09B199] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 bg-[#0678AE] hover:bg-[#055C86] text-white text-sm font-semibold rounded-md transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <span>Meet MN Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onRequestQuote}
                  className="px-6 py-3 border border-neutral-300 hover:border-neutral-500 text-neutral-800 text-sm font-medium rounded-md transition-colors cursor-pointer"
                >
                  Request Walkthrough
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
                Comprehensive Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 tracking-tight mt-1 text-balance">
                Specialized Facility Services
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-2xl">
                Every service is managed under one unified contract with transparent billing and dedicated operational oversight.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-4 md:mt-0 text-sm font-semibold text-[#0678AE] hover:text-[#09B199] flex items-center gap-1 group self-start md:self-end cursor-pointer"
            >
              <span>View All 6 Divisions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 6-Card Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv, index) => (
              <div
                key={srv.id}
                className="group relative bg-[#FBFBFA] rounded-xl border border-neutral-200 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-neutral-300 transition-all duration-300"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-16/10 overflow-hidden bg-neutral-200">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {srv.badge && (
                      <div className="absolute top-3 left-3 bg-[#06253C]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                        {srv.badge}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-mono text-neutral-400 mb-1">
                      Division 0{index + 1}
                    </div>
                    <h3 className="text-xl font-bold font-display text-neutral-900 group-hover:text-[#0678AE] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-neutral-600 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {srv.shortDesc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-neutral-200/80 space-y-1.5">
                      {srv.features.slice(0, 2).map((feat, fidx) => (
                        <div key={fidx} className="flex items-start gap-2 text-xs text-neutral-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#09B199] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigate('service-detail', srv.id)}
                    className="w-full py-2.5 px-4 bg-white hover:bg-[#0678AE] hover:text-white border border-neutral-300 hover:border-[#0678AE] text-neutral-800 text-xs font-semibold rounded-md transition-all flex items-center justify-between group/btn cursor-pointer"
                  >
                    <span>Explore Service Details</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MN SERVICES: DIFFERENTIATORS */}
      <section className="py-24 bg-[#06253C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
              The MN Services Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight mt-2 text-white text-balance">
              Why Minnesota Facility Leaders Partner With Us
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
              We replace guesswork and micromanagement with structured accountability, seasoned local personnel, and responsive operational leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US_POINTS.map((pt) => (
              <div
                key={pt.step}
                className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 transition-colors"
              >
                <div className="text-2xl font-bold font-mono text-[#09B199] mb-3">
                  {pt.step}
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  {pt.title}
                </h3>
                <div className="text-xs uppercase tracking-wider text-[#09B199] font-semibold mt-1 mb-3">
                  {pt.subtitle}
                </div>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {pt.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={onRequestQuote}
              className="px-8 py-3.5 bg-[#09B199] hover:bg-[#078E7A] text-white font-semibold text-sm rounded-md transition-colors shadow-lg cursor-pointer"
            >
              Discuss Your Facility Requirements
            </button>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-24 bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
                Sectors We Protect
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 tracking-tight mt-1 text-balance">
                Tailored for Your Industry
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-2xl">
                Every sector faces unique hygiene standards, compliance mandates, and operational schedules.
              </p>
            </div>
            <button
              onClick={() => onNavigate('industries')}
              className="mt-4 md:mt-0 text-sm font-semibold text-[#0678AE] hover:text-[#09B199] flex items-center gap-1 group self-start md:self-end cursor-pointer"
            >
              <span>Explore All 11 Industries</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES_DATA.slice(0, 8).map((ind) => (
              <div
                key={ind.id}
                onClick={() => onNavigate('industries')}
                className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-3">
                    <span>SECTOR</span>
                    <span className="text-[#0678AE] font-bold">{ind.stat}</span>
                  </div>
                  <h3 className="text-base font-bold font-display text-neutral-900 group-hover:text-[#0678AE] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-3 leading-relaxed">
                    {ind.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-[#09B199]">
                  <span>{ind.statLabel}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-STEP APPROACH */}
      <section className="py-24 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
              The Operational Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 tracking-tight mt-1 text-balance">
              The MN Services 6-Step Method
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
              How we transition new commercial accounts seamlessly and sustain impeccable quality year after year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {APPROACH_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-xl border border-neutral-200 bg-[#FBFBFA] hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0678AE] text-white flex items-center justify-center font-mono font-bold text-sm mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold font-display text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO / MEDIA STORY COMPONENT */}
      <VideoSection onRequestQuote={onRequestQuote} />

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 tracking-tight mt-1 text-balance">
              Trusted by Minnesota Facility Directors
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
              Read authentic feedback from Twin Cities property managers and corporate directors who rely on MN Services every day.
            </p>
          </div>

          {/* Testimonial Feature Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-neutral-200 shadow-xl p-8 sm:p-12 relative overflow-hidden">
            <Quote className="w-16 h-16 text-neutral-100 absolute top-6 right-6 -z-0" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#09B199]">
                <span>{TESTIMONIALS[activeTestimonial].yearsWithMNServices}</span>
                <span aria-hidden="true">·</span>
                <span>{TESTIMONIALS[activeTestimonial].location}</span>
              </div>

              <p className="text-base sm:text-xl lg:text-2xl text-neutral-800 font-medium leading-relaxed italic">
                "{TESTIMONIALS[activeTestimonial].quote}"
              </p>

              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-neutral-900 font-display">
                    {TESTIMONIALS[activeTestimonial].author}
                  </div>
                  <div className="text-xs text-neutral-600">
                    {TESTIMONIALS[activeTestimonial].title}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    {TESTIMONIALS[activeTestimonial].companyType}
                  </div>
                </div>

                {/* Slider Tabs */}
                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeTestimonial === idx ? 'w-8 bg-[#0678AE]' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                      }`}
                      aria-label={`View testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS OVERVIEW */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
                Local Presence
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 tracking-tight mt-1 text-balance">
                Twin Cities Service Coverage
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-2xl">
                Centrally headquartered in New Hope, MN, delivering rapid response times and dedicated crews throughout the entire Greater Metro area.
              </p>
            </div>
            <button
              onClick={() => onNavigate('service-areas')}
              className="mt-4 md:mt-0 text-sm font-semibold text-[#0678AE] hover:text-[#09B199] flex items-center gap-1 group self-start md:self-end cursor-pointer"
            >
              <span>Explore All Cities & Coverage Map</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['All', 'West Metro', 'East Metro', 'North Metro', 'South Metro', 'Core Metro'].map((region) => (
              <button
                key={region}
                onClick={() => setSelectedMetroRegion(region)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedMetroRegion === region
                    ? 'bg-[#0678AE] text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredAreas.map((city) => (
              <div
                key={city.name}
                onClick={() => onNavigate('service-areas')}
                className="p-4 rounded-lg border border-neutral-200 bg-[#FBFBFA] hover:bg-white hover:border-[#0678AE] hover:shadow-xs transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-1.5 text-[#06253C] font-bold text-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#09B199]" />
                  <span>{city.name}</span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">
                  {city.county} · {city.region}
                </div>
                <div className="text-[11px] text-neutral-600 mt-1 line-clamp-1">
                  {city.featuredFacilities}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL HIGH-CONVERTING CTA SECTION */}
      <section className="py-24 bg-[#031726] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(9,177,153,0.18),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
              Get Started Today
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight text-balance">
              Let's Take Facility Maintenance Off Your Plate.
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-balance">
              Tell us about your facility and we'll help you build a cleaning and maintenance program around your exact operational needs. No surprises, no micromanagement.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onRequestQuote}
                className="w-full sm:w-auto px-8 py-4 bg-[#09B199] hover:bg-[#078E7A] text-white font-semibold text-base rounded-md shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-base rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#09B199]" />
                <span className="tabular-nums">Call MN Services: {COMPANY_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-6 text-xs text-neutral-400">
              Direct dispatch from New Hope, MN · 24/7 Operations · Serving the Greater Twin Cities Metro
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
