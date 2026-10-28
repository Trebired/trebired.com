import { createTranslator, type I18nDictionary } from "@trebired/i18n";
import type { Lang } from "#0ft8fsqbbufa";

export type PageMessages = { cs: I18nDictionary; en: I18nDictionary };

export type PageSection = { body: string[]; heading: string; key: string };

function sectionTree(messages: PageMessages): Record<string, I18nDictionary> {
  return (messages.en.sections || {}) as Record<string, I18nDictionary>;
}

export function pageSections(messages: PageMessages, lang: Lang): PageSection[] {
  const translator = createTranslator(messages, lang);
  const tree = sectionTree(messages);

  return Object.keys(tree).map((key) => ({
        body: Object.keys(tree[key] || {})
        .filter((name) => name !== "heading")
        .map((name) => translator(`sections.${key}.${name}`)),
        heading: translator(`sections.${key}.heading`),
        key,
  }));
}
