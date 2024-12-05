import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-0" >
      <h1 className="text-4xl font-bold">上田鋁業風光 AI 窗生產規劃專案雲端資訊系統</h1>
      <Image src="/logo.png" alt="logo" width={256} height={256} className="my-6" />
      <Button variant="expandIcon" Icon={ArrowRightIcon} iconPlacement="right" className="">
        <Link href={"/dashboard/data/order"} className="text-primary-foreground">
          開始
        </Link>
      </Button>


    </div>
  );
}
