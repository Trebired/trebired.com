import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    help: {
      actions: { browser: "Stáhnout Tor Browser", relay: "Provozovat relé" },
      council:
      "Kamery v ulicích kupují městské rady a městské rady se zodpovídají lidem, kteří ve městě žijí. Zeptejte se té " +
        "své, co kamery zaznamenávají, kdo je může prohledávat a jak dlouho, a řekněte ne, když odpověď zní všechno a kdokoli.",
      title: { first: "Svoboda", hollow: "vás", middle: "potřebuje" },
      tools:
      "Používejte nástroje, které si nic nepamatují: Tor Browser na čtení a Signal na zprávy. Volný server se stálým " +
        "připojením může provozovat relé sítě Tor, stejně jako servery Trebired, a zvětšit dav pro každého, kdo v něm je.",
    },
    lead:
    "Svoboda znamená pohybovat se, mluvit a číst, aniž by vás za to někdo zaznamenával. Trebired staví software, který " +
      "nikoho nesleduje, a na vlastních serverech provozuje relé sítě Tor.",
    liberty: {
      cite: "- Emma Lazarus, Nový kolos, 1883",
      quote: "Dejte mi své unavené, své chudé, své schoulené zástupy, které touží volně dýchat.",
      text:
      "Už téměř 140 let stojí socha v newyorském přístavu za jediným slibem: že ve svobodné zemi mohou lidé žít, mluvit " +
        "a pohybovat se, aniž by kohokoli žádali o svolení. Přetržený řetěz u jejích nohou je ten slib, vytepaný z mědi.",
      title: "Svoboda osvěcující svět",
      verdict: "Pořád stojí. Slib, za kterým stojí, praská.",
      watched:
      "Svobodný člověk se nemusí zodpovídat z toho, kam šel, komu volal nebo co četl. Jakmile se všechno zaznamenává, " +
        "platí ta svoboda jen do chvíle, než se někdo rozhodne podívat. V zemi, ve které " +
        "stojí, je to zaznamenávání dnes zapsané v zákoně.",
    },
    onion: {
      layers: {
        core: "Požadavek: stránka, kterou čtenář chtěl",
        one: "Vstupní relé: vidí, kdo čte, ale ne co",
        three: "Výstupní relé: vidí stránku, ale ne čtenáře",
        two: "Střední relé: nevidí ani jedno",
      },
      relays:
      "Síť existuje proto, že její relé provozují dobrovolníci, a Trebired je jedním z nich: na vlastních serverech provozuje " +
        "několik relé sítě Tor a dává jim šířku pásma, kterou potřebují.",
      text:
      "Tor znamená The Onion Router, cibulový směrovač. Než požadavek opustí čtenářův počítač, zabalí se do tří vrstev " +
        "šifrování, jedné pro každé relé na cestě. Každé relé sloupne svou vrstvu a dozví se jen, kam poslat zbytek, takže " +
        "žádné relé neví zároveň, kdo čte a co.",
      title: "Cibulový směrovač",
    },
    recorded: {
      next:
      "Žádná z těchto pravomocí nepotřebuje podezřelého a většina z nich zůstala tajná, dokud jeden smluvní pracovník " +
        "nevynesl dokumenty.",
      timeline: {
        bulk: { text: "Tajný soud povoluje NSA evidovat, kdo komu volá, kdy a jak dlouho.", year: "2006" },
        freedom: {
          text:
          "Zákon USA FREEDOM Act zakazuje NSA ukládat záznamy hovorů všech lidí. O záznamy musí žádat operátory " +
            "případ od případu.",
          year: "2015",
        },
        patriot: { text: "PATRIOT Act dovoluje vyžádat si záznamy o nepodezřelých lidech.", year: "2001" },
        renewed: {
          text:
          "Paragraf 702 je znovu obnoven: zprávy Američanů, které se v něm zachytí, lze dál prohledávat bez " +
            "soudního příkazu.",
          year: "2024",
        },
        section: { text: "Paragraf 702: zprávy do zahraničí se sbírají bez příkazu soudu.", year: "2008" },
        snowden: { text: "Edward Snowden ukazuje, že se podle těchto zákonů sbíraly záznamy o milionech lidí, kteří nic neprovedli.", year: "2013" },
      },
      title: "Sledování, zapsané do zákona",
    },
    snowden: {
      cite: "- Edward Snowden, 2015",
      next: "Telefonní záznamy byly jen začátek. Od té doby se sledování přesouvá do ulic, kamera po kameře.",
      outcome:
      "Novináři, kteří příběh zveřejnili, pracovali s nástroji z této stránky, a o dva roky později Spojené státy ukončily " +
        "hromadný sběr telefonních záznamů svých občanů. Ať si kdokoli myslí cokoli o tom, jak se dokumenty dostaly ven, " +
        "veřejnost se dozvěděla, co se dělo jejím jménem, a zákon se kvůli tomu změnil.",
      quote:
      "Tvrdit, že vám nezáleží na právu na soukromí, protože nemáte co skrývat, je totéž jako říkat, že vám nezáleží " +
        "na svobodě slova, protože nemáte co říct.",
      text:
      "V červnu 2013 předal Edward Snowden, smluvní pracovník americké Národní bezpečnostní agentury, novinářům dokumenty, " +
        "které ukázaly, že agentura shromažďuje telefonní záznamy milionů lidí a data od největších internetových firem, aniž " +
        "by o tom ti lidé věděli.",
      title: "Edward Snowden",
    },
    title: "Svoboda",
    watching: {
      atlas: "Mapa kamer",
      answer:
      "Síť kamer odpovídá na jedinou otázku: kdo byl kde. Šifrování, Tor a software, který si nic nepamatuje, jsou způsob, " +
        "jak si tu odpověď lidé nechávají pro sebe.",
      count:
      "Tolik bezpečnostních kamer bylo v roce 2019 na celém světě " +
        "[podle odhadu IHS Markit](https://www.cnbc.com/2019/12/06/one-billion-surveillance-cameras-will-be-watching-globally-in-2021.html), " +
        "54 procent z nich v Číně, a do roku 2021 se jich čekala miliarda.",
      faces:
      "Kamery se učí poznávat tváře. V srpnu 2025 zaplatilo britské ministerstvo vnitra deset dodávek, které v reálném čase " +
        "porovnávají tváře kolemjdoucích s policejními seznamy hledaných osob, pro sedm policejních sborů v Anglii.",
      label: "kamer v roce 2019",
      title: "Svět se dívá",
      value: "770 000 000",
    },
});
