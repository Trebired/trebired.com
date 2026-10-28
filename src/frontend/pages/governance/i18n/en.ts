import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    lead:
    "Where decisions are recorded, what no decision can change, how to take a disagreement further, and what happens if " +
      "the organization stops.",
    titles: {
      continuity: { first: "If the organization", second: "stops" },
      fixed: { first: "What no decision", second: "can change" },
      record: "Decided in *public*",
      routes: "If you *disagree*\nwith a decision",
    },
    title: "Governance",
    poster: {
      counts: {
        action: "Every licence",
        packages: "packages on npm, versioned and kept there",
        permissions: "permissions needed to carry it on",
        repos: "public repositories, already on other people's disks",
      },
      fixed: {
        gate: {
          by: "Code Discipline, in every repository",
          text: "Every repository runs the same discipline tool, and a commit that fails it is refused, whoever wrote it.",
          title: "No change skips the gate",
        },
        heldBy: "Held by",
        licence: {
          by: "The licence terms themselves",
          text: "What is published under an open licence stays under it, on every copy that already exists.",
          title: "A licence is never withdrawn",
        },
        name: {
          by: "The trademark policy",
          text: "The code can be taken anywhere. Presenting a fork as Trebired, or as endorsed by it, cannot.",
          title: "The name stays with the organization",
        },
        open: {
          by: "The licence in every repository",
          text:
          "No closed tier, no source-available tier and no paid tier that unlocks code kept back. What cannot be published " +
            "is not shipped.",
          title: "Everything is open source",
        },
        tag: {
          by: "The public tag history",
          text: "A published version is never moved or deleted. A mistake is corrected by the next version.",
          title: "A release is never rewritten",
        },
      },
      routes: { fork: "Fork it", issue: "Open an issue", write: "Write to us" },
    },
    sections: {
      section1: {
        body1:
        "Decisions are made where the work is: in the public repository. A decision that is not written there did not " +
          "happen, and one that is written there can be read by anyone, including whoever it went against.",
        body2:
        "Each decision leaves the same trail: an issue with the question and the answer with its reason, a commit under the " +
          "name of whoever made it, a changelog entry in plain words and a tag that is never moved or deleted. Every repository " +
          "has a maintainer who answers for it, and every maintainer is bound by the same standard.",
      },
      section2: {
        body1:
        "Some things are not open to a decision by anyone, including the people who maintain the work. Each one is held by " +
          "something other than goodwill.",
      },
      section3: {
        body1:
        "There are three ways to take it further, and none of them needs permission. If it can be public, open an issue in " +
          "the repository the decision lives in, so the disagreement sits next to the decision and anyone can read both.",
        body2:
        "If it cannot be public, because it is a security problem, a legal matter or a private concern, write to us. If you " +
          "would rather go your own way, fork it: the licence lets you take the code without asking, and only the name stays behind.",
      },
      section4: {
        body1:
        "Everything is already published, under a licence that cannot be withdrawn, on other people's disks. If this " +
          "organization ends tomorrow, nothing has to be rescued and nobody has to be asked for permission to carry it on.",
      },
    },
});
