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
    { id: "sports", label: "SPORTSBOOK" },
    { id: "racebook", label: "RACEBOOK" },
    { id: "live-casino", label: "LIVE CASINO" },
    { id: "banking", label: "BANKING" },
    { id: "promotions", label: "PROMOTIONS" },
  ]

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        {/* Top bar with logo and auth buttons */}
        <div className="flex items-center justify-between px-4 xl:px-6 py-2 bg-black">
          <button onClick={() => setActiveTab("home")} className="cursor-pointer">
            <Image
              src="/images/ibet-sports-logo-v2.png"
              alt="IBET Sports Logo"
              width={160}
              height={50}
              className="h-12 xl:h-14 w-auto hover:opacity-80 transition-opacity"
            />
          </button>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              className="border-2 border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-black bg-transparent font-bold px-6 xl:px-8 py-3 text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary-green/30"
            >
              LOGIN
            </Button>
            <Button className="bg-gradient-to-r from-brand-primary-green to-green-400 hover:from-green-400 hover:to-brand-primary-green text-black font-bold px-6 xl:px-8 py-3 text-sm border-0 uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary-green/50 hover:scale-105">
              JOIN NOW
            </Button>
          </div>
        </div>

        {/* Navigation menu bar */}
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4 xl:px-6 border-t border-brand-primary-green/30 shadow-lg">
          <div className="flex justify-center space-x-4 xl:space-x-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary-green/5 to-transparent"></div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 xl:px-6 py-4 text-sm font-bold transition-all duration-300 relative z-10 ${
                  activeTab === item.id
                    ? "text-brand-primary-green bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl border-l border-r border-brand-primary-green/20"
                    : "text-white hover:text-brand-primary-green hover:bg-gradient-to-b hover:from-gray-800/50 hover:to-gray-900/50 hover:shadow-lg"
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary-green to-transparent"></div>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary-green/50 to-transparent"></div>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet Navigation */}
      <div className="hidden md:block lg:hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-black">
          <button onClick={() => setActiveTab("home")} className="cursor-pointer">
            <Image
              src="/images/ibet-sports-logo-v2.png"
              alt="IBET Sports Logo"
              width={120}
              height={40}
              className="h-10 w-auto hover:opacity-80 transition-opacity"
            />
          </button>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="border-2 border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-black text-xs px-4 py-2 bg-transparent font-bold uppercase tracking-wide transition-all duration-300"
            >
              LOGIN
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-brand-primary-green to-green-400 hover:from-green-400 hover:to-brand-primary-green text-black font-bold text-xs px-4 py-2 uppercase tracking-wide transition-all duration-300 hover:scale-105"
            >
              JOIN NOW
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-gray-800 rounded ml-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Tablet menu dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-black border-t border-gray-800">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-3 text-sm font-bold transition-colors rounded ${
                    activeTab === item.id
                      ? "text-brand-primary-green bg-gray-900 shadow-lg"
                      : "text-white hover:text-brand-primary-green hover:bg-gray-900/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-3 py-2 bg-black">
          <button onClick={() => setActiveTab("home")} className="cursor-pointer">
            <Image
              src="/images/ibet-sports-logo-v2.png"
              alt="IBET Sports Logo"
              width={100}
              height={35}
              className="h-8 w-auto hover:opacity-80 transition-opacity"
            />
          </button>
          <div className="flex items-center space-x-1">
            <Button
              variant="outline"
              size="sm"
              className="border-2 border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-black text-xs px-3 py-2 bg-transparent font-bold uppercase transition-all duration-300"
            >
              LOGIN
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-brand-primary-green to-green-400 hover:from-green-400 hover:to-brand-primary-green text-black font-bold text-xs px-3 py-2 uppercase transition-all duration-300"
            >
              JOIN
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-gray-800 rounded"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-black border-t border-gray-800">
            <div className="px-3 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left px-3 py-3 text-sm font-bold transition-colors rounded ${
                    activeTab === item.id
                      ? "text-brand-primary-green bg-gray-900 shadow-lg"
                      : "text-white hover:text-brand-primary-green hover:bg-gray-900/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default TopNavigation
