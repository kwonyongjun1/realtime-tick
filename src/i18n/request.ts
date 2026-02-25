import { getRequestConfig } from "next-intl/server";
import type { Locale } from "./routing";
import { defaultLocale, locales } from "./routing";
import { MessagesByLocale } from "./types";

const namespaces = ["shared", "headerBar"] as const;

type Namespace = (typeof namespaces)[number];

const loaders: Record<
  Namespace,
  (locale: Locale) => Promise<Record<string, string>>
> = {
  shared: (locale) => import(`@/i18n/messages/${locale}.json`),
  headerBar: (locale) => import(`@/widgets/header-bar/i18n/${locale}.json`),
};

export default getRequestConfig(async ({ locale }) => {
  const activeLocale = (locale ?? defaultLocale) as Locale;

  try {
    const messagesByLocale: MessagesByLocale = {} as MessagesByLocale;

    for (const loc of locales) {
      const entries = await Promise.all(
        namespaces.map(
          async (ns) => [ns, (await loaders[ns](loc)).default] as const
        )
      );

      messagesByLocale[loc] = Object.fromEntries(entries);
    }

    return { locale: activeLocale, messages: messagesByLocale };
  } catch (error) {
    console.error("Failed to load i18n messages", error);
    throw new Error("Failed to load i18n messages");
  }
});
