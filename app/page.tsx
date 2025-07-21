"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Play,
  Gift,
  Gem,
  Filter,
  SortDesc,
  ChevronRight,
  Zap,
  Crown,
  Shield,
  Clock,
  Eye,
  Percent,
  Wallet,
  HandCoins,
} from "lucide-react"

import TopNavigation from "@/components/top-navigation"
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
    <div className="min-h-screen bg-brand-charcoal-black">
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
    <div>
      <div className="relative w-full">
        <div className="hidden md:block relative w-full h-[70vh] overflow-hidden bg-black">
          <div className="absolute inset-0 bg-black" />
          <Image
            src="/images/hero-new-football.jpg"
            alt="STAKE - Football players with dramatic green neon effects and FOOTBALL branding"
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

          <div className="absolute top-1/4 left-0 z-10 w-full max-w-3xl px-12 lg:px-24 text-left">
            <div className="space-y-4 md:space-y-6 mb-20">
              <h1 className="text-4xl lg:text-5xl font-black leading-none tracking-tight">
                <div className="text-brand-soft-white">125% SIGN UP BONUS</div>
                <div className="text-brand-vibrant-green text-white">+ CRYPTO BOOST !</div>
              </h1>
              <p className="text-xl lg:text-2xl text-brand-smoke-gray font-medium leading-relaxed max-w-xl">
                <span className="text-brand-vibrant-green font-bold text-white">QUICK PAYOUTS</span>
              </p>
              <p className="text-2xl lg:text-3xl text-brand-soft-white font-bold leading-relaxed max-w-xl">
                Bet Smarter, Win Bigger
              </p>
              <div className="flex mt-8 justify-start">
                <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-black px-12 py-4 text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-center">
                  JOIN NOW
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="relative w-full h-[35vh] overflow-hidden">
            <Image
              src="/images/hero-mobile-stake.png"
              alt="STAKE - Three football players with dramatic green effects and sports betting interface"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-primary-green/40 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-brand-vibrant-green/50 rounded-full animate-bounce"></div>
              <div className="absolute bottom-1/3 left-1/6 w-4 h-4 bg-brand-vibrant-green/30 rounded-full animate-ping"></div>
            </div>

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

          <div className="bg-brand-charcoal-black px-4 py-8">
            <div className="text-center space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight tracking-tight">
                <div className="text-brand-soft-white">125% SIGN UP BONUS</div>
                <div className="text-brand-vibrant-green">+ CRYPTO BOOST !</div>
              </h1>
              <p className="text-base sm:text-lg text-brand-smoke-gray font-medium">
                <span className="text-brand-vibrant-green font-bold">QUICK PAYOUTS</span>
              </p>
              <p className="text-lg sm:text-xl text-brand-soft-white font-bold">Bet Smarter, Win Bigger</p>
              <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark font-bold px-10 py-3 text-xl rounded-full mt-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                JOIN NOW
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Key Features */}
      <div className="w-full bg-brand-charcoal-black py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="flex items-center space-x-4">
            <Percent className="w-10 h-10 text-brand-primary-green" />
            <div>
              <h3 className="font-bold text-lg text-brand-soft-white">VIP Rewards</h3>
              <p className="text-sm text-brand-smoke-gray">Level up with exclusive perks</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Wallet className="w-10 h-10 text-brand-primary-green" />
            <div>
              <h3 className="font-bold text-lg text-brand-soft-white">Crypto-Friendly</h3>
              <p className="text-sm text-brand-smoke-gray">Fast, Secure and effective</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <HandCoins className="w-10 h-10 text-brand-primary-green" />
            <div>
              <h3 className="font-bold text-lg text-brand-soft-white">Personal VIP Service</h3>
              <p className="text-sm text-brand-smoke-gray">Tailored care from our team</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Gift className="w-10 h-10 text-brand-primary-green" />
            <div>
              <h3 className="font-bold text-lg text-brand-soft-white">Fast Payouts</h3>
              <p className="text-sm text-brand-smoke-gray">Paid securely within minutes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-0 bg-black relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/mma-casino-promo-bg.png"
            alt="MMA Casino Background"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 pt-4 md:pt-6">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between mb-0 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white">IBET PROMOS KEEP YOU IN THE GAME</h2>
            <Button
              variant="outline"
              className="text-brand-primary-green border-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black text-sm md:text-base bg-transparent"
            >
              SEE ALL PROMOTIONS →
            </Button>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-end justify-between mb-0">
            <div className="flex-1">
              <h2 className="text-2xl font-black text-brand-soft-white leading-tight">
                <div>IBET PROMOS</div>
                <div>KEEP YOU IN</div>
                <div>THE GAME</div>
              </h2>
            </div>
            <div className="ml-4">
              <Button
                variant="outline"
                className="text-brand-primary-green border-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black text-sm bg-transparent whitespace-nowrap px-4 py-2 rounded-lg"
              >
                SEE ALL PROMOTIONS →
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-0 md:pt-0 pb-4 md:pb-6">
            <div className="flex flex-col min-h-[400px] justify-start">
              <div className="relative z-15 pb-2">
                <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-brand-primary-green/20 opacity-60">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-primary-green/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-brand-primary-green/60">
                      <Gem className="w-6 h-6 md:w-7 md:h-7 text-brand-primary-green" />
                    </div>
                    <div className="text-left">
                      <div className="text-3xl md:text-4xl font-black text-brand-primary-green drop-shadow-2xl">
                        200%
                      </div>
                      <div className="text-lg md:text-xl font-bold text-brand-soft-white drop-shadow-lg">
                        CRYPTO BONUS
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm md:text-base text-brand-soft-white font-medium drop-shadow-md">
                      Get up to $5,000 bonus on your crypto deposits
                    </div>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => window.open("/promotions", "_blank")}
                className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark font-bold py-3 mt-3 text-black relative z-20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                CLAIM NOW
              </Button>
            </div>

            <div className="flex flex-col min-h-[400px] justify-start">
              <div className="relative z-15 pb-2">
                <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-brand-primary-green/20 opacity-75 py-7">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-primary-green/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-brand-primary-green/60">
                      <Gift className="w-6 h-6 md:w-7 md:h-7 text-brand-primary-green" />
                    </div>
                    <div className="text-left">
                      <div className="text-3xl md:text-4xl font-black text-brand-primary-green drop-shadow-2xl">
                        125%
                      </div>
                      <div className="text-lg md:text-xl font-bold text-brand-soft-white drop-shadow-lg">
                        SIGN UP BONUS
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm md:text-base text-brand-soft-white font-medium drop-shadow-md">
                      Welcome bonus on your first 3 deposits
                    </div>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => window.open("/promotions", "_blank")}
                className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark font-bold py-3 mt-3 text-black relative z-20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                GET STARTED
              </Button>
            </div>

            <div className="flex flex-col min-h-[400px] justify-start">
              <div className="relative z-15 pb-2">
                <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-brand-primary-green/20 opacity-60 py-7">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-primary-green/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-brand-primary-green/60">
                      <Crown className="w-6 h-6 md:w-7 md:h-7 text-brand-primary-green" />
                    </div>
                    <div className="text-left">
                      <div className="text-3xl md:text-4xl font-black text-brand-primary-green drop-shadow-2xl">
                        200%
                      </div>
                      <div className="text-lg md:text-xl font-bold text-brand-soft-white drop-shadow-lg">
                        CASINO BONUS
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm md:text-base text-brand-soft-white font-medium drop-shadow-md">
                      Exclusive casino bonus + free spins
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark font-bold py-3 mt-3 text-black relative z-20 shadow-lg hover:shadow-xl transition-all duration-300">
                PLAY NOW
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mt-12 md:mt-16 pt-4 md:pt-6 border-t border-brand-smoke-gray/30">
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

      <div className="w-full py-8 md:py-12 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <div className="flex items-center justify-center space-x-4">
            <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-soft-white font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
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

      <div className="px-3 sm:px-4 md:px-12 py-12 sm:py-16 md:py-20 bg-brand-charcoal-black space-y-12 sm:space-y-16 md:space-y-20">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
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
                className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg self-start"
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
                <SortDesc className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 md:mr-3" />
                Sort
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-8">
            {popularSlots.map((game) => (
              <div key={game.name} className="group relative">
                <div className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden relative aspect-[3/4]">
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
                        Play Now
                      </Button>
                      <Button
                        variant="outline"
                        className="border-brand-primary-green text-brand-soft-white hover:bg-brand-primary-green hover:text-brand-charcoal-black px-3 sm:px-4 md:px-8 py-1 sm:py-2 md:py-4 text-xs sm:text-sm md:text-lg bg-transparent"
                      >
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 md:mr-3" />
                        More Info
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-2 sm:mt-3 md:mt-4 text-center">
                  <div className="font-bold text-sm sm:text-lg md:text-xl text-brand-soft-white">{game.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
            <div className="mb-3 sm:mb-4 md:mb-0">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-1 sm:mb-2 md:mb-4 text-brand-soft-white">
                Recent Bets
              </h3>
              <p className="text-brand-smoke-gray text-base sm:text-lg md:text-xl">See what others are winning</p>
            </div>
            <Button
              variant="outline"
              className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg self-start"
            >
              View All <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 md:ml-3" />
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="text-xs sm:text-sm md:text-base text-brand-smoke-gray uppercase">
                <tr>
                  <th className="text-left py-2 px-2 sm:px-4 md:px-6">User</th>
                  <th className="text-left py-2 px-2 sm:px-4 md:px-6">Game</th>
                  <th className="text-left py-2 px-2 sm:px-4 md:px-6">Time</th>
                  <th className="text-right py-2 px-2 sm:px-4 md:px-6">Amount</th>
                  <th className="text-right py-2 px-2 sm:px-4 md:px-6">Mult</th>
                  <th className="text-right py-2 px-2 sm:px-4 md:px-6">Profit</th>
                </tr>
              </thead>
              <tbody>
                {bets.map((bet, index) => (
                  <tr key={index} className="text-sm sm:text-base md:text-lg border-b border-brand-smoke-gray/20">
                    <td className="py-3 px-2 sm:px-4 md:px-6 text-brand-soft-white">{bet.user}</td>
                    <td className="py-3 px-2 sm:px-4 md:px-6 text-brand-soft-white">{bet.game}</td>
                    <td className="py-3 px-2 sm:px-4 md:px-6 text-brand-smoke-gray">{bet.time}</td>
                    <td className="py-3 px-2 sm:px-4 md:px-6 text-right text-brand-soft-white">
                      ${bet.amount.toFixed(2)}
                    </td>
                    <td className="py-3 px-2 sm:px-4 md:px-6 text-right text-brand-soft-white">
                      {bet.mult.toFixed(2)}x
                    </td>
                    <td className="py-3 px-2 sm:px-4 md:px-6 text-right text-brand-soft-white">
                      ${bet.profit.toFixed(2)}
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
