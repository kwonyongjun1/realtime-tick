"use client";

import MarketIndices from "@/components/main-page/MarketIndices";
import StockTable from "@/components/main-page/StockTable";
import ChartPanel from "@/components/main-page/ChartPanel";

export default function MainPage() {
  return (
    <main className="px-6 py-6">
      <MarketIndices />
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
        <StockTable />
        <ChartPanel />
      </div>
    </main>
  );
}

