import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    fixed: {
      contact: "Ozvěte se",
      report:
      "Když je něco, co jsme postavili, nepoužitelné, ať v našem produktu, na webu, který jsme dělali pro klienta, nebo " +
        "tady, napište nám a řekněte, co jste chtěli udělat, co vás zastavilo a co jste používali. Hlášení o přístupnosti " +
        "bereme jako hlášení chyby produktu, ne jako zpětnou vazbu. V našich produktech a na tomto webu vyjde oprava běžnou " +
        "cestou; u webu klienta jde hlášení k tomu, kdo ho spravuje.",
      title: "Napište nám a *opravíme* to",
      unknown:
      "Nic z toho neprošlo formálním auditem, takže poctivý předpoklad je, že existují problémy, které jsme nenašli. " +
        "Nejspíš budou tam, kde je nejvíc pohybu: v překryvech, v nabídkách a ve všem, co je kreslené místo psané.",
    },
    keyboard: {
      focus:
      "První Tab na stránce vede na odkaz, který přeskočí navigaci a skočí rovnou na obsah. Odtud se fokus posouvá " +
        "v pořadí, v jakém čtete. Nabídky se otevírají z klávesnice, Escape je zavře a vrátí fokus na tlačítko, které je " +
        "otevřelo. Dialog drží fokus v sobě, dokud ho nezavřete, takže Tab nikdy neodbloudí za něj.",
      text:
      "Cokoli stavíme, je ze skutečných nadpisů, seznamů, tlačítek a odkazů, takže čtečka obrazovky čte tutéž strukturu, " +
        "kterou vidí vidící návštěvník. Na všechno, na co se dá kliknout, se dá dostat z klávesnice a zaměřený prvek je vždy " +
        "vidět.",
      title: "Všechno ovládnete z *klávesnice*",
    },
    lead:
    "Standard, na který držíme všechno, co stavíme, ve vlastních produktech i v práci pro klienty, co netvrdíme a jak nám " +
      "dát vědět, když se něco nedá použít.",
    level: {
      text:
      "WCAG 2.2 na úrovni AA je laťka pro všechno, co stavíme: pro naše vlastní produkty i pro weby a software, které děláme " +
        "pro klienty. Nebyli jsme proti němu auditovaní a netvrdíme, že máme certifikát. Říct, že mu vyhovujeme, by bylo " +
        "tvrzení, které nikdo neověřil, takže místo toho říkáme, že je to laťka a že selhání proti ní je chyba jako každá jiná.",
      title: "Tohle je *laťka*",
    },
    motion: {
      text:
      "Text se zvětšuje, když ho zvětší prohlížeč, nic není sdělené jen barvou a nic se samo nepřehrává, nehýbe ani " +
        "neotevírá. Dekorace nenese žádnou informaci a je před asistivními technologiemi skrytá; když je něco jen vizuálně, " +
        "je to chyba, ne design.",
      title: "Nic se samo *nehýbe*",
    },
    settings: {
      here:
      "Tento web je má také: otevírá je tlačítko s vozíčkem v hlavičce. Tady je volba uložená jen ve vašem prohlížeči, " +
        "není to cookie a neposíláme si ji. Při návratu se použije ještě před prvním vykreslením a smazáním dat prohlížeče " +
        "ji smažete.",
      menu:
      "O tom, jak se stránka hýbe a čte, rozhoduje čtenář. Frontendový balíček, na kterém stojí naše produkty i weby našich " +
        "klientů, má tři nastavení: animace, které se řídí systémem, dokud je čtenář nepřepne; velikost textu, která zvětší " +
        "celou stránku na 125, 150 nebo 200 procent; a vysoký kontrast, který přepne paletu na čistou černou a bílou a " +
        "zesílí každý okraj. Volba zůstává v prohlížeči čtenáře a nikoho neidentifikuje.",
      title: "Nastavení ovládáte *vy*",
    },
    title: "Přístupnost",
});
