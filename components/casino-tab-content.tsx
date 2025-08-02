"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CasinoTabContentProps {
  setIsRegistrationOpen: (open: boolean) => void
}

export default function CasinoTabContent({ setIsRegistrationOpen }: CasinoTabContentProps) {
  const [activeGameTab, setActiveGameTab] = useState("slots")

  const slotGames = [
    { name: "Golden Reels", image: "/images/slot-golden-reels.png", provider: "NetEnt" },
    { name: "Blackjack Pro", image: "/images/slot-blackjack-pro.png", provider: "Evolution" },
    { name: "Texas Hold'em", image: "/images/slot-texas-holdem.png", provider: "Pragmatic" },
    { name: "Winners Fortune", image: "/images/slot-winners-fortune.png", provider: "Microgaming" },
    { name: "European Roulette", image: "/images/slot-european-roulette.png", provider: "NetEnt" },
  ]

  const tableGames = [
    { name: "European Roulette", image: "/images/european-roulette-table.png", provider: "Evolution" },
    { name: "Blackjack Classic", image: "/images/first-person-blackjack.png", provider: "Evolution" },
    { name: "Baccarat Pro", image: "/images/first-person-baccarat.png", provider: "Evolution" },
    { name: "French Roulette", image: "/images/french-roulette.png", provider: "NetEnt" },
  ]

  const liveGames = [
    { name: "Lightning Roulette", image: "/images/lightning-roulette.png", provider: "Evolution" },
    { name: "Immersive Roulette", image: "/images/immersive-roulette.png", provider: "Evolution" },
    { name: "Speed Baccarat", image: "/images/speed-baccarat.png", provider: "Evolution" },
    { name: "Lightning Blackjack", image: "/images/lightning-blackjack.png", provider: "Evolution" },
  ]

  return (
    <div className="min-h-screen bg-brand-charcoal-black font-poppins w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/casino-hero.jpg"
            alt="Casino Hero"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                CASINO
              </span>{" "}
              GAMES
            </h1>
            <p className="text-brand-smoke-gray text-lg md:text-xl max-w-2xl">
              Experience the thrill of premium casino games with stunning graphics and massive jackpots
            </p>
            <Button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold px-8 py-3 text-lg"
            >
              PLAY NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-12 bg-black w-full">
        <div className="w-full px-4 md:px-8">
          <Tabs value={activeGameTab} onValueChange={setActiveGameTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-brand-charcoal-black-secondary">
              <TabsTrigger
                value="slots"
                className="text-brand-soft-white data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black"
              >
                SLOTS
              </TabsTrigger>
              <TabsTrigger
                value="table"
                className="text-brand-soft-white data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black"
              >
                TABLE GAMES
              </TabsTrigger>
              <TabsTrigger
                value="live"
                className="text-brand-soft-white data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black"
              >
                LIVE CASINO
              </TabsTrigger>
            </TabsList>

            <TabsContent value="slots" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {slotGames.map((game, index) => (
                  <Card
                    key={index}
                    className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 overflow-hidden hover:border-brand-primary-green/50 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={game.image || "/placeholder.svg"}
                        alt={game.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <Button
                          onClick={() => setIsRegistrationOpen(true)}
                          className="bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-bold"
                        >
                          PLAY
                        </Button>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="text-brand-soft-white font-bold text-sm">{game.name}</h3>
                      <p className="text-brand-smoke-gray text-xs">{game.provider}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="table" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tableGames.map((game, index) => (
                  <Card
                    key={index}
                    className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 overflow-hidden hover:border-brand-primary-green/50 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={game.image || "/placeholder.svg"}
                        alt={game.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <Button
                          onClick={() => setIsRegistrationOpen(true)}
                          className="bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-bold"
                        >
                          PLAY
                        </Button>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="text-brand-soft-white font-bold text-sm">{game.name}</h3>
                      <p className="text-brand-smoke-gray text-xs">{game.provider}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="live" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {liveGames.map((game, index) => (
                  <Card
                    key={index}
                    className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 overflow-hidden hover:border-brand-primary-green/50 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={game.image || "/placeholder.svg"}
                        alt={game.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <Button
                          onClick={() => setIsRegistrationOpen(true)}
                          className="bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-bold"
                        >
                          PLAY
                        </Button>
                      </div>
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">LIVE</div>
                    </div>
                    <div className="p-3">
                      <h3 className="text-brand-soft-white font-bold text-sm">{game.name}</h3>
                      <p className="text-brand-smoke-gray text-xs">{game.provider}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
