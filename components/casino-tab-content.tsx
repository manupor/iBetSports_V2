"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Play,
  Search,
  Filter,
  LayoutGrid,
  List,
  Star,
  TrendingUp,
  Clock,
  Zap,
  Crown,
  Gem,
  Eye,
  Heart,
  Share2,
} from "lucide-react"

interface CasinoTabContentProps {
  setIsRegistrationOpen?: (open: boolean) => void
}

export default function CasinoTabContent({ setIsRegistrationOpen }: CasinoTabContentProps = {}) {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const isRegistrationOpenState = useState(false)
  const [isRegistrationOpen, setIsRegistrationOpenInternal] = isRegistrationOpenState

  const categories = [
    { id: "all", name: "All Games", count: 2847 },
    { id: "slots", name: "Slots", count: 1523 },
    { id: "table", name: "Table Games", count: 234 },
    { id: "live", name: "Live Casino", count: 156 },
    { id: "jackpot", name: "Jackpots", count: 89 },
    { id: "new", name: "New Games", count: 45 },
    { id: "popular", name: "Popular", count: 200 },
  ]

  const featuredGames = [
    {
      id: 1,
      name: "Mega Fortune Dreams",
      provider: "NetEnt",
      image: "/images/Fizzy-Pennyslot.jpg",
      rtp: "96.4%",
      jackpot: "$2,847,392",
      category: "jackpot",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "12.3K",
    },
    {
      id: 2,
      name: "Lightning Roulette",
      provider: "Evolution",
      image: "/images/Golden-Catch.jpg",
      rtp: "97.3%",
      jackpot: null,
      category: "live",
      isNew: false,
      isHot: true,
      rating: 4.9,
      players: "8.7K",
    },
    {
      id: 3,
      name: "Book of Dead",
      provider: "Play'n GO",
      image: "/images/Max-Megaways-2.jpg",
      rtp: "96.2%",
      jackpot: null,
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.7,
      players: "15.2K",
    },
    {
      id: 4,
      name: "Immersive Roulette",
      provider: "Evolution",
      image: "/images/Gifts-of-Fortune.jpg",
      rtp: "97.3%",
      jackpot: null,
      category: "live",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "6.9K",
    },
    {
      id: 5,
      name: "Starburst",
      provider: "NetEnt",
      image: "/images/Kingmaker-Fully-Loaded.jpg",
      rtp: "96.1%",
      jackpot: null,
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "22.1K",
    },
    {
      id: 6,
      name: "Blackjack Pro",
      provider: "NetEnt",
      image: "/images/Castle-of-Terror.jpg",
      rtp: "99.4%",
      jackpot: null,
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.9,
      players: "4.3K",
    },
  ]

  const slotGames = [
    {
      id: 7,
      name: "Gates of Olympus",
      provider: "Pragmatic Play",
      image: "/images/Danger-High-Voltage.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: true,
      isHot: true,
      rating: 4.7,
      players: "18.5K",
    },
    {
      id: 8,
      name: "Sweet Bonanza",
      provider: "Pragmatic Play",
      image: "/images/Chocolates.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "16.2K",
    },
    {
      id: 9,
      name: "Wolf Gold",
      provider: "Pragmatic Play",
      image: "/images/Big-Bad-Bison.jpg",
      rtp: "96.0%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "11.7K",
    },
    {
      id: 10,
      name: "Dead or Alive 2",
      provider: "NetEnt",
      image: "/images/wild-mustang.jpg",
      rtp: "96.8%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.9,
      players: "9.4K",
    },
    {
      id: 11,
      name: "Gonzo's Quest",
      provider: "NetEnt",
      image: "/images/wild-rocks.jpg",
      rtp: "96.0%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.7,
      players: "13.8K",
    },
    {
      id: 12,
      name: "Reactoonz",
      provider: "Play'n GO",
      image: "/images/ultimo-bingo-paris.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "7.9K",
    },
  ]

  const tableGames = [
    {
      id: 13,
      name: "European Roulette",
      provider: "NetEnt",
      image: "/images/tacomania.jpg",
      rtp: "97.3%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.8,
      players: "5.2K",
    },
    {
      id: 14,
      name: "American Roulette",
      provider: "NetEnt",
      image: "/images/xtreme.jpg",
      rtp: "94.7%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "3.1K",
    },
    {
      id: 15,
      name: "French Roulette",
      provider: "NetEnt",
      image: "/images/warrior-angels.jpg",
      rtp: "98.6%",
      category: "table",
      isNew: false,
      isHot: true,
      rating: 4.9,
      players: "2.8K",
    },
    {
      id: 16,
      name: "Multi-hand Blackjack",
      provider: "NetEnt",
      image: "/images/totem-spirits.jpg",
      rtp: "99.6%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.8,
      players: "4.7K",
    },
    {
      id: 17,
      name: "European Blackjack",
      provider: "NetEnt",
      image: "/images/triple-bonus.jpg",
      rtp: "99.3%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.7,
      players: "3.9K",
    },
    {
      id: 18,
      name: "21 Burn Blackjack",
      provider: "Betsoft",
      image: "/images/turbo-2.jpg",
      rtp: "99.5%",
      category: "table",
      isNew: true,
      isHot: true,
      rating: 4.8,
      players: "2.3K",
    },
  ]

  const liveGames = [
    {
      id: 19,
      name: "Speed Roulette",
      provider: "Evolution",
      image: "/images/wonderful-lamp.jpg",
      rtp: "97.3%",
      category: "live",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "7.2K",
    },
    {
      id: 20,
      name: "Speed Baccarat",
      provider: "Evolution",
      image: "/images/Fizzy-Pennyslot.jpg",
      rtp: "98.9%",
      category: "live",
      isNew: false,
      isHot: true,
      rating: 4.9,
      players: "5.8K",
    },
    {
      id: 21,
      name: "Lightning Blackjack",
      provider: "Evolution",
      image: "/images/Golden-Catch.jpg",
      rtp: "99.5%",
      category: "live",
      isNew: true,
      isHot: true,
      rating: 4.9,
      players: "6.4K",
    },
    {
      id: 22,
      name: "First Person Roulette",
      provider: "Evolution",
      image: "/images/Max-Megaways-2.jpg",
      rtp: "97.3%",
      category: "live",
      isNew: false,
      isHot: false,
      rating: 4.7,
      players: "3.5K",
    },
    {
      id: 23,
      name: "First Person Baccarat",
      provider: "Evolution",
      image: "/images/Gifts-of-Fortune.jpg",
      rtp: "98.9%",
      category: "live",
      isNew: false,
      isHot: false,
      rating: 4.8,
      players: "2.9K",
    },
    {
      id: 24,
      name: "First Person Blackjack",
      provider: "Evolution",
      image: "/images/Kingmaker-Fully-Loaded.jpg",
      rtp: "99.4%",
      category: "live",
      isNew: false,
      isHot: false,
      rating: 4.8,
      players: "4.1K",
    },
  ]

  const allGames = [...featuredGames, ...slotGames, ...tableGames, ...liveGames]

  const filteredGames = allGames.filter((game) => {
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || game.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const GameCard = ({ game }: { game: any }) => (
    <Card className="group relative overflow-hidden rounded-xl bg-brand-charcoal-black-secondary border border-brand-primary-green/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
      <div className="aspect-[3/4] relative">
        <Image
          src={game.image || "/placeholder.svg"}
          alt={game.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {game.isNew && (
            <Badge className="bg-brand-vibrant-green text-brand-charcoal-black text-xs px-2 py-1">NEW</Badge>
          )}
          {game.isHot && <Badge className="bg-red-500 text-white text-xs px-2 py-1">HOT</Badge>}
        </div>

        <div className="absolute top-2 right-2">
          <Badge className="bg-black/70 text-brand-soft-white px-2 py-1 text-xs">RTP {game.rtp}</Badge>
        </div>

        {game.jackpot && (
          <div className="absolute top-12 right-2">
            <Badge className="bg-brand-primary-green text-brand-charcoal-black px-2 py-1 text-xs font-bold">
              {game.jackpot}
            </Badge>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            onClick={() => setIsRegistrationOpenInternal(true)}
            className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold mb-3 px-4 md:px-6 py-2"
          >
            <Play className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            Play Now
          </Button>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="border-brand-primary-green text-brand-soft-white hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent p-2"
            >
              <Eye className="w-3 h-3 md:w-4 md:h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-brand-primary-green text-brand-soft-white hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent p-2"
            >
              <Heart className="w-3 h-3 md:w-4 md:h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-brand-primary-green text-brand-soft-white hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent p-2"
            >
              <Share2 className="w-3 h-3 md:w-4 md:h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-3 md:p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-brand-soft-white text-xs md:text-sm truncate">{game.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs text-brand-smoke-gray">{game.rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-brand-smoke-gray">
          <span>{game.provider}</span>
          <span>{game.players} playing</span>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-brand-charcoal-black">
      {/* Mobile Hero Section - Image First, Text Below */}
      <div className="block md:hidden">
        {/* Hero Image */}
        <div className="relative h-48 sm:h-56">
          <Image
            src="/images/casino-hero.jpg"
            alt="Casino background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Text Content Below Image */}
        <div className="bg-brand-charcoal-black py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-black text-brand-soft-white mb-4">CASINO GAMES</h1>
            <p className="text-lg mb-6 max-w-3xl mx-auto text-white">
              Experience the thrill of over 2,800+ premium casino games
              <br />
              with the highest RTPs and biggest jackpots
            </p>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-4 py-2 rounded-full">
                <Crown className="w-5 h-5 text-brand-primary-green" />
                <span className="text-brand-soft-white font-bold text-sm">VIP Rewards Available</span>
              </div>
              <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-brand-vibrant-green" />
                <span className="text-brand-soft-white font-bold text-sm">Instant Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Hero Section - Overlay Design */}
      <div className="hidden md:block relative bg-gradient-to-r from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]">
        <div className="absolute inset-0">
          <Image src="/images/casino-hero.jpg" alt="Casino background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-left flex flex-col justify-center h-full">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-soft-white mb-4">CASINO GAMES</h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl lg:text-xl text-white">
            Experience the thrill of over 2,800+ premium casino games
            <br />
            with the highest RTPs and biggest jackpots
          </p>
          <div className="flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-4 md:px-6 py-2 md:py-3 rounded-full">
              <Crown className="w-5 h-5 md:w-6 md:h-6 text-brand-primary-green" />
              <span className="text-brand-soft-white font-bold text-sm md:text-base">VIP Rewards Available</span>
            </div>
            <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-4 md:px-6 py-2 md:py-3 rounded-full">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-brand-vibrant-green" />
              <span className="text-brand-soft-white font-bold text-sm md:text-base">Instant Play</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-brand-charcoal-black-secondary border-b border-brand-smoke-gray/20 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-smoke-gray w-4 h-4 md:w-5 md:h-5" />
              <Input
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-brand-charcoal-black-tertiary border-brand-smoke-gray/30 text-brand-soft-white placeholder-brand-smoke-gray"
              />
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-brand-charcoal-black-tertiary rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={
                    viewMode === "grid" ? "bg-brand-primary-green text-brand-charcoal-black" : "text-brand-soft-white"
                  }
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={
                    viewMode === "list" ? "bg-brand-primary-green text-brand-charcoal-black" : "text-brand-soft-white"
                  }
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              <Button
                variant="outline"
                className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          {/* Category Tabs */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <TabsList className="grid min-w-[640px] w-full grid-cols-7 bg-brand-charcoal-black-secondary mb-4 md:mb-8 py-3 md:py-3.5">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black text-brand-soft-white text-xs md:text-sm whitespace-nowrap"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-bold">{category.name}</span>
                    <span className="text-xs opacity-70">({category.count})</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Featured Games */}
          <TabsContent value="all" className="space-y-4 sm:space-y-6 md:space-y-8 mt-2 sm:mt-4 md:mt-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 md:mb-6 mt-2 sm:mt-4">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-soft-white flex items-center">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-brand-primary-green" />
                  Featured Games
                </h2>
                <div className="mt-2 sm:mt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm border-brand-primary-green/50 text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent"
                  >
                    View All
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
                {featuredGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* All Games */}
          <TabsContent value="all" className="space-y-4 sm:space-y-6 md:space-y-8 mt-2 sm:mt-4 md:mt-6">
            <div>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-soft-white">
                  All Games ({filteredGames.length})
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
                {filteredGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Slots */}
          <TabsContent value="slots" className="space-y-4 sm:space-y-6 md:space-y-8 mt-2 sm:mt-4 md:mt-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 md:mb-6 mt-2 sm:mt-4">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-soft-white flex items-center">
                  <Gem className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-brand-primary-green" />
                  Slot Games
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
                {slotGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Table Games */}
          <TabsContent value="table" className="space-y-4 sm:space-y-6 md:space-y-8 mt-2 sm:mt-4 md:mt-6">
            <div>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-soft-white flex items-center">
                  <Crown className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-brand-primary-green" />
                  Table Games
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
                {tableGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Live Casino */}
          <TabsContent value="live" className="space-y-4 sm:space-y-6 md:space-y-8 mt-2 sm:mt-4 md:mt-6">
            <div>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-soft-white flex items-center">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-brand-primary-green" />
                  Live Casino
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
                {liveGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Jackpot Games */}
          <TabsContent value="jackpot" className="space-y-4 sm:space-y-6 md:space-y-8 mt-2 sm:mt-4 md:mt-6">
            <div>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-soft-white flex items-center">
                  <Crown className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-brand-primary-green" />
                  Jackpot Games
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
                {featuredGames
                  .filter((game) => game.jackpot)
                  .map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
              </div>
            </div>
          </TabsContent>

          {/* New Games */}
          <TabsContent value="new" className="space-y-4 sm:space-y-6 md:space-y-8 mt-2 sm:mt-4 md:mt-6">
            <div>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-soft-white flex items-center">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-brand-primary-green" />
                  New Games
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
                {allGames
                  .filter((game) => game.isNew)
                  .map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
              </div>
            </div>
          </TabsContent>

          {/* Popular Games */}
          <TabsContent value="popular" className="space-y-4 sm:space-y-6 md:space-y-8 mt-2 sm:mt-4 md:mt-6">
            <div>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-soft-white flex items-center">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-brand-primary-green" />
                  Popular Games
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
                {allGames
                  .filter((game) => game.isHot)
                  .map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Registration Modal */}
      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpenInternal}>
        <DialogContent className="sm:max-w-md bg-brand-charcoal-black-secondary border border-brand-primary-green/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-brand-soft-white text-center">
              Create Your Account
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-brand-soft-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/30 text-brand-soft-white placeholder-brand-smoke-gray"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username" className="text-brand-soft-white">
                Username
              </Label>
              <Input
                id="username"
                placeholder="Choose a username"
                className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/30 text-brand-soft-white placeholder-brand-smoke-gray"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-brand-soft-white">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/30 text-brand-soft-white placeholder-brand-smoke-gray"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-brand-soft-white">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/30 text-brand-soft-white placeholder-brand-smoke-gray"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="border-brand-primary-green data-[state=checked]:bg-brand-primary-green" />
              <Label htmlFor="terms" className="text-sm text-brand-smoke-gray">
                I agree to the Terms & Conditions and Privacy Policy
              </Label>
            </div>
            <Button className="w-full bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold py-3">
              Create Account
            </Button>
            <p className="text-center text-sm text-brand-smoke-gray">
              Already have an account? <button className="text-brand-primary-green hover:underline">Sign In</button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
