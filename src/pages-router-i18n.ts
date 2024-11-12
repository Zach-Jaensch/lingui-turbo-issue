import type { Messages } from "@lingui/core";
import { i18n } from "@lingui/core";
import { useEffect } from "react";

export async function loadCatalog(locale: string): Promise<Messages | null> {
  try {
    const catalog = (await import(`#/locales/${locale}.po`)) as {
      messages: Messages;
    };
    return catalog.messages;
  } catch {
    return null;
  }
}

export function useLinguiInit(messages: Messages) {
  const isClient = typeof window !== "undefined";
  const locale = "en-US";

  if (!isClient && locale !== i18n.locale) {
    // there is single instance of i18n on the server
    // note: on the server, we could have an instance of i18n per supported locale
    // to avoid calling loadAndActivate for (worst case) each request, but right now that's what we do
    i18n.loadAndActivate({ locale, messages });
  }
  if (isClient && !i18n.locale) {
    // first client render
    i18n.loadAndActivate({ locale, messages });
  }

  useEffect(() => {
    const localeDidChange = locale !== i18n.locale;
    if (localeDidChange) {
      i18n.loadAndActivate({ locale, messages });
    }
  }, [locale, messages]);

  return i18n;
}
