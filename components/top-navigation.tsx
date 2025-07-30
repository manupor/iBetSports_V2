"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Wallet, Bell, Phone } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
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
                  <span className="bg-gradient-to-r from-brand-primary-green via-white via-brand-vibrant-green to-brand-primary-green bg-clip-text text-transparent font-black text-lg sm:text-xl md:text-2xl hover:opacity-80 transition-opacity bg-[length:300%_100%] animate-[shimmer_2s_ease-in-out_infinite]">
                    ibetsports.ag
                  </span>
                </Link>
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-brand-smoke-gray hover:text-brand-soft-white px-3 py-2 h-9"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-brand-smoke-gray hover:text-brand-soft-white px-3 py-2 h-9"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  $0.00
                </Button>
                <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-4 py-2 h-9 bg-transparent"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-gray-700 border-gray-600 p-0 gap-0">
                    <div className="relative p-8">
                      {/* Close Button */}
                      <button
                        onClick={() => setIsLoginOpen(false)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>

                      {/* Login Title */}
                      <div className="text-center mb-8">
                        <h2 className="text-white text-2xl font-bold">LOGIN</h2>
                      </div>

                      {/* Login Form */}
                      <div className="space-y-4">
                        <Input
                          type="text"
                          placeholder="Enter your username or email"
                          className="w-full h-12 px-4 bg-white border-0 rounded-lg text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-brand-primary-green focus:outline-none"
                        />
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          className="w-full h-12 px-4 bg-white border-0 rounded-lg text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-brand-primary-green focus:outline-none"
                        />

                        <Button className="w-full h-12 bg-brand-primary-green hover:bg-brand-primary-green-dark font-bold rounded-full text-lg mt-6 text-black">
                          LOGIN
                        </Button>
                      </div>

                      {/* Links */}
                      <div className="text-center space-y-3 mt-6">
                        <p className="text-white">
                          Don't have an account?{" "}
                          <button
                            className="text-white hover:text-brand-primary-green underline font-medium"
                            onClick={() => {
                              setIsLoginOpen(false)
                              setIsRegisterOpen(true)
                            }}
                          >
                            Signup
                          </button>
                        </p>
                        <p>
                          <button className="text-white hover:text-brand-primary-green underline">
                            Forgot your password?
                          </button>
                        </p>
                      </div>

                      {/* Phone Numbers */}
                      <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="bg-brand-primary-green rounded-lg p-4 text-center">
                          <div className="flex items-center justify-center mb-2">
                            <Phone className="w-4 h-4 mr-2 text-black" />
                            <span className="font-bold text-lg text-black">1 888 203 1771</span>
                          </div>
                          <p className="text-sm font-medium text-black">Wagering</p>
                        </div>
                        <div className="bg-brand-primary-green rounded-lg p-4 text-center">
                          <div className="flex items-center justify-center mb-2">
                            <Phone className="w-4 h-4 mr-2 text-black" />
                            <span className="font-bold text-lg text-black">1 888 210 3449</span>
                          </div>
                          <p className="text-sm font-medium text-black">Customer Service</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-4 py-2 h-9"
                    >
                      Sign Up
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg bg-gray-700 border-gray-600 p-0 gap-0">
                    <div className="relative p-8">
                      {/* Close Button */}
                      <button
                        onClick={() => setIsRegisterOpen(false)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>

                      {/* Register Title */}
                      <div className="text-center mb-8">
                        <h2 className="text-white text-2xl font-bold">REGISTER</h2>
                      </div>

                      {/* Progress Steps */}
                      <div className="flex items-center justify-center mb-8">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-brand-primary-green rounded-full flex items-center justify-center text-black font-bold text-sm">
                            1
                          </div>
                          <div className="text-brand-primary-green text-sm font-medium ml-2">STEP 1</div>
                        </div>
                        <div className="flex-1 h-0.5 bg-gray-600 mx-4"></div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-gray-400 font-bold text-sm">
                            2
                          </div>
                          <div className="text-gray-400 text-sm font-medium ml-2">STEP 2</div>
                        </div>
                      </div>

                      {/* Registration Form */}
                      <div className="space-y-4">
                        <div className="relative">
                          <Input
                            type="text"
                            placeholder="First Name"
                            className="w-full h-12 px-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder:text-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green"
                          />
                          <label className="absolute -top-2 left-3 bg-gray-700 px-1 text-brand-primary-green text-xs">
                            First Name
                          </label>
                        </div>

                        <div className="relative">
                          <Input
                            type="text"
                            placeholder="Last Name"
                            className="w-full h-12 px-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder:text-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green"
                          />
                          <label className="absolute -top-2 left-3 bg-gray-700 px-1 text-brand-primary-green text-xs">
                            Last Name
                          </label>
                        </div>

                        <div className="relative">
                          <Input
                            type="email"
                            placeholder="Email"
                            className="w-full h-12 px-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder:text-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green"
                          />
                          <label className="absolute -top-2 left-3 bg-gray-700 px-1 text-brand-primary-green text-xs">
                            Email
                          </label>
                        </div>

                        <div className="relative">
                          <Input
                            type="email"
                            placeholder="Email Confirmation"
                            className="w-full h-12 px-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder:text-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green"
                          />
                          <label className="absolute -top-2 left-3 bg-gray-700 px-1 text-brand-primary-green text-xs">
                            Email Confirmation
                          </label>
                        </div>

                        <div className="relative">
                          <Input
                            type="password"
                            placeholder="Password"
                            className="w-full h-12 px-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder:text-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green"
                          />
                          <label className="absolute -top-2 left-3 bg-gray-700 px-1 text-brand-primary-green text-xs">
                            Password
                          </label>
                        </div>

                        <div className="relative">
                          <Input
                            type="password"
                            placeholder="Password Confirmation"
                            className="w-full h-12 px-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder:text-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green"
                          />
                          <label className="absolute -top-2 left-3 bg-gray-700 px-1 text-brand-primary-green text-xs">
                            Password Confirmation
                          </label>
                        </div>

                        <div className="relative">
                          <Input
                            type="text"
                            placeholder="Promotional Code"
                            className="w-full h-12 px-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder:text-brand-primary-green focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green"
                          />
                          <label className="absolute -top-2 left-3 bg-gray-700 px-1 text-brand-primary-green text-xs">
                            Promotional Code
                          </label>
                        </div>

                        <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 font-bold rounded-full text-lg mt-6 text-white">
                          Next
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Tablet Actions */}
              <div className="hidden md:flex lg:hidden items-center space-x-3">
                <Button variant="ghost" size="sm" className="text-brand-smoke-gray hover:text-brand-soft-white p-2">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-brand-smoke-gray hover:text-brand-soft-white p-2">
                  <Wallet className="w-4 h-4" />
                </Button>
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
                      className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
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
