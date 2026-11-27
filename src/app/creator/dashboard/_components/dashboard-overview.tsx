import { PlusIcon, Share2Icon, ChevronRightIcon } from "lucide-react"

import { CopyProfileLinkButton } from "./copy-profile-link-button"
import { DashboardDate } from "./dashboard-date"

export function DashboardOverview() {
  return (
    <section className="mt-5 rounded-xl border border-[#eeeae3] bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#eeeae3] pb-4">
        <h2 className="text-xl font-semibold tracking-tight text-[#222]">
          Good evening, Harsh
        </h2>
        <DashboardDate />
      </div>

      <div className="grid gap-6 py-5 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-1.5 text-xs font-medium tracking-[0.12em] text-[#77736c] uppercase">
            Your page
          </p>
          <div className="flex min-h-[164px] flex-col justify-center rounded-lg bg-[#faf9f7] p-4 sm:p-5">
            <p className="text-sm text-[#77736c]">Your link is</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <a
                href="https://topmate.io/harsh_ai"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#29251f] hover:underline"
              >
                topmate.io/harsh_ai
              </a>
              <CopyProfileLinkButton className="inline-flex h-7 items-center gap-1.5 rounded-md border border-[#e6e1d8] bg-white px-2 text-xs font-medium text-[#45413b] hover:bg-[#f6f4f0]" />
            </div>
            <p className="mt-2 text-sm text-[#77736c]">
              Share it to get your first booking.
            </p>
          </div>
        </div>

        <div>
          <p className="mb-1.5 text-xs font-medium tracking-[0.12em] text-[#77736c] uppercase">
            At a glance
          </p>
          <div className="border-t border-[#eeeae3]">
            <div className="flex min-h-[48px] items-center justify-between gap-3 border-b border-[#eeeae3] text-sm">
              <span className="font-medium text-[#29251f]">Priority DMs</span>
              <a
                href="#priority-dms"
                className="inline-flex items-center gap-2 text-[#77736c] hover:text-[#29251f]"
              >
                0 pending
                <ChevronRightIcon className="size-4" />
              </a>
            </div>
            <div className="flex min-h-[48px] items-center justify-between gap-3 border-b border-[#eeeae3] text-sm">
              <span className="font-medium text-[#29251f]">Loop</span>
              <a
                href="#loop"
                className="inline-flex items-center gap-2 text-[#77736c] hover:text-[#29251f]"
              >
                Free plan · Start free trial
                <ChevronRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-2 border-t border-[#eeeae3] pt-4 sm:grid-cols-2">
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#e5e0d7] bg-white text-sm font-medium text-[#29251f] transition-colors hover:bg-[#faf9f7]"
        >
          <PlusIcon className="size-4 text-[#77736c]" />
          Add service
        </button>
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#e5e0d7] bg-white text-sm font-medium text-[#29251f] transition-colors hover:bg-[#faf9f7]"
        >
          <Share2Icon className="size-4 text-[#77736c]" />
          Share profile
        </button>
      </div>
    </section>
  )
}
