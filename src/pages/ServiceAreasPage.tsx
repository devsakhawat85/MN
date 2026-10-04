import React, { useState } from 'react';
import {
  SERVICE_AREAS,
  COMPANY_INFO
} from '../data/companyData';
import {
  MapPin,
  Building,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Navigation,
  Clock
} from 'lucide-react';

interface ServiceAreasPageProps {
  onNavigate: (page: string, subParam?: string) => void;
  onRequestQuote: () => void;
}

export const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({ onNavigate, onRequestQuote }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('Minneapolis');

  const filteredCities = SERVICE_AREAS.filter((city) => {
    const matchesRegion = selectedRegion === 'All' || city.region === selectedRegion;
    const matchesQuery = city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.county.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesQuery;
  });

  const activeCityData = SERVICE_AREAS.find((c) => c.name === selectedCity) || SERVICE_AREAS[0];

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="bg-[#06253C] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(9,177,153,0.22),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#09B199]">
              <span>Hennepin · Ramsey · Carver · Dakota · Washington · Anoka</span>
              <span aria-hidden="true">·</span>
              <span>24/7 Dispatch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight text-balance">
              Greater Twin Cities Metro Service Areas
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed text-balance">
              Headquartered at 5608 International Parkway in New Hope, MN Services deploys over 500 local cleaning professionals across Minneapolis, St. Paul, and 20+ surrounding suburban commercial hubs.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE METRO COVERAGE DIRECTORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-neutral-200">
            {/* Region Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-100 rounded-lg border border-neutral-200">
              {['All', 'Core Metro', 'West Metro', 'North Metro', 'East Metro', 'South Metro'].map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    selectedRegion === region
                      ? 'bg-white text-[#0678AE] shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city or county..."
                className="w-full text-xs px-3.5 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE] focus:border-[#0678AE]"
              />
            </div>
          </div>

          {/* 2-Column: Map/Detail View + City Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Left: Active City Spotlight & Twin Cities Metro Vector Representation */}
            <div className="lg:col-span-5 bg-[#FBFBFA] rounded-2xl border border-neutral-200 p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#09B199] uppercase">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Selected Submarket</span>
                </div>
                <h2 className="text-3xl font-bold font-display text-neutral-900 mt-1">
                  {activeCityData.name}, MN
                </h2>
                <div className="text-xs text-neutral-500 font-medium mt-0.5">
                  {activeCityData.county} · {activeCityData.region}
                </div>
              </div>

              {/* Stylized Twin Cities Metro Graphic Map Box */}
              <div className="relative rounded-xl border border-neutral-300 bg-[#031726] text-white p-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#09B199_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-neutral-700 pb-2">
                    <span className="font-mono text-neutral-400">OPERATIONAL HUB</span>
                    <span className="text-[#09B199] font-semibold">New Hope HQ</span>
                  </div>
                  <div className="text-xs text-neutral-300">
                    <strong className="text-white">Commercial Footprint:</strong> {activeCityData.featuredFacilities}
                  </div>
                  <div className="text-xs text-neutral-300">
                    <strong className="text-white">Dedicated Crew Dispatch:</strong> Active daytime & overnight coverage
                  </div>
                  <div className="text-xs text-neutral-300">
                    <strong className="text-white">Inspection Frequency:</strong> Weekly on-site supervisory audits
                  </div>
                </div>
              </div>

              {/* Operational Guarantees */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-neutral-700">
                  <CheckCircle className="w-4 h-4 text-[#09B199] shrink-0 mt-0.5" />
                  <span>Emergency response dispatch available 24/7 across {activeCityData.county}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-700">
                  <CheckCircle className="w-4 h-4 text-[#09B199] shrink-0 mt-0.5" />
                  <span>Location-matched Twin Cities crews living within 15 minutes of your facility</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-700">
                  <CheckCircle className="w-4 h-4 text-[#09B199] shrink-0 mt-0.5" />
                  <span>Strict adherence to Minnesota winter salt remediation and freeze-thaw floor care</span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <button
                  onClick={onRequestQuote}
                  className="w-full py-3 bg-[#0678AE] hover:bg-[#055C86] text-white text-xs font-semibold rounded-md shadow-xs transition-colors cursor-pointer text-center"
                >
                  Request a Free Quote for {activeCityData.name} Facility
                </button>
              </div>
            </div>

            {/* Right: Grid of All Served Cities */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[640px] overflow-y-auto pr-2">
                {filteredCities.map((city) => (
                  <div
                    key={city.name}
                    onClick={() => setSelectedCity(city.name)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                      city.name === selectedCity
                        ? 'border-[#0678AE] bg-[#EAF5FA] ring-1 ring-[#0678AE]'
                        : 'border-neutral-200 bg-white hover:border-[#09B199] hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-neutral-900 text-sm flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#09B199]" />
                        {city.name}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase">
                        {city.region.replace(' Metro', '')}
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-1">
                      {city.county}
                    </div>
                    <div className="text-[11px] text-neutral-600 mt-1 line-clamp-1">
                      {city.featuredFacilities}
                    </div>
                  </div>
                ))}
              </div>

              {filteredCities.length === 0 && (
                <div className="p-8 text-center bg-neutral-50 rounded-xl border border-neutral-200 text-neutral-500 text-xs">
                  No cities found matching "{searchQuery}". Call our headquarters at {COMPANY_INFO.phone} to check coverage in your municipality.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO BENEFIT SECTION */}
      <section className="py-20 bg-[#FBFBFA] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-2">
              <div className="font-bold text-neutral-900 text-base font-display">
                Headquarters in New Hope, MN
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Centrally positioned off International Parkway in New Hope, providing immediate highway access to I-494, I-394, I-94, and Highway 100 for rapid dispatch.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-2">
              <div className="font-bold text-neutral-900 text-base font-display">
                Minnesota Winter Specialists
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Twin Cities facility managers face extreme salt tracking and slush. Our crews execute specialized winter entryway care to protect your carpets and hard floors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-2">
              <div className="font-bold text-neutral-900 text-base font-display">
                50+ Years Twin Cities Legacy
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We aren't an out-of-state franchise. We are 100% locally owned and family operated, deeply invested in our Minnesota communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
