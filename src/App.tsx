/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { COMPANY_INFO, SERVICES_DATA } from './data/companyData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentServiceId, setCurrentServiceId] = useState<string>('janitorial');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [preselectedQuoteService, setPreselectedQuoteService] = useState<string | undefined>();

  // Browser history sync & initial hash/route support
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('service-')) {
        const sId = hash.replace('service-', '');
        setCurrentPage('service-detail');
        setCurrentServiceId(sId);
      } else if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    if (window.location.hash) {
      handlePopState();
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string, subParam?: string) => {
    if (page === 'service-detail' && subParam) {
      setCurrentServiceId(subParam);
      window.history.pushState(null, '', `#service-${subParam}`);
    } else {
      window.history.pushState(null, '', `#${page === 'home' ? '' : page}`);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update dynamic document title for SEO
    let title = 'MN Services — Commercial Cleaning & Facility Maintenance | Twin Cities';
    if (page === 'about') {
      title = 'About MN Services — 50+ Years Family-Owned Facility Care';
    } else if (page === 'services') {
      title = 'Commercial Facility Services — Janitorial, Floor Care & Maintenance | MN Services';
    } else if (page === 'service-detail') {
      const srv = SERVICES_DATA.find((s) => s.id === (subParam || currentServiceId));
      if (srv) title = `${srv.title} — Commercial Facility Care | MN Services`;
    } else if (page === 'industries') {
      title = 'Industries We Serve — Corporate, Healthcare, Manufacturing | MN Services';
    } else if (page === 'service-areas') {
      title = 'Twin Cities Service Areas — Minneapolis, St. Paul & Suburbs | MN Services';
    } else if (page === 'careers') {
      title = 'Careers & Employment — Join the MN Services Team';
    } else if (page === 'contact') {
      title = 'Request a Facility Quote & Consultation | MN Services';
    } else if (page === 'privacy') {
      title = 'Privacy Policy | MN Services';
    }
    document.title = title;
  };

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    setPreselectedQuoteService(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#121820]">
      {/* Universal Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuoteModal()}
      />

      {/* Main Multi-Page Container */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onRequestQuote={() => handleOpenQuoteModal()}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onRequestQuote={() => handleOpenQuoteModal()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onRequestQuote={(srv) => handleOpenQuoteModal(srv)}
          />
        )}

        {currentPage === 'service-detail' && (
          <ServiceDetailPage
            serviceId={currentServiceId}
            onNavigate={handleNavigate}
            onRequestQuote={(srv) => handleOpenQuoteModal(srv)}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage
            onNavigate={handleNavigate}
            onRequestQuote={(ind) => handleOpenQuoteModal(ind)}
          />
        )}

        {currentPage === 'service-areas' && (
          <ServiceAreasPage
            onNavigate={handleNavigate}
            onRequestQuote={() => handleOpenQuoteModal()}
          />
        )}

        {currentPage === 'careers' && (
          <CareersPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'privacy' && <PrivacyPage />}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuoteModal()}
      />

      {/* Global Interactive Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={preselectedQuoteService}
      />
    </div>
  );
}
