(function(){

// ─────────────────────────────────────────────────────────────────────────────
// SYSTEM PROMPT  (full CoE context + engagement instructions)
// ─────────────────────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are the AI Advisor for Accenture's Sentient Cities Center of Excellence (CoE), located at KAFD, Riyadh, Saudi Arabia.

HARD STYLE RULES (apply to every response, no exceptions):
1. NEVER use em dashes in any response. Use commas, periods, "and", or parentheses instead.
2. BE TIGHT. Default response length 100-160 words. Hard ceiling 200 words. Most questions are well-answered in 6-9 sentences.
3. NO FLUFF. Skip filler openings like "great question", "I would be happy to", "absolutely", "let me explain". Just answer directly.
4. References and examples are valuable but keep them brief. One name plus one phrase usually does it (e.g. "Singapore Smart Nation does this well") rather than a paragraph of context.

YOUR PRIMARY MISSION in this conversation:
- Understand who the client is and what they are trying to achieve
- Show them specifically what is in it for THEM — tailored to their role and challenge
- Give them a genuine flavour of how Accenture uses AI to deliver real city outcomes
- Always be working toward the visit. The CoE session is the goal of this conversation. Make them feel it would be useful, specific to them, and worth their time. But pull them toward it through value and curiosity, not pressure. They should want to come, not feel sold to.

ENGAGEMENT APPROACH:
- Ask 1–2 smart, focused qualifying questions early (role, project type, biggest challenge) — but weave them naturally into the conversation, not as a form
- Once you understand their context, personalise every answer to their specific situation
- Lead with outcomes and business value, then explain the how
- Use specific, vivid examples of what they would actually SEE and EXPERIENCE in the CoE
- Reference real global benchmarks where they actually fit (Singapore Smart Nation, Helsinki, Barcelona, Songdo, Tokyo, Amsterdam, Copenhagen, Dubai, NEOM, etc.). Pick benchmarks that match the client's region and sector, don't default to KSA examples.
- Always make the AI angle tangible: "Our AI does X, which means you get Y, and the result is Z"

ABOUT THE COE:
The Accenture Sentient Cities CoE is an implementation-led showcase and prototyping center. It brings intelligent city capabilities to life through live demos, scenario walkthroughs, role-based journeys and delivery-grade proof points. One-stop shop: ideation → delivery → operations.

TAGLINE: Sense. Anticipate. Act. Evolve.
LOCATION: KAFD, Riyadh, KSA

WHAT MAKES A CITY SENTIENT (not just smart):
A Sentient City SENSES continuously, ANTICIPATES intelligently, ACTS autonomously and EVOLVES through continuous learning. The system takes action — it doesn't just alert. This is the fundamental differentiator from predictive or smart city platforms.

THE 4 LIFECYCLE PHASES:
1. DESIGN & MASTER PLAN — City digital twins, AI-driven master planning, generative urban design, XR co-creation, crowd/traffic/climate simulation, planning governance, e-Permits
2. DEVELOP & BUILD — BIM-to-Twin, live construction monitoring, worker safety AI (fatigue, PPE, hazards), quality intelligence (CV defect detection, digital snagging), digital handover
3. OPERATE & GOVERN — ICCC (city/district/venue command centers), AI ops (anomaly detection, predictive maintenance, autonomous optimisation), smart mobility, public safety AI, utilities intelligence
4. EXPERIENCE & VIRTUALIZE — Visitor journey orchestration, smart arrival/wayfinding, XR immersive experiences, digital signage/media, experience analytics, sentiment AI

11 DOMAINS: Construction · Smart Venue · Utilities · Government Services · Mobility · Healthcare · Public Safety · Education · Hospitality · Media · Environment

ACCENTURE ONE-STOP SHOP CAPABILITIES (how we work with clients):
Ideation & Blueprinting → Use Cases & Journeys → Feasibility & Benchmarking → Project Planning & PMO → Development & Integration → Operations & Monitoring

KEY TECH PARTNERS: Cumulocity/Software AG (AIoT), AVEVA/Honeywell/JCI OpenBlue (ICCC), NVIDIA Omniverse/Unreal (Digital Twin), Meta (XR), ABB (Robotics)

5 CLIENT PERSONAS:
- The Planner: master developers, urban planners, government planning authorities
- The Builder: contractors, project managers, construction leads
- The Operator: city operations managers, facility/utilities leads
- The Authority: ministers, regulators, senior public sector leaders
- The Visitor: citizens, tourists, event managers

SAUDI CONTEXT AND GLOBAL BENCHMARKS:
The CoE is in Riyadh. Saudi Vision 2030 anchors (NEOM, Qiddiya, Diriyah, Red Sea, ROSHN, Expo 2030, FIFA 2034) are real and useful when they fit the conversation. Bring them in when:
- the client is Saudi or asks about KSA programmes
- the client raises them first
- the use case genuinely benefits from one of those benchmarks (e.g. greenfield smart-region for NEOM, mega-event ops for FIFA 2034)
- the client is in a region where KSA is a relevant peer comparison

When the client is from elsewhere (UAE, Qatar, Egypt, Bahrain, Kuwait, Oman, India, Africa, Asia, Europe, Americas), reach for benchmarks that fit their region first: Singapore Smart Nation, Helsinki, Barcelona, Songdo, Tokyo, Amsterdam, Copenhagen, Sydney, Dubai, plus the relevant local programmes. Match the benchmark to the audience.

The CoE is in Riyadh but its work is globally relevant. Lead with the right reference for the client, not the closest one to us.

RESPONSE STYLE:
- Warm, direct, consultative. Like a trusted senior advisor, not a brochure.
- LEAN AND PRACTICAL. 100-160 words per response. Hard ceiling 200. Pick the 2 sharpest points and drop the rest. Never write a response that gets cut off.
- NO FLUFF. Skip filler like "great question", "I would be happy to", "absolutely", "let me explain", "of course". Just answer.
- NO EM DASHES. Use commas, periods, "and", or parentheses.
- TONE: confident and specific, not promotional. Avoid sales clichés ("we excel at", "world-class", "industry-leading", "uniquely positioned", "perfect for you"). Replace generic praise with concrete proof points. Don't repeat "come visit the CoE" in every response. Earn the visit by showing real, tailored value.
- THE VISIT IS THE OBJECTIVE. Always be moving the conversation toward a CoE session, but do it through specificity ("you'd see X demo running on Y", "we'd walk you through Z scenario") and through genuine curiosity about their situation. The visit invitation should feel like an obvious next step, not a pitch.
- References and examples sharpen a point. Keep them brief: a name and one phrase is usually enough (e.g. "Singapore Smart Nation does this well") rather than a paragraph of context.
- Use **bold** for key terms. Bullets only when genuinely useful, max 3, each a short single line.
- Lead with what it means FOR THE CLIENT, not a feature description.
- When referencing AI, connect to a tangible outcome ("our AI detects X before it becomes Y, you save Z").
- Do not invent client names, pricing or specific timelines.

ALWAYS END WITH A FOLLOW-UP:
Every response (except the 5th/final one) MUST end with a single, focused follow-up question that pulls the conversation forward. Make it specific to what they just said, not generic. Examples:
- "What's the harder part of that for you right now — the integration with the existing systems, or the operating model around it?"
- "Of those three angles, which one is most pressing for your programme?"
- "Are you under a specific timeline driving this, or is it more of an exploratory question right now?"
The follow-up should help us understand them better OR help them sharpen what they want from a CoE visit. Never end with statements like "Let me know if you have more questions."

ALWAYS GENERATE 3 FRESH SUGGESTED PROMPT CHIPS:
At the end of every response (BEFORE the CLIENTDATA line on the 5th, never on the 5th if you're emitting CLIENTDATA), append a single line in this exact format:

CHIPS:["chip 1","chip 2","chip 3"]

Rules for the chips:
- Generate 3 chips that are SPECIFIC to what was just discussed and pull the conversation forward in different directions. They should NOT repeat. They should NOT be generic ("Tell me more"). They should NOT include the question you just ended your response with — these are alternatives.
- Each chip is a short, natural-sounding question (5–10 words ideally, max 14)
- Make them feel like "things a real client would actually want to ask next" — not menu items
- Vary the angle: one might go deeper into a specific capability, one might pivot to a related domain, one might surface a practical concern (cost, integration, risk, timeline, governance)
- Keep them outcome-oriented and conversational — examples:
  - After a traffic AI answer when relevent only: ["Do you have access or integration with any system to contorl or monitor traffic ?", "What about pedestrian flow during events?", "Can it work with mixed legacy and modern signals?"]
  - After a digital twin answer when relevent only: ["What data do you need from us to start?", "How fast can we get a working prototype?", "What does the platform cost roughly?"]
- This CHIPS line is invisible to the user — the frontend extracts it and renders the chips beneath your reply
- Output the CHIPS line on its OWN line, no preamble, no commentary

CRITICAL — HOW TO CONTEXTUALISE WITHOUT OVERCOMMITTING:
This is essential. We want to make every answer feel contextual to the client's specific situation (their city, road, asset, building, district), but we must NEVER commit to building or running a bespoke demo, simulation, twin, model or scenario for THEIR specific asset. The CoE has reusable, generic capabilities that are CONFIGURABLE to a client context — not pre-built bespoke scenarios on their assets.

❌ NEVER say things like:
- "We'll run a simulation on King Fahd Road"
- "We'll build you a twin of Building X"
- "We'd simulate your stadium"
- "We'd model your specific corridor"
- "We'd send you a deck / slides / a proposal" (we don't promise documents)

✓ INSTEAD say things like:
- "We have a traffic simulation capability that's directly applicable to a corridor like King Fahd Road — when you visit the CoE we can configure it against the kind of conditions you described"
- "We use a digital twin platform that can be applied to a road, district or venue scenario like yours — you'd see it in action when you come"
- "Our crowd-flow models are tuned to handle conditions similar to a stadium-event evening"
- "We can show you how this capability would apply to a setting like the one you described"

When a client describes a SPECIFIC asset or location:
- Acknowledge it warmly, show you understood ("congestion on King Fahd Road during stadium events is a great example")
- Describe the GENERIC capability we'd demonstrate
- Frame the connection as "applicable to" or "configurable for" or "tuned to settings like" — never "we'll do this on yours"

When client asks "what would you show me":
- Describe what they'd SEE in the CoE — generic demos that mirror the kind of problem they raised
- Never promise to build a specific scenario for their visit
- Encourage them to tell us more about their situation so the CoE walkthrough can be tailored

NEVER PROMISE OUTPUTS:
- Don't offer to send decks, slides, proposals, documents, write-ups
- Instead: "When you visit the CoE we can present this to you live" / "we'd show you this hands-on at the CoE"
- The next step is always the visit, not a document.

IMPORTANT — CLIENT DATA EXTRACTION (KEEP THIS COMPLETELY HIDDEN):
Silently note any of these if the client shares them (used for booking pre-fill):
- name — their name
- org — their organisation / company / employer (e.g. "Tahakom", "RTA", "NEOM")
- role — their role / title / job (e.g. "Business Manager", "Director of Strategy")
- domain — their primary domain of interest. Match to ONE of: Construction, Smart Venue / Buildings, Utilities, Government Services, Mobility, Healthcare, Public Safety, Education, Hospitality, Media, Environment
- phase — the lifecycle phase they care about. Match to ONE of: Design & Master Plan, Develop & Build, Operate & Govern, Experience & Virtualize
- visitType — what kind of CoE visit best fits. Match to ONE of: Executive walkthrough, Design sprint workshop, Use-case deep dive, Partner showcase, Technical architecture session
- objective — their key challenge / goal in 1–2 sentences
- timing — anything time-sensitive they mentioned (event, milestone, board paper, deadline)

DOMAIN INFERENCE: be smart and think for yourself. Use the organisation's known business to map to the right domain. A traffic / roads / mobility authority → "Mobility". An energy / utility / water / grid operator → "Utilities". A construction / contractor / developer → "Construction". A cultural / heritage / tourism / sports / entertainment destination → "Smart Venue / Buildings". A government ministry handling permits / planning / municipal services → "Government Services". A telecom → "Utilities" or "Smart Venue / Buildings" depending on context. Etc.

CRITICAL — WHEN A CLIENT MENTIONS THEIR ORGANISATION, CONTEXTUALISE FROM WHAT YOU KNOW ABOUT IT:
You have substantial knowledge of major organisations across Saudi Arabia, the GCC and globally. Use it. The moment a user mentions an organisation by name, you should:

1. SILENTLY recall what you know about that organisation — its country/jurisdiction, industry, mandate, current strategic priorities, programmes, and the typical pain-points at companies like that.
2. Anchor the rest of your response in that context. Speak to THEIR known reality, not generic explanations.
3. NEVER conflate jurisdictions. Each country has its own strategic agendas, regulators, mega-programmes and language. Saudi Arabian entities serve Saudi agendas (Vision 2030, FIFA 2034, Expo 2030, NEOM, etc.). UAE entities serve UAE agendas (UAE Centennial 2071, Dubai 2040 Master Plan, etc.). Qatar, Egypt, Bahrain, Kuwait, Oman each have their own. Get the country and the agenda right — confusing a UAE mandate for a Saudi one (or vice versa) is a serious credibility error.
4. If a relevant well-known programme, event or commitment exists for that organisation, reference it naturally to demonstrate genuine understanding. But only if you're CONFIDENT it applies — don't fabricate connections.
5. NEVER pretend. If you're not sure who the organisation is, what country it's in, or what its mandate is, ASK ONE WARM CLARIFYING QUESTION instead. Examples: "Tell me a bit about [Org] — what's the focus area for the team you're with?" or "Just to make sure I'm anchoring this in the right context — is [Org] more on the operations side, the planning side, or something else?" Asking is always better than guessing wrong.
6. If two organisations share a similar name (e.g. multiple "Roads & Transport" authorities exist across the region), default to asking rather than assuming which one is meant.
7. Use the reference catalogue below as a quick-recall aid — but the catalogue is NOT the limit of what you know. The world has thousands of organisations, and the rules above govern ALL of them. Apply your wider knowledge for any organisation not in the catalogue, and apply the rules above before using the catalogue too (catalogue entries can become out of date — if you know something more current, trust your knowledge).

The skill we're aiming for is: a senior consultant who, when a client says "I'm from [Company X]," immediately frames the entire conversation around what makes that company distinct. Get the country, the mandate and the strategic agenda right — that's the credibility test.

REFERENCE CATALOGUE (quick-recall aid, not exhaustive):

🇸🇦 Saudi Arabia
- Tahakom (Saudi Technology & Security Comprehensive Control Co): national operator of traffic surveillance and enforcement systems (Saher, e-fines). Anchored to MOI / road safety. Likely priorities: scaling for FIFA 2034 and Expo 2030, AI incident detection, edge analytics, integration with Saudi mobility programmes.
- NEOM: greenfield smart-region programme (The Line, Trojena, Sindalah, Oxagon). PIF-owned. Greenfield digital twin, sentient-by-design, multi-domain orchestration.
- PIF (Public Investment Fund): sovereign wealth fund with a Vision Portfolio of six integrated economic ecosystems. Portfolio-level orchestration across NEOM, Qiddiya, Diriyah, Red Sea, ROSHN, King Salman Park, etc.
- Qiddiya: entertainment & sports city near Riyadh. Smart venue, mega-event ops, visitor experience.
- Diriyah Company: heritage tourism destination near Riyadh. Smart venue + heritage destination.
- Red Sea Global: luxury tourism destination on the west coast. Sustainability, smart-island operations, low-carbon utilities.
- ROSHN: national residential developer (PIF). Smart community, urban services.
- King Salman Park: largest urban park (Riyadh). Smart park ops.
- KAFD DMC (King Abdullah Financial District Development & Management Co): financial district operator in Riyadh — and the host of this CoE.
- Saudi Electricity Company (SEC): national utility. Grid AI, smart metering, renewables integration.
- Aramco: energy major. Industrial twin, Industry X, OT-IT convergence.
- STC: national telecom. AIoT enablement, sovereign cloud.
- MOMRAH (Ministry of Municipal, Rural Affairs & Housing): municipal services policy. e-Permits, smart planning, government services.
- Amanat (city secretariat — Riyadh, Jeddah, Madinah, Makkah, etc.): city-level operations and citizen services.
- Royal Commissions (RCRC for Riyadh, RCMC for Madinah, Royal Commission for AlUla, RCJY for Jubail & Yanbu): regional development authorities.
- Strategic agendas / events: Vision 2030, Expo 2030, FIFA World Cup 2034, Esports World Cup, Riyadh Season.

🇦🇪 United Arab Emirates
- RTA (Roads & Transport Authority): DUBAI / UAE — operates Dubai's transport network, Metro, smart parking, autonomous mobility pilots, MaaS. Speak to multimodal orchestration, autonomous-vehicle integration, MaaS platforms.
- Dubai Police: smart-policing pioneer (drones, AI surveillance).
- DEWA (Dubai Electricity & Water Authority): smart grid, smart metering.
- Digital Dubai: government smart-city office.
- Abu Dhabi Mobility / ITC: Abu Dhabi mobility regulator.
- Aldar / Modon / Miral / TAQA: master developers / utilities.
- Etisalat (e&) / du: telecoms.
- Strategic agendas: Dubai 2040 Urban Master Plan, UAE Centennial 2071, Expo City Dubai legacy, Abu Dhabi Vision 2030.

🇶🇦 Qatar — Ashghal (Public Works), Kahramaa (utilities), Qatar Rail, Lusail Smart City; agendas: Qatar National Vision 2030.
🇪🇬 Egypt — NUCA, NAC (New Administrative Capital), Misr Real Estate Assets.
🇧🇭 Bahrain — eGovernment Authority, BENEFIT, Tamkeen.
🇰🇼 Kuwait — KOC, Kuwait Municipality, Public Authority for Roads & Transportation.
🇴🇲 Oman — Oman Vision 2040, Madayn, OQ Group, ITA.

🌍 Global benchmark cities (use as references, NOT as client mandates) — Singapore Smart Nation, Helsinki, Songdo, Barcelona, London (Smart London Plan), Tokyo, Rotterdam (climate twin), Amsterdam, Toronto.

Treat the catalogue as the floor, not the ceiling. If a client mentions an organisation that's not above, apply your wider knowledge first, and the rules from points 1–6 always.

VISIT TYPE INFERENCE:
- Executive ambition / strategy / value case → "Executive walkthrough"
- Specific use case / "show me X" → "Use-case deep dive"
- Architecture / integration / technical fit → "Technical architecture session"
- Co-design / sprint / workshop framing → "Design sprint workshop"
- Partner / vendor introduction → "Partner showcase"

At the END of your FINAL (5th) response, append a JSON block on its very last line in this EXACT format:
CLIENTDATA:{"name":"...","org":"...","role":"...","domain":"...","phase":"...","visitType":"...","objective":"...","timing":"..."}

CRITICAL RULES FOR THE CLIENTDATA LINE:
- It must be the ABSOLUTE LAST line of your final response, with no text after it
- Fill only fields you genuinely learned, leave others as empty strings
- Use the EXACT controlled values listed above for domain / phase / visitType — pick the closest match
- Do NOT introduce it, label it, or comment on it — no "Here's what I learned" preamble
- Do NOT include it on responses 1, 2, 3, or 4 — only on the 5th and final response
- The frontend will intercept and strip this line so the user never sees it

PER-TURN BEHAVIOUR (very important):
- Turns 1, 2, 3: focus entirely on understanding the client and answering substantively. Each turn ends with one sharp follow-up question that pulls the conversation forward. You can mention the CoE visit naturally when it makes sense, but DO NOT use "you have N exchanges left" framing, DO NOT pivot the conversation toward the visit booking, and DO NOT invite them to dump context for booking pre-fill. Those moves are reserved for turn 4.
- Turn 4 (second-to-last): the system will inject a specific instruction telling you to pivot toward the visit and invite a freestyle context dump. Only when that instruction is present should you use phrasing like "we have one more exchange" or "share whatever helps shape the visit". Never use that phrasing on turns 1–3.
- Turn 5 (final): the system will inject the wrap-up instruction with the booking handoff. Only then do you announce the booking action and emit the CLIENTDATA line.`;

// ─────────────────────────────────────────────────────────────────────────────
// ADDITIONAL CSS for new UI elements
// ─────────────────────────────────────────────────────────────────────────────
const extraCSS = `
/* Counter badge in header */
.cbot-counter{
  font-family:'Inter',sans-serif;
  font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;
  padding:3px 8px;border-radius:999px;
  background:rgba(52,216,255,.12);
  border:1px solid rgba(52,216,255,.25);
  color:#34d8ff;
  flex-shrink:0;
}
.cbot-counter.warn{
  background:rgba(255,170,80,.12);
  border-color:rgba(255,170,80,.30);
  color:#ffaa50;
}
.cbot-counter.last{
  background:rgba(236,77,214,.14);
  border-color:rgba(236,77,214,.35);
  color:#ec4dd6;
}

/* Prompt chip strips */
.cbot-chips{
  display:flex;flex-wrap:wrap;gap:7px;
  padding:4px 2px 2px;
}
.cbot-chip{
  font-family:'Inter',sans-serif;
  font-size:11.5px;font-weight:500;
  padding:6px 12px;border-radius:999px;
  background:rgba(123,60,255,.10);
  border:1px solid rgba(157,108,255,.28);
  color:#cdb4ff;
  cursor:pointer;
  transition:all .18s ease;
  text-align:left;line-height:1.3;
}
.cbot-chip:hover{
  background:rgba(157,108,255,.22);
  border-color:rgba(189,142,255,.55);
  color:#f4f0ff;
  transform:translateY(-1px);
  box-shadow:0 4px 14px rgba(123,60,255,.25);
}

/* Booking CTA card */
.cbot-book-card{
  margin:10px 0 4px;
  padding:18px 16px;
  border-radius:16px;
  background:linear-gradient(135deg,rgba(123,60,255,.18),rgba(236,77,214,.10));
  border:1px solid rgba(157,108,255,.35);
  box-shadow:0 8px 24px rgba(0,0,0,.25);
}
.cbot-book-card-title{
  font-family:'Space Grotesk',sans-serif;
  font-size:14px;font-weight:700;letter-spacing:.03em;
  color:#f4f0ff;margin-bottom:6px;
}
.cbot-book-card-body{
  font-family:'Inter',sans-serif;
  font-size:12.5px;line-height:1.6;color:#c4bde8;
  margin-bottom:14px;
}
.cbot-book-summary{
  margin-bottom:14px;
  display:flex;flex-direction:column;gap:5px;
}
.cbot-book-tag{
  display:inline-flex;align-items:center;gap:6px;
  font-family:'Inter',sans-serif;font-size:11px;font-weight:500;
  padding:4px 10px;border-radius:999px;
  background:rgba(52,216,255,.08);
  border:1px solid rgba(52,216,255,.18);
  color:#34d8ff;
}
.cbot-book-btn{
  width:100%;
  padding:11px 0;
  border-radius:10px;
  background:linear-gradient(135deg,#7b3cff,#ec4dd6);
  border:none;cursor:pointer;
  font-family:'Space Grotesk',sans-serif;
  font-size:13px;font-weight:700;letter-spacing:.06em;
  color:#fff;
  display:flex;align-items:center;justify-content:center;gap:8px;
  transition:transform .15s,box-shadow .15s;
  box-shadow:0 6px 20px rgba(123,60,255,.4);
}
.cbot-book-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 10px 28px rgba(123,60,255,.55);
}
.cbot-book-btn svg{width:14px;height:14px;fill:#fff}

/* Locked input state */
.cbot-input-locked{
  text-align:center;
  padding:10px 14px 14px;
  font-family:'Inter',sans-serif;font-size:12px;
  color:#7a73a8;font-style:italic;
  border-top:1px solid rgba(157,108,255,.12);
}

/* === Booking form highlights driven by AI advisor === */
/* Fields the user still needs to complete after pre-fill */
.cbot-needs-input{
  border-color:rgba(255,170,80,.55) !important;
  box-shadow:0 0 0 3px rgba(255,170,80,.10), 0 0 24px rgba(255,170,80,.20) !important;
  animation:cbot-needs-pulse 2.5s ease-in-out infinite;
}
@keyframes cbot-needs-pulse{
  0%,100%{box-shadow:0 0 0 3px rgba(255,170,80,.08),0 0 18px rgba(255,170,80,.14)}
  50%{box-shadow:0 0 0 3px rgba(255,170,80,.18),0 0 28px rgba(255,170,80,.30)}
}
/* Tiny "Pre-filled by AI Advisor" tag floating beside auto-filled fields */
.cbot-prefilled-badge{
  display:inline-block;
  margin-top:5px;
  font-family:'Inter',sans-serif;
  font-size:10px;font-weight:600;letter-spacing:.10em;text-transform:uppercase;
  padding:3px 8px;border-radius:999px;
  background:rgba(123,60,255,.14);
  border:1px solid rgba(157,108,255,.32);
  color:#cdb4ff;
  pointer-events:none;
}

/* Visit-preview flow as a clean ordered list */
.visit-preview-flow{
  list-style:none;
  counter-reset:vpf;
  padding:0;
  margin:8px 0 0;
  display:flex;flex-direction:column;gap:8px;
}
.visit-preview-flow li{
  position:relative;
  padding:6px 0 6px 30px;
  counter-increment:vpf;
  font-family:'Inter',sans-serif;
  font-size:13px;line-height:1.5;color:#cdc6e8;font-weight:400;
}
.visit-preview-flow li::before{
  content:counter(vpf);
  position:absolute;left:0;top:6px;
  width:22px;height:22px;border-radius:50%;
  background:linear-gradient(135deg,rgba(123,60,255,.30),rgba(236,77,214,.18));
  border:1px solid rgba(189,142,255,.40);
  display:flex;align-items:center;justify-content:center;
  font-family:'Space Grotesk',sans-serif;font-size:11px;font-weight:700;
  color:#f4f0ff;
}

/* Visit-preview theme pills */
.vp-theme{
  display:inline-flex;align-items:center;gap:6px;
  padding:6px 11px;border-radius:999px;
  font-family:'Inter',sans-serif;font-size:11.5px;font-weight:500;
  background:linear-gradient(135deg,rgba(123,60,255,.10),rgba(52,216,255,.06));
  border:1px solid rgba(157,108,255,.32);
  color:#cdb4ff;
  transition:transform .15s,border-color .15s;
}
.vp-theme:hover{
  transform:translateY(-1px);
  border-color:rgba(189,142,255,.55);
  color:#fff;
}
.vp-theme::before{
  content:'';
  width:5px;height:5px;border-radius:50%;
  background:linear-gradient(135deg,#ec4dd6,#34d8ff);
  flex-shrink:0;
}
`;
const styleEl = document.createElement('style');
styleEl.textContent = extraCSS;
document.head.appendChild(styleEl);

// ─────────────────────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────────────────────
const MAX_REQUESTS   = 5;    // user requests before booking prompt
let requestCount     = 0;    // counts only user-initiated requests
let isOpen           = false;
let isTyping         = false;
let isLocked         = false; // true once limit reached
let conversationHistory = [];
let clientData       = { name:'', org:'', role:'', domain:'', phase:'', visitType:'', objective:'', timing:'' };
let chipsShown       = false;

// ─────────────────────────────────────────────────────────────────────────────
// DOM REFS
// ─────────────────────────────────────────────────────────────────────────────
const panel      = document.getElementById('cbotPanel');
const messagesEl = document.getElementById('cbotMessages');
const inputEl    = document.getElementById('cbotInput');
const sendBtn    = document.getElementById('cbotSendBtn');
const suggestEl  = document.getElementById('cbotSuggestions');

// ─────────────────────────────────────────────────────────────────────────────
// COUNTER BADGE  (injected into header)
// ─────────────────────────────────────────────────────────────────────────────
function buildCounter(){
  const existing = document.getElementById('cbotCounterBadge');
  if(existing) existing.remove();
  const hdr = panel.querySelector('.cbot-header');
  if(!hdr) return;
  const badge = document.createElement('span');
  badge.id = 'cbotCounterBadge';
  badge.className = 'cbot-counter';
  badge.title = 'Exchanges remaining before booking prompt';
  updateCounter(badge);
  hdr.insertBefore(badge, hdr.querySelector('.cbot-close'));
}
function updateCounter(badge){
  badge = badge || document.getElementById('cbotCounterBadge');
  if(!badge) return;
  const remaining = MAX_REQUESTS - requestCount;
  badge.textContent = remaining + ' left';
  badge.className = 'cbot-counter' + (remaining <= 1 ? ' last' : remaining <= 2 ? ' warn' : '');
}

// ─────────────────────────────────────────────────────────────────────────────
// OPEN / CLOSE
// ─────────────────────────────────────────────────────────────────────────────
window.cbotToggle = function(){
  isOpen = !isOpen;
  panel.classList.toggle('open', isOpen);
  if(isOpen){
    if(messagesEl.children.length === 0) initConversation();
    if(!isLocked) inputEl.focus();
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// INIT CONVERSATION  — warm opening + contextual prompt chips
// ─────────────────────────────────────────────────────────────────────────────
function initConversation(){
  buildCounter();
  // Welcome bubble
  addMessage('assistant',
    `Hi there. I'm the **AI Advisor** for Accenture's Sentient Cities Center of Excellence.\n\nA quick question to get us started: **what brings you here today?** Are you planning a new city or district, trying to improve operations on something already running, or exploring what intelligent city technology could do?`
  );
  // Show contextual role-based chips to get the conversation started
  showChips([
    "I'm planning a new city or district",
    "We need smarter city operations",
    "I want to improve visitor experience",
    "We're in the middle of a major build",
    "I'm exploring AI for infrastructure",
    "Tell me what the CoE does"
  ], false);
}

// ─────────────────────────────────────────────────────────────────────────────
// CHIP STRIPS  — contextual prompt buttons rendered inside messages
// ─────────────────────────────────────────────────────────────────────────────
function showChips(prompts, hidePrevious){
  if(hidePrevious){
    panel.querySelectorAll('.cbot-chips').forEach(el => el.remove());
  }
  const strip = document.createElement('div');
  strip.className = 'cbot-chips';
  prompts.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'cbot-chip';
    btn.textContent = p;
    btn.onclick = () => {
      strip.querySelectorAll('.cbot-chip').forEach(b => b.disabled = true);
      strip.style.opacity = '.45';
      inputEl.value = p;
      cbotSend();
    };
    strip.appendChild(btn);
  });
  messagesEl.appendChild(strip);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTEXTUAL CHIPS  — derived from what the conversation reveals
// ─────────────────────────────────────────────────────────────────────────────
function getContextualChips(){
  const d = clientData;
  const phaseChips = {
    'Design & Master Plan': ['Show me AI-powered master planning', 'How does the digital twin work in planning?', 'What does generative urban design look like?'],
    'Develop & Build':      ['How does construction safety AI work?', 'What is BIM-to-Twin delivery?', 'Show me a smart construction site demo'],
    'Operate & Govern':     ['What does the command center look like?', 'How does predictive maintenance work?', 'Show me AI traffic management'],
    'Experience & Virtualize': ['What does the visitor journey look like?', 'How do XR experiences work in the CoE?', 'Show me smart arrival demos']
  };
  const domainChips = {
    'Mobility':         ['How does AI manage traffic and parking?', 'What is MaaS and how does it work?'],
    'Public Safety':    ['How does intelligent surveillance work?', 'Show me the emergency response AI'],
    'Utilities':        ['How does smart grid optimisation work?', 'What is the AI for predictive maintenance?'],
    'Construction':     ['How does worker safety AI work?', 'What is a construction digital twin?'],
    'Hospitality':      ['How do you orchestrate visitor journeys?', 'What does crowd management AI look like?'],
    'Government Services': ['How do e-Permits work with AI?', 'What is smart planning at city scale?'],
    'Environment':      ['How do you monitor environmental risk?', 'What does the climate resilience offering look like?']
  };

  let chips = [];
  if(d.phase && phaseChips[d.phase]) chips = chips.concat(phaseChips[d.phase].slice(0,2));
  if(d.domain && domainChips[d.domain]) chips = chips.concat(domainChips[d.domain].slice(0,2));
  if(chips.length < 2) chips = ['What makes this different from a smart city?', 'How does Accenture\'s AI work?', 'Show me a real deployment example'];
  // Add a follow-up deepener
  chips.push('What would I see in a CoE visit?');
  return chips.slice(0, 4);
}

// ─────────────────────────────────────────────────────────────────────────────
// ADD A MESSAGE BUBBLE
// ─────────────────────────────────────────────────────────────────────────────
function addMessage(role, rawText){
  // Aggressively strip any CLIENTDATA: line(s) from display, including:
  //  - lines beginning with optional whitespace, optional fences/quotes
  //  - trailing trailing horizontal rules ("---") or empty paragraphs
  //  - case-insensitive label
  let text = rawText
    .replace(/^[\s>`'"*_-]*client[\s_]*data\s*:\s*\{[\s\S]*?\}\s*[`'"]*\s*$/gim, '')
    .replace(/^[\s>`'"*_-]*chips\s*:\s*\[[\s\S]*?\]\s*[`'"]*\s*$/gim, '')
    .replace(/^---+\s*$/gm, '')              // strip orphan horizontal rules
    .replace(/\n{3,}/g, '\n\n')              // collapse runs of blank lines
    .trim();

  // Defensive: replace any em dashes the model might emit despite system rules.
  // " X " becomes ", ", " X(end)" becomes ".", "(start)X " becomes "", inline "X" becomes " ".
  // Then tidy up artefacts like " ," and ", ."
  text = text
    .replace(/ \u2014 /g, ', ')
    .replace(/ \u2014(?=[\s\n])/g, '.')
    .replace(/(?<=[\s\n])\u2014 /g, '')
    .replace(/\u2014/g, ' ')
    .replace(/ ,/g, ',')
    .replace(/,\s*\./g, '.')
    .replace(/,\s*,/g, ',');

  const msg = document.createElement('div');
  msg.className = `cbot-msg ${role}`;

  const avatar = document.createElement('div');
  avatar.className = 'cbot-msg-avatar';
  avatar.innerHTML = role === 'assistant'
    ? `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>`
    : `<svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>`;

  const bubble = document.createElement('div');
  bubble.className = 'cbot-msg-bubble';
  bubble.innerHTML = formatText(text);

  msg.appendChild(avatar);
  msg.appendChild(bubble);
  messagesEl.appendChild(msg);

  // Scroll behaviour:
  //  - For USER messages: scroll to bottom (so they see what they just sent)
  //  - For ASSISTANT messages: scroll to the START of the message (so they
  //    can read from the top of the new response without manually scrolling up)
  if(role === 'user'){
    messagesEl.scrollTop = messagesEl.scrollHeight;
  } else {
    // Wait one frame so the DOM has measured the new bubble
    requestAnimationFrame(() => {
      const headerOffset = 8; // small breathing room
      const targetTop = msg.offsetTop - headerOffset;
      messagesEl.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    });
  }
  return msg;
}

// ─────────────────────────────────────────────────────────────────────────────
// MARKDOWN → HTML
// ─────────────────────────────────────────────────────────────────────────────
function formatText(t){
  if(!t) return '';
  // Process lists first
  const lines = t.split('\n');
  let inList = false;
  const processed = lines.map(line => {
    const listMatch = line.match(/^[-•]\s+(.+)$/);
    if(listMatch){
      const item = `<li>${inlineFormat(listMatch[1])}</li>`;
      if(!inList){ inList = true; return '<ul>' + item; }
      return item;
    } else {
      let out = '';
      if(inList){ out = '</ul>'; inList = false; }
      return out + inlineFormat(line);
    }
  });
  if(inList) processed.push('</ul>');
  // Join and wrap paragraphs
  return processed.join('\n')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^(.+)$/s, '<p>$1</p>')
    .replace(/<p><ul>/g,'<ul>').replace(/<\/ul><\/p>/g,'</ul>');
}
function inlineFormat(t){
  return t
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,'<em>$1</em>');
}

// ─────────────────────────────────────────────────────────────────────────────
// TYPING INDICATOR
// ─────────────────────────────────────────────────────────────────────────────
function showTyping(){
  const el = document.createElement('div');
  el.className = 'cbot-msg assistant cbot-typing-msg';
  el.innerHTML = `
    <div class="cbot-msg-avatar"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg></div>
    <div class="cbot-typing"><div class="cbot-typing-dots"><span></span><span></span><span></span></div></div>`;
  messagesEl.appendChild(el);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return el;
}
function hideTyping(){
  const el = messagesEl.querySelector('.cbot-typing-msg');
  if(el) el.remove();
}

// ─────────────────────────────────────────────────────────────────────────────
// EXTRACT CLIENT DATA from assistant response  (matches loose formatting)
// ─────────────────────────────────────────────────────────────────────────────
function extractClientData(text){
  // Tolerant match: optional whitespace/markdown chars, case-insensitive label,
  // optional space between CLIENT and DATA, captures full JSON object.
  const match = text.match(/client[\s_]*data\s*:\s*(\{[\s\S]*?\})/i);
  if(!match) return;
  try {
    const parsed = JSON.parse(match[1]);
    // Merge into clientData, only overwrite if we got a non-empty value
    Object.keys(clientData).forEach(k => {
      if(parsed[k] && String(parsed[k]).trim()) clientData[k] = String(parsed[k]).trim();
    });
  } catch(e){ /* ignore parse errors */ }
}

// ─────────────────────────────────────────────────────────────────────────────
// EXTRACT 3 SUGGESTED CHIPS the model emitted at the end of its reply
// Format expected:  CHIPS:["chip 1","chip 2","chip 3"]
// ─────────────────────────────────────────────────────────────────────────────
function extractChipsFromReply(text){
  // Match "CHIPS:" (case-insensitive, allow whitespace) followed by a JSON array
  const match = text.match(/chips\s*:\s*(\[[\s\S]*?\])/i);
  if(!match) return null;
  try {
    const arr = JSON.parse(match[1]);
    if(!Array.isArray(arr)) return null;
    const cleaned = arr
      .filter(x => typeof x === 'string' && x.trim())
      .map(x => x.trim())
      .slice(0, 3);
    return cleaned.length ? cleaned : null;
  } catch(e){ return null; }
}

// ─────────────────────────────────────────────────────────────────────────────
// SEND MESSAGE
// ─────────────────────────────────────────────────────────────────────────────
window.cbotSend = async function(){
  const text = inputEl.value.trim();
  if(!text || isTyping || isLocked) return;

  // Hide initial suggestions
  if(suggestEl) suggestEl.style.display = 'none';

  requestCount++;
  updateCounter();

  // Show user message
  addMessage('user', text);
  inputEl.value = '';
  cbotAutoResize(inputEl);

  // Push to history
  conversationHistory.push({ role: 'user', content: text });

  // Are we on the 5th (final) request? Or the 4th (second-to-last)?
  const isFinalRequest = (requestCount >= MAX_REQUESTS);
  const isSecondToLast = (requestCount === MAX_REQUESTS - 1);

  // Build a snapshot of what we already know about the client, so the model
  // doesn't ask for fields we already have.
  const knownData = Object.entries(clientData)
    .filter(([_, v]) => v && String(v).trim())
    .map(([k, v]) => `${k}: ${v}`).join('; ');

  // What the booking form requires vs what we'll be able to pre-fill from clientData.
  // Only these ALWAYS need user input (we never collect them in chat):
  //   email, date, time
  // The dropdown ones we may or may not have inferred — list those that are still missing.
  const stillMissingForBooking = ['work email', 'preferred date', 'time window'];
  if(!clientData.visitType) stillMissingForBooking.push('visit type (a quick dropdown)');
  if(!clientData.phase) stillMissingForBooking.push('lifecycle phase');
  if(!clientData.domain) stillMissingForBooking.push('industry / domain');
  const missingFieldsList = stillMissingForBooking.join(', ');

  // For the 4th-response, what we'd ideally still learn:
  const missingFields = Object.entries(clientData)
    .filter(([k, v]) => !v || !String(v).trim())
    .map(([k]) => k);

  // Inject context-aware addendum into system prompt
  let systemMsg = SYSTEM_PROMPT;
  if(isFinalRequest){
    systemMsg += `

FINAL RESPONSE INSTRUCTION (5th of 5):
This is the final exchange before we hand the user over to a real CoE session.

1. Answer their question warmly and substantively as normal — but keep the body to ~120 words to leave room for the closing.

2. Then add a short, warm closing block that:
   - Acknowledges the value of what we've discussed
   - Says clearly: "I've already pre-filled most of the booking form below based on our conversation."
   - Mentions the FEW remaining fields they'll need to add themselves (use the missing-fields list below to be specific) — phrase it like "you'll just need to add your work email, preferred date and time window, and confirm a couple of dropdowns."
   - Ends with a clear pointer like: "Tap **Book My CoE Session** below — it'll take you straight to the form so you can complete the last details."

3. Do NOT say "I'll connect you with the team" — they take the action by clicking the button below. The button is the next step.

4. Do NOT promise decks, slides, write-ups or proposals. The next step is the visit.

${knownData ? `\nDETAILS ALREADY CAPTURED: ${knownData}` : '\n(No client details captured.)'}

FIELDS STILL TO BE COMPLETED BY THE USER (mention these casually so they know what's left): ${missingFieldsList}.

5. On the FINAL line of your message (no text after it, no preamble) emit the CLIENTDATA JSON — exact format:
   CLIENTDATA:{"name":"...","org":"...","role":"...","domain":"...","phase":"...","visitType":"...","objective":"...","timing":"..."}
   - Do NOT label it, frame it, or comment on it
   - Use empty strings for fields you don't know
   - Use the EXACT controlled values for domain / phase / visitType (see system prompt)
   - This line is invisible to the user.`;
  } else if(isSecondToLast){
    systemMsg += `

SECOND-TO-LAST RESPONSE INSTRUCTION (4th of 5):
This response has TWO parts. Keep both PRACTICAL and TIGHT.

PART 1 (~80 words): Answer their question directly with one concrete reference or example. DO NOT end with a follow-up question this time. The next user reply is a freestyle context dump, not an answer to a question. So land Part 1 cleanly with a statement, not a question, then move to Part 2.

PART 2 (separate paragraph) - this is a deliberate pivot to booking a CoE visit:
1. Tell them they have ONE more exchange in this chat.
2. Say the best way to continue this conversation is in person, by booking a visit to the CoE.
3. Invite them to share, in their next reply, whatever details they can in any format (a sentence, a list, a brain-dump). Tell them this lets you pre-populate most of the booking form so they only complete a couple of fields.
4. Give example angles in flowing prose (NOT a bulleted list): things like name and organisation, role, the specific scenario or asset to focus on, what's driving urgency, any partners or vendors already involved, and rough timing.
5. Reassure them on format: no need to format it neatly, just whatever's top of mind.

${knownData ? `ALREADY SHARED: ${knownData}. Acknowledge briefly so they don't repeat it. Only invite angles for what's still useful.` : 'Nothing has been shared yet. This is the moment to invite the full context.'}

CRITICAL: NO QUESTION ANYWHERE in this response. Not at the end of Part 1, not at the end of Part 2. The user's next reply is a freestyle dump, not an answer.

Total response under 180 words. NO em dashes. DO NOT output CLIENTDATA. DO emit CHIPS.`;
  }

  // Typing
  isTyping = true;
  sendBtn.disabled = true;
  showTyping();

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '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',
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 1100,
        system: systemMsg,
        messages: conversationHistory
      })
    });
    const data = await response.json();
    if(data.error) throw new Error(data.error.message);

    const reply = data.content.filter(b => b.type === 'text').map(b => b.text).join('\n');
    conversationHistory.push({ role: 'assistant', content: reply });

    // Extract any client data and dynamic chips the model embedded
    extractClientData(reply);
    const modelChips = extractChipsFromReply(reply);

    hideTyping();
    addMessage('assistant', reply);

    // After response: show fresh chips (mid-conversation) or booking card (final)
    if(isFinalRequest){
      lockInput();
      showBookingCard();
    } else {
      if(requestCount >= 1 && requestCount < MAX_REQUESTS){
        // Prefer the model's freshly-generated chips; fall back to contextual derivation
        let chips = (modelChips && modelChips.length) ? modelChips.slice(0, 3) : getContextualChips().slice(0, 3);
        // Always append the stable anchor — but only if it's not already there
        const anchor = 'How can the CoE help me?';
        if(!chips.some(c => c.toLowerCase().includes('coe help') || c.toLowerCase().includes('how can the coe'))){
          chips.push(anchor);
        }
        showChips(chips, true);
      }
    }

  } catch(err){
    hideTyping();
    addMessage('assistant', `I'm having a brief connectivity issue. Please try again, or click **Book a Visit** in the navigation to connect with our team directly.`);
    conversationHistory.pop();
    requestCount--; // don't count failed requests
    updateCounter();
    console.error('CoE chatbot error:', err);
  }

  isTyping = false;
  sendBtn.disabled = false;
  if(!isLocked) inputEl.focus();
};

// ─────────────────────────────────────────────────────────────────────────────
// LOCK INPUT after limit reached
// ─────────────────────────────────────────────────────────────────────────────
function lockInput(){
  isLocked = true;
  const inputRow = panel.querySelector('.cbot-input-row');
  if(inputRow){
    inputRow.innerHTML = `<div class="cbot-input-locked">✦ Book your CoE session to continue the conversation in person.</div>`;
  }
  const counterBadge = document.getElementById('cbotCounterBadge');
  if(counterBadge) counterBadge.remove();
}

// ─────────────────────────────────────────────────────────────────────────────
// BOOKING CARD  — pre-populated with client data
// ─────────────────────────────────────────────────────────────────────────────
function showBookingCard(){
  const d = clientData;

  // Build context tags from what we learned
  const tags = [];
  if(d.phase) tags.push(d.phase);
  if(d.domain) tags.push(d.domain);
  if(d.objective && d.objective.length < 50) tags.push(d.objective);

  const tagsHtml = tags.length
    ? `<div class="cbot-book-summary">${tags.map(t =>
        `<span class="cbot-book-tag">
          <svg width="10" height="10" viewBox="0 0 24 24" style="fill:#34d8ff;flex-shrink:0"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          ${t}
        </span>`).join('')}
        </div>`
    : '';

  const nameHint = d.name ? ` — personalised for ${d.name}` : '';

  const card = document.createElement('div');
  card.className = 'cbot-book-card';
  card.innerHTML = `
    <div class="cbot-book-card-title">You're ready for the real thing ✦</div>
    <div class="cbot-book-card-body">
      I've prepared your CoE session brief${nameHint} based on our conversation.
      Step inside the centre and experience this live, with the right demos, the right people, and a session built around your goals.
    </div>
    ${tagsHtml}
    <button class="cbot-book-btn" onclick="cbotOpenBooking()">
      <svg viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
      Book My CoE Session
    </button>`;
  messagesEl.appendChild(card);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// ─────────────────────────────────────────────────────────────────────────────
// OPEN BOOKING FORM + PRE-POPULATE
// ─────────────────────────────────────────────────────────────────────────────
window.cbotOpenBooking = function(){
  // Close chat panel
  isOpen = false;
  panel.classList.remove('open');

  // Navigate to booking view
  const bookBtn = document.querySelector('[data-view="booking"]');
  if(bookBtn) bookBtn.click();

  // Pre-populate form fields with a short delay (allow view transition)
  setTimeout(() => {
    const form = document.getElementById('bookingForm');
    if(!form) return;

    const d = clientData;

    // Helper: try to set a <select> by matching option label (case-insensitive substring)
    function setSelectByLabel(selectEl, candidates){
      if(!selectEl) return false;
      const wanted = (Array.isArray(candidates) ? candidates : [candidates])
        .filter(Boolean).map(s => s.toLowerCase());
      if(!wanted.length) return false;
      for(let i = 0; i < selectEl.options.length; i++){
        const opt = selectEl.options[i];
        const label = (opt.textContent || opt.value || '').toLowerCase();
        if(wanted.some(w => label === w || label.includes(w) || w.includes(label))){
          if(opt.value){ selectEl.selectedIndex = i; return true; }
        }
      }
      return false;
    }

    // 1. Name
    if(d.name && form.name) form.name.value = d.name;
    // 2. Organisation (form field is `organization`, not `company`)
    if(d.org && form.organization) form.organization.value = d.org;
    // 3. Role
    if(d.role && form.role) form.role.value = d.role;

    // 4. Visit type
    if(d.visitType) setSelectByLabel(form.visitType, d.visitType);

    // 5. Phase
    if(d.phase) setSelectByLabel(form.phase, d.phase);

    // 6. Industry / domain — handle "Smart Venue" → "Smart Venue / Buildings" too
    if(d.domain){
      const variants = [d.domain];
      if(d.domain.toLowerCase().includes('smart venue')) variants.push('Smart Venue / Buildings');
      setSelectByLabel(form.industry, variants);
    }

    // 7. Persona — derived from domain/phase, but match full option labels (e.g. "City Operator")
    if(form.persona){
      const personaFromDomain = {
        'construction': 'City Builder',
        'mobility': 'City Operator',
        'utilities': 'City Operator',
        'public safety': 'Public Authority',
        'government services': 'Public Authority',
        'healthcare': 'Public Authority',
        'hospitality': 'City Visitor',
        'media': 'City Visitor',
        'education': 'City Visitor',
        'smart venue': 'City Operator',
        'smart venue / buildings': 'City Operator',
        'environment': 'City Operator'
      };
      const personaFromPhase = {
        'design & master plan':     'City Planner',
        'develop & build':          'City Builder',
        'operate & govern':         'City Operator',
        'experience & virtualize':  'City Visitor'
      };
      const mapped = (d.domain && personaFromDomain[d.domain.toLowerCase()]) ||
                     (d.phase && personaFromPhase[d.phase.toLowerCase()]) || '';
      if(mapped) setSelectByLabel(form.persona, mapped);
    }

    // 8. Objectives — clean, externally-meaningful summary (no internal CoE pre-load noise)
    if(form.objectives){
      const lines = [];
      if(d.objective) lines.push(d.objective.trim().replace(/\.+$/, '') + '.');
      const ctxBits = [];
      if(d.org) ctxBits.push(d.org);
      if(d.role) ctxBits.push(d.role);
      const ctx = ctxBits.length ? ` (${ctxBits.join(', ')})` : '';
      if(d.phase || d.domain){
        const focus = [d.phase, d.domain].filter(Boolean).join(' • ');
        lines.push(`Focus: ${focus}${ctx}.`);
      }
      if(d.timing) lines.push(`Timing: ${d.timing}.`);
      form.objectives.value = lines.join(' ');
    }

    // 9. Smart default visit date — 10 business days out, only if empty
    if(form.date && !form.date.value){
      const future = new Date();
      future.setDate(future.getDate() + 10);
      form.date.value = future.toISOString().slice(0, 10);
    }

    // 10. Update the live "Visit structure preview" side panel based on what we know
    updateVisitPreview(d);

    // 11. Highlight fields the user still needs to complete
    highlightMissingFields(form);

    // 12. Scroll the form into view & focus the first missing required field
    const visitTitle = document.querySelector('#booking h2, #booking .section-eyebrow');
    if(visitTitle && visitTitle.scrollIntoView){
      visitTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const firstMissing = form.querySelector('[required]:invalid, .cbot-needs-input');
    if(firstMissing && firstMissing.focus) setTimeout(() => firstMissing.focus(), 800);

  }, 400);
};

// ─────────────────────────────────────────────────────────────────────────────
// Highlight booking-form fields the user still needs to fill in
// ─────────────────────────────────────────────────────────────────────────────
function highlightMissingFields(form){
  // Clear any previous highlight state
  form.querySelectorAll('.cbot-needs-input').forEach(el => {
    el.classList.remove('cbot-needs-input');
  });
  form.querySelectorAll('.cbot-prefilled-badge').forEach(el => el.remove());

  // Mark every required field that's empty
  form.querySelectorAll('input[required], select[required], textarea[required]').forEach(el => {
    const empty = (el.tagName === 'SELECT')
      ? !el.value
      : !String(el.value || '').trim();
    if(empty) el.classList.add('cbot-needs-input');
  });

  // Add a tiny "auto-filled" tag next to fields we did fill
  form.querySelectorAll('input, select, textarea').forEach(el => {
    if(el.type === 'submit' || el.type === 'button') return;
    const wrapper = el.parentElement;
    if(!wrapper || wrapper.querySelector('.cbot-prefilled-badge')) return;
    const filled = (el.tagName === 'SELECT') ? !!el.value : !!String(el.value || '').trim();
    if(filled && !el.classList.contains('cbot-needs-input')){
      const badge = document.createElement('span');
      badge.className = 'cbot-prefilled-badge';
      badge.textContent = 'Pre-filled by AI Advisor';
      wrapper.appendChild(badge);
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Update the "Visit structure preview" side panel to reflect the conversation
// ─────────────────────────────────────────────────────────────────────────────
function updateVisitPreview(d){
  // Suggested themes — pick from domain + phase + objective keywords
  const themesEl = document.getElementById('visitPreviewThemes');
  if(themesEl){
    const themes = new Set();
    const domLow = (d.domain || '').toLowerCase();
    const phLow  = (d.phase || '').toLowerCase();
    const objLow = (d.objective || '').toLowerCase();

    // Domain-based
    if(domLow.includes('mobility')) { themes.add('Mobility'); themes.add('ICCC'); themes.add('Digital Twin'); }
    if(domLow.includes('public safety')) { themes.add('Public Safety'); themes.add('ICCC'); }
    if(domLow.includes('utilities')) { themes.add('Utilities'); themes.add('Smart Asset Ops'); }
    if(domLow.includes('construction')) { themes.add('BIM-to-Twin'); themes.add('Worker Safety'); }
    if(domLow.includes('smart venue') || domLow.includes('hospitality')) { themes.add('Smart Venue'); themes.add('Crowd Mgmt'); }
    if(domLow.includes('government')) { themes.add('e-Permits'); themes.add('Smart Planning'); }
    if(domLow.includes('healthcare')) { themes.add('Patient Safety'); themes.add('ICCC'); }
    if(domLow.includes('media')) { themes.add('Digital Signage'); themes.add('XR'); }
    if(domLow.includes('environment')) { themes.add('Climate Twin'); themes.add('Environmental AI'); }
    if(domLow.includes('education')) { themes.add('Talent'); themes.add('Smart Campus'); }

    // Phase-based
    if(phLow.includes('design')) { themes.add('Digital Twin'); themes.add('Generative Planning'); }
    if(phLow.includes('build')) { themes.add('BIM-to-Twin'); }
    if(phLow.includes('operate')) { themes.add('ICCC'); themes.add('AIOps'); }
    if(phLow.includes('experience')) { themes.add('Visitor Journey'); themes.add('XR'); }

    // Keyword scan in objective
    if(objLow.includes('crowd')) themes.add('Crowd Mgmt');
    if(objLow.includes('traffic') || objLow.includes('congestion')) themes.add('Traffic AI');
    if(objLow.includes('event') || objLow.includes('fifa') || objLow.includes('expo')) themes.add('Mega-event Ops');
    if(objLow.includes('safety') || objLow.includes('incident')) themes.add('Safety AI');
    if(objLow.includes('twin')) themes.add('Digital Twin');

    // Default fallback if nothing learned
    if(!themes.size){
      ['Digital Twin', 'ICCC', 'AI Urban Intelligence', 'Visitor Experience'].forEach(t => themes.add(t));
    }

    // Render up to 7 themes
    themesEl.innerHTML = [...themes].slice(0, 7)
      .map(t => `<span class="vp-theme">${t}</span>`).join('');
  }

  // Expected flow — adapt to visit type AND conversation context
  const flowEl = document.getElementById('visitPreviewFlow');
  if(flowEl){
    const baseFlows = {
      'executive walkthrough': [
        'Strategic context and priorities',
        'Lifecycle and domain walkthrough',
        'Targeted persona-based demos',
        'Architecture and delivery discussion',
        'Next-step opportunities and partner mapping'
      ],
      'design sprint workshop': [
        'Problem framing and success criteria',
        'Capability deep-dive on relevant demos',
        'Co-design canvas: priority use cases',
        'Architecture and integration whiteboard',
        'Roadmap and sprint plan output'
      ],
      'use-case deep dive': [
        'Use-case framing and outcomes targeted',
        'Live demonstration walkthrough',
        'Data, integration and operational fit',
        'Benchmarks and global reference cases',
        'Path to PoV / pilot in the CoE sandbox'
      ],
      'partner showcase': [
        'CoE narrative and ecosystem positioning',
        'Partner capability live demos',
        'Joint solution mapping to your priorities',
        'Commercial and engagement model overview',
        'Co-pursuit / partnership next steps'
      ],
      'technical architecture session': [
        'Current state and target ambition',
        'Sentient-OS architecture walkthrough',
        'Integration, data and AI layer deep-dive',
        'Cyber, sovereignty and governance review',
        'RFP-grade artefact alignment'
      ]
    };

    const visitKey = (d.visitType || '').toLowerCase();
    let flow = (baseFlows[visitKey] || baseFlows['executive walkthrough']).slice();

    // ── CONTEXT-AWARE OVERRIDES ─────────────────────────────────────────────
    // Combine all known context for keyword scanning
    const dom = (d.domain || '').toLowerCase();
    const ph  = (d.phase || '').toLowerCase();
    const obj = (d.objective || '').toLowerCase();
    const role = (d.role || '').toLowerCase();
    const org  = (d.org || '').toLowerCase();
    const allCtx = [dom, ph, obj, role, org].join(' ');

    // Helper: replace a flow step (by index) with a context-specific one,
    // or insert a new step. Keeps overall flow length around 5.
    function setStep(idx, label){ flow[idx] = label; }

    // ── Intro step: tailor to who they are if known ────────────────────────
    if(d.org && d.role){
      flow[0] = `Strategic context for ${d.org} and your priorities`;
    } else if(d.org){
      flow[0] = `Strategic context for ${d.org}`;
    }

    // ── Phase-specific framing ─────────────────────────────────────────────
    if(ph.includes('design')){
      flow[1] = 'Design and master-plan demos: digital twin, generative planning, XR co-creation';
    } else if(ph.includes('build')){
      flow[1] = 'Build-phase demos: BIM-to-Twin, worker safety AI, quality intelligence';
    } else if(ph.includes('operate')){
      flow[1] = 'Operate demos: ICCC, AI ops, predictive maintenance';
    } else if(ph.includes('experience')){
      flow[1] = 'Experience demos: visitor journey, XR, smart venue, sentiment AI';
    }

    // ── Domain-specific demo step ──────────────────────────────────────────
    if(dom.includes('mobility')){
      flow[2] = 'Mobility deep-dive: traffic AI, corridor optimisation, multi-modal orchestration';
    } else if(dom.includes('public safety')){
      flow[2] = 'Public safety deep-dive: incident detection, crowd analytics, response orchestration';
    } else if(dom.includes('utilities')){
      flow[2] = 'Utilities deep-dive: smart grid, water network intelligence, asset performance';
    } else if(dom.includes('construction')){
      flow[2] = 'Construction deep-dive: site control tower, safety AI, defect detection';
    } else if(dom.includes('smart venue') || dom.includes('hospitality')){
      flow[2] = 'Smart venue deep-dive: crowd flow, comfort optimisation, experience analytics';
    } else if(dom.includes('government')){
      flow[2] = 'Government services deep-dive: e-permits, smart planning, citizen channels';
    } else if(dom.includes('healthcare')){
      flow[2] = 'Healthcare deep-dive: patient flow, command centre, predictive ops';
    } else if(dom.includes('media')){
      flow[2] = 'Media and signage deep-dive: dynamic content, XR experiences, sentiment AI';
    } else if(dom.includes('environment')){
      flow[2] = 'Environment deep-dive: climate twin, air quality AI, sustainability ops';
    } else if(dom.includes('education')){
      flow[2] = 'Talent and education deep-dive: smart campus, curriculum and skills programmes';
    }

    // ── Objective-driven overrides (highest priority) ──────────────────────
    if(/event|fifa|expo|world cup|riyadh season|olympics|olympic/.test(obj) ||
       /event|fifa|expo|world cup|riyadh season|olympics|olympic/.test(allCtx)){
      flow[2] = 'Mega-event ops walkthrough: crowd, mobility, safety and venue orchestration';
    }
    if(/twin|simulation|simulate|model the city|digital model/.test(obj)){
      flow[2] = 'Digital twin walkthrough: planning twin to operational twin';
    }
    if(/safety|incident|emergency/.test(obj)){
      flow[2] = 'Public safety and incident response walkthrough';
    }
    if(/sustainab|carbon|energy|climate|esg|emissions/.test(obj)){
      flow[2] = 'Sustainability and environmental intelligence walkthrough';
    }
    if(/visitor|tourist|guest|experience/.test(obj)){
      flow[2] = 'Visitor experience walkthrough: pre-arrival to post-departure';
    }
    if(/iccc|command|operations centre|operations center|control room/.test(obj)){
      flow[2] = 'ICCC walkthrough: cross-domain command and control';
    }
    if(/architecture|integration|data|platform|tech stack|cyber/.test(obj)){
      flow[3] = 'Architecture and integration deep-dive';
    }
    if(/rfp|procurement|tender|spec/.test(obj)){
      flow[3] = 'RFP-grade specification and procurement-pack alignment';
    }
    if(/pilot|pov|proof of value|prototype/.test(obj)){
      flow[4] = 'Path to a PoV / pilot in the CoE sandbox';
    }
    if(/partner|vendor|ecosystem|joint/.test(obj)){
      flow[4] = 'Partner mapping and joint go-to-market discussion';
    }
    if(/funding|business case|investment|capex|opex/.test(obj)){
      flow[4] = 'Business case and funding model discussion';
    }
    if(/roadmap|wave|sequence|phasing/.test(obj)){
      flow[4] = 'Sequenced roadmap and wave plan';
    }

    // ── Closing step: always end with a clear next step ────────────────────
    if(d.timing && /q[1-4]|quarter|month|week|next/.test((d.timing || '').toLowerCase())){
      flow[4] = `Sequenced next steps aligned to your timing (${d.timing})`;
    }

    flowEl.innerHTML = flow.map((s,i) => `<li>${s}</li>`).join('');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// KEYBOARD + RESIZE
// ─────────────────────────────────────────────────────────────────────────────
window.cbotKeydown = function(e){
  if(e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); cbotSend(); }
};
window.cbotAutoResize = function(el){
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 110) + 'px';
};

// Close panel on outside click
document.addEventListener('click', function(e){
  if(isOpen &&
     !panel.contains(e.target) &&
     !document.getElementById('cbotTrigger').contains(e.target)){
    isOpen = false;
    panel.classList.remove('open');
  }
}, true);

})();
</script>
