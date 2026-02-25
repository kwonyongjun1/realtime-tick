"use client";

import { Segmented } from "antd";
import { useThemeStore } from "../model/useTheme";

export function ThemeToggle() {
  const mode = useThemeStore((state) => state.mode);
  const setMode = useThemeStore((state) => state.setMode);

  return (
    <Segmented
      size="small"
      options={[
        { label: "D", value: "dark" },
        { label: "L", value: "light" },
      ]}
      value={mode}
      onChange={(value) => {
        if (value === "dark" || value === "light") {
          setMode(value);
        }
      }}
    />
  );
}

