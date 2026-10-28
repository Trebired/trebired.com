import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    lead: "Jak nahlásit zranitelnost v čemkoli, co vydáváme nebo provozujeme, co se stane po nahlášení a o co prosíme během testování.",
    report: {
      contact: "Ozvěte se",
      issue:
      "Neotvírejte na bezpečnostní problém veřejný issue. Všechno, co Trebired vydává, je open source, takže issue je " +
        "zveřejnění.",
      text: "Napište na {{email}}, co jste našli, kde a co by s tím útočník dokázal. Proof of concept má větší cenu než výstup ze skeneru.",
      title: "Nahlaste to *soukromě*",
    },
    response: {
      text:
      "Do dvou pracovních dnů dostanete potvrzení od člověka, ne ze šablony, a do týdne posouzení, ve kterém stojí, jestli se " +
        "shodneme, že jde o zranitelnost, a co s tím hodláme dělat. Oprava vyjde hned, jak je hotová, se zmínkou v poznámkách " +
        "k vydání, pokud o ni stojíte.",
      thanks:
      "Děkujeme za každé hlášení, ať jde o zranitelnost, nebo o cokoli jiného, co nevypadá správně. Kdo si dá práci ho " +
        "sepsat, odvádí kus práce pro každého, kdo tenhle kód používá, a jsme mu za to vděční.",
      title: "Co bude *dál*",
    },
    scope: {
      promise:
      "Nebudeme vyhrožovat tomu, kdo se držel těchto pravidel, a dobromyslný výzkum nebudeme považovat za útok. Neprovozujeme " +
        "bug bounty a neplatíme odměny. Říkáme to tady, místo aby to někdo zjistil, až bude práce hotová.",
      text:
      "V rozsahu je každá služba, kterou Trebired provozuje, a každý repozitář, který Trebired vydává. Mimo rozsah jsou " +
        "hlášení, která jen opakují výstup skeneru bez funkčního zneužití, chybějící hardening hlavičky bez prokázaného dopadu, " +
        "sociální inženýrství vůči lidem, kteří organizaci provozují, odstávka hrubou silou a vady ve službách třetích stran, " +
        "které jen používáme.",
      title: "Žádné odměny, žádné *výhrůžky*",
    },
    test: {
      data:
      "Nepřistupujte k datům, která nejsou vaše, nekopírujte je, neměňte je, nedržte si je ani je nevynášejte, a přestaňte, " +
        "jakmile problém potvrdíte.",
      own: "Testujte pokud možno proti vlastní instalaci. Náš kód je veřejný, takže si ho můžete spustit sami.",
      title: "Otestujte to a *přestaňte*",
      window:
      "Dejte nám rozumný čas na opravu, než to zveřejníte. Nebudeme po vás chtít, abyste mlčeli donekonečna, a ten čas " +
        "nepoužijeme k tomu, abychom nález ukecali.",
    },
    title: "Bezpečnost",
});
