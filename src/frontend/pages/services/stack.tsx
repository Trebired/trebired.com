import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { STACK_TOOLS, type StackLayer, type StackTool } from "./tools";

const LAYERS: StackLayer[] = ["languages", "interface", "desktop", "data", "runtime", "machines"];

function ToolMark({ tool }: { tool: StackTool }) {
  return (
    <li className="tbf-column tbf-align-center tbf-gap-xs">
    <RisoArt
    as="div"
    className="tbfm-stack__mark"
    hidden
    kind="svg"
    mark={{ d: tool.icon.path, viewBox: [24, 24] }}
    recipe={tool.recipe}
    tones={tool.inks}
    />
    <h4 className="tbf-text-sm tbf-text-muted">{tool.name}</h4>
    </li>
  );
}

export function StackBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" id="stack" weight="major">
    <Title className="tbf-text-xl6" level={2}>{translator("stack.title")}</Title>
    <p>{translator("stack.lead")}</p>
    <ol className="tbfm-stack">
    {LAYERS.map((key) => (
          <li className="tbfm-stack__layer" key={key}>
          <div className="tbf-column tbf-gap-sm">
          <Title level={3}>{translator(`stack.${key}.title`)}</Title>
          <p>{translator(`stack.${key}.text`)}</p>
          </div>
          <ul className="tbfm-stack__tools">
          {STACK_TOOLS[key].map((tool) => <ToolMark key={tool.name} tool={tool} />)}
          </ul>
          </li>
    ))}
    </ol>
    </SectionBand>
  );
}
