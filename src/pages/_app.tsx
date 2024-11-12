import "#/styles/globals.css";
import type { AppProps } from "next/app";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { useLinguiInit } from "#/pages-router-i18n";

export default function App({ Component, pageProps }: AppProps) {
  useLinguiInit(pageProps.translation);

  return (
    <I18nProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}
