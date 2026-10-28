import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    competition: {
      item1: "High upfront cost",
      item2: "Template-like solutions are common",
      item3: "Often outside a smaller budget",
    },
    heroTitle: {
      first: "Made for you.",
      second: "Not around you.",
    },
    organizationTitle: {
      first: "Own products.",
      second: "Client work.",
    },
    pricingTitle: {
      first: "Less than half.",
      second: "Higher standard.",
    },
    productPoints: {
      item1: "Custom code, no templates",
      item2: "Price ceiling of CZK 6,000",
      item3: "Built like our own products",
    },
    projects: {
      admitpress: {
        description:
        "A Linux desktop application that designs, sells and prints admission tickets, with daily numbering, group tickets, " +
          "multi-currency pricing and a full sales record.",
        kind: "Desktop application",
        tag1: "Desktop",
        tag2: "Rust",
        tag3: "Qt 6",
        tag4: "Printing",
        title: "AdmitPress",
      },
    },
    serviceItems: {
      design: {
        no: "03",
        text: "Interfaces that are clear and fast to use. Keyboard access and contrast are built in, not added later.",
        title: "Interface design",
      },
      operations: {
        no: "04",
        text: "Deployments, servers, monitoring and maintenance. We own the whole runtime, not only the interface on top of it.",
        title: "Infrastructure and operations",
      },
      product: {
        no: "01",
        text: "We build and operate our own products, like AdmitPress, from the first idea through design, launch, and long-term operation.",
        title: "Product development",
      },
      web: {
        no: "02",
        text: "Custom websites and web apps for clients, designed and coded for their exact purpose, never from a template.",
        title: "Websites and apps",
      },
    },
    hero: {
      primary: "See our work",
      secondary: "Start a project",
      summary:
      "An independent software organization. Everything we build is open source, we run our own products, and client work is built the same way.",
    },
    openSource: {
      body:
      "Every product we run, and every tool we built to run it, is published. Not a trimmed-down demo: the code that is " +
        "actually in production.",
      copyTooltip: "Copy the clone command",
      groups: {
        app: {
          desktop: "Desktop",
        },
        category: {
          app: "Apps",
          other: "Other",
          package: "Packages",
        },
        other: {
          other: "Uncategorised",
        },
        package: {
          core: "Core",
          data: "Data",
          runtime: "Runtime",
          security: "Security",
          tooling: "Tooling",
          web: "Web",
        },
      },
      footer: "Every repository above is public, and everything we run sits on hardware we own.",
      more: "All licences",
      registryMeta: "{{count}} public repositories",
      title: "Everything we have published",
      updated: "updated {{date}}",
    },
    pricing: {
      body:
      "Most agencies start client websites at {{market}}. Ours cost at most {{website}}, written the same way as our own " +
        "products: custom code, no templates.",
      bodyMuted:
      "The lower price is deliberate. It means more projects built properly, and the result is handed over as the client's own.",
      competitionLabel: "Competition",
      competitionSuffix: "+",
      cta: "Get in touch",
      productLabel: "{{product}}",
      productPriceLabel: "up to",
    },
    services: {
      body: "We do not stop at the visual layer. We take a project from the first sketch to a running deployment, and we keep it running.",
      title: "From idea to running product",
    },
    organization: {
      body:
      "{{product}} is an independent software organization. We build products we operate ourselves, and client work follows the " +
        "same rules: code written for its purpose, no templates, no tracking.",
    },
    work: {
      ownGroup: "Own products",
      summary: "Our own products, each one built from first concept to live operation.",
      title: "What we build",
    },
});
