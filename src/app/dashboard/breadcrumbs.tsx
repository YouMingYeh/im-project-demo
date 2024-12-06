"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const breadcrumb = getPathnameBreadcrumb(pathname);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumb.map((item, index) => (
          <>
            <BreadcrumbItem key={index}>
              {item.url ? (
                <BreadcrumbLink href={item.url}>{item.title}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.title}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < breadcrumb.length - 1 && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

const pathnameTitle: { [key: string]: string } = {
  dashboard: "國立臺灣大學資訊管理學系 2024 學士班資管專題",
  data: "資料",
  order: "製造需求單",
  stage: "工作站",
  hyper: "參數設定",
  plan: "生成規劃實例",
  solution: "結果",
  model: "執行規劃",
  mip: "MIP（最佳化）",
  heuristic: "啟發式演算法",
  docs: "文件",
  introduction: "介紹",
  "get-started": "快速開始",
  tutorial: "教學",
  changelog: "更新日誌",
  settings: "設定",
  general: "一般",
  member: "成員",
  support: "支援",
  feedback: "回饋",
};
function getPathnameBreadcrumb(pathname: string) {
  const pathnames = pathname.split("/").filter((path) => path !== "");
  const breadcrumb = pathnames.map((path, index) => {
    const isLast = index === pathnames.length - 1;
    const url = `/${pathnames.slice(0, index + 1).join("/")}`;
    return {
      title: pathnameTitle[path as keyof typeof pathnameTitle] || path,
      url: isLast ? undefined : url,
    };
  });
  return breadcrumb;
}
