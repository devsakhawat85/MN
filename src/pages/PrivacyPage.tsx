import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Shield } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-[#0B2545] text-white py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold font-display">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-300 mt-2">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-sm leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-neutral-900">
              1. Information We Collect
            </h2>
            <p>
              MN Services ("we", "our", or "us") respects your privacy. When you request a commercial cleaning quote, submit a career application, or contact our operations team via mnservices.net, we collect information you explicitly provide, including your name, company name, corporate email address, telephone number, facility square footage, and property location.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-neutral-900">
              2. How We Use Facility & Contact Data
            </h2>
            <p>
              The information we collect is used strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Preparing accurate, customized commercial facility walkthrough proposals.</li>
              <li>Coordinating onsite visits, supervisory audits, and direct account management.</li>
              <li>Responding to career inquiries and evaluating qualifications for employment.</li>
              <li>Communicating operational updates, emergency dispatch notices, or schedule adjustments.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-neutral-900">
              3. Protection of Business Information
            </h2>
            <p>
              We do NOT sell, rent, or lease your business data, contact details, or facility blueprints to third-party marketers or advertisers. All property details and security protocols are treated under strict commercial confidentiality.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-neutral-900">
              4. Contacting Our Data Administrator
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to update your commercial contact records, please contact our administrative headquarters:
            </p>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-xs space-y-1">
              <div className="font-semibold text-neutral-900">{COMPANY_INFO.legalName}</div>
              <div>{COMPANY_INFO.address.full}</div>
              <div>Phone: {COMPANY_INFO.phone}</div>
              <div>Email: {COMPANY_INFO.email}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
