"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Order, orders } from "./data";
import { AddRecordDialog } from "./add-record-dialog";

export default function Page() {
  const [data, setData] = useState<Order[]>(orders);

  const addRecord = (newRecord: Partial<Order>) => {
    setData([...data, newRecord as Order]);
  };

  const removeRecord = (serialNumber: string) => {
    setData(data.filter((order) => order.serial_number !== serialNumber));
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-2xl font-bold">製造需求單</h1>
      <DataTable columns={columns} data={data} />
      <div className="mt-4 flex justify-end space-x-2">
        <AddRecordDialog onAddRecord={addRecord} />
        <Button
          variant="destructive"
          onClick={() => removeRecord(data[data.length - 1]?.serial_number)}
        >
          刪除最後一筆記錄
        </Button>
      </div>
    </div>
  );
}
