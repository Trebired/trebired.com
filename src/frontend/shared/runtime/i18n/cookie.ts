import { matchSupportedLanguage, type SupportedLang } from "./lang";

export const LANG_COOKIE = "site-lang";
export const LANG_QUERY = "lang";
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export function readLangCookie(header: unknown): SupportedLang | "" {
  const raw = String(header == null ? "" : header);

  for (const entry of raw.split(";")) {
    const separator = entry.indexOf("=");
    if (separator < 0) continue;
    if (entry.slice(0, separator).trim() !== LANG_COOKIE) continue;
    return matchSupportedLanguage(
      decodeURIComponent(entry.slice(separator + 1).trim()),
    );
  }

  return "";
}

export function langCookieValue(lang: SupportedLang): string {
  return `${LANG_COOKIE}=${lang}; path=/; max-age=${ONE_YEAR_SECONDS}; samesite=lax`;
}
