import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    lead: "Kde jsou repozitáře, co usnadní přijetí změny, jak nahlásit problém a za jakých podmínek příspěvek přichází.",
    titles: {
      open: { first: "Framework", second: "už je postavený" },
      report: { first: "Hlášení má stejnou cenu jako", second: "oprava" },
      rules: { first: "Co se přijímá", second: "snadno" },
    },
    title: "Přispět",
    poster: {

      open: "Otevřít {{count}} repozitářů",
      rules: {
        behaviour: {
          text: "Napište, co se změnilo pro toho, kdo to používá, ne které soubory se pohnuly.",
          title: "Popsaná chováním, ne soubory",
        },
        dependency: {
          text: "Jen když se kód nedá napsat místo ní. Většinou se dá.",
          title: "Důvod pro každou novou závislost",
        },
        gate: {
          text: "Nástroj na kázeň, který hlídá naše commity, běží i na vašich. Změna, která jím neprojde, se nesloučí.",
          title: "Projde kontrolou disciplíny",
        },
        one: { text: "Jedna ucelená změna, aby se dala přečíst, vrátit a vydat sama.", title: "Jedna změna na commit" },
      },

      scale: { in: { label: "Přichází", title: "Váš patch pod jeho licencí" }, out: { label: "Dluží se zpět", title: "Nic" } },
      securityAction: "Nahlásit zranitelnost",
    },
    sections: {
      section1: {
        body1:
        "Trebired staví své webové aplikace na vlastním frameworku: frontendu, bundleru, loggeru, store a balíčcích kolem " +
          "nich. Všechno je veřejné na github.com/Trebired pod MIT nebo AGPL, takže stavět s ním začíná u funkčního kódu. Není " +
          "tu žádný portál pro přispěvatele, žádná přihláška a nic, k čemu by bylo potřeba dostat přístup. Vyberte repozitář, " +
          "ve kterém problém žije, přečtěte si README a changelog a založte issue nebo pull request.",
        heading: "Framework už je postavený",
      },
      section2: {
        body1:
        "Příspěvek přichází pod licencí repozitáře, do kterého míří. To je celá dohoda; žádná zvláštní smlouva pro přispěvatele " +
          "se nepodepisuje.",
        body2:
        "Organizace za to nedluží nic. Ani sloučení, ani uvedení, ani odpověď, ani peníze. Patch může ležet, být přepsaný nebo " +
          "odmítnutý bez vysvětlení. Radši to řekneme tady, než aby na to někdo přišel po víkendu stráveném nad prací.",
        heading: "Co přichází a za jakých podmínek",
      },
      section3: {
        body1:
        "Jedna ucelená změna na commit, popsaná chováním, které se změnilo, ne soubory, které se přesunuly. Nástroj na " +
          "disciplínu kódu, který hlídá naše vlastní commity, běží i na vašich, takže změna, která jím neprojde, se nesloučí, ať " +
          "je jakkoli dobrá.",
        body2: "Nová závislost potřebuje důvod, který přežije otázku, proč ten kód nejde napsat. Většinou nepřežije.",
        heading: "Co se přijímá snadno",
      },
      section4: {
        body1:
        "Issue, které chybu přesně zopakuje, má větší cenu než oprava, která hádá příčinu. Napište, co jste udělali, co se " +
          "stalo a co jste čekali, a u jaké verze.",
        body2:
        "Bezpečnostní problém do issue nepatří. Jde cestou popsanou na [stránce o bezpečnosti](/security), která existuje " +
          "proto, aby zranitelnost nebyla veřejná dřív, než je na co přejít.",
        heading: "Hlášení má stejnou cenu jako oprava",
      },
    },
});
