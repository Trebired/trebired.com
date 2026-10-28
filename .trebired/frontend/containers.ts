import { defineContainers } from "@trebired/frontend/config";

import { avatar, cover, footerLogo, headerLogo, mark, siteApp } from "./containers/chrome";
import { banner } from "./containers/banner";
import { charter, tally, } from "./containers/charter";
import { board, } from "./containers/contact";
import { bill, lens, report, scale, url } from "./containers/contrib";
import { article } from "./containers/article";
import { density } from "./containers/editor";
import { headline, hero } from "./containers/hero";
import { licence } from "./containers/licence";
import { notice } from "./containers/notice";
import { prints, riso } from "./containers/riso";
import { offers } from "./containers/offers";
import { brandkit } from "./containers/brandkit";
import { stepband } from "./containers/stepband";
import { course } from "./containers/course";
import { dialogue, fitting, handover, unlock } from "./containers/process";
import { stack } from "./containers/stack";
import { alias } from "./containers/alias";
import { standard } from "./containers/standard";
import { budget, cycle, heap, horizon, loop, sunset, units, waste } from "./containers/sustain";
import { dossier, flush, liberty, onion, pointer, portrait, record, watch } from "./containers/freedom";
import { commit, folders, people, trees } from "./containers/handbook";
import { arrows, cradle, fixed, level, sizes } from "./containers/a11y";
import { bounty, guard, halt, timer } from "./containers/security";
import { squares } from "./containers/squares";
import { civic, gavel, scales } from "./containers/governance";
import { stage } from "./containers/stage";
import { climb } from "./containers/careers";
import { answers } from "./containers/answers";
import { terms } from "./containers/terms";
import { copy, foot } from "./containers/poster";
import { close, keycap, make, osi, who, whorl } from "./containers/home";
import { band, card, cell, chapter, frame, panel, row } from "./containers/layout";
import {
  amount,
  figure,
  figures,

  lede,
  plusList,
  rail,
  specimen,
  status,
  swatch,
  workVisual,
} from "./containers/sections";

export const containers = defineContainers({
    stepband,
    brandkit,
    course,
    dialogue,
    fitting,
    handover,
    unlock,
    alias,
    amount,
    avatar,
    band,
    banner,
    board,
    card,
    charter,
    civic,
    gavel,
    scales,
    climb,
    cell,
    chapter,
    copy,
    cover,
    figure,
    figures,
    lede,
    squares,
    foot,
    frame,
    headline,
    hero,
    mark,
    notice,
    offers,
    panel,
    rail,
    row,
    stack,
    standard,
    budget,
    close,
    keycap,
    make,
    osi,
    who,
    whorl,
    flush,
    liberty,
    dossier,
    portrait,
    onion,
    pointer,
    record,
    watch,
    cycle,
    heap,
    horizon,
    loop,
    sunset,
    units,
    waste,
    arrows,
    bounty,
    guard,
    halt,
    timer,
    commit,
    cradle,
    fixed,
    level,
    sizes,
    folders,
    people,
    trees,
    stage,
    article,
    density,
    bill,
    lens,
    report,
    scale,
    url,
    licence,
    riso,
    prints,
    answers,
    specimen,
    status,
    swatch,
    tally,
    terms,
    "footer-logo": footerLogo,
    "header-logo": headerLogo,
    "plus-list": plusList,
    "site-app": siteApp,
    "work-visual": workVisual,
});
