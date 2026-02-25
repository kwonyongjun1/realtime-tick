"use client";

import { Select } from "antd";
import { useLanguageStore } from "../model/useLanguage";

export function LanguageSelect() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  return (
    <Select
      size="small"
      value={language}
      options={[
        { label: "KR", value: "ko" },
        { label: "EN", value: "en" },
      ]}
      onChange={(value) => {
        if (value === "ko" || value === "en") {
          setLanguage(value);
        }
      }}
      style={{ width: 80 }}
    />
  );
}

