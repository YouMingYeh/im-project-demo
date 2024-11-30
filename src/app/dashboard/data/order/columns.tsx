"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Order } from "./data";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "serial_number",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          序號
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "name",
    header: "名稱",
  },
  {
    accessorKey: "suborders",
    header: "子訂單",
    cell: ({ row }) => {
      const suborders = row.original.suborders;
      return (
        <div>
          {suborders.map((suborder, index) => (
            <div key={index} className="mb-2">
              <div>窗戶: {suborder.window.name}</div>
              <div>數量: {suborder.count}</div>
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "deadline",
    header: "截止日期",
    cell: ({ row }) => {
      return new Date(row.original.deadline).toLocaleDateString("zh-TW");
    },
  },
  {
    accessorKey: "early_penalty",
    header: "提前罰金",
  },
  {
    accessorKey: "late_penalty",
    header: "延遲罰金",
  },
  {
    accessorKey: "complete_ratio",
    header: "完成比例",
    cell: ({ row }) => {
      return `${(row.original.complete_ratio * 100).toFixed(2)}%`;
    },
  },
];
