"use client";

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

interface IToggle {
  className?: string
}

const ThemeToggle = (data: IToggle) => {
  const { className } = data
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={resolvedTheme === "dark"}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border bg-muted text-muted-foreground hover:bg-background hover:text-foreground shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 ${className ?? ""}`}
    >
      {resolvedTheme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

export default ThemeToggle
