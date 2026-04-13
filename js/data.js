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
    client: "Naer",
    role: "PM / Researcher / Designer (rotating)",
    duration: "Semester project",
    cover: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48957e07e57c69075e443_668ca811b93226b6ad5dec2a_6670f6b7c1fd03e1a3591465_1.png",
    excerpt: "Designing a mixed-reality fitness companion that adapts to user movement — researching interaction paradigms for VR controllers and spatial interfaces.",
    sections: [
      {
        type: "text",
        title: "Overview",
        body: "Naer is a mixed reality fitness experience built for users who want immersive, full-body workouts. My team of three rotated across PM, research, and design roles — giving each of us a holistic view of the product development process."
      },
      {
        type: "text",
        title: "Research Phase",
        body: "We began with competitive analysis to understand the landscape of VR fitness apps, then developed proto-personas to represent our core user segments. From there we conducted user interviews to surface real friction points in existing fitness routines."
      },
      {
        type: "image",
        src: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48957e07e57c69075e443_668ca811b93226b6ad5dec2a_6670f6b7c1fd03e1a3591465_1.png",
        caption: "Naer VR — Research Phase"
      },
      {
        type: "text",
        title: "User Journey Mapping",
        body: "Mapping the end-to-end experience revealed key drop-off moments — particularly around onboarding and session transitions — that became our primary design targets. The biggest insight: users felt kicked out of the experience every time they had to navigate a menu."
      },
      {
        type: "quote",
        text: "The biggest friction point wasn't the workout itself — it was the transitions between states."
      },
      {
        type: "text",
        title: "Information Architecture",
        body: "We restructured the IA to reduce cognitive load during active workouts, where users can't afford to navigate complex menus while moving. Every interaction needed to feel like a natural extension of physical movement."
      },
      {
        type: "text",
        title: "Wireframes & Testing",
        body: "Lo-fi wireframes explored spatial layout in VR — how to present information in 3D space without overwhelming the user's field of view. We conducted usability testing with Meta Quest 2 headsets, gathering qualitative data on gesture fatigue, menu discoverability, and session flow."
      },
      {
        type: "text",
        title: "Rotating Roles",
        body: "Working across rotating roles forced me to develop genuine empathy for each discipline. As a PM I learned to hold ambiguity. As a researcher I learned to listen without leading. As a designer I learned to prototype fast and kill my darlings."
      },
      {
        type: "outcomes",
        items: [
          "Identified key drop-off moments in onboarding and session transitions",
          "Redesigned menu navigation to reduce interruption during active workouts",
          "Validated lo-fi spatial layouts with real Meta Quest 2 usability sessions",
          "Delivered a cohesive handoff across three rotating team roles"
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
  },
  {
    id: 4,
    title: "Vrroom VR",
    tag: "VR Development · Unity · Interaction Design",
    year: "2024",
    client: "Academic Project",
    role: "VR Developer & Designer",
    duration: "Semester project",
    cover: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d47d763576770286fb64bc_6691892e7fd89cd15de4351e_667a30fd77eb9c4eac93a8aa_Group%252520166.png",
    excerpt: "Engineering a realistic VR scooter simulation by scripting collision dynamics and controller-to-movement translation in Unity — bridging physical affordances with virtual interaction.",
    sections: [
      {
        type: "text",
        title: "Overview",
        body: "Vrroom VR is a virtual reality Vespa scooter simulation built in Unity with Oculus Integration. Players accelerate by pressing trigger buttons on their VR controllers and steer by turning their head — a solution born from a creative pivot when the original tilt-based steering proved too difficult to calibrate."
      },
      {
        type: "text",
        title: "Phase 1 — Ideation",
        body: "The original concept used controller tilt to simulate handlebar steering — envisioning the controllers as scooter handles. Accurately calibrating the Y-axis tilt and translating it to scooter rotation proved too complex. I pivoted to head rotation for steering, which felt more intuitive in practice."
      },
      {
        type: "image",
        src: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d47d4b07244ccaa6aa99bc_66918831a5230eba8fdc8dee_667a2f6bd248b3f315142f27_Group%252520165.png",
        caption: "Ideation Sketches"
      },
      {
        type: "text",
        title: "Phase 2 — Scooter Model",
        body: "The project started with a 3D URP project in Unity with the Oculus Integration package installed. I white-boxed a basic scooter model on a simple plane, then refined it with separate detailed components. An OVR player controller was positioned to mimic how a person sits on a scooter, with handles attached to hand anchors."
      },
      {
        type: "image",
        src: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d47d4bb7691ea36ba6f388_669188327ff8807ac60ed87e_667a2f8c749c53c580ae8bb2_Screenshot%2525202024-03-27%252520at%2525208.33.png",
        caption: "Unity Whitebox and Final Scooter Setup"
      },
      {
        type: "text",
        title: "Phase 3 — Movement Mechanics",
        body: "The movement system is driven by an accelerator script for Meta Quest controllers — forward movement triggers when the Secondary Index Trigger is pressed. Steering is determined by the player's head orientation, excluding vertical movements for a consistent and natural riding experience."
      },
      {
        type: "text",
        title: "Phase 4 — Game Environment",
        body: "I sourced detailed models from the Unity Asset Store and Sketchfab — a Vespa scooter, houses, roads, vehicles, lamp posts, and animals. My player character was imported from Mixamo. Replacing the whitebox model with a detailed scooter significantly improved visual immersion."
      },
      {
        type: "image",
        src: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d47d763576770286fb64bc_6691892e7fd89cd15de4351e_667a30fd77eb9c4eac93a8aa_Group%252520166.png",
        caption: "Game Environment Overview"
      },
      {
        type: "text",
        title: "Phase 5 — Collision Dynamics",
        body: "I implemented diverse collision scripts to make the environment interactive — particle systems for visual effects, audio triggers on animal objects, and lamp post scripts that change color as the scooter passes. The system uses Non-Trigger Colliders with Rigidbody interactions and Trigger Collider interactions to simulate realistic physics."
      },
      {
        type: "image",
        src: "https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48766fdf9dba83b7e1c59_669189467fd89cd15de446da_667a4e1106e3891bdbf4a75c_Group%252520168.png",
        caption: "Collision System Setup"
      },
      {
        type: "outcomes",
        items: [
          "Successfully pivoted from tilt-based to head-rotation steering",
          "Built a fully interactive VR environment with realistic collision physics",
          "Integrated assets from Unity Asset Store, Sketchfab, and Mixamo",
          "Demonstrated how UX principles apply directly to game development"
        ]
      },
      {
        type: "text",
        title: "Reflection",
        body: "This project pushed me to think about embodied interaction design — how physical controller affordances translate into virtual movement. The constraints of the medium forced creative problem-solving, and the final result demonstrates that UX thinking applies even in game development contexts."
      }
    ]
  },
  {
  id: 5,
  title: "WheelsUp: A Letter to My Sister",
  tag: "UX Research · Social Impact · Mobile",
  year: "2026",
  client: "Personal Venture",
  role: "UX Generalist (Researcher & Designer)",
  duration: "Ongoing",
  cover: "images/wheelsup-01-hero-overview.png",
  excerpt: "Designing a high-fidelity transportation ecosystem for the working parents of Kathmandu, inspired by my sister's journey into motherhood.",

  sections: [

    // ── BANNER: Hero ────────────────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-01-hero-overview.png",
      caption: "WheelsUp — 34 screens, 6 flows, one promise to my sister."
    },

    {
      type: "text",
      title: "The 'Why': More Than Just an App",
      body: "This project didn't start in a boardroom; it started with a phone call from my sister in Kathmandu. She just had her first baby, and amidst the joy was a looming shadow of anxiety: How would she balance her long working hours with the safety of her child's future commute? In a city like Kathmandu—where traffic is unpredictable and the 'gallis' are narrow—sending a child to school shouldn't feel like a leap of faith. I started WheelsUp as a promise to her: that by the time her little one is ready for school, the 'Information Black Hole' of student transit will be a thing of the past."
    },

    {
      type: "quote",
      text: "In Kathmandu, we don't just track a bus; we track our peace of mind. I want my sister to focus on her career and her child, not on the dust and delays of the Ring Road."
    },

    // ── BANNER: Flow Architecture ───────────────────────
    {
      type: "image",
      src: "/images/wheelsup-02-flow-architecture.png",
      caption: "6 user flows across 34 screens — mapping every path a parent or student takes through the app."
    },

    {
      type: "text",
      title: "The Problem: The 'Anxiety Tax' of Kathmandu Transit",
      body: "For a working parent in Nepal, the morning commute is a high-stakes guessing game. With no real-time data, a bus that is 10 minutes late due to a 'jam' at Kalanki feels like an eternity. My research found that local parents experience an 'Anxiety Tax' of 7.7/10 during the wait window. The current system relies on frantic phone calls to drivers—calls that are dangerous for the driver to pick up and stressful for the parent to make."
    },

    {
      type: "text",
      title: "Empathy-Driven Discovery",
      body: "I spent time observing the 'daily rhythm' of Kathmandu households. I realized that 'Anxious Amy' isn't just a persona; she is my sister, my neighbor, and the woman rushing to catch a micro-bus. They don't need a complex map; they need a 'Glanceable Truth' that fits into a hectic morning of making breakfast and getting ready for work."
    },

    // ── MOCKUP: Hero Three Phones ───────────────────────
    {
      type: "image",
      src: "/images/wheelsup-01-hero-three-phones.png",
      caption: "Three core screens — Carpool Home, Live Tracking, and Ride Details — the backbone of the parent experience."
    },

    {
      type: "text",
      title: "Design Decision: The 2-Second Rule",
      body: "Problem: A parent in a rush can't study a map. Solution: I implemented the 'Big Data' approach. The ETA (e.g., '4 MINS') is the largest element on the screen, styled in School Bus Yellow. I tested this to ensure it's readable from across a room—allowing my sister to know exactly when to step out the door without dropping her coffee or her baby's bag."
    },

    // ── BANNER: Live Trip Tracking ──────────────────────
    {
      type: "image",
      src: "/images/wheelsup-03-live-trip-tracking.png",
      caption: "Live Trip Tracking — the amber ETA is the single source of truth. No map-reading required."
    },

    // ── MOCKUP: Carpool Home ────────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-02-carpool-home.png",
      caption: "Carpool Home — Today's trip card, driver status, upcoming rides and recent history at a glance."
    },

    {
      type: "text",
      title: "Cultural Trust: The 'Mama/Dai' Module",
      body: "Problem: In Nepal, trust is personal. Parents want to know who is behind the wheel. Solution: I integrated a 'Verified Driver' section. By showing the driver's face and verified status, we move from a cold GPS dot to a human connection. It brings the 'Community Trust' of a small neighborhood into a digital interface."
    },

    // ── MOCKUP: Live Status ─────────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-06-live-status.png",
      caption: "Live Status — Marcus Rivera, Silver Toyota Camry KL-4922, 4.9 rating (1,200+ rides), security measures active. Trust built into every pixel."
    },

    // ── BANNER: Student Safety ──────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-07-student-safety.png",
      caption: "Student Safety Monitor — live GPS pulse, parent notifications, and driver verification in one screen."
    },

    {
      type: "text",
      title: "Action Without Friction",
      body: "Problem: Typing a message while walking through a busy street is difficult. Solution: The 'I'm at the Curb' button. A single, haptic-confirmed tap that lets the driver know the student is ready. No phone calls, no dangerous distractions—just a seamless loop of communication."
    },

    // ── MOCKUP: Ride Status ─────────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-05-ride-status.png",
      caption: "'Are you in the vehicle?' — A safety check-in that closes the loop between parent, student and driver without a single phone call."
    },

    {
      type: "text",
      title: "Designing the Full Carpool Flow",
      body: "Every screen in the carpool flow was designed to reduce cognitive load at the moment it matters most. From creating a carpool with child avatars, to editing a ride mid-week, to the live driver card arriving in real time — each step was validated against the real rhythms of a Kathmandu morning."
    },

    // ── MOCKUP: Create Carpool ──────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-04-create-carpool.png",
      caption: "Create Carpool — child avatars, route details, pickup time and repeat frequency. 'Preview & Invite' sends the carpool to all parents in one tap."
    },

    // ── BANNER: Carpool Creation ────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-05-carpool-creation.png",
      caption: "Carpool Creation flow — the asymmetric avatar selector lets parents assign multiple children without navigating separate menus."
    },

    // ── MOCKUP: Upcoming Rides ──────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-07-upcoming-rides.png",
      caption: "Upcoming Rides — transit log showing confirmed rides, driver-needed alerts, and the ability to pick up a ride."
    },

    // ── MOCKUP: Upcoming Rides Edit ────────────────────
    {
      type: "image",
      src: "/images/wheelsup-08-upcoming-rides-edit.png",
      caption: "Edit Mode — select any ride to modify. Designed for the parent who plans a week ahead but needs flexibility mid-schedule."
    },

    // ── MOCKUP: Edit Carpool ────────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-09-edit-carpool.png",
      caption: "Edit Carpool — choose parents, update details, and save. All notified instantly."
    },

    // ── MOCKUP: Ride Details ────────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-03-ride-details.png",
      caption: "Ride Details — 3D live tracking map, ETA, pickup and drop-off, and the full passenger list. The screen a parent opens first and closes last."
    },

    // ── BANNER: Bus Tracker ─────────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-06-bus-tracker.png",
      caption: "Bus Tracker — stop-by-stop live progress with the current stop pulsing in amber. No more frantic calls to the driver."
    },

    // ── MOCKUP: Full Flow Strip ─────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-10-full-flow-strip.png",
      caption: "The complete carpool flow — all 9 screens in sequence from home to live tracking to editing and back."
    },

    // ── BANNER: Screen Library ──────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-08-screen-library.png",
      caption: "34 screens across 6 flows — Home, Bus, Carpool, Calendar, Inbox, and Onboarding."
    },

    {
      type: "text",
      title: "The Design System: Built for Bright Mornings",
      body: "Every color, typeface and spacing decision was made with one constraint in mind: legibility under the bright Himalayan sun, on a cracked phone screen, by a parent running late. School Bus Yellow (#F9A825) isn't just a brand color — it's a signal that cuts through noise. The dark base (#10141A) reduces glare. Plus Jakarta Sans at ExtraBold renders the ETA in under 2 seconds of reading time."
    },

    // ── BANNER: Design System ───────────────────────────
    {
      type: "image",
      src: "/images/wheelsup-04-design-system.png",
      caption: "Design System — color tokens, type scale and components. A 'Friendly-Industrial' palette built for high-visibility in any light."
    },

    // ── BANNER: Brand & Typography ──────────────────────
    {
      type: "image",
      src: "/images/wheelsup-09-brand-typography.png",
      caption: "Brand identity — WheelsUp wordmark, type scale and the five-color palette that anchors every screen."
    },

    {
      type: "outcomes",
      items: [
        "Reduced 'Time-to-Certainty' from several minutes of worrying to 2 seconds of glancing.",
        "Digitized the 'Trust Culture' of Kathmandu through verified driver profiles.",
        "Empowered parents with 'Agency,' replacing helpless waiting with actionable data.",
        "Built a scalable design system ready for the unique infrastructure of Nepal.",
        "Mapped a 9-screen carpool flow covering creation, live tracking, safety check-in, and editing.",
        "Designed for dual personas: the student riding and the parent monitoring from work."
      ]
    },

    {
      type: "text",
      title: "Reflection: Design as a Love Language",
      body: "Working on WheelsUp reminded me that as a UX Researcher, my greatest tool isn't Figma—it's empathy. This isn't just a project for my portfolio; it's a solution for my family. It taught me that when we design for the people we love, we create products that the whole world can trust."
    },

    // ── BANNER: Project Summary (closing) ──────────────
    {
      type: "image",
      src: "/images/wheelsup-10-project-summary.png",
      caption: "Designed for safety first — WheelsUp, 2026."
    }

  ]
}
];
// ─── BLOGS DATA ───────────────────────────────────────────────────────────────
const BLOGS = [
  {
    id: 1,
    title: "Why 'Intuitive Design' Is a Red Flag",
    date: "November 12, 2024",
    readTime: "5 min read",
    excerpt: "When clients ask for 'intuitive' design, what they usually mean is 'design that works for me.' Here's why that framing is dangerous.",
    content: `When a client says they want something "intuitive," I've learned to pause. It's one of those words that sounds like a clear design requirement but contains a hidden trap.

## Intuitive for whom?

Intuition isn't a universal quality. What feels natural to a 35-year-old who grew up with smartphones is completely foreign to a 70-year-old encountering a touchscreen for the first time. What a developer finds obvious in a dashboard is opaque to a first-time user.

When someone says "intuitive," they almost always mean "intuitive for someone like me." That's not a design spec — it's a bias wearing a design spec's clothing.

## The danger of the word

The problem with accepting "intuitive" as a requirement is that it shuts down the conversation before it starts. It implies that there's an obvious right answer, and that if users struggle, it's their fault for not getting it.

This framing leads to:

- Skipping user research because "of course it's obvious"
- Dismissing user feedback as user error
- Designing for the client's mental model instead of the user's

## What to ask instead

When a client asks for intuitive design, I redirect with questions:

- *Who are your users, specifically?*
- *What do they already know how to do?*
- *What will they be trying to accomplish?*

These questions reframe the conversation around actual humans — which is where design has to start.

## The deeper lesson

"Intuitive" is a word that makes designers feel good and users feel blamed. Our job is to build understanding through research, testing, and iteration — not to assume that good design is self-evident.

The best interfaces aren't intuitive. They're *learnable*. And there's a big difference.`
  },
  {
    id: 2,
    title: "The Case for Slower Design",
    date: "October 3, 2024",
    readTime: "7 min read",
    excerpt: "In an industry obsessed with speed and iteration, there's a quiet argument for doing less, more deliberately.",
    content: `There's a tension at the heart of modern design practice. On one side: the pressure to ship fast, iterate constantly, and treat every release as a learning opportunity. On the other: the nagging feeling that we're optimizing for output instead of impact.

## The iteration trap

Agile design culture tells us that speed is a virtue. Ship early, learn fast, adjust. It's a compelling framework — and it works, up to a point.

The trap is when iteration becomes a substitute for thinking. When the sprint cycle moves faster than our ability to synthesize what we've learned. When we're always building the next thing before we've understood the last.

## What slower design looks like

Slower design isn't about being precious or taking forever to ship. It's about creating deliberate space for:

- **Deep research** before ideation — not parallel to it
- **Synthesis time** to actually make sense of what users told you
- **Questioning the brief** instead of just executing it
- **Sitting with ambiguity** long enough to find the real problem

## The business case

Here's the uncomfortable truth: slower design is often faster in practice. When you take three extra days to deeply understand the problem, you avoid the three-week rebuild that comes from solving the wrong one.

The projects I've seen fail most spectacularly weren't the slow ones. They were the ones that moved fast in the wrong direction.

## A practical prescription

Once per project, schedule what I call a "slow day." No deliverables, no outputs. Just thinking, sketching loosely, talking to someone outside the project. It feels inefficient. It rarely is.`
  },
  {
    id: 3,
    title: "What Service Blueprints Taught Me About Empathy",
    date: "August 19, 2024",
    readTime: "6 min read",
    excerpt: "Service blueprints are often treated as operational tools. But when done right, they're one of the most powerful empathy exercises in the designer's toolkit.",
    content: `I came to service blueprints through necessity — a client project involving a complex, multi-touchpoint service across digital and physical channels. The interactions were too tangled for journey maps alone to capture.

What I didn't expect was how much the process would shift my thinking about empathy in design.

## What a service blueprint reveals

A journey map shows you what a user experiences. A service blueprint shows you *why* — what's happening behind the curtain that produces that experience.

When you map the backstage processes, the support systems, the handoffs between teams — suddenly the frustrating moments make sense. The user who waits three days for a response isn't waiting because the company doesn't care. They're waiting because three different systems don't talk to each other and a team of two is manually reconciling them.

## Empathy expands

Here's what surprised me: doing this work expanded my empathy not just for users, but for the people *delivering* the service.

Customer support agents working with broken tools. Operations staff maintaining a workaround that's outlasted the original problem. The intern who built a critical spreadsheet two years ago and has since left.

When you see these backstage realities, you stop designing "ideal state" solutions that assume perfect system behavior. You start designing for the messy, human reality of how services actually function.

## The design implication

The best service design interventions I've seen don't just improve the customer experience. They also make the employee experience less painful. Those two things are almost always connected.

## Questions worth asking

These questions slow things down. They're worth it:

- *What has to go right backstage for this customer moment to feel effortless?*
- *Who is doing invisible labor to make this work?*
- *What breaks when this person is out sick?*`
  }
];
