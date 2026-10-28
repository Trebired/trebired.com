import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    lead: "Why this organization exists, and what keeps it from turning into the thing it was started against.",
    money: { label: "comes from client work, and partly from donations" },
    osi: {
      text:
      "The keyhole is the mark of the [Open Source Initiative](https://opensource.org), which maintains the Open Source " +
        "Definition and approves the licences that meet it. Everything here is published under MIT or the AGPL, both " +
        "approved by it.",
    },
    more: {
      action: "The whole philosophy",
      text: "Why everything is public, which machines we build for, what we write in, what software is allowed to cost, and why we make our own " +
        "tools.",
      title: "Read the philosophy",
    },
    publishTitle: { first: "The answer is", second: "to publish" },
    publishQuote: "What it makes should not depend on Trebired lasting.",
    sections: {
      section1: {
        body1:
        "More and more of the software people depend on is no longer theirs. It used to be bought once and kept. Now it is " +
          "rented by the month, it runs on someone else's servers, it needs an account to open, and its source is a trade " +
          "secret. A small number of companies own the tools everyone else works with, and they decide what those tools do, " +
          "what they cost next year, and when they stop.",
        body2:
        "That is a bad position for anyone who uses software, and it gets worse every year it is accepted. When a vendor " +
          "changes its terms, raises its price or shuts a product down, the people who built their work on it have nowhere to " +
          "go, because they were never given anything they could keep.",
        heading: "What it was started against",
      },
      section2: {
        body1:
        "Complaining about it changes nothing. The only answer that holds is working software that anyone can read, run, " +
          "change and keep, with no account and no permission. So the organization builds that, and publishes every line of " +
          "it: products under the AGPL, packages under MIT or the AGPL, in public repositories from the day they exist.",
        body2:
        "The point is not that Trebired should last. It is that what it makes should not depend on Trebired lasting. Code that " +
          "is published is already on other people's disks, and no change of heart, sale or shutdown can take it back.",
        heading: "The answer is to publish",
      },
      section3: {
        body1:
        "Publishing everything does not pay for machines or for time, and pretending otherwise would be its own kind of " +
          "dishonesty. The organization is paid in two ways: client work, meaning websites, rebuilds, applications and " +
          "identities, each at a price published before anyone asks, and donations from people who want the work to " +
          "continue. A client website costs at most {website}.",
        body2:
        "It is never paid in a way that would pull it back toward what it was started against. There are no investors waiting " +
          "for an exit, no advertising, no data for sale, no closed edition and no subscription to code that is already public. " +
          "Nothing about how the organization earns money depends on keeping anyone locked in, which is the only way to be " +
          "sure it never tries.",
        heading: "Where the money comes from",
      },
    },
    wall: {
      agpl: "AGPL",
      faith: "Good faith",
      honest: "Published prices",
      keep: "Yours to keep",
      linux: "Linux",
      lock: "No lock-in",
      mit: "MIT",
      open: "Open source",
      public: "Public by default",
      tracking: "No tracking",
      trust: "Trust is the product",
      written: "In writing",
    },
    title: "About",
});
