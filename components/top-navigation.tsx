"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Trophy, Zap, Gamepad2, CreditCard, Gift, MoreHorizontal, Menu } from "lucide-react"

interface TopNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

function TopNavigation({ activeTab, setActiveTab }: TopNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { id: "sports", label: "SPORTS", icon: Trophy },
    { id: "racebook", label: "RACEBOOK", icon: Zap },
    { id: "live-casino", label: "LIVE CASINO", icon: Gamepad2 },
    { id: "banking", label: "BANKING", icon: CreditCard },
    { id: "promotions", label: "PROMOTIONS", icon: Gift },
  ]

  const NavButton = ({ item, onClick, isActive }: { item: any; onClick: () => void; isActive: boolean }) => {
    const IconComponent = item.icon
    return (
      <button
        onClick={onClick}
        className={`
          flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-200
          ${
            isActive
              ? "bg-brand-primary-green/20 text-brand-primary-green border border-brand-primary-green/30"
              : "text-brand-soft-white hover:text-brand-primary-green hover:bg-brand-primary-green/10"
          }
        `}
      >
        <IconComponent className="w-4 h-4" />
        <span className="whitespace-nowrap">{item.label}</span>
      </button>
    )
  }

  return (
    <nav className="bg-brand-charcoal-black border-b border-brand-smoke-gray/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Now clickable to go to home */}
          <button
            onClick={() => setActiveTab("home")}
            className="flex items-center space-x-3 flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/ibet-sports-logo-v2.png"
              alt="IBETSPORTS"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="hidden sm:block">
              
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <NavButton
                key={item.id}
                item={item}
                onClick={() => setActiveTab(item.id)}
                isActive={activeTab === item.id}
              />
            ))}

            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-sm text-brand-soft-white hover:text-brand-primary-green hover:bg-brand-primary-green/10 transition-all duration-200">
              <MoreHorizontal className="w-4 h-4" />
              <span>MORE</span>
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-brand-soft-white hover:text-brand-primary-green">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-brand-charcoal-black border-brand-smoke-gray/20 w-80">
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={() => {
                      setActiveTab("home")
                      setIsMobileMenuOpen(false)
                    }}
                    className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/images/ibet-sports-logo-v2.png"
                      alt="IBETSPORTS"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <span className="text-brand-soft-white font-bold">IBETSPORTS</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {navigationItems.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id)
                          setIsMobileMenuOpen(false)
                        }}
                        className={`
                          w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-bold text-left transition-all duration-200
                          ${
                            activeTab === item.id
                              ? "bg-brand-primary-green/20 text-brand-primary-green border border-brand-primary-green/30"
                              : "text-brand-soft-white hover:text-brand-primary-green hover:bg-brand-primary-green/10"
                          }
                        `}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    )
                  })}
                </div>

                <div className="mt-8 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent"
                  >
                    LOGIN
                  </Button>
                  <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold">
                    JOIN NOW
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopNavigation
export { TopNavigation }
export { TopNavigation as SideBetNavigation }
