"use client";

import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";


type StockRow = {
  key: string;
  rank: number;
  name: string;
  price: string;
  change: number;
  volume: string;
};

const rows: StockRow[] = [
  { key: "1", rank: 1, name: "삼성전자", price: "180,500원", change: 1.06, volume: "405억원" },
  { key: "2", rank: 2, name: "SK하이닉스", price: "882,000원", change: -0.67, volume: "187억원" },
  { key: "3", rank: 3, name: "미래에셋증권", price: "61,800원", change: 15.73, volume: "164억원" },
  { key: "4", rank: 4, name: "KODEX 200", price: "81,950원", change: -0.02, volume: "80억원" },
  { key: "5", rank: 5, name: "삼프로TV", price: "14,310원", change: 2.5, volume: "84억원" },
  { key: "6", rank: 6, name: "KODEX 레버리지", price: "84,760원", change: -0.04, volume: "739억원" },
  { key: "7", rank: 7, name: "현대차M", price: "7,380원", change: 29.92, volume: "575억원" },
  { key: "8", rank: 8, name: "현대건설", price: "15,250원", change: 16.22, volume: "60억원" },
  { key: "9", rank: 9, name: "SK증권", price: "1,180원", change: 26.73, volume: "625억원" },
  { key: "10", rank: 10, name: "우리금융", price: "17,210원", change: -10.36, volume: "44억원" },
  { key: "11", rank: 11, name: "SK이노베이션", price: "27,900원", change: 20.51, volume: "41억원" },
  { key: "12", rank: 12, name: "현대차", price: "501,000원", change: -0.98, volume: "405억원" },
  { key: "13", rank: 13, name: "한화시스템", price: "4,750원", change: 4.7, volume: "38억원" },
  { key: "14", rank: 14, name: "우리나라반얼씨", price: "94,800원", change: -0.73, volume: "34억원" },
];

const columns: ColumnsType<StockRow> = [
  {
    title: "순위",
    dataIndex: "rank",
    width: 70,
    render: (value: number) => <text className="text-neutral-500!">{value}</text>,
  },
  {
    title: "종목명",
    dataIndex: "name",
    render: (value: string) => <text className="text-neutral-900!">{value}</text>,
  },
  {
    title: "현재가",
    dataIndex: "price",
    render: (value: string) => <text className="text-neutral-900!">{value}</text>,
  },
  {
    title: "등락률",
    dataIndex: "change",
    render: (value: number) => (
      <text className={value >= 0 ? "text-rose-500!" : "text-sky-600!"}>
        {value > 0 ? "+" : ""}
        {value.toFixed(2)}%
      </text>
    ),
  },
  {
    title: "거래량",
    dataIndex: "volume",
    render: (value: string) => <text className="text-neutral-500!">{value}</text>,
  },
];

export default function StockTable() {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white">
      <Table<StockRow>
        columns={columns}
        dataSource={rows}
        pagination={false}
        size="middle"
      />
    </div>
  );
}

