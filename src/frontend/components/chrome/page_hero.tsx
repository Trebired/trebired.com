import { RisoArt } from "./../riso/art";
import { heroField, heroTone } from "./hero/tones";
import { useCurrentRoute } from "./../../shared/page/route";
import {
  button as PrimitiveButton,
  Icon,
  Title,
  visibilityScopeAttrs,
  visibilityTargetAttrs,
  VisibilityToggle,
} from "@trebired/frontend/react";
import type { ArticleCover } from "./../../shared/publications/articles";
import type { PublicationKind } from "./../../shared/data/types";
import type { ReactNode } from "react";
import { siteLogoHref } from "./../../shared/brand/logos";
import { CoverPrint } from "./../primitives/cover";

type PageHeroProps = {
  title: string;
  lead?: string;
  meta?: string;
  children?: ReactNode;
};

export function PageHero({
    title,
    lead,
    meta,
    children,
  }: PageHeroProps) {
  const route = useCurrentRoute();
  const tone = heroTone(route);

  return (
    <section
    className="tbfm-hero tbfm-hero--page tbfm-prints"
    data-hero="page"
    data-tbf-dark="chrome"
    >
    <RisoArt as="div" className="tbfm-hero__poster" dark field={heroField(route)} hidden kind="poster" recipe="poster" tones={tone}>
    <img alt="" src={siteLogoHref("main", "minimal", "light")} />
    </RisoArt>
    <RisoArt
    as="div"
    className="tbfm-hero__poster tbfm-hero__tall"
    dark
    field={heroField(route)}
    hidden
    kind="poster"
    recipe="poster-tall"
    tall
    tones={tone}
    >
    <img alt="" src={siteLogoHref("main", "minimal", "light")} />
    </RisoArt>
    <div className="tbf-column tbf-gap-sm" data-hero-inner="">
    <Title level={1}>{title}</Title>
    {meta ? <small>{meta}</small> : null}
    {children}
    </div>
    {lead ? (
        <div className="tbfm-hero tbfm-hero--lead" data-hero="page-lead">
        <div data-hero-inner="">
        <p>{lead}</p>
        </div>
        </div>
      ) : null}
    </section>
  );
}

export function PostHero({
    children,
    cover,
    kind,
    lead,
    seed,
    title,
    toggleLabels,
  }: PageHeroProps & { cover?: ArticleCover; kind: PublicationKind; seed: string; toggleLabels?: { hide: string; open: string; show: string } }) {
  return (
    <section className="tbfm-hero tbfm-hero--post" data-hero="post" {...visibilityScopeAttrs()}>
    {cover ? <img alt="" className="tbfm-hero__art" src={cover.image} /> : <CoverPrint className="tbfm-hero__cover" kind={kind} seed={seed} />}
    <span className="tbfm-hero__toggle">
    {cover ? (
        <PrimitiveButton
        icon
        aria-label={toggleLabels?.open}
        href={cover.image}
        rel="noreferrer"
        target="_blank"
        tooltip={toggleLabels?.open}
        variant="chrome"
        >
        <Icon spec="remixicon:external-link-line" />
        </PrimitiveButton>
      ) : null}
    <VisibilityToggle hiddenLabel={toggleLabels?.show} shownLabel={toggleLabels?.hide} tooltip variant="chrome" />
    </span>
    <div className="tbf-column tbf-gap-md" data-hero-inner="" {...visibilityTargetAttrs()}>
    <Title level={1}>{title}</Title>
    {lead ? <p>{lead}</p> : null}
    {children}
    </div>
    </section>
  );
}
