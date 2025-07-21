"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface TopNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function TopNavigation({ activeTab, setActiveTab }: TopNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "sports", label: "Sports" },
    { id: "racebook", label: "Racebook" },
    { id: "live-casino", label: "Live Casino" },
    { id: "banking", label: "Banking" },
    { id: "promotions", label: "Promotions" },
  ]

  return (
    <nav className="bg-brand-charcoal-black border-b border-brand-smoke-gray/20 sticky top-0 z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-8">
          <Image
            src="/images/ibet-sports-logo-v2.png"
            alt="IBET Sports Logo"
            width={120}
            height={40}
            className="h-10 lg:h-12 w-auto"
          />
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? "text-brand-primary-green border-b-2 border-brand-primary-green"
                    : "text-brand-soft-white hover:text-brand-primary-green"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent"
          >
            LOGIN
          </Button>
          <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold">
            JOIN NOW
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <Image
          src="/images/ibet-sports-logo-v2.png"
          alt="IBET Sports Logo"
          width={120}
          height={40}
          className="h-14 w-auto"
        />
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black text-xs px-3 py-1 rounded-full bg-transparent"
          >
            LOGIN
          </Button>
          <Button
            size="sm"
            className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold text-xs px-3 py-1 rounded-full"
          >
            JOIN NOW
          </Button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-soft-white p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-charcoal-black-secondary border-t border-brand-smoke-gray/20">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  setIsMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? "text-brand-primary-green bg-brand-primary-green/10"
                    : "text-brand-soft-white hover:text-brand-primary-green hover:bg-brand-smoke-gray/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default TopNavigation
