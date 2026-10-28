import { frontendElementClass } from "@trebired/frontend";
import { button as PrimitiveButton, Disclosure, DisclosureButton, Icon, Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";
import { SectionBand } from "./../../components/sections";
import { ProseParagraph } from "./../../components/primitives/prose";
import type { DocumentPart, DocumentSection } from "./../document/documents";

type AnswersProps = { groups: DocumentSection[]; translator: I18nTranslator };

const INDICATOR = frontendElementClass("disclosure", "indicator");

export function AnswerItem({ part }: { part: DocumentPart }) {
  return (
    <li className="tbfm-answers__item" id={part.id}>
    <Disclosure
    panel={part.body.map((paragraph, at) => <ProseParagraph key={at} text={paragraph} />)}
    panelId={`${part.id}-answer`}
    trigger={(
        <Title level={3}>
        <DisclosureButton aria-controls={`${part.id}-answer`} className="tbf-inline-row tbf-ver-center tbf-gap-sm">
        {part.heading}
        <Icon className={INDICATOR} spec="remixicon:arrow-right-s-line" />
        </DisclosureButton>
        </Title>
    )}
    />
    </li>
  );
}

function Group({ group }: { group: DocumentSection }) {
  return (
    <section className="tbfm-answers">
    <Title className="tbf-text-xl3" level={2}>{group.heading}</Title>
    <ul className="tbf-list-plain">
    {(group.parts || []).map((part) => <AnswerItem key={part.id} part={part} />)}
    </ul>
    </section>
  );
}

export function AnswersBand({ groups, translator }: AnswersProps) {
  return (
    <SectionBand archetype="statement" weight="major">
    <div className="tbf-column tbf-gap-xl">
    {groups.map((group) => <Group group={group} key={group.id} />)}
    </div>
    <p>{translator("more")}</p>
    <div className="tbf-inline-row tbf-hor-right">
    <PrimitiveButton softRedirect href="/contact" variant="primary">
    {translator("contact")}
    </PrimitiveButton>
    </div>
    </SectionBand>
  );
}
