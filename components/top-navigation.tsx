"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, Trophy, Gamepad2, Zap, CreditCard, Gift, Menu, X, User, LogIn } from "lucide-react"
import Image from "next/image"

interface TopNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function TopNavigation({ activeTab, setActiveTab }: TopNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "sports", label: "Sports", icon: Trophy },
    { id: "racebook", label: "Racebook", icon: Zap },
    { id: "live-casino", label: "Live Casino", icon: Gamepad2 },
    { id: "banking", label: "Banking", icon: CreditCard },
    { id: "promotions", label: "Promotions", icon: Gift },
  ]

  return (
    <nav className="bg-brand-charcoal-black border-b border-brand-smoke-gray/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 md:flex-none flex-1 md:flex-initial justify-center md:justify-start">
            <Image
              src="/images/ibet-sports-logo-v2.png"
              alt="Casino Logo"
              width={200}
              height={45}
              className="h-10 w-auto md:h-8"
            />
          </div>

          {/* Mobile spacer to balance centered logo */}
          <div className="w-10 md:hidden"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <Button
                  key={tab.id}
                  variant="ghost"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-brand-primary-green text-brand-charcoal-black font-bold"
                      : "text-brand-soft-white hover:bg-brand-charcoal-black-secondary hover:text-brand-primary-green"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </Button>
              )
            })}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold">
              <User className="w-4 h-4 mr-2" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center justify-between w-full">
              {/* Mobile Logo - Left Aligned */}
              <div className="flex items-center">
                <Image
                  src="/images/ibet-sports-logo-v2.png"
                  alt="Casino Logo"
                  width={160}
                  height={35}
                  className="h-8 w-auto"
                />
              </div>

              {/* Mobile Auth Buttons - Center/Right */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent text-xs px-3 py-1.5 rounded-full"
                >
                  LOGIN
                </Button>
                <Button
                  size="sm"
                  className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold text-xs px-3 py-1.5 rounded-full"
                >
                  GET STARTED
                </Button>

                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-brand-soft-white hover:bg-brand-charcoal-black-secondary p-2 ml-2"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>

            {/* Mobile Menu (Conditionally Rendered) */}
            {mobileMenuOpen && (
              <div className="border-t border-brand-smoke-gray/20 py-4">
                <div className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <Button
                        key={tab.id}
                        variant="ghost"
                        onClick={() => {
                          setActiveTab(tab.id)
                          setMobileMenuOpen(false)
                        }}
                        className={`w-full justify-start flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          activeTab === tab.id
                            ? "bg-brand-primary-green text-brand-charcoal-black font-bold"
                            : "text-brand-soft-white hover:bg-brand-charcoal-black-secondary hover:text-brand-primary-green"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{tab.label}</span>
                      </Button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopNavigation
