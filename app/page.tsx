"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Play,
  Gift,
  Gem,
  BarChart,
  Filter,
  SortDesc,
  Eye,
  ChevronRight,
  RefreshCw,
  Zap,
  Crown,
  Shield,
  Clock,
} from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { SideNav } from "@/components/side-nav"
import { ChatSidebar } from "@/components/chat-sidebar"
import { SportsbookContent } from "@/components/sportsbook-content"
import { BankingContent } from "@/components/banking-content"
import { Footer } from "@/components/footer"

// Main component with tab-based navigation
export default function Page() {
  const [activeTab, setActiveTab] = useState("casino")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="bg-black min-h-screen text-brand-soft-white font-poppins">
      {/* Top Navigation Bar */}
      <TopNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        onChatClick={() => setChatOpen(!chatOpen)}
      />

      {/* Main Layout */}
      <div className="flex">
        {/* Overlay Sidebar - Only shows when opened */}
        {sidebarOpen && (
          <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(false)} />
            <div className="fixed left-0 top-0 h-full w-80 md:w-80 w-full bg-brand-charcoal-black-secondary z-50 transform transition-transform">
              <SideNav onClose={() => setSidebarOpen(false)} />
            </div>
          </>
        )}

        {/* Main Content - Full Width with bottom padding for mobile tabs */}
        <main className="flex-1 min-h-screen pb-20 md:pb-0">
          {activeTab === "casino" && <CasinoContent />}
          {activeTab === "promotions" && <PromotionsContent />}
          {activeTab === "sportsbook" && <SportsbookContent />}
          {activeTab === "banking" && <BankingContent />}
          <Footer />
        </main>

        {/* Overlay Chat - Only shows when opened */}
        {chatOpen && (
          <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setChatOpen(false)} />
            <div className="fixed right-0 top-0 h-full w-80 md:w-80 w-full bg-brand-charcoal-black-secondary z-50 transform transition-transform">
              <ChatSidebar onClose={() => setChatOpen(false)} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// Casino Content with Enhanced Hero
function CasinoContent() {
  const [timeLeft, setTimeLeft] = useState({ hours: 45, minutes: 56, seconds: 23 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          seconds = 59
          minutes--
        } else if (hours > 0) {
          seconds = 59
          minutes = 59
          hours--
        } else {
          clearInterval(timer)
        }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const originalGames = [
    { name: "Cases", image: "/images/originals-cases.png", players: "2.1K" },
    { name: "Slots", image: "/images/originals-slots.png", players: "5.2K" },
    { name: "Crash", image: "/images/originals-crash.png", players: "3.8K" },
    { name: "Coinflip", image: "/images/originals-coinflip.png", players: "1.5K" },
    { name: "Mines", image: "/images/originals-mines.png", players: "2.9K" },
  ]

  const popularSlots = [
    { name: "Golden Reels", image: "/images/slot-golden-reels.png", rtp: "96.5%" },
    { name: "Blackjack Pro", image: "/images/slot-blackjack-pro.png", rtp: "99.4%" },
    { name: "European Roulette", image: "/images/slot-european-roulette.png", rtp: "97.3%" },
    { name: "Texas Hold'em", image: "/images/slot-texas-holdem.png", rtp: "98.1%" },
    { name: "Winner's Fortune", image: "/images/slot-winners-fortune.png", rtp: "95.8%" },
  ]

  const bets = [
    { user: "abirdesigns", game: "Mines", time: "7:49 PM", amount: 2893.0, mult: 1.032, profit: 92.58 },
    { user: "CryptoKing", game: "Crash", time: "7:48 PM", amount: 1250.0, mult: 2.45, profit: 1812.5 },
    { user: "LuckyPlayer", game: "Slots", time: "7:47 PM", amount: 500.0, mult: 0.0, profit: -500.0 },
    { user: "HighRoller", game: "Blackjack", time: "7:46 PM", amount: 5000.0, mult: 1.5, profit: 2500.0 },
    { user: "SlotMaster", game: "Roulette", time: "7:45 PM", amount: 750.0, mult: 35.0, profit: 26250.0 },
    { user: "BetKing", game: "Poker", time: "7:44 PM", amount: 1200.0, mult: 0.0, profit: -1200.0 },
    { user: "WinnerX", game: "Crash", time: "7:43 PM", amount: 300.0, mult: 5.2, profit: 1560.0 },
    { user: "ProGamer", game: "Mines", time: "7:42 PM", amount: 2000.0, mult: 2.1, profit: 4200.0 },
    { user: "CasinoAce", game: "Slots", time: "7:41 PM", amount: 450.0, mult: 12.5, profit: 5625.0 },
    { user: "BigBetter", game: "Blackjack", time: "7:40 PM", amount: 3500.0, mult: 1.5, profit: 5250.0 },
    { user: "LuckyStar", game: "Roulette", time: "7:39 PM", amount: 800.0, mult: 0.0, profit: -800.0 },
    { user: "MegaWin", game: "Crash", time: "7:38 PM", amount: 1500.0, mult: 8.7, profit: 13050.0 },
  ]

  return (
    <div>
      {/* Hero Section - Different layout for mobile vs desktop */}
      <div className="relative w-full">
        {/* Desktop Hero - Text overlay on image */}
        <div className="hidden md:block relative w-full h-[60vh] overflow-hidden bg-black">
          <div className="absolute inset-0 bg-black" />
          <Image
            src="/images/hero4.jpg"
            alt="STAKE - Three football players with dramatic green neon effects and stadium background"
            width={1200}
            height={600}
            className="absolute bottom-0 right-0 w-4/5 h-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-brand-primary-green/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/5 w-24 h-24 border border-brand-vibrant-green/30 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-brand-vibrant-green/25 rounded-full animate-ping"></div>
          </div>

          {/* Desktop Bonus Expires box */}
          <div className="absolute bottom-8 right-12 z-20">
            <div className="bg-black/90 backdrop-blur-xl p-4 rounded-xl border border-brand-primary-green/40 shadow-xl">
              <div className="flex items-center space-x-2 mb-3">
                <Gift className="w-4 h-4 text-brand-vibrant-green" />
                <span className="text-brand-soft-white font-bold text-sm">Bonus Expires</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-brand-primary-green/20 p-2 rounded text-center">
                  <div className="text-lg font-bold text-brand-primary-green">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-brand-smoke-gray">HRS</div>
                </div>
                <div className="bg-brand-vibrant-green/20 p-2 rounded text-center">
                  <div className="text-lg font-bold text-brand-vibrant-green">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-brand-smoke-gray">MIN</div>
                </div>
                <div className="bg-brand-vibrant-green/20 p-2 rounded text-center">
                  <div className="text-lg font-bold text-brand-vibrant-green">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-brand-smoke-gray">SEC</div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Hero text content */}
          <div className="absolute top-1/3 left-0 z-10 w-full max-w-3xl px-12 lg:px-24 text-left">
            <div className="space-y-4 md:space-y-6 mb-16">
              <h1 className="text-4xl lg:text-5xl font-black leading-none tracking-tight">
                <div className="text-brand-soft-white">125% SIGN UP BONUS</div>
                <div className="text-brand-vibrant-green">+ CRYPTO BOOST !</div>
              </h1>
              <p className="text-xl lg:text-2xl text-brand-smoke-gray font-medium leading-relaxed max-w-xl">
                <span className="text-brand-vibrant-green font-bold">QUICK PAYOUTS</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Hero - Image above, text below */}
        <div className="md:hidden">
          {/* Mobile Image Section */}
          <div className="relative w-full h-[35vh] overflow-hidden">
            <Image
              src="/images/hero-mobile-stake.png"
              alt="STAKE - Three football players with dramatic green effects and sports betting interface"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Subtle overlay for mobile */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Mobile floating particles - simplified */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-primary-green/40 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-brand-vibrant-green/50 rounded-full animate-bounce"></div>
              <div className="absolute bottom-1/3 left-1/6 w-4 h-4 bg-brand-vibrant-green/30 rounded-full animate-ping"></div>
            </div>

            {/* Mobile Bonus Expires box - top right */}
            <div className="absolute top-4 right-3 z-20">
              <div className="bg-black/90 backdrop-blur-xl p-2 rounded-lg border border-brand-primary-green/40 shadow-xl">
                <div className="flex items-center space-x-1 mb-1">
                  <Gift className="w-3 h-3 text-brand-vibrant-green" />
                  <span className="text-brand-soft-white font-bold text-xs">Bonus Expires</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <div className="bg-brand-primary-green/20 p-1 rounded text-center">
                    <div className="text-xs font-bold text-brand-primary-green">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-brand-smoke-gray">HRS</div>
                  </div>
                  <div className="bg-brand-vibrant-green/20 p-1 rounded text-center">
                    <div className="text-xs font-bold text-brand-vibrant-green">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-brand-smoke-gray">MIN</div>
                  </div>
                  <div className="bg-brand-vibrant-green/20 p-1 rounded text-center">
                    <div className="text-xs font-bold text-brand-vibrant-green">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-brand-smoke-gray">SEC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Text Section - Below image */}
          <div className="bg-brand-charcoal-black px-4 py-6">
            <div className="text-center space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight tracking-tight">
                <div className="text-brand-soft-white">125% SIGN UP BONUS</div>
                <div className="text-brand-vibrant-green">+ CRYPTO BOOST !</div>
              </h1>
              <p className="text-base sm:text-lg text-brand-smoke-gray font-medium">
                <span className="text-brand-vibrant-green font-bold">QUICK PAYOUTS</span>
              </p>
              {/* Optional CTA button for mobile */}
              <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-soft-white font-bold px-8 py-3 text-lg rounded-full mt-4">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* PROMOTIONS SECTION - Similar to BetUS layout */}
      <div className="w-full py-4 md:py-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white">PROMOTIONS</h2>
            <Button
              variant="outline"
              className="text-brand-primary-green border-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black text-sm md:text-base bg-transparent"
            >
              SEE ALL PROMOTIONS →
            </Button>
          </div>

          {/* Promotions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Crypto Bonus */}
            <Card
              className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col relative overflow-hidden"
              style={{
                backgroundImage: "url(/images/crypto-bull-neon.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="text-center space-y-4 flex-1 relative z-15">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-brand-primary-green/10 rounded-full flex items-center justify-center">
                  <Gem className="w-8 h-8 md:w-10 md:h-10 text-brand-primary-green" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-brand-primary-green">200%</div>
                  <div className="text-lg md:text-xl font-bold text-brand-soft-white">CRYPTO BONUS</div>
                  <div className="text-sm md:text-base text-brand-soft-white font-medium mt-2">
                    Get up to $5,000 bonus on your crypto deposits
                  </div>
                </div>
              </div>
              <Button
                onClick={() => window.open("/promotions", "_blank")}
                className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark font-bold py-3 mt-4 text-black relative z-20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                CLAIM NOW
              </Button>
            </Card>

            {/* Sign Up Bonus */}
            <Card
              className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col relative overflow-hidden"
              style={{
                backgroundImage: "url(/images/signup-bonus-celebration.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="text-center space-y-4 flex-1 relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-brand-vibrant-green/10 rounded-full flex items-center justify-center">
                  <Gift className="w-8 h-8 md:w-10 md:h-10 text-brand-vibrant-green" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-brand-vibrant-green">125%</div>
                  <div className="text-lg md:text-xl font-bold text-brand-soft-white">SIGN UP BONUS</div>
                  <div className="text-sm md:text-base text-brand-soft-white font-medium mt-2">
                    Welcome bonus on your first 3 deposits
                  </div>
                </div>
              </div>
              <Button
                onClick={() => window.open("/promotions", "_blank")}
                className="w-full bg-brand-vibrant-green hover:bg-brand-vibrant-green-dark text-brand-charcoal-black font-bold py-3 mt-4 relative z-20"
              >
                GET STARTED
              </Button>
            </Card>

            {/* Casino Bonus */}
            <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="text-center space-y-4 flex-1">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-brand-primary-green/10 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 md:w-10 md:h-10 text-brand-primary-green" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-brand-primary-green">200%</div>
                  <div className="text-lg md:text-xl font-bold text-brand-soft-white">CASINO BONUS</div>
                  <div className="text-sm md:text-base text-brand-smoke-gray mt-2">
                    Exclusive casino bonus + free spins
                  </div>
                </div>
              </div>
              <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark font-bold py-3 mt-4 text-black">
                PLAY NOW
              </Button>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-brand-smoke-gray/30">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-brand-primary-green" />
              <span className="text-brand-soft-white font-medium">Licensed & Secure</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="w-6 h-6 text-brand-vibrant-green" />
              <span className="text-brand-soft-white font-medium">Instant Withdrawals</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-brand-primary-green" />
              <span className="text-brand-soft-white font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* GAMING OPTIONS SECTION */}
      <div className="w-full bg-brand-charcoal-black py-4 md:py-0.5">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white">GAMING OPTIONS</h2>
            <Button
              variant="outline"
              className="text-brand-primary-green border-brand-primary-green hover:bg-brand-primary-green hover:text-white text-sm md:text-base bg-transparent"
            >
              SEE ALL OPTIONS →
            </Button>
          </div>

          {/* Gaming Options Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              {
                title: "Sports Betting",
                desc: "Live odds & instant payouts",
                image: "/images/thrill-sports-betting.png",
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Premium Slots",
                desc: "500+ games with mega jackpots",
                image: "/images/thrill-premium-slots.png",
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Table Games",
                desc: "Classic casino experience",
                image: "/images/thrill-table-games.png",
                color: "from-green-500 to-green-600",
              },
              {
                title: "VIP Lounge",
                desc: "Exclusive high-roller games",
                image: "/images/thrill-vip-lounge.png",
                color: "from-yellow-500 to-yellow-600",
              },
              {
                title: "Live Casino",
                desc: "Real dealers, real time",
                image: "/images/thrill-premium-slots.png",
                color: "from-red-500 to-red-600",
              },
            ].map((option, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-brand-charcoal-black-secondary border border-brand-primary-green/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={option.image || "/placeholder.svg"}
                    alt={option.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${option.color} opacity-80`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Content - Fixed positioning for consistent alignment */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    {/* Button container - Always at bottom */}
                    <div className="mb-3 md:mb-4">
                      <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark font-bold px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm text-black">
                        <Play className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Play Now
                      </Button>
                    </div>

                    {/* Title container - Fixed height for alignment */}
                    <div className="h-12 md:h-16 flex flex-col justify-center">
                      <h3 className="text-white font-bold text-sm md:text-lg mb-1 drop-shadow-lg leading-tight">
                        {option.title}
                      </h3>
                      <p className="text-white/90 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
                        {option.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* ONLINE CASINO SECTION - Dark Green Background */}
      {/* ONLINE CASINO SECTION - Black Background with Casino Elements */}
      <div className="w-full relative bg-brand-charcoal-black py-6 md:py-10 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/casino-background.png"
            alt="Casino background with money, cards, chips and dice"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 text-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-soft-white">ONLINE CASINO</h2>
            <p className="text-xl md:text-2xl text-brand-smoke-gray max-w-3xl mx-auto">
              Experience the thrill of our premium casino games with the highest RTPs and biggest jackpots
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark font-bold px-8 py-4 text-lg text-black">
                PLAY CASINO GAMES
              </Button>
              <Button
                variant="outline"
                className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-soft-white px-8 py-4 text-lg bg-transparent"
              >
                SEE ALL GAMES
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections - Mobile optimized */}
      <div className="px-3 sm:px-4 md:px-12 py-6 sm:py-8 md:py-12 bg-brand-charcoal-black space-y-6 sm:space-y-8 md:space-y-12">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
          {/* Originals Section - Mobile optimized */}
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
              <div className="mb-3 sm:mb-4 md:mb-0">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-1 sm:mb-2 md:mb-4 text-brand-soft-white">
                  Draft Originals
                </h3>
                <p className="text-brand-smoke-gray text-base sm:text-lg md:text-xl">
                  Exclusive in-house games with the highest RTPs
                </p>
              </div>
              <Button
                variant="outline"
                className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-soft-white bg-transparent px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg self-start"
              >
                View All <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 md:ml-3" />
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-8">
              {originalGames.map((game) => (
                <Card
                  key={game.name}
                  className="p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden min-h-[150px] sm:min-h-[200px] md:min-h-[280px] flex flex-col justify-end"
                >
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    fill
                    className="object-cover absolute inset-0 z-0 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                  <div className="relative z-20 text-brand-soft-white">
                    <span className="font-bold text-sm sm:text-lg md:text-2xl">{game.name}</span>
                    <div className="text-xs md:text-sm bg-black/20 px-2 md:px-4 py-1 rounded-full mt-1 sm:mt-2 md:mt-3 inline-block">
                      {game.players} playing
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30">
                    <Button className="bg-brand-primary-green text-brand-soft-white font-bold hover:bg-brand-primary-green-dark px-3 sm:px-4 md:px-8 py-2 md:py-4 text-xs sm:text-sm md:text-lg">
                      <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 md:mr-3" />
                      Play Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Slots Section - Mobile optimized */}
          <div>
            <div className="mb-3 sm:mb-4 md:mb-0">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-1 sm:mb-2 md:mb-4 text-brand-soft-white">
                Popular Slots
              </h3>
              <p className="text-brand-smoke-gray text-base sm:text-lg md:text-xl">Most played games this week</p>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button
                variant="ghost"
                className="text-brand-smoke-gray hover:text-brand-soft-white px-2 sm:px-3 md:px-6 py-2 md:py-3 text-xs sm:text-sm md:text-lg"
              >
                <Filter className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 md:mr-3" />
                Filter
              </Button>
              <Button
                variant="ghost"
                className="text-brand-smoke-gray hover:text-brand-soft-white px-2 sm:px-3 md:px-6 py-2 md:py-3 text-xs sm:text-sm md:text-lg"
              >
                <SortDesc className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:w-5 mr-1 sm:mr-2 md:mr-3" />
                Sort
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-8">
            {popularSlots.map((game) => (
              <div key={game.name} className="group relative">
                <div
                  className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden relative"
                  style={
                    game.name === "European Roulette"
                      ? {
                          backgroundImage: "url(/images/european-roulette-bg.jpg)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : {}
                  }
                >
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    width={300}
                    height={400}
                    className="object-cover w-full h-32 sm:h-48 md:h-96 group-hover:scale-110 transition-transform duration-300"
                  />
                  {game.name === "European Roulette" && <div className="absolute inset-0 bg-black/30"></div>}
                  <div className="absolute top-1 sm:top-2 md:top-4 right-1 sm:right-2 md:right-4">
                    <Badge className="bg-black/70 text-brand-soft-white px-1 sm:px-2 md:px-3 py-1 md:py-2 text-xs">
                      RTP {game.rtp}
                    </Badge>
                  </div>
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={
                      game.name === "European Roulette"
                        ? {
                            backgroundImage: "url(/images/european-roulette-bg.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                          }
                        : { backgroundColor: "rgba(0, 0, 0, 0.7)" }
                    }
                  >
                    <div
                      className="absolute inset-0 bg-black/70"
                      style={
                        game.name === "European Roulette"
                          ? {
                              backgroundImage: "url(/images/european-roulette-bg.jpg)",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }
                          : {}
                      }
                    ></div>
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-soft-white font-bold mb-1 sm:mb-2 md:mb-4 px-3 sm:px-4 md:px-8 py-1 sm:py-2 md:py-4 text-xs sm:text-sm md:text-lg">
                        <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 md:mr-3" />
                        Play
                      </Button>
                      <Button
                        variant="ghost"
                        className="text-brand-soft-white hover:text-brand-primary-green px-2 sm:px-3 md:px-6 py-1 sm:py-2 md:py-3 text-xs sm:text-sm"
                      >
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-2 sm:mt-3 md:mt-6">
                  <h4 className="font-semibold text-brand-soft-white text-sm sm:text-base md:text-xl">{game.name}</h4>
                  <p className="text-brand-smoke-gray text-xs sm:text-sm md:text-lg">RTP: {game.rtp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Bets Section - Mobile optimized */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
            <div className="mb-3 sm:mb-4 md:mb-0">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-1 sm:mb-2 md:mb-4 text-brand-soft-white">
                Live Bets
              </h3>
              <p className="text-brand-smoke-gray text-base sm:text-lg md:text-xl">Real-time betting activity</p>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button className="bg-brand-charcoal-black-tertiary text-brand-soft-white px-2 sm:px-3 md:px-6 py-2 md:py-3 text-xs sm:text-sm md:text-lg">
                <BarChart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 md:mr-3" /> All Bets
              </Button>
              <Button
                variant="ghost"
                className="text-brand-smoke-gray hover:text-brand-soft-white px-2 sm:px-3 md:px-6 py-2 md:py-3 text-xs sm:text-sm md:text-lg"
              >
                <Trophy className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 md:mr-3" /> Big Wins
              </Button>
            </div>
          </div>
          <div className="bg-brand-charcoal-black-secondary/30 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl border border-brand-smoke-gray/20 overflow-hidden">
            {/* Mobile version - Enhanced */}
            <div className="md:hidden space-y-3 sm:space-y-4 p-3 sm:p-4">
              {bets.slice(0, 8).map((bet, index) => (
                <div
                  key={index}
                  className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-3 sm:p-4 rounded-lg sm:rounded-xl"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-brand-primary-green to-brand-vibrant-green rounded-full"></div>
                      <div>
                        <span className="font-bold text-brand-soft-white text-xs sm:text-sm">{bet.user}</span>
                        <div className="text-brand-smoke-gray text-xs">{bet.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Gem className="w-3 h-3 sm:w-4 sm:h-4 text-brand-primary-green" />
                      <span className="text-brand-soft-white text-xs sm:text-sm">{bet.game}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div>
                      <div className="text-brand-smoke-gray text-xs">Bet</div>
                      <div className="font-bold text-brand-soft-white text-xs sm:text-sm">${bet.amount.toFixed(0)}</div>
                    </div>
                    <div>
                      <div className="text-brand-smoke-gray text-xs">Mult</div>
                      <div
                        className={`font-bold text-xs sm:text-sm ${bet.mult > 1 ? "text-brand-primary-green" : bet.mult === 0 ? "text-brand-primary-green" : "text-brand-soft-white"}`}
                      >
                        {bet.mult > 0 ? `${bet.mult.toFixed(2)}x` : "BUST"}
                      </div>
                    </div>
                    <div>
                      <div className="text-brand-smoke-gray text-xs">Profit</div>
                      <div
                        className={`font-bold text-xs sm:text-sm ${bet.profit > 0 ? "text-brand-primary-green" : "text-brand-primary-green"}`}
                      >
                        {bet.profit > 0 ? "+" : ""}${bet.profit.toFixed(0)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop table - unchanged */}
            <table className="hidden md:table w-full">
              <thead className="bg-brand-charcoal-black-tertiary/20">
                <tr className="text-brand-smoke-gray uppercase text-lg">
                  <th className="p-8 text-left">Player</th>
                  <th className="p-8 text-left">Game</th>
                  <th className="p-8 text-left">Time</th>
                  <th className="p-8 text-left">Bet Amount</th>
                  <th className="p-8 text-left">Multiplier</th>
                  <th className="p-8 text-left">Profit</th>
                </tr>
              </thead>
              <tbody>
                {bets.map((bet, index) => (
                  <tr
                    key={index}
                    className="border-b border-brand-smoke-gray/10 hover:bg-brand-charcoal-black-tertiary/10 transition-colors"
                  >
                    <td className="p-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-primary-green to-brand-vibrant-green rounded-full"></div>
                        <span className="font-bold text-brand-soft-white text-lg">{bet.user}</span>
                      </div>
                    </td>
                    <td className="p-8">
                      <div className="flex items-center space-x-3">
                        <Gem className="w-5 h-5 text-brand-primary-green" />
                        <span className="text-brand-soft-white text-lg">{bet.game}</span>
                      </div>
                    </td>
                    <td className="p-8 text-brand-smoke-gray text-lg">{bet.time}</td>
                    <td className="p-8 font-bold text-brand-soft-white text-lg">${bet.amount.toFixed(2)}</td>
                    <td
                      className={`p-8 font-bold text-lg ${
                        bet.mult > 1
                          ? "text-brand-primary-green"
                          : bet.mult === 0
                            ? "text-brand-primary-green"
                            : "text-brand-soft-white"
                      }`}
                    >
                      {bet.mult > 0 ? `${bet.mult.toFixed(2)}x` : "BUST"}
                    </td>
                    <td
                      className={`p-8 font-bold text-lg ${
                        bet.profit > 0 ? "text-brand-primary-green" : "text-brand-primary-green"
                      }`}
                    >
                      {bet.profit > 0 ? "+" : ""}${bet.profit.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

// Promotions Content
function PromotionsContent() {
  const promotions = [
    {
      title: "Welcome Bonus",
      description: "Get up to $5,000 + 200 Free Spins",
      type: "New Players",
      value: "$5,000",
      icon: Gift,
      expires: "No Expiry",
      code: "WELCOME5K",
      color: "from-brand-primary-green to-brand-primary-green-dark",
    },
    {
      title: "Daily Cashback",
      description: "10% cashback on all losses",
      type: "Daily",
      value: "10%",
      icon: RefreshCw,
      expires: "Daily Reset",
      code: "CASHBACK10",
      color: "from-brand-primary-green to-brand-primary-green-dark",
    },
    {
      title: "Weekend Reload",
      description: "50% bonus up to $1,000",
      type: "Weekend",
      value: "$1,000",
      icon: Zap,
      expires: "2 days",
      code: "WEEKEND50",
      color: "from-brand-primary-green to-brand-primary-green-dark",
    },
    {
      title: "VIP Exclusive",
      description: "Monthly bonus for VIP members",
      type: "VIP Only",
      value: "$2,500",
      icon: Crown,
      expires: "Monthly",
      code: "VIP2500",
      color: "from-brand-vibrant-green to-brand-vibrant-green-dark",
    },
  ]

  const tournaments = [
    { name: "Slot Tournament", prize: "$50,000", participants: "2,847", timeLeft: "2d 14h", status: "Active" },
    { name: "Blackjack Championship", prize: "$25,000", participants: "1,234", timeLeft: "5d 8h", status: "Active" },
    { name: "Crypto Cup", prize: "$100,000", participants: "5,621", timeLeft: "Starting Soon", status: "Upcoming" },
  ]

  return (
    <div className="px-4 md:px-12 py-12 md:py-20 bg-brand-charcoal-black">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        <div className="text-center space-y-6 md:space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-brand-soft-white">Amazing</span>{" "}
            <span className="bg-gradient-to-r from-brand-vibrant-green to-brand-primary-green bg-clip-text text-transparent">
              Promotions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-smoke-gray max-w-3xl mx-auto">
            Boost your gameplay with our exclusive bonuses, cashback offers, and exciting tournaments
          </p>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
            <div className="mb-4 md:mb-0">
              <h3 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-brand-soft-white">Active Promotions</h3>
              <p className="text-brand-smoke-gray text-lg md:text-xl">Claim your bonuses now</p>
            </div>
            <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-soft-white font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg self-start">
              <Gift className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
              View All Offers
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {promotions.map((promo, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${promo.color} p-6 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className="flex items-center space-x-3">
                      <promo.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-soft-white" />
                      <Badge className="bg-black/20 text-brand-soft-white px-2 md:px-3 py-1">{promo.type}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-brand-soft-white">{promo.value}</div>
                      <div className="text-xs md:text-sm opacity-80 text-brand-soft-white">Max Bonus</div>
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-xl md:text-2xl font-bold text-brand-soft-white">{promo.title}</h4>
                    <p className="text-base md:text-lg opacity-90 text-brand-soft-white">{promo.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-xs md:text-sm opacity-80 text-brand-soft-white">Promo Code</div>
                        <div className="font-bold bg-black/20 px-2 md:px-3 py-1 rounded-lg inline-block text-sm text-brand-soft-white">
                          {promo.code}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs md:text-sm opacity-80 text-brand-soft-white">Expires</div>
                        <div className="font-bold text-sm text-brand-soft-white">{promo.expires}</div>
                      </div>
                    </div>
                    <Button className="w-full bg-black/20 hover:bg-black/30 text-brand-soft-white font-bold py-2 md:py-3 mt-4 md:mt-6">
                      Claim Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
            <div className="mb-4 md:mb-0">
              <h3 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-brand-soft-white">Tournaments</h3>
              <p className="text-brand-smoke-gray text-lg md:text-xl">Compete for massive prizes</p>
            </div>
            <Button
              variant="outline"
              className="border-brand-vibrant-green text-brand-vibrant-green hover:bg-brand-vibrant-green hover:text-brand-charcoal-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-transparent self-start"
            >
              <Trophy className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
              All Tournaments
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {tournaments.map((tournament, index) => (
              <div
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 md:p-8 rounded-2xl md:rounded-3xl"
              >
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl md:text-2xl font-bold text-brand-soft-white">{tournament.name}</h4>
                    <Badge
                      className={`${tournament.status === "Active" ? "bg-brand-primary-green/20 text-brand-primary-green border-brand-primary-green/30" : "bg-brand-vibrant-green/20 text-brand-vibrant-green border-brand-vibrant-green/30"}`}
                    >
                      {tournament.status}
                    </Badge>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-brand-smoke-gray">Prize Pool</span>
                      <span className="text-xl md:text-2xl font-bold text-brand-vibrant-green">{tournament.prize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-brand-smoke-gray">Participants</span>
                      <span className="text-brand-soft-white font-bold">{tournament.participants}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-brand-smoke-gray">Time Left</span>
                      <span className="text-brand-soft-white font-bold">{tournament.timeLeft}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-soft-white font-bold py-2 md:py-3">
                    {tournament.status === "Active" ? "Join Tournament" : "Register Now"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand-charcoal-black-secondary/50 to-brand-charcoal-black-tertiary/50 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-brand-vibrant-green/20">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-center space-y-3 md:space-y-0 md:space-x-3">
              <Crown className="w-10 h-10 md:w-12 md:h-12 text-brand-vibrant-green" />
              <h3 className="text-3xl md:text-5xl font-bold text-brand-soft-white">VIP Loyalty Program</h3>
            </div>
            <p className="text-lg md:text-xl text-brand-smoke-gray max-w-3xl mx-auto">
              Earn points with every bet and unlock exclusive rewards, higher withdrawal limits, and personal account
              managers
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12">
              {["Bronze", "Silver", "Gold", "Diamond"].map((tier, index) => (
                <div key={tier} className="text-center space-y-3 md:space-y-4">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center ${
                      index === 0
                        ? "bg-brand-vibrant-green/20 text-brand-vibrant-green"
                        : index === 1
                          ? "bg-brand-smoke-gray/20 text-brand-smoke-gray"
                          : index === 2
                            ? "bg-brand-vibrant-green/20 text-brand-vibrant-green"
                            : "bg-brand-primary-green/20 text-brand-primary-green"
                    }`}
                  >
                    <Crown className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-brand-soft-white">{tier}</h4>
                  <p className="text-brand-smoke-gray text-sm md:text-base">{index + 1}% Cashback</p>
                </div>
              ))}
            </div>
            <Button className="bg-brand-vibrant-green hover:bg-brand-vibrant-green-dark text-brand-charcoal-black font-bold py-3 md:py-4 px-6 md:px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
