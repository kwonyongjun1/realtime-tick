import { getRequestConfig } from "next-intl/server";
import type { Locale } from "./routing";
import { defaultLocale, locales } from "./routing";

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
  // next-intl가 넘겨주는 locale은 "현재 URL의 로케일"이고,
  // 우리는 클라이언트에서 ko/en을 토글할 수 있어야 하므로
  // 모든 로케일에 대한 메시지를 한 번에 로드해서 내려보낸다.
  const activeLocale = (locale ?? defaultLocale) as Locale;

  try {
    const messagesByLocale: Record<Locale, Record<string, unknown>> = {} as any;

    for (const loc of locales) {
      const entries = await Promise.all(
        namespaces.map(
          async (ns) => [ns, (await loaders[ns](loc)).default] as const,
        ),
      );

      messagesByLocale[loc] = Object.fromEntries(entries);
    }

    return { locale: activeLocale, messages: messagesByLocale };
  } catch (error) {
    console.error("Failed to load i18n messages", error);
    throw new Error("Failed to load i18n messages");
  }
});
