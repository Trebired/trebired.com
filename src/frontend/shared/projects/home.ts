import type { NavItem, Project, Service } from "./types";

export const navItems: NavItem[] = [
  { label: "Práce", href: "#prace" },
  { label: "Služby", href: "#sluzby" },
  { label: "Cena", href: "#cena" },
  { label: "Organizace", href: "#organization" },
  { label: "Kontakt", href: "#kontakt" },
];

export const fallbackProjects: Project[] = [
  {
    id: "admitpress",
    title: "AdmitPress",
    kind: "Desktopová aplikace",
    year: "2025",
    description:
    "Desktopová aplikace pro Linux, která navrhuje, prodává a tiskne vstupenky, s denním číslováním, " +
      "hromadnými vstupenkami, cenami ve více měnách a evidencí prodeje.",
    tags: ["Desktop", "Rust", "Qt 6", "Tisk"],
    image: "",
    href: "https://github.com/Trebired/admitpress",
    isOwn: true,
  },
];

export const services: Service[] = [
  {
    no: "01",
    title: "Weby na zakázku",
    text: "Od prezentačních webů po komplexní e-shopy. Navrhujeme a kódujeme každý projekt na míru, nikdy ze šablony.",
  },
  {
    no: "02",
    title: "Produktový vývoj",
    text: "Stavíme vlastní produkty jako AdmitPress, od první myšlenky přes design až po nasazení a provoz.",
  },
  {
    no: "03",
    title: "Design rozhraní",
    text: "Rozhraní, která jsou jednoduchá, rychlá a srozumitelná. Klademe důraz na detail a přístupnost.",
  },
  {
    no: "04",
    title: "Infrastruktura a provoz",
    text: "Nasazení, servery, monitoring a údržba. Postaráme se o celý běh aplikace, ne jen o její vzhled.",
  },
];
