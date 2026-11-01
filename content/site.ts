// All site copy lives here so wording changes need no component edits.

export const nav = {
  logoText: "Boardlytics",
  links: [
    { label: "Board Meet", shortLabel: "Meet", href: "/board-meet" },
    { label: "Platform", shortLabel: "App", href: "/platform" },
    { label: "How it works", shortLabel: "Works", href: "/how-it-works" },
    { label: "Security", shortLabel: "Trust", href: "/security" },
    { label: "About", shortLabel: "About", href: "/about" },
  ],
  ctaDesktop: "Join the waiting list",
  ctaMobile: "Join the list",
  login: { label: "Log in", href: "/login" },
  signup: { label: "Sign up", href: "/register" },
};

export const hero = {
  eyebrow: "Governance technology for the modern board",
  headlineLine1: "The board meeting,",
  headlineLine2: "run properly.",
  lead: "Boardlytics runs the whole meeting in one secure place: the call, the agenda, quorum, votes, conflicts and the minutes, captured as evidence. Built for company secretaries, chairs and directors.",
  ctaPrimary: "Join the waiting list",
  ctaSecondary: "See Board Meet",
  highlights: [
    "Live transcript by speaker",
    "Minutes in a minute",
    "Votes and quorum on screen",
  ],
  meeting: {
    title: "Board of Directors · Q4 Meeting",
    statusLeft: "Transcribing",
    statusRight: "AI analysis on",
    timer: "00:42:18",
    seats: [
      { initials: "AO", role: "Chair", speaking: true },
      { initials: "FK", role: "Director", speaking: false },
      { initials: "TN", role: "Director", speaking: false },
      { initials: "EB", role: "Director", speaking: false },
      { initials: "MI", role: "Director", speaking: false },
      { initials: "CS", role: "Co. Secretary", speaking: false },
    ],
    transcript: [
      { time: "14:21:08", speaker: "Adeaze Okafor · Chair", line: "We now move to item 4, the audited accounts. The auditors' report is in your pack." },
      { time: "14:21:40", speaker: "Femi Kalu", line: "I move that the statements be approved." },
      { time: "14:21:47", speaker: "Tolu Nwosu", line: "Seconded." },
    ],
    resolution: {
      label: "RESOLUTION 2 · ORDINARY · VOTING OPEN",
      text: "To approve the audited financial statements for the year ended 31 December 2025.",
      forVotes: 5,
      against: 1,
      abstain: 0,
      recusal: "1 director recused (conflict declared)",
      result: "Carried",
    },
    quorum: "Quorum · 6 of 7 present",
    quorumStatus: "Met",
  },
};

export const builtFor = {
  label: "Built for",
  items: [
    "Company secretaries",
    "Chairs and directors",
    "Listed companies",
    "Banks and regulated institutions",
    "Pension funds and asset managers",
  ],
};

export const visionMission = {
  eyebrow: "Vision and mission",
  heading: "Why Boardlytics exists.",
  lead: "A clear view of where we are going, and the work that gets us there.",
  cards: [
    {
      label: "Vision",
      heading: "Every board meeting run with the same rigour as its decisions.",
      body: "We want board governance to be as well recorded and as well evidenced as the decisions it produces, for every board, not just the largest.",
    },
    {
      label: "Mission",
      heading: "Give company secretaries and chairs one secure place to run the meeting and keep the record.",
      body: "We build the tools that make quorum, votes, conflicts and minutes part of the meeting itself, captured as it happens, not reconstructed afterwards.",
    },
  ],
};

export const about = {
  eyebrow: "About us",
  heading: "Built by people who have sat where you sit.",
  lead: "Boardlytics is led by governance practitioners who have run the board process by hand, long before they set out to build the software for it.",
  values: [
    {
      label: "Practitioner-built",
      heading: "Designed from the board table, not around it",
      body: "Every workflow in Boardlytics was shaped by people who have convened meetings, chased signatures and kept statutory registers themselves — not by guessing at what a company secretary needs.",
    },
    {
      label: "Evidence first",
      heading: "Every decision, properly documented",
      body: "Boards are judged on their record. Boardlytics treats minutes, votes and conflicts as evidence to be captured accurately, not paperwork to be caught up on later.",
    },
    {
      label: "Human in charge",
      heading: "AI that assists, never decides",
      body: "Our AI briefs directors, flags compliance gaps and drafts minutes — but authority and accountability stay exactly where they belong: with the chair, the directors and the company secretary.",
    },
  ],
  people: [
    {
      photo: "/team/joyce-abu-mallam.png",
      role: "Managing Director/CEO",
      name: "Joyce Abu Mallam",
      credentials: "LL.B, University of Abuja · Nigerian Law School",
      bio: [
        "Joyce Abu Mallam is the Managing Director/CEO of Boardlytics, a lawyer and corporate governance professional who has served as Company Secretary to more than 10 organisations.",
        "She has served as Company Secretary to over 10 micro, small and medium-sized enterprises (MSMEs) and several non-profit organisations, providing governance support and helping organisations establish and maintain effective corporate governance structures. Her experience gives her a practical understanding of the responsibilities of boards, directors and company secretaries, and of the systems required to support effective decision-making.",
        "In that work, Joyce manages the board process from end to end: convening board and general meetings, preparing and coordinating board papers, recording minutes, drafting resolutions, maintaining statutory registers and keeping each organisation compliant with its filing obligations to the Corporate Affairs Commission. She has also helped young companies and non-profits put governance in place from the start, from board structures and governing documents to the routines that keep records accurate and decisions properly documented.",
        "She is Deputy Managing Partner at GPS Legal & Consulting in Abuja, where she leads the firm's company secretarial and governance support for corporate clients alongside its business law and regulatory compliance advisory.",
        "Her governance practice is grounded in regulated, institutional settings. As Legal and Compliance Officer at Zenith Bank in The Gambia, she worked with the bank's Legal Counsel and Company Secretary, maintained the statutory registers and records required under Gambian company law, and supported secretarial, policy and compliance work within a regulated financial institution. Earlier, at the Corporate Affairs Commission, she registered more than 100 businesses and advised start-ups on their incorporation and early obligations. At Reformers League she led prison decongestion and pro bono legal services for three years and received the organisation's Merit Award in 2019.",
        "Joyce's appointment as Managing Director/CEO of Boardlytics follows directly from this work. She has prepared the board packs, chased the signatures, written the minutes and kept the registers that Boardlytics is built to simplify, and she knows where manual governance processes slow boards down and expose organisations to risk. That firsthand experience shapes how she leads the company and how its products are designed for directors and company secretaries.",
        "Joyce holds a Bachelor of Laws (LL.B) from the University of Abuja and trained at the Nigerian Law School.",
      ],
    },
    {
      photo: "/team/hossana-gani.jpg",
      role: "Founder",
      name: "Hossana Gani, Esq.",
      credentials: "LL.B, B.L., MBA, ACIS, DipCorpGov, DipESG",
      bio: [
        "Hossana Gani founded Boardlytics on the conviction that institutions across the globe deserve governance that is as rigorous, transparent and intelligent as the highest standards demand, and that technology can make this possible.",
        "His founding vision for Boardlytics is to help build a future where every board meeting is effectively managed, every decision is properly documented and supported by evidence, and every director has the tools and information needed to discharge their responsibilities effectively.",
        "At the heart of this vision is AI-enabled governance support: intelligent tools that brief directors, monitor compliance, assist with the preparation of board minutes, and provide governance insights to boards, while preserving human oversight and ensuring that ultimate authority and accountability remain with the chair, directors and other responsible decision-makers.",
        "Hossana is a Nigerian-qualified barrister and solicitor and a Chartered Company Secretary (ACIS), with extensive experience in corporate governance, regulatory affairs, legal practice and company secretarial administration. He holds an LL.B, a B.L. and an MBA, alongside professional diplomas in Corporate Governance and Environmental, Social and Governance (ESG) from The Corporate Governance Institute, UK & Ireland, where he is a member.",
        "Having conceived the idea and established the founding vision for Boardlytics, Hossana has entrusted its execution to the company's designated leadership. He remains a shareholder and holds no board, executive or operational position in the company. Boardlytics is governed by its Board of Directors and managed day to day by its management team.",
      ],
    },
  ],
};

export const why = {
  eyebrow: "Why Boardlytics",
  heading: "Video calls host a meeting.\nBoardlytics runs it.",
  lead: "General video tools were not built for board governance. Boardlytics treats every meeting as a governance record from the first word to the signed minutes.",
  columns: [
    {
      oldWay: "Head-count in a chat window",
      heading: "Quorum, checked live",
      body: "Attendance is taken automatically and checked against your quorum rule throughout the meeting.",
    },
    {
      oldWay: "“Any objections?”",
      heading: "Votes that stand up",
      body: "Motions are moved, seconded and voted on screen, with conflicts declared and recused members left out of the count.",
    },
    {
      oldWay: "Minutes typed up a week later",
      heading: "Get your minutes in a minute.",
      body: "AI drafts the minutes by agenda item, and every decision links back to the exact words spoken.",
    },
  ],
};

export const platform = {
  eyebrow: "The platform",
  heading: "Everything the board needs, in one place.",
  lead: "Boardlytics brings the board meeting and the work around it together, starting with Board Meet, our secure meeting room.",
  cards: [
    {
      id: "board-meet",
      label: "Featured",
      name: "Board Meet",
      line: "The secure board meeting room, with the governance built in.",
      featured: true,
      features: [
        "Timed agenda with a live timer for each item",
        "HD video with live, speaker-named transcript",
        "In-meeting AI copilot for catch-up and motions",
        "Motions, voting, quorum and conflicts on screen",
        "AI-drafted minutes linked to the transcript",
        "Decisions register and action tracking",
        "Mark any moment for the minutes with one click",
        "AI board advisors in the meeting",
        "Personal AI note-takers blocked",
      ],
    },
    {
      id: "board-governance",
      label: "Between meetings",
      name: "Board governance",
      line: "The work before and after every meeting, for company secretaries and directors.",
      featured: false,
      features: [
        "Board packs, agendas and approvals",
        "Compliance co-pilot grounded in Nigerian law and codes",
        "Regulatory returns and filing tracker",
        "Board performance and evaluation",
        "Templates for papers, policies and charters",
      ],
    },
  ],
  worksWithPortal: "Use Boardlytics on its own, or inside the board portal you already have.",
};

export const boardMeetRows = {
  eyebrow: "Board Meet",
  heading: "Everything the company secretary needs, inside the meeting.",
  lead: "From the lobby to the signed minutes, Board Meet keeps the record as the meeting happens.",
  rows: [
    {
      heading: "A transcript you can rely on",
      body: "Each person is transcribed on their own stream, so every line is named and timed. Search every meeting you are entitled to see.",
      bullets: [
        "Speaker-attributed, time-stamped lines",
        "Recovers after a dropped connection",
        "Full-text search across past meetings",
        "Mark any moment for the minutes with one click",
      ],
      panel: "transcript",
    },
    {
      heading: "A copilot that works for the board",
      body: "Joined late? Ask what you missed. Need a motion? It drafts it in formal board wording, with where each point came from.",
      bullets: [
        "Catch-up on discussion, motions and open questions",
        "Drafts motions and resolutions",
        "Takes attendance and checks quorum, only after you approve",
      ],
      panel: "copilot",
    },
    {
      heading: "Motions, votes and conflicts on screen",
      body: "The chair tables a motion, it is moved and seconded, and directors vote. Board Meet checks quorum and the majority before showing the result.",
      bullets: [
        "For, Against and Abstain with a live tally",
        "Conflicts declared and recused members excluded",
        "Results flow into the minutes and the decisions register",
      ],
      panel: "vote",
    },
    {
      heading: "Get your minutes in a minute.",
      body: "The draft is ready as the meeting closes. AI writes it by agenda item. The company secretary edits, approves and exports them, and every decision links back to the transcript.",
      bullets: [
        "Summary, decisions and action items per agenda item",
        "Edit, approve and export to PDF",
        "Decisions register and tasks built automatically",
      ],
      panel: "minutes",
    },
    {
      heading: "An AI advisor at the table.",
      body: "Invite an AI board advisor into the meeting. It answers the board's questions on governance, law, regulation and your past decisions, with sources, and speaks only when the chair asks.",
      bullets: [
        "Answers on governance, law, regulation and past decisions",
        "Always shows its sources",
        "Speaks only when the chair asks — never votes, never a director",
      ],
      panel: "advisor",
    },
  ],
};

export const aiControls = {
  eyebrow: "AI you can control",
  heading: "AI that keeps the board in charge.",
  lead: "Directors always know when AI is listening, and nothing happens without a person's approval.",
  optionalLine: "AI is optional. Use Boardlytics with or without AI features, to suit your policies and budget.",
  points: [
    { heading: "Always visible", body: "“Transcribing” and “AI analysis” stamps stay on screen for everyone." },
    { heading: "Host switch", body: "The chair or company secretary can turn AI analysis off for the whole meeting." },
    { heading: "Approve first", body: "The copilot suggests; a person approves before anything is recorded." },
    { heading: "Sources shown", body: "Every summary and decision points back to the words it came from." },
  ],
};

export const betweenMeetings = {
  eyebrow: "Between meetings",
  heading: "Governance and compliance, between meetings too.",
  lead: "Board packs, approvals, compliance and board performance in one place. Directors work from the app; the company secretary sees what is due and what is done.",
  features: [
    { heading: "Board packs and approvals", body: "Agendas, papers and approvals, read securely on any device." },
    { heading: "Compliance co-pilot", body: "Answers grounded in Nigerian law, codes and regulations, with sources." },
    { heading: "Regulatory returns", body: "Returns prepared and tracked to their deadlines, with evidence kept." },
    { heading: "Board performance", body: "Evaluations and a board performance index the chair can act on." },
  ],
  phone: {
    greeting: "Good morning, Femi",
    items: [
      { title: "Board meeting", subtitle: "Thursday · 14:00 · Board Meet", action: "Join" },
      { title: "Q4 board pack", subtitle: "9 papers · 2 unread", action: "Read" },
      { title: "Approve circular resolution", subtitle: "Due tomorrow", action: "Sign" },
      { title: "Declare interests", subtitle: "Annual declaration", action: "Open" },
      { title: "Board evaluation 2026", subtitle: "12 questions", action: "New" },
    ],
  },
};

export const security = {
  eyebrow: "Security",
  heading: "Built for confidential boardroom work.",
  lead: "Board papers and deliberations are among the most sensitive records a company keeps. We designed for that from the start.",
  deployment: {
    heading: "Licensed for your whole organisation.",
    options: ["Boardlytics cloud", "Your own Azure tenant", "On your own servers"],
  },
  cells: [
    { heading: "No outside note-takers", body: "Personal AI note-takers and recording bots cannot join. The board keeps one approved record, not copies on other people's apps." },
    { heading: "Invitation-only rooms", body: "Only people on the meeting roster can join. Guests wait in the lobby until a host admits them." },
    { heading: "Access follows the board", body: "People see the organisations and committees they sit on, and nothing else." },
    { heading: "Papers encrypted at rest", body: "Every document is stored encrypted, in transit and at rest, with a fresh secure token on every join." },
    { heading: "A complete record", body: "Attendance, votes, decisions and approvals are logged as the meeting happens." },
    { heading: "Data protection", body: "Designed to support the Nigeria Data Protection Act 2023 and clients' own policies." },
    { heading: "A trail on every document", body: "Who viewed, changed or shared a paper, and when, kept with the paper." },
    { heading: "Recording under control", body: "Only hosts can record, and every recording is logged." },
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  heading: "Before, during and after every meeting.",
  columns: [
    {
      label: "Before",
      heading: "Prepare",
      items: ["Agenda and board pack", "Roster and invitations", "Lobby with camera and mic check"],
    },
    {
      label: "During",
      heading: "Decide",
      items: ["Timed agenda with a live timer for each item", "Live transcript and copilot", "Quorum, motions and votes", "Conflicts and recusals"],
    },
    {
      label: "After",
      heading: "Record",
      items: ["AI-drafted minutes with sources", "Approval and PDF export", "Decisions register and tasks"],
    },
  ],
};

export const waitlist = {
  eyebrow: "Early access",
  heading: "The future is now.",
  sub: "Join the waiting list. We are opening Boardlytics to a small group of organisations first. Tell us about yours and we will be in touch.",
  offer: [
    { title: "Priority access", body: "Be among the first boards to use Boardlytics." },
    { title: "A guided set-up", body: "We help you set up your boards, committees and first meeting." },
    { title: "Founding-client terms", body: "Preferential pricing for early organisations." },
  ],
  roles: [
    "Company secretary",
    "Chair or director",
    "CEO or executive",
    "Legal or compliance",
    "Technology or partnerships",
    "Other",
  ],
  orgTypes: [
    "Listed company",
    "Bank or financial institution",
    "Pension or asset manager",
    "Private company",
    "Public sector or regulator",
    "Non-profit",
    "Board portal or platform",
  ],
  countries: ["Nigeria", "Ghana", "Kenya", "South Africa", "Rwanda", "Other"],
  interests: [
    { id: "boardMeet", label: "Board Meet", defaultChecked: true },
    { id: "boardPacks", label: "Board packs and approvals", defaultChecked: false },
    { id: "compliance", label: "Compliance and returns", defaultChecked: false },
  ],
  consentLabel: "I agree that Boardlytics may contact me about early access. We will use your details only for this and handle them under our privacy notice.",
  submit: "Join the waiting list",
  successTitle: "You're on the list",
  successBody: "Thank you. We have sent a confirmation to your email and will be in touch with next steps.",
  errorBody: "We couldn't add you just now. Please try again in a minute.",
};

// Per-page overrides for the waitlist CTA: a heading tied to what the
// visitor was just reading, and which "Most interested in" box starts
// checked. Falls back to waitlist.heading / waitlist.interests above.
export const waitlistByPath: Record<string, { heading?: string; defaultInterest?: string }> = {
  "/board-meet": {
    heading: "Ready to run the meeting properly?",
    defaultInterest: "boardMeet",
  },
  "/platform": {
    heading: "Ready for one place for the whole board?",
    defaultInterest: "boardPacks",
  },
  "/security": {
    heading: "Ready to secure your board's records?",
    defaultInterest: "compliance",
  },
  "/about": {
    heading: "Ready to bring your board into Boardlytics?",
  },
};

export const footer = {
  tagline: "Intelligent insights. Stronger governance. Better decisions.",
  company: "© 2026 Boardlytics Limited · Lagos, Nigeria",
  disclaimer:
    "Boardlytics Limited is a company secretarial and board governance technology provider, registered in Lagos, Nigeria. Boardlytics is not a law firm and does not provide legal advice.",
  contactEmail: "info@boardlytics.com", // TODO: confirm real contact address before launch
  columns: [
    {
      heading: "Product",
      links: [
        { label: "Board Meet", href: "/board-meet" },
        { label: "Platform", href: "/platform" },
        { label: "How it works", href: "/how-it-works" },
        { label: "Security", href: "/security" },
      ],
    },
    {
      heading: "Company",
      links: [{ label: "About us", href: "/about" }],
    },
    {
      heading: "Legal & support",
      links: [
        { label: "Privacy notice", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
  cta: {
    heading: "Boardlytics",
  },
};

export const privacy = {
  eyebrow: "Privacy notice",
  heading: "How we handle your waiting-list details.",
  lead: "This notice covers the information you give us when you join the Boardlytics waiting list. It will be replaced by a full privacy policy before the product launches.",
  updated: "Last updated: 30 October 2026",
  sections: [
    {
      heading: "What we collect",
      body: "When you join the waiting list we collect your full name, work email, organisation, role, organisation type, country, and which parts of Boardlytics you are most interested in. If you tick the consent box, we also keep a record that you agreed to be contacted, together with the date and time, the page you came from, and any campaign tags attached to that visit.",
    },
    {
      heading: "Why we collect it",
      body: "We use these details only to get in touch about early access to Boardlytics: to tell you when a place opens up, to help you get set up, and to understand which organisations are interested in which parts of the product. We do not use it for anything else, and we do not sell or rent it to third parties.",
    },
    {
      heading: "How we store it",
      body: "Waiting-list entries are stored with access limited to named members of the Boardlytics team. We are designed to support the principles of the Nigeria Data Protection Act 2023; we do not claim formal certification, and will update this notice if that changes.",
    },
    {
      heading: "How long we keep it",
      body: "We keep waiting-list details for as long as the waiting list is open, and for a short period after, so we can follow up with everyone who asked to join. [TODO — founder to confirm a specific retention period before launch.]",
    },
    {
      heading: "Your rights",
      body: "You can ask us what we hold about you, ask us to correct it, or ask us to delete it, at any time. [TODO — founder to confirm a real contact address before launch; placeholder below.]",
      contact: "info@boardlytics.com",
    },
    {
      heading: "Cookies and analytics",
      body: "We do not set tracking cookies without first asking your consent. Once analytics are added to this site, we intend to use a privacy-friendly tool, such as Plausible or Vercel Analytics, to count visits and sign-ups rather than track individuals. [TODO — this site does not yet have analytics wired up; update this section once it does.]",
    },
  ],
};

export const terms = {
  eyebrow: "Terms",
  heading: "The terms for this website and the waiting list.",
  lead: "Boardlytics has not launched yet. These terms cover this website and the waiting list only. They will be replaced by full terms of service when the product itself goes live.",
  updated: "Last updated: 31 October 2026",
  sections: [
    {
      heading: "What this covers",
      body: "Boardlytics is still in development and has not launched as a product. This page sets out the terms for using boardlytics.com and for joining the waiting list described on it. It does not cover a live Boardlytics product, because one does not exist yet. We will publish separate terms of service before the product launches.",
    },
    {
      heading: "Joining the waiting list",
      body: "When you submit the waiting-list form, you are asking to be contacted about early access to Boardlytics. Joining the list does not create a contract for any product or service, does not guarantee you access, and does not commit you or Boardlytics to anything beyond what is described in our privacy notice.",
    },
    {
      heading: "Accuracy of information on this site",
      body: "We try to keep this website accurate, but it describes a product that is still being built. Features, pricing, availability and timelines described here may change before launch. Nothing on this site is a binding offer to supply a product or service.",
    },
    {
      heading: "Acceptable use",
      body: "You agree not to misuse this website: no attempting to access it in unauthorised ways, no submitting the waiting-list form with false information, and no using it to send unsolicited communications to us or to interfere with the site's operation.",
    },
    {
      heading: "No warranty",
      body: "This website and its content are provided as they are, without warranties of any kind, to the extent permitted by law. We are a company in development, not a provider of a live, supported product at this stage.",
    },
    {
      heading: "Changes to these terms",
      body: "We may update these terms as the site and the waiting list evolve. The date above shows when they were last changed. [TODO — founder to confirm a real contact address before launch; placeholder below.]",
      contact: "info@boardlytics.com",
    },
  ],
};

export const meta = {
  title: "Boardlytics | Board meeting and governance software",
  description:
    "Boardlytics runs the whole board meeting in one secure place: video, quorum, votes, conflicts and AI minutes with evidence. Join the waiting list.",
};
