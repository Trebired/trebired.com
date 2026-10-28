import { config } from "./../../../package.json";

export function configText(value: unknown): string {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : "";
}

export function configRecord(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null
  ? (value as Record<string, unknown>)
  : {};
}

export function configPort(value: unknown, fallback: number): number {
  const number = typeof value === "number" ? value : Number(value);
  return Number.isInteger(number) && number > 0 ? number : fallback;
}

export function configNumber(value: unknown, fallback: number): number {
  const number = typeof value === "number" ? value : Number(value);
  return Number.isFinite(number) && number > 0 ? number : fallback;
}

export const packageConfig = configRecord(config);
