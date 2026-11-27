"use client";

import {
  BoxIcon,
  CalendarDaysIcon,
  ChartNoAxesColumnIncreasingIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleAlertIcon,
  CrownIcon,
  HouseIcon,
  MegaphoneIcon,
  MessageCircleIcon,
  PlusIcon,
  RocketIcon,
  Settings2Icon,
  TrendingUpIcon,
  UserRoundIcon,
  WalletCardsIcon,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems: {
  title: string;
  icon: LucideIcon;
  indicator?: "alert" | "new" | "chevron" | "profile";
  active?: boolean;
}[] = [
  { title: "Home", icon: HouseIcon, active: true },
  { title: "Bookings", icon: CalendarDaysIcon, indicator: "chevron" },
  { title: "Services", icon: BoxIcon, indicator: "alert" },
  { title: "Profile", icon: UserRoundIcon, indicator: "profile" },
  { title: "Instagram Auto DM", icon: MessageCircleIcon },
  { title: "Memberships", icon: CrownIcon, indicator: "chevron" },
  { title: "Earnings", icon: WalletCardsIcon },
  { title: "Share & Grow", icon: MegaphoneIcon, indicator: "chevron" },
  { title: "Boost checkout", icon: TrendingUpIcon, indicator: "new" },
  {
    title: "Analytics",
    icon: ChartNoAxesColumnIncreasingIcon,
    indicator: "chevron",
  },
  { title: "Settings", icon: Settings2Icon, indicator: "chevron" },
];

export function DashboardSidebar({ username }: { username: string }) {
  const { state } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-[#e9e5dc] bg-[#f7f6f2] text-[#29251f]"
    >
      <SidebarHeader className="gap-3 px-2.5 pb-3 pt-4">
        {state === "collapsed" ? (
          <div className="flex justify-center px-1 ">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-[#1e1e1e] bg-[#e7473e] text-white">
              <RocketIcon className="size-5" />
            </div>
          </div>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex w-full items-center gap-2.5 px-1 text-left border-none bg-transparent outline-none focus:ring-0"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-[#1e1e1e] bg-[#e7473e] text-white">
                  <RocketIcon className="size-5" />
                </div>
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="truncate text-sm font-semibold">
                    Creator Dashboard
                  </p>
                  <p className="truncate text-xs text-[#78736a]">{username}</p>
                </div>
                <ChevronDownIcon className="size-4 shrink-0 text-[#4c4943]" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              asChild
              align="start"
              side="bottom"
              className="bg-white mt-2 p-2"
            >
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                style={{ animation: "none" }}
              >
                <DropdownMenuItem asChild>
                  <a href="/user/dashboard">Switch to User Dashboard</a>
                </DropdownMenuItem>
              </motion.div>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        <div className="w-full flex justify-center items-center">
          <button
            type="button"
            className="group-data-[collapsible=icon]:hidden flex h-10 w-[90%] items-center justify-center gap-2 rounded-full border border-[#d6e5d9] bg-[#e8f1eb] px-3 text-sm font-semibold text-[#294337] transition-colors hover:bg-[#dcebe1]"
          >
            <RocketIcon className="size-4" />
            <span>Publish on Socials</span>
          </button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 flex h-10 w-full items-center gap-2 rounded-md bg-[#191919] px-3 text-sm font-semibold text-white transition-colors hover:bg-[#303030]"
            >
              <PlusIcon className="size-4" />
              <span className="flex-1 text-left group-data-[collapsible=icon]:hidden">
                Create
              </span>
              <ChevronDownIcon className="size-4 group-data-[collapsible=icon]:hidden" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="bottom">
            <DropdownMenuItem>Service</DropdownMenuItem>
            <DropdownMenuItem>Membership</DropdownMenuItem>
            <DropdownMenuItem>Social post</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="px-2 pt-0">
          <SidebarMenu className="gap-0.5">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.active}
                    tooltip={item.title}
                    className="h-9 rounded-md px-2 text-[#39362f] hover:bg-[#efede7] data-[active=true]:bg-[#ece7db] data-[active=true]:font-semibold data-[active=true]:text-[#7a5015]"
                  >
                    <a href={item.active ? `/${username}/dashboard` : "#"}>
                      <Icon className="size-4.5 shrink-0" />
                      <span className="min-w-0 flex-1 truncate">
                        {item.title}
                      </span>
                      {item.indicator === "alert" && (
                        <CircleAlertIcon className="size-4 text-red-500" />
                      )}
                      {item.indicator === "new" && (
                        <span className="rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                          NEW
                        </span>
                      )}
                      {item.indicator === "profile" && (
                        <CircleAlertIcon className="size-4 text-[#737b85]" />
                      )}
                      {item.indicator === "chevron" && (
                        <ChevronRightIcon className="size-4 text-[#74716a]" />
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
