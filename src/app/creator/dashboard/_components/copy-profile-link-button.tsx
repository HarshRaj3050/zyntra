"use client"

import { CheckIcon, CopyIcon } from "lucide-react"
import { useState } from "react"

export function CopyProfileLinkButton({
  iconOnly = false,
  className = "",
}: {
  iconOnly?: boolean
  className?: string
}) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle")
  const profileUrl = "https://topmate.io/harsh_ai"

  async function copyProfileUrl() {
    try {
      await navigator.clipboard.writeText(profileUrl)
      setCopyState("copied")
    } catch {
      setCopyState("error")
    }
  }

  return (
    <button
      type="button"
      onClick={copyProfileUrl}
      aria-label={
        copyState === "error"
          ? "Copy failed"
          : copyState === "copied"
            ? "Profile link copied"
            : "Copy profile link"
      }
      className={className}
    >
      {copyState === "copied" ? (
        <CheckIcon className="size-4" />
      ) : (
        <CopyIcon className="size-4" />
      )}
      {!iconOnly && (
        <span>
          {copyState === "copied"
            ? "Copied"
            : copyState === "error"
              ? "Copy failed"
              : "Copy"}
        </span>
      )}
      {iconOnly && copyState !== "idle" && (
        <span className="sr-only">
          {copyState === "copied" ? "Copied" : "Copy failed"}
        </span>
      )}
    </button>
  )
}
