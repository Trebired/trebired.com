import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    fixed: {
      contact: "Get in touch",
      report:
      "If something we built is unusable, in one of our products, on a site we made for a client or here, write to us and say " +
        "what you were trying to do, what stopped you, and what you were using. An accessibility report is treated as a bug " +
        "report against the product, not as feedback. In our own products and on this site the fix ships the normal way; on " +
        "a client's site the report goes to whoever maintains it.",
      title: "Tell us and it gets *fixed*",
      unknown:
      "None of it has been through a formal audit, so the honest assumption is that problems exist that we have not found. " +
        "The ones most likely to bite are in the parts with the most movement: overlays, menus, and anything drawn rather " +
        "than written.",
    },
    keyboard: {
      focus:
      "The first Tab on a page reaches a link that skips the navigation and goes straight to the content. From there the " +
        "focus moves in the order you read. Menus open from the keyboard, and Escape closes them and puts the focus back on " +
        "the button that opened them. A dialog keeps the focus inside it until you close it, so Tab never wanders behind it.",
      text:
      "Whatever we build is made of real headings, lists, buttons and links, so a screen reader reads the same structure a " +
        "sighted visitor sees. Everything that can be clicked can be reached and operated from a keyboard, and the focused " +
        "element is always visible.",
      title: "Everything works from the *keyboard*",
    },
    lead:
    "The standard everything we build is held to, in our own products and in the work we do for clients, what we do not " +
      "claim, and how to tell us when something cannot be used.",
    level: {
      text:
      "WCAG 2.2 at level AA is the bar for everything we build: our own products, and the websites and software we make for " +
        "clients. We have not been audited against it and we do not claim a certificate. Saying we conform would be a claim " +
        "nobody has checked, so what we say instead is that it is the bar, and that a failure against it is a defect like any " +
        "other.",
      title: "This is the *bar*",
    },
    motion: {
      text:
      "Text scales when the browser scales it, nothing is said by colour alone, and nothing plays, moves or opens by itself. " +
        "Decoration carries no information and is hidden from assistive technology; if something is only there visually, " +
        "that is a bug, not a design.",
      title: "Nothing *moves* by itself",
    },
    settings: {
      here:
      "This site has them too: the wheelchair button in the header opens them. Here the choice is stored in your browser " +
        "only, not in a cookie, and never sent to us. It applies before the first paint when you come back, and clearing " +
        "your browser data clears it.",
      menu:
      "Readers decide how a page moves and reads. The frontend package our products and our clients' sites are built on " +
        "comes with three settings: animation, which follows the system unless the reader overrides it; text size, which " +
        "scales the whole page to 125, 150 or 200 percent; and high contrast, which drops the palette to plain black and " +
        "white and thickens every border. The choice stays in the reader's own browser and identifies no one.",
      title: "Settings *you* control",
    },
    title: "Accessibility",
});
