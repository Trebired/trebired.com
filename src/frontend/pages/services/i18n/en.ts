import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    conditionsTitle: "Two conditions",
    lead:
    "What we build, each with the price it costs, and the finished projects that came out of it. Everything is agreed in " +
      "writing before anything is built.",
    offers: {
      application: {
        text:
        "When pages are not enough: accounts, orders, bookings, stock, an administration anyone on your team can use. Priced " +
          "per project after the planning, because the work is decided by what it has to do.",
        title: "A web application",
      },
      identity: {
        text:
        "A mark drawn for you, in every size and form you will actually need, with the colours and the typeface written down so " +
          "the next person who touches it cannot get it wrong. Taken alone or with any of the above.",
        title: "A logo and a visual identity",
      },
      other: {
        text:
        "Tools that run on a server and have to stay up, software that talks to hardware, systems built directly on Linux, " +
          "desktop applications. Describe what it has to do and you get a straight answer on whether we are the right people for " +
          "it and what it would cost, before anything is agreed.",
        title: "Something harder than a website",
      },
      rebuild: {
        text:
        "Your text and pictures, moved onto something current. Old sites usually fail on phones, take seconds to load, and " +
          "cannot be edited without calling someone. The rebuild fixes all three and keeps what already works.",
        title: "An old website rebuilt",
      },
      website: {
        text:
        "A new site written for what your business actually does, not filled into a template someone else sold a thousand " +
          "times. It loads fast on a phone, it can be read by a screen reader, and it carries no tracking. You get the whole " +
          "thing, including the code.",
        title: "A website built for you",
      },
    },
    offersLead:
    "What gets asked for most, with the price each one costs. Every price is for the whole thing, agreed in writing before " +
      "anything starts, and it does not move unless you change what you asked for.",
    offersTitle: "What we do and what it costs",
    openCondition:
    "Everything we build is published as open source, and agreeing to that is the condition of working with us. There is no " +
      "version of this with an exception, a private repository, or a delay until later. Your content, your data and your " +
      "credentials are yours and stay private. The code that runs them is public, in a repository under your own GitHub " +
      "account or, as we recommend, under ours.",
    openConditionTitle: "Everything is open source",
    platform:
    "Desktop software we write runs on Linux. Not on Windows, not on macOS, not later and not for a higher price. That is a " +
      "decision about what the organization is willing to maintain, and asking will not change it. Anything that runs in a " +
      "browser works everywhere a browser does, including on Windows and on a Mac.",
    platformTitle: "Linux, and nothing else",
    boundFrom: "from",
    boundMax: "up to",
    priceFrom: "from {price}",
    priceMax: "up to {price}",
    course: {
      agreed: "Agreed in writing, one price for the whole thing.",
      change: "You change what you asked for. The new number comes first.",
      done: "Handed over at the agreed price.",
      harder: "The work turns out harder. The price stays.",
      lead: "One price for the whole thing, in writing, before anything starts. There is no hourly rate underneath it.",
    },
    priceSheet: {
      first: "A price that",
      second: "stays put.",
    },
    priceTerms: {
      covers: {
        body1:
        "The work described, finished, published as open source, and handed over with the source, the licence and the " +
          "instructions. Running costs you pay directly to whoever provides them, a domain, a server, a mail service, are " +
          "named before you agree. Maintenance afterwards is optional and priced on its own.",
        heading: "What the price covers",
      },
      without: {
        body1:
        "No deposit, no retainer, no per-seat fee, no licence that expires, and no tier that unlocks what was already " +
          "built. There is no discount for closing the source, because the source is not for sale.",
        heading: "What there is not",
      },
    },
    priceQuote: "priced per project",
    process: {
      action: "Read the process",
      lead:
      "No discovery workshop and no hand-off between departments. You deal directly with the engineers building your " +
        "project, and the whole sequence from the first message to the handover is written down.",
      title: "How the work runs",
    },
    stack: {
      data: { text: "PostgreSQL for a product's own records, SQLite where the store ships inside the thing that reads it.", title: "Data" },
      desktop: { text: "Rust with Qt for software that runs on the machine itself. AdmitPress is built this way.", title: "Desktop" },
      interface: { text: "React rendered on the server, styles compiled at build time, no framework shipped to the page.", title: "Interface" },
      languages: {
        text: "Each one chosen for what it is good at: Rust for speed and safety, TypeScript for the web, Go for small services.",
        title: "Languages",
      },
      lead: "What the work is built with. The same tools on every project, so anyone can pick up where someone else left off.",
      machines: { text: "Everything is deployed to Linux servers, and desktop software is written for Linux.", title: "Machines" },
      runtime: { text: "Bun runs, builds and tests every TypeScript project, as one tool instead of four.", title: "Runtime" },
      title: "What we build with",
    },
    terms: {
      first: "Two",
      open: {
      },
      second: "conditions.",
    },
    title: "What we build and what it costs",
    workLead: "Finished work, running in the open, for clients and for ourselves.",
    workTitle: "Things we have built",
});
