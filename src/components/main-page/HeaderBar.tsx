"use client";

import { Segmented, Select, Space, Typography } from "antd";

const { Text } = Typography;

export default function HeaderBar() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-1 text-lg tracking-wide">
          <span className="font-semibold text-neutral-900">STOCK</span>
          <span className="text-neutral-500">TRADER</span>
        </div>
        <Space size={12} align="center">
          <Segmented
            size="small"
            options={[
              { label: "D", value: "dark" },
              { label: "L", value: "light" },
            ]}
            defaultValue="light"
          />
          <Select
            size="small"
            defaultValue="KR/EN"
            options={[
              { label: "KR/EN", value: "KR/EN" },
              { label: "EN/KR", value: "EN/KR" },
            ]}
          />
          <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">
            <div className="h-4 w-4 rounded-full bg-neutral-300" />
            <div className="flex flex-col leading-none">
              <Text className="text-xs font-semibold text-neutral-800">
                1,443.95
              </Text>
              <Text className="text-[11px] text-emerald-600!">
                +0.55 (0.03%)
              </Text>
            </div>
          </div>
        </Space>
      </div>
    </header>
  );
}

