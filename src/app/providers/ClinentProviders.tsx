"use client";

import { ConfigProvider, theme as antdTheme } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { useLanguageStore } from "@/features/language";
import { useThemeStore } from "@/features/theme";
import type { Locale } from "@/i18n/routing";

type MessagesByLocale = Record<Locale, Record<string, unknown>>;

export default function ClientProviders({
  messages = {} as MessagesByLocale,
  children,
}: Readonly<{
  children: React.ReactNode;
  messages: MessagesByLocale;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  const mode = useThemeStore((state) => state.mode);
  const isDark = mode === "dark";
  const locale = useLanguageStore((state) => state.language as Locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
      <ConfigProvider
        theme={{
          algorithm: isDark
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <div
            className={
              isDark
                ? "min-h-screen bg-neutral-900 text-neutral-50"
                : "min-h-screen bg-neutral-50 text-neutral-900"
            }
          >
            {children}
          </div>
        </QueryClientProvider>
      </ConfigProvider>
    </NextIntlClientProvider>
  );
}
