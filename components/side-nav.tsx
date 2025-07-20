"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SideNavProps {
  onClose?: () => void
}

export function SideNav({ onClose }: SideNavProps) {
  return (
    <aside className="flex flex-col h-full text-brand-soft-white">
      <header className="flex items-center justify-between px-6 py-4 border-b border-brand-smoke-gray/40">
        <h2 className="text-xl font-bold">Navigation</h2>
        {onClose && (
          <Button size="icon" variant="ghost" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        )}
      </header>

      <nav className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {["Home", "Casino", "Sportsbook", "Promotions", "Banking"].map((item) => (
          <a
            key={item}
            href="#"
            className="block px-4 py-2 rounded-lg hover:bg-brand-charcoal-black-tertiary/40 transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  )
}
