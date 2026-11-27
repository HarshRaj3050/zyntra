"use client"

import { useSyncExternalStore } from "react"

function subscribeToDateChange(callback: () => void) {
  window.addEventListener("focus", callback)
  return () => window.removeEventListener("focus", callback)
}

function getClientDate() {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date())
}

function getServerDate() {
  return "Today"
}

export function DashboardDate() {
  const today = useSyncExternalStore(
    subscribeToDateChange,
    getClientDate,
    getServerDate,
  )

  return <p className="text-sm text-[#77736c]">{today}</p>
}
