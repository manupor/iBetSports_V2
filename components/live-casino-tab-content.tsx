"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function LiveCasinoTabContent() {
  const registrationUrl = "https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en"

  const liveGames = [
    {
      id: 1,
      name: "Gods of Olympus",
      image: "/images/gods-of-olympus.jpg",
      players: 1247,
      category: "Slots",
      status: "live",
      minBet: "$0.20",
      maxBet: "$100",
    },
    {
      id: 2,
      name: "Blackjack Players Choice",
      image: "/images/blackjack-players-choice.jpg",
      players: 892,
      category: "Blackjack",
      status: "live",
      minBet: "$5",
      maxBet: "$2500",
    },
    {
      id: 3,
      name: "Dark Thirst",
      image: "/images/dark-thirst.jpg",
      players: 634,
      category: "Slots",
      status: "live",
      minBet: "$0.10",
      maxBet: "$50",
    },
    {
      id: 4,
      name: "Astro Roulette",
      image: "/images/astro-roulette.jpg",
      players: 423,
      category: "Roulette",
      status: "live",
      minBet: "$1",
      maxBet: "$5000",
    },
    {
      id: 5,
      name: "Boom Time",
      image: "/images/boom-time.jpg",
      players: 567,
      category: "Slots",
      status: "live",
      minBet: "$0.25",
      maxBet: "$125",
    },
    {
      id: 6,
      name: "European Roulette Live",
      image: "/images/european-roulette-live.jpg",
      players: 789,
      category: "Roulette",
      status: "live",
      minBet: "$0.50",
      maxBet: "$2500",
    },
    {
      id: 7,
      name: "Classic Fruits",
      image: "/images/classic-fruits.jpg",
      players: 345,
      category: "Slots",
      status: "live",
      minBet: "$0.10",
      maxBet: "$25",
    },
    {
      id: 8,
      name: "Downtown",
      image: "/images/downtown.jpg",
      players: 678,
      category: "Slots",
      status: "live",
      minBet: "$0.20",
      maxBet: "$75",
    },
  ]

  const categories = ["All", "Slots", "Roulette", "Blackjack", "Baccarat"]
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showSignupModal, setShowSignupModal] = useState(false)

  const filteredGames =
    selectedCategory === "All" ? liveGames : liveGames.filter((game) => game.category === selectedCategory)

  return (
    <div className="min-h-screen bg-brand-charcoal-black font-poppins">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Mobile Hero Layout - Image first, then text below */}
        <div className="block md:hidden">
          {/* Mobile Hero Image */}
          <div className="relative w-full h-48 sm:h-56 overflow-hidden">
            <Image
              src="/images/retrato-de-personas-jugando-y-jugando-en-un-casino.jpg"
              alt="People playing and gambling in a casino"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>

          {/* Mobile Hero Text Content */}
          <div className="bg-brand-charcoal-black py-8 px-4 text-center">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl font-black text-brand-soft-white">
                LIVE DEALERS.
                <span className="block">REAL THRILLS. INSTANT WINS.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white">
                Experience the authentic casino atmosphere with professional dealers streaming live 24/7.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 py-3 text-lg rounded-lg transition-all duration-300">
                    PLAY LIVE
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full h-[80vh] bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20">
                  <div className="w-full h-full">
                    <iframe
                      src="https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en"
                      className="w-full h-full border-0 rounded-lg"
                      title="Sign Up for Live Casino"
                      allow="fullscreen"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Desktop Hero Layout - Overlay design */}
        
      </section>

      {/* Live Casino Lobby */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Bar */}
        <div className="bg-brand-charcoal-black-secondary rounded-lg p-4 mb-8 border border-brand-smoke-gray/20 max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-brand-primary-green rounded-full animate-pulse"></div>
                <span className="text-brand-soft-white font-semibold">Live Now</span>
              </div>
              <div className="text-brand-smoke-gray">
                <span className="text-brand-primary-green font-bold text-xl">5,847</span> players online
              </div>
              <div className="text-brand-smoke-gray">
                <span className="text-brand-primary-green font-bold text-xl">24</span> live tables
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-brand-golden-yellow text-brand-charcoal-black font-bold">🔥 HOT</Badge>
              <Badge className="bg-brand-primary-green text-brand-charcoal-black font-bold">NEW</Badge>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-brand-primary-green text-brand-charcoal-black"
                    : "bg-brand-charcoal-black-secondary text-brand-soft-white border border-brand-smoke-gray/30 hover:border-brand-primary-green/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Live Games Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <Card
                key={game.id}
                className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Live Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-600 text-white font-bold animate-pulse">🔴 LIVE</Badge>
                    </div>

                    {/* Players Count */}
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-black/70 text-brand-primary-green font-bold">
                        {game.players.toLocaleString()} playing
                      </Badge>
                    </div>

                    {/* Game Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold text-white mb-1">{game.name}</h3>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-brand-smoke-gray">{game.category}</span>
                        <span className="text-brand-primary-green font-semibold">
                          {game.minBet} - {game.maxBet}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Dialog open={showSignupModal} onOpenChange={setShowSignupModal}>
                      <DialogTrigger asChild>
                        <Button className="bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-black px-8 py-3 text-lg rounded-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          PLAY NOW
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full h-[80vh] bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20">
                        <div className="w-full h-full">
                          <iframe
                            src="https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en"
                            className="w-full h-full border-0 rounded-lg"
                            title="Sign Up for Live Casino"
                            allow="fullscreen"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sign Up CTA with Iframe */}
        <div className="text-center py-12 mt-12 border-t border-brand-smoke-gray/20 max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-brand-soft-white mb-4">Ready to Experience Live Casino Action?</h2>
          <p className="text-xl text-brand-smoke-gray mb-8 max-w-3xl mx-auto">
            Join thousands of players at our live tables with professional dealers. Sign up now and get your welcome
            bonus!
          </p>

          {/* Sign Up Iframe */}
          <div className="max-w-4xl mx-auto mb-8"></div>

          <div className="text-center">
            <p className="text-brand-smoke-gray mb-4">Already have an account?</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-12 py-4 text-xl rounded-lg transition-all duration-300">
                  LOGIN & PLAY LIVE
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full h-[80vh] bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20">
                <div className="w-full h-full">
                  <iframe
                    src="https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en"
                    className="w-full h-full border-0 rounded-lg"
                    title="Login for Live Casino"
                    allow="fullscreen"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}
