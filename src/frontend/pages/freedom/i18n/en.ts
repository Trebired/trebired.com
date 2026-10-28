import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    help: {
      actions: { browser: "Get Tor Browser", relay: "Run a relay" },
      council:
      "Street cameras are bought by city councils, and city councils answer to the people who live there. Ask yours " +
        "what the cameras record, who can search them and for how long, and say no when the answer is everything and anyone.",
      title: { first: "Freedom", hollow: "you", middle: "needs" },
      tools:
      "Use tools that keep nothing: Tor Browser for reading and Signal for messages. A spare server with a steady connection " +
        "can run a Tor relay, the way Trebired's servers do, and make the crowd bigger for everyone in it.",
    },
    lead:
    "Freedom means moving, speaking and reading without being recorded for it. Trebired builds software that tracks no one " +
      "and runs Tor relays on its own servers.",
    liberty: {
      cite: "- Emma Lazarus, The New Colossus, 1883",
      quote: "Give me your tired, your poor, your huddled masses yearning to breathe free.",
      text:
      "For almost 140 years the statue in New York Harbor has stood for one promise: that in a free country people can " +
        "live, speak and move without asking anyone's permission. The broken chain at her feet is that promise, hammered in " +
        "copper.",
      title: "Liberty Enlightening the World",
      verdict: "She still stands. The promise she stands for is cracking.",
      watched:
      "A free person does not have to account for where they went, who they called or what they read. Once all of it is " +
        "recorded, that freedom holds only for as long as nobody decides to look. In the country she stands in, " +
        "that recording is now written into law.",
    },
    onion: {
      layers: {
        core: "The request: the page the reader asked for",
        one: "Guard relay: sees who is reading, not what",
        three: "Exit relay: sees the page, not the reader",
        two: "Middle relay: sees neither",
      },
      relays:
      "The network exists because volunteers run its relays, and Trebired is one of them: it runs several Tor relays on its " +
        "own servers and gives them the bandwidth they need.",
      text:
      "Tor stands for The Onion Router. Before a request leaves the reader's computer it is wrapped in three layers of " +
        "encryption, one for each relay on the way. Each relay peels off its own layer and learns only where to pass what is " +
        "left, so no relay ever knows both who is reading and what.",
      title: "The onion router",
    },
    recorded: {
      next:
      "None of these powers needs a suspect, and most of them stayed secret until one contractor took the documents " +
        "out.",
      timeline: {
        bulk: { text: "A secret court lets the NSA log who calls whom, when and how long.", year: "2006" },
        freedom: {
          text:
          "The USA FREEDOM Act stops the NSA from storing everyone's call logs. It now has to ask the phone " +
            "companies, case by case.",
          year: "2015",
        },
        patriot: { text: "PATRIOT Act: agents can demand records of people never suspected.", year: "2001" },
        renewed: { text: "Section 702 is renewed again: Americans' messages caught in it can still be searched without a warrant.", year: "2024" },
        section: { text: "Section 702: messages with anyone abroad, taken without a warrant.", year: "2008" },
        snowden: {
          text:
          "Edward Snowden shows that these laws were used to collect records on millions of people who had done " +
            "nothing wrong.",
          year: "2013",
        },
      },
      title: "Surveillance, written into law",
    },
    snowden: {
      cite: "- Edward Snowden, 2015",
      next: "The phone records were only the start. Since then the watching has moved out onto the street, one camera at a time.",
      outcome:
      "The journalists who reported the story worked with the tools on this page, and two years later the United States " +
        "ended the bulk collection of its citizens' phone records. Whatever anyone thinks of how the documents came out, " +
        "the public learned what was being done in its name, and the law changed because of it.",
      quote:
      "Arguing that you don't care about the right to privacy because you have nothing to hide is no different than saying " +
        "you don't care about free speech because you have nothing to say.",
      text:
      "In June 2013 Edward Snowden, a contractor working for the US National Security Agency, gave journalists documents " +
        "showing that the agency was collecting the phone records of millions of people and data from the largest internet " +
        "companies, without those people knowing.",
      title: "Edward Snowden",
    },
    title: "Freedom",
    watching: {
      atlas: "See the cameras",
      answer:
      "A camera network answers one question: who was where. Encryption, Tor and software that keeps nothing are how people " +
        "keep that answer to themselves.",
      count:
      "That was [IHS Markit's estimate](https://www.cnbc.com/2019/12/06/one-billion-surveillance-cameras-will-be-watching-globally-in-2021.html) " +
        "for the whole world in 2019, with 54 percent of the cameras in China and a billion expected by 2021.",
      faces:
      "The cameras are learning faces. In August 2025 the British Home Office funded ten vans that compare the faces of " +
        "passers-by with police watchlists in real time, for seven police forces across England.",
      label: "surveillance cameras in 2019",
      title: "The world is watching",
      value: "770,000,000",
    },
});
