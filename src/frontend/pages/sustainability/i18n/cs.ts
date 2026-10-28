import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    budget: {
      action: "Přečíst standardy",
      note: "Cíl pro každou aplikaci Trebired. Strop je 500 MB a nad ním se nic nevydává.",
      title: "Měřeno v megabajtech",
      unit: "MB",
      value: "200",
      why:
      "Paměti je nedostatek. Od konce roku 2025 výrobci čipů přesouvají výrobu k datovým centrům pro AI a cena běžné RAM " +
        "prudce stoupla. Software, který s každou verzí chce víc paměti, nutí lidi kupovat nové počítače a vyhazovat ty " +
        "funkční. Trebired staví obráceně: čím méně paměti aplikace potřebuje, tím lépe, takže běží na strojích, které lidé " +
        "už mají.",
      text:
      "Každá aplikace Trebired běží pod pevným stropem 500 MB paměti a míří na 200 nebo méně, měřeno na běžícím procesu " +
        "při skutečném používání. Překročení se opravuje u příčiny, nikdy zvednutím stropu.",
    },
    lead: "Každý počítač, který dál funguje, se nemusí vyrábět, převážet a jednou vyhazovat. Trebired drží své stroje v provozu, dokud to jde.",
    log: {
      evidence: "Doklad",
      text: "Každý kus hardwaru, který Trebired předá dál, opraví nebo odevzdá k recyklaci, s datem, místem určení a dokladem.",
      title: "Záznam hardwaru",
    },
    nature: {
      text:
      "Trebired na přírodě záleží a podporuje ji tak, jak to softwarová organizace umí: stroje zůstávají ve službě, dokud " +
        "fungují, před vyhozením se rozeberou a software je dost lehký na to, aby běžel na počítačích, které lidé už mají.",
      title: { hollow: "Příroda", rest: "za to stojí" },
    },
    rack: {
      newest: {
        note: "Nejnovější stroje jsou servery současné generace. Do racku přibývají vedle starých, ne místo nich.",
        title: "Dnes",
      },
      oldest: {
        note: "Nejstarší stroje v rackách patří ke generaci uvedené v roce 2009 a zůstávají ve službě, dokud dělají svou práci.",
        title: "2009",
      },
      text:
      "Racky, na kterých Trebired provozuje vlastní služby, obsahují servery všeho druhu od roku 2009 po dnešek, nejstarší " +
        "vedle nejnovějších. Samotné stáří server z provozu nevyřadí.",
      title: "Staré servery zůstávají v racku",
    },
    reuse: {
      how:
      "Server odchází z racku, až když už nemůže dělat svou práci, a ne dřív. Pak se rozebere: disky, paměti a zdroje, " +
        "které fungují, jdou do strojů, které běží dál, a jen šasi a to, co selhalo, jde na autorizované místo zpětného " +
        "odběru elektroodpadu, nikdy do koše.",
      text: "Vyřazený server se rozebere dřív, než se cokoli vyhodí. Co funguje, pracuje dál jinde v racku.",
      title: "Nejdřív znovu použít, recyklovat až nakonec",
    },
    stance: {
      claim: "Funkční hardware není odpad.",
      how:
      "Jeho aplikace zůstávají pod 500 MB paměti a jsou stavěné pro počítače, které lidé už mají. Vlastní servery zůstávají " +
        "ve službě, dokud mohou dělat svou práci. A všechno, co staví, vychází pod MIT nebo AGPL, takže to kdokoli udrží " +
        "v chodu i po konci podpory.",
      text:
      "Počítače se často vyhazují, i když ještě fungují, protože je software, který na nich běží, přestane podporovat nebo " +
        "pro ně začne být příliš náročný. Trebired to dělá obráceně.",
      title: "Kde Trebired stojí",
    },
    sunset: {
      caption: "Začátek vzestupu linuxového desktopu",
      text:
      "Windows 10 skončila podpora 14. října 2025 a Windows 11 se nenainstaluje na počítač bez čipu TPM 2.0 a bez procesoru " +
        "ze seznamu, který vede Microsoft. Linux se na tyto počítače nainstalovat dá a každá desktopová aplikace, kterou " +
        "Trebired píše, je postavená pro Linux.",
      title: "Starší počítače zůstávají ve službě",
    },
    title: "Udržitelnost",
    waste: {
      lost: { text: "bez záznamu", value: "77,7 %" },
      recycled: { text: "prokazatelně řádně sebráno a recyklováno", value: "22,3 %" },
      text:
      "Tolik elektroodpadu svět vyprodukoval v roce 2022 podle zprávy [Global E-waste Monitor 2024]({{report}}) od ITU " +
        "a UNITAR při OSN. Jen 22,3 % z něj bylo prokazatelně řádně sebráno a recyklováno. Kam šel zbytek, se nikde nezapsalo.",
      title: "62 milionů tun vyhozené elektroniky",
    },
});
