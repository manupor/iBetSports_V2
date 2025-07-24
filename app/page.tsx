"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Gift, Filter, SortDesc, ChevronRight, Zap, Shield, Clock, Eye } from "lucide-react"

import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import CasinoTabContent from "@/components/casino-tab-content"
import SportsbookTabContent from "@/components/sportsbook-tab-content"
import RacebookTabContent from "@/components/racebook-tab-content"
import LiveCasinoTabContent from "@/components/live-casino-tab-content"
import BankingTabContent from "@/components/banking-tab-content"
import PromotionsTabContent from "@/components/promotions-tab-content"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen bg-brand-charcoal-black font-poppins">
      <TopNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 transition-all duration-300">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="hidden">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="casino">Casino</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
            <TabsTrigger value="racebook">Racebook</TabsTrigger>
            <TabsTrigger value="live-casino">Live Casino</TabsTrigger>
            <TabsTrigger value="banking">Banking</TabsTrigger>
            <TabsTrigger value="promotions">Promotions</TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="mt-0">
            <CasinoContent />
          </TabsContent>

          <TabsContent value="casino" className="mt-0">
            <CasinoTabContent />
          </TabsContent>

          <TabsContent value="sports" className="mt-0">
            <SportsbookTabContent />
          </TabsContent>

          <TabsContent value="racebook" className="mt-0">
            <RacebookTabContent />
          </TabsContent>

          <TabsContent value="live-casino" className="mt-0">
            <LiveCasinoTabContent />
          </TabsContent>

          <TabsContent value="banking" className="mt-0">
            <BankingTabContent />
          </TabsContent>

          <TabsContent value="promotions" className="mt-0">
            <PromotionsTabContent />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}

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
    { name: "Mega Fortune", image: "/images/slot-mega-fortune.avif", rtp: "96.6%" },
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
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Desktop Hero */}
        <div className="hidden md:block relative w-full h-[70vh] overflow-hidden bg-black">
          <Image
            src="/images/hero-nfl-stadium-players.jpg"
            alt="NFL players in action with dramatic stadium lighting - sports betting hero image"
            width={1200}
            height={600}
            className="absolute bottom-0 right-0 w-full h-full object-cover object-center"
            priority
          />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-brand-primary-green/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/5 w-24 h-24 border border-brand-vibrant-green/30 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-brand-vibrant-green/25 rounded-full animate-ping"></div>
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-start pl-12 lg:pl-24">
            <div className="text-left space-y-4">
              <div className="text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">125%</div>
              <div className="text-4xl lg:text-5xl font-black text-brand-golden-yellow leading-none tracking-tight">
                SIGN UP BONUS
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-white leading-none tracking-tight">QUICK PAYOUTS</div>
              <div className="text-xl lg:text-2xl font-semibold text-white leading-none tracking-tight">
                Bet Smarter, Win Bigger
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-12 lg:left-24 z-10">
            <Button className="relative bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-16 py-6 text-3xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 border-4 border-white/20 backdrop-blur-sm">
              <span className="relative z-10 drop-shadow-lg">JOIN NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/30 to-brand-vibrant-green/30 rounded-full animate-pulse opacity-50"></div>
            </Button>
          </div>
        </div>

        {/* Mobile Hero */}
        <div className="md:hidden">
          <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
            <Image
              src="/images/hero-mobile-stake.png"
              alt="STAKE - Three football players with dramatic green effects and sports betting interface"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-transparent" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-primary-green/40 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-brand-vibrant-green/50 rounded-full animate-bounce"></div>
              <div className="absolute bottom-1/3 left-1/6 w-4 h-4 bg-brand-vibrant-green/30 rounded-full animate-ping"></div>
            </div>

            {/* Mobile Timer */}
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-black/90 backdrop-blur-xl p-3 rounded-lg border border-brand-primary-green/40 shadow-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Gift className="w-4 h-4 text-brand-vibrant-green" />
                  <span className="text-brand-soft-white font-bold text-sm">Bonus Expires</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-brand-primary-green/20 p-2 rounded text-center">
                    <div className="text-sm font-bold text-brand-primary-green">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-brand-smoke-gray">HRS</div>
                  </div>
                  <div className="bg-brand-vibrant-green/20 p-2 rounded text-center">
                    <div className="text-sm font-bold text-brand-vibrant-green">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-brand-smoke-gray">MIN</div>
                  </div>
                  <div className="bg-brand-vibrant-green/20 p-2 rounded text-center">
                    <div className="text-sm font-bold text-brand-vibrant-green">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-brand-smoke-gray">SEC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="bg-brand-charcoal-black px-4 py-8">
            <div className="text-center space-y-6">
              <h1 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight">
                <div className="text-brand-soft-white mb-2">125% SIGN UP BONUS</div>
                <div className="text-brand-vibrant-green">+ CRYPTO BOOST !</div>
              </h1>
              <p className="text-base text-brand-smoke-gray font-medium">
                <span className="text-brand-vibrant-green font-bold">QUICK PAYOUTS</span>
              </p>
              <p className="text-lg text-brand-soft-white font-bold">Bet Smarter, Win Bigger</p>
              <Button className="relative bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 py-4 text-xl rounded-full mt-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 w-full sm:w-auto">
                <span className="relative z-10 drop-shadow-lg">JOIN NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/20 to-brand-vibrant-green/20 rounded-full animate-pulse opacity-30"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="w-full py-12 md:py-16 bg-black border-b border-brand-smoke-gray/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4 hover:border-brand-primary-green/50 transition-colors">
              <div className="flex items-center justify-center">
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-brand-primary-green" />
              </div>
              <div className="text-center">
                <span className="text-brand-soft-white font-bold text-lg md:text-xl block mb-2">Licensed & Secure</span>
                <p className="text-brand-smoke-gray text-sm md:text-base leading-relaxed">
                  Your safety is our priority. We operate under strict regulations.
                </p>
              </div>
            </Card>
            <Card className="bg-brand-charcoal-black-secondary border border-brand-vibrant-green/30 p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4 hover:border-brand-vibrant-green/50 transition-colors">
              <div className="flex items-center justify-center">
                <Zap className="w-10 h-10 md:w-12 md:h-12 text-brand-vibrant-green" />
              </div>
              <div className="text-center">
                <span className="text-brand-soft-white font-bold text-lg md:text-xl block mb-2">
                  Instant Withdrawals
                </span>
                <p className="text-brand-smoke-gray text-sm md:text-base leading-relaxed">
                  Get your winnings quickly with our fast and efficient payout system.
                </p>
              </div>
            </Card>
            <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4 hover:border-brand-primary-green/50 transition-colors">
              <div className="flex items-center justify-center">
                <Clock className="w-10 h-10 md:w-12 md:h-12 text-brand-primary-green" />
              </div>
              <div className="text-center">
                <span className="text-brand-soft-white font-bold text-lg md:text-xl block mb-2">24/7 Support</span>
                <p className="text-brand-smoke-gray text-sm md:text-base leading-relaxed">
                  Our dedicated support team is always here to assist you, day or night.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="w-full py-16 md:py-20 bg-black border-b border-brand-smoke-gray/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-brand-soft-white mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                IBET PROMOS
              </span>{" "}
              KEEP YOU IN THE GAME
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-smoke-gray mb-8 md:mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
              Unlock exclusive bonuses and maximize your gaming experience
            </p>
            <Button
              variant="outline"
              className="text-brand-primary-green border-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent px-8 md:px-10 py-3 md:py-4 text-lg md:text-xl font-bold rounded-lg"
            >
              SEE ALL PROMOTIONS →
            </Button>
          </div>

          {/* Promotions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Crypto Bonus Card */}
            <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 hover:border-brand-primary-green/60 hover:shadow-xl hover:shadow-brand-primary-green/20 transition-all duration-300 p-8 md:p-10 rounded-2xl">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-brand-primary-green/40 bg-brand-primary-green/10 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 md:w-12 md:h-12 text-brand-primary-green"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546z" />
                      <path
                        fill="#fff"
                        d="M17.706 10.432c.24-1.604-.98-2.467-2.648-3.044l.54-2.17-1.32-.33-.527 2.115c-.347-.087-.703-.168-1.058-.248l.53-2.127-1.32-.33-.54 2.17c-.287-.065-.568-.13-.84-.2l.002-.007-1.82-.454-.35 1.407s.98.225.96.238c.535.134.632.487.615.768l-.617 2.474c.037.01.085.023.138.043l-.14-.035-.863 3.463c-.066.162-.23.406-.602.314.013.02-.96-.24-.96-.24L8.15 15.3l1.718.428c.32.08.633.164.94.242l-.546 2.19 1.32.33.54-2.17c.36.098.708.188 1.05.27l-.538 2.158 1.32.33.546-2.19c2.248.426 3.936.254 4.647-1.778.574-1.637-.028-2.58-1.21-3.197.86-.198 1.508-.765 1.683-1.933zm-3.01 4.22c-.407 1.634-3.157.75-4.05.53l.723-2.9c.892.223 3.757.664 3.327 2.37zm.407-4.24c-.37 1.487-2.662.732-3.405.547l.656-2.633c.743.185 3.137.53 2.75 2.086z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-soft-white">200%</span>
                      <span className="text-xl sm:text-2xl font-bold text-brand-primary-green">CRYPTO BONUS</span>
                    </div>
                    <p className="text-brand-smoke-gray text-sm md:text-base font-medium">
                      150% SPORTSBOOK + 50% CASINO
                    </p>
                  </div>
                  <Button
                    variant="link"
                    className="text-brand-primary-green hover:text-brand-vibrant-green p-0 h-auto font-semibold text-sm md:text-base"
                  >
                    MORE INFO
                  </Button>
                </div>
              </div>
            </Card>

            {/* Sign Up Bonus Card */}
            <Card className="bg-brand-charcoal-black-secondary border border-brand-vibrant-green/30 hover:border-brand-vibrant-green/60 hover:shadow-xl hover:shadow-brand-vibrant-green/20 transition-all duration-300 p-8 md:p-10 rounded-2xl">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Tag Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-brand-vibrant-green/40 bg-brand-vibrant-green/10 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 md:w-12 md:h-12 text-brand-vibrant-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                      <circle cx="7" cy="7" r="1" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-soft-white">125%</span>
                      <span className="text-xl sm:text-2xl font-bold text-brand-vibrant-green">SIGN-UP BONUS</span>
                    </div>
                    <p className="text-brand-smoke-gray text-sm md:text-base font-medium">ON YOUR FIRST 3 DEPOSITS</p>
                  </div>
                  <Button
                    variant="link"
                    className="text-brand-vibrant-green hover:text-brand-primary-green p-0 h-auto font-semibold text-sm md:text-base"
                  >
                    MORE INFO
                  </Button>
                </div>
              </div>
            </Card>

            {/* Casino Bonus Card */}
            <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 hover:border-brand-primary-green/60 hover:shadow-xl hover:shadow-brand-primary-green/20 transition-all duration-300 p-8 md:p-10 rounded-2xl">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Playing Cards Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-brand-primary-green/40 bg-brand-primary-green/10 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 md:w-12 md:h-12 text-brand-primary-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8M8 15h4" />
                      <path
                        fill="currentColor"
                        d="M10 8.5c0-.276.224-.5.5-.5s.5.224.5.5-.224.5-.5.5-.5-.224-.5-.5zM13 8.5c0-.276.224-.5.5-.5s.5.224.5.5-.224.5-.5.5-.5-.224-.5-.5z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13l2 2 4-4" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-soft-white">200%</span>
                      <span className="text-xl sm:text-2xl font-bold text-brand-primary-green">CASINO BONUS</span>
                    </div>
                    <p className="text-brand-smoke-gray text-sm md:text-base font-medium">MATCH BONUS UP TO $5,000</p>
                  </div>
                  <Button
                    variant="link"
                    className="text-brand-primary-green hover:text-brand-vibrant-green p-0 h-auto font-semibold text-sm md:text-base"
                  >
                    MORE INFO
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Bottom Features */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-brand-primary-green" />
              </div>
              <div className="space-y-3">
                <h4 className="text-lg md:text-xl font-bold text-brand-soft-white">Licensed & Secure</h4>
                <p className="text-brand-smoke-gray text-sm md:text-base font-medium leading-relaxed">
                  Your safety is our priority with strict regulations
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-vibrant-green/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-brand-vibrant-green" />
              </div>
              <div className="space-y-3">
                <h4 className="text-lg md:text-xl font-bold text-brand-soft-white">Instant Withdrawals</h4>
                <p className="text-brand-smoke-gray text-sm md:text-base font-medium leading-relaxed">
                  Get your winnings quickly with fast payouts
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-brand-primary-green" />
              </div>
              <div className="space-y-3">
                <h4 className="text-lg md:text-xl font-bold text-brand-soft-white">24/7 Support</h4>
                <p className="text-brand-smoke-gray text-sm md:text-base font-medium leading-relaxed">
                  Dedicated support team available around the clock
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Options Section */}
      <section className="w-full py-16 md:py-20 bg-black border-b border-brand-smoke-gray/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 text-brand-soft-white">GAMING OPTIONS</h3>
              <p className="text-brand-smoke-gray text-lg sm:text-xl md:text-2xl font-medium">
                Explore our gaming options
              </p>
            </div>
            <Button
              variant="outline"
              className="text-brand-primary-green border-brand-primary-green hover:bg-brand-primary-green hover:text-white text-base md:text-lg bg-transparent font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg w-full md:w-auto"
            >
              SEE ALL OPTIONS →
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
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
                className="group relative overflow-hidden rounded-2xl bg-brand-charcoal-black-secondary border border-brand-primary-green/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
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

                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div className="mb-3 md:mb-4">
                      <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark font-bold px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-black rounded-lg">
                        <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                        Play Now
                      </Button>
                    </div>

                    <div className="text-center space-y-1 md:space-y-2">
                      <h3 className="text-white font-bold text-sm md:text-lg drop-shadow-lg leading-tight">
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
      </section>

      {/* Online Casino CTA Section */}
      <section className="w-full relative bg-brand-charcoal-black py-20 md:py-24 overflow-hidden border-b border-brand-smoke-gray/10">
        <div className="absolute inset-0">
          <Image
            src="/images/casino-background.png"
            alt="Casino background with money, cards, chips and dice"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <div className="space-y-8 md:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-brand-soft-white">ONLINE CASINO</h2>
            <p className="text-lg sm:text-xl md:text-3xl text-brand-smoke-gray max-w-4xl mx-auto font-medium leading-relaxed">
              Experience the thrill of our premium casino games with the highest RTPs and biggest jackpots
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8">
              <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark font-black px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl text-black rounded-lg w-full sm:w-auto">
                PLAY CASINO GAMES
              </Button>
              <Button
                variant="outline"
                className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-soft-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl bg-transparent font-bold rounded-lg w-full sm:w-auto"
              >
                SEE ALL GAMES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Games Sections */}
      <section className="py-20 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {/* Draft Originals */}
          <div className="px-4 sm:px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 text-brand-soft-white">
                  Draft Originals
                </h3>
                <p className="text-brand-smoke-gray text-lg sm:text-xl md:text-2xl font-medium">
                  Exclusive in-house games with the highest RTPs
                </p>
              </div>
              <Button
                variant="outline"
                className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-soft-white bg-transparent px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-bold rounded-lg w-full md:w-auto"
              >
                View All <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3" />
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
              {originalGames.map((game) => (
                <Card
                  key={game.name}
                  className="p-4 md:p-6 rounded-3xl hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden min-h-[200px] md:min-h-[280px] flex flex-col justify-end"
                >
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    fill
                    className="object-cover absolute inset-0 z-0 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                  <div className="relative z-20 text-brand-soft-white text-center">
                    <span className="font-black text-lg md:text-2xl block mb-2">{game.name}</span>
                    <div className="text-xs md:text-sm bg-black/20 px-3 md:px-4 py-1 rounded-full inline-block font-medium">
                      {game.players} playing
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30">
                    <Button className="bg-brand-primary-green text-brand-soft-white font-black hover:bg-brand-primary-green-dark px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg rounded-lg">
                      <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                      Play Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Slots */}
          <div className="px-4 sm:px-6 md:px-12">
            <div className="mb-6 md:mb-8">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 text-brand-soft-white text-center md:text-left">
                Popular Slots
              </h3>
              <p className="text-brand-smoke-gray text-lg sm:text-xl md:text-2xl font-medium text-center md:text-left">
                Most played games this week
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6 mb-8 md:mb-12">
              <Button
                variant="ghost"
                className="text-brand-smoke-gray hover:text-brand-soft-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-medium"
              >
                <Filter className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                Filter
              </Button>
              <Button
                variant="ghost"
                className="text-brand-smoke-gray hover:text-brand-soft-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-medium"
              >
                <SortDesc className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                Sort
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
              {popularSlots.map((game) => (
                <div key={game.name} className="group relative">
                  <div className="rounded-3xl overflow-hidden relative aspect-[3/4]">
                    {game.name !== "European Roulette" ? (
                      <Image
                        src={game.image || "/placeholder.svg"}
                        alt={game.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundImage: "url(/images/european-roulette-bg.jpg)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    )}

                    {game.name === "European Roulette" && <div className="absolute inset-0 bg-black/30"></div>}

                    <div className="absolute top-2 md:top-4 right-2 md:right-4">
                      <Badge className="bg-black/70 text-brand-soft-white px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm font-medium">
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
                      <div className="relative z-10 flex flex-col items-center justify-center space-y-2 md:space-y-4">
                        <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-soft-white font-black px-4 md:px-8 py-2 md:py-4 text-sm md:text-lg rounded-lg">
                          <Play className="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-3" />
                          Play Now
                        </Button>
                        <Button
                          variant="outline"
                          className="border-brand-primary-green text-brand-soft-white hover:bg-brand-primary-green hover:text-brand-charcoal-black px-4 md:px-8 py-2 md:py-4 text-sm md:text-lg bg-transparent font-bold rounded-lg"
                        >
                          <Eye className="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-3" />
                          More Info
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 text-center">
                    <div className="font-black text-base md:text-xl text-brand-soft-white">{game.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Bets */}
          <div className="px-4 sm:px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 text-brand-soft-white">Recent Bets</h3>
                <p className="text-brand-smoke-gray text-lg sm:text-xl md:text-2xl font-medium">
                  See what others are winning
                </p>
              </div>
              <Button
                variant="outline"
                className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-soft-white bg-transparent px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-bold rounded-lg w-full md:w-auto"
              >
                View All <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3" />
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto min-w-[600px]">
                <thead className="text-sm md:text-base text-brand-smoke-gray uppercase">
                  <tr>
                    <th className="text-left py-3 md:py-4 px-3 md:px-6 font-bold">User</th>
                    <th className="text-left py-3 md:py-4 px-3 md:px-6 font-bold">Game</th>
                    <th className="text-left py-3 md:py-4 px-3 md:px-6 font-bold">Time</th>
                    <th className="text-right py-3 md:py-4 px-3 md:px-6 font-bold">Amount</th>
                    <th className="text-right py-3 md:py-4 px-3 md:px-6 font-bold">Mult</th>
                    <th className="text-right py-3 md:py-4 px-3 md:px-6 font-bold">Profit</th>
                  </tr>
                </thead>
                <tbody>
                  {bets.map((bet, index) => (
                    <tr key={index} className="text-sm md:text-lg border-b border-brand-smoke-gray/20">
                      <td className="py-3 md:py-4 px-3 md:px-6 text-brand-soft-white font-medium">{bet.user}</td>
                      <td className="py-3 md:py-4 px-3 md:px-6 text-brand-soft-white font-medium">{bet.game}</td>
                      <td className="py-3 md:py-4 px-3 md:px-6 text-brand-smoke-gray font-medium">{bet.time}</td>
                      <td className="py-3 md:py-4 px-3 md:px-6 text-brand-soft-white font-medium text-right">
                        ${bet.amount.toFixed(2)}
                      </td>
                      <td className="py-3 md:py-4 px-3 md:px-6 text-brand-soft-white font-medium text-right">
                        {bet.mult.toFixed(2)}x
                      </td>
                      <td className="py-3 md:py-4 px-3 md:px-6 text-brand-soft-white font-medium text-right">
                        ${bet.profit.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
