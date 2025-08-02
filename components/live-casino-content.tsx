"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface LiveCasinoTabContentProps {
  setIsRegistrationOpen: (open: boolean) => void
}

export default function LiveCasinoTabContent({ setIsRegistrationOpen }: LiveCasinoTabContentProps) {
  const liveGames = [
    { name: "Lightning Roulette", image: "/images/lightning-roulette.png", players: 1247, dealer: "Emma" },
    { name: "Immersive Roulette", image: "/images/immersive-roulette.png", players: 892, dealer: "James" },
    { name: "Speed Baccarat", image: "/images/speed-baccarat.png", players: 634, dealer: "Sofia" },
    { name: "Lightning Blackjack", image: "/images/lightning-blackjack.png", players: 1156, dealer: "Michael" },
    { name: "First Person Roulette", image: "/images/first-person-roulette.png", players: 445, dealer: "Anna" },
    { name: "Speed Roulette", image: "/images/speed-roulette.png", players: 723, dealer: "David" },
  ]

  return (
    <div className="min-h-screen bg-brand-charcoal-black font-poppins w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/live-lobby.png"
            alt="Live Casino Hero"
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
                LIVE
              </span>{" "}
              CASINO
            </h1>
            <p className="text-brand-smoke-gray text-lg md:text-xl max-w-2xl">
              Play with real dealers in real-time from the comfort of your home
            </p>
            <Button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold px-8 py-3 text-lg"
            >
              JOIN LIVE GAMES
            </Button>
          </div>
        </div>
      </section>

      {/* Live Games Section */}
      <section className="py-12 bg-black w-full">
        <div className="w-full px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-brand-soft-white mb-4">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                LIVE
              </span>{" "}
              GAMES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveGames.map((game, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 overflow-hidden hover:border-brand-primary-green/50 transition-colors duration-200"
              >
                <div className="relative">
                  <div className="aspect-video relative">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.name}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span>LIVE</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                      {game.players} players
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <Button
                        onClick={() => setIsRegistrationOpen(true)}
                        className="bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-bold"
                      >
                        JOIN TABLE
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-brand-soft-white font-bold text-lg mb-1">{game.name}</h3>
                  <p className="text-brand-smoke-gray text-sm">Dealer: {game.dealer}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
