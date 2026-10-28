import { ErrorPage } from "@trebired/frontend/react";
import { useLang } from "#32f7ohjh2cr2";

export function SiteErrorPage({ status }: { status: number }) {
  return (
    <main>
    <ErrorPage lang={useLang()} status={status} />
    </main>
  );
}
