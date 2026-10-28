import type { TextDocument } from "@trebired/frontend/config";

type DocumentsData = Record<string, Record<string, TextDocument>>;

type PublicationText = { cs: string; en: string };

type PublicationKind = "blog" | "case-study";

type PublicationBlock = { kind: "heading" | "paragraph"; text: string };

type Publication = {
  author: string;
  body: { cs: PublicationBlock[]; en: PublicationBlock[] };
  client: string;
  cover: string;
  kind: PublicationKind;
  lead: PublicationText;
  published: string;
  slug: string;
  title: PublicationText;
  updated: string;
};

type RoadmapEntry = { color: string; description: string[]; status: string; title: string };

type RoadmapData = Record<string, Record<string, RoadmapEntry>>;

type RepoRow = {
  category: string;
  cloneUrl: string;
  description: { cs: string; en: string };
  language: string;
  license: string;
  name: string;
  npm: string;
  pushedAt: string;
  status: string;
  subcategory: string;
  url: string;
};

type TeamLink = {
  label: string;
  service: string;
  url: string;
};

type TeamText = Record<string, string>;

type TeamProfile = {
  avatar: string;
  bio: TeamText;
  company: string;
  links: TeamLink[];
  location: TeamText;
  login: string;
  name: string;
  profileUrl: string;
  role: string;
};

type RatesData = {
  base: string;
  date: string;
  rates: Record<string, number>;
  source: string;
};

type BrandTone = "dark" | "light";

type BrandData = {
  colors: Record<string, string>;
  logos: Record<string, Record<BrandTone, string>>;
  name: string;
};

type BrandMark = { colors: Record<string, string>; d: string; size: [number, number] };

type SiteData = {
  brand?: BrandData;
  brandMark?: BrandMark;
  documents?: DocumentsData;
  publications?: Publication[];
  rates?: RatesData;
  repos?: RepoRow[];
  roadmap?: RoadmapData;
  team?: TeamProfile[];
};

export type {
  BrandData,
  BrandMark,
  BrandTone,
  DocumentsData,
  Publication,
  PublicationBlock,
  PublicationKind,
  RatesData,
  RepoRow,
  RoadmapData,
  RoadmapEntry,
  SiteData,
  TeamLink,
  TeamProfile,
  TeamText,
};
