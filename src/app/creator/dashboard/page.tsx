import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import { DashboardHeader } from "./_components/dashboard-header"
import { DashboardOverview } from "./_components/dashboard-overview"
import { DashboardPromoBanner } from "./_components/dashboard-promo-banner"
import { DashboardSidebar } from "./_components/dashboard-sidebar"

export default function DashboardPage() {
  const username = "harsh_ai"

  return (
    <SidebarProvider>
      <DashboardSidebar username={username} />
      <SidebarInset className="min-h-svh bg-white">
        <DashboardHeader />
        <main className="mx-auto w-full max-w-[1600px] flex-1 px-4 pb-8 pt-5 sm:px-6 lg:px-8">
          <DashboardPromoBanner />
          <DashboardOverview />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
