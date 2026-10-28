import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    competition: {
      item1: "Vysoká vstupní cena",
      item2: "Často šablonová řešení",
      item3: "Mimo menší rozpočet",
    },
    heroTitle: {
      first: "Děláme pro vás.",
      second: "Ne kolem vás.",
    },
    organizationTitle: {
      first: "Vlastní produkty.",
      second: "Zakázky.",
    },
    pricingTitle: {
      first: "Míň než polovina.",
      second: "Vyšší standard.",
    },
    productPoints: {
      item1: "Kód na míru, žádné šablony",
      item2: "Cenový strop 6 000 Kč",
      item3: "Stavěné jako vlastní produkty",
    },
    projects: {
      admitpress: {
        description:
        "Desktopová aplikace pro Linux, která navrhuje, prodává a tiskne vstupenky, s denním číslováním, hromadnými " +
          "vstupenkami, cenami ve více měnách a evidencí prodeje.",
        kind: "Desktopová aplikace",
        tag1: "Desktop",
        tag2: "Rust",
        tag3: "Qt 6",
        tag4: "Tisk",
        title: "AdmitPress",
      },
      ecommerce: {
        description: "Kompletní e-shop na míru s vlastním administračním rozhraním, platební bránou a napojením na sklad.",
        kind: "Zakázka - e-shop",
        tag1: "E-commerce",
        tag2: "Headless",
        tag3: "Platby",
        title: "Aurra Store",
      },
      restaurant: {
        description: "Prezentační web s online rezervačním systémem a digitálním jídelním lístkem pro městské bistro.",
        kind: "Zakázka - prezentační web",
        tag1: "Web na míru",
        tag2: "Rezervace",
        tag3: "CMS",
        title: "Bistro Kámen",
      },
    },
    serviceItems: {
      design: {
        no: "03",
        text: "Rozhraní, která jsou jednoznačná a rychlá na používání. Ovládání klávesnicí a kontrast řešíme rovnou, ne dodatečně.",
        title: "Design rozhraní",
      },
      operations: {
        no: "04",
        text: "Nasazení, servery, monitoring a údržba. Vlastníme celý běh aplikace, ne jen rozhraní nad ním.",
        title: "Infrastruktura a provoz",
      },
      product: {
        no: "01",
        text: "Stavíme a provozujeme vlastní produkty jako AdmitPress, od prvního nápadu přes design po nasazení a dlouhodobý provoz.",
        title: "Produktový vývoj",
      },
      web: {
        no: "02",
        text: "Weby a webové aplikace na míru pro klienty, navržené a nakódované přesně pro svůj účel, nikdy ze šablony.",
        title: "Weby a aplikace",
      },
    },
    hero: {
      primary: "Naše práce",
      secondary: "Poptat projekt",
      summary:
      "Nezávislá softwarová organizace. Všechno, co stavíme, je open source, vlastní produkty provozujeme a zakázky stavíme stejně.",
    },
    openSource: {
      body:
      "Každý produkt, který provozujeme, i každý nástroj, který jsme na jeho provoz postavili, je zveřejněný. Žádná osekaná " +
        "ukázka: kód, který běží v produkci.",
      copyTooltip: "Zkopírovat příkaz pro klonování",
      groups: {
        app: {
          desktop: "Desktop",
        },
        category: {
          app: "Aplikace",
          other: "Ostatní",
          package: "Balíčky",
        },
        other: {
          other: "Nezařazené",
        },
        package: {
          core: "Základ",
          data: "Data",
          runtime: "Běh",
          security: "Bezpečnost",
          tooling: "Nástroje",
          web: "Web",
        },
      },
      footer: "Každý repozitář výše je veřejný a všechno, co provozujeme, běží na hardwaru, který vlastníme.",
      more: "Všechny licence",
      registryMeta: "{{count}} veřejných repozitářů",
      title: "Všechno, co jsme zveřejnili",
      updated: "aktualizováno {{date}}",
    },
    pricing: {
      body:
      "Většina agentur začíná u klientských webů na {{market}}. U nás stojí nejvýš {{website}} a píšeme je stejně jako vlastní " +
        "produkty: kód na míru, žádné šablony.",
      bodyMuted:
      "Nižší cena je záměr. Znamená víc projektů udělaných pořádně a výsledek předáváme klientovi do vlastnictví.",
      competitionLabel: "Konkurence",
      competitionSuffix: "+",
      cta: "Ozvěte se",
      productLabel: "{{product}}",
      productPriceLabel: "do",
    },
    services: {
      body: "Nekončíme u vzhledu. Vedeme projekt od první skici po běžící nasazení a udržujeme ho v provozu.",
      title: "Od nápadu k běžícímu produktu",
    },
    organization: {
      body:
      "{{product}} je nezávislá softwarová organizace. Stavíme produkty, které sami provozujeme, a zakázky se řídí stejnými " +
        "pravidly: kód psaný pro daný účel, žádné šablony, žádné sledování.",
    },
    work: {
      clientGroup: "Zakázky",
      ownGroup: "Vlastní produkty",
      summary:
      "Vlastní produkty i zakázky pro klienty. Každý projekt od prvního nápadu po provoz.",
      title: "Co stavíme",
    },
});
