"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Wallet, Bell, Phone } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

interface TopNavigationProps {
  activeTab?: string
  setActiveTab?: (tab: string) => void
  showTabs?: boolean
}

export function TopNavigation({ activeTab = "home", setActiveTab, showTabs = true }: TopNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

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

  const switchToRegister = () => {
    setIsLoginOpen(false)
    setTimeout(() => setIsRegisterOpen(true), 100)
  }

  const switchToLogin = () => {
    setIsRegisterOpen(false)
    setTimeout(() => setIsLoginOpen(true), 100)
  }

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
                  <DialogContent className="sm:max-w-md bg-brand-charcoal-black border border-brand-primary-green/30 text-brand-soft-white p-0 gap-0 max-w-[95vw] max-h-[95vh] overflow-y-auto">
                    <div className="relative p-4 sm:p-6 md:p-8">
                      {/* Close Button */}
                      <button
                        onClick={() => setIsLoginOpen(false)}
                        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-brand-soft-white hover:text-brand-primary-green transition-colors z-10"
                      >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>

                      {/* Login Title */}
                      <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-brand-soft-white text-xl sm:text-2xl font-black">
                          <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                            LOGIN
                          </span>
                        </h2>
                      </div>

                      {/* Login Form */}
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="loginUsername" className="text-brand-soft-white font-semibold">
                            Username or Email
                          </Label>
                          <Input
                            id="loginUsername"
                            type="text"
                            placeholder="Enter your username or email"
                            className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="loginPassword" className="text-brand-soft-white font-semibold">
                            Password
                          </Label>
                          <Input
                            id="loginPassword"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-10 sm:h-12 bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black rounded-lg text-base sm:text-lg mt-4 sm:mt-6"
                        >
                          LOGIN
                        </Button>
                      </form>

                      {/* Links */}
                      <div className="text-center space-y-3 mt-4 sm:mt-6">
                        <p className="text-brand-soft-white text-sm sm:text-base">
                          Don't have an account?{" "}
                          <button
                            type="button"
                            className="text-brand-primary-green hover:text-brand-vibrant-green underline font-medium cursor-pointer"
                            onClick={switchToRegister}
                          >
                            Sign Up
                          </button>
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

                      {/* Phone Numbers */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                        <div className="bg-brand-primary-green rounded-lg p-3 sm:p-4 text-center">
                          <div className="flex items-center justify-center mb-2">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-black" />
                            <span className="font-bold text-sm sm:text-base lg:text-lg text-black">1 888 203 1771</span>
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-black">Wagering</p>
                        </div>
                        <div className="bg-brand-primary-green rounded-lg p-3 sm:p-4 text-center">
                          <div className="flex items-center justify-center mb-2">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-black" />
                            <span className="font-bold text-sm sm:text-base lg:text-lg text-black">1 888 210 3449</span>
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-black">Customer Service</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="default"
                      className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-6 py-3 h-12"
                    >
                      Sign Up
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg bg-brand-charcoal-black border border-brand-primary-green/30 text-brand-soft-white p-0 gap-0 max-w-[95vw] max-h-[95vh] overflow-y-auto">
                    <div className="relative p-4 sm:p-6 md:p-8">
                      {/* Close Button */}
                      <button
                        onClick={() => setIsRegisterOpen(false)}
                        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-brand-soft-white hover:text-brand-primary-green transition-colors z-10"
                      >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>

                      {/* Register Title */}
                      <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-brand-soft-white text-xl sm:text-2xl font-black">
                          <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                            CREATE YOUR ACCOUNT
                          </span>
                        </h2>
                      </div>

                      {/* Registration Form */}
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-brand-soft-white font-semibold">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="Enter your first name"
                            className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder-brand-smoke-gray focus:border-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none rounded-lg h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-brand-soft-white font-semibold">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Enter your last name"
                            className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder-brand-smoke-gray focus:border-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none rounded-lg h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-brand-soft-white font-semibold">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder-brand-smoke-gray focus:border-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none rounded-lg h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="emailConfirmation" className="text-brand-soft-white font-semibold">
                            Confirm Email
                          </Label>
                          <Input
                            id="emailConfirmation"
                            type="email"
                            placeholder="Confirm your email"
                            className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder-brand-smoke-gray focus:border-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none rounded-lg h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="password" className="text-brand-soft-white font-semibold">
                            Password
                          </Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="Create a password"
                            className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder-brand-smoke-gray focus:border-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none rounded-lg h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="passwordConfirmation" className="text-brand-soft-white font-semibold">
                            Confirm Password
                          </Label>
                          <Input
                            id="passwordConfirmation"
                            type="password"
                            placeholder="Confirm your password"
                            className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder-brand-smoke-gray focus:border-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none rounded-lg h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="promotionalCode" className="text-brand-soft-white font-semibold">
                            Promotional Code (Optional)
                          </Label>
                          <Input
                            id="promotionalCode"
                            type="text"
                            placeholder="Enter promotional code"
                            className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder-brand-smoke-gray focus:border-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none rounded-lg h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="terms"
                            className="w-4 h-4 text-brand-primary-green bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded focus:ring-brand-primary-green"
                            required
                          />
                          <Label htmlFor="terms" className="text-sm text-brand-smoke-gray">
                            I agree to the{" "}
                            <span className="text-brand-primary-green hover:underline cursor-pointer">
                              Terms & Conditions
                            </span>
                          </Label>
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-10 sm:h-12 bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black rounded-lg text-base sm:text-lg mt-4 sm:mt-6"
                        >
                          CREATE ACCOUNT
                        </Button>
                      </form>
                      <div className="text-center mt-4 sm:mt-6">
                        <p className="text-sm text-brand-smoke-gray">
                          Already have an account?{" "}
                          <button
                            type="button"
                            className="text-brand-primary-green hover:text-brand-vibrant-green underline cursor-pointer font-semibold"
                            onClick={switchToLogin}
                          >
                            Sign In
                          </button>
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Tablet Actions */}
              <div className="hidden md:flex lg:hidden items-center space-x-3">
                <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-3 py-2 bg-transparent text-sm"
                    >
                      Login
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-3 py-2 text-sm"
                    >
                      Sign Up
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>

              {/* Mobile Actions and Menu Button */}
              <div className="flex md:hidden items-center space-x-2">
                <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-3 py-1.5 bg-transparent text-xs"
                    >
                      Login
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-3 py-1.5 text-xs animate-pulse shadow-sm"
                    >
                      Join Now!
                    </Button>
                  </DialogTrigger>
                </Dialog>
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
                    <Link
                      key={tab.id}
                      href={setActiveTab ? "#" : `/?tab=${tab.id}`}
                      onClick={() => handleTabChange(tab.id)}
                      className={`px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-semibold whitespace-nowrap transition-all duration-200 border-b-2 flex-shrink-0 ${
                        activeTab === tab.id
                          ? "text-brand-primary-green border-brand-primary-green"
                          : "text-brand-smoke-gray border-transparent hover:text-brand-soft-white hover:border-brand-smoke-gray/50"
                      }`}
                    >
                      {tab.label}
                    </Link>
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
                    <Link
                      key={tab.id}
                      href={setActiveTab ? "#" : `/?tab=${tab.id}`}
                      onClick={() => handleTabChange(tab.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 block ${
                        activeTab === tab.id
                          ? "bg-brand-primary-green text-brand-charcoal-black shadow-lg"
                          : "text-brand-soft-white hover:text-brand-primary-green hover:bg-brand-charcoal-black-secondary"
                      }`}
                    >
                      {tab.label}
                    </Link>
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
