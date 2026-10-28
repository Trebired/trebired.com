import type { SupportedLang } from "./../runtime/i18n/lang";
import { mainName, pageTitle, type RouteMeta } from "./route_meta";

export const documentRoutes: Record<string, Record<SupportedLang, RouteMeta>> = {
  "/acceptable-use": {
    en: {
      title: pageTitle(`Acceptable use`, mainName),
      description:
      `What you may and may not do with the services ${mainName} runs, what counts as abuse, and what happens when the rules are broken.`,
    },
    cs: {
      title: pageTitle(`Pravidla užívání`, mainName),
      description: `Co se službami, které ${mainName} provozuje, smíte a nesmíte, co se považuje za zneužití a co se stane při porušení pravidel.`,
    },
  },
  "/code-of-conduct": {
    en: {
      title: pageTitle(`Code of conduct`, mainName),
      description:
      `What ${mainName} expects of everyone in its repositories, its services and its ` +
        `correspondence, what is never tolerated, and what happens when it is.`,
    },
    cs: {
      title: pageTitle(`Pravidla chování`, mainName),
      description:
      `Co ${mainName} očekává od každého ve svých repozitářích, službách i korespondenci, co se nikdy netoleruje a co se stane, když k tomu dojde.`,
    },
  },
  "/cookies": {
    en: {
      title: pageTitle(`Cookie policy and browser storage`, mainName),
      description:
      `What ${mainName} stores in your browser, which is almost nothing: no tracking cookies and no analytics, and how to clear what is there.`,
    },
    cs: {
      title: pageTitle(`Zásady cookies`, mainName),
      description: `Co ${mainName} ukládá ve vašem prohlížeči, což je skoro nic: žádné sledovací cookies, žádná analytika, a jak to smazat.`,
    },
  },
  "/trademark": {
    en: {
      title: pageTitle(`Trademark policy`, mainName),
      description: `The marks ${mainName} claims, what you may do with them without asking, and what we act on. The code is open, the name is not.`,
    },
    cs: {
      title: pageTitle(`Ochranné známky`, mainName),
      description: `Značky, které si ${mainName} nárokuje, co s nimi smíte bez ptaní a proti čemu zasáhneme. Kód je otevřený, jméno ne.`,
    },
  },
  "/privacy": {
    en: {
      title: pageTitle(`Privacy policy`, mainName),
      description:
      `How ${mainName} handles personal data when you use this site or write to us: no analytics, no tracking, and only what a reply needs.`,
    },
    cs: {
      title: pageTitle(`Ochrana osobních údajů`, mainName),
      description:
      `Jak ${mainName} nakládá s osobními údaji, když používáte tento web nebo nám napíšete: ` +
        `žádná analytika, žádné sledování, jen to, co je potřeba k odpovědi.`,
    },
  },
  "/terms": {
    en: {
      title: pageTitle(`Terms of service`, mainName),
      description:
      `The terms that govern the ${mainName} websites, its products and their licences, ` +
        `custom work for clients, intellectual property and liability.`,
    },
    cs: {
      title: pageTitle(`Obchodní podmínky`, mainName),
      description: `Podmínky, které platí pro weby ${mainName}, jeho produkty a jejich licence, práci na zakázku, duševní vlastnictví a odpovědnost.`,
    },
  },
};
