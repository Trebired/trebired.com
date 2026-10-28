import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    swatches: {
      ink: {
        label: "Inkoust",
        note: "Na světlém podkladu",
      },
      reversed: {
        label: "Obrácená",
        note: "Na tmavém podkladu",
      },
    },
    colour: {
      lead: "Značka nemá vlastní barvu. Je inkoustem stránky, nebo je z ní vyvedená naopak. Nic jiného schválené není.",
      title: "Barva",
    },
    identity: {
      body1:
      "Každý řádek, který Trebired napíše, je zveřejněný pod AGPL nebo MIT a kdokoli ho smí číst, spouštět, měnit a forknout, " +
        "aniž by se ptal. Ta licence pokrývá kód. Neuděluje žádné právo ke jménu Trebired, ke jménům jeho produktů, balíčků a " +
        "serverů, k logotypům a logům na této stránce ani k doménám, názvům repozitářů a účtům, které organizace používá. To je " +
        "její identita a nárokuje si ji jako neregistrované známky vzniklé užíváním.",
      body2:
      "To oddělení je záměrné a identita je jediné, co tu organizace vymáhá. Otevřený kód funguje proto, že zdroj je komodita " +
        "a jméno ne. Jméno je jediná věc, která čtenáři řekne, jestli to, co spouští, pochází od nás a jestli za tím někdo " +
        "stojí. Fork s naší značkou tuhle odpověď zruší všem, i lidem, kteří s námi nikdy nejednali.",
      body3:
      "Takže forkujte cokoli a vydejte to pod vlastním jménem. Odkazujte na produkt Trebired jménem, když potřebujete říct, s " +
        "čím jste kompatibilní, na čem stavíte nebo s čím se srovnáváte. Reprodukujte značku beze změn, s odstupem popsaným " +
        "níže, když o organizaci píšete. Nepojmenovávejte svůj produkt, organizaci, server, balíček, službu ani doménu po " +
        "našich značkách ani po ničem, co je jim dost blízko, aby se to dalo zaměnit, a nenechávejte naše značky ve forku.",
      body4:
      "Když se to stane, prvním krokem je přímá zpráva s konkrétní požadovanou změnou a termínem, do kdy se čeká. Pokud to " +
        "věc nevyřeší, organizace eskaluje na registrátora, registr, balíčkový registr, platformu nebo hostitele a je " +
        "připravena vést formální řízení. Žádné povolení nevzniká mlčky, zvykem, technickým přístupem, veřejnou dostupností ani " +
        "tím, že se práva zrovna nevymáhají.",
      more: "Přečíst zásady k ochranným známkám",
      titleClosed: "Jméno ne.",
      titleOpen: "Kód je otevřený.",
    },
    lead: "Značka {{brand}}: její dvě podoby, prostor, který potřebuje, velikost, pod kterou přestává fungovat, a co s ní nedělat.",
    marks: {
      full: { dark: "Slovní značka · na tmavém", light: "Slovní značka · na světlém" },
      lead:
      "Značka existuje jako slovní značka a jako slovní značka se znakem ochranné známky, kterou nese hlavička a patička webu. " +
        "Používejte obě tak, jak jsou, v inkoustu stránky nebo vyvedené naopak.",
      tm: { dark: "Se znakem ™ · na tmavém", light: "Se znakem ™ · na světlém" },
      title: "Značka",
    },
    rules: {
      item1: "Značku nepřekreslujte, neroztahujte ani neotáčejte.",
      item2: "Značku nepřebarvujte. Je inkoustová, nebo obrácená, nic jiného.",
      item3: "Nedávejte značku na rušnou fotografii ani na podklad s nízkým kontrastem.",
      item4: "Nesázejte nápis značky znovu v písmu. Písmena jsou kreslená, ne psaná.",
      item5: "Nepřidávejte stín, obrys, přechod ani rámeček, který značka nemá.",
      title: "Co nedělat",
    },
    space: {
      clearText: "Ze všech stran nechte volný prostor ve výšce verzálky značky. Nic do něj nevstupuje.",
      clearTitle: "Ochranná zóna",
      minText: "Pod touto výškou přestává být značka čitelná. Místo dalšího zmenšování použijte samotný nápis.",
      minTitle: "Minimální velikost",
      title: "Prostor a velikost",
    },
    title: "Značka",
    typeface: {
      lead:
      "{{family}} sází každý nadpis na tomhle webu a logotyp vychází ze stejných tvarů písmen. Jedno písmo, aby stránka a " +
        "značka na ní působily jako jedna věc.",
      markLabel: "Ve značce",
      markNote: "Logotyp je kreslený, ne vysázený. Písmo nastavujte nadpisům; značku v něm nikdy nesázejte znovu.",
      specimen: "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789",
      title: "Písmo",
      usage: "Nadpisy, logotyp a nic dalšího. Běžný text je IBM Plex Sans.",
      usageLabel: "Kde se používá",
      weightLabel: "Váha nadpisů",
    },
});
