"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        className="text-muted-foreground"
      >
        <Moon className="size-5 opacity-0" aria-hidden="true" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"
  const nextTheme = isDark ? "light" : "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Activate ${nextTheme} mode`}
    >
      {isDark ? (
        <Sun className="size-5" aria-hidden="true" />
      ) : (
        <Moon className="size-5" aria-hidden="true" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

