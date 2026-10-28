import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    lead: "How to report a vulnerability in anything we publish or run, what happens after you do, and what we ask while you test.",
    report: {
      contact: "Get in touch",
      issue: "Do not open a public issue for a security problem. Everything Trebired publishes is open source, so an issue is a disclosure.",
      text:
      "Write to {{email}} with what you found, where you found it, and what an attacker could do with it. A proof of concept " +
        "is worth more than a scanner report.",
      title: "Report it *privately*",
    },
    response: {
      text:
      "You get an acknowledgement within two working days, from a person rather than a template, and an assessment within a " +
        "week, stating whether we agree it is a vulnerability and what we intend to do about it. The fix is released as soon " +
        "as it is ready, with credit in the release notes if you want it.",
      thanks:
      "Thank you for every report, whether it is a vulnerability or anything else that looks wrong. Whoever takes the time " +
        "to write one up is doing work for everyone who runs this code, and we are grateful for it.",
      title: "What happens *next*",
    },
    scope: {
      promise:
      "We will not threaten a reporter who followed this policy, and we will not treat good-faith research as an attack. We " +
        "run no bug bounty and pay no rewards. We say so here rather than letting anyone find out after the work is done.",
      text:
      "Every service Trebired operates and every repository Trebired publishes is in scope. Out of scope are reports that " +
        "restate a scanner's output without an exploit behind them, missing hardening headers with no demonstrated impact, " +
        "social engineering of the people who run the organization, denial of service by volume, and defects in third-party " +
        "services we merely use.",
      title: "No bounty, no *threats*",
    },
    test: {
      data:
      "Do not access, copy, modify, retain, or exfiltrate data that is not yours, and stop as soon as you have confirmed the " +
        "issue.",
      own: "Test against your own installation where you can. Our code is public, so you can run it yourself.",
      title: "Test it, then *stop*",
      window:
      "Give us a reasonable window to fix the problem before you publish. We will not ask you to stay quiet indefinitely, and " +
        "we will not use the window to argue the finding away.",
    },
    title: "Security",
});
