"use client";

import * as React from "react";
import {
  Blinds,
  BookOpen,
  Bot,
  LifeBuoy,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "葉又銘",
    email: "b10705052@ntu.edu.tw",
  },
  navMain: [
    {
      title: "資料",
      url: "/dashboard/data",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "製造需求單",
          url: "/dashboard/data/order",
        },
        {
          title: "工作站",
          url: "/dashboard/data/stage",
        },

        {
          title: "參數調整",
          url: "/dashboard/data/hyper",
        },
        {
          title: "規劃",
          url: "/dashboard/data/plan",
        },
        {
          title: "結果",
          url: "/dashboard/data/solution",
        },
      ],
    },
    {
      title: "模型",
      url: "/dashboard/model",
      icon: Bot,
      isActive: true,
      items: [
        {
          title: "MIP（最佳化）",
          url: "/dashboard/model/mip",
        },
        {
          title: "啟發式演算法",
          url: "/dashboard/model/heuristic",
        },
      ],
    },
    {
      title: "文件",
      url: "/dashboard/docs",
      icon: BookOpen,
      items: [
        {
          title: "介紹",
          url: "/dashboard/docs/introduction",
        },
        {
          title: "快速開始",
          url: "/dashboard/docs/get-started",
        },
        {
          title: "教學",
          url: "/dashboard/docs/tutorial",
        },
        {
          title: "更新日誌",
          url: "/dashboard/docs/changelog",
        },
      ],
    },
    {
      title: "設定",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        {
          title: "一般",
          url: "/dashboard/settings/general",
        },
        {
          title: "成員",
          url: "/dashboard/settings/member",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "支援",
      url: "/dashboard/support",
      icon: LifeBuoy,
    },
    {
      title: "回饋",
      url: "/dashboard/feedback",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Blinds className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">上田鋁業</span>
                  <span className="truncate text-xs">風光 AI 窗生產規劃</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
