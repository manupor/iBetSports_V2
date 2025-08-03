"use client"
import { useState } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  MenuIcon,
  DoorClosedIcon as CloseIcon,
  UserIcon,
  WalletIcon,
  BellIcon,
  Dice6,
  Trophy,
  Video,
  CreditCard,
  Gift,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface TopNavigationProps {
  activeTab?: string
  setActiveTab?: (tab: string) => void
  showTabs?: boolean
  onSignUpClick?: () => void
  onLoginClick?: () => void
}

export function TopNavigation({
  activeTab = "home",
  setActiveTab,
  showTabs = true,
  onSignUpClick,
  onLoginClick,
}: TopNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const tabs = [
    { id: "casino", label: "Casino", icon: Dice6 },
    { id: "sports", label: "Sports", icon: Trophy },
    { id: "racebook", label: "Racebook", icon: null, customIcon: true },
    { id: "live-casino", label: "Live Casino", icon: Video },
    { id: "banking", label: "Banking", icon: CreditCard },
    { id: "promotions", label: "Promotions", icon: Gift },
  ]

  const handleTabChange = (tabId: string) => {
    if (setActiveTab) {
      setActiveTab(tabId)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="bg-brand-charcoal-black border-b border-brand-smoke-gray/20 sticky top-0 z-50 backdrop-blur-sm w-full">
        {/* Top Bar */}
        <div className="border-b border-brand-smoke-gray/10 w-full">
          <div className="w-full px-3 xs:px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 xs:h-16 sm:h-18">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="cursor-pointer" onClick={() => setActiveTab && setActiveTab("home")}>
                  <span className="bg-gradient-to-r from-brand-primary-green via-white via-brand-vibrant-green to-brand-primary-green bg-clip-text text-transparent font-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:opacity-80 transition-opacity bg-[length:300%_100%] animate-[shimmer_2s_ease-in-out_infinite]">
                    ibetsports.ag
                  </span>
                </Link>
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                <Button
                  variant="outline"
                  size="default"
                  className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-4 xl:px-6 py-2 xl:py-3 h-10 xl:h-12 bg-transparent text-sm xl:text-base"
                  onClick={onLoginClick}
                >
                  <UserIcon className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                  Login
                </Button>
                <Button
                  onClick={onSignUpClick}
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-4 xl:px-6 py-2 xl:py-3 h-10 xl:h-12 text-sm xl:text-base animate-pulse",
                  )}
                >
                  Sign Up
                </Button>
              </div>

              {/* Tablet Actions */}
              <div className="hidden md:flex lg:hidden items-center space-x-2 xl:space-x-3">
                <Button
                  variant="outline"
                  size="default"
                  onClick={onLoginClick}
                  className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-4 xl:px-6 py-2 xl:py-3 bg-transparent text-sm xl:text-base"
                >
                  Login
                </Button>
                <Button
                  onClick={onSignUpClick}
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base",
                  )}
                >
                  Sign Up
                </Button>
              </div>

              {/* Mobile Actions and Menu Button */}
              <div className="flex md:hidden items-center space-x-1 xs:space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onLoginClick}
                  className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-2 xs:px-3 py-1 xs:py-1.5 bg-transparent text-xs"
                >
                  Login
                </Button>
                <Button
                  onClick={onSignUpClick}
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-2 xs:px-3 py-1 xs:py-1.5 text-xs animate-pulse shadow-sm",
                  )}
                >
                  Join Now!
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-brand-soft-white hover:text-brand-primary-green p-1.5 xs:p-2 ml-1 xs:ml-2"
                >
                  {isMobileMenuOpen ? (
                    <CloseIcon className="w-4 h-4 xs:w-5 xs:h-5" />
                  ) : (
                    <MenuIcon className="w-4 h-4 xs:w-5 xs:h-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs - Desktop & Tablet */}
        {showTabs && (
          <div className="hidden md:block w-full">
            <div className="w-full px-3 xs:px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center">
                <div className="flex space-x-0 overflow-x-auto scrollbar-hide">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={`px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap transition-all duration-200 border-b-2 flex-shrink-0 flex items-center space-x-2 ${
                          activeTab === tab.id
                            ? "text-brand-primary-green border-brand-primary-green"
                            : "text-brand-smoke-gray border-transparent hover:text-brand-soft-white hover:border-brand-smoke-gray/50"
                        }`}
                      >
                        {tab.customIcon ? (
                          <Image
                            src="/images/horse-icon.svg"
                            alt="Horse"
                            width={24}
                            height={24}
                            className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${
                              activeTab === tab.id ? "text-brand-primary-green" : "text-brand-smoke-gray"
                            }`}
                            style={{
                              filter:
                                activeTab === tab.id
                                  ? "brightness(0) saturate(100%) invert(64%) sepia(98%) saturate(1000%) hue-rotate(88deg) brightness(118%) contrast(119%)"
                                  : "brightness(0) saturate(100%) invert(60%) sepia(8%) saturate(15%) hue-rotate(314deg) brightness(95%) contrast(88%)",
                            }}
                          />
                        ) : (
                          <IconComponent className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        )}
                        <span>{tab.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 xs:top-16 sm:top-18 bg-brand-charcoal-black/95 backdrop-blur-sm z-40">
          <div className="flex flex-col h-full">
            {/* Mobile Navigation */}
            {showTabs && (
              <div className="flex-1 px-3 xs:px-4 py-4 xs:py-6 overflow-y-auto">
                <div className="space-y-1 xs:space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`w-full text-left px-3 xs:px-4 py-2 xs:py-3 rounded-lg text-sm xs:text-base font-medium transition-all duration-200 block ${
                        activeTab === tab.id
                          ? "bg-brand-primary-green text-brand-charcoal-black shadow-lg"
                          : "text-brand-soft-white hover:text-brand-primary-green hover:bg-brand-charcoal-black-secondary"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Actions Footer */}
            <div className="border-t border-brand-smoke-gray/20 p-3 xs:p-4 space-y-2 xs:space-y-3 bg-brand-charcoal-black-secondary">
              <div className="grid grid-cols-2 gap-2 xs:gap-3">
                <Button
                  variant="ghost"
                  className="text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-charcoal-black justify-start px-2 xs:px-3 py-2 xs:py-3 h-auto text-xs xs:text-sm"
                >
                  <BellIcon className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2" />
                  Notifications
                </Button>
                <Button
                  variant="ghost"
                  className="text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-charcoal-black justify-start px-2 xs:px-3 py-2 xs:py-3 h-auto text-xs xs:text-sm"
                >
                  <WalletIcon className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2" />
                  Balance: $0.00
                </Button>
              </div>
              <div className="pt-1 xs:pt-2 border-t border-brand-smoke-gray/10">
                <p className="text-xs text-brand-smoke-gray text-center">
                  Welcome to ibetsports.ag - Your Premium Gaming Destination
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
