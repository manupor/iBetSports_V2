"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface TopNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  onSignUpClick: () => void
  onLoginClick: () => void
}

export function TopNavigation({ activeTab, setActiveTab, onSignUpClick, onLoginClick }: TopNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "casino", label: "CASINO" },
    { id: "sports", label: "SPORTS" },
    { id: "racebook", label: "RACEBOOK" },
    { id: "live-casino", label: "LIVE CASINO" },
    { id: "banking", label: "BANKING" },
    { id: "promotions", label: "PROMOTIONS" },
  ]

  return (
    <header className="bg-brand-charcoal-black border-b border-brand-smoke-gray/20 sticky top-0 z-50 w-full">
      <div className="w-full px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green flex items-center justify-center">
                <span className="text-brand-charcoal-black font-black text-sm md:text-base">I</span>
              </div>
              <span className="text-brand-soft-white font-black text-lg md:text-xl">IBETSPORTS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-2 text-sm font-bold transition-colors duration-200 rounded-lg ${
                  activeTab === item.id
                    ? "text-brand-primary-green bg-brand-primary-green/10"
                    : "text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-smoke-gray/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              onClick={onLoginClick}
              variant="outline"
              className="text-brand-soft-white border-brand-smoke-gray hover:bg-brand-smoke-gray/10 bg-transparent"
            >
              LOGIN
            </Button>
            <Button
              onClick={onSignUpClick}
              className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold"
            >
              SIGN UP
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-soft-white hover:text-brand-primary-green transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-brand-smoke-gray/20">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`px-3 py-2 text-left text-sm font-bold transition-colors duration-200 rounded-lg ${
                    activeTab === item.id
                      ? "text-brand-primary-green bg-brand-primary-green/10"
                      : "text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-smoke-gray/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-brand-smoke-gray/20">
              <Button
                onClick={() => {
                  onLoginClick()
                  setIsMobileMenuOpen(false)
                }}
                variant="outline"
                className="text-brand-soft-white border-brand-smoke-gray hover:bg-brand-smoke-gray/10"
              >
                LOGIN
              </Button>
              <Button
                onClick={() => {
                  onSignUpClick()
                  setIsMobileMenuOpen(false)
                }}
                className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold"
              >
                SIGN UP
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
