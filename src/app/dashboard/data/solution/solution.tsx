import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconFileExport } from "@tabler/icons-react";
import { MoreHorizontal } from "lucide-react";
import WorksheetPct from "./worksheet_pct";
import Vis from "@/components/custom/vis";

export default function Solution() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>總覽</CardTitle>
          <CardDescription>這裡呈現每個訂單從開始到結束的時間</CardDescription>
        </CardHeader>
        <CardContent>
          <WorksheetPct/>
        </CardContent>
        <CardFooter className="gap-4">
          <Button variant={"outline"}>
            查看更多
            <MoreHorizontal />
          </Button>
          <Button variant={"outline"}>
            匯出
            <IconFileExport />
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>甘特圖</CardTitle>
          <CardDescription>這裡呈現生產規劃的甘特圖</CardDescription>
        </CardHeader>
        <CardContent>
          <Vis filename="/asset/demo_1203/vis/gantt.html" />
        </CardContent>
        <CardFooter className="gap-4">
          <Button variant={"outline"}>
            查看更多
            <MoreHorizontal />
          </Button>
          <Button variant={"outline"}>
            匯出
            <IconFileExport />
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>日曆</CardTitle>
          <CardDescription>這裡呈現生產規劃的日歷呈現法</CardDescription>
        </CardHeader>
        <CardContent>
          <Vis filename="/asset/demo_1203/vis/calendar.html" />
        </CardContent>
        <CardFooter className="gap-4">
          <Button variant={"outline"}>
            查看更多
            <MoreHorizontal />
          </Button>
          <Button variant={"outline"}>
            匯出
            <IconFileExport />
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>每天利用率</CardTitle>
          <CardDescription>這裡呈現生產規劃一整年每天的利用率</CardDescription>
        </CardHeader>
        <CardContent>
          <Vis filename="/asset/demo_1203/vis/factory_util.html" />
        </CardContent>
        <CardFooter className="gap-4">
          <Button variant={"outline"}>
            查看更多
            <MoreHorizontal />
          </Button>
          <Button variant={"outline"}>
            匯出
            <IconFileExport />
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>工作站利用率</CardTitle>
          <CardDescription>
            這裡呈現生產規劃每天各工作站的利用率
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Vis filename="/asset/demo_1203/vis/stage_util.html" />
        </CardContent>
        <CardFooter className="gap-4">
          <Button variant={"outline"}>
            查看更多
            <MoreHorizontal />
          </Button>
          <Button variant={"outline"}>
            匯出
            <IconFileExport />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
