import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    agree: {
      action: "Read the standards",
      pay:
      "The roles are unpaid for now. You do the work for free while Trebired grows, and as it becomes something bigger, " +
        "the people who built it are the ones promoted to its senior positions.",
      text:
      "Everything you write is published under your name and held to the organization's standard: one shared preset, " +
        "enforced in every codebase, and an app that breaks it does not run.",
    },
    conditionsTitle: "Build now, *lead* later",
    decided: {
      action: "Get in touch",
      text: "Every application is read by a person, and an answer that is no arrives as a no. Nobody asks for your age, your school, your degree " +
        "or your previous employers.",
      title: "Made up your mind?",
    },
    pick: {
      anywhere: "Anywhere public",
      label: "This one",
      text:
      "We do not count squares. Fifty tutorial repositories, a committed node_modules, no README and no tests tell us " +
        "less than one finished project with clear code, a clear purpose and documentation.",
    },
    lead: "The organization is looking for people to grow with. These are the open roles, what you agree to by taking one, and what to send.",
    notice: {
      apply: "Get in touch about the {{role}} role",
      contact: "Get in touch",
      label: "Open role",
      openings: { one: "{{count}} open position", other: "{{count}} open positions" },
    },
    send: {
      lead:
      "Send a link to one real project: something you built that does a job, with code a stranger can follow, a README " +
        "that says what it is for, and a history that makes sense. Wherever it is hosted.",
      title: { first: "Show us", second: "what you built" },
    },
    roles: {
      backend: {
        text:
        "Services, data and the machines they run on: schemas and migrations, the boundaries between a product and its " +
          "store, and the agent work that keeps a host answering. Bun and TypeScript, Rust where the cost of a hot path " +
          "justifies it.",
        title: "Backend developer",
      },
      designer: {
        text:
        "Interfaces, marks and the systems that keep them consistent: type scales, colour, spacing, and the documents that " +
          "say how each is used. Design that ships as tokens and components, not as a picture handed to someone else.",
        title: "Designer",
      },
      frontend: {
        text:
        "The rendered product: server-rendered React, the component and container system, accessibility, and the measured " +
          "behaviour of a page under real use. You own how it looks and how fast it arrives.",
        title: "Frontend developer",
      },
      fullstack: {
        text:
        "The whole of a product, from the schema to the rendered page, and the release that puts it in front of someone. " +
          "The broadest role here: it carries a product end to end rather than one layer of it.",
        title: "Full stack developer",
      },
    },
    rolesTitle: "Open roles",
    title: "Careers",
});
