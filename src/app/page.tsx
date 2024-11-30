import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen w-full flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="mx-auto flex max-w-[800px] flex-grow flex-col items-center justify-center px-4 md:px-6">
          <div className="flex flex-col items-center space-y-5 text-center sm:space-y-6">
            <Image src="/logo.png" width={256} height={256} alt="Logo" />
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              上田鋁業風光 AI 窗生產規劃
            </h1>
            <p className="mx-auto max-w-prose text-base text-muted-foreground md:text-xl">
              使用作業研究方法建立數學模型與設計最佳化演算法，協助鋁門窗生產業者節省規劃生產排程的時間及最佳化生產排程。
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Button asChild>
                <Link href="/login">
                  開始 <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              {/* <Button variant={"outline"} asChild>
                <Link href="https://blog.thilina.dev/blog/template-next-changelog-2-6">
                  ChangeLog <LucideFileCog className="ml-2 size-5" />
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-muted-foreground">
          由臺大資管<strong>孔令傑</strong>教授指導，學生<strong>黃芷榆</strong>
          、<strong>黃偉翔</strong>、<strong>葉又銘</strong>、
          <strong>梁安哲</strong>同學製作
        </div>
      </section>
    </>
  );
}
