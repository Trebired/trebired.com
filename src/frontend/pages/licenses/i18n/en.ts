import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    items: {
      agpl: {
        name: "GNU Affero General Public License",
        summary:
        "Strong copyleft that reaches across a network. Anyone may run, study, change and share the software, and anyone who " +
          "offers a modified version as a service has to publish their changes under the same licence.",
      },
      gpl: {
        name: "GNU General Public License",
        summary:
        "Strong copyleft for software that is distributed rather than hosted. Anyone may run, study, change and share it, and " +
          "anything built on it is released under the same licence.",
      },
      mit: {
        name: "MIT License",
        summary:
        "Permissive. Anyone may use, change and redistribute the code, in open or closed products, as long as the copyright " +
          "notice and the licence travel with it.",
      },
    },
    poster: {
      compare: "What each one lets you do",
      count: "Public repositories, by licence",
      may: "You may",
      must: "You must",
      none: "No repository uses it today",
      other: "Other terms",
      rows: {
        change: "Change it",
        closed: "Build it into a closed product",
        distribute: "Publish the changes you distribute",
        network: "Publish the changes you serve over a network",
        notice: "Keep the copyright notice",
        run: "Run it",
        share: "Share it",
      },
      used: "Used by",
      yes: "Yes",
      no: "No",
    },
    lead: "Everything {{product}} builds is open source. These are the licences we publish under, and each product states which one applies to it.",
    pending: "The full text ships with the source and is not mirrored here.",
    title: "Licenses",
});
