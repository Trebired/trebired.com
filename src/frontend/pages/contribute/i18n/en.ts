import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    lead: "Where the repositories are, what makes a change easy to take, how to report a problem, and the terms a contribution arrives under.",
    titles: {
      open: { first: "The framework", second: "already built" },
      report: { first: "Reporting is worth as much as", second: "patching" },
      rules: { first: "What makes a change", second: "easy to take" },
    },
    title: "Contribute",
    poster: {

      open: "Open the {{count}} repositories",
      rules: {
        behaviour: {
          text: "Say what changed for the person using it, not which files moved.",
          title: "Described by behaviour, not files",
        },
        dependency: {
          text: "Only when the code cannot be written instead. Most of the time it can.",
          title: "A reason for every new dependency",
        },
        gate: {
          text: "The discipline tool that gates our own commits runs on yours. A change that fails it is not merged.",
          title: "Passes the discipline gate",
        },
        one: { text: "One coherent change, so it can be read, reverted and released on its own.", title: "One change per commit" },
      },

      scale: { in: { label: "Arrives", title: "Your patch, under its licence" }, out: { label: "Owed back", title: "Nothing" } },
      securityAction: "Report a vulnerability",
    },
    sections: {
      section1: {
        body1:
        "Trebired builds its web applications on a framework of its own: the frontend, the bundler, the logger, the store " +
          "and the packages around them. All of it is public at github.com/Trebired under MIT or the AGPL, so building with it " +
          "starts from working code. There is no contributor portal, no application, and nothing to be granted access to. Pick " +
          "the repository the problem lives in, read its README and its changelog, and open an issue or a pull request.",
        heading: "The framework is already built",
      },
      section2: {
        body1:
        "A contribution arrives under the licence of the repository it is sent to. That is the whole agreement; there is no " +
          "separate contributor licence to sign.",
        body2:
        "In return the organization owes nothing. Not a merge, not credit, not a response, not payment. A patch can sit, be " +
          "rewritten, or be refused without an explanation. We would rather say that here than let anyone discover it after " +
          "spending a weekend on something.",
        heading: "What arrives, and on what terms",
      },
      section3: {
        body1:
        "One coherent change per commit, described by the behaviour that changed rather than the files that moved. The " +
          "discipline tool that gates our own commits runs on yours too, so a change that fails it will not be merged whatever " +
          "its merits.",
        body2: "A new dependency needs a reason that survives the question of why the code cannot be written instead. Most of the time it cannot.",
        heading: "What makes a change easy to take",
      },
      section4: {
        body1:
        "An issue that reproduces a bug exactly is worth more than a fix that guesses at the cause. Say what you did, what " +
          "happened, and what you expected, with the version you were on.",
        body2:
        "A security problem does not go in an issue. It goes through the [security page](/security), which exists so that a " +
          "vulnerability is not public before there is something to upgrade to.",
        heading: "Reporting is worth as much as patching",
      },
    },
});
