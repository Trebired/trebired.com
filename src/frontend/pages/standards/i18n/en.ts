import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    figure: {
      commit: { text: "characters in a commit subject, in the imperative, describing behaviour and never the files that moved.", value: "72" },
      duplicate: {
        text:
        "characters is where the DRY rule starts. It compares every function in the source tree with names, whitespace and " +
          "comments stripped, so two functions that do the same thing are one duplicate group even when renamed, and one of " +
          "them has to go.",
        value: "120",
      },
      file: { text: "lines in a file at most. A longer one is split before the project starts again.", value: "350" },
      function: { text: "lines in a function at most. A longer one is doing two jobs and becomes two functions.", value: "50" },
      line: {
        text: "characters on a line. The formatter wraps what it can wrap safely, and the rest stays reported until it is rewritten.",
        value: "150",
      },
      memory: {
        text: "of memory per application at most, with 200 MB as the target. Above the cap nothing ships, and the fix goes to the cause, never to " +
          "the cap.",
        value: "500 MB",
      },
    },
    gate: {
      broken: { label: "One violation", text: "Nothing starts, not even on your own machine, until it is fixed." },
      clean: { label: "No violations", text: "The app starts." },
      text:
      "Every app runs behind the code-discipline gate. It checks the whole repository before anything starts, so a single " +
        "broken rule is enough to keep the app from running.",
      title: "Break a rule and the app does not run",
    },
    imports: {
      after: "Every import reads",
      before: "Instead of",
      facts: {
        dead: { text: "An imported name that nothing in the file uses is removed when the rule fixes the repository.", title: "Dead imports go" },
        map: {
          text: "Every alias lives in .trebired/code-discipline/imports beside the code. The compiler's view of it is generated and never committed.",
          title: "One map, committed",
        },
        relative: { text: "An import that starts with ./ is left as written. Only one that climbs out with ../ is rewritten.", title: "./ stays as " +
          "written" },
      },
      text:
      "[@trebired/code-discipline]({{discipline}}) gives every source file a random alias and keeps the whole map in sync. " +
        "An import that climbs out of its folder with ../ is rewritten to that alias, so code points at a file, not at the " +
        "route to it. The alias is random on purpose: it says nothing about where the file lives.",
      title: "Every file has a name nobody chose",
    },
    lead: "The requirements every change has to pass and every piece of software has to meet, and what happens when something fails them.",
    org: {
      text:
      "The rules are one shared preset, [@trebired/configs]({{configs}}), and [@trebired/code-discipline]({{discipline}}) " +
        "enforces it in every Trebired codebase, whatever it is written in: TypeScript, JavaScript, Rust, Go, C++, C#, " +
        "Python, QML, shell, SCSS and CSS. A repository adds only what is specific to it.",
      title: { hollow: "One", rest: "standard for the whole organization" },
    },
    scale: {
      text: "The limits the preset and this standard set, each drawn at its real size.",
      title: "The numbers, drawn to scale",
    },
    title: "Standards",
});
