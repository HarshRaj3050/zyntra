"use client"

import { ArrowUpRightIcon, UserRoundIcon } from "lucide-react"

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { CopyProfileLinkButton } from "./copy-profile-link-button"

export function DashboardHeader() {
  const { state } = useSidebar()
  const triggerLeft =
    state === "collapsed"
      ? "left-[calc(var(--sidebar-width-icon)_-_15px)]"
      : "left-[calc(var(--sidebar-width)_-_15px)]"

  return (
    <header className="flex min-h-22 items-center justify-between gap-3 border-b border-[#ebe8e2] bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <SidebarTrigger
          className={`z-10 fixed ${triggerLeft} top-12 size-7 shrink-0 rounded-md border border-[#e9e5dc] bg-white text-[#514d46] transition-[left] duration-200 ease-linear hover:bg-[#f7f6f2]`}
          aria-label="Toggle dashboard sidebar"
        />
        <h1 className="truncate text-2xl font-semibold tracking-tight text-[#3d3d3d] sm:text-3xl">
          Hi, Harsh
        </h1>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <a
          href="https://topmate.io/harsh_ai"
          target="_blank"
          rel="noreferrer"
          className="hidden h-12 items-center gap-2 rounded-2xl border border-[#eee4cc] bg-[#fbfaf6] px-3 text-sm font-medium text-[#514c43] transition-colors hover:bg-[#f5f0e5] sm:flex"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-[#eed7c9] text-[#9b5039]">
            <UserRoundIcon className="size-5" />
          </span>
          <span>topmate.io/harsh_ai/</span>
          <ArrowUpRightIcon className="size-4 text-[#986015]" />
        </a>
        <CopyProfileLinkButton
          iconOnly
          className="flex size-12 items-center justify-center rounded-2xl border border-[#eee4cc] bg-[#fbfaf6] text-[#986015] transition-colors hover:bg-[#f5f0e5]"
        />
      </div>
    </header>
  )
}
