"use client"

import type React from "react"
import { useState } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Menu, X, User, Wallet, Bell, Phone } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { cn } from "@/lib/utils"

// To inform TypeScript about the global function from the external script
declare global {
  interface Window {
    BackEndLogin: (form: HTMLFormElement) => void
  }
}

interface TopNavigationProps {
  activeTab?: string
  setActiveTab?: (tab: string) => void
  showTabs?: boolean
}

export function TopNavigation({ activeTab = "home", setActiveTab, showTabs = true }: TopNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const tabs = [
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

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (typeof window.BackEndLogin === "function") {
      try {
        window.BackEndLogin(e.currentTarget)
      } catch (error) {
        console.error("Error executing BackEndLogin:", error)
        const errorElement = e.currentTarget.querySelector('[name="msj_error_lg"]')
        if (errorElement) {
          errorElement.textContent = "An unexpected error occurred."
        }
      }
    } else {
      console.error("BackEndLogin function not found.")
      const errorElement = e.currentTarget.querySelector('[name="msj_error_lg"]')
      if (errorElement) {
        errorElement.textContent = "Login service is unavailable. Please try again later."
      }
    }
  }

  const signupUrl = "https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en"

  return (
    <>
      <nav className="bg-brand-charcoal-black border-b border-brand-smoke-gray/20 sticky top-0 z-50 backdrop-blur-sm">
        {/* Top Bar */}
        <div className="border-b border-brand-smoke-gray/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-18">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="cursor-pointer" onClick={() => setActiveTab && setActiveTab("home")}>
                  <span className="bg-gradient-to-r from-brand-primary-green via-white via-brand-vibrant-green to-brand-primary-green bg-clip-text text-transparent font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:opacity-80 transition-opacity bg-[length:300%_100%] animate-[shimmer_2s_ease-in-out_infinite]">
                    ibetsports.ag
                  </span>
                </Link>
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-4">
                <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="default"
                      className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-6 py-3 h-12 bg-transparent"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-brand-charcoal-black border border-brand-primary-green/30 text-brand-soft-white p-0 gap-0 w-[90vw] max-w-[400px] max-h-[90vh] overflow-y-auto">
                    <div className="relative p-3 sm:p-6 md:p-8">
                      <button
                        onClick={() => setIsLoginOpen(false)}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-brand-charcoal-black-secondary/80 hover:bg-brand-primary-green/20 border border-brand-primary-green/30 rounded-full flex items-center justify-center text-brand-soft-white hover:text-brand-primary-green transition-all duration-200 z-10"
                      >
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>

                      <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-brand-soft-white text-xl sm:text-2xl font-black">
                          <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                            LOGIN
                          </span>
                        </h2>
                      </div>

                      <form
                        name="LoginForm"
                        action="javascript:void(0)"
                        onSubmit={handleLoginSubmit}
                        className="space-y-4"
                      >
                        <div className="space-y-2">
                          <Label htmlFor="loginUsername" className="text-brand-soft-white font-semibold">
                            Username or Email
                          </Label>
                          <Input
                            id="loginUsername"
                            name="username"
                            type="text"
                            placeholder="Enter your username or email"
                            className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="loginPassword" className="text-brand-soft-white font-semibold">
                            Password
                          </Label>
                          <Input
                            id="loginPassword"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                            required
                          />
                        </div>

                        <small name="msj_error_lg" className="text-red-500 block min-h-[1rem]"></small>
                        <input type="hidden" name="BackEndUrl" value="https://betslip.ibetsports.ag/" />
                        <input type="hidden" name="idsite" value="901" />

                        <Button
                          type="submit"
                          name="btn-login"
                          className="w-full h-11 sm:h-12 bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black rounded-lg text-base sm:text-lg mt-4 sm:mt-6"
                        >
                          LOGIN
                        </Button>
                      </form>

                      <div className="text-center space-y-3 mt-4 sm:mt-6">
                        <p className="text-brand-soft-white text-sm sm:text-base">
                          Don't have an account?{" "}
                          <a
                            href={signupUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-primary-green hover:text-brand-vibrant-green underline font-medium cursor-pointer"
                          >
                            Sign Up
                          </a>
                        </p>
                        <p>
                          <button
                            type="button"
                            className="text-brand-primary-green hover:text-brand-vibrant-green underline text-sm sm:text-base cursor-pointer"
                          >
                            Forgot your password?
                          </button>
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-3 mt-6 sm:grid-cols-2 sm:gap-4 sm:mt-8">
                        <div className="bg-brand-primary-green rounded-lg p-3 sm:p-4 text-center">
                          <div className="flex items-center justify-center mb-1 sm:mb-2">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-black" />
                            <span className="font-bold text-sm sm:text-base lg:text-lg text-black">1 888 203 1771</span>
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-black">Wagering</p>
                        </div>
                        <div className="bg-brand-primary-green rounded-lg p-3 sm:p-4 text-center">
                          <div className="flex items-center justify-center mb-1 sm:mb-2">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-black" />
                            <span className="font-bold text-sm sm:text-base lg:text-lg text-black">1 888 210 3449</span>
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-black">Customer Service</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <a
                  href={signupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-6 py-3 h-12",
                  )}
                >
                  Sign Up
                </a>
              </div>

              {/* Tablet Actions */}
              <div className="hidden md:flex lg:hidden items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLoginOpen(true)}
                  className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-3 py-2 bg-transparent text-sm"
                >
                  Login
                </Button>
                <a
                  href={signupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-3 py-2 text-sm",
                  )}
                >
                  Sign Up
                </a>
              </div>

              {/* Mobile Actions and Menu Button */}
              <div className="flex md:hidden items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLoginOpen(true)}
                  className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-3 py-1.5 bg-transparent text-xs"
                >
                  Login
                </Button>
                <a
                  href={signupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-3 py-1.5 text-xs animate-pulse shadow-sm",
                  )}
                >
                  Join Now!
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-brand-soft-white hover:text-brand-primary-green p-2 ml-2"
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs - Desktop & Tablet */}
        {showTabs && (
          <div className="hidden md:block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center">
                <div className="flex space-x-0 overflow-x-auto scrollbar-hide">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-semibold whitespace-nowrap transition-all duration-200 border-b-2 flex-shrink-0 ${
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
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-brand-charcoal-black/95 backdrop-blur-sm z-40">
          <div className="flex flex-col h-full">
            {/* Mobile Navigation */}
            {showTabs && (
              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 block ${
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
            <div className="border-t border-brand-smoke-gray/20 p-4 space-y-3 bg-brand-charcoal-black-secondary">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="ghost"
                  className="text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-charcoal-black justify-start px-3 py-3 h-auto text-sm"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
                <Button
                  variant="ghost"
                  className="text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-charcoal-black justify-start px-3 py-3 h-auto text-sm"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Balance: $0.00
                </Button>
              </div>
              <div className="pt-2 border-t border-brand-smoke-gray/10">
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
