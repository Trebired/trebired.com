import type { SupportedLang } from "./../runtime/i18n/lang";
import { mainName, pageTitle, type RouteMeta } from "./route_meta";

export const mainRoutes: Record<string, Record<SupportedLang, RouteMeta>> = {
  "/": {
    en: {
      title: pageTitle(mainName, `Open-source websites, web apps and Linux software`),
      description:
      `${mainName} is an independent software organization. It designs and builds websites, ` +
        `web applications and Linux software, and publishes all of it as open source.`,
    },
    cs: {
      title: pageTitle(mainName, `Open-source weby, aplikace a software pro Linux`),
      description:
      `${mainName} je nezávislá softwarová organizace. Navrhuje a staví weby, webové ` +
        `aplikace a software pro Linux a všechno zveřejňuje jako open source.`,
    },
  },
  "/projects": {
    en: {
      title: pageTitle(`Projects: products and client work`, mainName),
      description:
      `What ${mainName} has built and what it is building now: its own products, client work, and the open registry all of it is assembled from.`,
    },
    cs: {
      title: pageTitle(`Projekty: vlastní produkty a zakázky`, mainName),
      description: `Co ${mainName} postavil a co staví teď: vlastní produkty, práce pro klienty a otevřený registr, ze kterého se všechno skládá.`,
    },
  },
  "/services": {
    en: {
      title: pageTitle(`Websites and web apps: services and pricing`, mainName),
      description:
      `What ${mainName} builds and what it costs: websites, rebuilds of old sites, web applications ` +
        `and visual identity, each with its price and finished work to look at.`,
    },
    cs: {
      title: pageTitle(`Tvorba webů a aplikací: služby a ceny`, mainName),
      description:
      `Co ${mainName} staví a kolik to stojí: weby, přestavby starých webů, webové aplikace ` +
        `a vizuální identita, u každé cena a hotová práce k nahlédnutí.`,
    },
  },
  "/case-studies": {
    en: {
      title: pageTitle(`Case studies: how the work was built`, mainName),
      description:
      `The problem, the decisions and what shipped, written for the work where the decisions were worth reading about, with no invented numbers.`,
    },
    cs: {
      title: pageTitle(`Případové studie: jak práce vznikla`, mainName),
      description: `Problém, rozhodnutí a výsledek, popsané u práce, kde rozhodnutí stála za přečtení. Bez vymyšlených čísel a bez přikrášlování.`,
    },
  },
  "/process": {
    en: {
      title: pageTitle(`How a project works: from call to handover`, mainName),
      description:
      `How ${mainName} delivers work: a conversation, one written price, a public repository ` +
        `from the first commit, and a handover with the source and the licence.`,
    },
    cs: {
      title: pageTitle(`Jak probíhá zakázka: od hovoru po předání`, mainName),
      description:
      `Jak ${mainName} dodává práci: hovor, jedna písemná cena, veřejný repozitář od prvního commitu a předání se zdrojovým kódem a licencí.`,
    },
  },
  "/handbook": {
    en: {
      title: pageTitle(`Handbook: how repositories are built`, mainName),
      description:
      `How a ${mainName} repository is built and released: three repository shapes, what the ` +
        `source holds and what the build writes, and how commits and releases read.`,
    },
    cs: {
      title: pageTitle(`Příručka: jak se staví repozitáře`, mainName),
      description:
      `Jak se staví a vydává repozitář ${mainName}: tři tvary repozitáře, co patří ` +
        `do zdrojového kódu a co zapisuje build a jak se čte commit a vydání.`,
    },
  },
  "/team": {
    en: {
      title: pageTitle(`Team: the people behind the work`, mainName),
      description:
      `Who is behind ${mainName}, why every commit and release carries a person's name, and why the organization itself is not a person.`,
    },
    cs: {
      title: pageTitle(`Tým: kdo stojí za prací`, mainName),
      description: `Kdo stojí za organizací ${mainName}, proč každý commit a každé vydání nese jméno člověka a proč organizace sama není člověk.`,
    },
  },
  "/standards": {
    en: {
      title: pageTitle(`Standards every change has to pass`, mainName),
      description:
      `What every change at ${mainName} has to pass and what every piece of software has to ` +
        `be: open source, under its memory cap, operable from a keyboard, WCAG 2.2 AA.`,
    },
    cs: {
      title: pageTitle(`Standardy, kterými projde každá změna`, mainName),
      description:
      `Čím musí u ${mainName} projít každá změna a jaký musí být každý software: open ` +
        `source, pod stropem paměti, ovladatelný klávesnicí, WCAG 2.2 AA.`,
    },
  },
  "/sustainability": {
    en: {
      title: pageTitle(`Sustainability: old hardware, lean software`, mainName),
      description:
      `Servers from 2009 still in the rack, parts reused before anything is recycled, ` +
        `and applications under 500 MB of memory: how ${mainName} keeps waste down.`,
    },
    cs: {
      title: pageTitle(`Udržitelnost: starý hardware, úsporný software`, mainName),
      description:
      `Servery z roku 2009 stále v racku, díly použité znovu před recyklací a aplikace pod 500 MB paměti: jak ${mainName} drží odpad při zemi.`,
    },
  },
  "/freedom": {
    en: {
      title: pageTitle(`Freedom: against censorship and tracking`, mainName),
      description:
      `Why ${mainName} is against censorship and control: it runs Tor relays on its own servers, ` +
        `builds websites without tracking scripts and publishes all its code.`,
    },
    cs: {
      title: pageTitle(`Svoboda: proti cenzuře a sledování`, mainName),
      description:
      `Proč je ${mainName} proti cenzuře a kontrole: provozuje relé sítě Tor na vlastních serverech, ` +
        `staví weby bez sledovacích skriptů a zveřejňuje všechno, co napíše.`,
    },
  },
  "/governance": {
    en: {
      title: pageTitle(`Governance: who decides and how`, mainName),
      description:
      `Who maintains the projects at ${mainName}, where decisions are made, what a contribution ` +
        `is owed, and what an open licence does and does not grant.`,
    },
    cs: {
      title: pageTitle(`Správa: kdo rozhoduje a jak`, mainName),
      description: `Kdo spravuje projekty ${mainName}, kde se rozhoduje, na co má příspěvek nárok a co otevřená licence dává a co ne.`,
    },
  },
  "/faq": {
    en: {
      title: pageTitle(`FAQ: code ownership, pricing and tracking`, mainName),
      description:
      `Common questions about ${mainName}: who owns the delivered code, whether it can stay ` +
        `private, what it costs, who maintains it, and whether visitors are tracked.`,
    },
    cs: {
      title: pageTitle(`Časté dotazy: kód, ceny a sledování`, mainName),
      description:
      `Časté otázky k ${mainName}: komu patří odevzdaný kód, jestli může zůstat neveřejný, ` +
        `kolik stojí, kdo ho udržuje a jestli se sledují návštěvníci.`,
    },
  },
  "/security": {
    en: {
      title: pageTitle(`Security: report a vulnerability`, mainName),
      description:
      `How to report a vulnerability in anything ${mainName} publishes or runs, what we ask of a reporter, and what happens after a report arrives.`,
    },
    cs: {
      title: pageTitle(`Bezpečnost: nahlášení zranitelnosti`, mainName),
      description: `Jak nahlásit zranitelnost v čemkoli, co ${mainName} vydává nebo provozuje, co žádáme od oznamovatele a co se stane po nahlášení.`,
    },
  },
  "/accessibility": {
    en: {
      title: pageTitle(`Accessibility: WCAG 2.2 AA as the bar`, mainName),
      description:
      `The accessibility standard ${mainName} holds its own products and its clients' sites ` +
        `to, what it does not claim, and how to report something that cannot be used.`,
    },
    cs: {
      title: pageTitle(`Přístupnost: WCAG 2.2 AA jako laťka`, mainName),
      description: `Standard přístupnosti, na který ${mainName} drží své produkty i weby klientů, co netvrdí a jak nahlásit něco, co se nedá použít.`,
    },
  },
  "/careers": {
    en: {
      title: pageTitle(`Careers: open roles and how to apply`, mainName),
      description: `${mainName} is hiring: the open roles, the languages and technologies the work is built with, and what to send to apply.`,
    },
    cs: {
      title: pageTitle(`Kariéra: otevřené role a jak se přihlásit`, mainName),
      description: `${mainName} nabírá: otevřené role, jazyky a technologie, ze kterých se práce staví, a co poslat, když se chcete ozvat.`,
    },
  },
  "/contribute": {
    en: {
      title: pageTitle(`Contribute: repositories and how to help`, mainName),
      description:
      `How to work on what ${mainName} publishes: where the repositories are, the terms ` +
        `a contribution arrives under, and what makes a change easy to take.`,
    },
    cs: {
      title: pageTitle(`Přispět: repozitáře a jak pomoci`, mainName),
      description: `Jak pracovat na tom, co ${mainName} vydává: kde jsou repozitáře, za jakých podmínek příspěvek přichází a co se přijímá snadno.`,
    },
  },
  "/blog": {
    en: {
      title: pageTitle(`Blog: decisions, releases and lessons`, mainName),
      description:
      `Why decisions at ${mainName} went the way they did, what a release actually changes, ` +
        `and what broke badly enough to change how the organization works.`,
    },
    cs: {
      title: pageTitle(`Blog: rozhodnutí, vydání a poučení`, mainName),
      description:
      `Proč rozhodnutí v organizaci ${mainName} dopadla tak, jak dopadla, co vydání ` +
        `doopravdy mění a co se rozbilo natolik, že to změnilo způsob práce.`,
    },
  },
  "/roadmap": {
    en: {
      title: pageTitle(`Roadmap: what is being built next`, mainName),
      description:
      `What ${mainName} is building now, what comes next, and what is only a direction. No dates, and no promises the licence does not make.`,
    },
    cs: {
      title: pageTitle(`Plán: co se staví a co přijde`, mainName),
      description: `Co ${mainName} staví teď, co přijde potom a co je zatím jen směr. Bez termínů a bez slibů, které otevřená licence nedává.`,
    },
  },
  "/brand": {
    en: {
      title: pageTitle(`Brand: the ${mainName} mark and how to use it`, mainName),
      description: `The ${mainName} mark: its two forms, the clear space it needs, the smallest size it works at, and what not to do to it.`,
    },
    cs: {
      title: pageTitle(`Značka: logo ${mainName} a jak ho používat`, mainName),
      description: `Značka ${mainName}: její dvě podoby, volný prostor kolem ní, nejmenší velikost, ve které funguje, a co s ní nedělat.`,
    },
  },
  "/about": {
    en: {
      title: pageTitle(`About: an independent software organization`, mainName),
      description:
      `${mainName} is an independent software organization. It builds its own products, holds client work to the same bar, and publishes all of it.`,
    },
    cs: {
      title: pageTitle(`O nás: nezávislá softwarová organizace`, mainName),
      description:
      `${mainName} je nezávislá softwarová organizace. Staví vlastní produkty, práci pro klienty drží na stejné úrovni a všechno zveřejňuje.`,
    },
  },
  "/contact": {
    en: {
      title: pageTitle(`Contact: start a project`, mainName),
      description:
      `Email addresses for starting a project, support, careers, security reports and legal matters at ${mainName}. Every message is read.`,
    },
    cs: {
      title: pageTitle(`Kontakt: začněte projekt`, mainName),
      description:
      `E-mailové adresy pro nový projekt, podporu, kariéru, hlášení zranitelností a právní věci v organizaci ${mainName}. Čteme každou zprávu.`,
    },
  },
  "/licenses": {
    en: {
      title: pageTitle(`Licenses: MIT, AGPL-3.0 and GPL-3.0`, mainName),
      description:
      `The open-source licences ${mainName} publishes its software under, MIT, AGPL-3.0 and GPL-3.0, and what each one lets you do with the code.`,
    },
    cs: {
      title: pageTitle(`Licence: MIT, AGPL-3.0 a GPL-3.0`, mainName),
      description: `Otevřené licence, pod kterými ${mainName} vydává svůj software, MIT, AGPL-3.0 a GPL-3.0, a co vám každá z nich s kódem dovoluje.`,
    },
  },
  "/philosophy": {
    en: {
      title: pageTitle(`Philosophy: open source and Linux only`, mainName),
      description:
      `What ${mainName} believes and what follows from it: why every line it writes is public, ` +
        `and why it builds desktop software for Linux and for nothing else.`,
    },
    cs: {
      title: pageTitle(`Filozofie: open source a jen Linux`, mainName),
      description:
      `Čemu ${mainName} věří a co z toho plyne: proč je každý řádek, který napíše, veřejný, a proč staví software pro počítače jen pro Linux.`,
    },
  },
};
