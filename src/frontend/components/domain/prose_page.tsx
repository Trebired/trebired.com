import { createTranslator } from "@trebired/i18n";
import { PageBlock } from "./../primitives/blocks";
import { PageHero } from "#j99bcvog6wwc";
import { ProseParagraph } from "./../primitives/prose";
import { pageSections, type PageMessages } from "./../../shared/page/sections";
import { useLang } from "#32f7ohjh2cr2";

export function ProsePage({ messages }: { messages: PageMessages }) {
  const lang = useLang();
  const translator = createTranslator(messages, lang);

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />

    {pageSections(messages, lang).map((section, index) => (
          <PageBlock
          key={section.key}
          prose
          title={section.heading}
          tone={index % 2 === 0 ? undefined : "muted"}
          >
          {section.body.map((paragraph, paragraphIndex) => (
                <ProseParagraph key={paragraphIndex} text={paragraph} />
          ))}
          </PageBlock>
    ))}
    </main>
  );
}
