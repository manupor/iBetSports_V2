"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, ChevronRight, Zap, Shield, Clock } from "lucide-react"

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
        <div className="hidden md:block relative w-full h-[45vh] overflow-hidden bg-black">
          <Image
            src="/images/ibetsports-hero-players.png"
            alt="NFL players in dynamic action poses with dramatic green lighting effects - sports betting hero"
            width={1920}
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
          <div className="absolute inset-0 flex flex-col justify-center pl-12 lg:pl-24 pr-12 lg:pr-24">
            <div className="text-left space-y-1 md:space-y-2 max-w-2xl">
              <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-none tracking-tight">
                125%
              </div>
              <div className="text-xl lg:text-2xl xl:text-3xl font-black text-brand-golden-yellow leading-none tracking-tight">
                SIGN UP BONUS
              </div>
              <div className="text-base lg:text-lg xl:text-xl font-bold text-white leading-tight tracking-tight">
                QUICK PAYOUTS
              </div>
              <div className="text-sm lg:text-base xl:text-lg font-semibold text-white leading-tight tracking-tight mb-4">
                Bet Smarter, Win Bigger
              </div>

              {/* Button integrated in text flow */}
              <div className="pt-2">
                <Button className="relative bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 lg:px-12 py-3 lg:py-4 text-xl lg:text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 border-4 border-white/20 backdrop-blur-sm">
                  <span className="relative z-10 drop-shadow-lg">JOIN NOW</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/30 to-brand-vibrant-green/30 rounded-full animate-pulse opacity-50"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero */}
        <div className="md:hidden">
          <div className="relative w-full h-[40vh] min-h-[300px] overflow-hidden">
            <Image
              src="/images/ibetsports-hero-players.png"
              alt="NFL players in dynamic action poses with dramatic green lighting effects - sports betting hero"
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
          </div>

          {/* Mobile Content */}
          <div className="bg-brand-charcoal-black px-4 py-6">
            <div className="text-center space-y-4">
              <h1 className="text-xl sm:text-2xl font-black leading-tight tracking-tight">
                <div className="text-brand-soft-white mb-1">125% SIGN UP BONUS</div>
                <div className="text-brand-vibrant-green">+ CRYPTO BOOST !</div>
              </h1>
              <p className="text-base text-brand-smoke-gray font-medium leading-tight">
                <span className="text-brand-vibrant-green font-bold">QUICK PAYOUTS</span>
              </p>
              <p className="text-lg text-brand-soft-white font-bold leading-tight">Bet Smarter, Win Bigger</p>
              <Button className="relative bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-6 py-3 text-lg rounded-full mt-3 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 w-full sm:w-auto">
                <span className="relative z-10 drop-shadow-lg">JOIN NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/20 to-brand-vibrant-green/20 rounded-full animate-pulse opacity-30"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-8 bg-black border-b border-brand-smoke-gray/10 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-3 md:mb-4 mt-4">
            <h2 className="text-3xl sm:text-4xl font-black text-brand-soft-white mb-3 md:mb-4 md:text-3xl">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                IBET PROMOS
              </span>{" "}
              KEEP YOU IN THE GAME
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-smoke-gray mb-4 md:mb-6 max-w-3xl mx-auto font-medium leading-relaxed">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Crypto Bonus Card */}
            <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 hover:border-brand-primary-green/60 hover:shadow-xl hover:shadow-brand-primary-green/20 transition-all duration-300 p-4 md:p-6 rounded-xl">
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-brand-primary-green/40 bg-brand-primary-green/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-brand-primary-green"
                      fill="currentColor"
                      viewBox="0 0 317.73 420.7"
                    >
                      <path d="M270.84,222.68c3.78,2.33,7.3,4.35,10.66,6.6,20.96,14.05,31.21,33.32,28,58.79-2.29,18.16-8.32,35.02-19.48,49.72-11.43,15.05-27.05,23.06-45.41,26.23-16.49,2.84-32.97,1.89-49.43-.26-5.95-.78-11.86-1.82-17.77-2.89-1.78-.32-2.37.12-2.8,1.88-4.53,18.47-9.21,36.9-13.72,55.36-.58,2.35-1.29,3-3.79,2.34-10.17-2.7-20.39-5.21-30.62-7.65-2.21-.53-2.95-1.07-2.3-3.61,4.65-18.05,9.04-36.17,13.64-54.24.54-2.11.24-2.88-1.95-3.41-7.98-1.94-15.92-4.03-23.85-6.19-2.01-.55-2.82-.2-3.35,1.98-4.48,18.29-9.13,36.53-13.6,54.82-.54,2.2-1.24,2.51-3.34,1.96-10.36-2.71-20.74-5.31-31.16-7.78-2.17-.51-2.57-1.22-2.03-3.35,4.64-18.34,9.12-36.72,13.79-55.06.59-2.32.24-3.18-2.14-3.78-22.75-5.66-45.46-11.47-68.21-17.12-2.19-.54-2.34-1.14-1.5-3.06,5.44-12.33,10.81-24.69,16.06-37.1.85-2.01,1.72-2.24,3.7-1.72,8.48,2.22,16.86,4.88,25.53,6.27,7.61,1.22,13.48-2.66,15.38-10.17,6.63-26.31,13.2-52.64,19.77-78.97,6.74-27.04,13.31-54.13,20.28-81.12,2.02-7.83-.76-18.7-12.07-22.87-6.6-2.43-13.48-3.86-20.29-5.53-2.87-.7-5.74-1.42-8.63-2.02-1.29-.27-1.89-.53-1.48-2.13,3.02-11.8,5.98-23.62,8.83-35.47.56-2.31,1.89-1.5,3.13-1.2,12.73,3.12,25.45,6.28,38.17,9.44,10.03,2.49,20.08,4.93,30.08,7.53,2.13.55,2.96.22,3.51-2.05,4.4-18.11,9-36.18,13.39-54.3.59-2.43,1.39-2.96,3.8-2.33,10.08,2.65,20.2,5.22,30.36,7.57,2.59.6,3.12,1.4,2.46,3.97-4.53,17.7-8.86,35.46-13.36,53.17-.5,1.97-.29,2.66,1.83,3.12,8.11,1.77,16.19,3.71,24.24,5.75,2.19.55,2.82-.14,3.31-2.15,4.26-17.39,8.61-34.76,12.94-52.13.9-3.61.89-3.63,4.47-2.74,10.12,2.53,20.21,5.14,30.36,7.55,2.2.52,2.53,1.25,1.99,3.36-4.63,18.25-9.09,36.54-13.75,54.78-.56,2.18.02,2.86,1.95,3.53,15.94,5.54,31.29,12.3,44.85,22.56,12.44,9.41,22.45,20.91,25.09,36.64,4.29,25.57-1.12,48.54-21.56,66.24-6.02,5.21-13.35,8.16-20.95,10.36-.88.26-1.77.5-3.01.85ZM188.42,312.93c5.91-.06,12.54-.5,19.03-2.14,12.95-3.26,22.29-10.52,25.93-23.83,3.67-13.43.27-24.98-9.71-34.64-6.67-6.45-14.58-10.97-22.97-14.73-18.5-8.28-38.22-12.38-57.82-16.9-2.03-.47-1.86.79-2.14,1.89-6.34,25.33-12.65,50.67-19.03,75.99-.46,1.83.1,2.39,1.8,2.8,6.28,1.52,12.5,3.25,18.78,4.77,14.92,3.62,29.97,6.46,46.15,6.79ZM205.02,193.42c4.38-.04,9.35-.29,14.25-1.35,12.61-2.75,21.7-9.54,25.32-22.38,3.73-13.24.57-24.6-9.72-33.89-5.41-4.88-11.65-8.43-18.25-11.37-14.77-6.58-30.5-9.84-46.15-13.41-1.65-.38-2.06.34-2.39,1.71-1.33,5.56-2.74,11.1-4.12,16.65-4.31,17.27-8.6,34.54-12.97,51.8-.45,1.78-.13,2.68,1.77,3.03,1.9.35,3.76.93,5.63,1.42,15.11,3.95,30.26,7.61,46.62,7.79Z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-soft-white">125%</span>
                      <span className="text-sm sm:text-base font-bold text-brand-vibrant-green">SIGN-UP BONUS</span>
                    </div>
                    <p className="text-brand-smoke-gray text-xs md:text-sm font-medium">ON YOUR FIRST 3 DEPOSITS</p>
                  </div>
                  <Button
                    variant="link"
                    className="text-brand-vibrant-green hover:text-brand-primary-green p-0 h-auto font-semibold text-xs md:text-sm"
                  >
                    MORE INFO
                  </Button>
                </div>
              </div>
            </Card>

            {/* Sign Up Bonus Card */}
            <Card className="bg-brand-charcoal-black-secondary border border-brand-vibrant-green/30 hover:border-brand-vibrant-green/60 hover:shadow-xl hover:shadow-brand-vibrant-green/20 transition-all duration-300 p-4 md:p-6 rounded-xl">
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Tag Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-brand-vibrant-green/40 bg-brand-vibrant-green/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-brand-vibrant-green"
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
                <div className="text-center space-y-3">
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-soft-white">125%</span>
                      <span className="text-sm sm:text-base font-bold text-brand-vibrant-green">SIGN-UP BONUS</span>
                    </div>
                    <p className="text-brand-smoke-gray text-xs md:text-sm font-medium">ON YOUR FIRST 3 DEPOSITS</p>
                  </div>
                  <Button
                    variant="link"
                    className="text-brand-vibrant-green hover:text-brand-primary-green p-0 h-auto font-semibold text-xs md:text-sm"
                  >
                    MORE INFO
                  </Button>
                </div>
              </div>
            </Card>

            {/* Casino Bonus Card */}
            <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 hover:border-brand-primary-green/60 hover:shadow-xl hover:shadow-brand-primary-green/20 transition-all duration-300 p-4 md:p-6 rounded-xl">
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Playing Cards Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-brand-primary-green/40 bg-brand-primary-green/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-brand-primary-green"
                      fill="currentColor"
                      stroke="currentColor"
                      viewBox="0 0 2801.07 2879.64"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="77.99"
                        d="M889.84,2701.98h-354.16c-120.85,0-220.13-99.04-220.13-220.12v-1286.64c0-46.81,38.28-85.08,85.09-85.08h711.37M1699.73,1110.14h700.69c46.81,0,85.09,38.49,85.09,85.08v1286.64c0,120.93-99.2,220.12-220.13,220.12h-354.14M128.26,511.81h909.38c46.87,0,85.09,38.22,85.09,85.09v324.44c0,46.87-38.22,85.09-85.09,85.09H128.26c-49.1,0-89.27-40.16-89.27-89.26v-316.09c0-49.1,40.16-89.27,89.27-89.27h0ZM1250.38,1745.83V582.89c0-29.5,24.13-53.62,53.63-53.62h193.06c29.5,0,53.63,24.13,53.63,53.62v1162.93M1763.45,511.81h909.37c49.1,0,89.26,40.17,89.26,89.27v316.09c0,49.1-40.16,89.26-89.26,89.26h-909.37c-46.88,0-85.1-38.22-85.1-85.09v-324.44c0-46.87,38.22-85.09,85.1-85.09h0Z"
                      />
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M1400.54,1817.49c293.29,0,531.07,237.78,531.07,531.08s-237.78,531.07-531.07,531.07-531.08-237.77-531.08-531.07,237.78-531.08,531.08-531.08h0ZM727.8,420.59l-61.09-86.4c-98.16-173.24,20.02-382.62,268.54-324.18,146.36,76.12,240.79,150.7,9.5,57.54-13.03,11.91-23.32,42.24-30.3,65.75-4.26,14.36-14.56,24.73-28.9,29.08-14.32,4.38-28.65,1.51-40.21-8.02-75.75-62.6-150.63-117.21-191.49-127.17-18.84-4.59-36.09-1.52-49.71,6.21-21.03,11.91-41.48,40.92-27.94,64.78l86.14,121.5c9.6,13.53,10.77,30.16,3.16,44.91-7.61,14.76-21.81,23.44-38.41,23.47l-104.64.16c-14.53.02-27.05-6.45-35.43-18.32h0ZM1400.55,170.94c88.26,0,160.65,68.06,167.51,154.56,1.96,24.55-5.61,46.39-22.31,64.48-16.71,18.08-37.9,27.35-62.52,27.35h-165.39c-24.62,0-45.8-9.27-62.51-27.35-16.69-18.09-24.27-39.95-22.31-64.48,6.86-86.5,79.26-154.56,167.53-154.56h0ZM1625.07,160.7c94.41-74.58,185.93-137.34,240.76-150.7,248.52-58.43,366.71,150.94,268.55,324.18l-61.09,86.4c-8.39,11.87-20.9,18.33-35.44,18.32l-104.64-.16c-16.61-.03-30.81-8.71-38.41-23.47-7.61-14.75-6.44-31.36,3.16-44.91l86.14-121.5c13.54-23.86-6.91-52.87-27.93-64.78-13.63-7.73-30.88-10.8-49.72-6.21-40.87,9.96-115.73,64.57-191.48,127.17-11.55,9.53-25.88,12.39-40.21,8-14.32-4.33-24.63-14.71-28.9-29.06-6.99-23.51-17.28-45.62-30.32-65.77-12.19-18.83-8.08-43.6,9.53-57.51h0ZM1193.77,2213.14c0-92.2,60.97-162.55,147.4-188.44v-71.19c0-13.88,11.31-25.18,25.19-25.18h68.36c13.88,0,25.19,11.31,25.19,25.18l.34,68.57c16.4,4.16,32.26,10.34,47.04,18.57,54.03,30.08,85.77,82.32,96.1,142.45,1.29,7.49-.66,14.68-5.57,20.49-4.9,5.8-11.65,8.95-19.25,8.95h-62.72c-11.22,0-20.84-7.17-24.09-17.91-24.49-81.04-175.27-89.1-175.27,10.29,0,54.17,69.06,74.2,110.38,89.28,95.59,34.9,180.42,71.61,180.42,189.81,0,92.2-60.95,162.57-147.4,188.45v71.17c0,13.86-11.32,25.18-25.19,25.18h-68.36c-13.88,0-25.19-11.3-25.19-25.18l-.34-68.56c-16.41-4.14-32.27-10.32-47.08-18.56-54.02-30.07-85.77-82.34-96.09-142.47-1.29-7.49.68-14.67,5.57-20.48,4.9-5.82,11.64-8.97,19.25-8.97h62.72c11.22,0,20.85,7.17,24.09,17.91,24.49,81.05,175.26,89.1,175.26-10.27,0-57.38-79.26-77.83-122.47-93.71-91.61-33.68-168.31-73.39-168.31-185.39h0Z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-soft-white">200%</span>
                      <span className="text-sm sm:text-base font-bold text-brand-primary-green">CASINO BONUS</span>
                    </div>
                    <p className="text-brand-smoke-gray text-xs md:text-sm font-medium">MATCH BONUS UP TO $5,000</p>
                  </div>
                  <Button
                    variant="link"
                    className="text-brand-primary-green hover:text-brand-vibrant-green p-0 h-auto font-semibold text-xs md:text-sm"
                  >
                    MORE INFO
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Bottom Features */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
      <section className="w-full py-12 bg-black border-b border-brand-smoke-gray/10 md:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-10">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl font-black mb-4 text-brand-soft-white md:text-3xl">GAMING OPTIONS</h3>
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
                title: "Wild Mustang",
                desc: "Gallop to big wins",
                image: "/images/wild-mustang.jpg",
              },
              {
                title: "Wild Rocks",
                desc: "Castle adventures await",
                image: "/images/wild-rocks.jpg",
              },
              {
                title: "Último Bingo París",
                desc: "French bingo excitement",
                image: "/images/ultimo-bingo-paris.jpg",
              },
              {
                title: "Tacomania",
                desc: "Spicy slot action",
                image: "/images/tacomania.jpg",
              },
              {
                title: "Xtreme",
                desc: "Maximum thrill gaming",
                image: "/images/xtreme.jpg",
              },
              {
                title: "Warrior Angels",
                desc: "Epic battle rewards",
                image: "/images/warrior-angels.jpg",
              },
              {
                title: "Totem Spirits",
                desc: "Mystical tribal wins",
                image: "/images/totem-spirits.jpg",
              },
              {
                title: "Triple Bonus",
                desc: "Triple the excitement",
                image: "/images/triple-bonus.jpg",
              },
              {
                title: "Turbo 2",
                desc: "High-speed slot fun",
                image: "/images/turbo-2.jpg",
              },
              {
                title: "Wonderful Lamp",
                desc: "Genie's magical prizes",
                image: "/images/wonderful-lamp.jpg",
              },
            ].map((option, index) => (
              <div key={index} className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <Card className="relative overflow-hidden rounded-2xl bg-brand-charcoal-black-secondary border border-brand-primary-green/30 shadow-lg hover:shadow-xl hover:border-brand-primary-green/60 transition-all duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={option.image || "/placeholder.svg"}
                      alt={option.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Card>

                <div className="mt-4 text-center space-y-3">
                  <h3 className="text-white font-bold text-sm md:text-lg leading-tight">{option.title}</h3>
                  <p className="text-brand-smoke-gray text-xs md:text-sm font-medium leading-tight">{option.desc}</p>
                  <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark font-bold px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-black rounded-lg">
                    <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                    Play Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Casino CTA Section */}
      <section className="w-full relative bg-brand-charcoal-black py-16 md:py-20 overflow-hidden border-b border-brand-smoke-gray/10">
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
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-black text-brand-soft-white md:text-3xl">ONLINE CASINO</h2>
            <p className="text-lg sm:text-xl text-brand-smoke-gray max-w-4xl mx-auto font-medium leading-relaxed md:text-xl">
              Experience the thrill of our premium casino games with the highest RTPs and biggest jackpots
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8">
              <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark font-black px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl text-black rounded-lg w-full sm:w-auto">
                PLAY CASINO GAMES
              </Button>
              <Button
                variant="outline"
                className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-soft-white bg-transparent px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl bg-transparent font-bold rounded-lg w-full md:w-auto"
              >
                SEE ALL GAMES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Games Sections */}
      <section className="py-16 bg-black md:py-2.5">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          {/* Recent Bets */}
          <div className="px-4 sm:px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-10">
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
