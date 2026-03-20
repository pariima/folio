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
    content: `## Overview

## Information Architecture
 
With research findings in hand, I mapped out a full **information architecture** to restructure how content and tasks were organized. This ensured every admin action had a logical, predictable home before a single wireframe was drawn.
 
### Sitemap Overview
 
![AllGrow Admin Sitemap](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67db9b6aeb92eba866755e12_All%20Grow%20Sitemaps%20Admin%20-%20Admin%20Page%20-%20Sitemap%2000.jpg)
 
### User Management Architecture
 
![User Management Tab](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67db9c3992e7b97f7d664d80_All%20Grow%20Sitemaps%20Admin%20-%20User%20Management%20Tab.jpg)
 
### Students Section Breakdown
 
![Students IA](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67db9c4ab7d6f14488fd05c3_All%20Grow%20Sitemaps%20Admin%20-%20Students.jpg)
 
### Student Profile Structure
 
![Student Profile IA](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67db9c2a41b4278c6dd8111f_All%20Grow%20Sitemaps%20Admin%20-%20Student%20Profile.jpg)
 
The IA work clarified the hierarchy before any UI decisions were made — a step that ultimately prevented several costly redesign loops.
 
---
 
## Design Solutions
 
Each problem identified in research was paired with a deliberate design response:
 
### 1 — User Management: Find Anyone, Fast
 
**Problem:** No filtering or search meant admins wasted time scrolling through long user lists.
 
**Solution:** Designed an interactive filtering system with real-time search, multi-parameter sorting, and clear **status indicators** (Active · Inactive · Needs Attention). Admins could now surface the right user in seconds rather than minutes.
 
---
 
### 2 — Progress Tracking: Make Engagement Visible
 
**Problem:** There was no way to proactively identify struggling students — admins only found out when it was too late.
 
**Solution:** Introduced a dedicated **progress tracking dashboard** surfacing:
- Module completion rates per student
- Engagement signals (login frequency, time on task)
- Automated flags for students showing disengagement patterns
 
This shifted admin behavior from reactive to proactive.
 
---
 
### 3 — Newsletter Management: One Place, One Flow
 
**Problem:** The newsletter feature was buried and non-intuitive, so most admins simply didn't use it.
 
**Solution:** Consolidated all content distribution into a **dedicated Newsletter section** with a single, prominent "Create" action. No more hunting through menus.
 
---
 
## Wireframes & Prototyping
 
### Low-Fidelity Wireframes
 
I moved quickly into lo-fi wireframes to validate structural decisions before investing in visual design. This allowed fast iteration on layout and flow.
 
![Low-Fidelity Wireframe — User Management](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67db9ed3b7d6f14488ff2f02_User%20Management%20_%20Students.png)
 
### High-Fidelity Prototype
 
Once structure was validated, I refined to high-fidelity — incorporating the design system, interaction states, and realistic content.
 
![High-Fidelity Prototype](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67db9f757cf317b25e0f739d_Section%201.png)
 
---
 
## Usability Testing
 
I ran an **unmoderated usability study on UserTesting.com** with real admins completing representative tasks:
 
- *"Find a student named Amelia Bardot."*
- *"Create a new newsletter."*
- *"Find students who need attention."*
 
Sessions were recorded and analyzed for task completion rates, hesitation points, and verbal feedback.
 
### Key Findings & Iterations
 
| Finding | Design Response |
|---|---|
| Search and filter controls were not prominent enough | Repositioned and visually elevated filter bar |
| Newsletter section label wasn't clear at first glance | Renamed and added contextual icon |
| Leaderboard lacked useful sorting options | Added filters for grade level, project type, and mentor recommendation |
 
Each iteration was validated before moving forward — no assumption went untested.
 
---
 
## Outcomes
 
The redesigned dashboard gave AllGrow admins a tool that genuinely fit their workflow:
 
- ✅ **User lookup** reduced from multi-step scrolling to instant filtered search
- ✅ **At-risk students** now surfaced automatically — no manual tracking required
- ✅ **Newsletter creation** consolidated into a single, discoverable workflow
- ✅ **Navigation** restructured so admins reach any task in fewer steps
 
---
 
## Reflection
 
This project reinforced that **good admin UX is about logic and workflow, not just visual polish**. The biggest design wins came not from how things looked, but from how they were structured — which is why leading with IA and research before wireframes made such a difference.
 
**What I'd explore next:**
- Automated weekly progress reports sent to mentors
- Predictive engagement scoring to surface at-risk students earlier
- Smarter mentor-student matching based on engagement patterns
 
---
 
*Interested in the full interactive prototype? [Get in touch](mailto:parima.bajra@gmail.com)*`
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
    content: `## Overview

Naer VR is a mixed reality productivity app designed to boost collaboration and teamwork. Despite its ambitious vision, the app had significant usability and accessibility gaps that were limiting adoption. I joined as a rotating UX researcher and designer — cycling through PM, researcher, and designer roles every two weeks — and ultimately owned the toolbar redesign end-to-end.
 
The challenge wasn't just visual. It was about rethinking how people physically interact with tools in three-dimensional space.
 
---
 
## The Problem
 
Naer's core issues weren't cosmetic — they were structural and accessibility-critical:
 
- **Tool icons were nearly invisible** — low contrast caused them to blend into the virtual environment, especially for visually impaired users
- **Hand gesture activation was unreliable** — the toolbar required users to look at the back of their hand, which was non-intuitive and broke flow with certain head movements
- **Sticky notes only supported voice typing** — excluding users who couldn't or preferred not to use voice input
- **Customization was minimal** — no font, size, or content options available
- **Error correction was painful** — no undo/redo, and exiting tools was cumbersome
 
These weren't edge cases. Every user we tested ran into at least two of these issues within minutes.
 
---
 
## Research
 
### Competitive Analysis
 
Before designing anything, I benchmarked Naer against comparable productivity and VR collaboration tools to understand the landscape and identify gaps.
 
![Competitive Analysis](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4895ae834aa07569fead3_665e8694944a9429511fe75c_CA.png)
 
### Proto Persona
 
Based on initial stakeholder conversations, I built a proto persona to align the team on who we were designing for — capturing goals, frustrations, and context of use before formal user research began.
 
![Proto Persona](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48958e3f5052125c16c2d_665e8d320ca63e57db20972c_PERSONA.png)
 
### User Journey Map
 
I mapped the full user journey through Naer — from onboarding through active use — to pinpoint exactly where frustration and drop-off were happening.
 
![User Journey Map](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48957a8234e3be3514cbb_665e8da451c4aab200bcc9ef_journey.png)
 
---
 
## Information Architecture
 
With a clear picture of user needs, I structured the information architecture to ensure a logical, navigable system before any UI decisions were made.
 
![Information Architecture](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67ddcb602456597c39284c1e_ia.webp)
 
---
 
## Lo-Fi Wireframes
 
Early wireframes were deliberately rough — focused on testing structure and interaction logic, not visual polish. These were printed and shown to participants during usability testing to gather immediate feedback.
 
![Lo-Fi Wireframe 1](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48a1c6506bc3b33a8b406_665e8c3a0e1e2aef8cbb98f8_image%252016.png)
 
![Lo-Fi Wireframe 2](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48957b7f010ec15c87314_665e8c3fb7640d4c44145901_image%252017.png)
 
---
 
## Research Goals
 
Before running usability sessions, the team aligned on five focused research objectives:
 
**1. Understand User Needs in VR**
Capture goals, pain points, and preferences for VR-based productivity — particularly for users with varying familiarity with VR and remote collaboration tools like Miro.
 
**2. Assess Naer's Role in Design Workflows**
Explore how users naturally incorporate Naer into their processes and what specific needs it fulfills — or fails to fulfill.
 
**3. Test Proposed Solutions**
Evaluate the lo-fi design concepts directly with users to gauge feasibility and desirability before investing in high-fidelity work.
 
**4. Evaluate Tool Efficiency**
Investigate how effectively users operate existing tools — focusing on icon visibility, gesture reliability, and voice input limitations.
 
**5. Explore Interactive Elements**
Probe user perceptions of Naer's interactive "cubes" to determine their perceived value and identify opportunities for richer interactivity.
 
---
 
## Usability Testing — Round 1
 
We ran a **moderated usability study** spanning the full user journey — from first-time tutorial through free-form exploration. This gave us both structured task data and naturalistic observation.
 
![Usability Testing Session](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4895778b5e0cbf814d6c8_668ca7250766a296312a2060_6670d12b3a1df3315c984109_Screenshot%2525202024-06-04%252520at%2525202.53.52%2525E2%252580%2525AFAM.png)
 
**Focus areas during testing:**
- Accessibility and visual clarity of tool icons
- Inclusivity of input methods (voice vs. alternatives)
- General usability and learnability of the environment
 
After participants explored the app, we showed them our lo-fi paper wireframes and gathered direct reactions — testing whether new icons felt intuitive and whether proposed accessibility changes resonated.
 
---
 
## Synthesis & Insights
 
![Research Insights](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67ddcca3a31b8f4e83245079_Frame%203.jpg)
 
![Usability Findings](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d489571b7c8955092ce6c5_668ca7a6b889ccc7f946d327_6670cba6c6ffa44485b7e1d0_image%25252023.png)
 
---
 
## Prioritization: Effort-Impact Matrix
 
With a rich set of findings, the team used an **Effort-Impact Matrix** to prioritize what to tackle first. This kept us focused on changes that would meaningfully improve the experience without over-engineering.
 
![Effort-Impact Matrix](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48958441a7707d1309d58_668ca7a6feed4d8cf0037128_6670cb415bbb130f9693407a_image%25252024.png)
 
**High-priority actions identified:**
- Improve iconography for clarity and instant recognition
- Expand customization and personalization options
- Clarify the purpose of interactive elements
- Add keyboard typing and controller gesture support
- Add undo, redo, and erase to sticky notes
- Increase contrast and size of text and icons
 
---
 
## My Focus: The Toolbar Redesign
 
After synthesis, the team divided the work. **I owned the toolbar redesign** — the most critical and complex piece, since the toolbar is the gateway to every tool in the app.
 
### The Current Toolbar
 
![Toolbar in Display](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d489575e98540f0d2299c4_668ca7a63b95cde16a9c78d1_6670cb65c6ffa44485b781c1_com.cohere.png)
 
The toolbar hosts the core tools — Sticky Note, Sponge, Laser Pointer, Microphone — but had three fundamental problems:
 
![Toolbar Issues](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48958c4ce222a65311d15_668ca7a608d71a7f19cd605c_6670cc81ef96c234e775f4f8_image%25252018.png)
 
1. **Poor contrast** — icons and labels nearly disappeared against the virtual environment background
2. **Non-intuitive activation** — users had to look at the back of their hand to trigger it, which conflicted with natural movement and caused the toolbar to vanish when their head moved
3. **Anchored to view** — because the toolbar tracked the user's viewport, head movements caused it to disappear unpredictably, disrupting workflow
 
### My Design Solution
 
![Toolbar Solution Overview](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48958a10bd11b3ae96211_668ca7a65ff6e31fddc3e081_6670ccdda86b6d0d62af576f_image%25252019.png)
 
![Toolbar Redesign Detail](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48957cd3d4512a4aee208_668ca7a608d71a7f19cd605f_6670cd1d0d7d34e345bcbe7d_Group%25252036.png)
 
**Three core changes:**
 
**Wristband tap activation** — Replaced hand-flip activation with a simple wristband tap. Users tap once to summon the toolbar, eliminating dependency on head position entirely.
 
**High-contrast color scheme** — Increased opacity and introduced a contrast-rich palette so icons are legible regardless of the virtual environment behind them.
 
**New icon system** — Replaced ambiguous icons with purpose-designed symbols built for instant recognition, reducing cognitive load and shortening the learning curve for new users.
 
---
 
## Mid-Fi Wireframes
 
With the concept validated, I moved to mid-fidelity to refine interaction states, spacing, and layout before building the interactive prototype.
 
![Mid-Fi Wireframes](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48957d5e9200dbd1e7569_669146d1d4eb2a8ee0f87725_Group%252034.png)
 
---
 
## Usability Testing — Round 2: Testing in VR
 
### Building the Interactive Prototype
 
I built the interactive prototype using **Glitch** for rapid web-based prototyping and **A-Frame** for the VR environment — a combination that allowed fast iteration directly in immersive 3D space without requiring native app builds.
 
![Prototype in VR (Quest 3)](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48957e07e57c69075e443_668ca811b93226b6ad5dec2a_6670f6b7c1fd03e1a3591465_1.png)
 
*Prototype running on Meta Quest 3*
 
### Testing the Prototype
 
With the prototype live in VR, I ran a second round of testing — this time evaluating real interactions with the redesigned toolbar in an actual headset.
 
![VR Testing Session](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4905dab687ad5fd40bdec_668ca811ec02e1404218ce53_6670f8478ff1704effaf1c43_2.png)
 
---
 
## Recommendations
 
Based on second-round feedback, I identified three targeted improvements to carry into the next iteration:
 
| Finding | Recommendation |
|---|---|
| Some icons still not immediately identifiable | Redesign lowest-performing icons with clearer visual metaphors |
| Active tool selection wasn't always obvious | Increase visibility and distinctiveness of selected state feedback |
| Hover effects inconsistent across tools | Standardize hover behavior across all toolbar items |
 
---
 
## Reflection
 
This project was my first deep dive into VR-specific UX — and it fundamentally changed how I think about interaction design. In flat UI, affordances are implied by convention. In VR, **affordances have to be physically intuitive**. A button isn't just a button; it's something users reach toward, tap, or gesture at in three-dimensional space.
 
The rotating role structure was also valuable. Being PM one sprint and researcher the next gave me a much broader view of how design decisions ripple outward into project planning and user expectations.
 
**What I'd explore next:**
- Haptic feedback integration for tool selection confirmation
- Personalized toolbar layouts — letting power users reorder tools
- Accessibility profiles: pre-set contrast and icon-size combinations for different visual needs
 
---
 
*Full research report available in Figma — [view here](https://www.figma.com/design/pnY3qtMbaddtIfOnd6WUWi/Naer-Research-Report?node-id=0-1&t=jQbAENWn5sYe2yxn-1)*
 
---`
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
    content: `## Overview

## The Origin
 
Mental health apps are everywhere. Headspace for meditation. Moodfit for mood tracking. Rootd for anxiety. And yet, despite VR's proven clinical success in treating PTSD and anxiety disorders, it has barely made a dent in *everyday* mental wellness.
 
That gap bothered me.
 
MankoVR started as a question: **What if journaling — one of the most evidence-backed mental wellness practices — could be reimagined inside a fully immersive VR environment?** Not just a screen floating in space, but a genuinely new way to reflect, process, and connect with your own thoughts.
 
This was my passion project. No client. No brief. Just curiosity, a Meta Quest 3, and a research-first approach to find out whether the idea had legs.
 
---
 
## The Problem Space
 
Mobile wellness apps are polished and accessible, but they're still *just apps* — limited to a flat screen and easily dismissed with a swipe. VR, by contrast, creates presence. It removes distractions. It can make you feel like you're somewhere else entirely.
 
**So why hasn't VR broken into mainstream mental wellness?**
 
My research explored three hypotheses to frame the investigation:
 
| Hypothesis | Question |
|---|---|
| **Engagement** | Will VR outperform mobile in emotional impact and sustained engagement? |
| **Usability** | Can a well-designed VR app match or exceed mobile app usability scores? |
| **Therapeutic Efficacy** | Does immersion meaningfully enhance therapeutic outcomes? |
 
---
 
## Research Approach
 
![Research Methods Overview](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4cce996c7efce38f38f7e_Screenshot%202025-03-14%20at%208.40.32%20PM.png)
 
I designed a multi-phase research plan combining secondary research, competitive analysis, user surveys, and a structured within-subjects usability study.
 
**Tools used:**
- **Design & Prototyping:** Unity, Figma, ShapesXR, Sketchfab
- **Research & Analysis:** Maze, Google Forms, Google Sheets, Notion
- **Hardware:** Meta Quest 3 for all prototype testing and VR interaction studies
 
![Research Framework](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4ccf9fdf9dba83bb3ff97_Screenshot%202025-03-14%20at%208.40.38%20PM.png)
 
---
 
## Literature Review
 
Before doing any primary research, I reviewed existing clinical and academic literature on VR in therapeutic settings. Key takeaways:
 
![Literature Review Insights](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4cd109768cdde5833b8be_Screenshot%202025-03-14%20at%208.40.42%20PM.png)
 
- **Adjustable exposure levels** in VR enable tailored, personalized therapy experiences
- **Privacy and presence** — VR environments create a sense of safety that encourages openness
- **Declining costs** are making VR more viable for home and clinical use
- **Gamification and immersion** are consistently rated positively in therapeutic contexts
- **Transformative potential** is well-documented for conditions like PTSD, phobias, and anxiety — but consumer-facing wellness applications lag far behind
 
The literature pointed clearly to VR's clinical credibility. The open question was *why that credibility hadn't translated to everyday wellness tools.*
 
---
 
## Competitive Analysis
 
I conducted a comparative analysis of both mobile and VR mental wellness apps to map the current landscape.
 
![Competitive Analysis](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4c22128f61f28bef51b13_Screenshot%202025-03-14%20at%207.54.56%20PM.png)
 
**Mobile apps reviewed:** Rootd, MindShift, Headspace, Moodfit — assessed for usability, feature depth, and therapeutic scaffolding.
 
**VR apps reviewed:** TRIPP, Guided Meditation VR — assessed for immersion quality, interaction model, and feature set.
 
### Comparative Feature Analysis
 
![Comparative Feature Analysis](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4cd1c432050339dd28ebd_Screenshot%202025-03-14%20at%208.40.48%20PM.png)
 
Both platforms handled breathing exercises and guided meditation reasonably well. VR added an immersion layer that elevated engagement. But one category stood out:
 
---
 
## The Gap: Journaling
 
Mobile apps like Rootd and MindShift offer robust journaling, mood tracking, and daily check-ins. **Not a single VR mental wellness app did.**
 
> Journaling — specifically writing — had not been explored or implemented in VR at all. Given the well-documented benefits of journaling for emotional processing, stress reduction, and psychological clarity, this was a meaningful and actionable gap.
 
![Journaling Gap Visualization](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d6f6fc3308e4811948d33b_123.png)
 
This became MankoVR's core focus: **bring the therapeutic practice of reflective writing into an immersive VR environment.**
 
---
 
## Primary Research: Surveys & Interviews
 
I ran user surveys and interviews to validate the opportunity and gather qualitative insight before prototyping.
 
![Survey Results 1](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4d1cdfa4575aabe4ed773_Screenshot%202025-03-14%20at%209.00.13%20PM.png)
 
![Survey Results 2](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4d1dda6d9dae6ceaa789a_Screenshot%202025-03-14%20at%209.00.22%20PM.png)
 
![Survey Results 3](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4d1fbd436f8ae41bc4647_Screenshot%202025-03-14%20at%209.00.39%20PM.png)
 
![Survey Results 4](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4d20590d45621f04e12e4_Screenshot%202025-03-14%20at%209.00.50%20PM.png)
 
![Interview Recurring Themes](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4d1b6fa4575aabe4ecdea_Screenshot%202025-03-14%20at%209.00.59%20PM.png)
 
*Recurring themes from user interviews and surveys*
 
Survey findings confirmed appetite for VR-based wellness tools and strong existing journaling habits — but users had never considered combining the two. That unfamiliarity was actually an opportunity: there were no bad habits or preconceptions to overcome.
 
---
 
## Prototyping
 
With research grounding the direction, I moved into rapid prototyping — starting on paper, then moving directly into VR.
 
### Paper Sketches → VR Environment
 
![Early Prototype Sketch 1](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4d3379768cdde583760f7_AGV_vUeCWQYGb2ISBcrBBSz2a3KctMYra6SivEeNqc1Jg6B2aJi6Ruyt_QYajjeGt7a993JaLt3dqDUro_epu3N7pHoQKosGdhGT9qhm3FMsbEV5lF5hr2z13uC-vK1qQAFYCFoWaVBV_6HhmYU8eoY-rnhsl08oOT3U%3Ds2048.jpeg)
 
![Early Prototype Sketch 2](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d4d3379a7088c922e34084_AGV_vUcy204zxMhHKcym_zgO_-MVoo44mh_CnsQUli3wDqpFe5HbIs7aipS1_sq_tyrD8Iw_CsNmBalL-wDOlYzIy8oq_ziapjSB_dsRW4FazwHBpi3Is7YjJS-Gc_poOyJ1Lqh-QJTMbF4itLSXnEawP8JAKFMVG4KH%3Ds2048.jpeg)
 
I used **ShapesXR** on my Meta Quest 3 to build the initial VR prototype, importing 3D environment assets from Sketchfab and integrating UI components designed in Figma. This let me test spatial layout and interaction feel inside an actual headset — not just on a flat screen.
 
![VR Prototype in Environment](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d51ea6f01d679b5aea5947_AGV_vUcDhT4WZCTr-rhAn_jUViZP8t8VJ0j17oeKLzhZw1r4uDKBgaQLUYjQset4lYUTzWZqDTwSFVRbrqhCErajUQx-pZAwwI9YbdbyImC7K9o4iMtp5AapD9QPSgjzV7JC7al02YRKIhWDihPYrebLn7rV1FRr5LD5%3Ds2048.jpeg)
 
**Key features prototyped:**
- **Voice-to-text journaling** — hands-free writing inside VR using speech recognition
- **Emotional recognition prompts** — guided questions designed to encourage deeper self-reflection
- **Immersive environments** — calming, customizable spaces designed to reduce external distraction
 
Each iteration was tested with real users before moving to the next version.
 
---
 
## Usability Testing — Within-Subjects Design
 
To isolate VR's unique contribution, I designed a **3-day within-subjects study** where every participant experienced all three conditions:
 
| Day | Condition |
|---|---|
| Day 1 | Traditional journaling on paper |
| Day 2 | Journaling in the MankoVR prototype (Meta Quest 3) |
| Day 3 | Journaling via mobile app (MindShift) |
 
This design controlled for individual differences — each person was their own baseline — making VR's impact measurable against direct alternatives.
 
**Testing objectives:**
- Evaluate physical and psychological comfort during VR use
- Assess interface intuitiveness and learnability
- Measure engagement depth and sense of immersion
- Identify interaction problems and technical friction
- Test how effectively guided prompts supported reflective writing
- Compare subjective experience across all three conditions
 
---
 
## Testing Results
 
![Usability Testing Outcomes](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d52551dc72582cf7bb081c_Screenshot%202025-03-15%20at%202.57.43%20AM.png)
 
On Day 3, participants completed a post-study survey rating their experience across all three conditions.
 
![Post-Study Survey Results 1](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d52568c62a36d6c6198546_AGV_vUcy_lWnU2K3cJcRvxkUmD9tvKrUT8f-Iy4CYg3ybQHO-eKt9j3-gdhg7wcMm_uq32V8iFC-Dy9bbWUNONsHu45k0lTC-fJKDnHiDtDp-jPPVduS0aUl2SXuzFbGGydk7Z8tsFS1vlkOm1LK4qpbbAGv8ljwfd58%3Ds2048.png)
 
![Post-Study Survey Results 2](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d525688bb68546dda6e333_AGV_vUd-eUVUFuKrINY7YioVdxW-PXs7302OsUqbE957Yy_5NNpPn0_jAzOdfdOCEnfO-ZhDUQs5XeNTDEmzSKSEyZNuiYy95Yy998V3vmh1Q9YZoSLjJ3X9NFB-Svg0czlJuq-iuzZ9nt-xyJSL9xByxivwyoAMb_WR%3Ds2048.png)
 
![Post-Study Survey Results 3](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d52575cbff40c07cd97293_AGV_vUfFgd_qEHoQWO6cAow_pkJ7qbWUDY47OdETT9pY26MW36XprpmxotaDVGmY-cO29uMo7_a1GvvV_nx3rrkOOT1qI9SfCk6STN3FZDFK7tliR7vhihjQh6c5PsBJL_TDQlW8SoT1QTBcmRba33jhtaVURNGFmeZ5%3Ds2048.png)
 
![Analysis Metrics](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d525ba7797f8f4a797d99b_Screenshot%202025-03-15%20at%202.59.58%20AM.png)
 
### Key Findings
 
**Engagement:** VR produced significantly higher engagement — participants reported stronger emotional resonance and a greater sense of presence compared to mobile or paper journaling.
 
**Usability challenges:** Navigation and user fatigue emerged as friction points, addressed iteratively across prototype versions. These were known costs of VR; the question was whether the benefits outweighed them — and for this use case, they did.
 
**Therapeutic potential:** Participants described VR journaling as feeling more *intentional* — the act of entering the environment created a ritual-like quality that primed deeper reflection.
 
![Final Findings Summary](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d525e1f66e4ec40e045c6e_Screenshot%202025-03-15%20at%203.00.34%20AM.png)
 
---
 
## Outcomes & Implications
 
All three hypotheses were supported:
 
| Hypothesis | Result |
|---|---|
| VR will outperform mobile in engagement | ✅ Confirmed — users reported higher emotional impact and presence |
| Well-designed VR will match mobile usability | ✅ Confirmed with caveats — navigation needed iteration, but overall usability scores were competitive |
| VR will deliver more effective therapeutic interventions | ✅ Supported — immersive context meaningfully enhanced reflective depth |
 
MankoVR demonstrates that VR mental wellness isn't just a clinical tool — it has real potential as an everyday practice, particularly when designed around habits people already have, like journaling.
 
---
 
## Reflection
 
This project taught me that **the most interesting design problems live in the gaps between existing solutions**. Every competitive analysis I've ever done has surfaced incremental differences. MankoVR was different — there was a complete absence of journaling in VR, not just a weak version of it.
 
Running a solo research project also pushed me to be rigorous in ways that team projects don't always demand. Without collaborators to pressure-test my thinking, I had to build that rigor into my methodology — the within-subjects design, the three-day structure, the post-study survey — to make sure my findings were defensible, not just directionally interesting.
 
**What I'd build next:**
- AI-generated personalized journaling prompts that adapt to mood patterns over time
- Longitudinal tracking of emotional well-being across sessions
- Accessibility modes for users with motion sensitivity or limited VR experience
- Expanded input methods — handwriting recognition, controller typing, voice and text hybrid
 
---`
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
    content: `## About Vrroom VR

I crafted a **virtual reality Vespa scooter simulation** using Unity, incorporating Oculus Integration, for an immersive riding experience. Players accelerate by pressing trigger buttons on their VR controllers and steer by turning their head.

Vrroom VR is a first-person virtual reality scooter simulation built in Unity for the Meta Quest 2. Players ride a Vespa through an interactive street environment — accelerating with the controller triggers, steering with head rotation, and triggering dynamic collision effects as they navigate the world.
 
This project sits at the intersection of **interaction design and technical development** — every mechanic required both a design decision (how should this *feel*?) and an implementation solution (how do I *build* this?). Working solo across the full stack, from ideation through scripting, gave me a ground-level understanding of how UX decisions manifest in real-time 3D interaction.
 
---
 
## Phase 1: Ideation — Designing for Controller Affordances
 
The first design question was how to map real-world scooter mechanics to VR controller input in a way that felt *physical* and intuitive, not abstract.
 
My initial concept was to use the controllers as scooter handlebars — held parallel to the floor, tilted to steer, with triggers as accelerators. This felt right conceptually: it mirrored the actual act of riding.
 
![Ideation Sketch 1](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d47d29b88e5d56191eb76c_669187feba320e5b27c6114d_667a2e647ce4944d3b8625ce_image%2525203.png)
 
![Ideation Sketch 2](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d47d2aa8952d765f1aa818_669187fe553c69c7f84e4119_667a2e0f4c420b6c32bf58da_image%2525204.png)
 
![Ideation Sketch 3](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d47d292f6e6ecf037e16f1_669187fea54504d966f6c0e4_667a2e06cd8c3f965054b054_image%2525205.png)
 
### First Roadblock: Tilt Calibration
 
Implementing the tilt-to-steer mechanic proved harder than expected. Accurately calibrating Y-axis controller rotation and translating it to smooth scooter steering introduced precision and jitter issues that would have required significant time to resolve cleanly.
 
Rather than shipping a broken mechanic, I made a deliberate pivot: **steering via head rotation**. This was a pragmatic trade-off — head-based steering is less physically mimetic, but it's reliable, consistent, and actually maps well to how riders look into turns in real life. The interaction *feels* grounded even if it's not controller-driven.
 
This decision taught me something important early: **in interaction design, a polished simpler mechanic beats an ambitious broken one every time.**
 
---
 
## Phase 2: Prototyping the Scooter Model
 
With the interaction model decided, I moved into Unity to build the physical foundation.
 
**Setup:** Created a new 3D URP project in Unity with the [Oculus Integration package](https://developers.meta.com/horizon/downloads/package/unity-integration/) installed for Meta Quest 2 compatibility.
 
**White-boxing first:** I prototyped with a basic geometric scooter model on a flat plane before introducing any visual detail — keeping early iteration fast and focused on mechanics, not aesthetics.
 
**Player positioning:** Integrated an OVR Player Controller positioned to simulate sitting on the scooter, with left and right handles attached to the controller's hand anchors for a physically grounded riding posture.
 
![Prototype Model Overview](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d47d4b07244ccaa6aa99bc_66918831a5230eba8fdc8dee_667a2f6bd248b3f315142f27_Group%252520165.png)
 
![Handle Alignment Work](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d47d4bb7691ea36ba6f388_669188327ff8807ac60ed87e_667a2f8c749c53c580ae8bb2_Screenshot%2525202024-03-27%252520at%2525208.33.png)
 
### Second Roadblock: Handle Misalignment
 
During Quest 2 headset testing, the handles were rendering rotated 90 degrees off-axis — a mismatch between the model's coordinate system and Unity's runtime transform. I corrected this with manual orientation adjustments and added a center sphere as a spatial reference guide, using an average transform script to standardize handle distance and spacing.
 
Small fix, but it reinforced a core principle: **always test in the actual target hardware early.** Emulator previews don't catch spatial alignment issues.
 
---
 
## Phase 3: Movement Mechanics
 
### Acceleration
 
I wrote a custom accelerator script that listens for the **Secondary Index Trigger** on either Meta Quest controller and applies forward velocity to the scooter's rigidbody. Pressing the trigger moves the scooter forward; releasing it decelerates naturally.
 
![Accelerator Script](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/69169504ab9b311578d9323b_Screenshot%202025-11-13%20at%209.32.48%20PM.png)
 
### Steering
 
Steering reads the player's **head orientation** via the OVR camera rig, extracting the Y-axis rotation (horizontal turn) and applying it to the scooter's direction vector — with vertical head movement intentionally excluded to keep forward momentum stable and prevent nausea-inducing tilts.
 
The result is a steering model that feels natural: look left, the scooter drifts left. It mimics the visual-motor loop of real riding without requiring precise controller manipulation.
 
---
 
## Phase 4: Building the Game Environment
 
With core mechanics working, I shifted focus to building an environment worth riding through.
 
**Assets sourced from:**
- [Unity Asset Store](https://assetstore.unity.com/) — detailed Vespa model, houses, road surfaces
- [Sketchfab](https://sketchfab.com/) — vehicles, lamp posts, traffic cones, animals
- [Mixamo](https://www.mixamo.com/) — animated player character
 
Replacing the white-box scooter with the detailed Vespa model was the single biggest leap in perceived quality — a reminder that **visual fidelity directly affects immersion**, especially in VR where users are fully surrounded by the environment.
 
![Game Environment](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d47d763576770286fb64bc_6691892e7fd89cd15de4351e_667a30fd77eb9c4eac93a8aa_Group%252520166.png)
 
---
 
## Phase 5: Collision Dynamics
 
The final phase focused on making the world feel *alive* — responsive to the player's movement rather than static scenery.
 
I implemented a range of collision mechanics covering all major Unity collider interaction types:
 
| Collision Type | Behavior |
|---|---|
| Non-trigger + rigidbody vs. non-trigger without rigidbody | Lamp post color change on contact |
| Trigger collider vs. non-trigger with rigidbody | Animal audio triggers on proximity |
| Non-trigger + rigidbody interactions | Particle effects on scooter collision |
 
![Collision System Overview](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d48766fdf9dba83b7e1c59_669189467fd89cd15de446da_667a4e1106e3891bdbf4a75c_Group%252520168.png)
 
![Collision Script](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/6916952225b7b4b092df7064_Screenshot%202025-11-13%20at%209.33.10%20PM.png)
 
**Highlighted implementation — lamp post color change:**
 
When the scooter collides with a lamp post, a C# script detects the collision event and programmatically changes the post's material color. This uses a Non-Trigger Collider with Rigidbody against a Non-Trigger Collider without Rigidbody — one of the more nuanced collision type combinations in Unity.
 
![Lamp Post Collision Detail](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/67d47dc567a3aac2181209ce_66918979aff493b411fe56e1_667a49e925fb0289df630ab2_Group%252520167.png)
 
![Lamp Post Script](https://cdn.prod.website-files.com/67d39c312a0327f90c0a8ed3/6916953ae1b0e9ab9cd668a9_Screenshot%202025-11-13%20at%209.33.18%20PM.png)
 
These collision systems transformed the environment from a backdrop into a dynamic space — animals react, objects respond, the world pushes back.
 
---
 
## Key Learnings
 
**Interaction design and technical constraints are inseparable in VR.** Every design decision I made — head steering instead of tilt, trigger-based acceleration, excluded vertical head movement — was shaped directly by what was technically reliable. In VR development, you can't design for the ideal interaction and hand it to an engineer. You have to understand the medium well enough to design *within* it.
 
**Rapid pivoting is a skill, not a compromise.** The shift from tilt-steering to head-steering wasn't a failure — it was a judgment call based on real testing. Shipping something that works and feels good beats a technically ambitious mechanic that breaks immersion.
 
**White-boxing saves time.** Testing mechanics on geometric primitives before committing to detailed assets meant I could iterate fast on the things that mattered most — feel, timing, collision response — without being slowed down by visual complexity.
 
**What I'd build next:**
- Tilt-based steering with improved Y-axis calibration and dead-zone tuning
- A scoring system with time trials or obstacle challenges
- Haptic feedback patterns mapped to terrain type (smooth road vs. cobblestone)
- Multiplayer support for head-to-head scooter racing
 `
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
