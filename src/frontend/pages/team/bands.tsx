import { button as PrimitiveButton, Icon, Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";
import { SectionBand } from "./../../components/sections";
import { siGit } from "simple-icons";
import { MoreLink } from "#0lprorcn51cl";
import { RisoArt } from "./../../components/riso/art";
import type { Recipe } from "./../../components/riso/recipes";
import type { Form } from "./../../components/riso/shapes";
import type { TeamLink, TeamProfile, TeamText } from "./../../shared/data/types";
import { HollowText } from "@trebired/frontend/hollow";

const SERVICE_ICONS: Record<string, string> = {
  github: "simple-icons:github",
  instagram: "remixicon:instagram-line",
  linkedin: "remixicon:linkedin-fill",
  website: "remixicon:global-line",
  x: "simple-icons:x",
};

type ProfileProps = { lang: string; person: TeamProfile; translator: I18nTranslator };

function inLang(value: TeamText, lang: string): string {
  return value[lang] || value.en || "";
}

function LinkButton({ link }: { link: TeamLink }) {
  const icon = SERVICE_ICONS[link.service] || "remixicon:external-link-line";
  return (
    <PrimitiveButton href={link.url} rel="noreferrer" target="_blank">
    <Icon spec={icon} />
    {link.label}
    </PrimitiveButton>
  );
}

function Facts({ lang, person }: Omit<ProfileProps, "translator">) {
  const facts = [person.company, inLang(person.location, lang)].filter(Boolean);
  if (facts.length === 0) return null;
  return (
    <ul className="tbf-inline-row tbf-wrap tbf-gap-xs tbf-list-plain">
    {facts.map((fact) => <li className="tbf-pill" key={fact}>{fact}</li>)}
    </ul>
  );
}

function Profile({ lang, person, translator }: ProfileProps) {
  const bio = inLang(person.bio, lang);
  return (
    <article className="tbfm-figure">
    <div className="tbf-inline-row tbf-mobile-wrap tbf-gap-xl">
    {person.avatar ? <img alt={person.name} className="tbf-width-lg" src={person.avatar} /> : null}
    <div className="tbf-column tbf-gap-md tbf-grow">
    <Title className="tbf-text-xl5" level={2}>{person.name}</Title>
    <Facts lang={lang} person={person} />
    {bio ? <p>{bio}</p> : null}
    <div className="tbf-inline-row tbf-wrap tbf-gap-sm">
    {person.links.filter((link) => link.service !== "github").map((link) => <LinkButton key={link.url} link={link} />)}
    <PrimitiveButton href={person.profileUrl} rel="noreferrer" target="_blank" variant="primary">
    <Icon spec="simple-icons:github" />
    {translator("profile")}
    </PrimitiveButton>
    </div>
    </div>
    </div>
    </article>
  );
}

export function PeopleBand({ lang, people, translator }: { lang: string; people: TeamProfile[]; translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" weight="major">
    {people.map((person) => <Profile key={person.login} lang={lang} person={person} translator={translator} />)}
    </SectionBand>
  );
}

type Path = { form?: Form; href: string; icon?: { path: string }; key: string; recipe: Recipe; tones: [string, string] };

const PATHS: Path[] = [
  { form: "arrow", href: "/careers", key: "work", recipe: "squares", tones: ["#c4c4c4", "#a6c6f3"] },
  { href: "/contribute", icon: siGit, key: "code", recipe: "weave", tones: ["#f3bda8", "#f3dba2"] },
];

function PathMark({ path }: { path: Path }) {
  if (path.icon) {
    const mark = { d: path.icon.path, viewBox: [24, 24] as [number, number] };
    return <RisoArt as="div" className="tbfm-terms__mark" dark hidden kind="svg" mark={mark} recipe={path.recipe} tones={path.tones} />;
  }
  return <RisoArt as="div" className="tbfm-terms__mark" dark form={path.form} hidden kind="shape" recipe={path.recipe} tones={path.tones} />;
}

function PathPanel({ path, translator }: { path: Path; translator: I18nTranslator }) {
  return (
    <article className="tbfm-terms__panel">
    <PathMark path={path} />
    <Title level={3}>{translator(`join.${path.key}.title`)}</Title>
    <p className="tbfm-terms__body">{translator(`join.${path.key}.text`)}</p>
    <MoreLink href={path.href} label={translator(`join.${path.key}.action`)} />
    </article>
  );
}

export function JoinBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" tone="inverse" weight="major">
    <Title className="tbf-text-xl6" level={2}>
    <HollowText dark>{translator("join.first")}</HollowText>
    {" "}
    {translator("join.second")}
    </Title>
    <p>{translator("join.lead")}</p>
    <div className="tbfm-terms">
    {PATHS.map((path) => <PathPanel key={path.key} path={path} translator={translator} />)}
    </div>
    </SectionBand>
  );
}
