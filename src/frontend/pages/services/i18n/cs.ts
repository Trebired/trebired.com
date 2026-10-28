import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    conditionsTitle: "Dvě podmínky",
    lead: "Co stavíme, u každého cena, a hotové projekty, které z toho vznikly. Všechno se dohodne písemně, než se začne stavět.",
    offers: {
      application: {
        text:
        "Když stránky nestačí: účty, objednávky, rezervace, sklad, administrace, kterou zvládne kdokoli z týmu. Cena se stanoví " +
          "po plánování, protože o rozsahu práce rozhoduje to, co má aplikace umět.",
        title: "Webová aplikace",
      },
      identity: {
        text:
        "Značka nakreslená pro vás, ve všech velikostech a podobách, které reálně potřebujete, s barvami a písmem sepsanými " +
          "tak, aby to další člověk nemohl pokazit. Samostatně i k čemukoli výše.",
        title: "Logo a vizuální identita",
      },
      other: {
        text:
        "Nástroje, které běží na serveru a musí zůstat nahoře, software, který mluví s hardwarem, systémy stavěné přímo na " +
          "Linuxu, desktopové aplikace. Popište, co to má dělat, a dostanete přímou odpověď, jestli jsme na to ti praví a kolik " +
          "by to stálo, ještě než se na čemkoli dohodneme.",
        title: "Něco složitějšího než web",
      },
      rebuild: {
        text:
        "Vaše texty a fotky přenesené na něco současného. Staré weby obvykle selhávají na telefonech, načítají se vteřiny a " +
          "nejdou upravit bez cizí pomoci. Přestavba spraví všechno tři a nechá fungovat to, co funguje.",
        title: "Přestavba starého webu",
      },
      website: {
        text:
        "Nový web napsaný na to, co vaše firma opravdu dělá, ne nalitý do šablony, kterou už někdo prodal tisíckrát. Načte se " +
          "rychle i na telefonu, přečte ho odečítač obrazovky a nikoho nesleduje. Dostanete ho celý, včetně kódu.",
        title: "Web postavený pro vás",
      },
    },
    offersLead:
    "To, na co se ptáte nejčastěji, u každého cena. Každá cena je za celou věc, dohodnutá písemně předem, a nehne se, dokud " +
      "nezměníte zadání vy.",
    offersTitle: "Co děláme a kolik to stojí",
    openCondition:
    "Všechno, co postavíme, vychází s otevřeným zdrojovým kódem, a souhlas s tím je podmínkou spolupráce. Neexistuje " +
      "varianta s výjimkou, se soukromým repozitářem ani s odkladem na později. Váš obsah, vaše data a vaše přístupy jsou " +
      "vaše a zůstávají soukromé. Kód, který je obsluhuje, je veřejný, v repozitáři pod vaším vlastním účtem na GitHubu, " +
      "nebo, jak doporučujeme, pod naším.",
    openConditionTitle: "Všechno je open source",
    platform:
    "Desktopový software, který píšeme, běží na Linuxu. Ne na Windows, ne na macOS, ne později a ne za příplatek. Je to " +
      "rozhodnutí o tom, co je organizace ochotná udržovat, a ptaním se to nezmění. Cokoli, co běží v prohlížeči, funguje " +
      "všude, kde je prohlížeč, tedy i na Windows a na Macu.",
    platformTitle: "Linux, a nic jiného",
    boundFrom: "od",
    boundMax: "do",
    priceFrom: "od {price}",
    priceMax: "do {price}",
    course: {
      agreed: "Dohodnuto písemně, jedna cena za celé dílo.",
      change: "Změníte zadání. Nové číslo přijde jako první.",
      done: "Předáno za dohodnutou cenu.",
      harder: "Práce je těžší, než se čekalo. Cena zůstává.",
      lead: "Jedna cena za celé dílo, písemně, než se cokoli začne. Pod ní není žádná hodinová sazba.",
    },
    priceSheet: {
      first: "Cena, která",
      second: "se nehne.",
    },
    priceTerms: {
      covers: {
        body1:
        "Popsaná práce, hotová, zveřejněná jako open source a předaná se zdrojovým kódem, licencí a návodem. Provozní " +
          "náklady, které platíte přímo tomu, kdo je poskytuje, doména, server, mailová služba, zazní dřív, než " +
          "odsouhlasíte. Následná údržba je dobrovolná a má vlastní cenu.",
        heading: "Co je v ceně",
      },
      without: {
        body1:
        "Žádná záloha, žádný paušál, žádný poplatek za uživatele, žádná licence, která vyprší, a žádná vyšší verze, která " +
          "odemkne to, co už je hotové. A žádná sleva za zavření zdrojového kódu, protože zdrojový kód není na prodej.",
        heading: "Co tu není",
      },
    },
    priceQuote: "cena podle projektu",
    process: {
      action: "Přečíst si postup",
      lead:
      "Žádný discovery workshop a žádné předávání mezi odděleními. Jednáte přímo s inženýry, kteří váš projekt staví, a" +
        " celý sled od první zprávy po předání je sepsaný.",
      title: "Jak práce probíhá",
    },
    stack: {
      data: { text: "PostgreSQL pro vlastní záznamy produktu, SQLite tam, kde úložiště putuje s programem, který ho čte.", title: "Data" },
      desktop: { text: "Rust s Qt pro software, který běží přímo na stroji. Tak je postavený AdmitPress.", title: "Desktop" },
      interface: { text: "React vykreslovaný na serveru, styly sestavené při buildu, žádný framework posílaný do stránky.", title: "Rozhraní" },
      languages: {
        text: "Každý vybraný pro to, v čem je dobrý: Rust pro rychlost a bezpečnost, TypeScript pro web, Go pro malé služby.",
        title: "Jazyky",
      },
      lead: "Na čem se práce staví. Stejné nástroje u každého projektu, aby mohl kdokoli navázat tam, kde jiný skončil.",
      machines: { text: "Všechno se nasazuje na linuxové servery a desktopový software se píše pro Linux.", title: "Stroje" },
      runtime: { text: "Bun spouští, sestavuje a testuje každý projekt v TypeScriptu, jako jeden nástroj místo čtyř.", title: "Běhové prostředí" },
      title: "Na čem stavíme",
    },
    terms: {
      first: "Dvě",
      open: {
      },
      second: "podmínky.",
    },
    title: "Co stavíme a kolik to stojí",
    workLead: "Hotová práce, která běží, pro klienty i pro nás.",
    workTitle: "Co jsme postavili",
});
