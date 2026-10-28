import type { ArticleCover } from "./../../shared/publications/articles";
import { kindPath } from "./../../shared/publications/articles";
import type { PublicationKind } from "./../../shared/data/types";
import { heroTone } from "./../chrome/hero/tones";
import { RisoArt } from "./../riso/art";
import { coverTones } from "./../riso/cover";

type CoverProps = { kind: PublicationKind; seed: string };

export function CoverPrint({ className, kind, seed }: CoverProps & { className: string }) {
  const tones = coverTones(seed, heroTone(kindPath(kind)));
  return <RisoArt as="span" className={className} hidden kind="cover" recipe="cover" seed={seed} tones={tones} />;
}

export function PostCover({ cover, kind, seed }: CoverProps & { cover?: ArticleCover }) {
  return (
    <span className="tbfm-cover">
    {cover ? (
        <img alt="" className="tbfm-cover__image" loading="lazy" src={cover.image} />
      ) : (
        <CoverPrint className="tbfm-cover__print" kind={kind} seed={seed} />
    )}
    </span>
  );
}
