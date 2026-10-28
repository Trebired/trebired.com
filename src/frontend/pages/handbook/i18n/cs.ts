import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    lead: "Jak se práce staví a vydává: tři tvary repozitáře, co patří do zdrojového kódu, jak se čte vydání a čí jméno na práci stojí.",
    name: {
      closing: "Nepředává se nic, co vývojář nepřečetl, nepochopil a není připravený obhájit.",
      text:
      "Každý commit, tag, vydání i zveřejněný balíček nese jméno člověka, který tu práci udělal, a žádného spoluautora. AI se " +
        "používá tak, jako se používá překladač nebo editor: jako nástroj v rukou někoho, kdo za výsledek dál odpovídá. Nikdy " +
        "se nepodepisuje, protože model nemůže za nic odpovídat.",
      title: { after: "na tom stojí", before: "Čí", word: "jméno" },
    },
    release: {
      after:
      "Zvýšení verze je vlastní commit a anotovaný tag nese tutéž větu. Commit vydání jde ven první a tag druhý, protože tag, " +
        "který dorazí první, neukazuje na nic. Zveřejněný tag se nikdy nepřesouvá ani nemaže; chyba se opravuje další verzí.",
      text:
      "Zpráva u commitu je předmět a většinou nic víc: rozkazovací způsob, bez koncové tečky, do dvaasedmdesáti znaků, popisuje " +
        "chování, které se změnilo, ne soubory, kterých se to dotklo. Žádné prefixy typu, žádné rozsahy. Commit, který " +
        "potřebuje dvakrát slovo „a“, jsou dva commity.",
      title: "Jak se čte commit a vydání",
    },
    shapes: {
      kinds: {
        app: {
          name: "Aplikace",
          text:
          "Aplikace drží backend, frontend, kód, který oba sdílejí, spustitelné soubory a typy, vždy pod těmito pěti jmény. " +
            "Kdo pracoval v jedné aplikaci, vyzná se v každé další.",
        },
        package: {
          name: "Balíček",
          text:
          "Balíček drží zdrojový kód v src a ověření jako spustitelné skripty v scripts/verify a před každým zveřejněním je " +
            "spustí brána. Žádný balíček nemá vlastní rozvržení testů.",
        },
        text: {
          name: "Textový repozitář",
          text:
          "Textový repozitář drží dokumenty, na kterých se shodne víc repozitářů: složku na dokument, soubor na jazyk a žádný " +
            "build. Všechny jazyky jednoho dokumentu leží ve stejné složce.",
        },
      },
      text:
      "Každý repozitář je jeden ze tří druhů a každý druh má jedno rozvržení, ve všech repozitářích toho druhu stejné. Nikdo " +
        "se nemusí repozitář učit, než v něm začne pracovat: soubory jsou tam, kde byly v tom minulém. Text, který čte jen " +
        "jeden repozitář, v něm zůstává; textový repozitář vzniká ve chvíli, kdy dva potřebují stejná slova.",
      title: "Pokaždé stejný tvar",
    },
    source: {
      dist:
      "Co build stáhne, odvodí nebo vykreslí, patří do dist: snímek vzdáleného rozhraní, soubor s kurzy, předrenderovaná " +
        "stránka. Zapisuje se při každém běhu a nikdy se necommituje.",
      rule:
      "Repozitář, který drží generovaný soubor ve zdrojovém kódu, je vadný, a je vadný i tehdy, když je ten soubor malý, když " +
        "se mění jednou za rok a když by s ním byl build rychlejší. Aplikace čte generovaná data stejně jako kterýkoli jiný " +
        "vstup buildu, nikdy jako import ze zdrojového stromu.",
      src: "Co napíše člověk, patří do src: kód a text. Commituje se.",
      title: "Napsané člověkem, nebo postavené buildem",
    },
    title: "Příručka",
});
