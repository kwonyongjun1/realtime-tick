"use client";

import HeaderBar from "./HeaderBar";
import MarketIndices from "./MarketIndices";
import StockTable from "./StockTable";
import ChartPanel from "./ChartPanel";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <HeaderBar />
      <main className="px-6 py-6">
        <MarketIndices />
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
          <StockTable />
          <ChartPanel />
        </div>
      </main>
    </div>
  );
}

