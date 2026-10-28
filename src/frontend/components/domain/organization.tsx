import { MoreLink } from "#0lprorcn51cl";
import { StatementSection } from "./../sections";
import { useLang } from "#32f7ohjh2cr2";
import { productVars } from "#y8khalhdifmq";
import { createSectionTranslator } from "./translator";

type OrganizationSectionProps = {
  moreHref?: string;
  moreLabel?: string;
};

export function OrganizationSection({
    moreHref,
    moreLabel,
  }: OrganizationSectionProps) {
  const lang = useLang();
  const translator = createSectionTranslator(lang);
  const body = translator("organization.body", productVars);

  return (
    <StatementSection
    id="organization"
    weight="minor"
    statement={`${translator("organizationTitle.first")} ${translator("organizationTitle.second")}`}
    aside={
      <>
      <p>{body}</p>
      {moreHref && moreLabel ? <MoreLink href={moreHref} label={moreLabel} /> : null}
      </>
    }
    />
  );
}
