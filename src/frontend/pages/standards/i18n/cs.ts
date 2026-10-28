import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    figure: {
      commit: { text: "znaků v předmětu commitu, v rozkazovacím způsobu, o chování a nikdy o souborech, které se pohnuly.", value: "72" },
      duplicate: {
        text:
        "znaků je hranice, od které začíná pravidlo DRY. Porovná každou funkci ve zdrojovém stromu bez názvů, mezer a " +
          "komentářů, takže dvě funkce, které dělají totéž, jsou jedna skupina duplicit i po přejmenování a jedna z nich " +
          "musí pryč.",
        value: "120",
      },
      file: { text: "řádků v souboru nanejvýš. Delší soubor se rozdělí, než se projekt znovu spustí.", value: "350" },
      function: { text: "řádků ve funkci nanejvýš. Delší funkce dělá dvě věci a stanou se z ní dvě funkce.", value: "50" },
      line: {
        text: "znaků na řádku. Formátovač zalomí, co jde zalomit bezpečně, a zbytek se hlásí, dokud ho někdo nepřepíše.",
        value: "150",
      },
      memory: {
        text: "paměti na aplikaci nanejvýš, cílem je 200 MB. Nad stropem se nic nevydá a opravuje se příčina, nikdy strop.",
        value: "500 MB",
      },
    },
    gate: {
      broken: { label: "Jedno porušení", text: "Nespustí se nic, ani na vašem vlastním stroji, dokud se to neopraví." },
      clean: { label: "Žádné porušení", text: "Aplikace se spustí." },
      text:
      "Každá aplikace běží za bránou code-discipline. Než se cokoli spustí, zkontroluje celý repozitář, takže stačí " +
        "jediné porušené pravidlo a aplikace neběží.",
      title: "Porušte pravidlo a aplikace neběží",
    },
    imports: {
      after: "Každý import zní",
      before: "Místo",
      facts: {
        dead: { text: "Importovaný název, který v souboru nic nepoužívá, se při opravě repozitáře odstraní.", title: "Mrtvé importy pryč" },
        map: {
          text: "Každý alias leží v .trebired/code-discipline/imports vedle kódu. Pohled kompilátoru se z ní generuje a do repozitáře nepatří.",
          title: "Jedna mapa, v repozitáři",
        },
        relative: { text: "Import, který začíná ./, zůstane, jak je. Přepíše se jen ten, který šplhá ven přes ../.", title: "./ zůstává, jak je" },
      },
      text:
      "[@trebired/code-discipline]({{discipline}}) dá každému zdrojovému souboru náhodný alias a celou mapu drží " +
        "v synchronizaci. Import, který šplhá ze složky přes ../, se přepíše na ten alias, takže kód ukazuje na soubor, ne " +
        "na cestu k němu. Alias je náhodný schválně: neříká nic o tom, kde soubor leží.",
      title: "Každý soubor má jméno, které nikdo nevybral",
    },
    lead: "Požadavky, kterými musí projít každá změna a kterým musí dostát každý software, a co se stane, když je něco nesplní.",
    org: {
      text:
      "Pravidla jsou jedna sdílená předvolba, [@trebired/configs]({{configs}}), a [@trebired/code-discipline]({{discipline}}) " +
        "ji vynucuje v každé kódové základně Trebired, ať je napsaná v čemkoli: TypeScript, JavaScript, Rust, Go, C++, C#, " +
        "Python, QML, shell, SCSS i CSS. Repozitář přidává jen to, co je jeho vlastní.",
      title: { hollow: "Jeden", rest: "standard pro celou organizaci" },
    },
    scale: {
      text: "Limity, které nastavuje předvolba a tento standard, každý nakreslený ve skutečné velikosti.",
      title: "Čísla v měřítku",
    },
    title: "Standardy",
});
