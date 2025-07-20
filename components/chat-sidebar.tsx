"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ChatSidebarProps {
  onClose?: () => void
}

export function ChatSidebar({ onClose }: ChatSidebarProps) {
  return (
    <aside className="flex flex-col h-full text-brand-soft-white">
      <header className="flex items-center justify-between px-6 py-4 border-b border-brand-smoke-gray/40">
        <h2 className="text-xl font-bold">Live Chat</h2>
        {onClose && (
          <Button size="icon" variant="ghost" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        )}
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="text-brand-smoke-gray text-sm">No messages yet. Say hello!</div>
      </div>

      <form className="p-4 border-t border-brand-smoke-gray/40">
        <Input placeholder="Type your message…" className="bg-brand-charcoal-black-tertiary" />
      </form>
    </aside>
  )
}
