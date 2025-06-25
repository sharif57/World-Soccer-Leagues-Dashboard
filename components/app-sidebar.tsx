"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  Trophy,
  Newspaper,
  MessageSquare,
                ShoppingBag,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },

  {
    title: "Users",
    url: "/users",
    icon: Users,
  },
  {
    title: "Matches Score",
    url: "/matches",
    icon: Trophy,
  },
  {
    title: "News and Article",
    url: "/news",
    icon: Newspaper,
  },
  {
    title: "Community post & Polls",
    url: "/community",
    icon: MessageSquare,
  },
  // {
  //   title: "Notification",
  //   url: "/notifications",
  //   icon: Bell,
  // },
  {
    title: "Shop",
    url: "/shop",
    icon: ShoppingBag,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname(); // Get current URL path

  if (
    pathname === "/auth/login" ||
    pathname === "/auth/forgot-password" ||
    pathname === "/auth/verfiy_email" ||
    pathname === "/auth/reset-password"
  ) {
    return null; // Don't render sidebar for login page
  }

  return (
    <Sidebar className=" ">
      <SidebarHeader className="p-4 pt-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={800}
            height={600}
            className="w-[90px] h-[60px] mx-auto flex items-center justify-center"
          />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`flex items-center gap-3 px-6 py-5  text-[20px] rounded-full ${
                        pathname === item.url
                          ? "bg-[#203463]  text-[20px] text-white"
                          : "hover:bg-[#203463] hover:text-black "
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/auth/login"}>
                <button className="flex items-center gap-3 px-3 py-2 w-full text-red-600 hover:bg-red-50">
                  <LogOut className="w-5 h-5" />
                  <span>Log out</span>
                </button>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
