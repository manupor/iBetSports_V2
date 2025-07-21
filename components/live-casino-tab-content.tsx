"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Users, Video, Crown, Star, Target, Eye, Heart, Share2 } from "lucide-react"

/* ────────────────────────────
   DATA
   ──────────────────────────── */

const categories = [
  { id: "all", name: "All Games", count: 156 },
  { id: "roulette", name: "Roulette", count: 45 },
  { id: "blackjack", name: "Blackjack", count: 38 },
  { id: "baccarat", name: "Baccarat", count: 32 },
  { id: "poker", name: "Poker", count: 24 },
  { id: "gameshow", name: "Game Shows", count: 17 },
] as const

const liveGames = [
  {
    id: 1,
    name: "Lightning Roulette",
    provider: "Evolution Gaming",
    image: "/images/lightning-roulette.png",
    category: "roulette",
    players: "2.4K",
    dealer: "Emma",
    language: "English",
    minBet: "$1",
    maxBet: "$5,000",
    isVip: false,
    isNew: false,
    rating: 4.9,
    features: ["Lightning Multipliers", "HD Stream", "Mobile Optimized"],
  },
  {
    id: 2,
    name: "Immersive Roulette",
    provider: "Evolution Gaming",
    image: "/images/immersive-roulette.png",
    category: "roulette",
    players: "1.8K",
    dealer: "Sofia",
    language: "English",
    minBet: "$1",
    maxBet: "$10,000",
    isVip: true,
    isNew: false,
    rating: 4.8,
    features: ["Multiple Cameras", "Slow Motion", "HD Stream"],
  },
  {
    id: 3,
    name: "Speed Roulette",
    provider: "Evolution Gaming",
    image: "/images/speed-roulette.png",
    category: "roulette",
    players: "1.2K",
    dealer: "Alex",
    language: "English",
    minBet: "$0.50",
    maxBet: "$2,500",
    isVip: false,
    isNew: false,
    rating: 4.7,
    features: ["Fast Gameplay", "25 Second Rounds", "HD Stream"],
  },
  {
    id: 4,
    name: "Lightning Blackjack",
    provider: "Evolution Gaming",
    image: "/images/lightning-blackjack.png",
    category: "blackjack",
    players: "1.9K",
    dealer: "Michael",
    language: "English",
    minBet: "$1",
    maxBet: "$2,500",
    isVip: false,
    isNew: true,
    rating: 4.9,
    features: ["Lightning Cards", "Multipliers", "Unlimited Players"],
  },
  {
    id: 5,
    name: "First Person Blackjack",
    provider: "Evolution Gaming",
    image: "/images/first-person-blackjack.png",
    category: "blackjack",
    players: "856",
    dealer: "AI Dealer",
    language: "Multi-language",
    minBet: "$1",
    maxBet: "$1,000",
    isVip: false,
    isNew: false,
    rating: 4.6,
    features: ["RNG Based", "Fast Play", "Switch to Live"],
  },
  {
    id: 6,
    name: "Speed Baccarat",
    provider: "Evolution Gaming",
    image: "/images/speed-baccarat.png",
    category: "baccarat",
    players: "1.5K",
    dealer: "Luna",
    language: "English",
    minBet: "$1",
    maxBet: "$10,000",
    isVip: false,
    isNew: false,
    rating: 4.8,
    features: ["27 Second Rounds", "Side Bets", "HD Stream"],
  },
  {
    id: 7,
    name: "First Person Baccarat",
    provider: "Evolution Gaming",
    image: "/images/first-person-baccarat.png",
    category: "baccarat",
    players: "743",
    dealer: "AI Dealer",
    language: "Multi-language",
    minBet: "$1",
    maxBet: "$5,000",
    isVip: false,
    isNew: false,
    rating: 4.7,
    features: ["RNG Based", "Statistics", "Switch to Live"],
  },
  {
    id: 8,
    name: "First Person Roulette",
    provider: "Evolution Gaming",
    image: "/images/first-person-roulette.png",
    category: "roulette",
    players: "692",
    dealer: "AI Dealer",
    language: "Multi-language",
    minBet: "$0.10",
    maxBet: "$1,000",
    isVip: false,
    isNew: false,
    rating: 4.5,
    features: ["RNG Based", "Statistics", "Switch to Live"],
  },
] as const

/* ────────────────────────────
   COMPONENT
   ──────────────────────────── */

export default function LiveCasinoTabContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredGames = liveGames.filter((g) => selectedCategory === "all" || g.category === selectedCategory)

  /* Helper: single game card */
  const LiveGameCard = ({ game }: { game: (typeof liveGames)[number] }) => (
    <Card className="group relative overflow-hidden rounded-xl bg-brand-charcoal-black-secondary border border-brand-primary-green/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
      <div className="aspect-[4/3] relative">
        <Image
          src={game.image || "/placeholder.svg"}
          alt={game.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* LIVE badge */}
        <div className="absolute top-2 left-2">
          <Badge className="bg-red-500 text-white animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full mr-1" />
            LIVE
          </Badge>
        </div>

        {/* NEW / VIP badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {game.isNew && <Badge className="bg-brand-vibrant-green text-brand-charcoal-black text-xs">NEW</Badge>}
          {game.isVip && (
            <Badge className="bg-yellow-500 text-brand-charcoal-black text-xs">
              <Crown className="w-3 h-3 mr-1" />
              VIP
            </Badge>
          )}
        </div>

        {/* Player count */}
        <div className="absolute bottom-2 left-2">
          <Badge className="bg-black/70 text-brand-soft-white text-xs">
            <Users className="w-3 h-3 mr-1" />
            {game.players}
          </Badge>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold mb-3 px-6 py-2">
            <Play className="w-4 h-4 mr-2" />
            Play Live
          </Button>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="border-brand-primary-green text-brand-soft-white hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent"
            >
              <Eye className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-brand-primary-green text-brand-soft-white hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent"
            >
              <Heart className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-brand-primary-green text-brand-soft-white hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Game info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-brand-soft-white text-sm truncate">{game.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs text-brand-smoke-gray">{game.rating}</span>
          </div>
        </div>
        <div className="text-xs text-brand-smoke-gray mb-2 flex justify-between">
          <span>{game.provider}</span>
          <span>Dealer: {game.dealer}</span>
        </div>
        <div className="text-xs text-brand-smoke-gray flex justify-between">
          <span>
            {game.minBet} - {game.maxBet}
          </span>
          <span>{game.language}</span>
        </div>
      </div>
    </Card>
  )

  /* ────────────────────────────
     RENDER
     ──────────────────────────── */

  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black py-12 md:py-16">
        <Image
          src="/images/live-lobby.png"
          alt="Live casino background"
          fill
          className="absolute inset-0 object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4">LIVE CASINO</h1>
          <p className="text-xl md:text-2xl text-brand-smoke-gray mb-8 max-w-3xl mx-auto">
            Experience the thrill of real casino games with professional dealers streaming live in HD
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4 bg-brand-charcoal-black-secondary px-6 py-3 rounded-full">
              <Video className="w-6 h-6 text-brand-primary-green" />
              <span className="font-bold">HD Live Streaming</span>
            </div>
            <div className="flex items-center gap-4 bg-brand-charcoal-black-secondary px-6 py-3 rounded-full">
              <Users className="w-6 h-6 text-brand-vibrant-green" />
              <span className="font-bold">Professional Dealers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-brand-charcoal-black-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Live Tables",
                value: "156",
                Icon: Video,
                color: "text-brand-primary-green",
              },
              {
                title: "Active Players",
                value: "12.4K",
                Icon: Users,
                color: "text-brand-vibrant-green",
              },
              {
                title: "Professional Dealers",
                value: "89",
                Icon: Crown,
                color: "text-yellow-500",
              },
              {
                title: "Languages",
                value: "12",
                Icon: Target,
                color: "text-blue-500",
              },
            ].map(({ title, value, Icon, color }) => (
              <Card
                key={title}
                className="bg-brand-charcoal-black border border-brand-primary-green/30 p-6 text-center"
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${color}`} />
                <div className="text-3xl font-bold mb-1">{value}</div>
                <div className="text-sm text-brand-smoke-gray">{title}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          {/* Category tabs */}
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-brand-charcoal-black-secondary mb-8">
            {categories.map((c) => (
              <TabsTrigger
                key={c.id}
                value={c.id}
                className="data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black text-brand-soft-white"
              >
                <span className="flex flex-col items-center">
                  <span className="text-sm font-bold">{c.name}</span>
                  <span className="text-xs opacity-70">({c.count})</span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Games grid (same value for each trigger, rendered once) */}
          <TabsContent value={selectedCategory}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map((g) => (
                <LiveGameCard key={g.id} game={g} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
