import { AccessibilityMenu } from "@trebired/frontend/react";
import { useId } from "react";
import { useLang } from "#32f7ohjh2cr2";

export function A11ySwitcher() {
  return (
    <AccessibilityMenu
    id={`${useId().replace(/:/gu, "")}_a11y`}
    lang={useLang()}
    />
  );
}
