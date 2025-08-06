"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button, buttonVariants } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { MenuIcon, DoorClosedIcon as CloseIcon, UserIcon, WalletIcon, BellIcon, Dice6, Trophy, Video, CreditCard, Gift, Home } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface TopNavigationProps {
  activeTab?: string | null
  setActiveTab?: (tab: string | null) => void
  showTabs?: boolean
  onSignUpClick?: () => void
  onLoginClick?: () => void
}

export default function TopNavigation({
  activeTab = null,
  setActiveTab,
  showTabs = true,
  onSignUpClick,
  onLoginClick,
}: TopNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Load the quickmail login script
    const script = document.createElement("script")
    script.src = "https://images.betimages.com/Betslip/js/quickmail.login.js"
    script.defer = true
    document.head.appendChild(script)

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector(
        'script[src="https://images.betimages.com/Betslip/js/quickmail.login.js"]',
      )
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  useEffect(() => {
    const handleIframeLoad = () => {
      const loader = document.getElementById("signup-loader")
      if (loader) {
        loader.style.display = "none"
      }
    }

    // Add event listeners for iframe load events
    const iframes = document.querySelectorAll('iframe[title="Sign Up"]')
    iframes.forEach((iframe) => {
      iframe.addEventListener("load", handleIframeLoad)
    })

    return () => {
      iframes.forEach((iframe) => {
        iframe.removeEventListener("load", handleIframeLoad)
      })
    }
  }, [isSignUpOpen])

  const tabs = [
    { id: "casino", label: "Casino", icon: Dice6, path: "/?tab=casino" },
    { id: "sports", label: "Sports", icon: Trophy, path: "/?tab=sports" },
    { id: "racebook", label: "Racebook", icon: null, customIcon: true, path: "/?tab=racebook" },
    { id: "live-casino", label: "Live Casino", icon: Video, path: "/?tab=live-casino" },
    { id: "banking", label: "Banking", icon: CreditCard, path: "/?tab=banking" },
    { id: "promotions", label: "Promotions", icon: Gift, path: "/?tab=promotions" },
  ]

  const handleTabChange = (tabId: string, path: string) => {
    if (setActiveTab) {
      setActiveTab(tabId)
    }
    setIsMobileMenuOpen(false)
    router.push(path, { scroll: false })
  }

  const handleLogoClick = () => {
    if (setActiveTab) {
      setActiveTab(null)
    }
    setIsMobileMenuOpen(false)
    router.push("/", { scroll: false })
  }

  const handleLogin = () => {
    setIsLoginOpen(true)
  }

  const handleSignUp = () => {
    if (onSignUpClick) {
      onSignUpClick()
    } else {
      setIsSignUpOpen(true)
    }
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
                <button
                  onClick={handleLogoClick}
                  className="cursor-pointer bg-transparent border-none p-0"
                >
                  <span className="bg-gradient-to-r from-brand-primary-green via-white via-brand-vibrant-green to-brand-primary-green bg-clip-text text-transparent font-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:opacity-80 transition-opacity bg-[length:300%_100%] animate-[shimmer_2s_ease-in-out_infinite]">
                    ibetsports.ag
                  </span>
                </button>
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="default"
                      className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-4 xl:px-6 py-2 xl:py-3 h-10 xl:h-12 bg-transparent text-sm xl:text-base"
                    >
                      <UserIcon className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                      Login
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-brand-charcoal-black border-brand-primary-green">
                    <div className="p-6 relative">
                      <button
                        onClick={() => setIsLoginOpen(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                      >
                        <span className="text-xl font-bold">×</span>
                      </button>
                      <h2 className="text-2xl font-bold text-white mb-6 text-center">Login to Your Account</h2>
                      <form
                        name="Loginform"
                        className="login-form space-y-4"
                        action="javascript:void(0)"
                        onSubmit={(e) => {
                          e.preventDefault()
                          if (typeof window !== "undefined" && (window as any).BackEndLogin) {
                            ;(window as any).BackEndLogin(e.target)
                          }
                          return false
                        }}
                      >
                        <div>
                          <input
                            type="text"
                            name="username"
                            placeholder="Enter your username or email"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-primary-green focus:ring-1 focus:ring-brand-primary-green"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-primary-green focus:ring-1 focus:ring-brand-primary-green"
                            required
                          />
                        </div>
                        <small name="msj_error_lg" className="text-red-500 block min-h-[20px]"></small>
                        <input type="hidden" name="BackEndUrl" value="https://betslip.ibetsports.ag/" />
                        <input type="hidden" name="idsite" value="901" />
                        <button
                          type="submit"
                          name="btn-login"
                          className="w-full bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
                        >
                          LOGIN
                        </button>
                        <div className="text-center mt-4">
                          <a
                            href="https://betslip.ibetsports.com/home/reset-pass"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-primary-green hover:text-brand-vibrant-green text-sm transition-colors duration-300"
                          >
                            Forgot your password?
                          </a>
                        </div>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button
                  onClick={handleSignUp}
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
                <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="default"
                      className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-4 xl:px-6 py-2 xl:py-3 bg-transparent text-sm xl:text-base"
                    >
                      Login
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-brand-charcoal-black border-brand-primary-green">
                    <div className="p-6 relative">
                      <button
                        onClick={() => setIsLoginOpen(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                      >
                        <span className="text-xl font-bold">×</span>
                      </button>
                      <h2 className="text-2xl font-bold text-white mb-6 text-center">Login to Your Account</h2>
                      <form
                        name="Loginform"
                        className="login-form space-y-4"
                        action="javascript:void(0)"
                        onSubmit={(e) => {
                          e.preventDefault()
                          if (typeof window !== "undefined" && (window as any).BackEndLogin) {
                            ;(window as any).BackEndLogin(e.target)
                          }
                          return false
                        }}
                      >
                        <div>
                          <input
                            type="text"
                            name="username"
                            placeholder="Enter your username or email"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-primary-green focus:ring-1 focus:ring-brand-primary-green"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-primary-green focus:ring-1 focus:ring-brand-primary-green"
                            required
                          />
                        </div>
                        <small name="msj_error_lg" className="text-red-500 block min-h-[20px]"></small>
                        <input type="hidden" name="BackEndUrl" value="https://betslip.ibetsports.ag/" />
                        <input type="hidden" name="idsite" value="901" />
                        <button
                          type="submit"
                          name="btn-login"
                          className="w-full bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
                        >
                          LOGIN
                        </button>
                        <div className="text-center mt-4">
                          <a
                            href="https://betslip.ibetsports.com/home/reset-pass"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-primary-green hover:text-brand-vibrant-green text-sm transition-colors duration-300"
                          >
                            Forgot your password?
                          </a>
                        </div>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button
                  onClick={handleSignUp}
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
                <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-2 xs:px-3 py-1 xs:py-1.5 bg-transparent text-xs"
                    >
                      Login
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-brand-charcoal-black border-brand-primary-green">
                    <div className="p-6 relative">
                      <button
                        onClick={() => setIsLoginOpen(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                      >
                        <span className="text-xl font-bold">×</span>
                      </button>
                      <h2 className="text-2xl font-bold text-white mb-6 text-center">Login to Your Account</h2>
                      <form
                        name="Loginform"
                        className="login-form space-y-4"
                        action="javascript:void(0)"
                        onSubmit={(e) => {
                          e.preventDefault()
                          if (typeof window !== "undefined" && (window as any).BackEndLogin) {
                            ;(window as any).BackEndLogin(e.target)
                          }
                          return false
                        }}
                      >
                        <div>
                          <input
                            type="text"
                            name="username"
                            placeholder="Enter your username or email"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-primary-green focus:ring-1 focus:ring-brand-primary-green"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-primary-green focus:ring-1 focus:ring-brand-primary-green"
                            required
                          />
                        </div>
                        <small name="msj_error_lg" className="text-red-500 block min-h-[20px]"></small>
                        <input type="hidden" name="BackEndUrl" value="https://betslip.ibetsports.ag/" />
                        <input type="hidden" name="idsite" value="901" />
                        <button
                          type="submit"
                          name="btn-login"
                          className="w-full bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
                        >
                          LOGIN
                        </button>
                        <div className="text-center mt-4">
                          <a
                            href="https://betslip.ibetsports.com/home/reset-pass"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-primary-green hover:text-brand-vibrant-green text-sm transition-colors duration-300"
                          >
                            Forgot your password?
                          </a>
                        </div>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button
                  onClick={handleSignUp}
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
                        onClick={() => handleTabChange(tab.id, tab.path)}
                        className={`px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap transition-all duration-200 border-b-2 flex-shrink-0 flex items-center space-x-2 cursor-pointer ${
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
                        ) : IconComponent ? (
                          <IconComponent className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        ) : null}
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
        <div className="md:hidden fixed inset-0 top-14 xs:top-16 sm:top-18 bg-brand-charcoal-black/95 backdrop-blur-sm z-50">
          <div className="flex flex-col h-full">
            {/* Mobile Navigation */}
            {showTabs && (
              <div className="flex-1 px-3 xs:px-4 py-4 xs:py-6 overflow-y-auto">
                <div className="space-y-1 xs:space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id, tab.path)}
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
                  className="text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-charcoal-black justify-start px-2 xs:px-3 py-2 xs:py-3 h-auto text-xs:text-sm"
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
