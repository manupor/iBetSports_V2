"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trophy, Gift, Wallet, Dices, Menu, MessageCircle, X, User, Target, Video } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface TopNavigationProps {
  activeTab?: string
  setActiveTab?: (tab: string) => void
  onMenuClick?: () => void
  onChatClick?: () => void
  showTabs?: boolean
}

export function TopNavigation({
  activeTab = "home",
  setActiveTab,
  onMenuClick,
  onChatClick,
  showTabs = true,
}: TopNavigationProps) {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const tabs = [
    { id: "home", name: "Home", icon: Dices, href: "/" },
    { id: "casino", name: "Casino", icon: Dices, href: "/" },
    { id: "promotions", name: "Promotions", icon: Gift, href: "/promotions" },
    { id: "sports", name: "Sports", icon: Trophy, href: "/" },
    { id: "racebook", name: "Racebook", icon: Target, href: "/" },
    { id: "livecasino", name: "Live Casino", icon: Video, href: "/" },
    { id: "banking", name: "Banking", icon: Wallet, href: "/" },
  ]

  const handleTabClick = (tabId: string) => {
    setActiveTab?.(tabId)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Main Navigation Header */}
      <header className="bg-brand-charcoal-black-secondary/95 backdrop-blur-sm h-16 md:h-20 flex items-center justify-between px-4 md:px-12 border-b border-brand-smoke-gray/20 sticky top-0 z-30">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-brand-soft-white hover:bg-brand-charcoal-black-tertiary/30 w-10 h-10"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>

        {/* Logo */}
        <Link href="/" className="flex items-center h-full py-2">
          {" "}
          {/* Added h-full and py-2 for vertical centering */}
          <img
            src="/images/ibet-sports-logo-v2.png"
            alt="Draft Casino Logo"
            className="h-full w-auto object-contain" // Changed to h-full w-auto
          />
        </Link>

        {/* Desktop Navigation Tabs */}
        {showTabs && (
          <nav className="hidden md:flex items-center space-x-8">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                onClick={() => setActiveTab?.(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-brand-primary-green text-brand-charcoal-black shadow-lg"
                    : "text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-charcoal-black-tertiary/30"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="text-base">{tab.name}</span>
              </Link>
            ))}
          </nav>
        )}

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => setShowLoginModal(true)}
            className="border-2 border-brand-vibrant-green text-brand-vibrant-green hover:bg-brand-vibrant-green hover:text-brand-charcoal-black font-bold px-8 py-3 text-lg rounded-full bg-transparent"
          >
            Login
          </Button>
          <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark font-bold px-8 py-3 text-lg rounded-full text-black">
            Sign Up
          </Button>
        </div>

        {/* Mobile Auth & Chat Buttons */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowLoginModal(true)}
            className="text-brand-soft-white hover:bg-brand-charcoal-black-tertiary/30 w-10 h-10"
          >
            <User className="w-5 h-5" />
          </Button>
          {onChatClick && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onChatClick}
              className="text-brand-soft-white hover:bg-brand-charcoal-black-tertiary/30 w-10 h-10"
            >
              <MessageCircle className="w-5 h-5" />
            </Button>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-brand-charcoal-black-secondary border-b border-brand-smoke-gray/20 z-50 shadow-xl">
          <div className="p-4 space-y-4">
            {/* Mobile Navigation Links */}
            {showTabs && (
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-brand-smoke-gray uppercase tracking-wide px-2">Navigation</h3>
                {tabs.map((tab) => (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-brand-primary-green/20 text-brand-primary-green border border-brand-primary-green/30"
                        : "text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-charcoal-black-tertiary/30"
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="text-base">{tab.name}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Auth Buttons */}
            <div className="border-t border-brand-smoke-gray/30 pt-4 space-y-3">
              <h3 className="text-sm font-semibold text-brand-smoke-gray uppercase tracking-wide px-2">Account</h3>
              <div className="space-y-2">
                <Button
                  onClick={() => {
                    setShowLoginModal(true)
                    setMobileMenuOpen(false)
                  }}
                  variant="outline"
                  className="w-full border-brand-vibrant-green text-brand-vibrant-green hover:bg-brand-vibrant-green hover:text-brand-charcoal-black bg-transparent py-3 text-base"
                >
                  Login
                </Button>
                <Button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-soft-white font-bold py-3 text-base"
                >
                  Sign Up
                </Button>
              </div>
            </div>

            {/* Mobile Quick Links */}
            <div className="border-t border-brand-smoke-gray/30 pt-4 space-y-3">
              <h3 className="text-sm font-semibold text-brand-smoke-gray uppercase tracking-wide px-2">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { href: "/help-center", label: "Help Center" },
                  { href: "/live-chat", label: "Live Chat" },
                  { href: "/responsible-gaming", label: "Responsible Gaming" },
                  { href: "/contact-us", label: "Contact Us" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-charcoal-black-tertiary/30 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Tab Navigation */}
      {showTabs && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-charcoal-black-secondary/95 backdrop-blur-sm border-t border-brand-smoke-gray/20 z-30">
          <div className="grid grid-cols-4 gap-1 p-2">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                onClick={() => handleTabClick(tab.id)}
                className={`flex flex-col items-center space-y-1 px-2 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-brand-primary-green/20 text-brand-primary-green"
                    : "text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-charcoal-black-tertiary/30"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{tab.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-brand-charcoal-black-secondary rounded-3xl border border-brand-smoke-gray/30 w-full max-w-md relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowLoginModal(false)}
              className="absolute right-4 top-4 text-brand-smoke-gray hover:text-brand-soft-white z-10"
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-6 md:mb-8">
                <img
                  src="/images/ibet-sports-logo-v2.png"
                  alt="Draft Casino Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
                <h2 className="text-xl md:text-2xl font-bold text-brand-soft-white">Welcome Back</h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="text-center mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-brand-soft-white mb-2">Login to Your Account</h3>
                  <p className="text-brand-smoke-gray text-sm md:text-base">
                    Access all casino features and your account
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-smoke-gray mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-brand-charcoal-black border-brand-smoke-gray/50 focus:border-brand-primary-green rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-smoke-gray mb-2">Password</label>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      className="bg-brand-charcoal-black border-brand-smoke-gray/50 focus:border-brand-primary-green rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 text-brand-smoke-gray">
                    <input type="checkbox" className="rounded border-brand-smoke-gray/50" />
                    <span>Remember me</span>
                  </label>
                  <button className="text-brand-primary-green hover:underline">Forgot password?</button>
                </div>

                <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-soft-white font-bold py-3 rounded-lg">
                  Login
                </Button>

                <div className="text-center">
                  <p className="text-brand-smoke-gray text-sm">
                    Don't have an account?{" "}
                    <button className="text-brand-primary-green hover:underline font-medium">Sign up now</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
