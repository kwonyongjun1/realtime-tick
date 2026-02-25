import { locales, defaultLocale } from "./src/i18n/routing";

const config = {
  locales,
  defaultLocale,
  localePrefix: "as-needed" as const,
};

export default config;
