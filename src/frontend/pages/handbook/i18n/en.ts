import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    lead:
    "How the work is built and released: three shapes of repository, what belongs in the source, how a release reads, and " +
      "whose name is on it.",
    name: {
      closing: "Nothing is handed over that the developer has not read, understood and is prepared to defend.",
      text:
      "Every commit, tag, release and published package carries the name of the person who did the work, and no co-author. AI " +
        "is used the way a compiler or an editor is used: as a tool in the hands of someone who stays answerable for the result. " +
        "It never signs, because a model cannot answer for anything.",
      title: { after: "is on it", before: "Whose", word: "name" },
    },
    release: {
      after:
      "A version bump is its own commit, and the annotated tag carries the same line. The release commit goes out first and " +
        "the tag second, because a tag that arrives first points at nothing. A published tag is never moved or deleted; a " +
        "mistake is corrected by the next version.",
      text:
      "A commit message is a subject and usually nothing else: imperative, sentence case, under seventy-two characters, " +
        "describing the behaviour that changed rather than the files that changed. No type prefixes, no scopes. A commit that " +
        "needs the word “and” twice is two commits.",
      title: "How a commit and a release read",
    },
    shapes: {
      kinds: {
        app: {
          name: "Application",
          text:
          "An application keeps a backend, a frontend, the code both share, its executables and its types, always under these " +
            "five names. Whoever has worked in one application finds their way around the next.",
        },
        package: {
          name: "Package",
          text:
          "A package keeps its source in src and its checks as executable scripts in scripts/verify, and a gate runs them before " +
            "anything is published. No package has a test layout of its own.",
        },
        text: {
          name: "Text repository",
          text:
          "A text repository keeps the documents more than one repository agrees on: a folder per document, a file per " +
            "language, and no build. Every language of a document sits in the same folder.",
        },
      },
      text:
      "Every repository is one of three kinds, and each kind has one layout, the same in every repository of that kind. Nobody " +
        "has to learn a repository before working in it: the files are where the last one had them. Prose that only one " +
        "repository reads stays in that repository; a text repository exists the moment two of them need the same words.",
      title: "The same shape, every time",
    },
    source: {
      dist:
      "What a build fetches, derives or renders goes in dist: a snapshot of a remote interface, an exchange rate file, a " +
        "prerendered page. It is written on every run and never committed.",
      rule:
      "A repository that keeps a generated file in its source is defective, and it stays defective when the file is small, when " +
        "it changes once a year, and when committing it would make a build faster. The application reads generated data the " +
        "way it reads any other build input, never as an import from the source tree.",
      src: "What a person writes goes in src: the code and the text. It is committed.",
      title: "Written by a person, or built by the build",
    },
    title: "Handbook",
});
