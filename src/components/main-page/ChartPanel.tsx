"use client";

import { Card } from "antd";


export default function ChartPanel() {
    return (
        <Card
            className="border-neutral-200 shadow-sm"
            styles={{ body: { padding: 20 } }}
        >
            <div className="flex flex-col gap-4">
                <div>
                    <text className="text-lg font-semibold text-neutral-900!">
                        미래에셋증권
                    </text>
                    <div className="mt-1 flex items-baseline gap-2">
                        <text className="text-xl font-semibold text-rose-500!">
                            61,800원
                        </text>
                        <text className="text-sm text-rose-500!">+15.73%</text>
                    </div>
                </div>
                <div className="flex h-72 items-center justify-center rounded-lg border border-dashed border-neutral-200 bg-neutral-50 text-xs text-neutral-400">
                    캔들 차트 영역
                </div>
                <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-neutral-200 bg-neutral-50 text-xs text-neutral-400">
                    거래량 차트 영역
                </div>
            </div>
        </Card>
    );
}

