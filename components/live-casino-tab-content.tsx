"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function LiveCasinoTabContent() {
  const registrationUrl = "https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en"

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
              <Button
                asChild
                className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 py-3 text-lg rounded-lg transition-all duration-300"
              >
                <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
                  PLAY LIVE
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Hero Layout - Overlay design */}
        <div className="hidden md:block relative w-full h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden">
          <Image
            src="/images/retrato-de-personas-jugando-y-jugando-en-un-casino.jpg"
            alt="People playing and gambling in a casino"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-start pl-6 lg:pl-12">
            <div className="text-left space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-brand-soft-white">
                LIVE DEALERS.
                <span className="block">REAL THRILLS. INSTANT WINS.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white">
                Experience the authentic casino atmosphere with professional dealers streaming live 24/7.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 py-3 text-lg rounded-lg transition-all duration-300"
              >
                <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
                  PLAY LIVE
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Live Roulette Games */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-brand-soft-white mb-6">
            <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
              LIVE ROULETTE
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Lightning Roulette", image: "/images/lightning-roulette.png", players: "1,247" },
              { name: "Immersive Roulette", image: "/images/immersive-roulette.png", players: "892" },
              { name: "Speed Roulette", image: "/images/speed-roulette.png", players: "634" },
              { name: "First Person Roulette", image: "/images/first-person-roulette.png", players: "423" },
              { name: "American Roulette", image: "/images/american-roulette.png", players: "567" },
              { name: "European Roulette", image: "/images/european-roulette-table.png", players: "789" },
              { name: "French Roulette", image: "/images/french-roulette.png", players: "345" },
            ].map((game, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-32">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-bold text-brand-soft-white">{game.name}</h3>
                  <p className="text-sm text-brand-smoke-gray">{game.players} players online</p>
                  <Button
                    asChild
                    className="w-full bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
                      PLAY LIVE
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Live Blackjack Games */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-brand-soft-white mb-6">
            <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
              LIVE BLACKJACK
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Lightning Blackjack", image: "/images/lightning-blackjack.png", players: "956" },
              { name: "First Person Blackjack", image: "/images/first-person-blackjack.png", players: "743" },
              { name: "21 Burn Blackjack", image: "/images/21-burn-blackjack.png", players: "521" },
              { name: "European Blackjack", image: "/images/european-blackjack.png", players: "687" },
              { name: "Multihand Blackjack", image: "/images/multihand-blackjack.png", players: "432" },
            ].map((game, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-32">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-bold text-brand-soft-white">{game.name}</h3>
                  <p className="text-sm text-brand-smoke-gray">{game.players} players online</p>
                  <Button
                    asChild
                    className="w-full bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
                      PLAY LIVE
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Live Baccarat Games */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-brand-soft-white mb-6">
            <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
              LIVE BACCARAT
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Speed Baccarat", image: "/images/speed-baccarat.png", players: "678" },
              { name: "First Person Baccarat", image: "/images/first-person-baccarat.png", players: "534" },
            ].map((game, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-32">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-bold text-brand-soft-white">{game.name}</h3>
                  <p className="text-sm text-brand-smoke-gray">{game.players} players online</p>
                  <Button
                    asChild
                    className="w-full bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
                      PLAY LIVE
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-black text-brand-soft-white mb-4">
            Ready for the Ultimate Live Casino Experience?
          </h2>
          <p className="text-xl text-brand-smoke-gray mb-8 max-w-3xl mx-auto">
            Join thousands of players enjoying authentic casino games with professional dealers. Sign up now and get
            your welcome bonus to start playing live!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-12 py-4 text-xl rounded-lg transition-all duration-300"
            >
              <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
                JOIN & PLAY LIVE
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
