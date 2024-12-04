"use client"

import { Suspense, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IconFileExport } from "@tabler/icons-react"
import { MoreHorizontal } from 'lucide-react'
import WorksheetPct from "./worksheet_pct"
import Vis from "@/components/custom/vis"
import { InspectDialog } from "@/components/inspect-dialog"
import { motion } from "framer-motion"

const cardData = [
  {
    title: "總覽",
    description: "這裡呈現每個訂單從開始到結束的時間",
    content: <WorksheetPct />,
    exportFilePath: "/asset/demo_1203/excel/worksheet_pct.csv",
  },
  {
    title: "甘特圖",
    description: "這裡呈現生產規劃的甘特圖",
    content: <Vis filename="/asset/demo_1203/vis/gantt.html" />,
    exportFilePath: "/asset/demo_1203/vis/gantt.html",
  },
  {
    title: "日曆",
    description: "這裡呈現生產規劃的日歷呈現法",
    content: <Vis filename="/asset/demo_1203/vis/calendar.html" />,
    exportFilePath: "/asset/demo_1203/vis/calendar.html",
  },
  {
    title: "每天利用率",
    description: "這裡呈現生產規劃一整年每天的利用率",
    content: <Vis filename="/asset/demo_1203/vis/factory_util.html" />,
    exportFilePath: "/asset/demo_1203/vis/factory_util.html",
  },
  {
    title: "工作站利用率",
    description: "這裡呈現生產規劃每天各工作站的利用率",
    content: <Vis filename="/asset/demo_1203/vis/stage_util.html" />,
    exportFilePath: "/asset/demo_1203/vis/stage_util.html",
  },
]

function CardWrapper({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default function Solution() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col gap-4">
      {cardData.map((card, index) => (
        <Suspense key={card.title} fallback={<div>Loading...</div>}>
          <CardWrapper index={index}>
            <Card>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>{card.content}</CardContent>
              <CardFooter className="gap-4">
                <Button variant="outline">
                  查看更多
                  <MoreHorizontal className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => {
                  window.open(card.exportFilePath)
                }}>
                  匯出
                  <IconFileExport className="ml-2 h-4 w-4" />
                </Button>
                <InspectDialog title={card.title}>{card.content}</InspectDialog>
              </CardFooter>
            </Card>
          </CardWrapper>
        </Suspense>
      ))}
    </div>
  )
}

