"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Wallet, Bell } from "lucide-react"
import Image from "next/image"

interface TopNavigationProps {
  activeTab?: string
  setActiveTab?: (tab: string) => void
  showTabs?: boolean
}

export function TopNavigation({ activeTab = "home", setActiveTab, showTabs = true }: TopNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const tabs = [
    { id: "home", label: "Home" },
    { id: "casino", label: "Casino" },
    { id: "sports", label: "Sports" },
    { id: "racebook", label: "Racebook" },
    { id: "live-casino", label: "Live Casino" },
    { id: "banking", label: "Banking" },
    { id: "promotions", label: "Promotions" },
  ]

  const handleTabChange = (tabId: string) => {
    if (setActiveTab) {
      setActiveTab(tabId)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-brand-charcoal-black border-b border-brand-smoke-gray/20 sticky top-0 z-50 backdrop-blur-sm">
      {/* Top Bar */}
      <div className="border-b border-brand-smoke-gray/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-12">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <button onClick={() => handleTabChange("home")} className="cursor-pointer">
              <Image
                src="/images/ibet-sports-logo-v2.png"
                alt="IBET Sports Logo"
                width={120}
                height={40}
                className="h-8 sm:h-10 md:h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </button>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <Button variant="ghost" size="sm" className="text-brand-smoke-gray hover:text-brand-soft-white px-3 py-2">
                <Bell className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">Notifications</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-brand-smoke-gray hover:text-brand-soft-white px-3 py-2">
                <Wallet className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">$0.00</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-4 py-2 bg-transparent"
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button
                size="sm"
                className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-4 py-2"
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brand-soft-white hover:text-brand-primary-green p-2 min-w-[44px] min-h-[44px]"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs - Desktop */}
      {showTabs && (
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex items-center justify-center space-x-1 lg:space-x-2 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-semibold whitespace-nowrap transition-all duration-200 border-b-2 min-w-[100px] ${
                    activeTab === tab.id
                      ? "text-brand-primary-green border-brand-primary-green"
                      : "text-brand-smoke-gray border-transparent hover:text-brand-soft-white hover:border-brand-smoke-gray/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 sm:top-16 bg-black border-t border-brand-smoke-gray/20 z-50">
          <div className="flex flex-col h-full">
            {/* Mobile Navigation */}
            {showTabs && (
              <div className="flex-1 px-4 py-3 bg-gray-900">
                <div className="mb-3">
                  <h3 className="text-white font-medium text-sm mb-2 px-1">Navigation</h3>
                  <div className="space-y-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                          activeTab === tab.id
                            ? "bg-brand-primary-green text-black"
                            : "text-gray-300 hover:text-white hover:bg-gray-800"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Actions */}
            <div className="border-t border-gray-700 p-4 space-y-3 bg-gray-800">
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-700 justify-start px-3 py-2.5 h-auto text-sm"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-700 justify-start px-3 py-2.5 h-auto text-sm"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  $0.00
                </Button>
              </div>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-black py-2.5 h-auto text-sm font-medium bg-transparent"
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-black font-medium py-2.5 h-auto text-sm">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
