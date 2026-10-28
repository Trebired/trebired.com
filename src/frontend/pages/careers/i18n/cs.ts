import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    agree: {
      action: "Přečíst standardy",
      pay:
      "Role jsou zatím neplacené. Práci děláte zdarma, zatímco organizace roste, a jak se z ní stává něco většího, na její " +
        "vedoucí pozice postupují právě lidé, kteří ji postavili.",
      text:
      "Všechno, co napíšete, se zveřejní pod vaším jménem a platí pro to standard organizace: jedna sdílená předvolba, " +
        "vynucená v každé kódové základně, a aplikace, která ho poruší, se nespustí.",
    },
    conditionsTitle: "Teď stavíte, později *vedete*",
    decided: {
      action: "Ozvěte se",
      text: "Každou přihlášku čte člověk a odpověď, která zní ne, dorazí jako ne. Nikdo se neptá na váš věk, školu, titul ani předchozí " +
        "zaměstnavatele.",
      title: "Rozhodli jste se?",
    },
    pick: {
      anywhere: "Kdekoli veřejně",
      label: "Tahle",
      text:
      "Čtverečky nepočítáme. Padesát repozitářů z návodů, nahraný node_modules, žádné README a žádné testy nám " +
        "řeknou méně než jeden dotažený projekt s čitelným kódem, jasným účelem a dokumentací.",
    },
    lead: "Organizace hledá lidi, se kterými poroste. Tady jsou otevřené role, k čemu se jimi zavazujete a co poslat.",
    notice: {
      apply: "Ozvěte se kvůli pozici {{role}}",
      contact: "Ozvěte se",
      label: "Volná pozice",
      openings: { few: "{{count}} volné pozice", many: "{{count}} volné pozice", one: "{{count}} volná pozice", other: "{{count}} volných pozic" },
    },
    send: {
      lead:
      "Pošlete odkaz na jeden skutečný projekt: něco, co jste postavili a co dělá svou práci, s kódem, ve kterém se " +
        "vyzná cizí člověk, README, které říká, k čemu to je, a historií, která dává smysl. Ať je hostovaný kdekoli.",
      title: { first: "Ukažte,", second: "co jste postavili" },
    },
    roles: {
      backend: {
        text:
        "Služby, data a stroje, na kterých běží: schémata a migrace, hranice mezi produktem a jeho úložištěm a práce na " +
          "agentovi, který drží hostitele při odpovídání. Bun a TypeScript, Rust tam, kde se to u horké cesty vyplatí.",
        title: "Backendový vývojář",
      },
      designer: {
        text:
        "Rozhraní, značky a systémy, které je drží konzistentní: typografické škály, barva, odsazení a dokumenty, které " +
          "říkají, jak se každá z nich používá. Design, který se předává jako tokeny a komponenty, ne jako obrázek pro někoho jiného.",
        title: "Designér",
      },
      frontend: {
        text:
        "Vykreslený produkt: React renderovaný na serveru, systém komponent a kontejnerů, přístupnost a naměřené chování " +
          "stránky při reálném použití. Máte na starosti, jak to vypadá i jak rychle to dorazí.",
        title: "Frontendový vývojář",
      },
      fullstack: {
        text:
        "Celý produkt, od schématu po vykreslenou stránku, a vydání, které ho postaví někomu před oči. Nejširší role, " +
          "kterou tu máme: nese produkt od začátku do konce, ne jednu jeho vrstvu.",
        title: "Full stack vývojář",
      },
    },
    rolesTitle: "Otevřené role",
    title: "Kariéra",
});
