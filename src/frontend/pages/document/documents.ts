import type { Lang } from "#0ft8fsqbbufa";
import type { TextDocument, TextDocumentPart, TextDocumentSection } from "@trebired/frontend/config";
import documentsData from "bundler-data:documents";

type DocumentPart = TextDocumentPart;

type DocumentSection = TextDocumentSection;

type SiteDocument = TextDocument;

const locales: Record<Lang, string> = { cs: "cs-CZ", en: "en-GB" };

const documents = documentsData || {};

export function documentFor(slug: string, lang: Lang): SiteDocument | undefined {
  return documents[slug]?.[lang] || documents[slug]?.en;
}

export function formatDocumentDate(value: string, lang: Lang): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat(locales[lang], {
      day: "numeric",
      month: "long",
      timeZone: "UTC",
      year: "numeric",
  }).format(parsed);
}

export type { DocumentPart, DocumentSection, SiteDocument };
