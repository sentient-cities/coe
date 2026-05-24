/* ===========================
   DATA
=========================== */
/* ============================================================
   PHASES DATA — Use cases are now rich objects:
   {
     name: string,
     def:  string (cross-domain definition),
     domains: { [domainName]: { example, benchmark } }
   }
============================================================ */
const phases = {
  "Design & Master Plan": {
    color: "#ec4dd6",
    journeys: ["Conceptualize", "Design", "Plan"],
    summary: "Imagine the city before it exists through digital twins, GIS, BIM, AI planning engines, XR and simulation.",
    domains: ["Construction","Government Services","Mobility","Utilities","Environment","Smart Venue","Hospitality"],
    services: [
      {name:"City Digital Twin", domain:"Cross-domain", useCases:[
        {name:"Concept modelling", def:"Build a high-fidelity 3D representation of a proposed district or asset, integrating GIS, BIM, environmental and demographic layers, so stakeholders can experience and validate the concept before commitments are made.", domains:{
          "Government Services":{example:"For a new administrative quarter, agencies model the masterplan in a shared digital twin to align service zoning, permitting flows and resident touchpoints before approving the brief.", benchmark:"Singapore's Virtual Singapore: a national 3D digital twin used by 40+ agencies for collaborative planning and concept validation."},
          "Construction":{example:"Developer assembles topography, utilities and BIM packages into a unified concept twin to test phasing, site logistics and constructability before tendering.", benchmark:"Sydney Metro: built a project-wide digital twin during concept stage to align design, construction and operations."},
          "Smart Venue":{example:"For a new arena, planners build a venue twin to test sightlines, crowd capacity, ingress/egress and emergency scenarios at concept stage.", benchmark:"SoFi Stadium and Allegiant Stadium used digital twins during concept design to model fan experience and operations."}
        }},
        {name:"Master planning", def:"Use simulation and AI-assisted optioneering across the digital twin to compare master-plan alternatives on cost, density, mobility, carbon and quality of life — turning master planning into an evidence-based decision process.", domains:{
          "Government Services":{example:"Planning authority compares 5 master-plan options against KPIs (carbon, jobs/m², transport demand, public-realm coverage) inside the twin and shortlists 2 for public consultation.", benchmark:"Helsinki's Kalasatama district uses a 3D city model for comparative master-plan testing and citizen input."},
          "Mobility":{example:"Master plan is iterated against transport-demand simulation to balance road capacity, transit hubs and active-mobility coverage before zoning is locked.", benchmark:"London's City Modeller: GLA-wide model used to test the impact of master-plan choices on transport networks."},
          "Environment":{example:"Master-plan options scored on tree canopy, urban-heat-island effect and stormwater performance in the twin to drive resilience-first planning.", benchmark:"Boston Climate Ready: master-planning informed by climate-resilience simulation across districts."}
        }},
        {name:"Scenario comparison", def:"Run side-by-side what-if scenarios on the same twin (population growth, climate stress, event surges, economic shocks) to understand long-term resilience of design choices.", domains:{
          "Environment":{example:"Compare 2030 / 2050 climate scenarios across master-plan options to quantify flood, heat and air-quality exposure for each.", benchmark:"Rotterdam climate adaptation twin tests sea-level and storm scenarios on planned infrastructure."},
          "Mobility":{example:"Compare mobility scenarios with and without a metro extension to quantify modal shift, congestion and emissions before sequencing investment.", benchmark:"Helsinki ITS scenario testbed compares mobility intervention scenarios across the city model."}
        }},
        {name:"3D urban context review", def:"Review proposed buildings and districts in their full 3D urban context — sightlines, shadow, skyline impact, heritage proximity — through XR-enabled walkthroughs.", domains:{
          "Government Services":{example:"Heritage authority reviews a proposed tower in immersive 3D to assess sightline impact on protected views before permit issuance.", benchmark:"London VU.CITY platform used by GLA boroughs to review planning applications in full 3D urban context."},
          "Construction":{example:"Developer presents the scheme to investors and the public in immersive context, with shadow and wind impact visualised.", benchmark:"Tokyo's Project PLATEAU: open 3D city model used for context review of major developments."}
        }}
      ]},
      {name:"AI Co-Creation", domain:"Construction / Government", useCases:[
        {name:"Collaborative design", def:"Multi-disciplinary teams (architects, engineers, planners, citizens) co-create design options in a shared XR/twin environment, with AI suggesting alternatives in real time.", domains:{
          "Construction":{example:"Design team uses generative AI inside the twin to iterate facade, massing and circulation in real time during a co-creation workshop with the client.", benchmark:"Foster + Partners and Zaha Hadid Architects use generative co-creation in early design phases."},
          "Government Services":{example:"Citizen co-creation sessions allow residents to reshape a public square inside an immersive twin and AI scores their proposals against safety, accessibility and use intensity.", benchmark:"Helsinki participatory budgeting platform pairs citizen co-design with a 3D city view."}
        }},
        {name:"Option generation", def:"Generative AI proposes hundreds of design options against a brief, ranked by performance, cost and carbon, dramatically expanding what is considered before a scheme is locked.", domains:{
          "Construction":{example:"For a residential block, generative tooling produces 250 layout options optimized for daylight, view and unit mix; designers down-select to 5.", benchmark:"Spacemaker (Autodesk Forma) generative urban design — used by major developers in Oslo, London and Stockholm."},
          "Government Services":{example:"Authority generates 50 zoning options against population, school catchment and transit constraints to inform the statutory plan.", benchmark:"Sidewalk Labs Replica generative planning tooling used by US transportation authorities."}
        }},
        {name:"Design decision support", def:"AI surfaces the trade-offs behind every design choice (cost, carbon, daylight, comfort, programme) so decisions are explainable and defensible.", domains:{
          "Construction":{example:"At every gate, the AI summarises which design choices drove cost and carbon outcomes, supporting client sign-off.", benchmark:"Bentley iTwin Insights: AI-driven trade-off explainer used on major civil projects."}
        }}
      ]},
      {name:"Crowd & Traffic Simulation", domain:"Mobility / Hospitality", useCases:[
        {name:"Pedestrian flow testing", def:"Agent-based simulation of pedestrian flows through proposed venues, transit hubs or events to identify bottlenecks, dwell hotspots and safety risks before construction.", domains:{
          "Smart Venue":{example:"Stadium operator simulates 60,000-fan ingress and egress against multiple gate-opening strategies and selects the layout that meets a 25-minute clearance KPI.", benchmark:"Tokyo 2020 Olympics: pedestrian simulation used to plan and validate venue ingress/egress."},
          "Hospitality":{example:"Hospitality complex models pilgrim or visitor flow through prayer halls, bridges and food courts to size circulation and emergency capacity.", benchmark:"Masjid al-Haram crowd simulation programmes published by ETH Zurich and KAUST researchers."},
          "Mobility":{example:"Transit interchange simulates peak-hour passenger flows across mezzanines and platforms to validate the design.", benchmark:"Crossrail (Elizabeth line) used pedestrian simulation across all interchange stations."}
        }},
        {name:"Event readiness", def:"Simulate a real event (game, ceremony, religious gathering) on the twin to stress-test plans, identify reinforcement needs and pre-position resources.", domains:{
          "Smart Venue":{example:"Operator simulates a sell-out concert with weather and security incidents to pre-position medics, security and transit capacity.", benchmark:"Expo 2020 Dubai used digital-twin simulation for daily operations and contingency rehearsal."},
          "Hospitality":{example:"Hajj operations simulate the full pilgrimage journey to validate marshal placement, transport schedules and emergency response.", benchmark:"Hajj Technology programme uses simulation to plan operational readiness each year."}
        }},
        {name:"Transport forecasting", def:"Forecast trip generation, modal split and network load for a new development against population and land-use scenarios.", domains:{
          "Mobility":{example:"For a new mega-development, forecast vehicle, transit and active-mobility demand and feed it into road and metro design.", benchmark:"NEOM mobility programme uses transport forecasting against multiple population scenarios."}
        }}
      ]},
      {name:"Environmental Simulation", domain:"Environment / Utilities", useCases:[
        {name:"Weather & climate simulation", def:"Run climate scenarios (heat, storm, flood, dust) over the twin to design infrastructure that performs under realistic conditions.", domains:{
          "Environment":{example:"Coastal district stress-tested against 2050 sea-level rise and a 1-in-100 storm to design protection works and elevations.", benchmark:"NYC Climate Resilience Design Guidelines built on city-scale climate simulation."},
          "Utilities":{example:"Power grid simulated under prolonged heatwave to validate cooling, transformer ratings and demand-response design.", benchmark:"ENWL UK utility uses climate-stressed simulations for grid investment planning."}
        }},
        {name:"Sunlight & shadow simulation", def:"Visualise solar access, shadowing and glare across a development through the year to balance daylight, energy and comfort.", domains:{
          "Construction":{example:"Tower scheme tested for overshadowing on neighbouring public realm and adjusted to retain mandated daylight hours.", benchmark:"Sun-on-ground analyses are statutory in many cities (e.g. London, Amsterdam) using digital city models."},
          "Smart Venue":{example:"Open-air venue analysed for sun exposure across event slots to plan shading and seating layout.", benchmark:"Etihad Stadium Manchester used solar analysis to plan pitch and stand orientation."}
        }},
        {name:"Noise & heat impact analysis", def:"Model traffic noise, mechanical noise and urban heat island effects to inform mitigation in design.", domains:{
          "Environment":{example:"Mixed-use scheme tested for nighttime noise from elevated road and adjusted with bunds and facade treatment.", benchmark:"Singapore SLA noise mapping integrated with masterplan simulation tools."},
          "Mobility":{example:"Highway alignment options scored on community noise impact in the twin before route selection.", benchmark:"Sound Transit (Seattle) uses corridor noise modelling in alignment selection."}
        }}
      ]},
      {name:"Planning Governance", domain:"Government Services", useCases:[
        {name:"Smart planning", def:"Move from PDF master plans to a live data-driven planning system, where every plan is queryable, versioned and connected to the twin.", domains:{
          "Government Services":{example:"Planning authority replaces statutory PDF documents with an API-first plan that updates automatically as zoning changes are approved.", benchmark:"NSW Planning Portal in Australia: digital-by-default statutory planning platform."}
        }},
        {name:"e-Permits", def:"Automate permit screening using BIM/twin data so applications are checked against rules before reaching a human reviewer.", domains:{
          "Government Services":{example:"Building permit app receives BIM file, checks setbacks, FAR, parking and accessibility automatically; only edge cases reach the planner.", benchmark:"Singapore CORENET-X: automated regulatory checking on BIM submissions."},
          "Construction":{example:"Contractor uploads BIM, gets an instant compliance report and corrective actions before formal submission.", benchmark:"Norway's ByggLett (DiBK) automated building permit pilot."}
        }},
        {name:"Stakeholder management", def:"Single source of truth for engagement: comments, sentiment, decisions and rationale captured against the twin and the plan.", domains:{
          "Government Services":{example:"Authority maps every public comment to the geometry it concerns; AI clusters concerns and tracks how each was addressed in the response report.", benchmark:"UK Planning Inspectorate's digital examination platform tracks stakeholder issues to outcome."}
        }}
      ]}
    ]
  },

  "Develop & Build": {
    color: "#9d6cff",
    journeys: ["Construct"],
    summary: "Turn intent into intelligent assets using BIM-to-Twin, IoT, edge, computer vision, wearables, robotics and construction tech.",
    domains: ["Construction","Public Safety","Government Services","Smart Venue","Utilities","Mobility"],
    services: [
      {name:"BIM-to-Twin Delivery", domain:"Construction", useCases:[
        {name:"Digital handover", def:"Deliver an as-built digital twin (geometry + asset metadata + commissioning records) to operations on day-one, eliminating the historic gap between design and operate.", domains:{
          "Construction":{example:"Contractor hands over a structured twin with every asset tagged (location, model, warranty, manuals) — operations team starts with full visibility from day one.", benchmark:"Heathrow T2 and Sydney Metro both delivered structured digital handovers as a contractual requirement."},
          "Smart Venue":{example:"New arena handed over with a twin already populated with asset and warranty data, integrated with the BMS and CAFM.", benchmark:"Tottenham Hotspur Stadium handover included an operational digital twin."},
          "Government Services":{example:"Public hospital opens with a fully populated asset twin synchronized to the FM system, reducing time-to-operate by months.", benchmark:"NHS digital handover programme pilots in UK Trusts."}
        }},
        {name:"Asset metadata readiness", def:"Standardise and enrich asset metadata during construction so that operations, maintenance and warranty workflows can run on day-one.", domains:{
          "Construction":{example:"COBie / IFC data structured per asset class with mandatory completeness gates at each stage payment.", benchmark:"COBie UK / Crossrail handover specification — now widely adopted."},
          "Utilities":{example:"Network assets handed over with full nameplate data, connection topology and maintenance regimes pre-loaded.", benchmark:"Anglian Water (UK) digital twin handover programme."}
        }},
        {name:"As-built synchronization", def:"Continuously align the design model with what is actually built on site using laser scans, drones and computer vision — closing variance early.", domains:{
          "Construction":{example:"Weekly drone flights generate point clouds compared against the design model; deviations >25mm flagged for review.", benchmark:"Skanska / Bechtel routinely use drone + ML scan-vs-BIM comparison on major civil projects."}
        }}
      ]},
      {name:"Site Command & Monitoring", domain:"Construction", useCases:[
        {name:"Progress tracking", def:"Track real construction progress against schedule using site sensors, video analytics and drone imagery — replace subjective reporting with objective data.", domains:{
          "Construction":{example:"Programme dashboard shows actual vs planned progress per zone, derived from drone imagery and computer vision on site cameras.", benchmark:"Bechtel and Lendlease deploy AI-driven progress tracking on mega-projects."}
        }},
        {name:"Site logistics", def:"Optimize the flow of people, plant, materials and deliveries across a constrained urban site to compress duration and reduce congestion impact.", domains:{
          "Construction":{example:"Tower-crane scheduling, gate booking and concrete-pour sequencing all coordinated through one logistics command view.", benchmark:"London Olympics 2012 and Crossrail used integrated site logistics command rooms."},
          "Mobility":{example:"Construction logistics integrated with city traffic control to schedule heavy deliveries against road congestion windows.", benchmark:"Stockholm bypass project coordinated construction haulage with city traffic management."}
        }},
        {name:"Issue escalation", def:"Detect, route and resolve issues (RFIs, defects, NCRs) automatically through workflow tooling tied to the twin geometry.", domains:{
          "Construction":{example:"Defect raised on a tablet is auto-located on the twin, routed to the responsible subcontractor and tracked to closure.", benchmark:"Procore / PlanGrid workflows in widespread use across global tier-1 contractors."}
        }}
      ]},
      {name:"Worker Safety Intelligence", domain:"Construction / Public Safety", useCases:[
        {name:"Fatigue & wellbeing detection", def:"Use wearables and computer vision to detect fatigue, heat stress and biomechanical risk in real time, intervening before accidents occur.", domains:{
          "Construction":{example:"Worker wearables track heart rate and core temp; supervisors receive an alert when a worker exceeds heat-stress thresholds and is rotated out.", benchmark:"Saudi Aramco and Bechtel deploy heat-stress wearables across Middle East megaprojects."},
          "Public Safety":{example:"Lone-worker monitoring across remote sites; man-down detection routes alerts to nearest responder.", benchmark:"BP and Shell deploy lone-worker safety wearables across upstream operations."}
        }},
        {name:"PPE compliance", def:"Computer vision on site cameras automatically flags missing or incorrect PPE in real time and alerts supervisors.", domains:{
          "Construction":{example:"Site CCTV detects missing hard hats and high-vis at zone entries and alerts supervisors with snapshot evidence.", benchmark:"Smartvid.io / Newmetrix deployed widely with US/UK contractors."}
        }},
        {name:"Hazard alerts", def:"Predict and alert on emerging hazards: trench collapse, suspended loads, exclusion zone breaches, struck-by risk.", domains:{
          "Construction":{example:"Real-time geofencing detects when a worker enters a swing radius and pauses crane operation.", benchmark:"Triax Spot-r and Eyrus deployed on US and Middle East megaprojects."},
          "Public Safety":{example:"Hazard alerting integrated with city emergency dispatch for incidents that escape the site boundary.", benchmark:"NYC DOB construction-safety integration with FDNY dispatch."}
        }}
      ]},
      {name:"Quality & Fault Intelligence", domain:"Construction / Smart Venue", useCases:[
        {name:"Fault tracking", def:"Capture, classify and resolve quality defects through the twin geometry, with AI clustering recurring root causes for continuous improvement.", domains:{
          "Construction":{example:"Inspector logs defect on tablet — AI groups it with similar defects across the project to surface a likely subcontractor or material root cause.", benchmark:"Lendlease's Podium programme: AI-clustered defect intelligence across global projects."},
          "Smart Venue":{example:"Pre-opening commissioning defects clustered to identify systemic MEP issues before handover.", benchmark:"Wembley Stadium commissioning programme used defect clustering to prioritize fixes."}
        }},
        {name:"Commissioning", def:"Drive systematic commissioning of MEP, life-safety and operational systems against the twin so handover is verifiable, not paper-based.", domains:{
          "Construction":{example:"Commissioning manager runs scripted tests against the twin; results auto-attached to assets and visible to operations.", benchmark:"BSRIA Soft Landings approach combined with digital commissioning records."},
          "Smart Venue":{example:"Stadium MEP commissioned through scripted scenarios (full-house cooling, evacuation lighting) before opening.", benchmark:"Allegiant Stadium opening commissioning used digital records linked to the twin."}
        }},
        {name:"Digital snagging", def:"Replace paper snagging with mobile, geo-located, AI-assisted snagging that closes faster and traces patterns.", domains:{
          "Construction":{example:"Snagging walk produces a tablet-recorded list with photos pinned in 3D; closure tracked automatically.", benchmark:"Snagr / FieldWire / Procore widely deployed."}
        }}
      ]},
      {name:"Vendor & Workflow Coordination", domain:"Government / Construction", useCases:[
        {name:"Stakeholder approvals", def:"Digitise approvals across owner, contractor, authorities and partners through workflow that ties decisions to evidence in the twin.", domains:{
          "Government Services":{example:"Authority approves a stage gate with digital evidence pulled directly from the project twin and signed in-system.", benchmark:"UK Infrastructure and Projects Authority digital assurance programme."},
          "Construction":{example:"Owner approves a variation with full cost, schedule and 3D evidence in one workflow.", benchmark:"Aconex / Oracle Smart Construction Platform used by mega-project owners."}
        }},
        {name:"Digital workflows", def:"Standardise the construction workflow stack (RFIs, submittals, change orders, payment applications) on a single digital backbone.", domains:{
          "Construction":{example:"Single workflow platform with full audit trail across all subcontractor packages.", benchmark:"Procore, Aconex, ALICE Technologies — widely adopted."}
        }},
        {name:"Partner coordination", def:"Coordinate complex partner / JV / supplier ecosystems with shared visibility into commitments, deliveries and risks.", domains:{
          "Construction":{example:"JV partners share a real-time risk register and forward look on resource and supply commitments.", benchmark:"HS2 supply chain coordination platform connects 1000+ tier-2/3 partners."}
        }}
      ]}
    ]
  },

  "Operate & Govern": {
    color: "#34d8ff",
    journeys: ["Run", "Monitor"],
    summary: "Run the city as a continuously learning system through IoT, AI/ML, command centers, video analytics, automation and cloud.",
    domains: ["Utilities","Mobility","Public Safety","Government Services","Environment","Smart Venue","Healthcare","Hospitality"],
    services: [
      {name:"Integrated Command & Control", domain:"Cross-domain", useCases:[
        {name:"Centralized monitoring", def:"Single operating picture across utilities, mobility, public safety, environment and venues — every domain visible in one place, every metric trustworthy.", domains:{
          "Government Services":{example:"City Operations Center monitors 250+ KPIs across 8 agencies on one wall, with drill-down per domain.", benchmark:"Rio de Janeiro Operations Center: 30+ agencies integrated, including IBM partnership."},
          "Public Safety":{example:"Police, fire, EMS and city ops share one common operating picture during major incidents.", benchmark:"Singapore Safe City Test Bed and SCDF integrated command center."},
          "Smart Venue":{example:"Venue operations center aggregates security, BMS, ticketing and crowd analytics for live decisions.", benchmark:"Mercedes-Benz Stadium Atlanta integrated venue operations center."}
        }},
        {name:"Alert orchestration", def:"AI-prioritised, cross-domain alerting with automatic suppression of duplicates and routing to the right responder.", domains:{
          "Public Safety":{example:"Multiple sensor alerts (CCTV + 911 calls + social media) fused into a single ranked incident, dispatched once.", benchmark:"Hexagon HxGN OnCall deployed in Atlanta, Madrid, and Middle Eastern cities."},
          "Utilities":{example:"Grid + water + telecom alerts cross-correlated to detect a common root cause (e.g. a single substation failure).", benchmark:"E.ON and Iberdrola control center alert correlation programmes."}
        }},
        {name:"Incident workflows", def:"Codified, runbook-driven incident response with automation, audit trail and post-incident learning loop.", domains:{
          "Public Safety":{example:"Major-incident workflow auto-creates a tactical group, dispatches resources, opens a comms channel and starts a recording for after-action review.", benchmark:"NYPD Domain Awareness System: codified workflows across major events."},
          "Government Services":{example:"Cross-agency response runbooks for weather, health and security incidents executed inside the platform.", benchmark:"London Resilience Forum runs digital playbooks during major incidents."}
        }}
      ]},
      {name:"AI-Driven Operations Optimization", domain:"Cross-domain", useCases:[
        {name:"Anomaly detection", def:"Detect leading indicators of failure before they become outages — across infrastructure, traffic, environment and assets.", domains:{
          "Utilities":{example:"AI flags subtle deviations on transformer signatures and predicts failure 30 days ahead, allowing planned replacement.", benchmark:"Enel and National Grid AI-based predictive maintenance programmes."},
          "Mobility":{example:"AI detects unusual journey patterns indicating signal failure or incident before it reaches operator dashboards.", benchmark:"TfL InfoLab anomaly detection on Tube and surface networks."},
          "Smart Venue":{example:"BMS anomalies identified hours before tenant comfort is impacted.", benchmark:"JLL Atrius and JCI OpenBlue building anomaly detection deployed at scale."}
        }},
        {name:"AI reporting", def:"Replace manual report assembly with AI-generated executive narratives backed by live data from the platform.", domains:{
          "Government Services":{example:"Mayor's daily briefing auto-generated from the operations platform with explainable charts and trend commentary.", benchmark:"Buenos Aires BA Data programme generates daily executive reports."}
        }},
        {name:"Next-best-action support", def:"Operator copilot recommending the best action on each incident, ranked by predicted outcome and supported by historical evidence.", domains:{
          "Public Safety":{example:"Dispatcher copilot suggests the optimal unit assignment based on travel time, prior incident type and unit capability.", benchmark:"Motorola CommandCentral Aware deployed in major US cities."},
          "Mobility":{example:"Traffic operator copilot recommends signal-plan changes during incidents based on simulation outcomes.", benchmark:"Yunex Traffic and Kapsch TrafficCom deploy AI advisory tools globally."}
        }}
      ]},
      {name:"Utilities & Asset Operations", domain:"Utilities", useCases:[
        {name:"Smart metering", def:"AMI/AMR-driven visibility into consumption, network state and customer behaviour at scale, feeding billing, demand response and loss management.", domains:{
          "Utilities":{example:"3M smart meters streaming 15-min data feed grid optimization, NRW reduction and customer engagement programmes.", benchmark:"Italy: Enel deployed 32M smart meters; UK: 27M+ smart meters rollout."}
        }},
        {name:"EV charging operations", def:"Operate a connected EV charging network with real-time availability, dynamic pricing, grid integration and customer experience services.", domains:{
          "Utilities":{example:"Operator manages 5000+ chargers across the kingdom with real-time uptime, payment and grid balancing through one platform.", benchmark:"Electrify America and Ionity operate cross-network EV operations platforms."},
          "Mobility":{example:"EV charger network integrated with city mobility apps for routing-aware reservations.", benchmark:"Oslo's mobility app integrates EV charging into trip planning."}
        }},
        {name:"GIS & asset management", def:"Spatially-aware asset register tied to maintenance, condition, criticality and risk — moving from time-based to data-driven maintenance.", domains:{
          "Utilities":{example:"Water network condition scored per asset with risk-based renewal plan replacing fixed-cycle replacement.", benchmark:"Thames Water and Veolia data-driven asset management programmes."},
          "Smart Venue":{example:"Venue asset register tied to live BMS data feeds the maintenance plan and capital programme.", benchmark:"O2 Arena London integrated asset management."}
        }},
        {name:"Waste management", def:"Sensor-driven waste collection, route optimisation and recycling intelligence to lower cost and emissions.", domains:{
          "Utilities":{example:"Bin-fill sensors trigger dynamic collection routes; AI optimises crew deployment.", benchmark:"Barcelona's smart waste programme cut collection trips by 20%."},
          "Environment":{example:"Recycling stream analytics improve material recovery and reduce contamination.", benchmark:"Rotterdam recycling intelligence programme."}
        }}
      ]},
      {name:"Mobility Operations", domain:"Mobility", useCases:[
        {name:"Traffic management", def:"Real-time, AI-assisted traffic operations across signals, corridors and incidents — reducing delay, emissions and crash risk.", domains:{
          "Mobility":{example:"AI signal optimisation across the city corridor cut travel time by 18% and emissions by 12%.", benchmark:"Pittsburgh Surtrac AI signal control: documented major delay reductions."},
          "Public Safety":{example:"Traffic ops integrated with first-responder routing for emergency-vehicle priority on red lights.", benchmark:"Opticom and GTT preemption deployed in 4500+ US cities."}
        }},
        {name:"Intelligent parking", def:"Sensor + camera + payment integration delivers occupancy intelligence, dynamic pricing and frictionless payment.", domains:{
          "Mobility":{example:"City rolls out 25,000 sensorized bays with app-based wayfinding; revenue up, search-traffic down.", benchmark:"San Francisco SFpark dynamic pricing programme."},
          "Smart Venue":{example:"Stadium parking integrated with ticketing for automatic gate entry on game day.", benchmark:"NFL stadiums increasingly integrate parking with ticketing apps."}
        }},
        {name:"e-Toll", def:"All-electronic, free-flow tolling with multi-modal account, ANPR and frictionless customer experience.", domains:{
          "Mobility":{example:"Highway operator transitions to free-flow tolling with single-account multi-modal payment.", benchmark:"Singapore ERP and Australia's Linkt: nationwide free-flow tolling."}
        }},
        {name:"Transit connectivity", def:"Connect bus, metro, rail, micromobility and ride-hail through MaaS — one journey, one ticket, one experience.", domains:{
          "Mobility":{example:"City launches MaaS app combining metro + bus + bike + ride-hail in a single journey planner and account.", benchmark:"Helsinki Whim was the world's first integrated MaaS deployment; Berlin Jelbi at major scale."}
        }}
      ]},
      {name:"Public Safety & Resilience", domain:"Public Safety / Environment", useCases:[
        {name:"Intelligent surveillance", def:"AI on video and audio detects events of interest (intrusion, fall, abandoned object, fight, gunshot) and feeds them into incident workflows.", domains:{
          "Public Safety":{example:"AI surveillance flags abandoned objects and unauthorized entries automatically, raising priority alerts in the SOC.", benchmark:"BriefCam, Avigilon (Motorola), Genetec deployed in major cities and venues."},
          "Smart Venue":{example:"Stadium AI surveillance detects fights, falls and unauthorized field entries during events.", benchmark:"Mercedes-Benz Stadium Atlanta deploys AI video surveillance during NFL events."}
        }},
        {name:"Emergency management", def:"Operate end-to-end EM lifecycle: prepare, detect, respond, recover — in one platform tied to the twin.", domains:{
          "Public Safety":{example:"Wildfire response: detection, evacuation routing, resource deployment and recovery tracked on one platform.", benchmark:"Australia and California wildfire EM platforms."},
          "Government Services":{example:"Multi-agency emergency response coordinated across municipal, regional and national tiers.", benchmark:"FEMA WebEOC and EU Emergency Response Coordination Centre."}
        }},
        {name:"Weather & environment intelligence", def:"Hyper-local environmental intelligence (air, weather, noise, water) integrated into operations.", domains:{
          "Environment":{example:"500+ sensors stream PM2.5, NO2 and noise to a public dashboard and trigger ops responses (street washing, traffic limits).", benchmark:"London Breathe data programme; Barcelona environment dashboard."},
          "Mobility":{example:"Weather feeds drive proactive road closure and salt deployment.", benchmark:"Finnish Transport Agency winter operations platform."}
        }},
        {name:"Disaster response", def:"Plan, rehearse and execute large-scale disaster response with simulation, mobilisation and recovery on one platform.", domains:{
          "Public Safety":{example:"Earthquake response platform pre-positions resources by scenario and tracks recovery KPIs in real time.", benchmark:"Japan's J-ALERT and Tohoku response platforms."},
          "Healthcare":{example:"Hospital surge response coordinated with EMS dispatch and bed availability across the region.", benchmark:"NHS England surge management during COVID-19."}
        }}
      ]}
    ]
  },

  "Experience & Virtualize": {
    color: "#4c92ff",
    journeys: ["Pre-arrival","Arrival","Experience","Post-departure"],
    summary: "Extend the city beyond the physical through XR, VR, metaverse platforms, AI personalization and digital experience platforms.",
    domains: ["Hospitality","Mobility","Media","Smart Venue","Government Services","Healthcare"],
    services: [
      {name:"Visitor Journey Platform", domain:"Hospitality / Government", useCases:[
        {name:"Pre-arrival engagement", def:"Engage visitors before they travel: itinerary planning, digital pass, expectations, language and accessibility setup — turning the journey into one continuous experience.", domains:{
          "Hospitality":{example:"Pilgrim downloads a single super-app, registers, gets a digital pass and a planned route, and arrives ready.", benchmark:"Saudi Nusuk app for pilgrims and visitors integrates pre-arrival, arrival and stay."},
          "Government Services":{example:"E-visa applicants receive integrated arrival expectations, transport options and venue access.", benchmark:"Singapore SG Arrival Card and the Visit Singapore platform."},
          "Smart Venue":{example:"Pre-event digital concierge for VIPs through ticketing and venue super-app.", benchmark:"Formula 1 Paddock Club app delivers pre-event personalisation."}
        }},
        {name:"Personalized services", def:"Personalize content, navigation, hospitality and offers in real time using consented profile data and live behaviour signals.", domains:{
          "Hospitality":{example:"Hotel guest gets room temperature, language, content and offers personalized on arrival.", benchmark:"Marriott Bonvoy personalisation programme."},
          "Smart Venue":{example:"Stadium app surfaces nearest concessions with real wait times and personalised offers.", benchmark:"SoFi Stadium and Levi's Stadium personalised fan apps."},
          "Media":{example:"Out-of-home content adapted to audience composition (sentiment-respecting, anonymized).", benchmark:"Piccadilly Lights and Times Square contextual content platforms."}
        }},
        {name:"Feedback loops", def:"Capture experience data continuously and feed it back into operations to improve in cycles, not surveys.", domains:{
          "Hospitality":{example:"NPS captured per touchpoint feeds same-day ops adjustments at the property.", benchmark:"Marriott Voice of the Customer programme."},
          "Government Services":{example:"Citizen experience tracked across services and fed back into service redesign.", benchmark:"UK Government GOV.UK feedback-driven service redesign."}
        }}
      ]},
      {name:"Wayfinding & Arrival Orchestration", domain:"Mobility / Hospitality", useCases:[
        {name:"Smart airport", def:"Connected airport experience: pre-arrival, biometric entry, gate prediction, baggage tracking — air-side and city-side stitched together.", domains:{
          "Hospitality":{example:"Visitor uses a biometric token from check-in to boarding to hotel room — no document handoff needed.", benchmark:"Singapore Changi Airport biometric programme; Star Alliance biometrics."},
          "Mobility":{example:"Airport-to-city transfer integrated with arrival predictions and dynamic transit pricing.", benchmark:"London Heathrow Express integrated arrival programme."}
        }},
        {name:"Connected entry", def:"Frictionless entry to venues, districts and assets via biometrics, digital wallets, license plate and Bluetooth — no queue, no paper.", domains:{
          "Smart Venue":{example:"Stadium entry by face or pass — 95% reduction in queue time at peak.", benchmark:"Mercedes-Benz Stadium ATL: face-entry deployment for premium areas."},
          "Hospitality":{example:"Hotel keyless entry via mobile wallet across portfolio.", benchmark:"Hilton Digital Key in 6500+ hotels."},
          "Government Services":{example:"Government building access via national digital ID + biometric verification.", benchmark:"Estonia e-Residency and digital ID infrastructure."}
        }},
        {name:"Accessible routing", def:"Accessibility-first wayfinding for visitors with visual, mobility, cognitive or sensory needs.", domains:{
          "Hospitality":{example:"Step-free, sensory-aware route planning across the venue published in the super-app.", benchmark:"NaviLens at Madrid airport, NYC subway and major cultural venues."},
          "Smart Venue":{example:"Sensory-friendly route and timing options for neurodivergent visitors.", benchmark:"Mercedes-Benz Stadium sensory rooms and accessible routing."}
        }}
      ]},
      {name:"Smart Venue Experience", domain:"Smart Venue / Media", useCases:[
        {name:"Crowd management", def:"Live, AI-assisted crowd intelligence to keep venues safe, comfortable and on time — from the back-of-house to the perimeter.", domains:{
          "Smart Venue":{example:"Venue ops sees density, flow and dwell across zones in real time; pre-positions stewards on emerging hotspots.", benchmark:"Wembley Stadium and Tottenham Hotspur use crowd intelligence platforms."},
          "Hospitality":{example:"Event organiser balances visitor distribution across attractions through real-time nudges.", benchmark:"Expo 2020 Dubai dynamic visitor distribution programme."},
          "Public Safety":{example:"Major-event crowd safety integrated with city public-safety command.", benchmark:"London Notting Hill Carnival integrated crowd safety platform."}
        }},
        {name:"Digital signage", def:"Networked signage that adapts content and language to context, audience and operational state.", domains:{
          "Media":{example:"Signage network adapts content per dwell, demographic and time of day across the venue.", benchmark:"Piccadilly Lights London adaptive content network."},
          "Smart Venue":{example:"Wayfinding signage updates to reroute crowds during incidents.", benchmark:"Heathrow Terminal 5 dynamic wayfinding."}
        }},
        {name:"Dynamic live content", def:"Synchronise lighting, sound, signage and video with the experience moment — turning the venue itself into a performance medium.", domains:{
          "Smart Venue":{example:"Pre-game show choreographs lighting, displays and sound across the venue triggered by run-of-show.", benchmark:"SoFi Stadium ribbon and oculus content programmes."},
          "Media":{example:"District-scale moments synchronised across signage, lighting and audio.", benchmark:"Riyadh Boulevard and Vegas Sphere live content programmes."}
        }}
      ]},
      {name:"XR & Immersive Experiences", domain:"Media / Tourism", useCases:[
        {name:"Virtual venue tours", def:"Photoreal, interactive virtual tours that drive pre-visit engagement, accessibility and remote attendance.", domains:{
          "Hospitality":{example:"Hotel chains offer photoreal virtual room tours pre-booking.", benchmark:"Marriott VR and Hilton 3D room tours."},
          "Smart Venue":{example:"Stadiums offer virtual seat-view selection during ticket purchase.", benchmark:"Manchester United and SoFi Stadium virtual seat selection."},
          "Media":{example:"Major museums offer interactive virtual exhibitions to global audiences.", benchmark:"Louvre Online Tours and British Museum virtual exhibitions."}
        }},
        {name:"Augmented hosts & guides", def:"AR overlays, holographic hosts and digital concierges guide visitors through space and content in real time.", domains:{
          "Hospitality":{example:"Hotel lobby holographic concierge in 5 languages handles wayfinding, reservations and FAQs.", benchmark:"ARHT Media holographic concierges in major hotel and airport pilots."},
          "Media":{example:"Museum AR layer narrates exhibits in the visitor's language and pace.", benchmark:"Smithsonian AR app and Louvre Nintendo guide."}
        }},
        {name:"Immersive storytelling", def:"Narrative experiences that fuse physical space, projection, sound and AR/VR to create unforgettable moments.", domains:{
          "Media":{example:"Cultural district hosts a citywide immersive light-and-projection event.", benchmark:"Vivid Sydney, Nuit Blanche, Lyon Festival of Lights."},
          "Hospitality":{example:"Resort offers an immersive dining experience using projection and surround audio.", benchmark:"Le Petit Chef immersive dining and ABBA Voyage."}
        }}
      ]},
      {name:"Experience Intelligence", domain:"Cross-domain", useCases:[
        {name:"Sentiment analysis", def:"Aggregate sentiment from app, social, review and on-site feedback signals to give operations and leadership a continuous read on experience.", domains:{
          "Hospitality":{example:"Resort tracks live NPS and social sentiment per touchpoint and intervenes the same day.", benchmark:"Medallia and Qualtrics XM deployed across major hospitality groups."},
          "Government Services":{example:"City service sentiment tracked and tied to specific service journeys.", benchmark:"NYC 311 and Boston Citizens Connect sentiment programmes."}
        }},
        {name:"Journey optimization", def:"Continuously analyse end-to-end visitor journeys and identify the highest-value improvement points.", domains:{
          "Hospitality":{example:"Visitor journey re-sequenced to avoid mid-day heat exposure based on attendance and weather data.", benchmark:"Disney Genie+ and Universal virtual queues."},
          "Smart Venue":{example:"Stadium ops re-sequences services based on observed fan journeys per game type.", benchmark:"NFL CLUB programme: data-driven fan journey design."}
        }},
        {name:"Post-visit learning", def:"Capture and learn from departure: what worked, what didn't, and what the next visit should look like.", domains:{
          "Hospitality":{example:"Post-visit survey insights merged with behavioural data to design the next visit.", benchmark:"Marriott Bonvoy post-stay analytics."},
          "Media":{example:"Post-event analytics across social, OOH and on-site signals inform next event programming.", benchmark:"Live Nation and AEG event-analytics programmes."}
        }}
      ]}
    ]
  }
};

const personas = [
  {name:"City Planner", phase:"Design & Master Plan", mission:"Shape long-term urban development through evidence-based modelling.", focus:["City Digital Twin","Crowd Simulation","Weather Simulation","AI Co-Creation","Sunlight Simulation"]},
  {name:"City Designer", phase:"Design & Master Plan", mission:"Transform urban vision into sustainable, human-centered designs.", focus:["Urban Planning","Energy optimization","Citizen feedback","Simulation"]},
  {name:"City Builder", phase:"Develop & Build", mission:"Construct next-generation infrastructure that connects physical assets with digital intelligence.", focus:["Stakeholder management","Construction monitoring","Approvals","System integration"]},
  {name:"City Operator", phase:"Operate & Govern", mission:"Optimize city services through real-time insight and coordination.", focus:["Smart metering","GIS / asset management","Emergency management","Transit connectivity"]},
  {name:"Public Authority", phase:"Operate & Govern", mission:"Oversee policies, security, compliance and trust across city operations.", focus:["Governance dashboards","Cybersecurity","Data governance","Cross-agency coordination"]},
  {name:"City Visitor", phase:"Experience & Virtualize", mission:"Navigate a connected city through personalized, frictionless touchpoints.", focus:["Smart airport","Digital signage","Crowd management","EV charging","e-information"]},
  {name:"Entertainer", phase:"Experience & Virtualize", mission:"Bring the city to life through immersive and connected experiences.", focus:["Augmented hosts","Infotainment","Content orchestration","Audience insights"]}
];

// Icon library for demo cards (outlined line icons)
const demoIcons = {
  twin: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M32 8 L52 18 L52 46 L32 56 L12 46 L12 18 Z"/><path d="M32 8 L32 56"/><path d="M12 18 L52 18"/><path d="M12 46 L52 46"/><path d="M22 13 L42 23 L42 51 L22 41 Z" opacity=".5"/></svg>`,
  flow: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 32 C20 22, 28 42, 40 32 S60 22, 60 32"/><path d="M8 22 C20 12, 28 32, 40 22 S60 12, 60 22" opacity=".55"/><path d="M8 42 C20 32, 28 52, 40 42 S60 32, 60 42" opacity=".55"/><circle cx="20" cy="32" r="2.5" fill="currentColor"/><circle cx="44" cy="32" r="2.5" fill="currentColor"/></svg>`,
  ai: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="14"/><circle cx="32" cy="32" r="3" fill="currentColor"/><line x1="32" y1="8" x2="32" y2="18"/><line x1="32" y1="46" x2="32" y2="56"/><line x1="8" y1="32" x2="18" y2="32"/><line x1="46" y1="32" x2="56" y2="32"/><line x1="15" y1="15" x2="22" y2="22"/><line x1="42" y1="42" x2="49" y2="49"/><line x1="15" y1="49" x2="22" y2="42"/><line x1="42" y1="22" x2="49" y2="15"/></svg>`,
  env: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="22" r="6"/><path d="M14 44 c0-6 4-10 9-10 c2-4 6-6 10-6 s8 2 10 6 c5 0 9 4 9 10"/><path d="M10 52 h44" opacity=".7"/><line x1="20" y1="22" x2="14" y2="22" opacity=".55"/><line x1="44" y1="22" x2="50" y2="22" opacity=".55"/></svg>`,
  safety: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M32 6 L52 14 V32 c0 12-8 22-20 26 -12-4-20-14-20-26 V14 Z"/><path d="M22 32 l8 8 l14-16"/></svg>`,
  build: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 52 V22 L34 22 V52"/><path d="M34 30 H54 V52 H34"/><line x1="6" y1="52" x2="58" y2="52"/><line x1="16" y1="32" x2="22" y2="32"/><line x1="16" y1="40" x2="22" y2="40"/><line x1="40" y1="38" x2="48" y2="38"/><line x1="40" y1="46" x2="48" y2="46"/><path d="M30 12 L52 16 L52 22 L30 18 Z"/></svg>`,
  site: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="14" width="48" height="36" rx="2"/><line x1="8" y1="22" x2="56" y2="22"/><circle cx="14" cy="18" r="1" fill="currentColor"/><circle cx="18" cy="18" r="1" fill="currentColor"/><rect x="14" y="28" width="14" height="8"/><rect x="32" y="28" width="18" height="14"/><rect x="14" y="40" width="14" height="6"/></svg>`,
  ready: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="22"/><path d="M22 32 l8 8 l14-16"/><circle cx="32" cy="32" r="28" stroke-dasharray="2 4" opacity=".5"/></svg>`,
  ccc: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="20" height="14" rx="1.5"/><rect x="38" y="14" width="20" height="14" rx="1.5"/><rect x="22" y="34" width="20" height="14" rx="1.5"/><line x1="16" y1="22" x2="20" y2="22"/><line x1="48" y1="22" x2="52" y2="22"/><circle cx="32" cy="41" r="2"/><line x1="16" y1="28" x2="22" y2="34" opacity=".5"/><line x1="48" y1="28" x2="42" y2="34" opacity=".5"/></svg>`,
  grid: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M32 8 L32 30 L18 36 L18 56"/><path d="M32 30 L46 36 L46 56"/><circle cx="32" cy="8" r="3"/><circle cx="18" cy="56" r="3"/><circle cx="46" cy="56" r="3"/><circle cx="32" cy="30" r="3" fill="currentColor"/><path d="M10 38 L18 38 M46 38 L54 38" opacity=".5"/></svg>`,
  surv: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="22"/><circle cx="32" cy="32" r="14"/><circle cx="32" cy="32" r="6"/><circle cx="32" cy="32" r="2.5" fill="currentColor"/><line x1="32" y1="6" x2="32" y2="14"/><line x1="32" y1="50" x2="32" y2="58"/><line x1="6" y1="32" x2="14" y2="32"/><line x1="50" y1="32" x2="58" y2="32"/></svg>`,
  move: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 22 h28 l4 -4 h6 a3 3 0 0 1 3 3 v15 a3 3 0 0 1 -3 3 h-3"/><path d="M8 39 V25 a3 3 0 0 1 3 -3 h3"/><circle cx="20" cy="42" r="5"/><circle cx="44" cy="42" r="5"/><line x1="25" y1="42" x2="39" y2="42"/><path d="M8 30 h6 M8 36 h6" opacity=".5"/></svg>`,
  venue: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 24 C8 16, 22 10, 32 10 S56 16, 56 24"/><rect x="10" y="24" width="44" height="26" rx="1.5"/><line x1="10" y1="32" x2="54" y2="32"/><circle cx="32" cy="40" r="3"/><path d="M16 44 h6 M42 44 h6" opacity=".5"/></svg>`,
  xr: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 26 H56 V42 a4 4 0 0 1 -4 4 H40 l-3 -5 a3 3 0 0 0 -10 0 l-3 5 H12 a4 4 0 0 1 -4 -4 Z"/><circle cx="20" cy="36" r="4"/><circle cx="44" cy="36" r="4"/><path d="M14 26 L17 20 H47 L50 26"/></svg>`,
  arr: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M32 6 c10 0 18 8 18 18 c0 14 -18 32 -18 32 S14 38 14 24 c0 -10 8 -18 18 -18 z"/><circle cx="32" cy="24" r="6"/><path d="M14 50 H50" opacity=".5"/></svg>`,
  live: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="6" fill="currentColor"/><circle cx="32" cy="32" r="13"/><circle cx="32" cy="32" r="20" opacity=".7"/><circle cx="32" cy="32" r="27" opacity=".4"/></svg>`
};

const demoData = {
  "Design & Master Plan":[
    {title:"City Digital Twin", industry:"Cross-domain", persona:"City Planner", usecase:"Master planning and scenario testing", icon:"twin", link:"#"},
    {title:"Crowd & Traffic Simulation", industry:"Mobility", persona:"City Planner", usecase:"Event and corridor flow simulation", icon:"flow", link:"#"},
    {title:"AI Co-Creation", industry:"Construction", persona:"City Designer", usecase:"Collaborative design in immersive environments", icon:"ai", link:"#"},
    {title:"Environmental Simulation", industry:"Environment", persona:"City Planner", usecase:"Weather, sunlight and urban comfort testing", icon:"env", link:"#"}
  ],
  "Develop & Build":[
    {title:"Worker Safety Intelligence", industry:"Construction", persona:"City Builder", usecase:"Fatigue, hazard and PPE monitoring", icon:"safety", link:"#"},
    {title:"Construction Digital Twin", industry:"Construction", persona:"City Builder", usecase:"Progress, quality and handover readiness", icon:"build", link:"#"},
    {title:"Site Command View", industry:"Construction", persona:"City Builder", usecase:"Site logistics and issue escalation", icon:"site", link:"#"},
    {title:"Commissioning Intelligence", industry:"Smart Venue", persona:"City Builder", usecase:"Asset readiness and validation", icon:"ready", link:"#"}
  ],
  "Operate & Govern":[
    {title:"Integrated Command Center", industry:"Cross-domain", persona:"City Operator", usecase:"Centralized monitoring and response", icon:"ccc", link:"#"},
    {title:"Smart Utilities Operations", industry:"Utilities", persona:"City Operator", usecase:"Meters, grid, EV and assets", icon:"grid", link:"#"},
    {title:"Public Safety Analytics", industry:"Public Safety", persona:"Public Authority", usecase:"Surveillance, weather and emergency response", icon:"surv", link:"#"},
    {title:"Mobility Operations", industry:"Mobility", persona:"City Operator", usecase:"Transit, parking, e-toll and corridor insight", icon:"move", link:"#"}
  ],
  "Experience & Virtualize":[
    {title:"Smart Venue Experience", industry:"Smart Venue", persona:"City Visitor", usecase:"Crowd-aware adaptive journeys", icon:"venue", link:"#"},
    {title:"XR Visitor Experience", industry:"Hospitality", persona:"Entertainer", usecase:"Immersive storytelling and augmented hosts", icon:"xr", link:"#"},
    {title:"Arrival Orchestration", industry:"Mobility", persona:"City Visitor", usecase:"Smart entry and connected arrival", icon:"arr", link:"#"},
    {title:"Experience Intelligence", industry:"Media", persona:"Entertainer", usecase:"Feedback, sentiment and content adaptation", icon:"live", link:"#"}
  ]
};

/* ===========================
   NAVIGATION
=========================== */
const views = [...document.querySelectorAll('.view')];
const viewButtons = [...document.querySelectorAll('.nav-btn, .nav-cta')];

function showView(id){
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.view === id));
  views.forEach(v => v.classList.toggle('active', v.id === id));
  window.scrollTo({top:0, behavior:'smooth'});
}
viewButtons.forEach(btn => {
  if(btn.dataset.view){
    btn.addEventListener('click', () => showView(btn.dataset.view));
  }
});
document.querySelectorAll('[data-jump]').forEach(btn => btn.addEventListener('click', () => showView(btn.dataset.jump)));

// ===========================
// CROSS-VIEW NAVIGATION HELPERS
// ===========================

// Switch to any view by id
window.goToView = function(viewId){
  showView(viewId);
};

// Decode HTML entities like &amp; that may appear in onclick strings
function decodeEntities(str){
  if(!str) return str;
  const txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
}

// Switch to "City Phases" (offering map) and zoom to a specific phase
window.goToPhase = function(phaseName){
  const decoded = decodeEntities(phaseName);
  showView('offering');
  setTimeout(() => {
    if(window.offeringMapAPI && window.offeringMapAPI.gotoPhase){
      window.offeringMapAPI.gotoPhase(decoded);
    }
  }, 350);
};

// Switch to "City Phases" and drill into a specific service line
window.goToService = function(phaseName, serviceName){
  const dPhase = decodeEntities(phaseName);
  const dService = decodeEntities(serviceName);
  showView('offering');
  setTimeout(() => {
    if(window.offeringMapAPI && window.offeringMapAPI.gotoService){
      window.offeringMapAPI.gotoService(dPhase, dService);
    }
  }, 350);
};

// Switch to "Our Offering" view and expand a specific stage panel
window.goToValueChain = function(stageId){
  if(window.navigateTo){
    window.navigateTo({ view: 'offering-view', stage: parseInt(stageId, 10) });
  }
};

// Wire up clickable phase/domain/service chips that exist on Home or other views
// to navigate properly. Anything with [data-go-phase] jumps to City Phases at that phase.
document.querySelectorAll('[data-go-phase]').forEach(el => {
  el.addEventListener('click', () => goToPhase(el.dataset.goPhase));
});
document.querySelectorAll('[data-go-service]').forEach(el => {
  el.addEventListener('click', () => goToService(el.dataset.goPhase, el.dataset.goService));
});

/* ===========================
   LIFECYCLE STRIP (HOME)
=========================== */
const lifecycleData = [
  {
    name:"Design & Master Plan",
    color:"#ec4dd6",
    desc:"Imagine the city before it exists.",
    journeys:["Conceptualize","Design","Plan"],
    icon:`<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="6" width="24" height="20" rx="2"/>
      <path d="M8 26 V14 L12 10 V26"/>
      <path d="M14 26 V12 L18 9 V26"/>
      <path d="M20 26 V16 L24 13 V26"/>
      <line x1="6" y1="22" x2="26" y2="22"/>
      <circle cx="9" cy="18" r=".8"/>
      <circle cx="16" cy="16" r=".8"/>
      <circle cx="22" cy="20" r=".8"/>
    </svg>`
  },
  {
    name:"Develop & Build",
    color:"#9d6cff",
    desc:"Turn intent into intelligent assets.",
    journeys:["Construct"],
    icon:`<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 26 V12 L20 12 V26"/>
      <path d="M20 16 H26 V26 H20"/>
      <line x1="6" y1="26" x2="28" y2="26"/>
      <line x1="9" y1="16" x2="13" y2="16"/>
      <line x1="9" y1="20" x2="13" y2="20"/>
      <path d="M16 6 L24 8 L24 11 L16 9 Z"/>
      <line x1="20" y1="9" x2="20" y2="12"/>
    </svg>`
  },
  {
    name:"Operate & Govern",
    color:"#34d8ff",
    desc:"Run the city as a continuously learning system.",
    journeys:["Run","Monitor"],
    icon:`<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="16" cy="16" r="4"/>
      <path d="M16 4 V8 M16 24 V28 M4 16 H8 M24 16 H28 M7.5 7.5 L10 10 M22 22 L24.5 24.5 M7.5 24.5 L10 22 M22 10 L24.5 7.5"/>
      <circle cx="16" cy="16" r="1.6" fill="currentColor"/>
    </svg>`
  },
  {
    name:"Experience & Virtualize",
    color:"#4c92ff",
    desc:"Extend the city beyond the physical.",
    journeys:["Pre-arrival","Arrival","Experience","Post"],
    icon:`<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12 H27 V22 a3 3 0 0 1-3 3 H8 a3 3 0 0 1-3-3 Z"/>
      <circle cx="11" cy="18" r="2.2"/>
      <circle cx="21" cy="18" r="2.2"/>
      <path d="M9 12 L11 9 H21 L23 12"/>
    </svg>`
  }
];

const lifecycleStrip = document.getElementById('lifecycleStrip');
lifecycleData.forEach((p, idx) => {
  const item = document.createElement('div');
  item.className = 'lifecycle-item';
  const cardGlow = `${p.color}28`;
  item.innerHTML = `
    <div class="lifecycle-card" style="--cardColor:${p.color}; --cardGlow:${cardGlow}; cursor:pointer" data-go-phase="${p.name}">
      <div class="lc-top">
        <div class="lc-icon">${p.icon}</div>
        <div class="lc-title">${p.name}</div>
      </div>
      <p class="lc-desc">${p.desc}</p>
      <div class="lc-foot">
        ${p.journeys.map((j, i) => `${i ? '<span class="dot"></span>' : ''}<span>${j}</span>`).join(' ')}
      </div>
    </div>
    ${idx < lifecycleData.length - 1 ? `
      <div class="lifecycle-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="10 8 14 12 10 16"/>
        </svg>
      </div>
    ` : ''}
  `;
  // Wire click on the lifecycle card
  const card = item.querySelector('.lifecycle-card');
  if(card){
    card.addEventListener('click', () => goToPhase(p.name));
  }
  lifecycleStrip.appendChild(item);
});

/* ===========================
   PERSONAS
=========================== */
const personaGrid = document.getElementById('personaGrid');
personas.forEach(p => {
  const c = phases[p.phase].color;
  const el = document.createElement('div');
  el.className = 'persona-card';
  el.innerHTML = `
    <div class="phase-tag" style="color:${c};cursor:pointer" data-go-phase="${p.phase}">${p.phase} ›</div>
    <h3>${p.name}</h3>
    <p>${p.mission}</p>
    <div class="pill-row">${p.focus.map(f => `<span class="pill">${f}</span>`).join('')}</div>
  `;
  // Wire phase-tag click to jump to that phase
  const tag = el.querySelector('.phase-tag');
  if(tag) tag.addEventListener('click', e => { e.stopPropagation(); goToPhase(p.phase); });
  personaGrid.appendChild(el);
});

/* ===========================
   NEURAL OFFERING MAP, Interactive multi-layer
=========================== */
(function(){
  const wrap   = document.querySelector('.nm-canvas-wrap');
  if(!wrap) return;
  const edges  = document.getElementById('nmEdges');
  const nodes  = document.getElementById('nmNodes');
  const partLayer = document.getElementById('nmParticles');
  const sideEl    = document.getElementById('nmSide');
  const sideBody  = document.getElementById('nmSideBody');
  const breadcrumb = document.getElementById('nmBreadcrumb');
  const resetBtn   = document.getElementById('nmReset');

  const SVGNS = 'http://www.w3.org/2000/svg';
  const phaseList = Object.keys(phases);

  // State
  let activePhase = null;       // string | null
  let activeService = null;     // string | null
  let activeUseCase = null;     // string | null  — name of active use case
  let activeDomain = null;      // string | null  — domain selected within active use case
  let nodeMap = new Map();      // id -> {el, x, y, type, parent, color}
  let edgeList = [];            // {from, to, line, particle}
  let dims = {w:0, h:0};

  function clear(){
    nodes.innerHTML = '';
    while(edges.lastChild && edges.lastChild.tagName !== 'defs') edges.removeChild(edges.lastChild);
    nodeMap.clear();
    edgeList = [];
  }

  function measure(){
    const rect = wrap.getBoundingClientRect();
    dims.w = rect.width;
    dims.h = rect.height;
    edges.setAttribute('viewBox', `0 0 ${dims.w} ${dims.h}`);
    edges.setAttribute('width', dims.w);
    edges.setAttribute('height', dims.h);
  }

  function createNode(opts){
    // opts: id, type ('core'|'phase'|'service'|'usecase'), x, y, label, sub, color, parent, dataObj
    const el = document.createElement('div');
    el.className = 'nm-node ' + opts.type;
    el.style.left = opts.x + 'px';
    el.style.top  = opts.y + 'px';
    if(opts.color) el.style.setProperty('--nodeColor', opts.color);
    if(opts.type === 'usecase'){
      el.innerHTML = `<span class="nm-tooltip">${opts.label}</span>`;
    } else {
      const subLine = opts.sub ? `<span class="nm-node-meta">${opts.sub}</span>` : '';
      el.innerHTML = `<span class="nm-node-title">${opts.label}</span>${subLine}`;
    }
    el.dataset.nodeId = opts.id;
    el.dataset.nodeType = opts.type;
    nodes.appendChild(el);
    nodeMap.set(opts.id, {el, ...opts});
    requestAnimationFrame(()=>{
      requestAnimationFrame(()=> el.classList.add('in'));
    });
    return el;
  }

  function createEdge(fromId, toId, opts={}){
    const from = nodeMap.get(fromId);
    const to   = nodeMap.get(toId);
    if(!from || !to) return null;
    const path = document.createElementNS(SVGNS, 'path');
    path.classList.add('edge');
    if(opts.active) path.classList.add('active');
    if(opts.dim) path.classList.add('dim');
    // curved line
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const mx = (from.x + to.x) / 2;
    const my = (from.y + to.y) / 2;
    // small perpendicular curve
    const len = Math.sqrt(dx*dx + dy*dy);
    const curve = Math.min(40, len * 0.12);
    const nx = -dy / (len || 1) * curve;
    const ny =  dx / (len || 1) * curve;
    const cx = mx + nx;
    const cy = my + ny;
    const d = `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
    path.setAttribute('d', d);
    const stroke = opts.active ? 'url(#edge-grad-active)'
                 : opts.dim    ? 'url(#edge-grad-dim)'
                 : (opts.color || 'url(#edge-grad)');
    path.setAttribute('stroke', stroke);
    if(opts.dashed){
      path.setAttribute('stroke-dasharray', '3 5');
    }
    edges.appendChild(path);
    requestAnimationFrame(()=> path.classList.add('visible'));

    // particle moving along the path
    let particle = null;
    if(opts.particle){
      particle = document.createElementNS(SVGNS, 'circle');
      particle.classList.add('edge-particle');
      particle.setAttribute('r', '1.8');
      const motion = document.createElementNS(SVGNS, 'animateMotion');
      motion.setAttribute('dur', (2.5 + Math.random() * 2) + 's');
      motion.setAttribute('repeatCount', 'indefinite');
      motion.setAttribute('rotate', 'auto');
      motion.setAttribute('path', d);
      particle.appendChild(motion);
      edges.appendChild(particle);
    }

    edgeList.push({fromId, toId, path, particle});
    return path;
  }

  // ====================================================================
  // BOUNDED LAYOUT SYSTEM
  // Side panel is a prohibited zone (top-right). All nodes must fit in
  // the remaining playable rectangle, with comfortable padding so
  // labels never clip and edges never spill.
  // ====================================================================

  // Returns the rectangle of the playable field (where nodes can live).
  // Excludes side panel, breadcrumb, and a safety margin from canvas edges.
  function getPlayField(){
    const isMobile = window.innerWidth < 780;
    if(isMobile){
      // Mobile: side panel is bottom strip. Playable field is top half.
      const m = 24;            // edge margin
      const sideStripH = Math.min(360, dims.h * 0.5);
      return {
        left:   m,
        right:  dims.w - m,
        top:    50,            // leave room for breadcrumb
        bottom: dims.h - sideStripH - 16,
      };
    }
    // Desktop: side panel pinned top-right (320px + 18px margin = 338px reserved on the right).
    const sideW = 320;
    const sideMargin = 18;
    const reservedRight = sideW + sideMargin * 2;  // ≈ 356px
    const m = 30;
    return {
      left:   m,
      right:  dims.w - reservedRight,
      top:    60,                  // room for breadcrumb at top-left
      bottom: dims.h - m,
    };
  }

  function fieldCenter(){
    const f = getPlayField();
    return {
      cx: (f.left + f.right) / 2,
      cy: (f.top + f.bottom) / 2,
      w:  f.right - f.left,
      h:  f.bottom - f.top,
    };
  }

  // Hash function for stable jitter, same node always gets same position
  function hashSeed(str){
    let h = 0;
    for(let i=0; i<str.length; i++) h = ((h<<5) - h + str.charCodeAt(i)) | 0;
    return h;
  }
  function seededRand(seed, idx){
    const x = Math.sin(seed * 9999 + idx * 13.37) * 10000;
    return x - Math.floor(x);
  }

  // Approximate half-diameter for **clamping to field edges**.
  // Use-case bubbles render as ~auto-width pills (max-width 138px), so their
  // visual half-width is around 69px when label is long.
  function nodeHalfSize(type){
    const isMobile = window.innerWidth < 780;
    const isCompact = window.innerWidth < 1100 && !isMobile;
    if(type === 'core')          return isMobile ? 54 : isCompact ? 76 : 90;
    if(type === 'phase')         return isMobile ? 48 : isCompact ? 56 : 64;
    if(type === 'service')       return isMobile ? 42 : isCompact ? 48 : 54;
    if(type === 'usecase-bubble')return isMobile ? 56 : isCompact ? 62 : 72;
    return 60;
  }

  // Effective collision radius. Slightly larger than display half so labels
  // don't visually crowd.
  function nodeCollisionR(type){
    const isMobile = window.innerWidth < 780;
    const isCompact = window.innerWidth < 1100 && !isMobile;
    if(type === 'core')          return isMobile ? 58 : isCompact ? 80 : 96;
    if(type === 'phase')         return isMobile ? 52 : isCompact ? 60 : 70;
    if(type === 'service')       return isMobile ? 46 : isCompact ? 52 : 60;
    if(type === 'usecase-bubble')return isMobile ? 58 : isCompact ? 64 : 76;
    return 64;
  }

  // Clamp a single (x, y) so the node's bounding box stays inside the play field.
  function clampToField(x, y, type){
    const f = getPlayField();
    const r = nodeHalfSize(type);
    return {
      x: Math.max(f.left + r, Math.min(f.right - r, x)),
      y: Math.max(f.top  + r, Math.min(f.bottom - r, y)),
    };
  }

  // Compute the bounding box of a list of points.
  function bbox(points, padPerType){
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    points.forEach(p => {
      const r = padPerType ? padPerType(p) : (p.r || 50);
      minX = Math.min(minX, p.x - r);
      maxX = Math.max(maxX, p.x + r);
      minY = Math.min(minY, p.y - r);
      maxY = Math.max(maxY, p.y + r);
    });
    return {minX, maxX, minY, maxY, w: maxX - minX, h: maxY - minY};
  }

  // Fit a set of points into the play field.
  // First scale uniformly around the cluster centroid to fit dimensions,
  // then translate the cluster bbox so it sits fully inside the field.
  function fitPointsToField(points, anchor, padPerType){
    if(!points.length) return points;
    const f = getPlayField();
    const fW = f.right - f.left;
    const fH = f.bottom - f.top;

    // Step 1, scale around anchor if cluster is too big
    let box = bbox(points, padPerType);
    const scaleX = box.w > 0 ? Math.min(1, fW / box.w) : 1;
    const scaleY = box.h > 0 ? Math.min(1, fH / box.h) : 1;
    const s = Math.min(scaleX, scaleY);
    let scaled = points;
    if(s < 1){
      scaled = points.map(p => ({
        ...p,
        x: anchor.x + (p.x - anchor.x) * s,
        y: anchor.y + (p.y - anchor.y) * s,
      }));
    }

    // Step 2, translate the bbox into the field if it's drifted out
    box = bbox(scaled, padPerType);
    let dx = 0, dy = 0;
    if(box.minX < f.left)  dx = f.left  - box.minX;
    if(box.maxX > f.right) dx = f.right - box.maxX;  // negative shift
    if(box.minY < f.top)   dy = f.top   - box.minY;
    if(box.maxY > f.bottom)dy = f.bottom- box.maxY;  // negative shift
    if(dx !== 0 || dy !== 0){
      scaled = scaled.map(p => ({...p, x: p.x + dx, y: p.y + dy}));
    }
    return scaled;
  }

  // Iterative collision resolver.
  // Each point: {x, y, type, fixed (optional bool)}
  // Pushes pairs of overlapping nodes apart, then re-clamps each node to the field.
  // `extraFixed` is a list of points (with type) that participate in collision but
  // cannot move themselves, typically the parent node (active phase / service).
  function resolveCollisions(points, extraFixed = [], iterations = 120){
    if(!points.length) return points;
    const pts = points.map(p => ({...p}));
    const fixed = extraFixed.map(p => ({...p, fixed: true}));
    const all = [...pts, ...fixed];

    let lastTotalOverlap = Infinity;
    for(let iter = 0; iter < iterations; iter++){
      let totalOverlap = 0;
      // Escalating push factor, gentle at first, stronger if stuck
      const pushFactor = iter < 30 ? 0.5 : iter < 80 ? 0.7 : 1.0;
      for(let i = 0; i < all.length; i++){
        for(let j = i + 1; j < all.length; j++){
          const a = all[i];
          const b = all[j];
          const ra = nodeCollisionR(a.type);
          const rb = nodeCollisionR(b.type);
          const minDist = ra + rb;
          let dx = b.x - a.x;
          let dy = b.y - a.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if(dist < 0.001){
            // Coincident, nudge in a deterministic direction
            dx = (i + 1) * 0.7;
            dy = (j + 1) * 0.5;
            dist = Math.sqrt(dx * dx + dy * dy);
          }
          if(dist < minDist){
            const overlap = (minDist - dist);
            totalOverlap += overlap;
            const ux = dx / dist;       // unit vector
            const uy = dy / dist;
            const push = overlap * pushFactor;
            if(a.fixed && b.fixed){
              // both fixed, can't help
            } else if(a.fixed){
              b.x += ux * push;
              b.y += uy * push;
            } else if(b.fixed){
              a.x -= ux * push;
              a.y -= uy * push;
            } else {
              a.x -= ux * push * 0.5;
              a.y -= uy * push * 0.5;
              b.x += ux * push * 0.5;
              b.y += uy * push * 0.5;
            }
          }
        }
      }
      // Clamp non-fixed points to field after each pass
      pts.forEach(p => {
        const c = clampToField(p.x, p.y, p.type);
        p.x = c.x;
        p.y = c.y;
      });
      if(totalOverlap < 0.5) break;
      lastTotalOverlap = totalOverlap;
    }
    return pts;
  }

  // ----- Position helpers -----
  // The CoE core sits at the field center. Phases orbit around it.
  function getCoreCenter(){
    return fieldCenter();
  }

  function getPhasePositions(){
    const fc = fieldCenter();
    const isMobile = window.innerWidth < 780;
    // Radius proportional to the smaller play-field dimension
    const radius = Math.min(fc.w, fc.h) * (isMobile ? 0.36 : 0.34);
    // Organic 4-direction spread (slight asymmetry, not perfect cardinal)
    const angles = [-Math.PI*0.42, -Math.PI*0.05, Math.PI*0.45, Math.PI*0.92];
    const radii  = [radius*0.95, radius*1.05, radius*0.92, radius*1.0];
    let pts = phaseList.map((p, i) => ({
      name: p,
      type: 'phase',
      x: fc.cx + Math.cos(angles[i]) * radii[i],
      y: fc.cy + Math.sin(angles[i]) * radii[i],
    }));
    pts = fitPointsToField(pts, fc, p => nodeHalfSize(p.type || 'phase'));
    // Resolve collisions vs the core
    pts = resolveCollisions(pts, [{x: fc.cx, y: fc.cy, type: 'core'}]);
    return pts;
  }

  // When a phase is "focused" (services are being shown), reposition it so that
  // there's enough outward room for the active service AND its use case ring.
  // Pulls the phase toward field center as needed.
  function getFocusedPhasePosition(phaseName){
    const stable = getPhasePositions().find(p => p.name === phaseName);
    if(!stable) return null;
    const fc = fieldCenter();
    const f = getPlayField();

    // Direction outward from core through stable phase
    const dirX = stable.x - fc.cx;
    const dirY = stable.y - fc.cy;
    const dirLen = Math.sqrt(dirX*dirX + dirY*dirY) || 1;
    const ux = dirX / dirLen;
    const uy = dirY / dirLen;

    // Required outward room: phaseR + activeServiceRadius + bubbleRingRadius + bubbleR + edge margin
    const phaseR  = nodeCollisionR('phase');
    const serviceR = nodeCollisionR('service');
    const bubbleR = nodeCollisionR('usecase-bubble');
    const isMobile = window.innerWidth < 780;
    const fieldMin = Math.min(fc.w, fc.h);
    const activeRingR = Math.max(phaseR + serviceR + 18,
                                  Math.min(fieldMin * 0.34, isMobile ? 200 : 260));
    const bubbleRingR = Math.max(serviceR + bubbleR + 22,
                                  Math.min(isMobile ? 130 : 175, fieldMin * 0.22));
    const requiredOutward = phaseR + activeRingR + bubbleRingR + bubbleR + 10;

    // Where the phase center can sit so that requiredOutward fits inside the field
    // along the (ux, uy) direction from field center.
    // Find the maximum t such that center + t*(ux,uy) + requiredOutward*(ux,uy) is inside field.
    // i.e. center + (t + requiredOutward) * dir is inside field bounds.
    // Solve for the largest k = t + requiredOutward such that center + k*dir stays inside.
    let kMax = Infinity;
    if(ux > 0)  kMax = Math.min(kMax, (f.right - fc.cx) / ux);
    if(ux < 0)  kMax = Math.min(kMax, (f.left  - fc.cx) / ux);
    if(uy > 0)  kMax = Math.min(kMax, (f.bottom- fc.cy) / uy);
    if(uy < 0)  kMax = Math.min(kMax, (f.top   - fc.cy) / uy);
    // Account for use-case bubble half-width at the outer edge
    kMax -= nodeHalfSize('usecase-bubble');
    // Phase position: t along the outward direction
    let t = kMax - requiredOutward;
    // Don't go past the stable position (we only pull inward, never outward)
    t = Math.min(t, dirLen);
    // Don't end up too close to the core
    const minT = nodeCollisionR('core') + phaseR + 8;
    t = Math.max(t, minT);

    let x = fc.cx + ux * t;
    let y = fc.cy + uy * t;

    return { ...stable, x, y };
  }

  // Place service nodes around a phase node.
  // Key principle: when one service is active, siblings hug the phase tightly
  // (small inner ring) and the active service moves far outward to claim a
  // dedicated region for its use case bubbles.
  function getServicePositions(phaseName, phasePos, activeServiceName = null, obstacles = []){
    const services = phases[phaseName].services;
    const fc = fieldCenter();
    const f  = getPlayField();
    const isMobile = window.innerWidth < 780;

    // Direction outward from core through the phase
    const dirX = phasePos.x - fc.cx;
    const dirY = phasePos.y - fc.cy;
    const baseAngle = Math.atan2(dirY, dirX);
    const seed = hashSeed(phaseName);

    const hasActive = !!activeServiceName;
    const N = services.length;
    const serviceR = nodeCollisionR('service');
    const phaseR   = nodeCollisionR('phase');

    if(!hasActive){
      // No active service, distribute services in an arc outward from phase
      const spread = Math.min(Math.PI * 0.95, Math.PI * 0.4 + N * 0.16);
      const startAngle = baseAngle - spread / 2;
      // Arc-length math: ensures siblings don't overlap each other
      const arcRadiusNeeded = N > 1 ? ((N - 1) * 2 * serviceR) / spread : 0;
      const baseRadius = Math.max(
        phaseR + serviceR + 14,
        arcRadiusNeeded + 8,
        Math.min(isMobile ? 130 : 175, Math.min(fc.w, fc.h) * 0.22)
      );
      let pts = services.map((s, i) => {
        const t = N === 1 ? 0.5 : i / (N - 1);
        const angle = startAngle + t * spread;
        const jitter = (seededRand(seed, i) - 0.5) * (isMobile ? 10 : 18);
        const r = baseRadius + jitter;
        return {
          name: s.name,
          data: s,
          type: 'service',
          x: phasePos.x + Math.cos(angle) * r,
          y: phasePos.y + Math.sin(angle) * r,
        };
      });
      pts = fitPointsToField(pts, phasePos, p => nodeHalfSize(p.type || 'service'));
      pts = resolveCollisions(pts, obstacles);
      return pts;
    }

    // === Active service mode ===
    // Active service is placed in the direction with the MOST field space —
    // typically outward from the phase, but if that direction is blocked
    // (phase is near a field edge), redirect toward the field interior.
    const Nsib = N - 1;
    const bubbleR = nodeCollisionR('usecase-bubble');
    const fieldMin = Math.min(fc.w, fc.h);
    const activeRadius = Math.max(
      phaseR + serviceR + 18,
      Math.min(fieldMin * 0.34, isMobile ? 200 : 260)
    );
    const bubbleRingR = Math.max(
      serviceR + bubbleR + 22,
      Math.min(isMobile ? 130 : 175, fieldMin * 0.22)
    );
    const requiredOutward = activeRadius + bubbleRingR + bubbleR + 10;

    // Compute the available distance from the phase along several candidate angles
    // and pick the angle with the most room (>= requiredOutward if possible).
    function distToFieldEdge(fromX, fromY, ang){
      const cosA = Math.cos(ang), sinA = Math.sin(ang);
      let k = Infinity;
      if(cosA > 0.001)  k = Math.min(k, (f.right - fromX) / cosA);
      if(cosA < -0.001) k = Math.min(k, (f.left  - fromX) / cosA);
      if(sinA > 0.001)  k = Math.min(k, (f.bottom- fromY) / sinA);
      if(sinA < -0.001) k = Math.min(k, (f.top   - fromY) / sinA);
      return k;
    }
    let bestAngle = baseAngle;
    let bestSpace = distToFieldEdge(phasePos.x, phasePos.y, baseAngle);
    for(let i = 1; i <= 16; i++){
      // Search ±π around outward, in 22.5° steps
      const probeOff = (Math.PI * 2 * i) / 16;
      const candAng = baseAngle + probeOff;
      const space = distToFieldEdge(phasePos.x, phasePos.y, candAng);
      if(space > bestSpace){ bestSpace = space; bestAngle = candAng; }
    }
    // Also bias slightly toward the natural outward direction when both work
    const outwardSpace = distToFieldEdge(phasePos.x, phasePos.y, baseAngle);
    if(outwardSpace >= requiredOutward + nodeHalfSize('usecase-bubble') + 10){
      bestAngle = baseAngle;
    }

    const activeAngle = bestAngle;
    // Sibling ring, small radius, on the side OPPOSITE the active service
    const siblingRadius = phaseR + serviceR + 12;
    const siblingArcCenter = activeAngle + Math.PI;
    const siblingSpread = Math.min(Math.PI * 1.4, Math.PI * 0.5 + Nsib * 0.16);
    const siblingStart = siblingArcCenter - siblingSpread / 2;

    let siblingIdx = 0;
    let pts = services.map((s, i) => {
      const isActive = (s.name === activeServiceName);
      if(isActive){
        return {
          name: s.name,
          data: s,
          type: 'service',
          x: phasePos.x + Math.cos(activeAngle) * activeRadius,
          y: phasePos.y + Math.sin(activeAngle) * activeRadius,
        };
      } else {
        const t = Nsib === 1 ? 0.5 : siblingIdx / (Nsib - 1);
        const angle = siblingStart + t * siblingSpread;
        siblingIdx++;
        const jitter = (seededRand(seed, i) - 0.5) * 8;
        return {
          name: s.name,
          data: s,
          type: 'service',
          x: phasePos.x + Math.cos(angle) * (siblingRadius + jitter),
          y: phasePos.y + Math.sin(angle) * (siblingRadius + jitter),
        };
      }
    });

    pts = fitPointsToField(pts, phasePos, p => nodeHalfSize(p.type || 'service'));
    pts = resolveCollisions(pts, obstacles);
    return pts;
  }

  // Place use-case bubbles around the active service.
  // Use-case bubbles are placed using a directional arc + collision resolution
  // against all other visible nodes (phase, sibling services, core).
  function getUseCasePositions(phaseName, serviceName, servicePos, obstacles = []){
    const phaseData = phases[phaseName];
    const service = phaseData.services.find(s => s.name === serviceName);
    if(!service) return [];
    const useCases = service.useCases;
    const fc = fieldCenter();
    const isMobile = window.innerWidth < 780;

    const dirX = servicePos.x - fc.cx;
    const dirY = servicePos.y - fc.cy;
    const baseAngle = Math.atan2(dirY, dirX);
    const seed = hashSeed(phaseName + serviceName);

    const N = useCases.length;
    // Use-case spread, restricted outward
    const spread = Math.min(Math.PI * 1.25, Math.PI * 0.55 + N * 0.16);

    const bubbleR = nodeCollisionR('usecase-bubble');
    // Arc-length math: for N bubbles in arc of `spread` rad, R must satisfy
    // R * spread >= (N - 1) * 2 * bubbleR  (center-to-center spacing)
    const arcRadius = N > 1 ? ((N - 1) * 2 * bubbleR) / spread : 0;
    const minRing = nodeCollisionR('service') + bubbleR + 22;
    const fieldMin = Math.min(fc.w, fc.h);
    const baseRadius = Math.max(
      minRing,
      arcRadius + 10,
      Math.min(isMobile ? 130 : 175, fieldMin * 0.22)
    );

    const startAngle = baseAngle - spread / 2;

    let pts = useCases.map((u, i) => {
      const t = N === 1 ? 0.5 : i / (N - 1);
      const angle = startAngle + t * spread;
      const jitter = (seededRand(seed, i + 100) - 0.5) * (isMobile ? 6 : 12);
      const r = baseRadius + jitter;
      return {
        name: u.name,
        data: u,
        type: 'usecase-bubble',
        x: servicePos.x + Math.cos(angle) * r,
        y: servicePos.y + Math.sin(angle) * r,
      };
    });

    pts = fitPointsToField(pts, servicePos, p => nodeHalfSize(p.type || 'usecase-bubble'));
    pts = resolveCollisions(pts, obstacles, 200);

    return pts;
  }

  // Render states ----------------------------------------------------------
  function renderRoot(){
    measure();
    clear();
    activePhase = null;
    activeService = null;
    activeUseCase = null;
    activeDomain = null;
    updateBreadcrumb();
    updateSide();

    // Core, in network center
    createNode({
      id:'core', type:'core',
      x: getCoreCenter().cx, y: getCoreCenter().cy,
      label:'Sentient<br>Cities<br>CoE'
    });

    // 4 phases at stable positions
    const positions = getPhasePositions();
    positions.forEach(p => {
      const data = phases[p.name];
      createNode({
        id:'phase:' + p.name,
        type:'phase',
        x:p.x, y:p.y,
        label:p.name,
        sub: data.journeys.join(' · '),
        color: data.color
      });
    });

    // Edges core -> phases (all visible, with particles)
    setTimeout(()=>{
      positions.forEach(p => {
        createEdge('core', 'phase:' + p.name, {particle:true});
      });
    }, 80);

    // Wire click on phases
    nodes.querySelectorAll('.nm-node.phase').forEach(el => {
      el.addEventListener('click', () => {
        const phaseName = el.dataset.nodeId.split(':')[1];
        renderPhase(phaseName);
      });
    });
  }

  function renderPhase(phaseName){
    measure();
    activePhase = phaseName;
    activeService = null;
    activeUseCase = null;
    activeDomain = null;
    const data = phases[phaseName];

    clear();
    updateBreadcrumb();
    updateSide();

    // Core, stays in same position, slightly dimmed
    createNode({
      id:'core', type:'core',
      x: getCoreCenter().cx, y: getCoreCenter().cy,
      label:'Sentient<br>Cities<br>CoE'
    });
    const cn = nodeMap.get('core');
    cn.el.style.cursor = 'pointer';
    cn.el.addEventListener('click', renderRoot);

    // ALL phases visible:
    // - active phase moves to a "focused" position (closer to center) so services have room
    // - inactive phases stay at their stable positions, dimmed
    const stablePhases = getPhasePositions();
    const focusedPos = getFocusedPhasePosition(phaseName);
    stablePhases.forEach(p => {
      const pdata = phases[p.name];
      const isActive = (p.name === phaseName);
      const id = 'phase:' + p.name;
      const pos = isActive ? focusedPos : p;
      createNode({
        id, type:'phase',
        x: pos.x, y: pos.y,
        label: p.name,
        sub: pdata.journeys.join(' · '),
        color: pdata.color
      });
      const n = nodeMap.get(id);
      if(isActive){
        n.el.classList.add('active');
      } else {
        // dimmed, still visible, still clickable
        n.el.classList.add('dim');
        n.el.addEventListener('click', () => renderPhase(p.name));
      }
    });

    // Wire click on the active phase too, clicking it again goes back to root
    nodeMap.get('phase:' + phaseName).el.addEventListener('click', renderRoot);

    // Render service nodes branching off the FOCUSED active phase position.
    // Pass core + all phase positions as collision obstacles.
    const fc1 = fieldCenter();
    const obstacles1 = [
      {x: fc1.cx, y: fc1.cy, type: 'core'},
      ...stablePhases.filter(p => p.name !== phaseName).map(p => ({x: p.x, y: p.y, type: 'phase'})),
      {x: focusedPos.x, y: focusedPos.y, type: 'phase'},
    ];
    const servicePositions = getServicePositions(phaseName, focusedPos, null, obstacles1);
    servicePositions.forEach(sp => {
      createNode({
        id:'service:' + phaseName + '|' + sp.name,
        type:'service',
        x: sp.x, y: sp.y,
        label: sp.name,
        color: data.color,
        dataObj: sp.data
      });
    });

    // Edges, all faint/visible to show whole network, but ACTIVE path lit up
    setTimeout(()=>{
      // Core -> all phases (dim except active)
      stablePhases.forEach(p => {
        const isActive = (p.name === phaseName);
        createEdge('core', 'phase:' + p.name, {
          particle: isActive,
          active: isActive,
          dim: !isActive
        });
      });
      // Active phase -> its services
      servicePositions.forEach(sp => {
        createEdge('phase:' + phaseName, 'service:' + phaseName + '|' + sp.name, {
          particle: true,
          active: true
        });
      });
    }, 100);

    // Wire service clicks
    nodes.querySelectorAll('.nm-node.service').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.nodeId;
        const serviceName = id.split('|')[1];
        renderService(phaseName, serviceName);
      });
    });
  }

  function renderService(phaseName, serviceName){
    measure();
    activePhase = phaseName;
    activeService = serviceName;
    activeUseCase = null;
    activeDomain = null;
    const phaseData = phases[phaseName];
    const service = phaseData.services.find(s => s.name === serviceName);
    if(!service) return;

    clear();
    updateBreadcrumb();
    updateSide();

    // Core, original position, dim, clickable
    createNode({
      id:'core', type:'core',
      x: getCoreCenter().cx, y: getCoreCenter().cy,
      label:'Sentient<br>Cities<br>CoE'
    });
    const cn = nodeMap.get('core');
    cn.el.style.cursor = 'pointer';
    cn.el.addEventListener('click', renderRoot);

    // ALL phases visible, active phase moves to focused position, others stable+dim
    const stablePhases = getPhasePositions();
    const focusedPos = getFocusedPhasePosition(phaseName);
    stablePhases.forEach(p => {
      const pdata = phases[p.name];
      const isActive = (p.name === phaseName);
      const id = 'phase:' + p.name;
      const pos = isActive ? focusedPos : p;
      createNode({
        id, type:'phase',
        x: pos.x, y: pos.y,
        label: p.name,
        sub: pdata.journeys.join(' · '),
        color: pdata.color
      });
      const n = nodeMap.get(id);
      if(isActive){
        n.el.addEventListener('click', () => renderPhase(p.name));
      } else {
        n.el.classList.add('dim');
        n.el.addEventListener('click', () => renderPhase(p.name));
      }
    });

    // ALL services of the active phase visible, radiating from FOCUSED phase.
    // Active service is positioned further out so use-cases have room to fan out.
    const fc2 = fieldCenter();
    const obstacles2 = [
      {x: fc2.cx, y: fc2.cy, type: 'core'},
      ...stablePhases.filter(p => p.name !== phaseName).map(p => ({x: p.x, y: p.y, type: 'phase'})),
      {x: focusedPos.x, y: focusedPos.y, type: 'phase'},
    ];
    const servicePositions = getServicePositions(phaseName, focusedPos, serviceName, obstacles2);
    servicePositions.forEach(sp => {
      const isActive = (sp.name === serviceName);
      const id = 'service:' + phaseName + '|' + sp.name;
      createNode({
        id, type:'service',
        x: sp.x, y: sp.y,
        label: sp.name,
        color: phaseData.color,
        dataObj: sp.data
      });
      const n = nodeMap.get(id);
      if(isActive){
        n.el.classList.add('active');
        n.el.addEventListener('click', () => renderPhase(phaseName));
      } else {
        n.el.classList.add('dim');
        n.el.addEventListener('click', () => renderService(phaseName, sp.name));
      }
    });

    // USE CASE BUBBLES branching off the active service.
    // Pass ALL existing nodes as collision obstacles so bubbles avoid them.
    const activeServicePos = servicePositions.find(sp => sp.name === serviceName);
    const obstacles3 = [
      {x: fc2.cx, y: fc2.cy, type: 'core'},
      ...stablePhases.filter(p => p.name !== phaseName).map(p => ({x: p.x, y: p.y, type: 'phase'})),
      {x: focusedPos.x, y: focusedPos.y, type: 'phase'},
      ...servicePositions.map(sp => ({x: sp.x, y: sp.y, type: 'service'})),
    ];
    const useCasePositions = getUseCasePositions(phaseName, serviceName, activeServicePos, obstacles3);
    useCasePositions.forEach((uc, i) => {
      const id = 'usecase:' + phaseName + '|' + serviceName + '|' + i;
      createNode({
        id, type:'usecase-bubble',
        x: uc.x, y: uc.y,
        label: uc.name,
        color: phaseData.color,
        dataObj: uc.data
      });
      // Wire click: select this use case
      const node = nodeMap.get(id);
      node.el.addEventListener('click', () => {
        if(activeUseCase === uc.name){
          // already selected, deselect
          activeUseCase = null;
          activeDomain = null;
        } else {
          activeUseCase = uc.name;
          activeDomain = null;
        }
        highlightActiveUseCase();
        updateBreadcrumb();
        updateSide();
      });
    });

    // Edges, render whole network with active firing path lit up brightly
    setTimeout(()=>{
      // Core -> phases (dim for inactive, lit for active)
      stablePhases.forEach(p => {
        const isActive = (p.name === phaseName);
        createEdge('core', 'phase:' + p.name, {
          particle: isActive,
          active: isActive,
          dim: !isActive
        });
      });
      // Active phase -> all its services (dim for inactive, lit for active)
      servicePositions.forEach(sp => {
        const isActive = (sp.name === serviceName);
        createEdge('phase:' + phaseName, 'service:' + phaseName + '|' + sp.name, {
          particle: isActive,
          active: isActive,
          dim: !isActive
        });
      });
      // Active service -> use case bubbles (all lit up)
      useCasePositions.forEach((uc, i) => {
        const id = 'usecase:' + phaseName + '|' + serviceName + '|' + i;
        createEdge('service:' + phaseName + '|' + serviceName, id, {
          active: true,
          particle: i % 2 === 0  // particle on alternate edges
        });
      });
    }, 120);
  }

  // Side panel update ------------------------------------------------------
  // Renders the right-side callout card based on current selection depth.
  // States:
  //   1. Root (nothing selected)            → CoE intro + lifecycle phases
  //   2. Phase selected                     → phase summary + journeys + domains + service lines
  //   3. Service selected                   → service definition + 1 unified use cases list (clickable)
  //   4. Use case selected                  → use case definition + linked domains (clickable)
  //   5. Use case + domain selected         → cross-domain example + benchmark
  function updateSide(){
    sideEl.style.transition = 'opacity .25s ease';
    sideEl.style.opacity = '0';
    setTimeout(()=>{
      sideBody.innerHTML = renderSideContent();
      wireSideHandlers();
      sideEl.style.opacity = '1';
    }, 200);
  }

  // When a use case is active, dim everything that isn't the active path.
  // Highlight: core (dim) → phase (dim) → service (dim, but visible) → active use-case bubble (bright)
  // Other use case bubbles dim, their connecting edges dim.
  function highlightActiveUseCase(){
    nodes.querySelectorAll('.nm-node.usecase-bubble').forEach(el => {
      const idParts = el.dataset.nodeId.split('|');
      const ucIndex = parseInt(idParts[idParts.length - 1], 10);
      // recover the use-case name from the dataObj attached to nodeMap
      const node = nodeMap.get(el.dataset.nodeId);
      const ucName = node && node.dataObj ? node.dataObj.name : null;
      const isActive = (activeUseCase != null && ucName === activeUseCase);
      if(activeUseCase == null){
        el.classList.remove('active','dim');
      } else if(isActive){
        el.classList.add('active');
        el.classList.remove('dim');
      } else {
        el.classList.add('dim');
        el.classList.remove('active');
      }
    });
    // Edges: highlight only the edge that ends at the active use case bubble
    edges.querySelectorAll('.edge').forEach(path => {
      // We don't track edge metadata in the SVG path directly,
      // but edgeList does. Find matching edge.
    });
    edgeList.forEach(e => {
      const isUseCaseEdge = e.toId.startsWith('usecase:');
      if(!isUseCaseEdge) return;
      const node = nodeMap.get(e.toId);
      const ucName = node && node.dataObj ? node.dataObj.name : null;
      const isActive = (activeUseCase != null && ucName === activeUseCase);
      if(activeUseCase == null){
        // restore baseline (all use case edges active)
        e.path.classList.remove('dim');
        e.path.classList.add('active');
        if(e.particle) e.particle.style.display = '';
      } else if(isActive){
        e.path.classList.remove('dim');
        e.path.classList.add('active');
        if(e.particle) e.particle.style.display = '';
      } else {
        e.path.classList.add('dim');
        e.path.classList.remove('active');
        if(e.particle) e.particle.style.display = 'none';
      }
    });
  }

  function renderSideContent(){
    // STATE 1, ROOT
    if(!activePhase){
      sideEl.style.setProperty('--sideColor', '#cdb4ff');
      const phaseChips = phaseList.map(p =>
        `<span class="pill nm-pill-clickable" data-action="phase" data-phase="${p}" style="border-color:${phases[p].color}66;color:${phases[p].color}">${p}</span>`
      ).join('');
      return `
        <div class="nm-side-tag">Lifecycle</div>
        <h3>Sentient Cities CoE</h3>
        <p>Click any phase node to expand it. Each click reveals the next layer of the network, services, use cases, and the domains where they apply.</p>
        <div class="nm-side-section">
          <div class="mini-label">Lifecycle phases</div>
          <div class="pill-row">${phaseChips}</div>
        </div>
        <div class="nm-side-section">
          <div class="mini-label">Domains covered</div>
          <div class="pill-row">
            <span class="pill">Mobility</span><span class="pill">Utilities</span>
            <span class="pill">Public Safety</span><span class="pill">Government Services</span>
            <span class="pill">Hospitality</span><span class="pill">Construction</span>
            <span class="pill">Smart Venue</span><span class="pill">Environment</span>
            <span class="pill">Healthcare</span><span class="pill">Media</span>
          </div>
        </div>`;
    }

    const phaseData = phases[activePhase];
    sideEl.style.setProperty('--sideColor', phaseData.color);

    // STATE 2, PHASE
    if(!activeService){
      const journeyChips = phaseData.journeys.map(j => `<span class="pill">${j}</span>`).join('');
      const domainChips = phaseData.domains.map(d => `<span class="pill">${d}</span>`).join('');
      const serviceChips = phaseData.services.map(s =>
        `<span class="pill nm-pill-clickable" data-action="service" data-service="${escapeAttr(s.name)}">${s.name}</span>`
      ).join('');
      return `
        <div class="nm-side-tag">Lifecycle phase</div>
        <h3>${activePhase}</h3>
        <p>${phaseData.summary}</p>
        <div class="nm-side-section">
          <div class="mini-label">Journeys</div>
          <div class="pill-row">${journeyChips}</div>
        </div>
        <div class="nm-side-section">
          <div class="mini-label">Linked domains</div>
          <div class="pill-row">${domainChips}</div>
        </div>
        <div class="nm-side-section">
          <div class="mini-label">Service lines</div>
          <div class="pill-row">${serviceChips}</div>
        </div>`;
    }

    const service = phaseData.services.find(s => s.name === activeService);
    if(!service) return '';

    // STATE 3, SERVICE (no use case yet)
    if(!activeUseCase){
      // ONE unified clickable use cases list (no duplicate sections)
      const useCaseChips = service.useCases.map(u =>
        `<span class="pill nm-pill-clickable" data-action="usecase" data-usecase="${escapeAttr(u.name)}">${u.name}</span>`
      ).join('');
      return `
        <div class="nm-side-tag">Service line</div>
        <h3>${service.name}</h3>
        <p>${service.domain}, part of ${activePhase}.</p>
        <div class="nm-side-section">
          <div class="mini-label">Use cases <span class="nm-side-hint">click to explore</span></div>
          <div class="pill-row">${useCaseChips}</div>
        </div>`;
    }

    const uc = service.useCases.find(u => u.name === activeUseCase);
    if(!uc) return '';

    // STATE 4, USE CASE (no domain yet)
    if(!activeDomain){
      const domainChips = Object.keys(uc.domains).map(d =>
        `<span class="pill nm-pill-clickable" data-action="domain" data-domain="${escapeAttr(d)}">${d}</span>`
      ).join('');
      return `
        <div class="nm-side-tag">Use case</div>
        <h3>${uc.name}</h3>
        <p>${uc.def}</p>
        <div class="nm-side-section">
          <div class="mini-label">Linked domains <span class="nm-side-hint">click for example &amp; benchmark</span></div>
          <div class="pill-row">${domainChips}</div>
        </div>`;
    }

    // STATE 5, USE CASE + DOMAIN
    const domainData = uc.domains[activeDomain];
    if(!domainData) return '';
    return `
      <div class="nm-side-tag">Use case · ${activeDomain}</div>
      <h3>${uc.name}</h3>
      <p>${uc.def}</p>
      <div class="nm-side-section">
        <div class="mini-label">Example deployment in ${activeDomain}</div>
        <div class="nm-side-block">${domainData.example}</div>
      </div>
      <div class="nm-side-section">
        <div class="mini-label">Implemented / benchmarked at</div>
        <div class="nm-side-block nm-side-bench">${domainData.benchmark}</div>
      </div>
      <div class="nm-side-section">
        <button type="button" class="nm-side-back" data-action="back-domain">‹ back to domains</button>
      </div>`;
  }

  function escapeAttr(s){return String(s).replace(/"/g,'&quot;');}

  function wireSideHandlers(){
    sideBody.querySelectorAll('[data-action]').forEach(el => {
      const action = el.dataset.action;
      el.addEventListener('click', () => {
        if(action === 'phase'){
          renderPhase(el.dataset.phase);
        } else if(action === 'service'){
          renderService(activePhase, el.dataset.service);
        } else if(action === 'usecase'){
          activeUseCase = el.dataset.usecase;
          activeDomain = null;
          highlightActiveUseCase();
          updateBreadcrumb();
          updateSide();
        } else if(action === 'domain'){
          activeDomain = el.dataset.domain;
          updateSide();
        } else if(action === 'back-domain'){
          activeDomain = null;
          updateSide();
        }
      });
    });
  }

  // Breadcrumb -------------------------------------------------------------
  function updateBreadcrumb(){
    const crumbs = [{label:'CoE', action: renderRoot}];
    if(activePhase) crumbs.push({label: activePhase, action: () => renderPhase(activePhase)});
    if(activeService) crumbs.push({label: activeService, action: () => renderService(activePhase, activeService)});
    if(activeUseCase) crumbs.push({label: activeUseCase, action: () => {
      activeDomain = null;
      updateSide();
    }});
    breadcrumb.innerHTML = '';
    crumbs.forEach((c, i) => {
      if(i > 0){
        const sep = document.createElement('span');
        sep.className = 'nm-crumb-sep';
        sep.textContent = '›';
        breadcrumb.appendChild(sep);
      }
      const el = document.createElement('span');
      el.className = 'nm-crumb' + (i === crumbs.length - 1 ? ' active' : '');
      el.textContent = c.label;
      if(c.action && i !== crumbs.length - 1){
        el.style.cursor = 'pointer';
        el.addEventListener('click', c.action);
      }
      breadcrumb.appendChild(el);
    });
  }

  // Particles --------------------------------------------------------------
  function spawnParticles(count){
    partLayer.innerHTML = '';
    for(let i = 0; i < count; i++){
      const p = document.createElement('div');
      p.className = 'nm-particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top  = Math.random() * 100 + '%';
      p.style.setProperty('--dx', (Math.random()*100 - 50) + 'px');
      p.style.setProperty('--dy', (Math.random()*-80 - 20) + 'px');
      p.style.animationDuration = (8 + Math.random() * 8) + 's';
      p.style.animationDelay = (-Math.random() * 10) + 's';
      partLayer.appendChild(p);
    }
  }

  // Init -------------------------------------------------------------------
  resetBtn.addEventListener('click', renderRoot);

  function bootIfReady(){
    if(wrap.offsetWidth > 0){
      spawnParticles(40);
      renderRoot();
      wrap.dataset.booted = '1';
    }
  }

  // Boot when offering view becomes visible
  document.querySelectorAll('[data-view="offering"], [data-jump="offering"]').forEach(b => {
    b.addEventListener('click', () => setTimeout(bootIfReady, 80));
  });
  if(document.getElementById('offering').classList.contains('active')) bootIfReady();

  // Re-render on resize (debounced)
  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      if(!wrap.dataset.booted) return;
      // Preserve full state through re-render
      const savedUseCase = activeUseCase;
      const savedDomain = activeDomain;
      if(activeService){
        renderService(activePhase, activeService);
        // Re-apply use case selection AFTER render (which clears it)
        if(savedUseCase){
          activeUseCase = savedUseCase;
          activeDomain = savedDomain;
          highlightActiveUseCase();
          updateBreadcrumb();
          updateSide();
        }
      }
      else if(activePhase) renderPhase(activePhase);
      else renderRoot();
    }, 200);
  });

  // ============================================================
  // PUBLIC API for cross-view navigation (from other views)
  // ============================================================
  window.offeringMapAPI = {
    gotoPhase(phaseName){
      bootIfReady();
      if(phases[phaseName]) renderPhase(phaseName);
    },
    gotoService(phaseName, serviceName){
      bootIfReady();
      if(phases[phaseName] && phases[phaseName].services.find(s => s.name === serviceName)){
        renderService(phaseName, serviceName);
      }
    },
    gotoUseCase(phaseName, serviceName, useCaseName, domainName){
      bootIfReady();
      if(!phases[phaseName]) return;
      const svc = phases[phaseName].services.find(s => s.name === serviceName);
      if(!svc) return;
      const ucIdx = svc.useCases.findIndex(u => u.name === useCaseName);
      if(ucIdx < 0) return;
      renderService(phaseName, serviceName);
      // Wait for render to complete then activate the use case
      setTimeout(() => {
        const ucNode = document.querySelector(
          `[data-node-id="usecase:${phaseName}|${serviceName}|${ucIdx}"]`
        );
        if(ucNode){
          ucNode.click();
          if(domainName){
            setTimeout(() => {
              const dPill = document.querySelector(
                `.uc-domain-pill[data-domain="${domainName}"]`
              );
              if(dPill) dPill.click();
            }, 280);
          }
        }
      }, 280);
    },
    reset(){ renderRoot(); }
  };
})();

/* ===========================
   DEMO LIBRARY
=========================== */
const phaseSwitches = document.getElementById('phaseSwitches');
const demoViews = document.getElementById('demoViews');

function buildDemoLibrary(){
  Object.entries(demoData).forEach(([phase, items], idx) => {
    const switchBtn = document.createElement('button');
    switchBtn.className = 'phase-switch' + (idx === 0 ? ' active' : '');
    switchBtn.textContent = phase;
    switchBtn.dataset.phase = phase;
    switchBtn.addEventListener('click', () => showDemoPhase(phase));
    phaseSwitches.appendChild(switchBtn);

    const wrapper = document.createElement('div');
    wrapper.className = 'demo-phase-view' + (idx === 0 ? ' active' : '');
    wrapper.id = 'demo-' + phase.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    wrapper.innerHTML = `
      <div class="card" style="margin-bottom:14px;">
        <div class="phase-tag" style="color:${phases[phase].color}">${phase}</div>
        <h3 style="margin:0 0 10px;font-family:'Space Grotesk';font-weight:700;color:${phases[phase].color};font-size:20px;">${phases[phase].summary}</h3>
        <div class="pill-row">${phases[phase].journeys.map(j => `<span class="pill">${j}</span>`).join('')}</div>
      </div>
      <div class="demo-grid">
        ${items.map(item => `
          <article class="demo-card">
            <div class="thumb" style="--thumbColor:${phases[phase].color}">
              <div class="thumb-bg"></div>
              <div class="thumb-icon" style="color:${phases[phase].color}">${demoIcons[item.icon] || ''}</div>
              <div class="thumb-label">${item.title}</div>
              <div class="play"></div>
            </div>
            <div class="demo-body">
              <h3>${item.title}</h3>
              <p>${item.usecase}</p>
              <div class="demo-meta">
                <span class="tag">${item.industry}</span>
                <span class="tag">${item.persona}</span>
                <span class="tag">${phase}</span>
              </div>
              <a class="demo-link" href="${item.link}" target="_blank" rel="noopener">Open demo link →</a>
            </div>
          </article>
        `).join('')}
      </div>
    `;
    demoViews.appendChild(wrapper);
  });
}
function showDemoPhase(phase){
  document.querySelectorAll('.phase-switch').forEach(btn => btn.classList.toggle('active', btn.dataset.phase === phase));
  document.querySelectorAll('.demo-phase-view').forEach(view => {
    view.classList.toggle('active', view.id === 'demo-' + phase.replace(/[^a-z0-9]+/gi, '-').toLowerCase());
  });
}
buildDemoLibrary();

/* ===========================
   BOOKING FORM
=========================== */
const bookingForm = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');
const visitDate = document.getElementById('visitDate');
const today = new Date();
visitDate.min = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;

// Open the date picker on any click within the date input (not just the icon).
// showPicker() is supported in modern Chromium, Safari 16.4+, Firefox 101+.
visitDate.addEventListener('click', (e) => {
  if(typeof visitDate.showPicker === 'function'){
    try { visitDate.showPicker(); } catch(_){}
  }
});
// Also trigger when the field receives keyboard focus from tab navigation
visitDate.addEventListener('focus', () => {
  if(typeof visitDate.showPicker === 'function'){
    try { visitDate.showPicker(); } catch(_){}
  }
});

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(bookingForm).entries());
  formSuccess.style.display = 'block';
  formSuccess.innerHTML = `<strong>Request captured.</strong><br>${data.name || 'Your team'} requested a <strong>${data.visitType || 'visit'}</strong> focused on <strong>${data.phase}</strong> / <strong>${data.industry}</strong> for <strong>${data.date}</strong> at <strong>${data.time}</strong>.`;
});

document.getElementById('sampleFill').addEventListener('click', () => {
  bookingForm.name.value = 'Aisha Alharbi';
  bookingForm.email.value = 'aisha@example.com';
  bookingForm.organization.value = 'Sample Development Authority';
  bookingForm.role.value = 'Director of Strategy';
  bookingForm.visitType.value = 'Executive walkthrough';
  bookingForm.phase.value = 'Operate & Govern';
  bookingForm.industry.value = 'Mobility';
  bookingForm.persona.value = 'Public Authority';
  const future = new Date();
  future.setDate(future.getDate() + 10);
  bookingForm.date.value = future.toISOString().slice(0,10);
  bookingForm.time.value = '10:00–11:00';
  bookingForm.objectives.value = 'Interested in command and control, mobility orchestration, public safety analytics, and how the CoE supports Vision 2030-aligned destination operations.';
});
