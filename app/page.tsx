'use client';

import React, { useState, useEffect } from 'react';
import {
  Radio,
  Zap,
  ShieldAlert,
  Globe,
  Cpu,
  Wrench,
  Cctv,
  Droplets,
  PhoneCall,
  Mail,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Activity,
  Compass,
  Layers,
  Award,
  FileText,
  Send,
  Copy,
  Check,
  ChevronRight,
  Radio as Broadcast,
  Server,
  Sliders,
  AlertTriangle,
  Building2,
  ExternalLink,
  Menu,
  X,
  Eye,
  Gauge,
  Signal,
  Wifi,
  HardHat
} from 'lucide-react';

// ============================================================================
// CUSTOM SVG LOGOS & TECHNICAL SCHEMATICS
// ============================================================================

/**
 * Recreated Official "LASER" Brand Emblem from Poster:
 * Sharp geometric 'L' integrated with a high-voltage lightning bolt and cyan RF broadcast waves
 */
const LaserBrandLogo = ({ className = "h-12" }) => (
  <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
    <div className="relative flex items-center justify-center w-12 h-12 bg-[#06090F] border border-slate-700/80 shadow-[0_0_25px_rgba(0,210,255,0.12)]">
      {/* Corner technical ticks */}
      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#00D2FF]" />
      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#E11D48]" />
      
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* RF Broadcast Signal Waves (Top Right) */}
        <path
          d="M36 12C43.732 12 50 18.268 50 26"
          stroke="#00D2FF"
          strokeWidth="3.8"
          strokeLinecap="square"
        />
        <path
          d="M36 19.5C39.5899 19.5 42.5 22.4101 42.5 26"
          stroke="#00D2FF"
          strokeWidth="3.5"
          strokeLinecap="square"
        />
        <path
          d="M36 4.5C47.8741 4.5 57.5 14.1259 57.5 26"
          stroke="#00D2FF"
          strokeWidth="3.8"
          strokeLinecap="square"
           className="opacity-85"
        />

        {/* Upper stem of 'L' */}
        <path
          d="M14 6H28L23 26H14V6Z"
          fill="#F8FAFC"
        />

        {/* Lower base of 'L' */}
        <path
          d="M14 36L24 29V44H52L47 54H14V36Z"
          fill="#F8FAFC"
        />

        {/* High-Voltage Lightning Bolt cutting across the 'L' */}
        <path
          d="M31 7L11 32H24L16 56L41 27H27L31 7Z"
          fill="url(#laserBoltGrad)"
          stroke="#06090F"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient id="laserBoltGrad" x1="11" y1="7" x2="41" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="48%" stopColor="#00D2FF" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div className="flex flex-col">
      <div className="flex items-center tracking-wider font-display font-bold text-xl leading-none">
        <span className="text-white">L</span>
        {/* Stylized Cyan Chevron 'A' matching poster logo */}
        <svg viewBox="0 0 20 20" className="w-4 h-4 mx-0.5 -mt-0.5" fill="none">
          <path d="M10 2L2 18H6.5L10 10.5L13.5 18H18L10 2Z" fill="#00D2FF" />
          <path d="M6.5 14H13.5" stroke="#E11D48" strokeWidth="2.2" />
        </svg>
        <span className="text-white">SER</span>
        <span className="ml-2 text-[#E11D48] font-extrabold">ELECTRONIC</span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#00D2FF] uppercase font-semibold">
          &amp; ENGINEERING SERVICE
        </span>
        <span className="hidden sm:inline-block w-1.5 h-1.5 bg-[#E11D48]" />
        <span className="hidden sm:inline-block font-mono text-[9px] text-slate-400 tracking-widest">
          REG: G/14/3964
        </span>
      </div>
    </div>
  </div>
);

/**
 * Custom Vector Badges for the 4 National Broadcast Media Networks
 * Sirasa TV, Siyatha TV, Supreme TV, Shraddha TV
 */
const BroadcastChannelLogo = ({ channelId }: { channelId: string }) => {
  switch (channelId) {
    case 'sirasa':
      return (
        <svg viewBox="0 0 220 70" className="w-full h-14" fill="none">
          <rect x="1" y="1" width="218" height="68" fill="#0A101D" stroke="#1E293B" />
          {/* Iconic Peacock / Crown Crest Geometry */}
          <g transform="translate(16, 11)">
            <circle cx="24" cy="24" r="22" fill="#00D2FF" fillOpacity="0.1" stroke="#00D2FF" strokeWidth="1.5" />
            <path d="M24 6C17 6 12 13 12 21C12 30 24 42 24 42C24 42 36 30 36 21C36 13 31 6 24 6Z" stroke="#F59E0B" strokeWidth="2" fill="#F59E0B" fillOpacity="0.15" />
            <path d="M24 11L27 20L35 20L28.5 25L31 33L24 28L17 33L19.5 25L13 20L21 20L24 11Z" fill="#F59E0B" />
            <circle cx="24" cy="6" r="2" fill="#00D2FF" />
            <circle cx="16" cy="8" r="1.5" fill="#00D2FF" />
            <circle cx="32" cy="8" r="1.5" fill="#00D2FF" />
          </g>
          <text x="76" y="33" fill="#FFFFFF" className="font-display" fontWeight="800" fontSize="22" letterSpacing="2">
            SIRASA <tspan fill="#F59E0B">TV</tspan>
          </text>
          <text x="76" y="50" fill="#94A3B8" fontFamily="monospace" fontSize="9.5" letterSpacing="1.5">
            MBC NETWORKS • CH VHF/UHF
          </text>
        </svg>
      );
    case 'siyatha':
      return (
        <svg viewBox="0 0 220 70" className="w-full h-14" fill="none">
          <rect x="1" y="1" width="218" height="68" fill="#0A101D" stroke="#1E293B" />
          {/* Crimson & Gold Broadcast Globe / Wave Emblem */}
          <g transform="translate(16, 11)">
            <rect x="2" y="2" width="44" height="44" rx="4" fill="#E11D48" fillOpacity="0.14" stroke="#E11D48" strokeWidth="1.5" />
            <path d="M12 32C12 22 20 14 30 14" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <path d="M12 24C12 18 17 14 23 14" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="26" cy="28" r="7" fill="#E11D48" />
            <circle cx="26" cy="28" r="3" fill="#FFFFFF" />
          </g>
          <text x="76" y="33" fill="#FFFFFF" className="font-display" fontWeight="800" fontSize="21" letterSpacing="1.8">
            SIYATHA <tspan fill="#E11D48">TV</tspan>
          </text>
          <text x="76" y="50" fill="#94A3B8" fontFamily="monospace" fontSize="9.5" letterSpacing="1.5">
            VOICE OF ASIA NETWORK
          </text>
        </svg>
      );
    case 'supreme':
      return (
        <svg viewBox="0 0 220 70" className="w-full h-14" fill="none">
          <rect x="1" y="1" width="218" height="68" fill="#0A101D" stroke="#1E293B" />
          {/* Geometric 'S' Star / Prism Broadcast Crest */}
          <g transform="translate(16, 11)">
            <polygon points="24,2 44,14 44,34 24,46 4,34 4,14" fill="#F59E0B" fillOpacity="0.12" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M30 15H19L15 22L29 26L25 33H14" stroke="#F59E0B" strokeWidth="3.2" strokeLinecap="square" />
            <circle cx="24" cy="24" r="2" fill="#FFFFFF" />
          </g>
          <text x="76" y="33" fill="#FFFFFF" className="font-display" fontWeight="800" fontSize="20.5" letterSpacing="1.8">
            SUPREME <tspan fill="#F59E0B">TV</tspan>
          </text>
          <text x="76" y="50" fill="#94A3B8" fontFamily="monospace" fontSize="9.5" letterSpacing="1.5">
            SUPREME GLOBAL HOLDINGS
          </text>
        </svg>
      );
    case 'shraddha':
      return (
        <svg viewBox="0 0 220 70" className="w-full h-14" fill="none">
          <rect x="1" y="1" width="218" height="68" fill="#0A101D" stroke="#1E293B" />
          {/* Lotus & Dharma Transmission Wave Crest */}
          <g transform="translate(16, 11)">
            <circle cx="24" cy="24" r="21" fill="#00D2FF" fillOpacity="0.1" stroke="#00D2FF" strokeWidth="1.5" />
            <path d="M24 10C28 16 30 22 24 30C18 22 20 16 24 10Z" fill="#00D2FF" />
            <path d="M24 30C30 24 36 22 38 28C34 33 28 33 24 30Z" fill="#F59E0B" />
            <path d="M24 30C18 24 12 22 10 28C14 33 20 33 24 30Z" fill="#F59E0B" />
            <path d="M14 35H34" stroke="#FFFFFF" strokeWidth="2" />
          </g>
          <text x="76" y="33" fill="#FFFFFF" className="font-display" fontWeight="800" fontSize="19.5" letterSpacing="1.4">
            SHRADDHA <tspan fill="#00D2FF">TV</tspan>
          </text>
          <text x="76" y="50" fill="#94A3B8" fontFamily="monospace" fontSize="9.5" letterSpacing="1.4">
            NATIONAL MEDIA NETWORK
          </text>
        </svg>
      );
    default:
      return null;
  }
};

// ============================================================================
// STRUCTURED ENGINEERING DATA
// ============================================================================

const TOWER_SUBSYSTEMS = [
  {
    id: 'array',
    code: 'SYS-01 // ELEV: +115m - 120m',
    name: 'UHF/VHF Broadcast Antenna Array & ESE Air Terminal',
    status: 'NOMINAL // VSWR 1.08:1',
    color: '#E11D48',
    specs: [
      'High-gain multi-bay UHF/VHF directional & omnidirectional panel arrays',
      'Early Streamer Emission (ESE) lightning air terminal at mast pinnacle',
      'Precision azimuth & mechanical downtilt rigging for national coverage',
      'Heavy-duty hot-dip galvanized mounting brackets & wind-load bracing'
    ]
  },
  {
    id: 'aol',
    code: 'SYS-02 // ELEV: +60m / +90m / +120m',
    name: 'ICAO Aviation Obstruction Lighting (AOL) &LM-Series Controllers',
    status: 'ACTIVE // PHOTOCELL AUTO',
    color: '#F59E0B',
    specs: [
      'ICAO / FAA compliant twin high-intensity LED aviation warning beacons',
      'Automated LM-Series daylight photocell & fault-alarm monitoring panels',
      'Surge-protected weatherproof junction boxes & armored power risers',
      'Zero-downtime dual-lamp redundancy for high-altitude flight safety'
    ]
  },
  {
    id: 'microwave',
    code: 'SYS-03 // ELEV: +75m - 92m',
    name: 'Point-to-Point Microwave Backhaul & Studio-Transmitter Links (STL)',
    status: 'LOCKED // -34 dBm RSL',
    color: '#00D2FF',
    specs: [
      'High-wind parabolic microwave dishes (0.6m to 3.0m diameter) with radomes',
      'Precision line-of-sight (LOS) path alignment & cross-polarization tuning',
      'Elliptical waveguide runs, dehydrator pressurization & grounding kits',
      'Redundant studio-to-transmitter (STL) digital broadcast telemetry links'
    ]
  },
  {
    id: 'rigging',
    code: 'SYS-04 // ELEV: +15m - 110m',
    name: 'Structural Tower Rigging, Erection, Dismantling & Feeder Matrix',
    status: 'CERTIFIED // ISO RIGGING',
    color: '#38BDF8',
    specs: [
      'Self-supporting 3-legged & 4-legged angular/tubular lattice tower erection',
      'Safe high-altitude dismantling & relocation of legacy broadcast masts',
      'Low-loss corrugated copper RF coaxial feeders (7/8", 1-5/8", 3-1/8")',
      'Stainless steel hoisting grips, feeder clamps & waveguide gantry bridges'
    ]
  },
  {
    id: 'earthing',
    code: 'SYS-05 // ELEV: -3.0m SUB-SURFACE',
    name: 'Deep Chemical & Copper-Bonded Earthing Grid (< 1.0 Ω)',
    status: 'VERIFIED // 0.68 OHMS',
    color: '#10B981',
    specs: [
      'Pure copper-bonded earth rods, bare copper tape ring-main & exothermic welds',
      'Bentonite/backfill chemical earthing pits for rocky & coastal terrains',
      'Multi-stage Type 1+2 Surge Protection Devices (SPD) on MDB & RF entry ports',
      '4-point Wenner soil resistivity testing & annual clamp-on earth certification'
    ]
  }
];

const MEDIA_PARTNERS = [
  {
    id: 'sirasa',
    name: 'Sirasa TV',
    parent: 'MBC Networks (Capital Maharaja Group)',
    band: 'VHF / UHF National Broadcast',
    tag: 'TIER-1 BROADCAST PARTNER',
    summary:
      'Comprehensive high-elevation broadcast tower structural engineering, multi-bay VHF/UHF antenna rigging, main RF feeder line installation, and safe high-altitude decommissioning/upgrades across strategic islandwide transmission stations.',
    deliverables: [
      'High-altitude rigging & structural reinforcement of primary transmission towers',
      'Installation & VSWR sweep testing of high-power broadcast antenna arrays',
      'Main corrugated copper RF feeder cable hoisting, clamping & weatherproofing',
      'Aviation Obstruction Lighting (AOL) beacon overhaul & lightning down-conductors'
    ],
    metrics: {
      elevation: 'Up to 120m AGL',
      vswr: '< 1.10 : 1 Certified',
      protection: 'ESE + Deep Copper Grid',
      status: 'Long-Term Engineering Partner'
    }
  },
  {
    id: 'siyatha',
    name: 'Siyatha TV',
    parent: 'Voice of Asia Network',
    band: 'UHF Television & FM Transmission',
    tag: 'TRANSMISSION INFRASTRUCTURE',
    summary:
      'End-to-end transmission tower erection, Studio-to-Transmitter (STL) microwave link dish alignment, automated aviation obstruction lighting (AOL) controller integration, and low-impedance earthing grids.',
    deliverables: [
      'Full lattice tower erection, verticality alignment & torque verification',
      'Point-to-point microwave backhaul dish mounting & precision azimuth panning',
      'LM-Series automated aviation light controller & surge-protected wiring',
      'Sub-1-Ohm bonded copper earthing ring connecting tower legs & transmitter hall'
    ],
    metrics: {
      elevation: '85m – 110m AGL',
      vswr: 'Precision Tuned RF',
      protection: 'Multi-Stage SPD + Earth Mat',
      status: 'Active Infrastructure Partner'
    }
  },
  {
    id: 'supreme',
    name: 'Supreme TV',
    parent: 'Supreme Global Holdings',
    band: 'National DTV / UHF Broadcast',
    tag: 'ANTENNA & TOWER RIGGING',
    summary:
      'Specialized broadcast antenna system engineering, high-altitude rigging operations, heavy structural dismantling and site relocation, and continuous RF transmission line preventive maintenance.',
    deliverables: [
      'Safe dismantling, rigging down & relocation of heavy broadcast antenna systems',
      'Installation of high-gain UHF slot/panel arrays & rigid coaxial combiners',
      'Waveguide bridge fabrication, feeder grounding kits & moisture sealing',
      '3-phase industrial power distribution & emergency backup switchgear integration'
    ],
    metrics: {
      elevation: '90m+ Tower Systems',
      vswr: 'Full Load Verified',
      protection: 'Exothermic Copper Bonding',
      status: 'Verified Broadcast Client'
    }
  },
  {
    id: 'shraddha',
    name: 'Shraddha TV',
    parent: 'Shraddha Media Network (Shadha)',
    band: 'UHF Satellite & Terrestrial Broadcast',
    tag: 'RF & LIGHTNING PROTECTION',
    summary:
      'Turnkey broadcast transmission infrastructure protection, Early Streamer Emission (ESE) lightning surge arresters, studio/transmitter 3-phase power integration, and high-reliability RF maintenance.',
    deliverables: [
      'Early Streamer Emission (ESE) lightning protection for towers & media studios',
      'Broadcast antenna rigging, feeder routing & studio-transmitter link setup',
      'Industrial 3-phase Main Distribution Boards (MDB) & automatic changeover panels',
      'Scheduled thermal inspection & monsoon pre-check maintenance protocols'
    ],
    metrics: {
      elevation: '75m – 100m AGL',
      vswr: 'Zero-Fault Continuity',
      protection: 'IEC 62305 Compliant',
      status: 'Trusted Media Partner'
    }
  }
];

const GLOBAL_OPERATIONS = [
  {
    id: 'srilanka',
    country: 'Sri Lanka (HQ & Islandwide)',
    regionCode: 'LK // SOUTH ASIA',
    coords: '06°08\'22"N 80°06\'22"E',
    hub: 'Hikkaduwa HQ • Colombo • Kandy • Nuwara Eliya • Gongala',
    highlight: '25+ Years National Flagship Operations',
    summary:
      'Headquartered in Narigama, Hikkaduwa (Gov Reg: G/14/3964), executing islandwide mountain-peak broadcast tower rigging for Tier-1 TV networks, industrial 3-phase electrical contracting, deep earthing systems, and commercial MEP projects.',
    capabilities: [
      'High-altitude broadcast & telecom tower erection, rigging and dismantling across central hill-country peaks',
      'Complete electrical wiring (internal/external), MDB/SDB panels & generator ATS systems',
      'ESE lightning protection, copper chemical earthing & surge suppression for towers, hotels & factories',
      'Enterprise IP-CCTV surveillance, commercial plumbing/sanitation & 24/7 facility maintenance'
    ],
    stats: [
      { label: 'Operational Tenure', value: '25+ Years' },
      { label: 'National TV Clients', value: '4 Major Networks' },
      { label: 'Emergency Response', value: '24/7 Islandwide' }
    ]
  },
  {
    id: 'dubai',
    country: 'Dubai, United Arab Emirates',
    regionCode: 'AE // MIDDLE EAST',
    coords: '25°12\'17"N 55°16\'15"E',
    hub: 'Dubai Commercial & Industrial Zones',
    highlight: 'International Telecom & High-Spec MEP Execution',
    summary:
      'Field-proven overseas engineering experience in Dubai delivering high-specification commercial telecommunication infrastructure, structured fiber/data cabling, MEP electrical distribution, and high-rise lightning protection systems.',
    capabilities: [
      'Commercial telecom room (MDF/IDF) buildouts, fiber optic splicing & structured Cat6A/Cat7 data networks',
      'High-rise lightning protection air terminals, down-conductor bonding & low-resistance earth pits',
      'Industrial three-phase electrical containment, GI trunking, armored cable pulling & panel termination',
      'Integrated ELV security systems, IP surveillance matrices & international safety standard compliance'
    ],
    stats: [
      { label: 'Engineering Standard', value: 'DEWA / IEC Spec' },
      { label: 'Core Focus', value: 'Telecom & MEP' },
      { label: 'Deployment Type', value: 'Commercial / High-Rise' }
    ]
  },
  {
    id: 'maldives',
    country: 'Republic of Maldives',
    regionCode: 'MV // INDIAN OCEAN',
    coords: '04°10\'31"N 73°30\'33"E',
    hub: 'Malé & Luxury Resort Atolls',
    highlight: 'Marine-Grade Atoll Telecom, Earthing & Resort MEP',
    summary:
      'Specialized overseas engineering across Maldivian island resorts and atoll hubs, overcoming high-salinity coastal environments with marine-grade telecommunication links, corrosion-resistant copper earthing, power distribution, and sanitation systems.',
    capabilities: [
      'Inter-island point-to-point microwave wireless links, resort Wi-Fi backhaul & communication masts',
      'Marine-grade corrosion-proof copper earthing grids & tropical lightning surge protection for overwater/island structures',
      'Resort electrical power distribution, armored underground feeder cabling & powerhouse panel integration',
      'High-pressure booster plumbing, desalination/sanitation piping & weatherproof perimeter CCTV networks'
    ],
    stats: [
      { label: 'Environment Spec', value: 'Marine / High-Salinity' },
      { label: 'Core Focus', value: 'Resort Telecom & Power' },
      { label: 'Protection Grade', value: 'IP67 / Heavy Copper' }
    ]
  },
  {
    id: 'myanmar',
    country: 'Myanmar (Burma)',
    regionCode: 'MM // SOUTHEAST ASIA',
    coords: '16°50\'27"N 96°10\'24"E',
    hub: 'Regional Telecom Corridors',
    highlight: 'Heavy Telecom Tower Erection & Backhaul Rigging',
    summary:
      'International field deployment experience during rapid regional telecommunications expansion—executing greenfield and rooftop lattice tower erection, microwave backhaul rigging, and primary grounding/power installations.',
    capabilities: [
      'Greenfield self-supporting lattice tower erection, foundation grounding & heavy rigging operations',
      ' Cellular & broadcast antenna array mounting, RF feeder installation & microwave link alignment',
      'Solar/hybrid & diesel generator power backup integration with automatic transfer switchgear',
      'Perimeter security, aviation obstruction light (AOL) installations & transient surge protection'
    ],
    stats: [
      { label: 'Infrastructure', value: 'Greenfield & Rooftop' },
      { label: 'Core Focus', value: 'Tower & RF Rollout' },
      { label: 'Safety Record', value: '100% Zero-Incident' }
    ]
  }
];

const ENGINEERING_DIVISIONS = [
  {
    id: 'telecom',
    code: 'DIV-01 // FLAGSHIP CORE',
    title: 'Telecommunication, Broadcast Towers & Data Systems',
    subtitle: 'HIGH-ALTITUDE RIGGING • RF ANTENNAS • MICROWAVE • FIBER OPTICS',
    featured: true,
    accent: '#00D2FF',
    icon: Radio,
    description:
      'Our premier engineering division with over two decades of field mastery serving national television networks (Sirasa, Siyatha, Supreme, Shraddha) and international telecom operators. We handle complete tower lifecycle engineering from foundation to pinnacle.',
    specs: [
      'Self-supporting & guyed mast tower erection, structural strengthening & safe dismantling',
      'VHF/UHF broadcast antenna arrays, cellular sector antennas & high-power RF coaxial feeders',
      'Point-to-point microwave dish installation, LOS alignment & waveguide pressurization',
      'ICAO-compliant Aviation Obstruction Lighting (AOL) beacons & automated LM-Series controllers',
      'Enterprise fiber optic cabling, fusion splicing, server racks & structured data networks'
    ],
    standards: ['ITU-R Broadcast', 'ICAO Annex 14 AOL', 'TIA/EIA-222 Structural']
  },
  {
    id: 'lightning',
    code: 'DIV-02 // SURGE & EARTHING',
    title: 'Lightning Protection & Deep Earthing Systems',
    subtitle: 'ESE AIR TERMINALS • COPPER EARTH MATS • SPD INTEGRATION',
    featured: false,
    accent: '#F59E0B',
    icon: ShieldAlert,
    description:
      'Critical protection for high-exposure telecom towers, media transmission stations, commercial buildings, and coastal resorts against direct lightning strikes and transient voltage surges.',
    specs: [
      'Early Streamer Emission (ESE) & Franklin rod lightning arresters for towers and buildings',
      'Deep-driven copper-bonded earth electrodes, bare copper tape grids & exothermic cadwelding',
      'Maintenance-free chemical earthing (Bentonite/Marconite) achieving < 1.0 Ohm resistance',
      'Type 1, 2 & 3 Surge Protection Devices (SPD) for main power boards, RF feeders & data lines'
    ],
    standards: ['IEC 62305', 'BS EN 50164', 'IEEE Std 80 Earthing']
  },
  {
    id: 'electrical',
    code: 'DIV-03 // POWER ENGINEERING',
    title: 'Electrical Wiring & Power Distribution (Internal / External)',
    subtitle: '3-PHASE INDUSTRIAL • MDB/SDB PANELS • ARMORED CABLING',
    featured: false,
    accent: '#E11D48',
    icon: Zap,
    description:
      'Complete internal and external electrical engineering for industrial plants, broadcast studios, hotels, commercial complexes, and luxury residences with strict load-balancing and safety compliance.',
    specs: [
      'Industrial 3-phase & commercial single-phase wiring, GI conduit & cable tray containment',
      'Custom Main Distribution Boards (MDB), Sub-Distribution Boards (SDB) & capacitor banks',
      'Standby generator installation, Automatic Transfer Switches (ATS) & UPS power backbones',
      'External underground armored XLPE cabling, street/perimeter lighting & load testing'
    ],
    standards: ['IET Wiring Regs (BS 7671)', 'CEB / LECO Standards', 'IEC 61439 Panels']
  },
  {
    id: 'cctv',
    code: 'DIV-04 // ELV & SECURITY',
    title: 'CCTV Surveillance & Integrated Security Systems',
    subtitle: 'IP NETWORK CAMERAS • PTZ PERIMETER • NVR CONTROL ROOMS',
    featured: false,
    accent: '#38BDF8',
    icon: Cctv,
    description:
      'High-definition 24/7 visual security and Electronic Low Voltage (ELV) monitoring engineered for transmission stations, industrial warehouses, hotels, and residential estates.',
    specs: [
      '4K Ultra-HD IP bullet, dome & long-range optical zoom PTZ surveillance cameras',
      'Centralized NVR server racks, video wall matrices & encrypted remote mobile telemetry',
      'Fiber-backhauled perimeter intrusion detection & weatherproof outdoor camera housings',
      'Biometric access control, boom barriers, intercoms & automated alarm integration'
    ],
    standards: ['ONVIF Profile S/G', 'IP67 Weatherproof', '24/7 Redundant Storage']
  },
  {
    id: 'plumbing',
    code: 'DIV-05 // MECHANICAL & HYDRO',
    title: 'Commercial Plumbing & Sanitation Engineering',
    subtitle: 'HIGH-PRESSURE SUPPLY • BOOSTER PUMPS • DRAINAGE SYSTEMS',
    featured: false,
    accent: '#06B6D4',
    icon: Droplets,
    description:
      'Precision hydraulic plumbing, automated water pressure engineering, and heavy-duty sanitation infrastructure for multi-story buildings, hotels, and industrial facilities.',
    specs: [
      'High-pressure uPVC, PPR & copper hot/cold water supply piping networks',
      'Automated VFD booster pump stations, overhead/sump tank float automation & filtration',
      'Commercial sanitary ware installation, grease traps, storm-water & waste drainage engineering',
      'Hydrostatic pressure testing, leak diagnostics & valve manifold refurbishments'
    ],
    standards: ['BS EN 806 Plumbing', 'High-Pressure PPR/uPVC', 'Automated Hydro-Control']
  },
  {
    id: 'maintenance',
    code: 'DIV-06 // LIFECYCLE SUPPORT',
    title: '24/7 Industrial & Property Maintenance Services',
    subtitle: 'PREVENTIVE SLA • FAULT DIAGNOSTICS • THERMAL IMAGING',
    featured: false,
    accent: '#10B981',
    icon: Wrench,
    description:
      'Rapid-response technical troubleshooting and annual preventive maintenance contracts ensuring uninterrupted uptime for broadcast stations, hotels, factories, and commercial properties.',
    specs: [
      '24/7 emergency breakdown callouts for electrical faults, pump failures & tower lighting',
      'Scheduled preventive maintenance (PM) checklists for switchgear, earthing & RF systems',
      'Earth resistance re-testing, insulation megger testing & panel thermal hotspot checks',
      'Complete building MEP upkeep, retrofits & storm-damage restoration'
    ],
    standards: ['24/7 Rapid Dispatch', 'Annual SLA Contracts', 'Preventive Diagnostics']
  }
];

const PROJECT_DOSSIER = [
  {
    id: 'PRJ-01',
    category: 'telecom',
    categoryLabel: 'Telecom & Broadcast',
    title: 'High-Altitude Broadcast Tower Rigging & Antenna Overhaul',
    client: 'National Television Broadcast Networks (Sirasa / Siyatha / Supreme)',
    location: 'Sri Lanka (Multiple Mountain Peak Transmission Sites)',
    elevation: '95m – 120m AGL',
    metrics: 'VHF/UHF Multi-Bay Arrays • 1-5/8" Coax Feeders',
    summary:
      'Executed high-risk rigging, dismantling of aged antenna bays, structural steel member replacement, and precision installation of new high-gain broadcast antenna arrays with full VSWR sweep verification.',
    tags: ['Tower Rigging', 'Antenna Dismantling', 'RF Feeders', 'Broadcast TV']
  },
  {
    id: 'PRJ-02',
    category: 'telecom',
    categoryLabel: 'Telecom & Broadcast',
    title: 'ICAO Aviation Obstruction Lighting (LM-Series) & Photocell Automation',
    client: 'Broadcast & Telecom Tower Operators',
    location: 'Islandwide & Overseas Tower Sites',
    elevation: '60m / 90m / 120m Levels',
    metrics: 'Dual Redundant LED Beacons • Surge Protected Control',
    summary:
      'Supply and high-altitude installation of weatherproof twin LED aviation warning lights with automated LM-101/LM-Series daylight photocell controllers and transient lightning surge arresters.',
    tags: ['Aviation Lights (AOL)', 'LM-Series Controller', 'Tower Safety', 'ICAO Spec']
  },
  {
    id: 'PRJ-03',
    category: 'lightning',
    categoryLabel: 'Lightning & Earthing',
    title: 'Deep Copper Earthing Matrix & ESE Lightning Protection System',
    client: 'Shraddha TV & Commercial Transmission Complexes',
    location: 'Sri Lanka & Maldives',
    elevation: 'Sub-surface -3.0m to +85m Air Terminal',
    metrics: 'Achieved < 0.72 Ω Earth Resistance • IEC 62305',
    summary:
      'Engineered and installed Early Streamer Emission (ESE) lightning arresters coupled with heavy copper-bonded down-conductors, exothermic welded copper tape rings, chemical earth electrodes, and multi-stage SPDs.',
    tags: ['ESE Arrester', 'Copper Earthing', 'Sub-1-Ohm', 'Surge Protection']
  },
  {
    id: 'PRJ-04',
    category: 'overseas',
    categoryLabel: 'Overseas Operations',
    title: 'International Telecom Infrastructure, Fiber & MEP Deployment',
    client: 'Regional Telecom & Resort Engineering Contractors',
    location: 'Dubai (UAE) • Maldives • Myanmar',
    elevation: 'High-Rise / Atoll / Greenfield',
    metrics: 'Multi-Country Field Experience • International Codes',
    summary:
      'Cross-border technical execution spanning structured data/fiber cabling and MEP electrical packages in Dubai, marine-grade resort telecom and earthing in the Maldives, and regional telecom tower rollouts in Myanmar.',
    tags: ['Dubai UAE', 'Maldives Resorts', 'Myanmar Towers', 'Fiber & MEP']
  },
  {
    id: 'PRJ-05',
    category: 'electrical',
    categoryLabel: 'Electrical & Power',
    title: 'Industrial 3-Phase MDB Switchgear, Generator ATS & Underground Cabling',
    client: 'Commercial Hotels, Factories & Broadcast Studios',
    location: 'Southern Province & Colombo, Sri Lanka',
    elevation: '400V 3-Phase Distribution',
    metrics: 'Custom MCCB/ACB Panels • Armored XLPE Feeders',
    summary:
      'Complete internal and external electrical engineering including custom Main Distribution Board assembly, automatic generator changeover panels, power factor correction, and underground armored cabling.',
    tags: ['3-Phase Power', 'MDB/SDB Panels', 'Generator ATS', 'Industrial Wiring']
  },
  {
    id: 'PRJ-06',
    category: 'mep',
    categoryLabel: 'CCTV, Plumbing & Maintenance',
    title: 'Enterprise IP-CCTV Surveillance Matrix & High-Pressure Hydro Plumbing',
    client: 'Hospitality Resorts & Commercial Facilities',
    location: 'Hikkaduwa, Galle & Coastal Corridor',
    elevation: 'Full-Facility Turnkey MEP',
    metrics: '4K PTZ Perimeter • Automated Booster Pumps',
    summary:
      'Turnkey property engineering combining 24/7 networked IP camera control rooms, high-pressure PPR/uPVC water supply and automated booster pumps, and ongoing 24/7 preventive maintenance.',
    tags: ['IP-CCTV Security', 'Booster Plumbing', 'Sanitation', '24/7 Maintenance']
  }
];

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  // Interactive State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubsystem, setActiveSubsystem] = useState(TOWER_SUBSYSTEMS[0]);
  const [towerViewMode, setTowerViewMode] = useState('rf'); // 'rf' | 'lightning' | 'cad'
  const [selectedChannel, setSelectedChannel] = useState(MEDIA_PARTNERS[0]);
  const [selectedRegion, setSelectedRegion] = useState(GLOBAL_OPERATIONS[0]);
  const [projectFilter, setProjectFilter] = useState('all');
  const [copiedText, setCopiedText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    // Increment progress counter for visual effect
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(timer);
          return 95;
        }
        return prev + Math.floor(Math.random() * 12) + 5;
      });
    }, 120);

    // Trigger completion when all browser assets & images finish loading
    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 600); // Smooth exit delay
    };

    if (document.readyState === 'complete') {
      handleComplete();
    } else {
      window.addEventListener('load', handleComplete);
    }

    return () => {
      clearInterval(timer);
      window.removeEventListener('load', handleComplete);
    };
  }, []);

  // Simulated Live Telemetry Ticker State
  const [telemetryTick, setTelemetryTick] = useState({
    vswr: '1.06',
    earthOhm: '0.68',
    linkMargin: '99.98%'
  });

  // RFQ Calculator / Technical Proposal Form State
  const [rfqForm, setRfqForm] = useState({
    clientName: '',
    organization: '',
    phone: '',
    country: 'Sri Lanka',
    siteLocation: '',
    selectedDivisions: ['Telecommunication, Broadcast Towers & Data Systems'],
    urgency: 'Standard Engineering Proposal (3-5 Days)',
    towerOrScale: '',
    projectNotes: ''
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const vswrVals = ['1.05', '1.06', '1.07', '1.06'];
      const ohmVals = ['0.68', '0.67', '0.69', '0.68'];
      const randIdx = Math.floor(Math.random() * vswrVals.length);
      setTelemetryTick({
        vswr: vswrVals[randIdx],
        earthOhm: ohmVals[randIdx],
        linkMargin: '99.98%'
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Filtered Projects
  const filteredProjects =
    projectFilter === 'all'
      ? PROJECT_DOSSIER
      : PROJECT_DOSSIER.filter((p) => p.category === projectFilter);

  // Toggle Division in RFQ Builder
  const toggleRfqDivision = (divTitle: string) => {
    setRfqForm((prev) => {
      const exists = prev.selectedDivisions.includes(divTitle);
      if (exists) {
        return {
          ...prev,
          selectedDivisions:
            prev.selectedDivisions.length > 1
              ? prev.selectedDivisions.filter((d) => d !== divTitle)
              : prev.selectedDivisions
        };
      }
      return {
        ...prev,
        selectedDivisions: [...prev.selectedDivisions, divTitle]
      };
    });
  };

  // Add Division from Services Grid and Scroll to RFQ
  const handleSelectServiceForRfq = (divTitle: string) => {
    setRfqForm((prev) => ({
      ...prev,
      selectedDivisions: prev.selectedDivisions.includes(divTitle)
        ? prev.selectedDivisions
        : [...prev.selectedDivisions, divTitle]
    }));
    const el = document.getElementById('rfq-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Generate Structured Technical Brief Text
  const generateTechnicalBrief = () => {
    const refId = `LSR-RFQ-${new Date().getFullYear()}-${String(
      (rfqForm.clientName.length + rfqForm.selectedDivisions.length) * 147
    ).slice(0, 4)}`;
    return [
      `*LASER ELECTRONIC & ENGINEERING SERVICE — TECHNICAL RFQ BRIEF*`,
      `Ref Code: ${refId} | Gov Reg: G/14/3964`,
      `--------------------------------------------`,
      `• Client / Engineer: ${rfqForm.clientName || 'Not Specified'}`,
      `• Organization / Channel: ${rfqForm.organization || 'Not Specified'}`,
      `• Contact Phone: ${rfqForm.phone || 'Not Specified'}`,
      `• Deployment Country: ${rfqForm.country}`,
      `• Site Location: ${rfqForm.siteLocation || 'To be advised'}`,
      `• Required Divisions: ${rfqForm.selectedDivisions.join(' | ')}`,
      `• Priority / Schedule: ${rfqForm.urgency}`,
      `• Tower Height / Facility Scale: ${rfqForm.towerOrScale || 'Standard Inspection'}`,
      `• Technical Scope Notes: ${rfqForm.projectNotes || 'Requesting engineering consultation & site quotation.'}`
    ].join('\n');
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(generateTechnicalBrief());
    window.open(`https://wa.me/94774328065?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Engineering RFQ: ${rfqForm.organization || rfqForm.clientName || 'Project Inquiry'} [${rfqForm.country}]`
    );
    const body = encodeURIComponent(generateTechnicalBrief());
    window.open(`mailto:laserhikka@gmail.com?subject=${subject}&body=${body}`, '_self');
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  return (
    <>
      {/* ─── 2. PREMIUM TELECOM BOOT SCREEN ───────────────────── */}
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#06090F] transition-all duration-700 ease-in-out ${
          isLoading
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        {/* Background CAD grid */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(circle, #00D2FF 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Animated Radar Pulse Core */}
          <div className="relative flex items-center justify-center w-28 h-28 mb-6">
            <div className="absolute inset-0 border border-[#00D2FF]/30 rounded-full animate-ping" />
            <div className="absolute inset-2 border-t-2 border-b-2 border-[#00D2FF] rounded-full animate-spin" />
            <div className="absolute inset-4 border-r-2 border-l-2 border-[#E11D48] rounded-full animate-[spin_2s_linear_infinite_reverse]" />
            <div className="w-14 h-14 bg-slate-900/90 border border-slate-700 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,210,255,0.35)]">
              <Radio className="w-7 h-7 text-[#00D2FF] animate-pulse" />
            </div>
          </div>

          {/* Brand Heading */}
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-5 h-5 text-[#E11D48]" />
            <span className="text-2xl font-black tracking-widest text-white uppercase">
              LASER
            </span>
          </div>
          <span className="text-[11px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-6">
            Engineering &amp; Telecommunication
          </span>

          {/* Progress Bar & Percentage */}
          <div className="w-64 max-w-xs flex flex-col items-center">
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
              <div
                className="h-full bg-gradient-to-r from-[#E11D48] to-[#00D2FF] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="w-full flex justify-between items-center mt-3 text-[10px] font-mono text-slate-400">
              <span className="text-[#00D2FF] uppercase animate-pulse">
                {progress < 70 ? 'INITIALIZING UPLINK...' : 'CALIBRATING GRID...'}
              </span>
              <span>{progress}%</span>
            </div>
          </div>
        </div>
      </div>
        
    <div className="min-h-screen bg-[#06090F] text-slate-100 font-sans selection:bg-[#00D2FF] selection:text-[#06090F] overflow-x-hidden">
      {/* Load Swiss Industrial & Technical Typography */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,500;0,600;0,700;1,600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .font-display {
          font-family: 'Chakra Petch', sans-serif;
        }
        .font-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        /* Architectural CAD Grid Overlay */
        .bg-cad-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
        }
        .bg-cad-subgrid {
          background-size: 160px 160px;
          background-image: 
            linear-gradient(to right, rgba(0, 210, 255, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 210, 255, 0.06) 1px, transparent 1px);
        }

        /* Animated RF Pulse Rings */
        @keyframes rfPulse {
          0% { transform: scale(0.75); opacity: 0.85; }
          70% { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        .animate-rf-pulse {
          animation: rfPulse 2.8s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .animate-rf-pulse-delayed {
          animation: rfPulse 2.8s cubic-bezier(0.16, 1, 0.3, 1) 1.4s infinite;
        }

        /* Aviation Beacon Flash */
        @keyframes beaconFlash {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 8px #E11D48); }
          50% { opacity: 0.25; filter: none; }
        }
        .animate-beacon {
          animation: beaconFlash 1.4s ease-in-out infinite;
        }

        /* Signal Dash Flow */
        @keyframes dashFlow {
          to { stroke-dashoffset: -40; }
        }
        .animate-dash-flow {
          animation: dashFlow 1.6s linear infinite;
        }
      `}</style>

      {/* =====================================================================
          1. TOP TELEMETRY BAR & INDUSTRIAL NAVIGATION
      ===================================================================== */}
      <div className="bg-[#04060A] border-b border-slate-800/90 text-[11px] font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-1.5">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-[#00D2FF] font-semibold">
              <span className="w-2 h-2 bg-[#10B981] inline-block animate-pulse" />
              GOV REG NO: G/14/3964
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline">
              25+ YEARS OF ENGINEERING EXCELLENCE
            </span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-amber-400/90 hidden md:inline">
              OPERATIONS: SRI LANKA • DUBAI • MALDIVES • MYANMAR
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href="mailto:laserhikka@gmail.com"
              className="hidden lg:inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#00D2FF]" />
              laserhikka@gmail.com
            </a>
            <span className="text-slate-700 hidden lg:inline">|</span>
            <a
              href="tel:+94774328065"
              className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-[#00D2FF] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>HOTLINE: +94 77 432 8065</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Architectural Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#06090F]/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#top" className="focus:outline-none">
            <LaserBrandLogo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center border border-slate-800/90 bg-[#0A0F1A]">
            {[
              { label: 'TELECOM & TOWERS', href: '#telecom-hero' },
              { label: 'MEDIA CHANNELS', href: '#media-partners' },
              { label: 'OVERSEAS FOOTPRINT', href: '#global-footprint' },
              { label: '6 ENGINEERING DIVISIONS', href: '#engineering-divisions' },
              { label: 'PROJECT DOSSIER', href: '#project-dossier' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2.5 text-xs font-mono tracking-wider text-slate-300 hover:text-[#00D2FF] hover:bg-slate-900/90 border-r border-slate-800/90 last:border-r-0 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#rfq-section"
              className="group relative inline-flex items-center gap-2.5 px-5 py-3 bg-[#E11D48] hover:bg-[#be123c] text-white font-display font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(225,29,72,0.3)]"
            >
              <span>REQUEST ENGINEERING QUOTE</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="xl:hidden p-2.5 border border-slate-800 bg-[#0D131F] text-slate-200 hover:text-[#00D2FF]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0A0F1A] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
            {[
              { label: '01 // TELECOM & BROADCAST TOWERS', href: '#telecom-hero' },
              { label: '02 // NATIONAL TV MEDIA PARTNERS', href: '#media-partners' },
              { label: '03 // GLOBAL FOOTPRINT (UAE, MV, MM, LK)', href: '#global-footprint' },
              { label: '04 // ALL ENGINEERING DIVISIONS', href: '#engineering-divisions' },
              { label: '05 // TECHNICAL PROJECT DOSSIER', href: '#project-dossier' },
              { label: '06 // REQUEST TECHNICAL QUOTE (RFQ)', href: '#rfq-section' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 font-mono text-xs text-slate-200 hover:text-[#00D2FF] bg-[#06090F] border border-slate-800/80"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+94774328065"
                className="w-full py-3 bg-[#00D2FF] text-[#06090F] font-display font-bold text-center text-xs tracking-widest uppercase"
              >
                CALL DIRECT: +94 77 432 8065
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================================
          2. HERO SECTION (TELECOMMUNICATION & BROADCAST INFRASTRUCTURE FOCUS)
      ===================================================================== */}
      <section
        id="telecom-hero"
        className="relative bg-cad-grid bg-cad-subgrid border-b border-slate-800"
      >
        {/* Top Engineering Coordinate Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-slate-800/80">
          <div className="py-3 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#00D2FF]/10 border border-[#00D2FF]/40 text-[#00D2FF] font-semibold">
                PRIMARY DIVISION: TELECOMMUNICATION &amp; BROADCAST INFRASTRUCTURE
              </span>
              <span className="hidden md:inline text-slate-500">
                // CAD SPEC: TIER-1 TRANSMISSION ENGINEERING
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>VSWR: <strong className="text-[#10B981]">{telemetryTick.vswr}:1</strong></span>
              <span>EARTH GRID: <strong className="text-[#00D2FF]">{telemetryTick.earthOhm} Ω</strong></span>
              <span className="hidden sm:inline">HQ: <strong className="text-slate-200">HIKKADUWA, LK</strong></span>
            </div>
          </div>

          {/* Main Hero Architectural Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Heavy-Engineering Value Proposition */}
            <div className="lg:col-span-7 py-10 sm:py-14 lg:py-16 lg:pr-10 lg:border-r border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-[#0D131F] border border-slate-700/80">
                  <Award className="w-4 h-4 text-[#F59E0B]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-200">
                    25+ YEARS TRUSTED SERVICE • GOV REG: <strong className="text-[#00D2FF]">G/14/3964</strong>
                  </span>
                </div>

                <h1 className="font-display font-bold text-3xl sm:text-5xl xl:text-[54px] text-white tracking-tight leading-[1.06] uppercase">
                  PRECISION <span className="text-[#00D2FF]">TELECOMMUNICATION</span>, BROADCAST TOWER &amp;{' '}
                  <span className="underline decoration-[#E11D48] decoration-4 underline-offset-8">
                    ELECTRICAL
                  </span>{' '}
                  ENGINEERING.
                </h1>

                <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  From high-altitude VHF/UHF broadcast tower rigging for Sri Lanka’s premier television networks (
                  <strong className="text-white">Sirasa, Siyatha, Supreme, Shraddha</strong>) to overseas infrastructure deployments across{' '}
                  <strong className="text-[#00D2FF]">Dubai, Maldives, and Myanmar</strong>—Laser Electronic &amp; Engineering Service delivers mission-critical RF, lightning protection, power distribution, and MEP solutions.
                </p>

                {/* Core Field Capabilities Pill Matrix */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    {
                      code: 'RF-01',
                      label: 'Broadcast Tower Erection, Rigging & Dismantling'
                    },
                    {
                      code: 'LP-02',
                      label: 'ESE Lightning Protection & <1Ω Copper Earthing'
                    },
                    {
                      code: 'AO-03',
                      label: 'ICAO Aviation Obstruction Lights & Controllers'
                    },
                    {
                      code: 'EP-04',
                      label: '3-Phase Industrial Electrical, CCTV & Plumbing'
                    }
                  ].map((cap) => (
                    <div
                      key={cap.code}
                      className="flex items-center gap-3 px-3.5 py-2.5 bg-[#0B101B] border border-slate-800/90 hover:border-[#00D2FF]/50 transition-colors"
                    >
                      <span className="font-mono text-[11px] font-bold px-1.5 py-0.5 bg-[#00D2FF]/10 text-[#00D2FF] border border-[#00D2FF]/30">
                        {cap.code}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {cap.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#rfq-section"
                    className="inline-flex items-center gap-3 px-6 py-4 bg-[#00D2FF] hover:bg-[#38bdf8] text-[#06090F] font-display font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(0,210,255,0.25)]"
                  >
                    <span>INITIATE ENGINEERING RFQ</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <a
                    href="#media-partners"
                    className="inline-flex items-center gap-2.5 px-6 py-4 bg-[#0D131F] hover:bg-slate-800 text-white border border-slate-700 font-display font-semibold text-sm tracking-wider uppercase transition-colors"
                  >
                    <Radio className="w-4 h-4 text-[#E11D48]" />
                    <span>INSPECT BROADCAST PORTFOLIO</span>
                  </a>
                </div>
              </div>

              {/* Bottom Broadcast & International Trust Strip */}
              <div className="mt-10 pt-6 border-t border-slate-800/90 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    TRUSTED BY NATIONAL BROADCAST NETWORKS
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2">
                    {['SIRASA TV', 'SIYATHA TV', 'SUPREME TV', 'SHRADDHA TV'].map((tv) => (
                      <span
                        key={tv}
                        className="px-2.5 py-1 bg-[#0D131F] border border-slate-700/80 font-display font-bold text-xs text-white tracking-wider"
                      >
                        {tv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    INTERNATIONAL FIELD EXPERIENCE
                  </div>
                  <div className="mt-1.5 font-mono text-xs text-[#F59E0B] font-semibold">
                    SRI LANKA • DUBAI (UAE) • MALDIVES • MYANMAR
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive CAD Broadcast Tower & Telemetry Schematic */}
            <div className="lg:col-span-5 py-8 lg:py-10 lg:pl-8 flex flex-col justify-between bg-[#080C14]/90">
              {/* Top Schematic Controls */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div>
                  <span className="font-mono text-[10px] text-[#00D2FF] uppercase tracking-widest block">
                    INTERACTIVE CAD SCHEMATIC // 120M TOWER
                  </span>
                  <h2 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    BROADCAST &amp; PROTECTION ARCHITECTURE
                  </h2>
                </div>

                {/* Simulation Mode Switcher */}
                <div className="flex items-center border border-slate-800 bg-[#05080E]">
                  {[
                    { id: 'rf', label: 'RF SIGNAL' },
                    { id: 'lightning', label: 'SURGE PATH' },
                    { id: 'cad', label: 'CAD SPEC' }
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setTowerViewMode(mode.id)}
                      className={`px-2.5 py-1 font-mono text-[10px] uppercase transition-colors ${
                        towerViewMode === mode.id
                          ? 'bg-[#00D2FF] text-[#06090F] font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive SVG Broadcast Tower Blueprint + Subsystem Selector */}
              <div className="my-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                {/* Left: High-Precision Vector Tower CAD Diagram */}
                <div className="sm:col-span-6 relative bg-[#05080E] border border-slate-800/90 p-3 flex items-center justify-center h-[350px]">
                  {/* Elevation Ruler Markings */}
                  <div className="absolute left-2 top-3 bottom-3 flex flex-col justify-between font-mono text-[9px] text-slate-500 select-none">
                    <span>+120m</span>
                    <span>+90m</span>
                    <span>+60m</span>
                    <span>+30m</span>
                    <span>0.0m</span>
                    <span className="text-[#10B981]">-3.0m</span>
                  </div>

                  {/* Mode Status Badge */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-[#0D131F] border border-slate-700 font-mono text-[9px] text-slate-300">
                    {towerViewMode === 'rf' && 'MODE: UHF/VHF TX ACTIVE'}
                    {towerViewMode === 'lightning' && 'MODE: ESE EARTHING DISCHARGE'}
                    {towerViewMode === 'cad' && 'MODE: STRUCTURAL RIGGING'}
                  </div>

                  <svg
                    viewBox="0 0 220 340"
                    className="w-full h-full max-w-[210px]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Subtle Horizon & Ground Line */}
                    <line x1="20" y1="295" x2="205" y2="295" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />

                    {/* RF Broadcast Propagation Waves (When RF mode is active) */}
                    {towerViewMode === 'rf' && (
                      <g>
                        <circle
                          cx="115"
                          cy="48"
                          r="28"
                          stroke="#00D2FF"
                          strokeWidth="1.2"
                          className="animate-rf-pulse"
                          style={{ transformOrigin: '115px 48px' }}
                        />
                        <circle
                          cx="115"
                          cy="48"
                          r="28"
                          stroke="#00D2FF"
                          strokeWidth="1.2"
                          className="animate-rf-pulse-delayed"
                          style={{ transformOrigin: '115px 48px' }}
                        />
                        {/* Microwave Link Beam */}
                        <line
                          x1="142"
                          y1="118"
                          x2="215"
                          y2="102"
                          stroke="#00D2FF"
                          strokeWidth="2"
                          strokeDasharray="5 5"
                          className="animate-dash-flow"
                        />
                      </g>
                    )}

                    {/* Lightning Surge Path (When Lightning mode is active) */}
                    {towerViewMode === 'lightning' && (
                      <g>
                        <path
                          d="M85 4 L115 24 L106 30 L115 44"
                          stroke="#F59E0B"
                          strokeWidth="2.5"
                        />
                        <path
                          d="M115 26 L115 322"
                          stroke="#F59E0B"
                          strokeWidth="3"
                          strokeDasharray="6 4"
                          className="animate-dash-flow"
                        />
                      </g>
                    )}

                    {/* SUB-SURFACE DEEP COPPER EARTHING MATRIX (-3.0m) */}
                    <g
                      onClick={() => setActiveSubsystem(TOWER_SUBSYSTEMS[4])}
                      className="cursor-pointer"
                    >
                      <rect
                        x="50"
                        y="298"
                        width="130"
                        height="34"
                        fill={activeSubsystem.id === 'earthing' ? 'rgba(16,185,129,0.18)' : 'rgba(16,185,129,0.06)'}
                        stroke="#10B981"
                        strokeWidth="1.2"
                      />
                      {/* Copper Earth Rods */}
                      <line x1="68" y1="296" x2="68" y2="328" stroke="#F59E0B" strokeWidth="2.5" />
                      <line x1="115" y1="296" x2="115" y2="328" stroke="#F59E0B" strokeWidth="2.5" />
                      <line x1="162" y1="296" x2="162" y2="328" stroke="#F59E0B" strokeWidth="2.5" />
                      <line x1="60" y1="312" x2="170" y2="312" stroke="#10B981" strokeWidth="1.5" />
                    </g>

                    {/* CONCRETE FOUNDATIONS */}
                    <rect x="68" y="287" width="18" height="10" fill="#475569" />
                    <rect x="144" y="287" width="18" height="10" fill="#475569" />

                    {/* SELF-SUPPORTING STEEL LATTICE TOWER STRUCTURE */}
                    <g
                      onClick={() => setActiveSubsystem(TOWER_SUBSYSTEMS[3])}
                      className="cursor-pointer"
                    >
                      {/* Main Tower Legs */}
                      <line x1="106" y1="68" x2="76" y2="287" stroke="#94A3B8" strokeWidth="2.5" />
                      <line x1="124" y1="68" x2="154" y2="287" stroke="#94A3B8" strokeWidth="2.5" />
                      {/* Center Coaxial Feeder Riser */}
                      <line
                        x1="115"
                        y1="38"
                        x2="115"
                        y2="295"
                        stroke={activeSubsystem.id === 'rigging' ? '#00D2FF' : '#475569'}
                        strokeWidth="2.2"
                      />
                      {/* Cross Bracing */}
                      <path
                        d="M106 75 H124 L103 105 H127 L99 140 H131 L94 180 H136 L88 225 H142 L80 275 H150"
                        stroke="#64748B"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M124 75 L103 105 L127 140 L94 180 L142 225 L80 275"
                        stroke="#475569"
                        strokeWidth="1.1"
                      />
                    </g>

                    {/* UHF / VHF BROADCAST ANTENNA SPINE (+100m to +120m) */}
                    <g
                      onClick={() => setActiveSubsystem(TOWER_SUBSYSTEMS[0])}
                      className="cursor-pointer"
                    >
                      {/*ESE Lightning Finial */}
                      <line x1="115" y1="16" x2="115" y2="68" stroke="#E2E8F0" strokeWidth="3" />
                      <polygon points="115,10 111,22 119,22" fill="#00D2FF" />
                      {/* Red/White Broadcast Dipole Bays */}
                      {[32, 42, 52, 62].map((yPos, idx) => (
                        <g key={yPos}>
                          <rect
                            x="102"
                            y={yPos}
                            width="8"
                            height="6"
                            fill={idx % 2 === 0 ? '#E11D48' : '#F8FAFC'}
                          />
                          <rect
                            x="120"
                            y={yPos}
                            width="8"
                            height="6"
                            fill={idx % 2 === 0 ? '#E11D48' : '#F8FAFC'}
                          />
                        </g>
                      ))}
                    </g>

                    {/* POINT-TO-POINT MICROWAVE DISHES (+80m) */}
                    <g
                      onClick={() => setActiveSubsystem(TOWER_SUBSYSTEMS[2])}
                      className="cursor-pointer"
                    >
                      <circle
                        cx="134"
                        cy="118"
                        r="10"
                        fill="#0D131F"
                        stroke="#00D2FF"
                        strokeWidth="2.2"
                      />
                      <path d="M138 110 C145 114 145 122 138 126" stroke="#00D2FF" strokeWidth="2" />
                      <circle
                        cx="95"
                        cy="148"
                        r="8"
                        fill="#0D131F"
                        stroke="#00D2FF"
                        strokeWidth="2"
                      />
                    </g>

                    {/* ICAO AVIATION OBSTRUCTION LIGHTS (AOL) */}
                    <g
                      onClick={() => setActiveSubsystem(TOWER_SUBSYSTEMS[1])}
                      className="cursor-pointer"
                    >
                      <circle cx="115" cy="24" r="4.5" fill="#E11D48" className="animate-beacon" />
                      <circle cx="99" cy="138" r="3.5" fill="#E11D48" className="animate-beacon" />
                      <circle cx="131" cy="138" r="3.5" fill="#E11D48" className="animate-beacon" />
                      <circle cx="88" cy="224" r="3.5" fill="#F59E0B" className="animate-beacon" />
                      <circle cx="142" cy="224" r="3.5" fill="#F59E0B" className="animate-beacon" />
                    </g>
                  </svg>
                </div>

                {/* Right: Interactive Subsystem Selector Buttons */}
                <div className="sm:col-span-6 space-y-2">
                  <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    CLICK SUBSYSTEM TO INSPECT SPECS:
                  </div>
                  {TOWER_SUBSYSTEMS.map((sys) => {
                    const isSelected = activeSubsystem.id === sys.id;
                    return (
                      <button
                        key={sys.id}
                        onClick={() => setActiveSubsystem(sys)}
                        className={`w-full text-left p-2.5 border transition-all ${
                          isSelected
                            ? 'bg-[#0F172A] border-[#00D2FF] shadow-[inset_3px_0_0_#00D2FF]'
                            : 'bg-[#06090F] border-slate-800/90 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between font-mono text-[9.5px]">
                          <span className="text-[#00D2FF] font-semibold">{sys.code}</span>
                          <span className="text-emerald-400">{sys.status.split('//')[0]}</span>
                        </div>
                        <div className="mt-0.5 font-display font-bold text-xs text-white leading-snug">
                          {sys.name}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Subsystem Live Spec Output Box */}
              <div className="bg-[#05080E] border border-slate-800 p-4">
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-800/80">
                  <span className="font-mono text-[10px] text-[#F59E0B] uppercase font-semibold">
                    {activeSubsystem.code}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {activeSubsystem.status}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {activeSubsystem.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-[#00D2FF] font-mono mt-0.5">›</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Key Quantitative Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-slate-800/90 bg-[#080C14]">
            {[
              {
                metric: '25+ YEARS',
                label: 'PROVEN ENGINEERING TENURE',
                sub: 'Established Sri Lankan Engineering Authority'
              },
              {
                metric: '4 COUNTRIES',
                label: 'INTERNATIONAL DEPLOYMENTS',
                sub: 'Sri Lanka • Dubai (UAE) • Maldives • Myanmar'
              },
              {
                metric: 'TIER-1 MEDIA',
                label: 'NATIONAL TV BROADCAST CLIENTS',
                sub: 'Sirasa TV • Siyatha TV • Supreme • Shraddha'
              },
              {
                metric: 'G/14/3964',
                label: 'GOVERNMENT REGISTERED ENTITY',
                sub: '100% High-Altitude Rigging & Electrical Safety'
              }
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`p-5 sm:p-6 ${
                  idx < 3 ? 'border-b lg:border-b-0 border-r border-slate-800/80' : ''
                }`}
              >
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  {stat.metric}
                </div>
                <div className="mt-1 font-mono text-[11px] font-bold text-[#00D2FF] tracking-wider">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-slate-400">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. NATIONAL BROADCAST MEDIA CHANNELS SHOWCASE (LOGOS & WORK SCOPES)
      ===================================================================== */}
      <section id="media-partners" className="py-16 sm:py-24 border-b border-slate-800 bg-[#06090F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-slate-800 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E11D48] uppercase tracking-widest mb-2">
                <span className="w-2 h-2 bg-[#E11D48]" />
                SECTION 02 // NATIONAL BROADCAST INFRASTRUCTURE PARTNER
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
                TRUSTED BY LEADING <span className="text-[#00D2FF]">TELEVISION NETWORKS</span>
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md font-sans">
              We execute critical high-elevation broadcast tower rigging, antenna installation, dismantling, aviation lighting, and lightning surge protection for Sri Lanka’s top media channels.
            </p>
          </div>

          {/* 4 Interactive Broadcast Channel Logo Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MEDIA_PARTNERS.map((channel) => {
              const isSelected = selectedChannel.id === channel.id;
              return (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannel(channel)}
                  className={`text-left p-5 transition-all border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0D1526] border-[#00D2FF] shadow-[0_0_25px_rgba(0,210,255,0.12)]'
                      : 'bg-[#0A0F1A] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] px-2 py-0.5 bg-slate-900 border border-slate-700 text-slate-300">
                        {channel.tag}
                      </span>
                      <span
                        className={`w-2 h-2 ${
                          isSelected ? 'bg-[#00D2FF] animate-ping' : 'bg-slate-600'
                        }`}
                      />
                    </div>

                    {/* Custom Vector Channel Logo */}
                    <div className="my-2">
                      <BroadcastChannelLogo channelId={channel.id} />
                    </div>

                    <p className="mt-3 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {channel.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px]">
                    <span className={isSelected ? 'text-[#00D2FF] font-bold' : 'text-slate-400'}>
                      {isSelected ? 'INSPECTING SCOPE' : 'VIEW TECHNICAL SCOPE'}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-[#00D2FF] translate-x-1' : 'text-slate-500'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Broadcast Engineering Dossier for Selected Channel */}
          <div className="mt-6 bg-[#0B111E] border border-slate-800 p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4 lg:border-r border-slate-800 lg:pr-8">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00D2FF]">
                  <Signal className="w-4 h-4" />
                  <span>TRANSMISSION ENGINEERING DOSSIER</span>
                </div>
                <div className="max-w-[260px]">
                  <BroadcastChannelLogo channelId={selectedChannel.id} />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">{selectedChannel.parent}</div>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">
                    {selectedChannel.name} — Infrastructure Scope
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedChannel.summary}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-[#06090F] border border-slate-800">
                    <div className="font-mono text-[10px] text-slate-400 uppercase">WORKING ELEVATION</div>
                    <div className="font-mono text-xs font-bold text-white mt-0.5">
                      {selectedChannel.metrics.elevation}
                    </div>
                  </div>
                  <div className="p-3 bg-[#06090F] border border-slate-800">
                    <div className="font-mono text-[10px] text-slate-400 uppercase">RF CALIBRATION</div>
                    <div className="font-mono text-xs font-bold text-[#10B981] mt-0.5">
                      {selectedChannel.metrics.vswr}
                    </div>
                  </div>
                  <div className="p-3 bg-[#06090F] border border-slate-800">
                    <div className="font-mono text-[10px] text-slate-400 uppercase">SURGE PROTECTION</div>
                    <div className="font-mono text-xs font-bold text-[#F59E0B] mt-0.5">
                      {selectedChannel.metrics.protection}
                    </div>
                  </div>
                  <div className="p-3 bg-[#06090F] border border-slate-800">
                    <div className="font-mono text-[10px] text-slate-400 uppercase">TRANSMISSION BAND</div>
                    <div className="font-mono text-xs font-bold text-[#00D2FF] mt-0.5">
                      {selectedChannel.band}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Executed Field Engineering Deliverables */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
                    EXECUTED BROADCAST &amp; TOWER ENGINEERING DELIVERABLES
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400">
                    ● FIELD VERIFIED
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {selectedChannel.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#06090F] border border-slate-800/90 flex items-start gap-3"
                    >
                      <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#00D2FF]/10 text-[#00D2FF] border border-[#00D2FF]/30">
                        0{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-[#06090F] border-l-4 border-[#E11D48] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-display font-bold text-sm text-white uppercase">
                      NEED BROADCAST TOWER RIGGING, DISMANTLING OR RF MAINTENANCE?
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Our high-altitude rigging crew is equipped for islandwide &amp; overseas transmission projects.
                    </div>
                  </div>
                  <a
                    href="#rfq-section"
                    className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-[#E11D48] hover:bg-[#be123c] text-white font-display font-bold text-xs uppercase tracking-wider"
                  >
                    <span>BOOK RIGGING TEAM</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. INTERNATIONAL OPERATIONS & OVERSEAS EXPERIENCE EXPLORER
      ===================================================================== */}
      <section
        id="global-footprint"
        className="py-16 sm:py-24 border-b border-slate-800 bg-[#080C14] bg-cad-grid"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-slate-800 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00D2FF] uppercase tracking-widest mb-2">
                <Globe className="w-4 h-4" />
                SECTION 03 // CROSS-BORDER TELECOM &amp; MEP DEPLOYMENTS
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
                OVERSEAS ENGINEERING FOOTPRINT:{' '}
                <span className="text-[#F59E0B]">DUBAI • MALDIVES • MYANMAR • SRI LANKA</span>
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Beyond 25+ years of islandwide leadership in Sri Lanka, our engineering specialists bring proven overseas execution across the Middle East, Indian Ocean Atolls, and Southeast Asia.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 border border-slate-800 bg-[#06090F]">
            {/* Left Column: Country Selector Tabs + Regional Vector Telemetry Map */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-800 p-6 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-3">
                  SELECT OPERATIONAL THEATRE TO INSPECT:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {GLOBAL_OPERATIONS.map((op) => {
                    const active = selectedRegion.id === op.id;
                    return (
                      <button
                        key={op.id}
                        onClick={() => setSelectedRegion(op)}
                        className={`p-3.5 text-left border transition-all flex items-center justify-between ${
                          active
                            ? 'bg-[#0F172A] border-[#00D2FF] shadow-[inset_4px_0_0_#00D2FF]'
                            : 'bg-[#0A0F1A] border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div>
                          <div className="font-mono text-[10px] text-[#00D2FF]">{op.regionCode}</div>
                          <div className="font-display font-bold text-base text-white mt-0.5">
                            {op.country}
                          </div>
                        </div>
                        <div className="text-right font-mono text-[10px] text-slate-400">
                          <div>{op.coords.split(' ')[0]}</div>
                          <div className={active ? 'text-[#F59E0B] font-bold' : 'text-slate-500'}>
                            ACTIVE NODE →
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Regional Deployment Vector Radar Map */}
              <div className="mt-6 bg-[#04070C] border border-slate-800 p-4">
                <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 mb-2">
                  <span>INDIAN OCEAN &amp; MENA TELECOM CORRIDOR</span>
                  <span className="text-[#00D2FF]">{selectedRegion.coords}</span>
                </div>
                <svg viewBox="0 0 360 175" className="w-full h-40" fill="none">
                  {/* Radar Grid Lines */}
                  <line x1="0" y1="45" x2="360" y2="45" stroke="#1E293B" strokeDasharray="3 3" />
                  <line x1="0" y1="90" x2="360" y2="90" stroke="#1E293B" strokeDasharray="3 3" />
                  <line x1="0" y1="135" x2="360" y2="135" stroke="#1E293B" strokeDasharray="3 3" />
                  <line x1="90" y1="0" x2="90" y2="175" stroke="#1E293B" strokeDasharray="3 3" />
                  <line x1="180" y1="0" x2="180" y2="175" stroke="#1E293B" strokeDasharray="3 3" />
                  <line x1="270" y1="0" x2="270" y2="175" stroke="#1E293B" strokeDasharray="3 3" />

                  {/* Connection Arcs from Sri Lanka HQ (210, 122) to Dubai (72, 48), Maldives (162, 140), Myanmar (292, 68) */}
                  <path
                    d="M210 122 Q135 55 72 48"
                    stroke={selectedRegion.id === 'dubai' ? '#00D2FF' : '#334155'}
                    strokeWidth={selectedRegion.id === 'dubai' ? '2.2' : '1.2'}
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M210 122 Q185 138 162 140"
                    stroke={selectedRegion.id === 'maldives' ? '#00D2FF' : '#334155'}
                    strokeWidth={selectedRegion.id === 'maldives' ? '2.2' : '1.2'}
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M210 122 Q255 85 292 68"
                    stroke={selectedRegion.id === 'myanmar' ? '#00D2FF' : '#334155'}
                    strokeWidth={selectedRegion.id === 'myanmar' ? '2.2' : '1.2'}
                    strokeDasharray="4 4"
                  />

                  {/* Node: DUBAI (UAE) */}
                  <g
                    onClick={() => setSelectedRegion(GLOBAL_OPERATIONS[1])}
                    className="cursor-pointer"
                  >
                    <circle
                      cx="72"
                      cy="48"
                      r={selectedRegion.id === 'dubai' ? '7' : '4.5'}
                      fill={selectedRegion.id === 'dubai' ? '#00D2FF' : '#F59E0B'}
                    />
                    <text x="40" y="34" fill="#F8FAFC" fontFamily="monospace" fontSize="9.5" fontWeight="bold">
                      DUBAI (UAE)
                    </text>
                  </g>

                  {/* Node: MALDIVES */}
                  <g
                    onClick={() => setSelectedRegion(GLOBAL_OPERATIONS[2])}
                    className="cursor-pointer"
                  >
                    <circle
                      cx="162"
                      cy="140"
                      r={selectedRegion.id === 'maldives' ? '7' : '4.5'}
                      fill={selectedRegion.id === 'maldives' ? '#00D2FF' : '#F59E0B'}
                    />
                    <text x="115" y="160" fill="#F8FAFC" fontFamily="monospace" fontSize="9.5" fontWeight="bold">
                      MALDIVES
                    </text>
                  </g>

                  {/* Node: SRI LANKA HQ */}
                  <g
                    onClick={() => setSelectedRegion(GLOBAL_OPERATIONS[0])}
                    className="cursor-pointer"
                  >
                    <circle
                      cx="210"
                      cy="122"
                      r={selectedRegion.id === 'srilanka' ? '8' : '5.5'}
                      fill="#E11D48"
                    />
                    <text x="195" y="110" fill="#FFFFFF" fontFamily="monospace" fontSize="10" fontWeight="bold">
                      SRI LANKA (HQ)
                    </text>
                  </g>

                  {/* Node: MYANMAR */}
                  <g
                    onClick={() => setSelectedRegion(GLOBAL_OPERATIONS[3])}
                    className="cursor-pointer"
                  >
                    <circle
                      cx="292"
                      cy="68"
                      r={selectedRegion.id === 'myanmar' ? '7' : '4.5'}
                      fill={selectedRegion.id === 'myanmar' ? '#00D2FF' : '#F59E0B'}
                    />
                    <text x="260" y="54" fill="#F8FAFC" fontFamily="monospace" fontSize="9.5" fontWeight="bold">
                      MYANMAR
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Right Column: Selected Country Detailed Operations Breakdown */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <span className="font-mono text-xs text-[#F59E0B] uppercase font-semibold">
                    {selectedRegion.regionCode} // {selectedRegion.highlight}
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 bg-[#0D131F] border border-slate-700 text-[#00D2FF]">
                    GPS: {selectedRegion.coords}
                  </span>
                </div>

                <h3 className="mt-5 font-display font-bold text-2xl sm:text-3xl text-white uppercase">
                  {selectedRegion.country}
                </h3>
                <div className="mt-1 font-mono text-xs text-slate-400">
                  OPERATIONAL HUBS: <strong className="text-slate-200">{selectedRegion.hub}</strong>
                </div>

                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedRegion.summary}
                </p>

                <div className="mt-6">
                  <div className="font-mono text-xs text-[#00D2FF] uppercase tracking-wider mb-3">
                    REGIONAL FIELD CAPABILITIES &amp; DELIVERED SCOPES:
                  </div>
                  <div className="space-y-2.5">
                    {selectedRegion.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="p-3.5 bg-[#0A0F1A] border border-slate-800 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Country Telemetry Footer Metrics */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-3 gap-4">
                {selectedRegion.stats.map((st) => (
                  <div key={st.label} className="p-3.5 bg-[#0A0F1A] border border-slate-800/80">
                    <div className="font-mono text-[10px] text-slate-400 uppercase">{st.label}</div>
                    <div className="font-display font-bold text-sm sm:text-base text-white mt-1">
                      {st.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. MULTI-DISCIPLINARY ENGINEERING DIVISIONS (TELECOM + ALL 6 SERVICES)
      ===================================================================== */}
      <section id="engineering-divisions" className="py-16 sm:py-24 border-b border-slate-800 bg-[#06090F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-slate-800 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00D2FF] uppercase tracking-widest mb-2">
                <Layers className="w-4 h-4" />
                SECTION 04 // FULL-SPECTRUM TECHNICAL DIVISIONS
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
                TELECOMMUNICATION CORE &amp; <span className="text-[#00D2FF]">MULTI-DISCIPLINARY MEP</span>
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              While Telecommunication &amp; Broadcast Infrastructure is our flagship specialty, Laser Electronic &amp; Engineering Service operates 6 integrated divisions for complete turnkey project delivery.
            </p>
          </div>

          {/* Architectural Bento Grid: Division 01 Flagship Full-Width + 5 Core Divisions */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
            {ENGINEERING_DIVISIONS.map((div) => {
              const IconComponent = div.icon;
              const isSelectedInRfq = rfqForm.selectedDivisions.includes(div.title);

              if (div.featured) {
                return (
                  <div
                    key={div.id}
                    className="lg:col-span-12 bg-gradient-to-r from-[#0B1324] via-[#0A101D] to-[#0D131F] border-2 border-[#00D2FF]/70 p-6 sm:p-10 relative"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#00D2FF]/15 border border-[#00D2FF] flex items-center justify-center text-[#00D2FF]">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-mono text-xs font-bold text-[#00D2FF] uppercase tracking-widest">
                            {div.code}
                          </div>
                          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase">
                            {div.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {div.standards.map((std) => (
                          <span
                            key={std}
                            className="font-mono text-[10px] px-2.5 py-1 bg-[#06090F] border border-slate-700 text-slate-300"
                          >
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-5 space-y-4">
                        <div className="font-mono text-xs text-[#F59E0B] uppercase tracking-wider">
                          {div.subtitle}
                        </div>
                        <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                          {div.description}
                        </p>
                        <div className="pt-2 flex flex-wrap gap-3">
                          <button
                            onClick={() => handleSelectServiceForRfq(div.title)}
                            className="inline-flex items-center gap-2 px-5 py-3 bg-[#00D2FF] hover:bg-[#38bdf8] text-[#06090F] font-display font-bold text-xs uppercase tracking-wider transition-colors"
                          >
                            <span>
                              {isSelectedInRfq ? '✓ ADDED TO RFQ SCOPE' : '+ ADD DIVISION TO RFQ'}
                            </span>
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {div.specs.map((spec, idx) => (
                          <div
                            key={idx}
                            className={`p-3.5 bg-[#06090F]/90 border border-slate-800 flex items-start gap-2.5 ${
                              idx === 4 ? 'sm:col-span-2' : ''
                            }`}
                          >
                            <span className="font-mono text-xs text-[#00D2FF] font-bold">
                              0{idx + 1}
                            </span>
                            <span className="text-xs sm:text-sm text-slate-200">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={div.id}
                  className="lg:col-span-4 bg-[#0A0F1A] border border-slate-800 hover:border-slate-600 p-6 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                      <span className="font-mono text-[11px] font-bold text-[#00D2FF]">
                        {div.code}
                      </span>
                      <div className="w-9 h-9 bg-[#06090F] border border-slate-700 flex items-center justify-center text-slate-200">
                        <IconComponent className="w-4 h-4 text-[#00D2FF]" />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white uppercase leading-snug">
                      {div.title}
                    </h3>
                    <div className="mt-1 font-mono text-[10px] text-[#F59E0B] uppercase tracking-wider">
                      {div.subtitle}
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {div.description}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-4">
                      {div.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-[#00D2FF] font-mono font-bold">›</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-400">
                      {div.standards[0]}
                    </span>
                    <button
                      onClick={() => handleSelectServiceForRfq(div.title)}
                      className="font-mono text-xs text-[#00D2FF] hover:text-white uppercase font-semibold inline-flex items-center gap-1"
                    >
                      <span>{isSelectedInRfq ? '✓ IN RFQ BRIEF' : '+ REQUEST QUOTE'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. INTERACTIVE PROJECT & TECHNICAL CAPABILITY FILTER
      ===================================================================== */}
      <section id="project-dossier" className="py-16 sm:py-24 border-b border-slate-800 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-slate-800 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F59E0B] uppercase tracking-widest mb-2">
                <FileText className="w-4 h-4" />
                SECTION 05 // VERIFIED FIELD ENGINEERING DOSSIER
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
                EXECUTED <span className="text-[#00D2FF]">TECHNICAL SCOPES</span> &amp; CAPABILITIES
              </h2>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'ALL SCOPES (06)' },
                { id: 'telecom', label: 'TELECOM & TOWERS' },
                { id: 'lightning', label: 'LIGHTNING & EARTHING' },
                { id: 'overseas', label: 'OVERSEAS (UAE/MV/MM)' },
                { id: 'electrical', label: '3-PHASE ELECTRICAL' },
                { id: 'mep', label: 'CCTV & PLUMBING' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectFilter(tab.id)}
                  className={`px-3 py-2 font-mono text-[11px] uppercase border transition-colors ${
                    projectFilter === tab.id
                      ? 'bg-[#00D2FF] text-[#06090F] border-[#00D2FF] font-bold'
                      : 'bg-[#06090F] text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filtered Project Cards Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((prj) => (
              <div
                key={prj.id}
                className="bg-[#06090F] border border-slate-800 hover:border-[#00D2FF]/60 p-6 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] pb-3 mb-4 border-b border-slate-800">
                    <span className="text-[#00D2FF] font-bold">{prj.id} // {prj.categoryLabel}</span>
                    <span className="px-2 py-0.5 bg-slate-900 border border-slate-700 text-slate-300">
                      {prj.elevation}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white uppercase leading-snug">
                    {prj.title}
                  </h3>

                  <div className="mt-3 space-y-1 font-mono text-[11px]">
                    <div className="text-slate-400">
                      CLIENT SECTOR: <span className="text-slate-200">{prj.client}</span>
                    </div>
                    <div className="text-slate-400">
                      DEPLOYMENT: <span className="text-[#F59E0B]">{prj.location}</span>
                    </div>
                    <div className="text-slate-400">
                      SPEC: <span className="text-emerald-400">{prj.metrics}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {prj.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {prj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 bg-[#0B111E] border border-slate-800 text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. DIRECT RFQ CALCULATOR / ENGINEERING INQUIRY & OFFICIAL FOOTER
      ===================================================================== */}
      <section
        id="rfq-section"
        className="py-16 sm:py-24 bg-[#06090F] bg-cad-grid border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-slate-800 bg-[#0A0F1A]">
            {/* Left Column: Direct Engineering Command Center & Credentials */}
            <div className="lg:col-span-5 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between bg-[#080C15]">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E11D48] uppercase tracking-widest mb-2">
                  <span className="w-2 h-2 bg-[#E11D48] animate-ping" />
                  DIRECT ENGINEERING DESK
                </div>
                <h2 className="font-display font-bold text-3xl text-white uppercase tracking-tight">
                  REQUEST TECHNICAL PROPOSAL OR <span className="text-[#00D2FF]">SITE INSPECTION</span>
                </h2>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Configure your project requirements on the right to generate a structured engineering brief. Dispatch directly to our Chief Engineering Desk via WhatsApp or Email for rapid quotation.
                </p>

                {/* Official Credentials Box matching Poster Details */}
                <div className="mt-8 space-y-4">
                  <div className="p-4 bg-[#06090F] border border-slate-800">
                    <div className="font-mono text-[10px] text-[#00D2FF] uppercase">
                      GOVERNMENT REGISTERED ENGINEERING ENTITY
                    </div>
                    <div className="font-display font-bold text-lg text-white mt-0.5">
                      LASER ELECTRONIC &amp; ENGINEERING SERVICE
                    </div>
                    <div className="font-mono text-xs text-slate-400 mt-0.5">
                      Gov Reg No: <strong className="text-white">G/14/3964</strong> • 25+ Years Trusted Service
                    </div>
                  </div>

                  {/* Direct Phone & WhatsApp Hotlines */}
                  <div className="p-4 bg-[#06090F] border border-slate-800 space-y-2.5">
                    <div className="font-mono text-[10px] text-[#F59E0B] uppercase">
                      24/7 CALL / WHATSAPP ENGINEERING HOTLINES
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        href="tel:+94774328065"
                        className="font-mono text-sm sm:text-base font-bold text-white hover:text-[#00D2FF]"
                      >
                        +94 77 432 8065
                      </a>
                      <button
                        onClick={() => handleCopyText('+94774328065', 'phone1')}
                        className="font-mono text-[10px] px-2 py-1 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-1"
                      >
                        {copiedText === 'phone1' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedText === 'phone1' ? 'COPIED' : 'COPY'}</span>
                      </button>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                      <a
                        href="tel:+94714925693"
                        className="font-mono text-sm sm:text-base font-bold text-white hover:text-[#00D2FF]"
                      >
                        +94 71 492 5693
                      </a>
                      <button
                        onClick={() => handleCopyText('+94714925693', 'phone2')}
                        className="font-mono text-[10px] px-2 py-1 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-1"
                      >
                        {copiedText === 'phone2' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedText === 'phone2' ? 'COPIED' : 'COPY'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Headquarters & Email */}
                  <div className="p-4 bg-[#06090F] border border-slate-800 space-y-2">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <MapPin className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Headquarters:</strong> No. 65, Summer Garden, Narigama, Hikkaduwa, Sri Lanka
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Mail className="w-4 h-4 text-[#00D2FF] shrink-0" />
                      <a href="mailto:laserhikka@gmail.com" className="hover:text-white font-mono">
                        laserhikka@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Globe className="w-4 h-4 text-[#F59E0B] shrink-0" />
                      <span className="font-mono">fb.com/shaminda Gamage</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 font-mono text-[11px] text-slate-400">
                STATUS: <span className="text-emerald-400">FIELD TEAMS AVAILABLE FOR ISLANDWIDE &amp; OVERSEAS DEPLOYMENT</span>
              </div>
            </div>

            {/* Right Column: Interactive RFQ Scope Configurator */}
            <div className="lg:col-span-7 p-6 sm:p-10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <span className="font-mono text-xs text-[#00D2FF] uppercase font-semibold">
                  TECHNICAL RFQ CONFIGURATOR // STEP-BY-STEP BRIEF
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  GOV REG: G/14/3964
                </span>
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-5">
                {/* Multi-Select Engineering Divisions */}
                <div>
                  <label className="block font-mono text-xs uppercase text-slate-300 mb-2">
                    1. SELECT REQUIRED ENGINEERING DIVISION(S):
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ENGINEERING_DIVISIONS.map((div) => {
                      const active = rfqForm.selectedDivisions.includes(div.title);
                      return (
                        <button
                          type="button"
                          key={div.id}
                          onClick={() => toggleRfqDivision(div.title)}
                          className={`p-2.5 text-left font-mono text-[11px] border transition-all flex items-center justify-between ${
                            active
                              ? 'bg-[#00D2FF]/15 border-[#00D2FF] text-white font-bold'
                              : 'bg-[#06090F] border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span className="truncate pr-2">{div.title}</span>
                          <span className={active ? 'text-[#00D2FF]' : 'text-slate-600'}>
                            {active ? '[✓]' : '[ ]'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Client & Organization Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] uppercase text-slate-400 mb-1.5">
                      2. YOUR NAME / ENGINEER NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Eng. Perera / Project Manager"
                      value={rfqForm.clientName}
                      onChange={(e) => setRfqForm({ ...rfqForm, clientName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#06090F] border border-slate-800 focus:border-[#00D2FF] focus:outline-none text-sm text-white font-sans"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase text-slate-400 mb-1.5">
                      3. COMPANY / MEDIA NETWORK / RESORT
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Broadcast Network / Hotel / Contractor"
                      value={rfqForm.organization}
                      onChange={(e) => setRfqForm({ ...rfqForm, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#06090F] border border-slate-800 focus:border-[#00D2FF] focus:outline-none text-sm text-white font-sans"
                    />
                  </div>
                </div>

                {/* Phone, Country & Site Location */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] uppercase text-slate-400 mb-1.5">
                      4. PHONE / WHATSAPP *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+94 77 XXX XXXX"
                      value={rfqForm.phone}
                      onChange={(e) => setRfqForm({ ...rfqForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#06090F] border border-slate-800 focus:border-[#00D2FF] focus:outline-none text-sm text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase text-slate-400 mb-1.5">
                      5. DEPLOYMENT COUNTRY
                    </label>
                    <select
                      value={rfqForm.country}
                      onChange={(e) => setRfqForm({ ...rfqForm, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#06090F] border border-slate-800 focus:border-[#00D2FF] focus:outline-none text-sm text-white font-sans"
                    >
                      <option value="Sri Lanka">Sri Lanka (Islandwide)</option>
                      <option value="Maldives">Republic of Maldives</option>
                      <option value="Dubai / UAE">Dubai / UAE</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Other Overseas">Other International Site</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase text-slate-400 mb-1.5">
                      6. SITE CITY / TOWER LOCATION
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Colombo / Hikkaduwa / Malé"
                      value={rfqForm.siteLocation}
                      onChange={(e) => setRfqForm({ ...rfqForm, siteLocation: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#06090F] border border-slate-800 focus:border-[#00D2FF] focus:outline-none text-sm text-white font-sans"
                    />
                  </div>
                </div>

                {/* Priority & Scale */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] uppercase text-slate-400 mb-1.5">
                      7. SCHEDULE / URGENCY LEVEL
                    </label>
                    <select
                      value={rfqForm.urgency}
                      onChange={(e) => setRfqForm({ ...rfqForm, urgency: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#06090F] border border-slate-800 focus:border-[#00D2FF] focus:outline-none text-sm text-white font-sans"
                    >
                      <option value="Standard Engineering Proposal (3-5 Days)">
                        Standard Engineering Proposal (3-5 Days)
                      </option>
                      <option value="Urgent Site Inspection Required (24-48 Hours)">
                        Urgent Site Inspection Required (24-48 Hours)
                      </option>
                      <option value="Emergency Broadcast / Power Breakdown (Immediate)">
                        Emergency Broadcast / Power Breakdown (Immediate)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase text-slate-400 mb-1.5">
                      8. TOWER HEIGHT / FACILITY SPECIFICATIONS
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 80m Tower Rigging / 3-Phase MDB / ESE Earthing"
                      value={rfqForm.towerOrScale}
                      onChange={(e) => setRfqForm({ ...rfqForm, towerOrScale: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#06090F] border border-slate-800 focus:border-[#00D2FF] focus:outline-none text-sm text-white font-sans"
                    />
                  </div>
                </div>

                {/* Technical Scope Notes */}
                <div>
                  <label className="block font-mono text-[11px] uppercase text-slate-400 mb-1.5">
                    9. TECHNICAL SCOPE DETAILS (TOWER WORK, ANTENNAS, EARTHING, WIRING, ETC.)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your technical requirements, antenna/tower rigging scope, lightning protection, electrical wiring, or maintenance needs..."
                    value={rfqForm.projectNotes}
                    onChange={(e) => setRfqForm({ ...rfqForm, projectNotes: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#06090F] border border-slate-800 focus:border-[#00D2FF] focus:outline-none text-sm text-white font-sans"
                  />
                </div>

                {/* Dispatch Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 min-w-[230px] inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#10B981] hover:bg-[#059669] text-[#06090F] font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND BRIEF VIA WHATSAPP (+94 77 432 8065)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#00D2FF] hover:bg-[#38bdf8] text-[#06090F] font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>DISPATCH VIA EMAIL</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyText(generateTechnicalBrief(), 'brief')}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-4 bg-[#06090F] border border-slate-700 hover:border-white text-slate-200 font-mono text-xs uppercase"
                  >
                    {copiedText === 'brief' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>BRIEF COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>COPY BRIEF</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          ARCHITECTURAL FOOTER
      ===================================================================== */}
      <footer className="bg-[#04060A] text-slate-400 font-sans border-t border-slate-800/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
            {/* Col 1: Brand & Registration */}
            <div className="lg:col-span-5 space-y-4">
              <LaserBrandLogo />
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                Premier Telecommunication, Broadcast Tower Rigging, Lightning Protection, Industrial Electrical &amp; Multi-Disciplinary Engineering Contractor with 25+ years of trusted service across Sri Lanka, Dubai, Maldives, and Myanmar.
              </p>
              <div className="font-mono text-xs text-slate-300">
                GOV REG NO: <strong className="text-[#00D2FF]">G/14/3964</strong>
              </div>
            </div>

            {/* Col 2: Core Divisions */}
            <div className="lg:col-span-4 space-y-2">
              <div className="font-mono text-xs text-white uppercase tracking-wider font-bold mb-3">
                ENGINEERING DIVISIONS
              </div>
              <ul className="space-y-1.5 text-xs">
                <li>• Telecommunication, Broadcast Towers &amp; Data Systems</li>
                <li>• Lightning Protection (ESE) &amp; Deep Copper Earthing</li>
                <li>• Electrical Wiring (Internal / External) &amp; 3-Phase Panels</li>
                <li>• CCTV Surveillance &amp; Integrated Security Systems</li>
                <li>• Commercial Plumbing &amp; Sanitation Solutions</li>
                <li>• 24/7 Industrial &amp; Property Maintenance Services</li>
              </ul>
            </div>

            {/* Col 3: Direct Contact Details */}
            <div className="lg:col-span-3 space-y-2 text-xs">
              <div className="font-mono text-xs text-white uppercase tracking-wider font-bold mb-3">
                OFFICIAL CREDENTIALS
              </div>
              <p className="text-slate-300">
                <strong className="text-white">Address:</strong> No. 65, Summer Garden, Narigama, Hikkaduwa, Sri Lanka
              </p>
              <p className="font-mono text-slate-200">
                <strong className="text-[#00D2FF]">Tel 1:</strong> +94 77 432 8065
              </p>
              <p className="font-mono text-slate-200">
                <strong className="text-[#00D2FF]">Tel 2:</strong> +94 71 492 5693
              </p>
              <p className="font-mono text-slate-200">
                <strong className="text-[#00D2FF]">Email:</strong> laserhikka@gmail.com
              </p>
              <p className="font-mono text-slate-300">
                <strong className="text-[#F59E0B]">Social:</strong> fb.com/shaminda Gamage
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
            <div>
              © {new Date().getFullYear()} LASER ELECTRONIC &amp; ENGINEERING SERVICE (REG: G/14/3964). ALL RIGHTS RESERVED.
            </div>
            <div className="text-slate-400">
              SRI LANKA • DUBAI (UAE) • MALDIVES • MYANMAR
            </div>
          </div>
        </div>
      </footer>
    </div>
   </>
  );
}