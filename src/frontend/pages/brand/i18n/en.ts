import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    swatches: {
      ink: {
        label: "Ink",
        note: "On light backgrounds",
      },
      reversed: {
        label: "Reversed",
        note: "On dark backgrounds",
      },
    },
    colour: {
      lead: "The mark carries no colour of its own. It is the ink of the page, or it is reversed out of it. Nothing else is approved.",
      title: "Colour",
    },
    identity: {
      body1:
      "Every line Trebired writes is published under the AGPL or MIT, and anyone may read it, run it, change it and fork it " +
        "without asking. That license covers the code. It grants no right to the name Trebired, to the names of its products, " +
        "packages and servers, to the wordmarks and logos on this page, or to the domain names, repository names and social " +
        "handles the organization uses. Those are its identity, and they are claimed as unregistered marks established by use.",
      body2:
      "The separation is deliberate, and identity is the only thing here the organization enforces. Open source works because " +
        "the source is a commodity and the name is not. The name is the one thing that tells a reader whether what they are " +
        "running came from us and whether anyone stands behind it. A fork carrying our mark removes that answer for everyone, " +
        "including people who never dealt with us at all.",
      body3:
      "So fork anything and ship it under your own name. Refer to a Trebired product by name to say what you are compatible " +
        "with, build on, or compare against. Reproduce a mark unmodified, with the clear space set out below, to illustrate " +
        "writing about the organization. Do not name your product, organization, server, package, service or domain after one " +
        "of our marks or after anything close enough to be mistaken for one, and do not leave our marks in a fork.",
      body4:
      "Where that happens, the first step is a direct message naming the specific change required and the date it is " +
        "expected. Where that does not resolve it, the organization escalates to the registrar, the registry, the package " +
        "registry, the platform or the host, and is prepared to pursue formal proceedings. No permission is granted by " +
        "implication, custom, silence, technical access, public availability or failure to enforce.",
      more: "Read the trademark policy",
      titleClosed: "The name is not.",
      titleOpen: "The code is open.",
    },
    lead: "The {{brand}} mark: its two forms, the space it needs, the size it stops working at, and what not to do to it.",
    marks: {
      full: { dark: "Wordmark · on dark", light: "Wordmark · on light" },
      lead:
      "The mark comes as the wordmark and as the wordmark with the trademark sign, which the site header and footer carry. " +
        "Use either as it is, in the ink of the page or reversed out of it.",
      tm: { dark: "With ™ · on dark", light: "With ™ · on light" },
      title: "The mark",
    },
    rules: {
      item1: "Do not redraw, restretch or rotate a mark.",
      item2: "Do not recolour a mark. It is ink or it is reversed, nothing else.",
      item3: "Do not place a mark on a busy photograph or a low contrast fill.",
      item4: "Do not re-set the wordmark in a typeface. The lettering is drawn, not typed.",
      item5: "Do not add a shadow, an outline, a gradient or a container the mark does not have.",
      title: "What not to do",
    },
    space: {
      clearText: "Keep free space on every side equal to the height of the mark's cap. Nothing enters it.",
      clearTitle: "Clear space",
      minText: "Below this height the mark stops reading. Use the wordmark alone instead of shrinking further.",
      minTitle: "Minimum size",
      title: "Space and size",
    },
    title: "Brand",
    typeface: {
      lead:
      "{{family}} sets every heading on this site, and the wordmark is drawn from the same letterforms. One typeface, so a " +
        "page and the mark on it read as one thing.",
      markLabel: "In the mark",
      markNote: "The wordmark is drawn, not typed. Set the typeface for headings; never re-set the mark in it.",
      specimen: "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789",
      title: "The typeface",
      usage: "Headings, the wordmark, and nothing else. Body text is IBM Plex Sans.",
      usageLabel: "Where it is used",
      weightLabel: "Title weight",
    },
});
