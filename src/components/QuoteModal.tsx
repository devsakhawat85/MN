import React, { useState } from 'react';
import { X, CheckCircle, Building, Layers, Calendar, User, Phone, Mail, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [facilityType, setFacilityType] = useState('Corporate Office');
  const [sqft, setSqft] = useState('25,000 – 50,000 sq. ft.');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ['Commercial Janitorial Services']
  );
  const [frequency, setFrequency] = useState('Daily (5–7 days/week)');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: 'Minneapolis / Twin Cities',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== title));
      }
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'MN-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(code);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#06253C] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#09B199]">
              Free Commercial Walkthrough & Proposal
            </span>
            <h2 id="quote-modal-title" className="text-xl font-bold font-display mt-0.5">
              Request a Customized Facility Quote
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-300 hover:text-white rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-[#09B199] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 font-display">
              Proposal Request Confirmed
            </h3>
            <p className="text-neutral-600 text-sm max-w-md mx-auto">
              Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. A senior MN Services facility operations manager will review your facility profile and reach out within 2 business hours.
            </p>

            <div className="bg-neutral-50 rounded-lg p-4 max-w-md mx-auto text-left text-xs space-y-1.5 border border-neutral-200">
              <div className="flex justify-between">
                <span className="text-neutral-500">Reference Number:</span>
                <span className="font-mono font-bold text-neutral-800">{referenceCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Facility Type:</span>
                <span className="font-medium text-neutral-800">{facilityType} ({sqft})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Services:</span>
                <span className="font-medium text-neutral-800 truncate max-w-[200px]">{selectedServices.join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Company / Contact:</span>
                <span className="font-medium text-neutral-800">{formData.company} · {formData.phone}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 bg-[#0678AE] hover:bg-[#055C86] text-white font-semibold text-sm rounded-md transition-colors cursor-pointer"
              >
                Close Window
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="px-6 py-2.5 border border-neutral-300 hover:border-neutral-400 text-neutral-800 font-medium text-sm rounded-md transition-colors cursor-pointer"
              >
                Call Operations: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6 text-xs font-semibold">
              <div
                className={`flex items-center gap-2 ${
                  step === 1 ? 'text-[#0678AE]' : 'text-neutral-400'
                }`}
              >
                <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[11px] font-bold ${step === 1 ? 'border-[#0678AE] text-[#0678AE]' : 'border-neutral-300'}`}>1</span>
                <span>Facility Details</span>
              </div>
              <div className="h-0.5 w-8 bg-neutral-200" />
              <div
                className={`flex items-center gap-2 ${
                  step === 2 ? 'text-[#0678AE]' : 'text-neutral-400'
                }`}
              >
                <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[11px] font-bold ${step === 2 ? 'border-[#0678AE] text-[#0678AE]' : 'border-neutral-300'}`}>2</span>
                <span>Services Scope</span>
              </div>
              <div className="h-0.5 w-8 bg-neutral-200" />
              <div
                className={`flex items-center gap-2 ${
                  step === 3 ? 'text-[#0678AE]' : 'text-neutral-400'
                }`}
              >
                <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[11px] font-bold ${step === 3 ? 'border-[#0678AE] text-[#0678AE]' : 'border-neutral-300'}`}>3</span>
                <span>Contact Details</span>
              </div>
            </div>

            {/* STEP 1: Facility Details */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Select Facility Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Corporate Office',
                      'Manufacturing / Plant',
                      'Car Dealership',
                      'Medical Clinic',
                      'School / Education',
                      'Bank / Financial',
                      'Church / Sanctuary',
                      'Senior Living',
                      'Multi-Family / Apt',
                      'Warehouse / Logistics',
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFacilityType(type)}
                        className={`text-left text-xs font-medium p-2.5 rounded-md border transition-all cursor-pointer ${
                          facilityType === type
                            ? 'border-[#0678AE] bg-[#EAF5FA] text-[#0678AE] font-semibold'
                            : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Approximate Square Footage
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      'Under 10,000 sq. ft.',
                      '10,000 – 25,000 sq. ft.',
                      '25,000 – 75,000 sq. ft.',
                      '75,000+ sq. ft.',
                    ].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSqft(size)}
                        className={`text-center text-xs font-medium p-2.5 rounded-md border transition-all cursor-pointer ${
                          sqft === size
                            ? 'border-[#0678AE] bg-[#EAF5FA] text-[#0678AE] font-semibold'
                            : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 bg-[#0678AE] hover:bg-[#055C86] text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Next: Select Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Services & Frequency */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Required Services (Select All That Apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SERVICES_DATA.map((srv) => {
                      const isChecked = selectedServices.includes(srv.title);
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => toggleService(srv.title)}
                          className={`text-left p-3 rounded-md border text-xs flex items-center justify-between transition-all cursor-pointer ${
                            isChecked
                              ? 'border-[#0678AE] bg-[#EAF5FA] font-semibold text-[#0678AE]'
                              : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                          }`}
                        >
                          <span>{srv.title}</span>
                          <span className={`w-4 h-4 rounded-sm border flex items-center justify-center text-[10px] ${isChecked ? 'bg-[#09B199] text-white border-[#09B199]' : 'border-neutral-300'}`}>
                            {isChecked ? '✓' : ''}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Service Frequency Preference
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Daily (5–7 days/week)',
                      '3–4 Days / Week',
                      '1–2 Days / Week',
                      'Day Porter + Night Crew',
                      'Periodic Project / One-Time',
                      'Custom Multi-Shift',
                    ].map((freq) => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setFrequency(freq)}
                        className={`text-center text-xs font-medium p-2 rounded-md border transition-all cursor-pointer ${
                          frequency === freq
                            ? 'border-[#0678AE] bg-[#EAF5FA] text-[#0678AE] font-semibold'
                            : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                        }`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 border border-neutral-300 text-neutral-700 text-xs font-medium rounded-md hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-2.5 bg-[#0678AE] hover:bg-[#055C86] text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Next: Contact Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact Info & Submission */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Susan Miller"
                      className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE] focus:border-[#0678AE]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Minnetonka Tech Center"
                      className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE] focus:border-[#0678AE]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Direct Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="susan@company.com"
                      className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE] focus:border-[#0678AE]"
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
                      className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE] focus:border-[#0678AE]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Facility City / Suburb (Twin Cities Metro)
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Plymouth, Minnetonka, Minneapolis"
                    className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE] focus:border-[#0678AE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Special Requirements or Scheduling Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Need hard floor waxing quote before winter; prefer evening walkthrough."
                    className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0678AE] focus:border-[#0678AE]"
                  />
                </div>

                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 border border-neutral-300 text-neutral-700 text-xs font-medium rounded-md hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#0678AE] hover:bg-[#055C86] text-white text-xs font-semibold rounded-md shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Submit Proposal Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
