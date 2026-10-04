export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs: { label: string; value: string }[];
  frequencies: string[];
  image: string;
  badge?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  challenges: string[];
  solutions: string[];
  facilityTypes: string[];
  stat: string;
  statLabel: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  companyType: string;
  location: string;
  yearsWithMNServices: string;
}

export interface ServiceAreaCity {
  name: string;
  county: string;
  region: 'West Metro' | 'East Metro' | 'North Metro' | 'South Metro' | 'Core Metro';
  featuredFacilities: string;
}

export const COMPANY_INFO = {
  name: 'MN Services',
  legalName: 'MN Services, Inc.',
  tagline: 'We manage the details. You focus on business.',
  philosophy: "It's our job to manage the quality of your facilities cleaning, not yours.",
  heroHeadline: 'Your Facility. Our Responsibility.',
  heroSubheadline: 'Professional commercial cleaning and facility maintenance for the Greater Twin Cities Metro. We manage the details so you can focus on running your business.',
  established: 1974,
  yearsInBusiness: '50+',
  address: {
    street: '5608 International Parkway',
    city: 'New Hope',
    state: 'MN',
    zip: '55428',
    full: '5608 International Parkway, New Hope, MN 55428',
  },
  phone: '(952) 988-8575',
  phoneClean: '9529888575',
  email: 'admin@mnservices.net',
  hours: 'Mon – Fri: 8:00 AM – 5:00 PM (24/7 Operations & Emergency Dispatch)',
  stats: [
    { value: '50+', label: 'Years Serving Twin Cities', desc: 'Family-owned & locally operated since foundation' },
    { value: '15M+', label: 'Sq. Ft. Maintained Daily', desc: 'Over fifteen million square feet cleaned every single day' },
    { value: '500+', label: 'Local Professionals', desc: 'Vetted, trained, and accountable Twin Cities crew members' },
    { value: '98%', label: 'Client Retention Rate', desc: 'Long-term partnerships built on active quality management' }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'janitorial',
    slug: 'janitorial-services',
    title: 'Commercial Janitorial Services',
    shortDesc: 'Comprehensive daily and nightly custodial care engineered for high-performance commercial facilities.',
    fullDesc: 'Over 15 million square feet of Twin Cities corporate real estate rely on MN Services daily. Our commercial janitorial programs are customized to your building footprint, traffic patterns, and operational shifts. From sanitized high-touch surfaces and hygienic restrooms to meticulous common areas and executive suites, we manage every detail under active supervisory oversight.',
    features: [
      'Comprehensive day-porter and night-crew cleaning programs',
      'Restroom deep sanitization, touch-point disinfection, and supply replenishment',
      'High-touch surface sanitization conforming to CDC and OSHA standards',
      'Detailed common area, conference room, and cubicle station maintenance',
      'Active weekly supervisory audits with quantitative quality benchmarks',
      'Safe, hospital-grade, eco-friendly cleaning chemistries and HEPA-filtered equipment'
    ],
    specs: [
      { label: 'Square Footage Maintained', value: '15,000,000+ daily' },
      { label: 'Supervision Model', value: 'Weekly onsite inspections' },
      { label: 'Shift Availability', value: 'Day, Evening, Night & Weekend' },
      { label: 'Account Management', value: 'Single dedicated contact' }
    ],
    frequencies: ['Daily (5-7x / week)', 'Custom Multi-Day', 'Day Porter Service', 'Periodic Deep Cleans'],
    image: '/src/assets/images/service_janitorial_commercial_1791139380808.jpg',
    badge: 'Core Service'
  },
  {
    id: 'stripping-waxing',
    slug: 'stripping-and-waxing',
    title: 'Floor Stripping & Waxing',
    shortDesc: 'Precision hard-surface floor rejuvenation, high-gloss industrial sealing, and long-term surface preservation.',
    fullDesc: 'Minnesota winters bring destructive road salt, brine, and moisture deep into commercial facilities. Our hard-floor care division strips away aged, yellowed finish and embeds high-solids, slip-resistant acrylic wax. We restore high-traffic VCT, terrazzo, polished concrete, and linoleum to a brilliant, mirror-reflective finish that shields against heavy daily foot traffic.',
    features: [
      'Complete finish chemical stripping and deep pore neutralization',
      'Multi-coat commercial grade floor sealer and premium high-solids wax application',
      'High-speed propane and electric burnishing for maximum slip-resistant gloss',
      'Winter salt and grime remediation programs for entryway and vestibule durability',
      'Specialized care for VCT, terrazzo, sheet vinyl, linoleum, and sealed concrete',
      'Off-hours scheduling to eliminate business downtime and pedestrian disruption'
    ],
    specs: [
      { label: 'Coat Applications', value: '4 to 6 commercial grade coats' },
      { label: 'Finish Durability', value: 'High-traffic scuff & salt resistant' },
      { label: 'Turnaround Time', value: 'Overnight / Weekend completion' },
      { label: 'Equipment Used', value: 'High-speed rotary extractors & burnishers' }
    ],
    frequencies: ['Quarterly Programs', 'Semi-Annual Maintenance', 'Annual Restoration', 'Emergency Remediation'],
    image: '/src/assets/images/service_floor_care_waxing_1791139392497.jpg',
    badge: 'Specialty Floor Care'
  },
  {
    id: 'carpet-cleaning',
    slug: 'commercial-carpet-cleaning',
    title: 'Commercial Carpet Cleaning',
    shortDesc: 'Deep-extraction fiber cleaning, traffic lane restoration, and allergen removal for commercial facilities.',
    fullDesc: 'Commercial carpeting acts as an indoor air filter, capturing dirt, allergens, and moisture. Our specialized carpet maintenance programs utilize truck-mounted and high-performance portable hot water extraction paired with encapsulation technology. We lift stubborn stains, restore carpet pile vibrancy, and extend the lifespan of your commercial carpet investment.',
    features: [
      'High-temperature hot water extraction deep cleaning',
      'Low-moisture encapsulation for rapid drying in active office settings',
      'Heavy traffic lane pre-treatment and industrial spot removal',
      'Indoor air quality improvement through deep allergen and dust mitigation',
      'Advanced fiber protection treatment to resist future staining and spills',
      'Zero chemical residue formulation preventing rapid re-soiling'
    ],
    specs: [
      { label: 'Drying Time', value: '2 to 4 hours with encapsulation' },
      { label: 'Methodology', value: 'Hot water extraction & dry foam' },
      { label: 'Stain Treatment', value: 'Custom chemical spot targeting' },
      { label: 'IAQ Benefit', value: 'Up to 90% particle reduction' }
    ],
    frequencies: ['Monthly Traffic Lane Care', 'Quarterly Deep Extract', 'Semi-Annual Maintenance', 'One-Time Restoration'],
    image: '/src/assets/images/hero_commercial_facility_1791139367122.jpg',
    badge: 'Fabric & Carpet Care'
  },
  {
    id: 'electrical-maintenance',
    slug: 'electrical-maintenance',
    title: 'Electrical Maintenance',
    shortDesc: 'Preventive fixture upkeep, lamp and ballast replacement, and emergency illumination management.',
    fullDesc: 'Beyond janitorial, MN Services provides integrated facility maintenance support so property managers only need one trusted partner. Our electrical maintenance technicians routinely inspect and service facility lighting systems, replace spent ballasts and lamps, maintain emergency exit pathways, and assist with energy-efficient LED upgrades.',
    features: [
      'Comprehensive interior and exterior lamp and ballast replacement',
      'Emergency egress lighting and lighted exit sign battery pack testing',
      'Routine visual inspections for flickering fixtures and ballast degradation',
      'LED retrofit assistance to reduce commercial energy consumption',
      'Off-hours lighting audits and re-lamping scheduled to prevent disruptions',
      'Consolidated monthly maintenance reporting alongside janitorial services'
    ],
    specs: [
      { label: 'Inspection Scope', value: 'Fixtures, ballasts, exit signs, batteries' },
      { label: 'Compliance', value: 'OSHA & Life Safety Code emergency paths' },
      { label: 'Integration', value: 'Bundled with janitorial billing' },
      { label: 'Response', value: 'Direct dispatch for critical fixtures' }
    ],
    frequencies: ['Monthly Audits', 'Quarterly Group Re-lamping', 'On-Demand Replacement'],
    image: '/src/assets/images/about_facility_operations_1791139413246.jpg'
  },
  {
    id: 'plumbing-maintenance',
    slug: 'plumbing-maintenance',
    title: 'Plumbing Maintenance',
    shortDesc: 'Restroom fixture diagnostics, minor plumbing repairs, sensor maintenance, and water leak prevention.',
    fullDesc: 'Restroom issues and dripping fixtures immediately degrade the professional image of your facility. MN Services maintains critical plumbing fixtures across corporate restrooms, breakrooms, and utility stations. We service flush valves, replace faucet aerators and cartridges, calibrate touchless sensor units, and address minor clogs before they escalate.',
    features: [
      'Commercial restroom flush valve, urinal, and toilet mechanism repairs',
      'Touchless sensor faucet battery replacement and sensor recalibration',
      'Breakroom sink, water filter, and disposal unit routine checkups',
      'Preventive leak inspections across accessible supply lines and traps',
      'Drain maintenance and odor control in high-volume restrooms',
      'Immediate escalation protocols for master plumbing contractor dispatch when needed'
    ],
    specs: [
      { label: 'Scope', value: 'Restroom, breakroom & utility fixtures' },
      { label: 'Preventive Checks', value: 'Weekly visual and functional testing' },
      { label: 'Sensor Units', value: 'Full battery & optical sensor care' },
      { label: 'Management', value: 'Coordinated through single account manager' }
    ],
    frequencies: ['Routine Weekly Checks', 'Scheduled Preventive Service', 'Rapid Onsite Response'],
    image: '/src/assets/images/industry_medical_facility_1791139401289.jpg'
  },
  {
    id: 'event-setups',
    slug: 'special-event-set-ups',
    title: 'Special Event Set-Ups & Tear-Downs',
    shortDesc: 'Dynamic furniture configuration, banquet preparation, and rapid pre/post event sanitization.',
    fullDesc: 'Hosting an executive meeting, company celebration, or community gathering requires meticulous coordination. MN Services handles layout staging, table and chair arrangements, staging setup, trash management during high-traffic events, and immediate overnight post-event cleanup so your facility is pristine for regular business the following morning.',
    features: [
      'Modular table, chair, and podium arrangement based on custom floor diagrams',
      'Pre-event deep sanitization and floor detailing prior to guest arrival',
      'Dedicated porter support during events for continuous restroom and trash upkeep',
      'Rapid overnight teardown and room reset to default operational configurations',
      'Emergency spill response kits and floor remediation during high-traffic gatherings',
      'Seamless coordination with corporate event planners and facility directors'
    ],
    specs: [
      { label: 'Turnaround Time', value: 'Overnight reset guaranteed' },
      { label: 'Capacity', value: 'Up to 1,000+ guest venue setups' },
      { label: 'Staffing', value: 'Dedicated on-site event crew available' },
      { label: 'Coordination', value: 'Diagram-to-execution verification' }
    ],
    frequencies: ['As-Needed Event Basis', 'Recurring Board & Town Hall Meetings', 'Seasonal Gatherings'],
    image: '/src/assets/images/hero_commercial_facility_1791139367122.jpg'
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'corporate-offices',
    name: 'Corporate Offices & Headquarters',
    slug: 'corporate-offices',
    description: 'Elevating workspace hygiene, executive boardrooms, and collaborative hubs with discreet evening custodial service and day porters.',
    challenges: [
      'High-traffic common spaces and conference rooms requiring constant mid-day resets',
      'Cross-contamination risk in shared kitchenettes, phone booths, and collaborative zones',
      'Sensitive confidentiality requirements around executive and legal workspaces'
    ],
    solutions: [
      'Tailored day-porter programs for ongoing restroom and kitchen care',
      'Color-coded microfiber cross-contamination prevention protocols',
      'Strictly background-checked crews trained in corporate security standards'
    ],
    facilityTypes: ['Multi-tenant Class A towers', 'Corporate campuses', 'Tech startups', 'Law and financial suites'],
    stat: '98%',
    statLabel: 'Client satisfaction across Class A offices'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial Facilities',
    slug: 'manufacturing-industrial',
    description: 'Heavy-duty plant floor maintenance, safety corridor upkeep, breakroom sanitization, and administrative wing separation.',
    challenges: [
      'Heavy industrial grime, oils, metal dust, and aggressive foot-traffic tracking',
      'Stringent OSHA safety protocols, personal protective equipment (PPE) requirements',
      'Multi-shift 24/7 operating schedules with minimal downtime windows'
    ],
    solutions: [
      'Heavy-duty industrial scrubbers and degreasing agents for plant flooring',
      'OSHA-compliant safety practices including lockout/tagout awareness and slip-fall reduction',
      'Seamless cleaning coverage planned around shift turnovers and production halts'
    ],
    facilityTypes: ['Assembly plants', 'Distribution warehouses', 'Precision machine shops', 'Packaging centers'],
    stat: '24/7',
    statLabel: 'Shift adaptability for manufacturing plants'
  },
  {
    id: 'car-dealerships',
    name: 'Car Dealerships & Showrooms',
    slug: 'car-dealerships',
    description: 'High-gloss showroom floors, pristine vehicle display perimeters, gleaming glass, and spotless customer service lounges.',
    challenges: [
      'Tire marks, motor oil drippings, and foot-traffic scuffs on high-gloss showroom floors',
      'Extensive perimeter glass and mirror surfaces showing fingerprints and dust',
      'Premium customer expectations in finance offices and service waiting lounges'
    ],
    solutions: [
      'Routine high-speed burnishing and specialty tire rubber remediation',
      'Continuous streak-free interior glass and partition detailing',
      'High-touch sanitization of customer amenities and refreshment zones'
    ],
    facilityTypes: ['Luxury automotive showrooms', 'Service bay customer zones', 'Regional dealership groups'],
    stat: '100%',
    statLabel: 'Spotless showroom floor reflections'
  },
  {
    id: 'k12-schools',
    name: 'K-12 Schools & School Districts',
    slug: 'k12-schools',
    description: 'Hygienic learning spaces, high-volume cafeteria sanitization, gym floor care, and comprehensive pathogen reduction.',
    challenges: [
      'Rapid spread of seasonal viruses, flu, and common germs among student bodies',
      'Severe daily wear-and-tear on hallway flooring and gymnasium surfaces',
      'Strict compliance with state educational sanitation guidelines and child-safe chemistries'
    ],
    solutions: [
      'Hospital-grade, non-toxic sanitizing solutions safe for youth environments',
      'Structured summer and winter break deep stripping, waxing, and carpet extraction',
      'Thoroughly background-checked, vetted personnel assigned consistently to schools'
    ],
    facilityTypes: ['Public school districts', 'Independent academies', 'Charter schools', 'STEM centers'],
    stat: '500K+',
    statLabel: 'Sq. Ft. of educational space cared for'
  },
  {
    id: 'preschools',
    name: 'Preschools & Early Learning',
    slug: 'preschools',
    description: 'Safe, non-toxic sanitization designed specifically for ground-level play surfaces, crib areas, and early childhood rooms.',
    challenges: [
      'Toddlers and young children constantly touching floor surfaces and putting items in mouths',
      'Need for zero harsh chemical vapors or strong lingering odors',
      'Stringent Department of Human Services licensing hygiene compliance'
    ],
    solutions: [
      'Green-certified, fragrance-free sanitizers that eliminate 99.9% of pathogens safely',
      'Meticulous ground-level detailing, baseboard sanitization, and mat disinfecting',
      'Documented daily sanitation logs provided for parent and state licensing reviews'
    ],
    facilityTypes: ['Early childhood learning centers', 'Montessori schools', 'Corporate daycares'],
    stat: '0%',
    statLabel: 'Toxic residue or harsh lingering chemical fumes'
  },
  {
    id: 'higher-education',
    name: 'Colleges & Universities',
    slug: 'higher-education',
    description: 'Large-scale campus coverage spanning lecture halls, athletic facilities, student centers, and academic laboratories.',
    challenges: [
      'High-density foot traffic across sprawling multi-building campuses',
      'Irregular class schedules, evening seminars, and weekend student events',
      'Diverse surfaces from tiered auditorium carpeting to basketball hardwood'
    ],
    solutions: [
      'Scalable crew deployments coordinated with registrar academic calendars',
      'Specialized care routines for athletic hardwood, locker rooms, and laboratory corridors',
      'Dedicated supervisory managers on campus for immediate dispatch'
    ],
    facilityTypes: ['University campuses', 'Community colleges', 'Vocational institutes', 'Dormitory common halls'],
    stat: '15M+',
    statLabel: 'Sq. ft. institutional management capability'
  },
  {
    id: 'medical-facilities',
    name: 'Medical Facilities & Clinics',
    slug: 'medical-facilities',
    description: 'Stringent terminal cleaning protocols, exam room disinfection, and clinical-grade cross-contamination defense.',
    challenges: [
      'Elevated risk of healthcare-acquired infections (HAIs) and bloodborne pathogens',
      'Compliance with CDC, HIPAA, and OSHA medical cleaning regulations',
      'Zero margin for error in patient waiting areas, exam suites, and procedure rooms'
    ],
    solutions: [
      'EPA-registered hospital disinfectants with verified kill claims for key pathogens',
      'Rigorous dwell-time adherence and non-touch microfiber laundering systems',
      'Specially trained healthcare cleaning specialists aware of privacy and biohazard protocols'
    ],
    facilityTypes: ['Outpatient surgical centers', 'Dental clinics', 'Physical therapy suites', 'Specialty medical practices'],
    stat: '99.99%',
    statLabel: 'Pathogen elimination with hospital-grade disinfectant'
  },
  {
    id: 'banks',
    name: 'Banks & Financial Institutions',
    slug: 'banks-financial',
    description: 'Secure, bonded custodial services tailored for teller stations, vault perimeters, executive suites, and ATM kiosks.',
    challenges: [
      'Extreme security, dual-custody access controls, and strict perimeter confidentiality',
      'High customer interaction zones requiring constant prestige cleanliness',
      'Rigorous background check requirements for all after-hours contractors'
    ],
    solutions: [
      'Bonded, fully insured, vetted cleaning specialists assigned with photo ID badges',
      'Precision teller line detailing, fingerprint removal from glass partitions and ATMs',
      'Fixed scheduled cleaning windows aligned with bank security alarm systems'
    ],
    facilityTypes: ['Retail branch networks', 'Regional bank headquarters', 'Credit unions', 'Wealth management suites'],
    stat: '100%',
    statLabel: 'Bonded and background-verified team members'
  },
  {
    id: 'churches',
    name: 'Churches & Places of Worship',
    slug: 'churches-places-of-worship',
    description: 'Respectful care for sanctuaries, fellowship halls, pastoral offices, and high-capacity weekend congregational spaces.',
    challenges: [
      'Spike in attendance during weekend services, weddings, funerals, and community events',
      'Delicate architectural woodwork, historic stained glass, and expansive sanctuary carpeting',
      'Budget sensitivity requiring flexible, customized service frequencies'
    ],
    solutions: [
      'Schedule models built around Wednesday youth nights and Sunday worship cycles',
      'Gentle wood care, architectural surface protection, and deep carpet extraction',
      'Transparent, family-owned pricing structured to respect non-profit stewardships'
    ],
    facilityTypes: ['Sanctuaries & cathedrals', 'Fellowship halls', 'Religious school facilities', 'Community outreach centers'],
    stat: '50+',
    statLabel: 'Faith-based community partners served'
  },
  {
    id: 'senior-living',
    name: 'Senior Living & Assisted Care',
    slug: 'senior-living',
    description: 'Empathetic, meticulous hygiene focused on resident health, odorless sanitization, dining areas, and wellness suites.',
    challenges: [
      'Vulnerable residents with compromised respiratory systems or mobility limitations',
      'High-traffic dining rooms, activity lounges, and assisted hygiene facilities',
      'Importance of friendly, respectful, and reassuring personnel presence'
    ],
    solutions: [
      'Hypoallergenic, fragrance-free sanitizers that maintain pristine air quality',
      'Slip-resistant floor waxing and rapid moisture abatement to prevent falls',
      'Compassionate, vetted team members who treat residents with dignity and warmth'
    ],
    facilityTypes: ['Independent senior apartments', 'Assisted living facilities', 'Memory care communities', 'Retirement campuses'],
    stat: '24/7',
    statLabel: 'Cleanliness standard for resident wellness'
  },
  {
    id: 'apartments',
    name: 'Apartments & Multi-Family Residential',
    slug: 'apartments-multi-family',
    description: 'Common area management, lobby presentation, fitness centers, elevator tracks, and rapid tenant turnover detailing.',
    challenges: [
      'Constant 24-hour resident foot traffic, pets, winter slush, and package deliveries',
      'Resident retention directly influenced by initial lobby and elevator cleanliness impressions',
      'Tight move-in / move-out turnover deadlines between tenant lease cycles'
    ],
    solutions: [
      'Daily lobby, mailroom, elevator cab, and fitness center sanitization schedules',
      'Entryway mat programs and winter floor care to prevent salt tracking onto carpets',
      'Rapid unit turnover detailing for property management leasing teams'
    ],
    facilityTypes: ['Luxury high-rise apartments', 'Suburban multi-building complexes', 'Condominium associations', 'Mixed-use residential'],
    stat: '48h',
    statLabel: 'Average unit turnover detailing response'
  }
];

export const SERVICE_AREAS: ServiceAreaCity[] = [
  { name: 'Minneapolis', county: 'Hennepin County', region: 'Core Metro', featuredFacilities: 'Corporate Towers, Tech Hubs, Dealerships' },
  { name: 'St. Paul', county: 'Ramsey County', region: 'Core Metro', featuredFacilities: 'Government Facilities, Schools, Non-Profits' },
  { name: 'Minnetonka', county: 'Hennepin County', region: 'West Metro', featuredFacilities: 'Corporate HQs, Class A Office Parks, Clinics' },
  { name: 'Plymouth', county: 'Hennepin County', region: 'West Metro', featuredFacilities: 'Industrial Centers, Tech Corridors, Schools' },
  { name: 'Wayzata', county: 'Hennepin County', region: 'West Metro', featuredFacilities: 'Boutique Financial, Executive Offices, Retail' },
  { name: 'Eden Prairie', county: 'Hennepin County', region: 'West Metro', featuredFacilities: 'Corporate Campuses, Manufacturing, Distribution' },
  { name: 'Chanhassen', county: 'Carver County', region: 'West Metro', featuredFacilities: 'Commercial Parks, Printing Facilities, Offices' },
  { name: 'Chaska', county: 'Carver County', region: 'West Metro', featuredFacilities: 'Industrial Parks, Distribution, Medical Suites' },
  { name: 'Hopkins', county: 'Hennepin County', region: 'West Metro', featuredFacilities: 'Commercial Real Estate, Mixed-Use, Warehouses' },
  { name: 'Bloomington', county: 'Hennepin County', region: 'South Metro', featuredFacilities: 'Hospitality, Office Towers, Large Campuses' },
  { name: 'Burnsville', county: 'Dakota County', region: 'South Metro', featuredFacilities: 'Retail Centers, Medical Centers, Light Industrial' },
  { name: 'Edina', county: 'Hennepin County', region: 'West Metro', featuredFacilities: 'Medical Clinics, Financial Suites, Luxury Auto' },
  { name: 'Maple Grove', county: 'Hennepin County', region: 'North Metro', featuredFacilities: 'Corporate Parks, Medical Campuses, Commercial' },
  { name: 'Fridley', county: 'Anoka County', region: 'North Metro', featuredFacilities: 'Industrial Facilities, Assembly, Office Buildings' },
  { name: 'Blaine', county: 'Anoka County', region: 'North Metro', featuredFacilities: 'Athletic Complexes, Manufacturing, Retail' },
  { name: 'Brooklyn Park', county: 'Hennepin County', region: 'North Metro', featuredFacilities: 'Bio-tech Corridors, Corporate Centers, Schools' },
  { name: 'Brooklyn Center', county: 'Hennepin County', region: 'North Metro', featuredFacilities: 'Distribution Centers, Commercial Parks, Offices' },
  { name: 'Roseville', county: 'Ramsey County', region: 'East Metro', featuredFacilities: 'Commercial Centers, Corporate Offices, Clinics' },
  { name: 'Shoreview', county: 'Ramsey County', region: 'East Metro', featuredFacilities: 'Corporate Headquarters, Technology, Offices' },
  { name: 'Woodbury', county: 'Washington County', region: 'East Metro', featuredFacilities: 'Medical Corridors, Financial Centers, Office Parks' },
  { name: 'Golden Valley', county: 'Hennepin County', region: 'West Metro', featuredFacilities: 'Corporate Offices, Media Facilities, Dealerships' },
  { name: 'St. Louis Park', county: 'Hennepin County', region: 'West Metro', featuredFacilities: 'Class A Corporate Parks, Creative Studios, Medical' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: "With our previous cleaning contractor, our internal staff spent hours every week reporting missed trash bins and smudged glass. Since switching to MN Services, facility complaints dropped to zero. Their weekly inspections catch things before we even see them. They manage the details so we can truly focus on business.",
    author: 'Mark R.',
    title: 'Director of Facility Operations',
    companyType: 'Class A Commercial Office Park (240,000 sq. ft.)',
    location: 'Minnetonka, MN',
    yearsWithMNServices: '8 years client'
  },
  {
    id: '2',
    quote: "Minnesota winter salt used to destroy our lobby terrazzo within weeks. MN Services implemented an aggressive floor care and waxing schedule tailored to our entryway traffic. The floors look like mirrors year-round, and their team is always punctual and professional.",
    author: 'Sarah L.',
    title: 'Senior Property Manager',
    companyType: 'Regional Corporate Headquarters',
    location: 'Plymouth, MN',
    yearsWithMNServices: '6 years client'
  },
  {
    id: '3',
    quote: "What separates MN Services from every other janitorial company we have hired over the past 20 years is dedicated account management. If we have an emergency or need special setup for an executive board meeting, one phone call handles it immediately. No tickets, no runaround.",
    author: 'David K.',
    title: 'Vice President of Administration',
    companyType: 'Financial Services Group',
    location: 'Minneapolis, MN',
    yearsWithMNServices: '11 years client'
  },
  {
    id: '4',
    quote: "In a medical clinic setting, hygiene is non-negotiable. MN Services proved from day one that their personnel are trained specifically in terminal disinfection and healthcare compliance. They are thorough, accountable, and deeply trustworthy.",
    author: 'Dr. Jennifer M.',
    title: 'Clinical Operations Director',
    companyType: 'Multi-Specialty Outpatient Clinic',
    location: 'Edina, MN',
    yearsWithMNServices: '5 years client'
  }
];

export const WHY_US_POINTS = [
  {
    step: '01',
    title: 'Weekly Quality Inspections',
    subtitle: 'Active Onsite Oversight',
    description: 'We do not wait for you to find an issue. Dedicated field managers perform unannounced, quantitative quality inspections while crews are on site, scoring cleanliness against strict benchmarks.'
  },
  {
    step: '02',
    title: 'Dedicated Account Management',
    subtitle: 'One Responsible Contact',
    description: 'You receive a direct phone number to a senior account manager who knows your facility blueprint inside and out. No 1-800 help desks or bureaucratic delays.'
  },
  {
    step: '03',
    title: 'Customized Cleaning Programs',
    subtitle: 'Engineered Around Your Facility',
    description: 'Every facility has unique traffic corridors, floor types, and security constraints. We design cleaning schedules tailored exactly to your operational shifts and seasonal demands.'
  },
  {
    step: '04',
    title: 'Screened & Vetted Personnel',
    subtitle: 'Carefully Selected Team Members',
    description: 'Our employees undergo rigorous background checks, structured hands-on training, and location-matched scheduling close to home, resulting in industry-leading crew retention.'
  },
  {
    step: '05',
    title: '50+ Years of Local Expertise',
    subtitle: 'Minnesota Weather & Building Know-How',
    description: 'Serving the Twin Cities since 1974 gives us unrivaled experience combating brutal Minnesota winter salt, freeze-thaw mud tracking, and spring humidity across commercial surfaces.'
  },
  {
    step: '06',
    title: 'Long-Term Partnership Mentality',
    subtitle: 'Consistency Over Decades',
    description: 'Our average client tenure exceeds seven years. We operate as an extension of your leadership team, taking total ownership of facility cleanliness so you never have to worry.'
  }
];

export const APPROACH_STEPS = [
  {
    number: '01',
    title: 'Understand Your Facility',
    desc: 'We conduct a comprehensive onsite walkthrough evaluating square footage, floor substrates, high-touch zones, and operational shift patterns.'
  },
  {
    number: '02',
    title: 'Build a Customized Program',
    desc: 'We architect a clear, transparent scope of work specifying daily duties, periodic floor maintenance, and supply management with zero hidden fees.'
  },
  {
    number: '03',
    title: 'Assign Professional Teams',
    desc: 'We place vetted, location-matched crew members who receive site-specific security orientation and facility blueprint training.'
  },
  {
    number: '04',
    title: 'Manage Quality Onsite',
    desc: 'Our supervisory team conducts weekly audits with objective quality checklists to ensure our stringent standards are sustained day after day.'
  },
  {
    number: '05',
    title: 'Maintain Direct Communication',
    desc: 'Your dedicated account manager stays in continuous contact with monthly reviews, rapid response channels, and proactive seasonal adjustments.'
  },
  {
    number: '06',
    title: 'Deliver Consistent Results',
    desc: 'Your employees and visitors walk into an immaculate, healthy environment every single morning. You focus on business; we manage the details.'
  }
];

export const HISTORY_MILESTONES = [
  {
    year: '1974',
    title: 'Founded by Jim Glover',
    desc: 'Jim Glover established MN Services with a singular guiding philosophy: commercial property owners should never have to micromanage their cleaning crews.'
  },
  {
    year: '1985',
    title: 'Expansion Across the Twin Cities',
    desc: 'Expanded beyond Minneapolis core into Minnetonka, Plymouth, and the burgeoning western suburbs, pioneering specialized hard-floor stripping and waxing.'
  },
  {
    year: '1998',
    title: 'Integrated Facility Services',
    desc: 'Added preventive electrical fixture maintenance, emergency lighting checks, and commercial plumbing support to offer clients a total facility solution.'
  },
  {
    year: '2010',
    title: 'Surpassing 10 Million Sq. Ft.',
    desc: 'Introduced computerized quality-audit logging and HEPA-filtration green cleaning programs across more than 200 commercial facilities.'
  },
  {
    year: '2024+',
    title: '50 Years of Excellence & Beyond',
    desc: 'Now maintaining over 15 million square feet daily with 500+ local professionals, standing proud as one of Minnesota’s most trusted family-owned facility service leaders.'
  }
];
