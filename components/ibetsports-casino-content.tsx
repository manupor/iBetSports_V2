"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Trophy, Zap, Crown, Gift } from "lucide-react"
import Image from "next/image"

export function IbetSportsCasinoContent() {
  const [activeTab, setActiveTab] = useState("Game Lobby")

  const tabs = [
    "Game Lobby",
    "All Providers",
    "Featured Games",
    "Slots",
    "Live Tables",
    "Table Games",
    "Video Poker",
    "Promotions",
  ]

  // Game Lobby - Overview of all games
  const gameLobbyContent = {
    featuredGames: [
      { name: "Live Lobby", image: "/images/live-lobby.png", category: "Live Casino", players: "1.2K" },
      { name: "Game Lobby", image: "/images/game-lobby.png", category: "All Games", players: "5.8K" },
      { name: "Monster Pop", image: "/images/monster-pop.png", category: "Slots", players: "892" },
      { name: "Vegas 2", image: "/images/vegas-2.png", category: "Slots", players: "1.5K" },
      { name: "Tri-Card", image: "/images/tri-card.png", category: "Table Games", players: "234" },
      { name: "Pro HD", image: "/images/pro-hd.png", category: "Live Casino", players: "567" },
    ],
    popularGames: [
      { name: "Arctic Race", image: "/images/arctic-race.png", category: "Slots", rtp: "96.5%" },
      { name: "Olympus Tumble", image: "/images/olympus-tumble.png", category: "Slots", rtp: "95.8%" },
      { name: "Lightning Roulette", image: "/images/lightning-roulette.png", category: "Live Casino", rtp: "97.3%" },
      {
        name: "First Person Blackjack",
        image: "/images/first-person-blackjack.png",
        category: "Live Casino",
        rtp: "99.4%",
      },
    ],
  }

  // All Providers
  const allProviders = [
    { name: "Evolution Gaming", logo: "/images/provider-001.png", games: 150, category: "Live Casino" },
    { name: "Pragmatic Play", logo: "/images/provider-002.png", games: 280, category: "Slots" },
    { name: "NetEnt", logo: "/images/provider-003.png", games: 200, category: "Slots" },
    { name: "Microgaming", logo: "/images/provider-004.png", games: 350, category: "All Games" },
    { name: "Play'n GO", logo: "/images/provider-005.png", games: 180, category: "Slots" },
    { name: "Red Tiger", logo: "/images/provider-006.png", games: 120, category: "Slots" },
    { name: "Ezugi", logo: "/images/provider-007.png", games: 45, category: "Live Casino" },
    { name: "Yggdrasil", logo: "/images/provider-008.png", games: 90, category: "Slots" },
  ]

  // Featured Games
  const featuredGames = [
    { name: "Big Catch", image: "/images/big-catch-banner.png", category: "Featured", jackpot: "$2.4M", hot: true },
    { name: "Monster Pop", image: "/images/monster-pop.png", category: "Slots", jackpot: "N/A", hot: true },
    {
      name: "Lightning Roulette",
      image: "/images/lightning-roulette.png",
      category: "Live Casino",
      jackpot: "N/A",
      hot: false,
    },
    { name: "Vegas 2", image: "/images/vegas-2.png", category: "Slots", jackpot: "$850K", hot: true },
    { name: "Pro HD", image: "/images/pro-hd.png", category: "Live Casino", jackpot: "N/A", hot: false },
    { name: "Arctic Race", image: "/images/arctic-race.png", category: "Slots", jackpot: "$1.2M", hot: true },
  ]

  // Slots
  const slotsGames = [
    { name: "Monster Pop", image: "/images/monster-pop.png", rtp: "96.5%", volatility: "High", maxWin: "5000x" },
    { name: "Vegas 2", image: "/images/vegas-2.png", rtp: "95.8%", volatility: "Medium", maxWin: "2500x" },
    { name: "Arctic Race", image: "/images/arctic-race.png", rtp: "96.2%", volatility: "High", maxWin: "10000x" },
    {
      name: "Olympus Tumble",
      image: "/images/olympus-tumble.png",
      rtp: "96.1%",
      volatility: "Medium",
      maxWin: "5000x",
    },
    { name: "Break the Bank", image: "/images/break-the-bank.png", rtp: "96.8%", volatility: "High", maxWin: "25000x" },
    { name: "Road 2 Riches", image: "/images/road-2-riches.png", rtp: "95.9%", volatility: "Medium", maxWin: "3000x" },
    { name: "Chicken Drop", image: "/images/chicken-drop.png", rtp: "96.3%", volatility: "High", maxWin: "10000x" },
    { name: "9 Masks of Fire", image: "/images/9-masks-fire.png", rtp: "96.2%", volatility: "Medium", maxWin: "2000x" },
  ]

  // Live Tables
  const liveTables = [
    { name: "Lightning Roulette", image: "/images/lightning-roulette.png", dealer: "Sofia", players: 45, minBet: "$1" },
    {
      name: "First Person Blackjack",
      image: "/images/first-person-blackjack.png",
      dealer: "Marcus",
      players: 32,
      minBet: "$5",
    },
    { name: "Speed Roulette", image: "/images/speed-roulette.png", dealer: "Elena", players: 28, minBet: "$0.50" },
    {
      name: "First Person Baccarat",
      image: "/images/first-person-baccarat.png",
      dealer: "James",
      players: 19,
      minBet: "$10",
    },
    {
      name: "Lightning Blackjack",
      image: "/images/lightning-blackjack.png",
      dealer: "Anna",
      players: 41,
      minBet: "$2",
    },
    { name: "Immersive Roulette", image: "/images/immersive-roulette.png", dealer: "David", players: 67, minBet: "$1" },
  ]

  // Table Games
  const tableGames = [
    { name: "21 Burn Blackjack", image: "/images/21-burn-blackjack.png", type: "Blackjack", rtp: "99.4%" },
    { name: "European Blackjack", image: "/images/european-blackjack.png", type: "Blackjack", rtp: "99.6%" },
    { name: "American Roulette", image: "/images/american-roulette.png", type: "Roulette", rtp: "94.7%" },
    { name: "European Roulette", image: "/images/european-roulette-table.png", type: "Roulette", rtp: "97.3%" },
    { name: "French Roulette", image: "/images/french-roulette.png", type: "Roulette", rtp: "98.6%" },
    { name: "Multihand Blackjack", image: "/images/multihand-blackjack.png", type: "Blackjack", rtp: "99.1%" },
  ]

  // Video Poker
  const videoPokerGames = [
    { name: "Jacks or Better", image: "/jacks-or-better-poker.png", rtp: "99.5%", hands: "Single" },
    { name: "Deuces Wild", image: "/deuces-wild-video-poker.png", rtp: "98.9%", hands: "Single" },
    { name: "Joker Poker", image: "/joker-poker-video-poker.png", rtp: "98.6%", hands: "Single" },
    { name: "Multi-Hand Poker", image: "/placeholder-02701.png", rtp: "99.2%", hands: "Multi" },
    { name: "Aces & Faces", image: "/aces-faces-video-poker.png", rtp: "99.3%", hands: "Single" },
    { name: "Bonus Poker", image: "/bonus-poker-video-poker.png", rtp: "99.2%", hands: "Single" },
  ]

  // Promotions
  const promotions = [
    {
      title: "125% Sports Welcome Bonus",
      subtitle: "WELCOME BONUS",
      description: "Min Dep $100",
      buttonText: "CLAIM NOW",
      bgColor: "from-green-600 to-green-700",
      value: "125%",
      icon: Gift,
    },
    {
      title: "200% Crypto Casino Bonus",
      subtitle: "CRYPTO BONUS",
      description: "Min Dep $50",
      buttonText: "CLAIM NOW",
      bgColor: "from-purple-600 to-purple-700",
      value: "200%",
      icon: Zap,
    },
    {
      title: "150% Casino Reload Bonus",
      subtitle: "CASINO RELOAD",
      description: "Min Dep $100",
      buttonText: "CLAIM NOW",
      bgColor: "from-orange-600 to-orange-700",
      value: "150%",
      icon: Crown,
    },
    {
      title: "VIP Cashback Program",
      subtitle: "VIP EXCLUSIVE",
      description: "Up to 15% Daily",
      buttonText: "JOIN VIP",
      bgColor: "from-pink-600 to-pink-700",
      value: "15%",
      icon: Trophy,
    },
  ]

  const renderGameCard = (game: any, showExtra = false) => (
    <Card
      key={game.name}
      className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 rounded-xl overflow-hidden hover:border-brand-primary-green/50 transition-all duration-300 cursor-pointer group"
    >
      <div className="aspect-[3/4] relative">
        <Image
          src={game.image || `/placeholder.svg?height=200&width=150&query=${game.name}+casino+game`}
          alt={game.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {game.hot && <Badge className="absolute top-2 left-2 bg-red-600 text-white text-xs">HOT</Badge>}
        {game.players && (
          <Badge className="absolute top-2 right-2 bg-black/70 text-white text-xs">{game.players}</Badge>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
          <Button className="opacity-0 group-hover:opacity-100 bg-brand-primary-green hover:bg-brand-primary-green-dark text-black font-bold">
            <Play className="w-4 h-4 mr-2" />
            Play
          </Button>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm text-brand-soft-white truncate">{game.name}</h3>
        <p className="text-xs text-brand-smoke-gray">{game.category}</p>
        {showExtra && game.rtp && <p className="text-xs text-brand-primary-green">RTP: {game.rtp}</p>}
        {game.jackpot && game.jackpot !== "N/A" && (
          <p className="text-xs text-brand-vibrant-green">Jackpot: {game.jackpot}</p>
        )}
      </div>
    </Card>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case "Game Lobby":
        return (
          <div className="space-y-12">
            {/* Hero Banner */}
            <section className="relative">
              <Card className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600">
                <div className="absolute inset-0">
                  <Image
                    src="/images/big-catch-banner.png"
                    alt="Big Catch - Dive into the deep with a big catch!"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 p-8 md:p-12 flex items-center justify-between">
                  <div className="text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2">BIG CATCH</h1>
                    <p className="text-xl md:text-2xl mb-4">DIVE INTO THE DEEP WITH A BIG CATCH!</p>
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-lg rounded-full">
                      PLAY NOW
                    </Button>
                  </div>
                </div>
              </Card>
            </section>

            {/* Featured Games */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white">Featured Games</h2>
                <Button variant="ghost" className="text-brand-primary-green hover:text-brand-soft-white">
                  See All →
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {gameLobbyContent.featuredGames.map((game) => renderGameCard(game))}
              </div>
            </section>

            {/* Popular Games */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white">Popular Games</h2>
                <Button variant="ghost" className="text-brand-primary-green hover:text-brand-soft-white">
                  See All →
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {gameLobbyContent.popularGames.map((game) => renderGameCard(game, true))}
              </div>
            </section>
          </div>
        )

      case "All Providers":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand-soft-white mb-4">Game Providers</h2>
              <p className="text-brand-smoke-gray">Choose from the world's leading casino game providers</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {allProviders.map((provider, index) => (
                <Card
                  key={index}
                  className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 p-6 rounded-xl hover:border-brand-primary-green/50 transition-all cursor-pointer"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-brand-charcoal-black-tertiary rounded-lg flex items-center justify-center">
                      <Image
                        src={provider.logo || `/placeholder.svg?height=64&width=64&query=${provider.name}+logo`}
                        alt={provider.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-soft-white">{provider.name}</h3>
                      <p className="text-sm text-brand-smoke-gray">{provider.games} Games</p>
                      <p className="text-xs text-brand-primary-green">{provider.category}</p>
                    </div>
                    <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-black">
                      View Games
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )

      case "Featured Games":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand-soft-white mb-4">Featured Games</h2>
              <p className="text-brand-smoke-gray">Hand-picked games with the biggest wins and best features</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {featuredGames.map((game) => renderGameCard(game))}
            </div>
          </div>
        )

      case "Slots":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand-soft-white mb-4">Slot Games</h2>
              <p className="text-brand-smoke-gray">Spin to win with our extensive collection of slot games</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {slotsGames.map((game, index) => (
                <Card
                  key={index}
                  className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 rounded-xl overflow-hidden hover:border-brand-primary-green/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={game.image || `/placeholder.svg?height=200&width=150&query=${game.name}+slot`}
                      alt={game.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <Button className="opacity-0 group-hover:opacity-100 bg-brand-primary-green hover:bg-brand-primary-green-dark text-black font-bold">
                        <Play className="w-4 h-4 mr-2" />
                        Play
                      </Button>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm text-brand-soft-white truncate">{game.name}</h3>
                    <div className="space-y-1">
                      <p className="text-xs text-brand-primary-green">RTP: {game.rtp}</p>
                      <p className="text-xs text-brand-smoke-gray">{game.volatility} Vol</p>
                      <p className="text-xs text-brand-vibrant-green">Max: {game.maxWin}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )

      case "Live Tables":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand-soft-white mb-4">Live Casino Tables</h2>
              <p className="text-brand-smoke-gray">Play with real dealers in real-time</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {liveTables.map((game, index) => (
                <Card
                  key={index}
                  className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 rounded-xl overflow-hidden hover:border-brand-primary-green/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={game.image || `/placeholder.svg?height=200&width=150&query=${game.name}+live+casino`}
                      alt={game.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-red-600 text-white text-xs animate-pulse">LIVE</Badge>
                    <Badge className="absolute top-2 right-2 bg-black/70 text-white text-xs">{game.players}</Badge>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <Button className="opacity-0 group-hover:opacity-100 bg-brand-primary-green hover:bg-brand-primary-green-dark text-black font-bold">
                        <Play className="w-4 h-4 mr-2" />
                        Join Table
                      </Button>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm text-brand-soft-white truncate">{game.name}</h3>
                    <div className="space-y-1">
                      <p className="text-xs text-brand-smoke-gray">Dealer: {game.dealer}</p>
                      <p className="text-xs text-brand-primary-green">Min Bet: {game.minBet}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )

      case "Table Games":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand-soft-white mb-4">Table Games</h2>
              <p className="text-brand-smoke-gray">Classic casino table games with perfect strategy</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tableGames.map((game, index) => (
                <Card
                  key={index}
                  className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 rounded-xl overflow-hidden hover:border-brand-primary-green/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={game.image || `/placeholder.svg?height=200&width=150&query=${game.name}+table+game`}
                      alt={game.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <Button className="opacity-0 group-hover:opacity-100 bg-brand-primary-green hover:bg-brand-primary-green-dark text-black font-bold">
                        <Play className="w-4 h-4 mr-2" />
                        Play
                      </Button>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm text-brand-soft-white truncate">{game.name}</h3>
                    <div className="space-y-1">
                      <p className="text-xs text-brand-smoke-gray">{game.type}</p>
                      <p className="text-xs text-brand-primary-green">RTP: {game.rtp}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )

      case "Video Poker":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand-soft-white mb-4">Video Poker</h2>
              <p className="text-brand-smoke-gray">Test your poker skills with the best RTPs in the casino</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {videoPokerGames.map((game, index) => (
                <Card
                  key={index}
                  className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 rounded-xl overflow-hidden hover:border-brand-primary-green/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <Button className="opacity-0 group-hover:opacity-100 bg-brand-primary-green hover:bg-brand-primary-green-dark text-black font-bold">
                        <Play className="w-4 h-4 mr-2" />
                        Play
                      </Button>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm text-brand-soft-white truncate">{game.name}</h3>
                    <div className="space-y-1">
                      <p className="text-xs text-brand-primary-green">RTP: {game.rtp}</p>
                      <p className="text-xs text-brand-smoke-gray">{game.hands} Hand</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )

      case "Promotions":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand-soft-white mb-4">Active Promotions</h2>
              <p className="text-brand-smoke-gray">Boost your gameplay with exclusive bonuses and offers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {promotions.map((promo, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${promo.bgColor} p-6 rounded-2xl text-white relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <promo.icon className="w-8 h-8" />
                      <div className="text-right">
                        <div className="text-2xl font-bold">{promo.value}</div>
                        <div className="text-xs opacity-80">Bonus</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold">{promo.title}</h3>
                      <p className="text-sm opacity-90">{promo.subtitle}</p>
                      <p className="text-xs opacity-80">{promo.description}</p>
                    </div>
                    <Button className="w-full mt-4 bg-black/20 hover:bg-black/30 text-white font-bold">
                      {promo.buttonText}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )

      default:
        return <div>Content not found</div>
    }
  }

  return (
    <div className="bg-brand-charcoal-black min-h-screen text-brand-soft-white">
      {/* Game Categories Navigation */}
      <section className="sticky top-16 z-20 bg-brand-charcoal-black/95 backdrop-blur-sm border-b border-brand-smoke-gray/20 mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-4">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? "bg-brand-primary-green hover:bg-brand-primary-green-dark text-black font-bold"
                    : "border-brand-smoke-gray/50 text-brand-smoke-gray hover:text-brand-soft-white hover:border-brand-primary-green bg-transparent"
                } px-6 py-2 rounded-full transition-all duration-200`}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 pb-12">{renderTabContent()}</section>

      {/* Content Section */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-soft-white">
                Bet Big, Win Big: Your Ultimate Online Casino Destination
              </h1>
              <p className="text-lg text-brand-smoke-gray leading-relaxed">
                Welcome to the premier online casino where excitement and winning possibilities are just a click away!
                Our online casino is packed with a variety of games to keep every player entertained—from thrilling
                online slots to classic table games like online blackjack and roulette.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-soft-white">
                A World of Online Slots Awaits
              </h2>
              <p className="text-lg text-brand-smoke-gray leading-relaxed">
                Step into a world of endless fun with our diverse selection of online slots. Featuring themes ranging
                from classic to modern, each slot game is crafted with stunning graphics, exciting soundtracks, and
                bonus features to maximize your chances of winning big. Whether you prefer the timeless fruit machines
                or the latest video slots, we have a game for every slot enthusiast.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-soft-white">
                Online Table Games for All Skill Levels
              </h2>
              <p className="text-lg text-brand-smoke-gray leading-relaxed">
                For those who enjoy traditional online table games, our casino offers all the classics and more. From
                strategic rounds of online blackjack to high-stakes roulette spins, our games provide an authentic
                casino experience from the comfort of your home. Sharpen your skills, test your strategies, and see if
                you have what it takes to beat the dealer! Ready to play? Join now and dive into a world of excitement
                and winning possibilities. Don't miss out on the action—sign up today and start playing!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
