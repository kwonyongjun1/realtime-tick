"use client";

import { Card } from "antd";


type MarketCard = {
  title: string;
  value: string;
  change: string;
  isUp: boolean;
};

const marketCards: MarketCard[] = [
  { title: "달러 환율", value: "1,443.95", change: "+0.55 (0.03%)", isUp: true },
  { title: "코스피", value: "5,517.62", change: "-4.65 (0.08%)", isUp: false },
  { title: "코스닥", value: "1,105.14", change: "-20.85 (1.85%)", isUp: false },
];

export default function MarketIndices() {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      {marketCards.map((card) => (
        <Card
          key={card.title}
          className="border-neutral-200 shadow-sm"
          styles={{ body: { padding: 20 } }}
        >
          <div className="flex flex-col gap-2">
            <text className="text-sm text-neutral-500!">{card.title}</text>
            <text className="text-2xl font-semibold text-neutral-900!">
              {card.value}
            </text>
            <text
              className={`text-sm ${card.isUp ? "text-rose-500!" : "text-sky-600!"
                }`}
            >
              {card.change}
            </text>
          </div>
        </Card>
      ))}
    </section>
  );
}

