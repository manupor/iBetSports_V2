"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SportsbookTabContentProps {
  setIsRegistrationOpen: (open: boolean) => void
}

export default function SportsbookTabContent({ setIsRegistrationOpen }: SportsbookTabContentProps) {
  const [activeSportsTab, setActiveSportsTab] = useState("football")

  const footballGames = [
    { teams: "Chiefs vs Bills", time: "8:00 PM", spread: "-3.5", total: "52.5", moneyline: "-165" },
    { teams: "Cowboys vs Eagles", time: "4:25 PM", spread: "+7", total: "48.5", moneyline: "+280" },
    { teams: "49ers vs Rams", time: "8:20 PM", spread: "-2.5", total: "45.5", moneyline: "-125" },
  ]

  const basketballGames = [
    { teams: "Lakers vs Warriors", time: "10:00 PM", spread: "-4.5", total: "225.5", moneyline: "-180" },
    { teams: "Celtics vs Heat", time: "7:30 PM", spread: "+2.5", total: "218.5", moneyline: "+110" },
    { teams: "Nuggets vs Suns", time: "9:00 PM", spread: "-6", total: "232.5", moneyline: "-240" },
  ]

  const baseballGames = [
    { teams: "Yankees vs Red Sox", time: "7:05 PM", spread: "-1.5", total: "9.5", moneyline: "-145" },
    { teams: "Dodgers vs Giants", time: "10:15 PM", spread: "+1.5", total: "8.5", moneyline: "+125" },
    { teams: "Astros vs Rangers", time: "8:05 PM", spread: "-2", total: "10.5", moneyline: "-165" },
  ]

  return (
    <div className="min-h-screen bg-brand-charcoal-black font-poppins w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-nfl-stadium-players.jpg"
            alt="Sports Betting Hero"
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
                SPORTS
              </span>{" "}
              BETTING
            </h1>
            <p className="text-brand-smoke-gray text-lg md:text-xl max-w-2xl">
              Bet on your favorite teams with competitive odds and live betting options
            </p>
            <Button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold px-8 py-3 text-lg"
            >
              BET NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Sports Betting Section */}
      <section className="py-12 bg-black w-full">
        <div className="w-full px-4 md:px-8">
          <Tabs value={activeSportsTab} onValueChange={setActiveSportsTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-brand-charcoal-black-secondary">
              <TabsTrigger
                value="football"
                className="text-brand-soft-white data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black"
              >
                FOOTBALL
              </TabsTrigger>
              <TabsTrigger
                value="basketball"
                className="text-brand-soft-white data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black"
              >
                BASKETBALL
              </TabsTrigger>
              <TabsTrigger
                value="baseball"
                className="text-brand-soft-white data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black"
              >
                BASEBALL
              </TabsTrigger>
            </TabsList>

            <TabsContent value="football" className="mt-8">
              <div className="space-y-4">
                {footballGames.map((game, index) => (
                  <Card key={index} className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-brand-soft-white font-bold text-lg">{game.teams}</h3>
                        <p className="text-brand-smoke-gray text-sm">{game.time}</p>
                      </div>
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <p className="text-brand-smoke-gray text-xs">SPREAD</p>
                          <Button
                            onClick={() => setIsRegistrationOpen(true)}
                            variant="outline"
                            className="text-brand-soft-white border-brand-smoke-gray hover:bg-brand-primary-green hover:text-brand-charcoal-black"
                          >
                            {game.spread}
                          </Button>
                        </div>
                        <div className="text-center">
                          <p className="text-brand-smoke-gray text-xs">TOTAL</p>
                          <Button
                            onClick={() => setIsRegistrationOpen(true)}
                            variant="outline"
                            className="text-brand-soft-white border-brand-smoke-gray hover:bg-brand-primary-green hover:text-brand-charcoal-black"
                          >
                            O/U {game.total}
                          </Button>
                        </div>
                        <div className="text-center">
                          <p className="text-brand-smoke-gray text-xs">MONEYLINE</p>
                          <Button
                            onClick={() => setIsRegistrationOpen(true)}
                            variant="outline"
                            className="text-brand-soft-white border-brand-smoke-gray hover:bg-brand-primary-green hover:text-brand-charcoal-black"
                          >
                            {game.moneyline}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="basketball" className="mt-8">
              <div className="space-y-4">
                {basketballGames.map((game, index) => (
                  <Card key={index} className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-brand-soft-white font-bold text-lg">{game.teams}</h3>
                        <p className="text-brand-smoke-gray text-sm">{game.time}</p>
                      </div>
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <p className="text-brand-smoke-gray text-xs">SPREAD</p>
                          <Button
                            onClick={() => setIsRegistrationOpen(true)}
                            variant="outline"
                            className="text-brand-soft-white border-brand-smoke-gray hover:bg-brand-primary-green hover:text-brand-charcoal-black"
                          >
                            {game.spread}
                          </Button>
                        </div>
                        <div className="text-center">
                          <p className="text-brand-smoke-gray text-xs">TOTAL</p>
                          <Button
                            onClick={() => setIsRegistrationOpen(true)}
                            variant="outline"
                            className="text-brand-soft-white border-brand-smoke-gray hover:bg-brand-primary-green hover:text-brand-charcoal-black"
                          >
                            O/U {game.total}
                          </Button>
                        </div>
                        <div className="text-center">
                          <p className="text-brand-smoke-gray text-xs">MONEYLINE</p>
                          <Button
                            onClick={() => setIsRegistrationOpen(true)}
                            variant="outline"
                            className="text-brand-soft-white border-brand-smoke-gray hover:bg-brand-primary-green hover:text-brand-charcoal-black"
                          >
                            {game.moneyline}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="baseball" className="mt-8">
              <div className="space-y-4">
                {baseballGames.map((game, index) => (
                  <Card key={index} className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-brand-soft-white font-bold text-lg">{game.teams}</h3>
                        <p className="text-brand-smoke-gray text-sm">{game.time}</p>
                      </div>
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <p className="text-brand-smoke-gray text-xs">RUN LINE</p>
                          <Button
                            onClick={() => setIsRegistrationOpen(true)}
                            variant="outline"
                            className="text-brand-soft-white border-brand-smoke-gray hover:bg-brand-primary-green hover:text-brand-charcoal-black"
                          >
                            {game.spread}
                          </Button>
                        </div>
                        <div className="text-center">
                          <p className="text-brand-smoke-gray text-xs">TOTAL</p>
                          <Button
                            onClick={() => setIsRegistrationOpen(true)}
                            variant="outline"
                            className="text-brand-soft-white border-brand-smoke-gray hover:bg-brand-primary-green hover:text-brand-charcoal-black"
                          >
                            O/U {game.total}
                          </Button>
                        </div>
                        <div className="text-center">
                          <p className="text-brand-smoke-gray text-xs">MONEYLINE</p>
                          <Button
                            onClick={() => setIsRegistrationOpen(true)}
                            variant="outline"
                            className="text-brand-soft-white border-brand-smoke-gray hover:bg-brand-primary-green hover:text-brand-charcoal-black"
                          >
                            {game.moneyline}
                          </Button>
                        </div>
                      </div>
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
