import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    budget: {
      action: "Read the standards",
      note: "The target for every Trebired application. The cap is 500 MB, and above it nothing ships.",
      title: "Measured in megabytes",
      unit: "MB",
      value: "200",
      why:
      "Memory is scarce. Since late 2025, chipmakers have turned their production toward AI data centres, and the price of " +
        "ordinary RAM has climbed sharply. Software that asks for more memory with every release pushes people to buy new " +
        "computers and throw working ones away. Trebired builds the other way round: the less memory an application needs, " +
        "the better, so it runs on the machines people already own.",
      text:
      "Every Trebired application runs under a hard cap of 500 MB of memory and aims for 200 or less, measured on the running " +
        "process under real use. An overrun is fixed at its cause, never by raising the cap.",
    },
    lead: "Every computer that keeps working is one less to build, ship and throw away. Trebired keeps its machines running for as long as they can.",
    log: {
      evidence: "Evidence",
      text: "Every piece of hardware Trebired passes on, repairs or hands in for recycling, with the date, where it went and the evidence.",
      title: "Hardware log",
    },
    nature: {
      text:
      "Trebired cares about nature, and supports it the way a software organization can: machines stay in service for as " +
        "long as they work, they are taken apart before anything is thrown away, and the software is light enough to run on " +
        "the computers people already own.",
      title: { hollow: "Nature", rest: "is worth the effort" },
    },
    rack: {
      newest: {
        note: "The newest machines are current-generation servers. They join the rack next to the old ones, not instead of them.",
        title: "Today",
      },
      oldest: {
        note:
        "The oldest machines in the racks belong to a generation introduced in 2009, and they stay in service for as long as " +
          "they do their job.",
        title: "2009",
      },
      text:
      "The racks Trebired runs its own services on hold servers of every kind from 2009 to today, the oldest next to the " +
        "newest. Age alone does not take a server out of service.",
      title: "Old servers stay in the rack",
    },
    reuse: {
      how:
      "A server leaves the rack when it can no longer do its job, and not before. Then it is taken apart: drives, memory " +
        "and power supplies that still work go into the machines that are still running, and only the chassis and whatever " +
        "failed go to an authorised e-waste take-back point, never the bin.",
      text: "A retired server is taken apart before anything is thrown away. What still works keeps working somewhere else in the rack.",
      title: "Reused first, recycled last",
    },
    stance: {
      claim: "Working hardware is not waste.",
      how:
      "Its applications stay under 500 MB of memory and are built for the computers people already have. Its own servers " +
        "stay in service until they can no longer do their job. And everything it builds is published under MIT or the " +
        "AGPL, so anyone can keep it running after support ends.",
      text:
      "Computers are often thrown away while they still work, because the software they run stops supporting them or grows " +
        "too heavy for them. Trebired works the other way round.",
      title: "Where Trebired stands",
    },
    sunset: {
      caption: "The start of the Linux desktop's rise",
      text:
      "Windows 10 reached the end of support on 14 October 2025, and Windows 11 does not install on a computer without " +
        "a TPM 2.0 chip and a processor on Microsoft's supported list. Linux still installs on those computers, and every " +
        "desktop application Trebired writes is built for Linux.",
      title: "Old computers keep their job",
    },
    title: "Sustainability",
    waste: {
      lost: { text: "not on record", value: "77.7%" },
      recycled: { text: "documented as properly collected and recycled", value: "22.3%" },
      text:
      "That is how much electronic waste the world produced in 2022, according to the [Global E-waste Monitor 2024]({{report}}) " +
        "from the UN's ITU and UNITAR. Only 22.3% of it was documented as properly collected and recycled. Where the rest went " +
        "is not on record.",
      title: "62 million tonnes of e-waste",
    },
});
