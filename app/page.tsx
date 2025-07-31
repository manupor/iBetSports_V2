"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import CasinoTabContent from "@/components/casino-tab-content"
import SportsbookTabContent from "@/components/sportsbook-tab-content"
import RacebookTabContent from "@/components/racebook-tab-content"
import LiveCasinoTabContent from "@/components/live-casino-content"
import BankingTabContent from "@/components/banking-tab-content"
import PromotionsTabContent from "@/components/promotions-tab-content"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home")
  const signupUrl = "https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en"

  const openSignupPage = () => {
    window.open(signupUrl, "_blank", "noopener,noreferrer")
  }

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
            <CasinoContent setActiveTab={setActiveTab} signupUrl={signupUrl} />
          </TabsContent>

          <TabsContent value="casino" className="mt-0">
            <CasinoTabContent setIsRegistrationOpen={openSignupPage} />
          </TabsContent>

          <TabsContent value="sports" className="mt-0">
            <SportsbookTabContent setIsRegistrationOpen={openSignupPage} />
          </TabsContent>

          <TabsContent value="racebook" className="mt-0">
            <RacebookTabContent setIsRegistrationOpen={openSignupPage} />
          </TabsContent>

          <TabsContent value="live-casino" className="mt-0">
            <LiveCasinoTabContent setIsRegistrationOpen={openSignupPage} />
          </TabsContent>

          <TabsContent value="banking" className="mt-0">
            <BankingTabContent setIsRegistrationOpen={openSignupPage} />
          </TabsContent>

          <TabsContent value="promotions" className="mt-0">
            <PromotionsTabContent setIsRegistrationOpen={openSignupPage} />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}

function CasinoContent({
  setActiveTab,
  signupUrl,
}: {
  setActiveTab: (tab: string) => void
  signupUrl: string
}) {
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
    <div className="font-poppins bg-black">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Desktop Hero */}
        <div className="hidden md:block relative w-full h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden bg-black">
          {/* Text Overlay - Left Side */}
          <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-4 z-20">
            <div className="text-left space-y-2 sm:space-y-3 max-w-[45%] sm:max-w-[50%]">
              <div className="flex items-center space-x-2 sm:space-x-3 border-white border-2 rounded-xl mx-0 px-2">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight my-0 mt-1.5">
                  125%
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-brand-golden-yellow leading-none tracking-tight lg:text-4xl">
                  SIGN UP BONUS
                </span>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                QUICK PAYOUTS
              </div>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight tracking-tight mb-3 sm:mb-4">
                Bet Smarter, Win Bigger
              </div>
              <a
                href={signupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl lg:text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] mb-4 inline-flex items-center justify-center"
              >
                <span className="relative z-10 drop-shadow-lg">JOIN NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/20 to-brand-vibrant-green/20 rounded-full animate-pulse opacity-30 animate-[blink_2s_ease-in-out_infinite]"></div>
              </a>
            </div>

            {/* Crypto Bonus Section - Right Side */}
            <div className="text-right space-y-4 max-w-[45%] sm:max-w-[40%] flex flex-col items-end z-12">
              <div className="bg-black/40 backdrop-blur-sm border border-brand-primary-green/30 rounded-2xl p-4 sm:p-6 text-center space-y-4 shadow-2xl">
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-none tracking-tight text-white">
                    CRYPTO BONUS
                  </div>
                  <div
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-brand-golden-yellow leading-none tracking-tight drop-shadow-lg"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                  >
                    BOOST!
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green flex items-center justify-center shadow-lg shadow-black/50">
                    <span className="font-bold text-lg sm:text-xl md:text-2xl text-black">₿</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stadium Background - Full Width */}
          <div className="absolute inset-0 w-full h-full z-5">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estadio-de-futbol-vacio-por-la-noche-multitud-viendo-el-juego-bajo-las-luces.jpg-IRMstCEjNsbMbfuOHOqhaOMDwzaQHH.jpeg"
              alt="Football stadium at night with dramatic lighting and 30 yard line marking"
              width={1920}
              height={600}
              className="w-full h-full object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </div>

          {/* Hero Image - NFL Player on Right Side */}
          <div className="absolute bottom-0 right-[15%] w-[50%] sm:w-[55%] h-[90%] sm:h-[95%] z-15">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nfl44-AxYQchGkxdsTaYsTPvWANpfbVqM3SW.png"
              alt="Colorado football player #30 running with ball in black uniform against green background - sports betting hero"
              width={400}
              height={300}
              className="w-full h-full object-contain object-bottom"
              priority
            />
          </div>

          {/* Green Smoke Effect - Mobile */}
          <div className="absolute bottom-0 right-0 w-[55%] sm:w-[60%] h-[80%] sm:h-[85%] z-10 pointer-events-none">
            <div className="absolute bottom-0 right-1/4 w-full h-full bg-gradient-radial from-brand-primary-green/25 via-brand-primary-green/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
          </div>

          {/* Wave Effects Behind Player - Mobile Optimized */}
          <div className="absolute bottom-0 right-0 w-[55%] sm:w-[60%] h-[80%] sm:h-[85%] z-8 overflow-hidden pointer-events-none">
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-24 sm:w-32 h-24 sm:h-32 border border-brand-primary-green/20 rounded-full animate-pulse transform scale-75"></div>
              <div className="absolute top-1/3 right-1/5 w-20 sm:w-28 h-20 sm:h-28 border border-brand-vibrant-green/15 rounded-full animate-ping transform scale-90 animation-delay-1000"></div>
              <div className="absolute top-1/2 right-1/3 w-16 sm:w-24 h-16 sm:h-24 border border-brand-primary-green/25 rounded-full animate-pulse transform scale-110 animation-delay-2000"></div>
              <div className="absolute bottom-1/3 right-1/6 w-14 sm:w-20 h-14 sm:h-20 border border-brand-vibrant-green/20 rounded-full animate-ping transform scale-125 animation-delay-3000"></div>
              <div className="absolute top-1/6 right-1/8 w-32 sm:w-40 h-32 sm:h-40 border border-brand-primary-green/10 rounded-full animate-pulse transform scale-150 animation-delay-4000"></div>
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
            <div className="absolute top-1/4 left-1/6 w-6 sm:w-8 h-6 sm:h-8 border border-brand-primary-green/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/5 w-4 sm:w-6 h-4 sm:h-6 border border-brand-vibrant-green/30 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/3 left-1/4 w-3 sm:w-4 h-3 sm:h-4 border border-brand-vibrant-green/25 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Mobile Hero */}
        <div className="block md:hidden relative w-full bg-black">
          {/* Mobile Hero Image */}
          <div className="relative w-full h-64 sm:h-72 overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nfl44-AxYQchGkxdsTaYsTPvWANpfbVqM3SW.png"
              alt="Colorado football player #30 running with ball in black uniform against green background - sports betting hero"
              width={400}
              height={300}
              className="w-full h-full object-contain object-center"
              priority
            />
            {/* Stadium Background Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estadio-de-futbol-vacio-por-la-noche-multitud-viendo-el-juego-bajo-las-luces.jpg-IRMstCEjNsbMbfuOHOqhaOMDwzaQHH.jpeg"
                alt="Football stadium background"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Football Player - Sticked to Bottom Edge */}
            <div className="absolute bottom-0 right-0 z-10 w-1/2 h-3/4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nfl44-AxYQchGkxdsTaYsTPvWANpfbVqM3SW.png"
                alt="Colorado football player #30 running with ball in black uniform against green background - sports betting hero"
                width={300}
                height={400}
                className="w-full h-full object-contain object-bottom"
                priority
              />
            </div>

            {/* Mobile Hero Text - Over Image */}
            <div className="absolute inset-0 flex flex-col items-start justify-center px-4 text-left space-y-4 z-20">
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 space-y-4 max-w-[60%]">
                <div className="flex items-center justify-center space-x-2 border-white border-2 rounded-xl mx-auto px-3 py-2 max-w-fit">
                  <span className="text-3xl font-black text-white leading-none tracking-tight">125%</span>
                  <span className="text-lg font-black text-brand-golden-yellow leading-none tracking-tight">
                    SIGN UP BONUS
                  </span>
                </div>
                <div className="text-xl font-bold text-white leading-tight tracking-tight text-center">
                  QUICK PAYOUTS
                </div>
                <div className="text-lg font-semibold text-white leading-tight tracking-tight mb-4 text-center">
                  Bet Smarter, Win Bigger
                </div>
                <a
                  href={signupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 w-full max-w-[200px] mx-auto inline-flex items-center justify-center"
                >
                  <span className="relative z-10 drop-shadow-lg">JOIN NOW</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/20 to-brand-vibrant-green/20 rounded-full animate-pulse opacity-30 animate-[blink_2s_ease-in-out_infinite]"></div>
                </a>
              </div>
            </div>

            {/* Green Effects */}
            <div className="absolute bottom-0 right-0 w-full h-full z-5 pointer-events-none">
              <div className="absolute bottom-1/4 right-1/4 w-full h-full bg-gradient-radial from-brand-primary-green/20 via-brand-primary-green/10 to-transparent rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Mobile Crypto Bonus Section - Moving Banner */}
          <div className="px-4 py-2 bg-black overflow-hidden">
            <div className="relative w-fit mx-auto h-12 bg-black/60 backdrop-blur-sm border border-brand-primary-green/30 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center h-full px-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green flex items-center justify-center shadow-lg shadow-black/50">
                    <span className="font-bold text-sm text-black">₿</span>
                  </div>
                  <span className="text-lg font-black leading-none tracking-tight text-white">CRYPTO BONUS</span>
                  <span
                    className="text-base font-black text-brand-golden-yellow leading-none tracking-tight drop-shadow-lg"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                  >
                    BOOST!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 bg-black border-b border-brand-smoke-gray/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8 mt-2 sm:mt-4">
            <h2 className="font-black text-brand-soft-white mb-2 sm:mb-3 md:mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                POWER YOUR PLAY
              </span>{" "}
              WITH IBET PROMOTIONS
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-brand-smoke-gray mb-3 sm:mb-4 md:mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl mx-auto font-medium leading-relaxed">
              Unlock exclusive bonuses and maximize your gaming experience
            </p>
            <Button
              onClick={() => setActiveTab("promotions")}
              variant="outline"
              className="text-brand-primary-green border-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-2.5 md:py-3 lg:py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold rounded-lg"
            >
              SEE ALL PROMOTIONS →
            </Button>
          </div>

          {/* Promotions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {/* Crypto Bonus Card */}
            <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 hover:border-brand-primary-green/60 hover:shadow-xl hover:shadow-brand-primary-green/20 transition-all duration-300 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 rounded-xl">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-brand-primary-green/40 bg-brand-primary-green/10 flex items-center justify-center">
                    <span className="text-brand-primary-green font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                      ₿
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-2 sm:space-y-3">
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-brand-soft-white">
                        200%
                      </span>
                      <span className="text-xs sm:text-sm md:text-base font-bold text-brand-vibrant-green">
                        CRYPTO BONUS
                      </span>
                    </div>
                    <p className="text-brand-smoke-gray text-xs md:text-sm font-medium">BITCOIN & ETHEREUM</p>
                  </div>
                  <Button
                    onClick={() => setActiveTab("promotions")}
                    variant="link"
                    className="text-brand-vibrant-green hover:text-brand-primary-green p-0 h-auto font-semibold text-xs md:text-sm"
                  >
                    MORE INFO
                  </Button>
                </div>
              </div>
            </Card>

            {/* Sign Up Bonus Card */}
            <Card className="bg-brand-charcoal-black-secondary border border-brand-vibrant-green/30 hover:border-brand-vibrant-green/60 hover:shadow-xl hover:shadow-brand-vibrant-green/20 transition-all duration-300 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 rounded-xl">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                {/* Tag Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:w-20 rounded-full border-2 border-brand-vibrant-green/40 bg-brand-vibrant-green/10 flex items-center justify-center">
                    <span className="text-brand-vibrant-green font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                      %
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-2 sm:space-y-3">
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-brand-soft-white">
                        125%
                      </span>
                      <span className="text-xs sm:text-sm md:text-base font-bold text-brand-vibrant-green">
                        SIGN-UP BONUS
                      </span>
                    </div>
                    <p className="text-brand-smoke-gray text-xs md:text-sm font-medium">ON YOUR FIRST 3 DEPOSITS</p>
                  </div>
                  <Button
                    onClick={() => setActiveTab("promotions")}
                    variant="link"
                    className="text-brand-vibrant-green hover:text-brand-primary-green p-0 h-auto font-semibold text-xs md:text-sm"
                  >
                    MORE INFO
                  </Button>
                </div>
              </div>
            </Card>

            {/* Casino Bonus Card */}
            <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 hover:border-brand-primary-green/60 hover:shadow-xl hover:shadow-brand-primary-green/20 transition-all duration-300 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 rounded-xl sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                {/* Playing Cards Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:w-16 lg:w-18 lg:h-18 xl:w-20 xl:w-20 rounded-full border-2 border-brand-primary-green/40 bg-brand-primary-green/10 flex items-center justify-center">
                    <span className="text-brand-primary-green font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                      ♠
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-2 sm:space-y-3">
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-brand-soft-white">
                        150%
                      </span>
                      <span className="text-xs sm:text-sm md:text-base font-bold text-brand-primary-green">
                        CASINO RELOAD
                      </span>
                    </div>
                    <p className="text-brand-smoke-gray text-xs md:text-sm font-medium">WEEKLY RELOAD BONUS</p>
                  </div>
                  <Button
                    onClick={() => setActiveTab("promotions")}
                    variant="link"
                    className="text-brand-primary-green hover:text-brand-vibrant-green p-0 h-auto font-semibold text-xs md:text-sm"
                  >
                    MORE INFO
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gaming Options Section */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 bg-brand-charcoal-black border-b border-brand-smoke-gray/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-brand-soft-white mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                GAMING OPTIONS
              </span>{" "}
              FOR EVERY PLAYER
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-brand-smoke-gray max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl mx-auto font-medium leading-relaxed">
              From thrilling slots to strategic table games, discover your perfect gaming experience
            </p>
          </div>

          {/* Updated Gaming Options Section - Responsive Grid */}
          {(() => {
            const games = [
              { name: "Fizzy Pennyslot", image: "/images/Fizzy-Pennyslot.jpg" },
              { name: "Golden Catch", image: "/images/Golden-Catch.jpg" },
              { name: "Max Megaways 2", image: "/images/Max-Megaways-2.jpg" },
              { name: "Gifts of Fortune", image: "/images/Gifts-of-Fortune.jpg" },
              { name: "Kingmaker Fully Loaded", image: "/images/Kingmaker-Fully-Loaded.jpg" },
              { name: "Castle of Terror", image: "/images/Castle-of-Terror.jpg" },
              { name: "Danger High Voltage", image: "/images/Danger-High-Voltage.jpg" },
              { name: "Chocolates", image: "/images/Chocolates.jpg" },
              { name: "Big Bad Bison", image: "/images/Big-Bad-Bison.jpg" },
              { name: "Mega Fortune", image: "/images/slot-mega-fortune.avif" },
              { name: "Cash Quest", image: "/images/cash-quest.jpg" },
              { name: "Coins 96%", image: "/images/coins-96.jpg" },
              { name: "Coins 88%", image: "/images/coins-88.jpg" },
              { name: "Bouncy Bombs", image: "/images/bouncy-bombs.jpg" },
              { name: "Coins 98%", image: "/images/coins-98.jpg" },
              { name: "Wild Mustang", image: "/images/wild-mustang.jpg" },
            ]

            return (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                {games.map((game, index) => (
                  <div
                    key={index}
                    className={`bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary-green/20 rounded-lg sm:rounded-xl overflow-hidden group flex flex-col ${index === 15 ? "block sm:hidden" : ""}`}
                  >
                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                      <Image
                        src={game.image || "/placeholder.svg"}
                        alt={game.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        priority={index < 15}
                      />
                    </div>
                    <div className="p-1.5 sm:p-2 md:p-3">
                      <a
                        href={signupUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-bold py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 text-xs sm:text-sm md:text-base lg:text-lg rounded-md sm:rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
                      >
                        PLAY NOW
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )
          })()}
        </div>
      </section>

      {/* Recent Bets Section */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 bg-black border-b border-brand-smoke-gray/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-brand-soft-white mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                RECENT BETS
              </span>{" "}
              LIVE FEED
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-brand-smoke-gray max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl mx-auto font-medium leading-relaxed">
              See what other players are winning in real-time
            </p>
          </div>

          <div className="bg-brand-charcoal-black-secondary rounded-lg sm:rounded-xl border border-brand-smoke-gray/20 overflow-hidden">
            <div className="max-h-80 sm:max-h-96 overflow-y-auto">
              {bets.map((bet, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 border-b border-brand-smoke-gray/10 last:border-b-0 hover:bg-brand-smoke-gray/5 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-charcoal-black font-bold text-xs sm:text-sm">
                        {bet.user.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-brand-soft-white font-semibold text-sm sm:text-base truncate">
                        {bet.user}
                      </div>
                      <div className="text-brand-smoke-gray text-xs sm:text-sm">
                        {bet.game} • {bet.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-brand-soft-white font-bold text-xs sm:text-sm md:text-base">
                      ${bet.amount.toFixed(2)} × {bet.mult.toFixed(2)}
                    </div>
                    <div
                      className={`text-xs sm:text-sm font-semibold ${bet.profit > 0 ? "text-brand-primary-green" : "text-red-400"}`}
                    >
                      {bet.profit > 0 ? "+" : ""}${bet.profit.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
