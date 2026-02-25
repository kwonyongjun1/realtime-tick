"use client";

import { Space } from "antd";
import { ThemeToggle } from "@/features/theme";
import { LanguageSelect } from "@/features/language";
import { useTranslations } from "next-intl";

export default function HeaderBar() {
  const t = useTranslations("shared");

  return (
    <header className="w-full border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-1 text-lg tracking-wide">
          <span className="font-semibold text-neutral-900 dark:text-neutral-50">
            {t("appName")}
          </span>

        </div>
        <Space size={12} align="center">
          <ThemeToggle />
          <LanguageSelect />
          <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-800">
            <div className="h-4 w-4 rounded-full bg-neutral-300 dark:bg-neutral-500" />
            <div className="flex flex-col leading-none">
              <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-50">
                1,443.95
              </span>
              <span className="text-[11px] text-emerald-600">
                +0.55 (0.03%)
              </span>
            </div>
          </div>
        </Space>
      </div>
    </header>
  );
}

