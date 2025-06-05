// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar"
// import {
//   LayoutDashboard,
//   Users,
//   Trophy,
//   Newspaper,
//   MessageSquare,
//   Bell,
//   ShoppingBag,
//   Settings,
//   LogOut,
// } from "lucide-react"
// import Link from "next/link"

// const menuItems = [
//   {
//     title: "Dashboard",
//     url: "/",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Users",
//     url: "/users",
//     icon: Users,
//   },
//   {
//     title: "Matches Score",
//     url: "/matches",
//     icon: Trophy,
//   },
//   {
//     title: "News and Article",
//     url: "/news",
//     icon: Newspaper,
//   },
//   {
//     title: "Community post & Polls",
//     url: "/community",
//     icon: MessageSquare,
//   },
//   {
//     title: "Notification",
//     url: "/notifications",
//     icon: Bell,
//   },
//   {
//     title: "Shop",
//     url: "/shop",
//     icon: ShoppingBag,
//   },
//   {
//     title: "Settings",
//     url: "/settings",
//     icon: Settings,
//   },
// ]

// export function AppSidebar() {
//   return (
//     <Sidebar className="border-r">
//       <SidebarHeader className="p-4">
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
//             <span className="text-white font-bold text-sm">AD</span>
//           </div>
//           <span className="font-semibold text-lg">Admin</span>
//         </div>
//       </SidebarHeader>

//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {menuItems.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild>
//                     <Link href={item.url} className="flex items-center gap-3 px-3 py-2">
//                       <item.icon className="w-5 h-5" />
//                       <span>{item.title}</span>
//                     </Link>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>

//       <SidebarFooter className="p-4">
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton asChild>
//               <button className="flex items-center gap-3 px-3 py-2 w-full text-red-600 hover:bg-red-50">
//                 <LogOut className="w-5 h-5" />
//                 <span>Log out</span>
//               </button>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarFooter>
//     </Sidebar>
//   )
// }
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
  Bell,
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
  {
    title: "Notification",
    url: "/notifications",
    icon: Bell,
  },
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

  return (
    <Sidebar className=" pt-10">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={800}
            height={600}
            className="w-[90px] h-[60px] mx-auto flex items-center justify-center"
          />
        </div>
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
              <button className="flex items-center gap-3 px-3 py-2 w-full text-red-600 hover:bg-red-50">
                <LogOut className="w-5 h-5" />
                <span>Log out</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
