import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    lead:
    "Kde se zapisují rozhodnutí, co žádné rozhodnutí nezmění, jak se proti rozhodnutí ohradit a co se stane, když " +
      "organizace skončí.",
    titles: {
      continuity: { first: "Když organizace", second: "skončí" },
      fixed: { first: "Co žádné rozhodnutí", second: "nezmění" },
      record: "Rozhodujeme *veřejně*",
      routes: "Když s rozhodnutím\n*nesouhlasíte*",
    },
    title: "Správa",
    poster: {
      counts: {
        action: "Všechny licence",
        packages: "balíčků na npm, s verzemi, které tam zůstávají",
        permissions: "svolení potřebných k pokračování",
        repos: "veřejných repozitářů, už na discích jiných lidí",
      },
      fixed: {
        gate: {
          by: "Code Discipline, v každém repozitáři",
          text: "Každý repozitář používá stejný nástroj na kázeň a commit, který jím neprojde, se odmítne, ať ho napsal kdokoli.",
          title: "Žádná změna neobejde bránu",
        },
        heldBy: "Drží to",
        licence: {
          by: "Samotné licenční podmínky",
          text: "Co vyšlo pod otevřenou licencí, pod ní zůstává, na každé kopii, která už existuje.",
          title: "Licence se nikdy neodvolává",
        },
        name: {
          by: "Zásady ochranných známek",
          text: "Kód si můžete odnést kamkoli. Vydávat fork za Trebired nebo za něco, co Trebired podporuje, ne.",
          title: "Jméno zůstává organizaci",
        },
        open: {
          by: "Licence v každém repozitáři",
          text:
          "Žádná uzavřená vrstva, žádný zdroj jen k nahlédnutí a žádná placená vrstva, která odemyká zadržený kód. Co nejde " +
            "zveřejnit, se nevydává.",
          title: "Všechno je open source",
        },
        tag: {
          by: "Veřejná historie tagů",
          text: "Vydaná verze se nikdy nepřesouvá ani nemaže. Chybu opraví až další verze.",
          title: "Vydání se nikdy nepřepisuje",
        },
      },
      routes: { fork: "Udělejte fork", issue: "Založte issue", write: "Napište nám" },
    },
    sections: {
      section1: {
        body1:
        "Rozhoduje se tam, kde je práce: ve veřejném repozitáři. Rozhodnutí, které tam zapsané není, se nestalo, a to, které " +
          "tam zapsané je, si může přečíst kdokoli, včetně toho, proti komu padlo.",
        body2:
        "Každé rozhodnutí zanechá stejnou stopu: issue s otázkou a odpovědí i s důvodem, commit pod jménem toho, kdo ho " +
          "udělal, srozumitelný záznam v changelogu a tag, který se nikdy nepřesouvá ani nemaže. Každý repozitář má správce, " +
          "který za něj odpovídá, a všechny správce váže stejný standard.",
      },
      section2: {
        body1:
        "Některé věci nejsou předmětem rozhodnutí nikoho, ani těch, kdo práci spravují. Každou z nich drží něco jiného než " +
          "dobrá vůle.",
      },
      section3: {
        body1:
        "Dá se to posunout třemi cestami a žádná z nich nepotřebuje svolení. Když to může být veřejné, založte issue " +
          "v repozitáři, ve kterém rozhodnutí padlo, aby nesouhlas stál hned vedle rozhodnutí a kdokoli si přečetl obojí.",
        body2:
        "Když to veřejné být nemůže, protože jde o bezpečnostní problém, právní záležitost nebo soukromou věc, napište nám. " +
          "Když chcete jít vlastní cestou, udělejte fork: licence vám dovoluje vzít kód bez ptaní a zůstává jen jméno.",
      },
      section4: {
        body1:
        "Všechno je už zveřejněné, pod licencí, kterou nelze vzít zpátky, a leží na discích jiných lidí. Když tahle organizace " +
          "zítra skončí, nebude se nic zachraňovat a nikdo nebude muset nikoho žádat o svolení, aby v tom pokračoval.",
      },
    },
});
