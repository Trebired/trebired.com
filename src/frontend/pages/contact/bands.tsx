import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { contactAddresses, type ContactAddress } from "./addresses";
import { HollowText } from "@trebired/frontend/hollow";

type BandProps = { translator: I18nTranslator };

function splitAddress(address: string) {
  const at = address.indexOf("@");
  return at < 0 ? { domain: "", local: address } : { domain: address.slice(at), local: address.slice(0, at) };
}

function AddressCard({ entry, translator }: { entry: ContactAddress; translator: I18nTranslator }) {
  return (
    <a className="tbfm-board__card" href={`mailto:${entry.address}`}>
    <h5>{translator(`board.labels.${entry.key}`)}</h5>
    <Title className="tbf-text-break" level={3}>{entry.address}</Title>
    <span className="tbf-text-muted">{translator(`addresses.${entry.key}`)}</span>
    </a>
  );
}

export function AddressBand({ translator }: BandProps) {
  const [lead, ...rest] = contactAddresses;
  const parts = splitAddress(lead.address);

  return (
    <SectionBand archetype="ledger" id="kontakt" weight="major">
    <Title className="tbf-text-xl6" level={2}>
    {translator("board.first")}
    {" "}
    <HollowText>{translator("board.second")}</HollowText>
    </Title>
    <div className="tbfm-board tbf-column tbf-gap-md">
    <a className="tbfm-board__lead" href={`mailto:${lead.address}`}>
    <h5>{translator(`board.labels.${lead.key}`)}</h5>
    <Title className="tbf-text-xl4 tbf-lh-xs tbf-text-break" level={3}>
    {parts.local}
    <wbr />
    <HollowText dark className="tbf-text-break">{parts.domain}</HollowText>
    </Title>
    <span>{translator(`addresses.${lead.key}`)}</span>
    </a>
    <div className="tbfm-board__grid">
    {rest.map((entry) => <AddressCard entry={entry} key={entry.key} translator={translator} />)}
    </div>
    </div>
    </SectionBand>
  );
}
