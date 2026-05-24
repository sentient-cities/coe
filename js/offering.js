(function(){
// =====================================================================
// STAGES DATA  (13-stage engagement value chain)
// =====================================================================
const STAGES_DATA = [
  {
    id: 1, num: '01',
    name: 'Sentient Ambition & Value Case',
    short: 'Ambition',
    icon: 'M12 2 L4 7 V17 L12 22 L20 17 V7 Z M12 2 V22 M4 7 L20 17 M20 7 L4 17',
    color: '#ec4dd6',
    tagline: 'From aspiration to investable target operating model',
    pitch: 'We translate broad ambitions into a target operating model across the four lifecycle phases — with maturity benchmark, value case and roadmap.',
    activities: [
      'Current-state diagnostic across people, process, data, technology and governance',
      'Sentient maturity benchmark against Singapore Smart Nation, NEOM, Dubai 10X, Songdo',
      '"Sense → Anticipate → Act → Evolve" capability heatmap',
      'Executive value case linked to livability, resilience, service quality and operating efficiency',
      'Strategic outcome framing tied to national agendas (Vision 2030, UAE Centennial 2071)',
      'Segment-tailored framing per archetype (greenfield, brownfield, mega-events, industrialization)'
    ],
    deliverable: 'Sentient City Manifesto + executive narrative + maturity scorecard + investment-wave roadmap',
    pod: 'Strategy & Advisory Pod',
    phaseAccelerators: {
      'Design & Master Plan': 'Sentient City Blueprinting; livability/sustainability target-state — *Sentient Maturity Index, North-Star Canvas*',
      'Develop & Build':      'Sentient construction vision; safety & productivity north-star — *Construction Sentient Index*',
      'Operate & Govern':     'Integrated operations vision; sense-anticipate-act-evolve operating model — *Sentient Ops Operating Model*',
      'Experience & Virtualize': 'Sentient experience vision; pre-arrival → post-departure orchestration — *Experience Sentience Framework*'
    }
  },
  {
    id: 2, num: '02',
    name: 'Use Case & Service Portfolio Engineering',
    short: 'Use Cases',
    icon: 'M3 5 H21 V19 H3 Z M7 9 H17 M7 13 H17 M7 17 H13',
    color: '#bd4dff',
    tagline: 'From hundreds of fragmented ideas to a sequenced portfolio',
    pitch: 'Most programmes arrive with hundreds of fragmented use case ideas. We rationalize them into a coherent, sequenced portfolio with lighthouse selections.',
    activities: [
      'Use case mining across all 11 domains using our 200+ pre-curated Sentient use case library',
      'Use story crafting (narrative form, persona-anchored, journey-mapped — not feature lists)',
      'Clustering by business value and implementation feasibility',
      'Cross-domain bundling (e.g., crowd mgmt + smart venue + mobility + safety into a "mega-event" cluster)',
      'Lighthouse use case selection for first-wave deployment',
      'Reuse mapping across districts, venues, and asset classes'
    ],
    deliverable: 'Tiered use case portfolio (Wave 0 / 1 / 2 / 3) + dependency map + reuse register + lighthouse business cases',
    pod: 'Strategy & Advisory + Domain Pods',
    phaseAccelerators: {
      'Design & Master Plan': 'Urban use case mining across 11 domains; lighthouse selection — *200+ use case library, value-feasibility matrix*',
      'Develop & Build':      'Worker safety, hazard prediction, multi-contractor orchestration, quality intelligence, supply chain — *BIM-to-Twin connectors, CV defect models*',
      'Operate & Govern':     'Cross-domain incident correlation, predictive maintenance, energy optimization — *Cross-Domain Incident Engine, Anomaly Library*',
      'Experience & Virtualize': 'Pre-arrival journey planning, real-time wayfinding, crowd-aware routing, smart venue comfort, XR experiences, sentiment analytics — *Journey Orchestration Platform, Wayfinding Engine, Sentiment AI*'
    }
  },
  {
    id: 3, num: '03',
    name: 'Product Portfolio & Operating Model',
    short: 'Products',
    icon: 'M4 8 L12 4 L20 8 V16 L12 20 L4 16 Z M12 4 V12 M4 8 L12 12 L20 8',
    color: '#9d6cff',
    tagline: 'Define the product portfolio worth owning, and how to run it',
    pitch: 'Most city clients don\'t think in products — but they should. We define the product portfolio, ownership model and run model that makes capability sustainable.',
    activities: [
      'Decision per capability: city-owned product, managed service, concession, shared platform or venue/district instance',
      'Product family construct: City Twin, Construction Twin, ICCC, AIoT Ops, Mobility Orchestration, Smart Venue Control',
      'Visitor & Resident Experience, Public Authority Cockpit, Environmental Intelligence, Asset Performance, XR Co-creation',
      'Per product: vision, charter, owner, decision rights, release model, KPIs, funding model, monetization',
      'Business ownership vs. technology ownership clearly separated',
      'Capex/opex/PPP/concession funding alignment'
    ],
    deliverable: 'Product portfolio blueprint + product charters + operating model',
    pod: 'Strategy & Advisory + Architecture & Engineering',
    phaseAccelerators: {
      'Design & Master Plan': 'Twin product strategy (planning twin → operational twin); planning product charter — *Twin Product Charter Library*',
      'Develop & Build':      'Construction twin product, site control tower product, safety platform product — *Site Control Tower Reference Product*',
      'Operate & Govern':     'ICCC, AIoT operations, mobility orchestration, smart venue control, asset performance, environmental intelligence — *Product portfolio reference architecture*',
      'Experience & Virtualize': 'Visitor super-app, content orchestration, XR experience, personalization engine — *Experience Product Library*'
    }
  },
  {
    id: 4, num: '04',
    name: 'Journey, Functional & Non-Functional Requirements',
    short: 'Requirements',
    icon: 'M5 4 H19 V20 L12 16 L5 20 Z M9 8 H15 M9 12 H15',
    color: '#7b6cff',
    tagline: 'Convert ambition into procurement-ready specifications',
    pitch: 'Anchored to the seven CoE personas, this stage converts ambition into specifications detailed enough to build from — and procurement-ready spec packs.',
    activities: [
      'Persona definitions and "moments that matter" — planner, designer, builder, operator, public authority, visitor, entertainer',
      'Pre-arrival → arrival → experience → post-departure journey mapping per domain',
      'Service blueprints per touchpoint (digital, physical, hybrid, XR)',
      'Functional spec per use case using Sentient-OS reference (Cognitive AI / Data Fabric / Compute / Integration / Trust)',
      'Resilience, latency, cyber, privacy, interoperability and observability standards',
      'Translation into RFI/RFQ/RFP-grade documentation with mandatory requirements, scoring rubrics and SLAs'
    ],
    deliverable: 'Journey atlas + service blueprints + BRD/FRS/NFR catalogue + integration register + data dictionary + procurement-ready spec packs',
    pod: 'Experience & Design Pod (Accenture Song) + Architecture & Engineering',
    phaseAccelerators: {
      'Design & Master Plan': 'Planner & investor journey design; citizen co-design; planning data ontology — *XR co-design environment, Urban Data Model, Planning KPI Library*',
      'Develop & Build':      'Worker, supervisor, project director journeys; site data model; BIM-to-Twin spec — *Site Operator Journey Pack, BIM-to-Twin Schema, Site IoT Reference Spec*',
      'Operate & Govern':     'Operator, citizen-requestor, field crew, executive journeys; ICCC functional spec; OT/IT integration — *Operator Console UX Library, ICCC Reference Spec*',
      'Experience & Virtualize': 'Visitor (with app / no app), tourist, citizen-as-visitor journeys; experience platform spec; identity & consent spec — *Pre-built journey packs, Experience Platform Reference Spec*'
    }
  },
  {
    id: 5, num: '05',
    name: 'Feasibility, Benchmarking & Investment Case',
    short: 'Feasibility',
    icon: 'M3 12 H7 L9 6 L13 18 L15 10 L17 14 H21',
    color: '#5a92ff',
    tagline: 'Board-ready evidence before capital is committed',
    pitch: 'We turn assumptions into evidence — technical, operational, financial — with a vendor landscape and global benchmarks tailored to sentient cities.',
    activities: [
      'Technical feasibility (tech readiness, vendor maturity, sensor density, network availability)',
      'Operational feasibility (org readiness, skill gap, change burden)',
      'Financial feasibility — full TCO/ROI, capex/opex split, value pools, payback curve, sensitivity analysis',
      'Funding and PPP options; monetization models where applicable',
      'Vendor landscape benchmarking — Gartner-style quadrants tailored to sentient cities',
      'Benchmarking against 30+ global reference cities/projects with quantified KPI deltas'
    ],
    deliverable: 'Investment-grade business case (board-ready) + global benchmark report + vendor landscape report',
    pod: 'Strategy & Advisory + Value Architecture + Program Governance & Procurement Pod',
    phaseAccelerators: {
      'Design & Master Plan': 'Multi-scenario simulation (mobility, environment, crowd, climate, economic); twin platform vendor benchmarking — *Cross-domain simulation engine, Climate Risk AI, Crowd Simulation AI, Twin Platform Vendor Matrix*',
      'Develop & Build':      'Site instrumentation feasibility; benchmarking ConTech vendors (Procore, Autodesk, Doxel, Buildots) — *Edge Feasibility Toolkit, ConTech Vendor Matrix*',
      'Operate & Govern':     'Domain integration feasibility, legacy assessment; benchmarking ICCC vendors (NEC, Hexagon, Bentley, Motorola, Siemens) — *Legacy Assessment Toolkit, ICCC Vendor Matrix*',
      'Experience & Virtualize': 'Channel feasibility (app, kiosk, signage, XR, robot, voice); benchmarking experience platforms (Adobe, Sitecore, Salesforce) — *Channel Mix Optimizer, Experience Platform Vendor Matrix*'
    }
  },
  {
    id: 6, num: '06',
    name: 'Architecture, Tech & Data/AI Strategy + RFP',
    short: 'Architecture & RFP',
    icon: 'M4 4 H10 V10 H4 Z M14 4 H20 V10 H14 Z M4 14 H10 V20 H4 Z M14 14 H20 V20 H14 Z M10 7 H14 M7 10 V14 M14 17 H10 M17 10 V14',
    color: '#4cb4ff',
    tagline: 'Sentient-OS, neutral vendor strategy, RFP-as-a-Service',
    pitch: 'Three intertwined workstreams sequenced together: target architecture, tech/vendor strategy, and procurement support — with full RFP authoring in 4–6 weeks.',
    activities: [
      'Sentient-OS dual-layer architecture — Foundational Core + Liquid Layer for frontier innovation',
      'Domain architecture, canonical data model, event/integration architecture, edge-to-cloud',
      'Data & AI strategy: data products, MLOps, AI governance, GenAI/agentic AI prioritization',
      'Neutral vendor selection across NVIDIA Omniverse, Esri, Bentley, Cisco, Hexagon, AWS, Siemens, Dassault',
      'RFP-as-a-Service — full RFP package authoring (4–6 weeks vs typical 4–6 months)',
      'Independent Technical Advisor (ITA) on the client\'s side; Contract & SLA Engineering with Chinese-wall governance'
    ],
    deliverable: 'Solution architecture pack + data & AI strategy + ecosystem strategy + full RFP package + vendor evaluation reports + executed contracts',
    pod: 'Architecture & Engineering + Ecosystem + Program Governance & Procurement',
    phaseAccelerators: {
      'Design & Master Plan': 'Twin platform selection; GIS-BIM fusion strategy; RFP for twin platform — *Twin Platform Selector, GIS-BIM Fusion Framework, RFP Template for Twin Platform*',
      'Develop & Build':      'Construction tech stack design; RFP for ConTech bundle — *Construction Tech Reference Architecture, ConTech RFP Template*',
      'Operate & Govern':     'ICCC platform selection, AIoT stack design; agentic AI strategy; full RFP for ICCC + AIoT — *ICCC Selector, AIoT Reference Architecture, ICCC RFP Template*',
      'Experience & Virtualize': 'Experience stack design; RFP for experience tech bundle — *Experience Stack Reference, CDP Pattern Library, Experience RFP Template*'
    }
  },
  {
    id: 7, num: '07',
    name: 'Prototyping, PoC & Proof of Value',
    short: 'Prototyping',
    icon: 'M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z',
    color: '#34d8ff',
    tagline: 'Touch the future before you fund it — five distinct motions',
    pitch: 'Most strategy decks die in steering committees. A working prototype in our CoE — touchable, demoable, instrumented — moves clients from "considering" to "funding."',
    activities: [
      'Motion 1 — Concept Prototypes (1–3 weeks): clickable mock-ups, twin scene mockups, journey storyboards',
      'Motion 2 — Technical PoC (4–8 weeks): real data, real architecture — de-risking feasibility claims',
      'Motion 3 — Vendor Bake-Off PoCs (4–6 weeks each): each shortlisted vendor builds the same PoC, neutral arbiter scoring',
      'Motion 4 — Proof of Value (8–16 weeks): one zone, one venue, one corridor — outcome KPIs measured',
      'Motion 5 — Innovation Pilots: frontier capabilities (agentic AI, robotics, advanced XR), often co-funded with NVIDIA/Microsoft/Cisco',
      'Two outcomes only: "promote to delivery" or "kill with learnings documented"; >40% asset reuse KPI'
    ],
    deliverable: 'Working prototype/PoC + measured outcomes + go/no-go recommendation + harvested IP into CoE library + (typically) signed proposal for full delivery',
    pod: 'Innovation & Prototyping Pod + Domain Pods + Architecture & Engineering',
    phaseAccelerators: {
      'Design & Master Plan': 'Generative urban design PoC; climate scenario PoC; XR planning room prototype; vendor twin bake-offs — *Twin Sandbox, Generative Design PoC Pack, Decision Theatre Prototype*',
      'Develop & Build':      'Worker safety CV PoC on a real site; BIM-to-Twin pilot for one building; drone-to-twin reality capture PoC — *Site PoC Kit, Worker Safety Sandbox, Drone-Twin Pipeline*',
      'Operate & Govern':     'ICCC vendor bake-off; cross-domain incident PoC with real client data; predictive maintenance PoV; agentic operator copilot — *ICCC Sandbox, Cross-Domain Incident Engine PoC, Agentic Ops Pilot Pack*',
      'Experience & Virtualize': 'Visitor super-app prototype; XR district preview; AI digital concierge pilot; crowd-aware signage PoC; sentiment-to-ops loop PoC — *Experience Sandbox, XR Prototype Studio, Concierge AI Pilot Pack*'
    }
  },
  {
    id: 8, num: '08',
    name: 'Project Planning, Sequencing & PMO Setup',
    short: 'PMO Setup',
    icon: 'M3 5 V19 H21 M7 15 V11 M11 15 V7 M15 15 V13 M19 15 V9',
    color: '#5ee7ff',
    tagline: 'Owner\'s-rep PMO with multi-vendor governance',
    pitch: 'Clients consistently underestimate the transition from concept to executable program. We close that gap with full owner\'s-representative PMO.',
    activities: [
      'Multi-wave delivery roadmap aligned to construction milestones (critical for greenfield)',
      'Workstream architecture (typically 8–12 parallel streams)',
      'Bid evaluation, BAFO rounds, vendor short-listing finalization',
      'PMO/PgMO design (owner\'s representative model) — distinct from Accenture\'s own delivery management',
      'Multi-vendor governance framework — RACIs, decision rights, joint operating committees for 5–20 vendors',
      'Master schedule integration — construction, tech, operations and experience readiness in one timeline'
    ],
    deliverable: 'Master delivery plan + PMO operating manual + multi-vendor governance charter + Sentient PMO Control Tower deployed',
    pod: 'Delivery Excellence Pod + Program Governance & Procurement Pod',
    phaseAccelerators: {
      'Design & Master Plan': 'Twin development roadmap; LOD200→500 phasing; owner\'s-rep PMO for masterplanning program — *Twin Maturity Model, Sentient PMO Playbook*',
      'Develop & Build':      'Twin commissioning plan synced to construction milestones; owner\'s-rep PMO across EPC + tech vendors; readiness convergence orchestration — *Twin-Construction Sync Framework, Multi-Contractor Governance Pack*',
      'Operate & Govern':     'Domain-by-domain integration roadmap; owner\'s-rep PMO across ICCC vendor + 10–30 agencies + telco + cloud + integrators — *ICCC Cutover Playbook, Multi-Agency Governance Pack*',
      'Experience & Virtualize': 'Experience rollout aligned to operational go-live; owner\'s-rep PMO across experience vendors + content agencies — *Experience Launch Playbook*'
    }
  },
  {
    id: 9, num: '09',
    name: 'Build, Develop & Integrate',
    short: 'Build',
    icon: 'M4 18 L4 10 L9 7 L14 10 L14 18 M14 14 L19 14 L19 18 M9 18 L9 14 L9 14 M4 18 H21',
    color: '#5cffd6',
    tagline: 'Engineered, tested, integrated systems — not slides',
    pitch: 'This is where Accenture proves it\'s not just advising. Code, models and integrations from PoCs are hardened and scaled into production.',
    activities: [
      'Product engineering, twin construction (LOD 200–500 progressive), data engineering',
      'AI/ML model development and MLOps pipelines',
      'Edge/IoT deployment and sensor commissioning',
      'ICCC platform configuration; XR/immersive applications; signage integration',
      'Systems integration across the city stack — BMS, security, IoT, GIS, mobility, surveillance, EAM, CRM, event/venue',
      'Independent Technical Assurance of 3rd-party vendor deliverables — architecture, code, security, integration reviews'
    ],
    deliverable: 'Production-grade systems + cross-vendor integration assured + technical assurance reports',
    pod: 'All technical pods (Digital Twin, AIoT, ICCC, XR, AI/Data) + Program Governance & Procurement Pod',
    phaseAccelerators: {
      'Design & Master Plan': 'Concept twin → planning twin → operational twin pipeline — *Pre-built twin templates per archetype*',
      'Develop & Build':      'Live construction twin, CV safety, fatigue AI, QA/QC; independent technical assurance of EPC tech deliverables — *Worker Safety Models, Fatigue AI, QA/QC Engine*',
      'Operate & Govern':     'ICCC build, AIoT platform, predictive models, GIS/BIM/BMS integration; integration assurance across all domain vendors — *Pre-built ICCC modules, 50+ pre-trained AI models, integration adapters*',
      'Experience & Virtualize': 'App, kiosk, signage orchestration, XR experiences, robot integration, AI personalization, dynamic media — *Personalization Engine, Content Orchestration Platform, XR Environments, Metaverse Integration*'
    }
  },
  {
    id: 10, num: '10',
    name: 'Test, Commission, Implement & Go-Live',
    short: 'Go-Live',
    icon: 'M5 12 L10 17 L19 6',
    color: '#80ffd6',
    tagline: 'Readiness convergence for unified go-live',
    pitch: 'Commissioning is treated as a sentient, instrumented activity — not a paperwork exercise — with simulation-based rehearsal before go-live.',
    activities: [
      'Integrated testing strategy; site readiness (network, power, physical infrastructure)',
      'BIM-to-Twin transition and asset data validation',
      'Cyber and resilience validation; simulation-based rehearsal before go-live',
      'Phased deployment (zone-by-zone, building-by-building); operator training & certification',
      'Multi-vendor cutover orchestration',
      'Readiness Convergence Model — synchronizing construction, tech, ops and experience readiness for unified go-live'
    ],
    deliverable: 'Live, operational system + signed handover + managed services transition complete',
    pod: 'Delivery Excellence + Change Pod + Program Governance & Procurement',
    phaseAccelerators: {
      'Design & Master Plan': 'Decision theatres for stakeholder review; XR walkthroughs — *Decision Theatre Toolkit, XR Stakeholder Engagement Kit*',
      'Develop & Build':      'Site command rollout, wearables deployment, hazard zones; multi-contractor cutover; BIM-to-Twin handover validation — *Site Command Playbook, Commissioning Checklist Automation*',
      'Operate & Govern':     'Command room fit-out, operator training, multi-agency drills; multi-vendor go-live orchestration — *Command Room Design Kit, Operator Certification Curriculum*',
      'Experience & Virtualize': 'Channel rollout, content production, soft-launch & hard-launch — *Launch & Activation Kit*'
    }
  },
  {
    id: 11, num: '11',
    name: 'Governance, Operating Model, Trust & Change',
    short: 'Governance',
    icon: 'M12 3 L20 7 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V7 Z M9 12 L11 14 L15 10',
    color: '#ffd482',
    tagline: 'Multi-agency governance, AI ethics, vendor performance',
    pitch: 'Public authorities need visibility, trust, cyber and data governance as first-class concerns. We make them executable, not aspirational.',
    activities: [
      'Sentient City operating model (org, roles, RACIs, decision rights)',
      'Multi-agency governance frameworks (typically 10–30 agencies for government clients)',
      'Multi-vendor governance & vendor performance management — scorecards, SLA enforcement, MBRs',
      'ICCC operating model; SOPs, playbooks, intervention rules; automation boundaries',
      'Trust & compliance: privacy, cyber governance, ethics and responsible AI, audit and compliance',
      'Steering committee secretariat & executive briefing function — decision-paper authoring'
    ],
    deliverable: 'Operating model blueprint + governance manuals + vendor governance framework + adoption KPIs',
    pod: 'City Operations Transformation + Program Governance & Procurement',
    phaseAccelerators: {
      'Design & Master Plan': 'Master plan review boards, design compliance engine — *Design Compliance Engine, Policy AI*',
      'Develop & Build':      'EHS governance, contractor performance, vendor scorecards & dispute resolution — *Contractor Scorecard Engine*',
      'Operate & Govern':     'Multi-agency governance, AI ethics, escalation matrices; vendor performance management & SLA enforcement — *Multi-Agency Governance Pack, AI Ethics Board Charter, Vendor Scorecard Engine*',
      'Experience & Virtualize': 'Brand governance, content governance, experience SLAs; vendor performance for content & creative agencies — *Experience Governance Pack*'
    }
  },
  {
    id: 12, num: '12',
    name: 'Monitoring, Reporting & Value Realization',
    short: 'Value Realization',
    icon: 'M4 19 H20 M6 17 V12 M10 17 V8 M14 17 V14 M18 17 V6',
    color: '#ffaa50',
    tagline: 'KPI tracking from go-live to year-3 outcomes',
    pitch: 'Most CoEs walk away after go-live. We don\'t — we own benefits realization end-to-end through a dedicated Value Realization Office.',
    activities: [
      'KPI/SLA dashboards at every layer (asset, system, domain, district, city)',
      'KPI hierarchy and executive oversight cadence',
      'Program-level executive reporting — milestone tracking, vendor performance, financial burn, risk heatmaps',
      'Outcome tracking against business case; benefits realization audits',
      'Continuous benchmarking against peer cities; AI-assisted reporting (auto-narratives from data)',
      'Sentient PMO Control Tower — single executive view of construction telemetry, tech delivery, vendor performance and ops readiness'
    ],
    deliverable: 'Live dashboards + executive cadence + program control tower + quarterly value reports',
    pod: 'Value Realization Office + Program Governance & Procurement',
    phaseAccelerators: {
      'Design & Master Plan': 'Plan-vs-actual dashboards for masterplan KPIs — *Planning Performance Dashboard*',
      'Develop & Build':      'Construction control tower, schedule deviation, defect heatmaps; AI-augmented PMO reporting — *Construction Control Tower Dashboard*',
      'Operate & Govern':     'Cross-domain dashboards, KPI cascade, executive briefing automation — *Cascade Dashboard Library, AI Auto-Reporting*',
      'Experience & Virtualize': 'Sentiment dashboards, behaviour analytics, NPS tracking — *Experience Analytics Dashboard, Continuous Learning Engine*'
    }
  },
  {
    id: 13, num: '13',
    name: 'Run, Operate & Continuously Evolve',
    short: 'Run & Evolve',
    icon: 'M12 4 V8 M12 16 V20 M4 12 H8 M16 12 H20 M6.3 6.3 L9 9 M15 15 L17.7 17.7 M6.3 17.7 L9 15 M15 9 L17.7 6.3',
    color: '#ec4dd6',
    tagline: 'The annuity engine — 6 tiers of managed services',
    pitch: 'Recurring revenue, deepest partnerships, highest lifetime value. Designed in from Stage 6 — not added later. The continuous innovation tier feeds new PoCs back into Stage 7.',
    activities: [
      'Tier 1 — Platform Managed Services (Sentient-OS, twin, ICCC, integration fabric, 24×7)',
      'Tier 2 — AI & Data Managed Services (MLOps-as-a-Service, AI Refinery operations, advanced analytics)',
      'Tier 3 — IoT & OT Managed Services (sensor estate, edge fleet, network operations, field dispatch)',
      'Tier 4 — Operations Center Managed Services (Operator-as-a-Service for ICCC, event-mode surge ops)',
      'Tier 5 — Experience Managed Services (visitor app ops, content orchestration, A/B testing-as-a-service)',
      'Tier 6 — Continuous Innovation Services (new use case factory, quarterly innovation pilots, living masterplan)'
    ],
    deliverable: 'Multi-year managed services contract + tiered SLAs + continuous innovation pipeline',
    pod: 'Managed Services & Operate Pod (6-Tier model)',
    phaseAccelerators: {
      'Design & Master Plan': 'Living masterplan-as-a-service (twin continuously updated as decisions evolve) — *Living Masterplan Service*',
      'Develop & Build':      'Build-to-operate twin handover; construction telemetry as managed service; field ops dispatch — *Twin Synchronization Engine, Asset Registry Integration*',
      'Operate & Govern':     'Operator-as-a-Service (we run the ICCC); 24×7 platform ops; MLOps; sensor estate; field dispatch; event-mode surge ops — *Managed Ops Runbook, MLOps Platform, Surge Ops Playbook*',
      'Experience & Virtualize': 'Experience optimization-as-a-service, A/B testing, content refresh, personalization model ops, sentiment monitoring with monthly insight reports — *Recommendation Models, Experience Optimization-as-a-Service*'
    }
  }
];


// =====================================================================
// PHASE → COLOR MAP
// =====================================================================
const PHASE_COLORS = {
  'Design & Master Plan':    '#ec4dd6',
  'Develop & Build':         '#9d6cff',
  'Operate & Govern':        '#34d8ff',
  'Experience & Virtualize': '#5cffd6'
};

// =====================================================================
// HELPERS
// =====================================================================
function colorMix(hex, pct){
  // approximate darken by pct (0-100), simple hex math
  const c = hex.replace('#','');
  const r = parseInt(c.substr(0,2), 16);
  const g = parseInt(c.substr(2,2), 16);
  const b = parseInt(c.substr(4,2), 16);
  const f = (100 - pct) / 100;
  const nr = Math.round(r * f);
  const ng = Math.round(g * f);
  const nb = Math.round(b * f);
  return '#' + [nr, ng, nb].map(n => n.toString(16).padStart(2,'0')).join('');
}
function escHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function inlineFmt(s){
  return escHtml(s).replace(/\*([^*]+?)\*/g, '<em>$1</em>');
}

// =====================================================================
// STAGE → SPECIFIC RELATED ELEMENTS (phases, services, use cases)
//   Used to render deep-link pills inside each stage panel
// =====================================================================
const STAGE_RELATED = {
  1: { // Vision / Ambition
    intro: 'A Sentient Ambition shapes the entire programme. It anchors every phase and every persona — start by exploring how it lands in each phase:',
    phases: ['Design & Master Plan','Develop & Build','Operate & Govern','Experience & Virtualize'],
    useCases: [
      ['Design & Master Plan', 'City Digital Twin', 'Concept modelling'],
      ['Operate & Govern', 'Integrated Command & Control', 'Centralized monitoring'],
      ['Experience & Virtualize', 'Visitor Journey Platform', 'Pre-arrival engagement']
    ]
  },
  2: { // Use Case Portfolio
    intro: 'Lighthouse use cases the portfolio typically anchors around, in their natural phase:',
    phases: ['Design & Master Plan','Develop & Build','Operate & Govern','Experience & Virtualize'],
    useCases: [
      ['Design & Master Plan', 'Crowd & Traffic Simulation', 'Pedestrian flow testing'],
      ['Design & Master Plan', 'Environmental Simulation', 'Weather & climate simulation'],
      ['Develop & Build', 'Worker Safety Intelligence', 'Fatigue & wellbeing detection'],
      ['Develop & Build', 'Worker Safety Intelligence', 'PPE compliance'],
      ['Develop & Build', 'Quality & Fault Intelligence', 'Digital snagging'],
      ['Operate & Govern', 'Integrated Command & Control', 'Alert orchestration'],
      ['Operate & Govern', 'Mobility Operations', 'Traffic management'],
      ['Operate & Govern', 'Public Safety & Resilience', 'Emergency management'],
      ['Operate & Govern', 'Utilities & Asset Operations', 'Smart metering'],
      ['Experience & Virtualize', 'Smart Venue Experience', 'Crowd management'],
      ['Experience & Virtualize', 'XR & Immersive Experiences', 'Virtual venue tours'],
      ['Experience & Virtualize', 'Wayfinding & Arrival Orchestration', 'Smart airport']
    ]
  },
  3: { // Product Portfolio
    intro: 'Capabilities that become productised — drill into each in its native phase:',
    phases: ['Design & Master Plan','Develop & Build','Operate & Govern','Experience & Virtualize'],
    useCases: [
      ['Design & Master Plan', 'City Digital Twin', 'Master planning'],
      ['Develop & Build', 'BIM-to-Twin Delivery', 'Digital handover'],
      ['Operate & Govern', 'Integrated Command & Control', 'Centralized monitoring'],
      ['Operate & Govern', 'AI-Driven Operations Optimization', 'AI reporting'],
      ['Experience & Virtualize', 'Visitor Journey Platform', 'Personalized services']
    ]
  },
  4: { // Journeys & Requirements
    intro: 'Every requirement set is anchored to a persona journey. Explore the moments that matter:',
    phases: ['Design & Master Plan','Develop & Build','Operate & Govern','Experience & Virtualize'],
    useCases: [
      ['Design & Master Plan', 'AI Co-Creation', 'Collaborative design'],
      ['Design & Master Plan', 'Planning Governance', 'Stakeholder management'],
      ['Develop & Build', 'Vendor & Workflow Coordination', 'Stakeholder approvals'],
      ['Operate & Govern', 'Integrated Command & Control', 'Incident workflows'],
      ['Experience & Virtualize', 'Visitor Journey Platform', 'Pre-arrival engagement'],
      ['Experience & Virtualize', 'Wayfinding & Arrival Orchestration', 'Accessible routing']
    ]
  },
  5: { // Feasibility
    intro: 'Where feasibility, vendor benchmarking and the business case are typically tested first:',
    phases: ['Design & Master Plan','Develop & Build','Operate & Govern','Experience & Virtualize'],
    useCases: [
      ['Design & Master Plan', 'Crowd & Traffic Simulation', 'Transport forecasting'],
      ['Design & Master Plan', 'Environmental Simulation', 'Sunlight & shadow simulation'],
      ['Develop & Build', 'Site Command & Monitoring', 'Progress tracking'],
      ['Operate & Govern', 'AI-Driven Operations Optimization', 'Anomaly detection']
    ]
  },
  6: { // Architecture & RFP
    intro: 'Reference architectures and RFP templates anchor on these capabilities first:',
    phases: ['Design & Master Plan','Develop & Build','Operate & Govern','Experience & Virtualize'],
    useCases: [
      ['Design & Master Plan', 'City Digital Twin', '3D urban context review'],
      ['Develop & Build', 'BIM-to-Twin Delivery', 'Asset metadata readiness'],
      ['Operate & Govern', 'Integrated Command & Control', 'Alert orchestration'],
      ['Operate & Govern', 'Utilities & Asset Operations', 'GIS & asset management'],
      ['Experience & Virtualize', 'Smart Venue Experience', 'Digital signage']
    ]
  },
  7: { // Prototyping & PoC
    intro: 'High-impact proof-of-concept candidates already in the CoE sandbox:',
    phases: ['Design & Master Plan','Develop & Build','Operate & Govern','Experience & Virtualize'],
    useCases: [
      ['Design & Master Plan', 'AI Co-Creation', 'Option generation'],
      ['Design & Master Plan', 'AI Co-Creation', 'Design decision support'],
      ['Develop & Build', 'Worker Safety Intelligence', 'Hazard alerts'],
      ['Develop & Build', 'Quality & Fault Intelligence', 'Fault tracking'],
      ['Operate & Govern', 'AI-Driven Operations Optimization', 'Next-best-action support'],
      ['Operate & Govern', 'Public Safety & Resilience', 'Intelligent surveillance'],
      ['Experience & Virtualize', 'XR & Immersive Experiences', 'Augmented hosts & guides'],
      ['Experience & Virtualize', 'XR & Immersive Experiences', 'Immersive storytelling'],
      ['Experience & Virtualize', 'Smart Venue Experience', 'Dynamic live content']
    ]
  },
  8: { // PMO Setup
    intro: 'Where complex multi-vendor PMO work is anchored — drill in:',
    phases: ['Design & Master Plan','Develop & Build','Operate & Govern','Experience & Virtualize'],
    useCases: [
      ['Develop & Build', 'Vendor & Workflow Coordination', 'Partner coordination'],
      ['Develop & Build', 'Vendor & Workflow Coordination', 'Digital workflows'],
      ['Operate & Govern', 'Integrated Command & Control', 'Incident workflows']
    ]
  },
  9: { // Build / Develop / Integrate
    intro: 'Build & integration footprint per phase — explore the underlying use cases:',
    phases: ['Design & Master Plan','Develop & Build','Operate & Govern','Experience & Virtualize'],
    useCases: [
      ['Design & Master Plan', 'City Digital Twin', 'Master planning'],
      ['Develop & Build', 'BIM-to-Twin Delivery', 'As-built synchronization'],
      ['Develop & Build', 'Site Command & Monitoring', 'Site logistics'],
      ['Operate & Govern', 'Integrated Command & Control', 'Centralized monitoring'],
      ['Operate & Govern', 'Mobility Operations', 'Intelligent parking'],
      ['Operate & Govern', 'Mobility Operations', 'e-Toll'],
      ['Operate & Govern', 'Utilities & Asset Operations', 'EV charging operations'],
      ['Operate & Govern', 'Utilities & Asset Operations', 'Waste management'],
      ['Experience & Virtualize', 'Smart Venue Experience', 'Digital signage'],
      ['Experience & Virtualize', 'XR & Immersive Experiences', 'Virtual venue tours']
    ]
  },
  10: { // Test / Commission / Go-Live
    intro: 'Commissioning and go-live touchpoints across phases:',
    phases: ['Design & Master Plan','Develop & Build','Operate & Govern','Experience & Virtualize'],
    useCases: [
      ['Develop & Build', 'Quality & Fault Intelligence', 'Commissioning'],
      ['Develop & Build', 'BIM-to-Twin Delivery', 'Digital handover'],
      ['Operate & Govern', 'Integrated Command & Control', 'Alert orchestration'],
      ['Operate & Govern', 'Public Safety & Resilience', 'Emergency management']
    ]
  },
  11: { // Governance / Operating Model / Trust
    intro: 'Use cases that depend on strong governance and trust controls:',
    phases: ['Design & Master Plan','Develop & Build','Operate & Govern','Experience & Virtualize'],
    useCases: [
      ['Design & Master Plan', 'Planning Governance', 'Smart planning'],
      ['Design & Master Plan', 'Planning Governance', 'e-Permits'],
      ['Develop & Build', 'Vendor & Workflow Coordination', 'Stakeholder approvals'],
      ['Operate & Govern', 'Public Safety & Resilience', 'Disaster response'],
      ['Operate & Govern', 'Public Safety & Resilience', 'Intelligent surveillance']
    ]
  },
  12: { // Monitoring / Reporting / Value Realization
    intro: 'Value-realisation hot-spots — measure the difference, in context:',
    phases: ['Design & Master Plan','Develop & Build','Operate & Govern','Experience & Virtualize'],
    useCases: [
      ['Develop & Build', 'Site Command & Monitoring', 'Progress tracking'],
      ['Develop & Build', 'Quality & Fault Intelligence', 'Fault tracking'],
      ['Operate & Govern', 'AI-Driven Operations Optimization', 'AI reporting'],
      ['Operate & Govern', 'AI-Driven Operations Optimization', 'Anomaly detection'],
      ['Operate & Govern', 'Mobility Operations', 'Transit connectivity'],
      ['Experience & Virtualize', 'Experience Intelligence', 'Sentiment analysis'],
      ['Experience & Virtualize', 'Experience Intelligence', 'Journey optimization']
    ]
  },
  13: { // Run, Operate, Continuously Evolve
    intro: 'Capabilities we typically run as managed services — explore each:',
    phases: ['Design & Master Plan','Develop & Build','Operate & Govern','Experience & Virtualize'],
    useCases: [
      ['Operate & Govern', 'Integrated Command & Control', 'Centralized monitoring'],
      ['Operate & Govern', 'Integrated Command & Control', 'Incident workflows'],
      ['Operate & Govern', 'AI-Driven Operations Optimization', 'Next-best-action support'],
      ['Operate & Govern', 'Utilities & Asset Operations', 'Smart metering'],
      ['Operate & Govern', 'Utilities & Asset Operations', 'GIS & asset management'],
      ['Operate & Govern', 'Mobility Operations', 'Traffic management'],
      ['Operate & Govern', 'Public Safety & Resilience', 'Weather & environment intelligence'],
      ['Experience & Virtualize', 'Visitor Journey Platform', 'Personalized services'],
      ['Experience & Virtualize', 'Experience Intelligence', 'Post-visit learning'],
      ['Experience & Virtualize', 'Experience Intelligence', 'Sentiment analysis']
    ]
  }
};

function renderRelatedUseCases(stage){
  const data = STAGE_RELATED[stage.id];
  if(!data) return '';
  const usecases = (data.useCases || []).map(([phase, service, uc]) =>
    `<button class="ov-uc-pill" data-phase="${escHtml(phase)}" data-service="${escHtml(service)}" data-usecase="${escHtml(uc)}" style="--phaseColor:${PHASE_COLORS[phase]}">
       <span class="ov-uc-pill-phase">${escHtml(phase.split(' ')[0])}</span>
       <span class="ov-uc-pill-name">${escHtml(uc)}</span>
       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
     </button>`).join('');
  return `
    <div class="ov-related-block">
      <div class="ov-section-label">Related use cases, click to drill straight to City Phases</div>
      <p class="ov-related-intro">${escHtml(data.intro)}</p>
      <div class="ov-uc-grid">${usecases}</div>
    </div>`;
}

// =====================================================================
// HOME, STAGES RAIL
// =====================================================================
function renderHomeStagesRail(){
  const rail = document.getElementById('vcRail');
  if(!rail) return;
  rail.innerHTML = STAGES_DATA.map(s => `
    <button class="vc-stage" data-stage="${s.id}"
            style="--stageColor:${s.color}; --stageGlow:${s.color}55">
      <div class="vc-stage-num">${s.num}</div>
      <div class="vc-stage-icon">
        <svg viewBox="0 0 24 24"><path d="${s.icon}"/></svg>
      </div>
      <div class="vc-stage-name">${escHtml(s.name)}</div>
      <div class="vc-stage-cta">View stage →</div>
    </button>
  `).join('');
  rail.querySelectorAll('.vc-stage').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateTo({ view: 'offering-view', stage: parseInt(btn.dataset.stage, 10) });
    });
  });
}

// =====================================================================
// OFFERING VIEW, RENDER NAV PILLS
// =====================================================================
function renderOvNavrail(){
  const rail = document.getElementById('ovNavrail');
  if(!rail) return;
  // Keep "Overview" pill, append stage pills
  const overview = rail.querySelector('[data-stage="all"]');
  rail.innerHTML = '';
  rail.appendChild(overview);
  STAGES_DATA.forEach(s => {
    const pill = document.createElement('button');
    pill.className = 'ov-nav-pill';
    pill.dataset.stage = s.id;
    pill.innerHTML = `<span class="ov-pill-num">${s.num}</span>${escHtml(s.short)}`;
    pill.addEventListener('click', () => {
      scrollToStage(s.id);
      setActiveNavPill(s.id);
    });
    rail.appendChild(pill);
  });
  overview.addEventListener('click', () => {
    scrollToTop();
    setActiveNavPill('all');
  });
}
function setActiveNavPill(id){
  document.querySelectorAll('.ov-nav-pill').forEach(p => {
    p.classList.toggle('active', String(p.dataset.stage) === String(id));
  });
}

// =====================================================================
// OFFERING VIEW, RENDER SPINE (top visual flow)
// =====================================================================
function renderOvSpine(){
  const spine = document.getElementById('ovSpine');
  if(!spine) return;
  spine.innerHTML = STAGES_DATA.map(s => `
    <button class="ov-spine-card" data-stage="${s.id}"
            style="--stageColor:${s.color}; --stageGlow:${s.color}55">
      <div class="ov-spine-num">${s.num}</div>
      <div class="ov-spine-name">${escHtml(s.short)}</div>
    </button>
  `).join('');
  spine.querySelectorAll('.ov-spine-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.stage, 10);
      scrollToStage(id);
      setActiveNavPill(id);
      highlightSpineCard(id);
    });
  });
}
function highlightSpineCard(id){
  document.querySelectorAll('.ov-spine-card').forEach(c => {
    c.classList.toggle('active', String(c.dataset.stage) === String(id));
  });
}

// =====================================================================
// OFFERING VIEW, RENDER STAGE DETAIL PANELS  (show one at a time)
// =====================================================================
function renderOvDetailPanels(){
  const container = document.getElementById('ovDetailContainer');
  if(!container) return;

  // Empty state shown when no stage selected
  const emptyHtml = `
    <div class="ov-detail-empty" id="ovDetailEmpty">
      Tap any of the <strong>13 stage buttons</strong> above to see what's inside that stage —
      what we do, what's delivered, and which use cases and phases it connects to.
    </div>`;

  const panelsHtml = STAGES_DATA.map(s => `
    <div class="ov-stage-panel" id="ovStage-${s.id}" data-num="${s.num}"
         style="--stageColor:${s.color}; --stageGlow:${s.color}55">
      <div class="ov-stage-inner">

        <!-- HEAD -->
        <div class="ov-stage-head">
          <div class="ov-stage-icon">
            <svg viewBox="0 0 24 24"><path d="${s.icon}"/></svg>
          </div>
          <div class="ov-stage-head-text">
            <div class="ov-stage-eyebrow">Stage ${s.num}</div>
            <h2 class="ov-stage-title">${escHtml(s.name)}</h2>
            <p class="ov-stage-tagline">${escHtml(s.tagline)}</p>
          </div>
          <button class="ov-stage-toggle ov-stage-close" aria-label="Close stage detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- BODY -->
        <div class="ov-stage-body">
          <div class="ov-stage-main">
            <p class="ov-stage-pitch">${escHtml(s.pitch)}</p>

            <div class="ov-section-label">What we do</div>
            <ul class="ov-activities">
              ${s.activities.map(a => `<li>${escHtml(a)}</li>`).join('')}
            </ul>
          </div>

          <div class="ov-stage-aside">
            <div class="ov-aside-card">
              <div class="ov-aside-label">Deliverable</div>
              <div class="ov-aside-text">${inlineFmt(s.deliverable)}</div>
            </div>
          </div>
        </div>

        <!-- PHASE-SPECIFIC ACCELERATORS -->
        <div class="ov-phase-block">
          <div class="ov-section-label">Phase-specific offerings &amp; accelerators</div>
          <div class="ov-phase-grid">
            ${Object.keys(s.phaseAccelerators).map(phase => `
              <button class="ov-phase-card" data-phase="${escHtml(phase)}"
                      style="--phaseColor:${PHASE_COLORS[phase]}">
                <div class="ov-phase-card-name">${escHtml(phase)}</div>
                <div class="ov-phase-card-text">${inlineFmt(s.phaseAccelerators[phase])}</div>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- RELATED USE CASES (specific, deep-linked) -->
        ${renderRelatedUseCases(s)}

        <!-- CROSS-LINK FOOTER -->
        <div class="ov-stage-foot">
          <span class="ov-stage-foot-label">Explore related</span>
          <button class="ov-link-pill" data-jumpto="offering-map">City Phases</button>
          <button class="ov-link-pill" data-jumpto="journeys">Persona journeys</button>
          <button class="ov-link-pill" data-jumpto="demos">Demo library</button>
          <button class="ov-link-pill" data-jumpto="booking">Book a session</button>
        </div>

      </div>
    </div>
  `).join('');

  container.innerHTML = emptyHtml + panelsHtml;

  // Wire phase cards (cross-link to offering map at that phase)
  container.querySelectorAll('.ov-phase-card').forEach(card => {
    card.addEventListener('click', () => {
      navigateTo({ view: 'offering', phase: card.dataset.phase });
    });
  });

  // Wire use case pills (deep-link to specific use case in City Phases)
  container.querySelectorAll('.ov-uc-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      navigateTo({
        view: 'offering',
        phase: pill.dataset.phase,
        service: pill.dataset.service,
        useCase: pill.dataset.usecase
      });
    });
  });

  // Wire footer pills
  container.querySelectorAll('[data-jumpto]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.jumpto;
      const map = {
        'offering-map': { view: 'offering' },
        'journeys': { view: 'journeys' },
        'demos': { view: 'demos' },
        'booking': { view: 'booking' }
      };
      if(map[target]) navigateTo(map[target]);
    });
  });

  // Wire close buttons → return to empty state
  container.querySelectorAll('.ov-stage-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      hideAllStagePanels();
      setActiveNavPill('all');
      document.querySelectorAll('.ov-spine-card').forEach(c => c.classList.remove('active'));
    });
  });
}

// Show one stage detail panel; hide all others
function showStagePanel(id){
  const all = document.querySelectorAll('.ov-stage-panel');
  all.forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('ovStage-' + id);
  if(!panel) return;
  panel.classList.add('active');
  const empty = document.getElementById('ovDetailEmpty');
  if(empty) empty.style.display = 'none';
}

// Hide all stage panels (return to empty state)
function hideAllStagePanels(){
  document.querySelectorAll('.ov-stage-panel.active').forEach(p => p.classList.remove('active'));
  const empty = document.getElementById('ovDetailEmpty');
  if(empty) empty.style.display = '';
}

// Legacy aliases, keep call sites working
function expandStagePanel(id, scrollIntoView){
  showStagePanel(id);
  if(scrollIntoView){
    setTimeout(() => {
      const panel = document.getElementById('ovStage-' + id);
      if(!panel) return;
      const y = panel.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 80);
  }
}
function collapseAllStagePanels(){
  hideAllStagePanels();
}

// =====================================================================
// QUICK JUMP CHIPS (offering view hero, no longer rendered, stub kept)
// =====================================================================
function wireQuickJumpChips(){
  // Quick jump removed; function preserved as no-op for compatibility
}

// =====================================================================
// SCROLL HELPERS
// =====================================================================
function scrollToStage(id){
  // Show only this stage's detail card
  showStagePanel(id);
  // Scroll the detail container into view (so the user sees it appear below the buttons)
  setTimeout(() => {
    const container = document.getElementById('ovDetailContainer');
    if(!container) return;
    const y = container.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, 50);
  highlightSpineCard(id);
}
function scrollToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelectorAll('.ov-spine-card').forEach(c => c.classList.remove('active'));
  hideAllStagePanels();
}

// =====================================================================
// UNIVERSAL NAVIGATION FUNCTION
//   navigateTo({ view, stage, phase, service, useCase, domain })
// =====================================================================
window.navigateTo = function(opts){
  const o = opts || {};

  // 1. Switch view
  if(o.view){
    const navBtn = document.querySelector(`[data-view="${o.view}"]`);
    if(navBtn){
      navBtn.click();
    } else {
      // Direct view toggle (e.g. offering-view which has no nav-btn yet)
      document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === o.view));
      // Also update nav state
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === o.view));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // 2. Action within target view
  setTimeout(() => {
    if(o.view === 'offering-view' && o.stage){
      collapseAllStagePanels();
      expandStagePanel(o.stage, true);
      setActiveNavPill(o.stage);
      highlightSpineCard(o.stage);
    }
    else if(o.view === 'offering-view' && !o.stage){
      // Just landed on the view, ensure all collapsed for clean overview
      collapseAllStagePanels();
    }
    else if(o.view === 'offering' && (o.phase || o.service || o.useCase)){
      // Hand off to offering map's API (exposed below)
      if(window.offeringMapAPI){
        if(o.useCase && o.phase && o.service){
          window.offeringMapAPI.gotoUseCase(o.phase, o.service, o.useCase, o.domain);
        } else if(o.service && o.phase){
          window.offeringMapAPI.gotoService(o.phase, o.service);
        } else if(o.phase){
          window.offeringMapAPI.gotoPhase(o.phase);
        }
      }
    }
    else if(o.view === 'demos' && o.phase){
      // Demo library tabs are by phase index
      const tabs = ['Design & Master Plan', 'Develop & Build', 'Operate & Govern', 'Experience & Virtualize'];
      const idx = tabs.indexOf(o.phase);
      if(idx >= 0){
        const tab = document.querySelector(`[data-demo-phase="${idx}"]`);
        if(tab) tab.click();
      }
    }
  }, 150);
};

// =====================================================================
// SCROLL SPY, highlight current stage in nav rail
// =====================================================================
function initScrollSpy(){
  // No-op: with show-one-card pattern, scroll-spy is no longer needed.
  return;
}

// =====================================================================
// REGISTER OFFERING-VIEW IN VIEW SYSTEM
//   Nav button is now in the static HTML. We just ensure click-handling
//   integrates with showView (which already iterates .view by data-view id).
// =====================================================================
function registerOfferingViewInNav(){
  // The static button data-view="offering-view" is already wired by the
  // generic showView handler at the top of the script. Nothing more needed.
  return;
}

// =====================================================================
// INIT
// =====================================================================
function init(){
  renderHomeStagesRail();
  renderOvNavrail();
  renderOvSpine();
  renderOvDetailPanels();
  wireQuickJumpChips();
  initScrollSpy();
  registerOfferingViewInNav();
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();
