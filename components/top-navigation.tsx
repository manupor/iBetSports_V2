"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Trophy, Zap, Gem, Gift, Building, HelpCircle } from "lucide-react"

interface TopNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function TopNavigation({ activeTab, setActiveTab }: TopNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "sports", label: "SPORTSBOOK", icon: Trophy },
    { id: "racebook", label: "RACEBOOK", icon: Zap },
    { id: "live-casino", label: "CASINO", icon: Gem },
    { id: "promotions", label: "PROMOTIONS", icon: Gift },
    { id: "banking", label: "BANKING", icon: Building },
    { id: "home", label: "HELP", icon: HelpCircle },
  ]

  return (
    <div className="bg-brand-charcoal-black">
      {/* Top Navigation Bar */}
      <nav className="border-b border-brand-smoke-gray/20">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <Image
              src="/images/ibet-sports-logo-v2.png"
              alt="IBET Sports Logo"
              width={120}
              height={40}
              className="h-10 lg:h-12 w-auto"
            />
            <span className="ml-3 text-brand-primary-green text-sm font-medium italic">You play, we pay!</span>
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
      </nav>

      {/* Secondary Navigation Bar with Icons */}
      <div className="hidden md:block bg-brand-charcoal-black-secondary/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-12 py-4">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center space-y-2 px-4 py-2 transition-colors ${
                    activeTab === item.id
                      ? "text-brand-primary-green"
                      : "text-brand-soft-white hover:text-brand-primary-green"
                  }`}
                >
                  <IconComponent size={24} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-charcoal-black-secondary border-t border-brand-smoke-gray/20">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`flex items-center space-x-3 w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? "text-brand-primary-green bg-brand-primary-green/10"
                      : "text-brand-soft-white hover:text-brand-primary-green hover:bg-brand-smoke-gray/10"
                  }`}
                >
                  <IconComponent size={20} />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default TopNavigation
