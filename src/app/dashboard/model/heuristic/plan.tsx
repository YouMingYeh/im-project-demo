"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Plan() {
  return (
    <div className="max-w-sm space-y-4">
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="選擇想要規劃的參數..." />
        </SelectTrigger>
        <SelectContent>
          {data.map((item) => (
            <SelectItem key={item.name} value={item.name}>
              <div className="flex flex-col">
                <span className="font-bold">{item.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <MultiStepLoaderDemo />
    </div>
  );
}
const data = [
  {
    name: "資管專題 DEMO",
  },
];

import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import Link from "next/link";

const loadingStates = [
  {
    text: "正在取得參數",
  },
  {
    text: "正在發送請求",
  },
  {
    text: "接收請求，正在開始計算",
  },
  {
    text: "計算完成，正在顯示結果",
  },
  {
    text: "正在視覺化結果",
  },
  {
    text: "正在統整並獲得結果",
  },
  {
    text: "完成！點擊下方按鈕顯示結果",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {/* Core Loader Modal */}
      <Loader
        loadingStates={loadingStates}
        loading={loading}
        minDuration={500}
        maxDuration={1500}
        loop={false}
        componentOnEnd={
          <Link className="z-[100000]" href="/dashboard/data/solution">
            <Button>顯示結果</Button>
          </Link>
        }
      />
      {/* End Button */}
      {/* Start Button */}

      {loading && (
        <button
          className="fixed right-4 top-4 z-[120] text-black dark:text-white"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
      <Button className="w-full" onClick={() => setLoading(true)}>
        開始
      </Button>
    </div>
  );
}
