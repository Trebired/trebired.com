import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    items: {
      agpl: {
        name: "GNU Affero General Public License",
        summary:
        "Silný copyleft, který dosáhne i přes síť. Kdokoli smí software provozovat, studovat, měnit a sdílet, a kdo nabízí " +
          "upravenou verzi jako službu, musí své změny zveřejnit pod stejnou licencí.",
      },
      gpl: {
        name: "GNU General Public License",
        summary:
        "Silný copyleft pro software, který se šíří, ne hostuje. Kdokoli jej smí provozovat, studovat, měnit a sdílet a cokoli " +
          "na něm postaveného vychází pod stejnou licencí.",
      },
      mit: {
        name: "Licence MIT",
        summary:
        "Permisivní. Kdokoli smí kód používat, měnit a dále šířit, v otevřených i uzavřených produktech, pokud s ním putuje " +
          "copyrightová poznámka a licence.",
      },
    },
    poster: {
      compare: "Co která dovoluje",
      count: "Veřejné repozitáře podle licence",
      may: "Smíte",
      must: "Musíte",
      none: "Dnes ji nepoužívá žádný repozitář",
      other: "Jiné podmínky",
      rows: {
        change: "Měnit",
        closed: "Zabudovat do uzavřeného produktu",
        distribute: "Zveřejnit změny, které šíříte",
        network: "Zveřejnit změny, které provozujete přes síť",
        notice: "Zachovat copyrightovou poznámku",
        run: "Provozovat",
        share: "Šířit",
      },
      used: "Používají ji",
      yes: "Ano",
      no: "Ne",
    },
    lead: "Všechno, co {{product}} staví, je open source. Toto jsou licence, pod kterými vydáváme, a každý produkt uvádí, která pro něj platí.",
    pending: "Úplné znění je součástí zdrojového kódu a není zde zrcadleno.",
    title: "Licence",
});
