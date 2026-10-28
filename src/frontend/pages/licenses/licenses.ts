export type LicenseEntry = { href: string; id: string; version: string };

export const licenseEntries: LicenseEntry[] = [
  { href: "https://opensource.org/license/mit", id: "mit", version: "MIT" },
  { href: "https://www.gnu.org/licenses/agpl-3.0.html", id: "agpl", version: "AGPL-3.0-only" },
  { href: "https://www.gnu.org/licenses/gpl-3.0.html", id: "gpl", version: "GPL-3.0-only" },
];
