// ─── PROJECTS DATA ───────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: "AllGrow App",
    tag: "UX Research · Product Design",
    year: "2024",
    client: "AllGrow",
    role: "UX Researcher & Designer",
    duration: "Ongoing",
    cover: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67db9f757cf317b25e0f739d_Section%201.png",
    excerpt: "How I optimized user experience and data presentation to streamline administrative tasks and improve educational engagement for an ed-tech platform.",
    sections: [
      {
        type: "text",
        title: "Overview",
        body: "AllGrow is an education management platform connecting students, teachers, and mentors. When I joined the project, admins were managing hundreds of users across a fragmented system — emails, spreadsheets, and manual tracking were the norm. I led end-to-end UX research and design to replace this patchwork with a unified, intuitive admin dashboard."
      },
      {
        type: "text",
        title: "The Problem",
        body: "Education admins are doing critical work — but their tools weren't built with them in mind. The existing setup forced constant context-switching between disconnected systems, leading to delays and missed interventions for struggling students."
      },
      {
        type: "quote",
        text: "We can't tell who's engaged, who's falling behind, or who needs support until it's too late."
      },
      {
        type: "text",
        title: "Discovery & Research",
        body: "I started with structured interviews with admins, educators, and stakeholders to surface real pain points before touching any design. Alongside this, I ran competitive analysis of similar platforms to benchmark best practices in admin UX."
      },
      {
        type: "text",
        title: "Information Architecture",
        body: "With research findings in hand, I mapped out a full information architecture to restructure how content and tasks were organized. Every admin action needed a logical, predictable home before a single wireframe was drawn."
      },
      {
        type: "image",
        src: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67db9b6aeb92eba866755e12_All%20Grow%20Sitemaps%20Admin%20-%20Admin%20Page%20-%20Sitemap%2000.jpg",
        caption: "AllGrow Admin Sitemap"
      },
      {
        type: "image",
        src: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67db9ed3b7d6f14488ff2f02_User%20Management%20_%20Students.png",
        caption: "Low-Fidelity Wireframes"
      },
      {
        type: "text",
        title: "Find Anyone, Fast",
        body: "Problem: No filtering or search meant admins wasted time scrolling through long user lists.<br><br>Solution: Designed an interactive filtering system with real-time search, multi-parameter sorting, and clear status indicators — Active · Inactive · Needs Attention."
      },
      {
        type: "text",
        title: "Make Engagement Visible",
        body: "Problem: No way to proactively identify struggling students.<br><br>Solution: Introduced a dedicated progress tracking dashboard surfacing module completion rates, engagement signals, and automated flags for students showing disengagement patterns."
      },
      {
        type: "text",
        title: "One Place, One Flow",
        body: "Problem: The newsletter feature was buried and non-intuitive.<br><br>Solution: Consolidated all content distribution into a dedicated Newsletter section with a single, prominent Create action."
      },
      {
        type: "image",
        src: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67db9f757cf317b25e0f739d_Section%201.png",
        caption: "High-Fidelity Prototype"
      },
      {
        type: "outcomes",
        items: [
          "User lookup reduced from multi-step scrolling to instant filtered search",
          "At-risk students now surfaced automatically — no manual tracking required",
          "Newsletter creation consolidated into a single discoverable workflow",
          "Navigation restructured so admins reach any task in fewer steps"
        ]
      },
      {
        type: "text",
        title: "Reflection",
        body: "This project reinforced that good admin UX is about logic and workflow, not visual polish. The biggest wins came from how things were structured — which is why leading with IA and research before wireframes made such a difference."
      }
    ]
  },
  {
    id: 2,
    title: "Naer VR",
    tag: "UX Research · Interaction Design · Mixed Reality",
    year: "2024",
    client: "NYIT",
    role: "UI/UX Researcher & Designer",
    duration: "Semester project",
    cover: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48957e07e57c69075e443_668ca811b93226b6ad5dec2a_6670f6b7c1fd03e1a3591465_1.png",
    excerpt: "Usability research and redesign of a collaborative VR app — enhancing accessibility, optimizing tool interactions, and improving overall user experience.",
    sections: [
      {
        type: "text",
        title: "Overview",
        body: "Naer is a collaborative VR app designed to boost productivity and teamwork in immersive environments. The app faced critical usability obstacles — hard-to-see icons, unreliable gesture interactions, and limited input options. My research focused on enhancing accessibility, optimizing tool interactions, and improving the overall user experience."
      },
      {
        type: "text",
        title: "Deliverables",
        body: "User interviews, journey maps, sketches, wireframes, mid-fi & hi-fi prototypes, and research synthesis."
      },
      {
        type: "text",
        title: "The Problem",
        body: "The app aimed to foster collaboration but introduced friction at every turn. Tool icons blended into the virtual environment, making them nearly invisible for users with visual impairments. Hand gesture access was inconsistent. The sticky notes tool relied exclusively on voice typing, excluding users who couldn't or preferred not to speak. Only two tools were available — sticky notes and spray cans — with no customization options. Error correction and exit flows were cumbersome, further frustrating users."
      },
      {
        type: "text",
        title: "Goals",
        body: "The redesign targeted five core improvements: enhance UI/UX for usability and visual appeal; implement high-contrast icons and a user-friendly toolbar; broaden editing tools with font, size, and content options; add audio-visual feedback for a more intuitive experience; and introduce more interactive features within the environment."
      },
      {
        type: "text",
        title: "Research & Analysis",
        body: "I conducted competitive analysis to benchmark Naer against similar collaboration tools, developed a proto-persona from early research findings, mapped the user journey to surface pain points across the full experience, restructured the information architecture to reduce cognitive overhead, and created lo-fi wireframes to explore layout and interaction options before committing to higher fidelity."
      },
      {
        type: "text",
        title: "Research Goals",
        body: "Five research questions guided the study: (1) Understand user needs in VR — explore goals, pain points, and preferences for productivity and teamwork, comparing Naer to tools like Miro. (2) Assess Naer's role — identify how users incorporate it into design workflows and what specific needs it fulfills. (3) Test proposed solutions — evaluate design solutions and new features for feasibility and impact. (4) Evaluate tool efficiency — investigate how effectively users operate existing tools, examining icon visibility and voice typing limitations. (5) Explore interactive elements — gather user perceptions of interactive 'cubes' and potential for additional features."
      },
      {
        type: "text",
        title: "Usability Testing",
        body: "Testing spanned from tutorial interactions to free-form exploration through moderated sessions, assessing real user interactions and identifying improvement areas. Focused areas of inquiry: accessibility and visual clarity, inclusivity and input methods, and general user experience. After exploration, participants reviewed lo-fi design solutions on paper. Through observation and targeted questions, we gathered insights on icon intuitiveness and accessibility enhancements."
      },
      {
        type: "text",
        title: "Insights & Effort-Impact Matrix",
        body: "Research surfaced a clear prioritization of improvements: improve iconography and expand customization options (high impact, high feasibility); clarify interactive elements and their purpose; enhance input methods including keyboard typing and controller gestures; simplify navigation within the virtual environment; streamline text editing by adding undo, redo, and erase; and increase contrast and size of text and icons for visibility."
      },
      {
        type: "text",
        title: "Redesigning the Toolbar",
        body: "The toolbar was the most critical pain point. Three problems converged: poor contrast caused icons and labels to blend into the background; the current design required users to look at the back of their hands to activate the toolbar, which many found non-intuitive; and the toolbar was anchored to the user's field of view, disappearing with certain head movements and disrupting workflow."
      },
      {
        type: "text",
        title: "Design Solution",
        body: "The redesign introduced three key improvements. First, hand-based activation was replaced with a tactile wristband — users tap it to summon the toolbar, ensuring accessibility without requiring disruptive head movements. Second, increased opacity and a contrast-rich color scheme combat the icons-blending-into-environment problem. Third, new intuitive symbols were crafted for each tool, minimizing confusion and reducing the learning curve."
      },
      {
        type: "text",
        title: "Prototype & VR Testing",
        body: "Mid-fi wireframes refined the design before interactive prototyping. I used Glitch for rapid prototyping and employed A-Frame — a web framework for building VR experiences — to bring wireframes to life in immersive 3D space. The prototype was tested on a Quest 3 headset, which was essential for understanding how real users actually interact with the new toolbar in a spatial context."
      },
      {
        type: "text",
        title: "Recommendations",
        body: "Prototype testing produced three actionable recommendations: redesign less recognizable icons to improve identification at a glance; increase visibility of selection feedback so users always know which tool is active; and standardize hover effects across all tools for a consistent, predictable experience."
      },
      {
        type: "quote",
        text: "This research phase has been instrumental in refining the VR toolbar. Insights from real user interactions guide enhancements ensuring the toolbar is functional and intuitive."
      },
      {
        type: "outcomes",
        items: [
          "Identified critical accessibility failures: icon visibility, gesture inconsistency, and limited input methods",
          "Replaced hand-based toolbar activation with a tactile wristband interaction model",
          "Introduced high-contrast iconography and a redesigned color scheme for the toolbar",
          "Built and tested an interactive prototype using A-Frame and Quest 3",
          "Delivered prioritized recommendations via effort-impact matrix"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "MankoVR",
    tag: "UX Research · VR Design · Mental Wellness",
    year: "2024",
    client: "Passion Project",
    role: "Sole Researcher & Designer",
    duration: "12 weeks",
    cover: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4d3379768cdde583760f7_AGV_vUeCWQYGb2ISBcrBBSz2a3KctMYra6SivEeNqc1Jg6B2aJi6Ruyt_QYajjeGt7a993JaLt3dqDUro_epu3N7pHoQKosGdhGT9qhm3FMsbEV5lF5hr2z13uC-vK1qQAFYCFoWaVBV_6HhmYU8eoY-rnhsl08oOT3U%3Ds2048.jpeg",
    excerpt: "Researching and prototyping a VR mental wellness application that uses immersive journaling and biofeedback to support emotional regulation.",
    sections: [
      {
        type: "text",
        title: "Overview",
        body: "MankoVR is a passion project exploring how virtual reality can support mental wellness through immersive journaling. The hypothesis: the presence and embodiment of VR creates a uniquely safe psychological container for reflective practice."
      },
      {
        type: "text",
        title: "Research Methods",
        body: "I used a mixed-methods approach combining literature review, comparative analysis, and user surveys to establish the theoretical and practical foundation. Academic research on VR therapy consistently shows promise for anxiety, PTSD, and phobia treatment — I synthesized findings across 20+ papers to identify patterns and gaps."
      },
      {
        type: "image",
        src: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4d3379768cdde583760f7_AGV_vUeCWQYGb2ISBcrBBSz2a3KctMYra6SivEeNqc1Jg6B2aJi6Ruyt_QYajjeGt7a993JaLt3dqDUro_epu3N7pHoQKosGdhGT9qhm3FMsbEV5lF5hr2z13uC-vK1qQAFYCFoWaVBV_6HhmYU8eoY-rnhsl08oOT3U%3Ds2048.jpeg",
        caption: "MankoVR — Research Overview"
      },
      {
        type: "text",
        title: "Comparative Analysis",
        body: "Existing mental wellness apps fall into two categories: traditional (text-based, 2D interfaces) and emerging (VR, biofeedback). MankoVR aimed to bridge both — using the spatial presence of VR to create emotional safety that flat interfaces can't replicate."
      },
      {
        type: "quote",
        text: "Participants reported feeling more emotionally honest in VR environments compared to traditional journaling."
      },
      {
        type: "text",
        title: "Prototyping",
        body: "Early prototypes used cardboard VR viewers and paper interfaces to test spatial layout concepts before committing to digital development. The final prototype was built in ShapesXR, allowing rapid iteration on spatial UI without requiring Unity development at each step."
      },
      {
        type: "outcomes",
        items: [
          "VR significantly reduced journaling inhibition for 73% of participants",
          "Ambient soundscapes improved session depth and duration",
          "Visual metaphors (weather, seasons) resonated more than abstract color systems",
          "Identified clear path toward AI integration for personalized therapy sessions"
        ]
      },
      {
        type: "text",
        title: "Reflection",
        body: "This project pushed me to think seriously about the ethics of designing for emotional vulnerability. The most important design decisions weren't visual — they were about pacing, safety, and giving users genuine control over their own experience."
      }
    ]
  }
  
// {
//   id: 5,
//   title: "WheelsUp",
//   tag: "Product Design · Mobile · 0→1",
//   year: "2026",
//   client: "Personal Venture",
//   role: "Solo Product Designer — Research, Strategy, UX, UI, Design System",
//   duration: "Ongoing",
//   cover: "/images/wheelsup-01-hero-overview.png",
//   excerpt: "A end-to-end student transportation platform for Kathmandu — designed to eliminate the information void that makes every school run a gamble for working parents.",

//   sections: [

//     // ── HERO ────────────────────────────────────────────
//     {
//       type: "image",
//       size: "wide",
//       src: "/images/wheelsup-01-hero-three-phones.png",
//       caption: "WheelsUp — Carpool, live tracking, and ride management. Designed from zero."
//     },

//     // ── OVERVIEW ────────────────────────────────────────
//     {
//       type: "text",
//       title: "The Problem",
//       body: "In Kathmandu, there is no reliable way for a working parent to know where their child is during the school commute. Drivers don't share routes. Buses run without schedules. Parents spend the first hour of their workday making anxious phone calls — calls that distract drivers and solve nothing. I quantified this as an 'Anxiety Tax': an average stress rating of 7.7/10 during the pickup window, based on interviews with 12 parents across 4 schools. The problem isn't the traffic. It's the absence of information."
//     },

//     {
//       type: "text",
//       title: "My Role",
//       body: "I owned this project end-to-end: defining the problem space through primary research, mapping user journeys for two distinct personas (the student commuting and the parent monitoring remotely), architecting the information structure across 34 screens, building the complete design system, and producing a high-fidelity interactive prototype. This is not a redesign of an existing product — it is a 0→1 design built from user need."
//     },

//     // ── RESEARCH ─────────────────────────────────────────
//     {
//       type: "text",
//       title: "Research & Discovery",
//       body: "I conducted 12 parent interviews and 3 school administrator sessions to map the current state. The core finding: every parent had developed their own workaround — a WhatsApp group, a trusted neighbor, a driver they could call. These workarounds all failed at the same moment: when the driver was driving. The insight that shaped the entire product was this — parents don't need a map. They need a single, glanceable answer to 'is my child safe right now?' I called this the '2-Second Rule': any critical status must be readable in under 2 seconds, from across a room, without glasses."
//     },

//     // ── FLOW ARCHITECTURE ───────────────────────────────
//     {
//       type: "image",
//       size: "banner",
//       src: "/images/wheelsup-02-flow-architecture.png",
//       caption: "Information architecture — 6 user flows, 34 screens, 2 personas."
//     },

//     {
//       type: "text",
//       title: "Product Strategy",
//       body: "I made a deliberate decision to design for two personas simultaneously — the parent and the student — with fundamentally different mental models. The parent needs monitoring, certainty, and control. The student needs simplicity, speed, and zero friction. Rather than build two separate apps, I designed a single system with role-aware views: the same data surface rendered differently depending on who is looking at it. This became the central architectural decision that shaped every screen."
//     },

//     // ── DESIGN SYSTEM ───────────────────────────────────
//     {
//       type: "image",
//       size: "banner",
//       src: "/images/wheelsup-04-design-system.png",
//       caption: "Design system — built for legibility under the Himalayan sun, on a cracked phone screen, by a parent running late."
//     },

//     {
//       type: "text",
//       title: "Design System",
//       body: "I built the design system before touching any screen design — a discipline I hold firm on for 0→1 products. Every decision was constrained by a single real-world condition: this app will be used outdoors, in daylight, on low-end Android devices, by someone who is moving. School Bus Yellow (#F9A825) as the primary action color wasn't a branding choice — it's the highest-visibility color at arm's length in direct sunlight. The dark base (#10141A) eliminates glare. Plus Jakarta Sans ExtraBold at 48px for ETAs ensures the most critical piece of information is readable before the user even raises the phone."
//     },

//     // ── BRAND ───────────────────────────────────────────
//     {
//       type: "image",
//       size: "banner",
//       src: "/images/wheelsup-09-brand-typography.png",
//       caption: "Typography and color — every decision justified by real-world usage conditions."
//     },

//     // ── CARPOOL FLOW ─────────────────────────────────────
//     {
//       type: "text",
//       title: "Core Flow: Carpool",
//       body: "The carpool flow is the product's primary value driver. I designed it to handle three distinct user states: creating a new carpool, monitoring an active ride, and managing recurring schedules. Each state required different information hierarchy. The hardest design problem was the 'Create Carpool' screen — parents in Nepal often coordinate rides for multiple children from the same household, which no existing product handles gracefully. I solved it with an asymmetric avatar selector that lets a parent assign multiple children to a single ride in one step, without navigating sub-menus."
//     },

//     {
//       type: "image",
//       size: "wide",
//       src: "/images/wheelsup-10-full-flow-strip.png",
//       caption: "The complete carpool flow — 9 screens from creation to live tracking to editing."
//     },

//     // ── KEY SCREENS ──────────────────────────────────────
//     {
//       type: "text",
//       title: "Key Screen: Live Tracking",
//       body: "The live tracking screen is where the '2-Second Rule' is most critical. The ETA is the dominant element at 48px bold amber — nothing competes with it. Below it, the driver card surfaces the verified human behind the ride, replacing the cold GPS dot with a face, a name, a rating, and a vehicle plate number. The 'I'm at the Curb' button eliminates the most dangerous moment in the current system: the phone call to the driver while driving. One tap, haptic confirmation, done."
//     },

//     {
//       type: "image",
//       size: "phone",
//       src: "/images/wheelsup-02-carpool-home.png",
//       caption: "Carpool home — departure time, driver status, and live map access above the fold."
//     },

//     {
//       type: "image",
//       size: "phone",
//       src: "/images/wheelsup-06-live-status.png",
//       caption: "Live status — driver identity, vehicle, rating, security measures, and next stop. Trust surface designed for a parent checking from their desk."
//     },

//     // ── SAFETY ──────────────────────────────────────────
//     {
//       type: "text",
//       title: "Safety as a Feature",
//       body: "In Nepal, trust is built through people — not systems. A GPS dot on a map does not reassure a Nepali parent. A verified face does. I designed the safety layer around this cultural truth: every driver profile surfaces a photo, government ID verification status, rating history, and active security monitoring. The 'Are you in the vehicle?' check-in screen — triggered automatically when a student's GPS enters a geofence around the vehicle — closes the loop between parent, student, and driver without a single phone call."
//     },

//     {
//       type: "image",
//       size: "phone",
//       src: "/images/wheelsup-05-ride-status.png",
//       caption: "Vehicle check-in — automatic geofence trigger, single-tap confirmation, zero friction."
//     },

//     {
//       type: "image",
//       size: "phone",
//       src: "/images/wheelsup-04-create-carpool.png",
//       caption: "Create carpool — multi-child avatar selector, route input, frequency settings. Designed for the parent setting up Monday's ride at 11pm on Sunday."
//     },

//     // ── SCHEDULING ──────────────────────────────────────
//     {
//       type: "text",
//       title: "Scheduling & Recurring Rides",
//       body: "Kathmandu parents don't book rides day by day — they set up recurring carpools for the school term and then manage exceptions. I designed the scheduling system around this mental model: create once, repeat by default, edit as needed. The 'Upcoming Rides' screen surfaces the transit log with status indicators — confirmed, driver needed, pick up available — so a parent can assess the week in one scroll. The edit flow allows mid-week changes without disrupting the recurring rule."
//     },

//     {
//       type: "image",
//       size: "phone",
//       src: "/images/wheelsup-07-upcoming-rides.png",
//       caption: "Upcoming rides — transit log with status indicators. Designed for weekly planning, not daily booking."
//     },

//     {
//       type: "image",
//       size: "phone",
//       src: "/images/wheelsup-09-edit-carpool.png",
//       caption: "Edit carpool — change parents, update details, notify all instantly. One screen, one action."
//     },

//     // ── BUS ─────────────────────────────────────────────
//     {
//       type: "text",
//       title: "Bus Tracking",
//       body: "Beyond carpools, WheelsUp integrates public school bus routes — a feature driven directly by research. 4 of 12 parents interviewed relied on school buses, not private carpools. The bus tracker surfaces stop-by-stop progress with a live position indicator, replacing the 'is the bus late?' phone call with a real-time answer. Route status labels — 'Delayed', 'Scheduled', 'Arriving' — were designed to be scannable in under 2 seconds."
//     },

//     {
//       type: "image",
//       size: "banner",
//       src: "/images/wheelsup-06-bus-tracker.png",
//       caption: "Bus tracker — stop-by-stop progress, live position, route status. No phone calls."
//     },

//     // ── SCREEN LIBRARY ──────────────────────────────────
//     {
//       type: "image",
//       size: "banner",
//       src: "/images/wheelsup-08-screen-library.png",
//       caption: "34 screens across 6 flows — Home, Carpool, Bus, Calendar, Inbox, Onboarding."
//     },

//     // ── OUTCOMES ─────────────────────────────────────────
//     {
//       type: "outcomes",
//       items: [
//         "Reduced parent 'time-to-certainty' from 3–7 minutes of phone calls to a 2-second screen glance.",
//         "Designed the only multi-child carpool flow in the Kathmandu transit space — solving a gap no existing product addresses.",
//         "Built a complete design system from zero: color, typography, spacing, component library, and usage guidelines.",
//         "Architected 34 screens across 6 distinct user flows, maintaining consistency across two simultaneous user personas.",
//         "Made 'trust' a tangible design feature — verified driver profiles replace anonymous GPS with human accountability.",
//         "Designed every interaction for real-world conditions: outdoor use, low-end devices, users in motion, high ambient stress."
//       ]
//     },

//     // ── REFLECTION ──────────────────────────────────────
//     {
//       type: "text",
//       title: "What I Learned",
//       body: "The biggest design lesson from WheelsUp was that simplicity is a product strategy, not a visual style. Every screen that got cut, every flow that got compressed, every interaction that got reduced to one tap — those were strategic decisions, not aesthetic ones. The parent using this app is not leisurely browsing. She has 90 seconds between meetings and a child who should have arrived 10 minutes ago. Designing for that moment — for that specific human, in that specific condition — is what product design actually means."
//     },

//     // ── CLOSING ─────────────────────────────────────────
//     {
//       type: "image",
//       size: "banner",
//       src: "/images/wheelsup-10-project-summary.png",
//       caption: "WheelsUp — a 0→1 product built on a single design conviction: safety should be visible, not assumed."
//     }

//   ]
// }
]
// ─── BLOGS DATA ───────────────────────────────────────────────────────────────
const BLOGS = [
  {
    id: 1,
    title: "AI Can Generate the Interface. It Can't Generate the Intention.",
    date: "March 18, 2025",
    readTime: "9 min read",
    excerpt: "Everyone is racing to use AI in product design. But the more I work with these tools, the more convinced I am that AI amplifies design decisions — it doesn't make them. Here's what that means for how we work.",
    content: `I want to be clear about something upfront: I use AI tools in my design practice every day. Generative UI, copilot tools for research synthesis, automated component suggestions — they're genuinely useful. But there's a growing narrative in the industry that AI will eventually *replace* the judgment calls at the centre of good product design, and I think that narrative is not just wrong, it's dangerous.

Let me explain why.

## What AI is actually doing when it "designs"

When an AI tool generates a UI layout or suggests a user flow, it is performing a sophisticated act of pattern matching. It has been trained on millions of design decisions made by humans, and it is surfacing the statistically most common approaches to a given problem.

That sounds useful. And it often is — for commodity problems.

But here's the thing about great product design: the moments that matter most are almost always *not* commodity problems. They're the edge cases, the emotionally loaded interactions, the decisions that require you to hold the business constraint in one hand and the user's reality in the other and find a path that respects both.

An AI does not know that your onboarding flow needs to account for users who are signing up in the middle of a crisis. It does not know that the "simple" modal you're designing will be seen by people who have just received bad news and need to feel held, not processed. It does not know why that specific user segment abandons at that specific step, because knowing that required being in the room when they tested it.

## The seduction of plausible outputs

The real danger with AI in design isn't that it produces bad outputs. It's that it produces *plausible* outputs — layouts that look reasonable, copy that reads coherently, flows that seem logical. Plausible is seductive. It looks like done.

But plausible is not the same as *right*. And in product design, the gap between plausible and right is exactly where users get hurt.

I've watched teams use AI-generated wireframes as starting points without questioning the assumptions baked into them. The AI defaulted to a pattern it had seen a thousand times. The team, relieved to have a starting point, iterated on top of that default without ever asking whether the default fit their users. Months later, they were doing user research that revealed exactly what they would have found if they'd started with the user instead of the tool.

## Three things AI genuinely cannot do

**1. It cannot tell you what the problem actually is.**

AI works on the problem you give it. If you've framed the wrong problem — which is one of the most common and costly mistakes in product design — the AI will produce beautiful solutions to the wrong thing. Problem framing requires judgment, context, and often a willingness to push back on the brief. None of these are computable.

**2. It cannot sit with a user and watch them fail.**

Usability testing is not data entry. The moments that change your understanding of a product are often not in what users say — they're in the pause before they click, the small sigh before they abandon, the way they re-read the same sentence twice. These signals require a human observer who understands what they're looking for and why it matters. AI can help you analyse recordings after the fact. It cannot replace the act of witnessing.

**3. It cannot make the values-based call.**

Every product embeds values. Dark patterns are a design choice. Nudging users toward higher-priced tiers is a design choice. Making the cancellation flow deliberately confusing is a design choice. AI will not refuse to design these things. It will generate them cleanly and efficiently if you ask it to.

The designer is the last line of defence between a technically functional product and an ethically sound one. That is not a role you can automate.

## What this means practically

This isn't a call to use AI less. Use it more. Use it to move faster through the repetitive work — the component generation, the copy variants, the responsive breakpoints. Free up that time for the work that requires you.

It just means keeping a clear-eyed view of what you're delegating and what you're not. You are delegating execution. You are not delegating judgment.

The discipline of product design — the real discipline — is knowing the difference between those two things in the moment. That is not going to change because the tools got smarter.`
  },
  {
    id: 2,
    title: "Why Every App Feels the Same (And What We Lost When That Happened)",
    date: "February 4, 2025",
    readTime: "11 min read",
    excerpt: "Open ten apps on your phone. Swap the logos and colour schemes. Could you tell them apart? We built the most sophisticated design tools in history and somehow ended up with less diversity than before. This is the story of how that happened.",
    content: `There's a thought experiment I like to run with design students. I put ten mobile app screenshots on the screen — news reader, banking app, e-commerce, fitness tracker, food delivery — and I remove the logos. Then I ask them to identify which is which.

They can't. Not reliably.

The layouts are too similar. The typography choices converge. The interaction patterns are interchangeable. The colour systems have a sameness to them that's hard to name but impossible to ignore once you see it.

We are in the age of the most powerful design tools ever built. Design systems that scale. AI that generates UI in seconds. Figma libraries with thousands of components. Component frameworks that any engineer can implement. And the result, somehow, is products that look and feel like they were all designed by the same invisible committee.

How did this happen?

## The component library convergence

It starts with design systems — a concept I genuinely believe in, but whose unintended consequence nobody talks about enough.

When Material Design launched, it was a revelation. A coherent visual language with principled foundations, freely available, well-documented. Other systems followed. And then design tools started shipping with component libraries built on top of these systems. And then Figma Community gave every designer access to polished, production-ready component sets in one click.

The seductive thing about a pre-built component library is that it solves real problems. Consistency. Speed. Accessibility defaults that would take months to build from scratch. These are not trivial things.

But here's what gets lost: **the component library was built to solve someone else's problem.** It encodes the assumptions of the team that made it, for the users they were designing for, expressing the values of the organisation that commissioned it. When you adopt it wholesale, you adopt all of those assumptions too.

And because everyone is adopting the same libraries, built on the same base, the assumptions compound. A generation of products inherits the same spatial decisions, the same typographic hierarchy, the same interaction affordances. The diversity that used to come from genuinely different approaches to the same problems disappears.

## The algorithm that rewards the familiar

There's a second force at work, and it's more insidious: algorithmic pressure toward the familiar.

A/B testing culture has taught the industry to treat engagement metrics as the ground truth of good design. If version B has a higher click-through rate than version A, version B wins. Ship it. Move on.

The problem is that users click on things they recognise. Familiarity reduces friction. A button that looks exactly like every other button on every other app will, in a controlled test over a short time horizon, outperform a button that makes you think for half a second. The novel interaction loses to the familiar one even when the novel interaction is better — because novelty has a learning curve, and learning curves don't show up in a two-week A/B test.

The cumulative effect of thousands of design teams running thousands of A/B tests, all optimising for the same short-term engagement metrics, is a slow gravitational pull toward the familiar. Every product converges toward the interaction patterns that users already know. Which are the interaction patterns they learned from every other product. Which were shaped by the same process.

It's a feedback loop that actively selects against distinctiveness.

## AI is accelerating this — but it didn't start it

I want to be careful here because the easy take is to blame AI tools for the homogenisation. That's not quite right. The homogenisation started before AI design tools were widespread. AI is accelerating a process that was already underway.

When an AI generates a UI, it is — as I've written elsewhere — performing sophisticated pattern matching on its training data. The training data is the existing landscape of digital products. The most statistically common patterns in that landscape are the ones that win.

So AI-generated UI is, almost by definition, maximally familiar. It is the average of the design decisions that came before it. It is competent, functional, accessible, and completely indistinct.

Using AI to generate your UI starting point without questioning it is like asking someone to describe the average human face and then using that as your portrait. The average face is recognisable. It is not memorable. It does not tell you anything about the person.

## What we lose when everything looks the same

This is not just an aesthetic complaint. The homogenisation of product design has real costs that don't show up in engagement dashboards.

**Brand differentiation collapses.** When the product experience is interchangeable, the only differentiator left is price and distribution. Companies that spent years building genuine product craft end up competing on the same axis as companies that just shipped a white-label template. The craft becomes invisible.

**User expectations flatten.** When you only ever encounter the same patterns, you stop being surprised by what's possible. You stop expecting the product to understand you specifically — you expect it to process you efficiently. The relationship between user and product becomes transactional. There's a reason people talk about certain apps with genuine affection and others as utilities they begrudgingly use. The ones that earn affection are almost always the ones that made choices.

**Design as a discipline loses its argument.** If AI can generate a product that is indistinguishable from what a design team produces, the case for investing in design weakens. Not because design doesn't matter — it does, more than ever — but because the value of design becomes invisible when its outputs are identical to generated content.

## What distinctiveness actually requires

I've been arguing that the homogenisation is a problem. Let me be specific about what solving it requires.

It requires starting from the user before starting from the component library. This sounds obvious. It is not common practice. Most design work starts with a brief, a timeline, and an existing design system. The user research happens in parallel or after the fact. Genuine distinctiveness requires letting the user's actual situation shape the interaction model before the tools do.

It requires the willingness to be slower than the template. A component library gives you a working UI in hours. Building something that genuinely fits your users — in the way their specific mental models work, in the contexts in which they'll actually use it — takes longer. That time has to be justified to stakeholders who can see the template and wonder why you're not just using it.

It requires treating distinctiveness as a product value, not a design indulgence. The companies that produce memorable digital products have leadership that understands brand experience as a competitive moat. They protect the design time required to build it.

## A small act of resistance

I'm not arguing for novelty for its own sake. Unfamiliar interactions that require learning impose a real cost on users. Distinctive doesn't mean difficult.

But there's a version of this that's available to every designer working right now: the deliberate refusal to accept the default. Not always, not everywhere, but at the moments that matter most — the first impression, the key transaction, the moment the user needs to feel understood.

Those are the moments worth fighting for.

The default will always be there. The question is whether you have a reason to deviate from it. If you don't have the reason, use the default. But if you do — if you've done the research, understood the users, seen the opportunity — then deviate deliberately. Ship something that could only exist for *these* people, in *this* context.

That's what design is. That's what AI tools, as currently constituted, will not do for you.`
  },
  {
    id: 3,
    title: "The Human in the Loop Is Not Optional",
    date: "January 9, 2025",
    readTime: "8 min read",
    excerpt: "The phrase 'human in the loop' has become a compliance checkbox. In product design, it's actually the whole job. A look at what AI-augmented design gets right, what it gets dangerously wrong, and where the designer's irreplaceable work lives.",
    content: `"Human in the loop" is a phrase from machine learning that has wandered into product design circles and lost its meaning in the process. In ML, it refers to a specific architectural decision: keeping a human in the feedback cycle so the model doesn't drift toward outcomes nobody actually wants. It's a technical safeguard.

In design conversations, the phrase has become a kind of reassurance. *Don't worry, there'll be a human in the loop.* It's said in a tone that implies the human's role is supervision — watching over the AI's shoulder, ready to intervene if something goes wrong.

That framing concerns me. Because in product design, the human isn't in the loop as a safeguard. The human *is* the loop. The rest is tooling.

## What the tools are genuinely good at

I want to start here because the critique is only useful if we're honest about the capability.

AI tools are genuinely good at the parts of product design that are essentially pattern-completion problems. Given a brief, they can generate a range of layout options at a speed no human team can match. They can produce copy variants. They can suggest accessible colour combinations. They can scaffold a design system from a handful of brand tokens. They can summarise user research transcripts, identify recurring themes, and flag contradictions in the data.

These are not trivial contributions. A significant portion of the time in a design process goes to tasks like these — not because they're intellectually demanding, but because they're voluminous. Reducing that volume is genuinely valuable.

The danger is in overgeneralising from these capabilities. Because the tasks AI handles well all share a property: they are *generative within a defined space*. There is a known input, a known output format, and a large training set of examples. The AI is filling in the middle.

## The tasks that don't have that shape

Here's a partial list of design tasks that *don't* have that shape, and therefore can't be meaningfully delegated to current AI tools:

**Deciding what problem to solve.** Every design project involves at least one moment where the stated brief doesn't match the actual problem. Someone asks for a better onboarding flow when the real problem is that users don't understand the product's value proposition by the time they get to onboarding. Someone asks for a redesigned dashboard when the real problem is that the underlying data model is broken and users are working around it. Recognising these moments requires holding the product's purpose, the user's context, and the business's constraints simultaneously — and having the judgment to know when they're in tension. This is not a pattern-completion task.

**Choosing whose experience to prioritise.** Every non-trivial design decision involves a tradeoff between different users' needs. Optimising for expert users often means more friction for novices. Designing for the most common use case means the edge cases suffer. Making the interface accessible by default sometimes means compromising aesthetic choices that matter to other users. These tradeoffs don't have objectively correct answers. They require the designer to make a call, own it, and be accountable for its consequences. AI can surface the tradeoffs. It cannot make the call.

**Reading the room in a user session.** Good user research is not transcription. It's observation. When a user says "this is fine" while visibly struggling with an interaction, the researcher has to decide in real time whether to probe or let it go. When a user's body language shifts before they explain a workaround they've built, the researcher has to notice the shift. When silence falls before an answer, the researcher has to decide what the silence means. These judgments happen in seconds and they determine the quality of the insight. They require a human who is present, attuned, and experienced enough to know what they're seeing.

**Holding the long view.** Design decisions compound. A choice made in sprint one shapes the constraints of sprint twenty. An interaction pattern established early becomes load-bearing infrastructure that's expensive to change. The designer who has been with a product for two years carries a mental model of how decisions have accumulated — what technical debt has built up, where the UX has been patched rather than properly solved, which user complaints point to structural problems versus surface issues. That model does not exist in an AI tool. It exists in the designer.

## The accountability gap

Here's the thing nobody talks about enough: AI tools are not accountable.

When a designer makes a call that harms users — a dark pattern, a misleading interface, an accessibility failure — there is a human who made that call. That human can be challenged, can reflect, can change their practice. The harm has an address.

When an AI generates an interface that harms users, accountability becomes diffuse. The tool doesn't know it caused harm. The designer who accepted the output without interrogating it might not have seen the harm coming. The product manager who approved the spec was trusting the design tool. The engineer who implemented it was trusting the design.

This is not an argument against using AI in design. It's an argument for clarity about who is accountable when AI-augmented design goes wrong. The answer has to be the human who accepted the output and put it in front of users. Which means the human has to be genuinely in the loop — not supervising, not rubber-stamping, but actually interrogating the outputs with the full weight of their professional judgment.

## What that looks like in practice

The designer who uses AI tools well isn't the one who uses them most. It's the one who is clearest about the boundary between what the tool does and what they do.

The tool generates the options. The designer decides which options are worth exploring.

The tool summarises the research. The designer decides what the summary missed.

The tool produces the layout. The designer decides whether the layout fits the specific emotional context of this product, for these users, at this moment in their lives.

The tool moves fast. The designer moves deliberately.

That deliberateness is not inefficiency. It's the work. It's the reason users trust some products and merely tolerate others. It's the reason certain interfaces feel like they were made by someone who thought about you specifically.

AI can produce competence at scale. Humans are still the only source of the thing that makes competence matter.`
  }
];
