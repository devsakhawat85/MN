import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Shield, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const VideoSection: React.FC<{ onRequestQuote: () => void }> = ({ onRequestQuote }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="py-20 bg-[#031726] text-white relative overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,177,153,0.18),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#09B199] font-semibold">
            Operational Excellence in Motion
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight mt-2 text-white text-balance">
            See What Professional Facility Care Looks Like.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed">
            From sterile clinical environments and pristine corporate atriums to heavy-duty manufacturing floors, experience how MN Services delivers consistency across 15 million square feet every single day.
          </p>
        </div>

        {/* Video Frame */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-950 aspect-video max-w-5xl mx-auto group">
          {isPlaying ? (
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              {/* HTML5 Video or Interactive Video Simulation */}
              <video
                className="w-full h-full object-cover"
                autoPlay
                playsInline
                loop
                muted={isMuted}
                poster="/src/assets/images/hero_commercial_facility_1791139367122.jpg"
              >
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Minimal floating overlay controls */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 z-20">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="p-1 hover:text-[#09B199] transition-colors cursor-pointer"
                  aria-label="Pause video"
                >
                  <Pause className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1 hover:text-[#09B199] transition-colors cursor-pointer"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Title Watermark */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xs px-3 py-1 rounded text-xs font-mono tracking-tight text-neutral-300">
                MN Services · Operational Standards & Quality Oversight
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <img
                src="/src/assets/images/hero_commercial_facility_1791139367122.jpg"
                alt="MN Services Commercial Facility Care"
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 hover:bg-white text-[#0678AE] flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-105 group-hover:ring-8 group-hover:ring-white/20 focus:outline-none focus:ring-4 focus:ring-[#09B199] cursor-pointer"
                  aria-label="Play MN Services Facility Care video"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-[#0678AE] translate-x-0.5" />
                </button>

                <div className="mt-6 max-w-lg">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#09B199]">
                    Company Feature Documentary
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                    Behind the Scenes: 50 Years of Quality Management
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-2">
                    Click to watch our field supervisors, specialized floor care teams, and custodial specialists in action across the Twin Cities.
                  </p>
                </div>
              </div>

              {/* Bottom Feature Badges */}
              <div className="absolute bottom-4 left-6 right-6 hidden sm:flex items-center justify-between text-xs text-neutral-300 border-t border-white/10 pt-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#09B199]" />
                  <span>Documented Weekly Supervisory Audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#09B199]" />
                  <span>Bonded, Insured & Screened Personnel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#09B199]" />
                  <span>15M+ Square Feet Daily</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Supporting Callout */}
        <div className="mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-neutral-800/60 border border-neutral-700/60">
          <div>
            <div className="text-sm font-semibold text-white">
              Ready to elevate your facility's cleanliness standards?
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">
              Schedule a comprehensive onsite walkthrough with an operations lead.
            </div>
          </div>
          <button
            onClick={onRequestQuote}
            className="px-5 py-2.5 bg-[#0678AE] hover:bg-[#055C86] text-white text-xs font-semibold rounded-md transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            Schedule Free Walkthrough
          </button>
        </div>
      </div>
    </section>
  );
};
