import { RailSection, type RailCard } from "./../../components/sections";
import { currentSite } from "./../../shared/site";
import { PageHero } from "#j99bcvog6wwc";
import { useLang } from "#32f7ohjh2cr2";
import { createTranslator } from "@trebired/i18n";
import type { CSSProperties } from "react";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { roadmapEntries, type RoadmapItem } from "./entries";
import type { I18nTranslator } from "@trebired/i18n";
import type { Lang } from "#0ft8fsqbbufa";

function tint(hex: string, share: number): string {
  const value = Number.parseInt(hex.replace("#", ""), 16);
  const mix = (shift: number) => Math.round(255 - (255 - ((value >> shift) & 255)) * share).toString(16).padStart(2, "0");
  return `!#${mix(16)}${mix(8)}${mix(0)}`;
}

function statusLabel(translator: I18nTranslator, entry: RoadmapItem) {
  const label = translator(`status.${entry.status}`);
  return (
    <span className="tbfm-status" style={{ "--status-color": entry.color } as CSSProperties}>
    {label.startsWith("status.") ? entry.status : label}
    </span>
  );
}

function roadmapCards(translator: I18nTranslator, lang: Lang): RailCard[] {
  return roadmapEntries(lang).map((entry) => ({
        key: entry.slug,
        label: statusLabel(translator, entry),
        print: tint(entry.color, 0.32),
        text: entry.description,
        title: entry.title,
        tone: entry.color,
  }));
}

export function RoadmapPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero
    title={translator("title")}
    lead={translator("lead", { brand: currentSite().name })}
    />

    <RailSection
    weight="major"
    label={translator("plan.title")}
    title={translator("plan.title")}
    cards={roadmapCards(translator, lang)}
    />
    </main>
  );
}
