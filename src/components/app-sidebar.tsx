"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Folder,
  Server,
  Key,
  DollarSign,
  LifeBuoy,
  HelpCircle,
} from "lucide-react";
import { usePathname } from "next/navigation";

const menu = [
  {
    title: "Management",
    items: [
      { name: "Dashboard", link: "/dashboard", icon: LayoutDashboard },
      { name: "Projects", link: "/projects", icon: Folder },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { name: "Servers", link: "/servers", icon: Server },
      { name: "SSH Keys", link: "/ssh-keys", icon: Key },
    ],
  },
  {
    title: "Billing & Finance",
    items: [{ name: "Finance", link: "/finance", icon: DollarSign }],
  },
  {
    title: "Support",
    items: [
      { name: "Support", link: "/support", icon: LifeBuoy },
      { name: "Help", link: "/help", icon: HelpCircle },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (link: string) => pathname === link;

  return (
    <Sidebar
      className="bg-white"
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        "--sidebar-width": "18.125rem",
      }}
    >
      <SidebarHeader className="bg-white">
        <SidebarMenu>
          <SidebarMenuItem className="px-4">
            <h1 className="text-[2.25rem]/[2.5rem] max-md:text-black font-bold text-gray-900">
              EKIRE
            </h1>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-white">
        {menu.map((m) => (
          <SidebarGroup key={m.title}>
            <SidebarGroupLabel className="text-sm uppercase px-4 text-gray-500">
              {m.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {m.items.map((item) => (
                  <SidebarMenuItem className="px-4" key={item.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.link)}
                      className="data-[active=true]:bg-gray-200 py-2.5 h-auto !font-semibold text-gray-600 data-[active=true]:text-gray-900"
                    >
                      <a href={item.link}>
                        <item.icon />
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
