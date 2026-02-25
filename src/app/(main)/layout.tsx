"use client";

import { HeaderBar } from "@/widgets/header-bar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div>
      <HeaderBar />
      {children}</div>
  );
}

