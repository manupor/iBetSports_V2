"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface SportsbookTabContentProps {
  setIsRegistrationOpen?: () => void
}

export default function SportsbookTabContent({ setIsRegistrationOpen }: SportsbookTabContentProps) {
  return (
    <div className="min-h-screen bg-brand-charcoal-black font-poppins">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Mobile Hero Layout - Image first, then text below */}
        <div className="block md:hidden">
          {/* Mobile Hero Image */}
          <div className="relative w-full h-48 sm:h-56 overflow-hidden">
            <Image
              src="/images/jugador-de-futbol-americano-de-estilo-neon.jpg"
              alt="Neon style American football player"
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
                GAME ON.
                <span className="block">BET BIG, WIN BIGGER.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white">
                From NFL to NBA, MLB to NHL—every game, every bet, every win starts here.
              </p>
              <Button
                onClick={setIsRegistrationOpen}
                className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 py-3 text-lg rounded-lg transition-all duration-300"
              >
                START BETTING
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Hero Layout - Overlay design */}
        <div className="hidden md:block relative w-full h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden">
          <Image
            src="/images/jugador-de-futbol-americano-de-estilo-neon.jpg"
            alt="Neon style American football player"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-start pl-6 lg:pl-12">
            <div className="text-left space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-brand-soft-white">
                GAME ON.
                <span className="block">BET BIG, WIN BIGGER.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white">
                From NFL to NBA, MLB to NHL—every game, every bet, every win starts here.
              </p>
              <Button
                onClick={setIsRegistrationOpen}
                className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 py-3 text-lg rounded-lg transition-all duration-300"
              >
                START BETTING
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sports Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-brand-soft-white mb-6">
            <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
              POPULAR SPORTS
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "NFL", games: "16 Games Today" },
              { name: "NBA", games: "12 Games Today" },
              { name: "MLB", games: "15 Games Today" },
              { name: "NHL", games: "8 Games Today" },
              { name: "Soccer", games: "25 Games Today" },
              { name: "Tennis", games: "18 Matches Today" },
              { name: "Boxing", games: "3 Fights This Week" },
              { name: "MMA", games: "2 Events This Week" },
            ].map((sport, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300 p-4"
              >
                <div className="text-center space-y-3">
                  <h3 className="text-lg font-bold text-brand-soft-white">{sport.name}</h3>
                  <p className="text-sm text-brand-smoke-gray">{sport.games}</p>
                  <Button
                    onClick={setIsRegistrationOpen}
                    className="w-full bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    BET NOW
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Games */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-brand-soft-white mb-6">
            <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
              FEATURED GAMES
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                team1: "Kansas City Chiefs",
                team2: "Buffalo Bills",
                time: "8:20 PM EST",
                spread: "KC -3.5",
                total: "O/U 54.5",
              },
              {
                team1: "Los Angeles Lakers",
                team2: "Boston Celtics",
                time: "10:00 PM EST",
                spread: "LAL +2.5",
                total: "O/U 225.5",
              },
            ].map((game, index) => (
              <Card key={index} className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-brand-soft-white">
                      {game.team1} vs {game.team2}
                    </h3>
                    <p className="text-brand-primary-green font-semibold">{game.time}</p>
                  </div>
                  <div className="flex justify-between text-brand-smoke-gray">
                    <span>
                      Spread: <span className="text-brand-soft-white">{game.spread}</span>
                    </span>
                    <span>
                      Total: <span className="text-brand-soft-white">{game.total}</span>
                    </span>
                  </div>
                  <Button
                    onClick={setIsRegistrationOpen}
                    className="w-full bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black py-3 text-lg rounded-lg transition-all duration-300"
                  >
                    PLACE BET
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-black text-brand-soft-white mb-4">Ready to Start Winning?</h2>
          <p className="text-xl text-brand-smoke-gray mb-8 max-w-3xl mx-auto">
            Don't miss a beat—join today and start betting on your favorite sports! Sign up now, make your deposit, and
            take advantage of our exclusive betting offers to kick off your winning streak!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={setIsRegistrationOpen}
              className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-8 py-3 text-lg"
            >
              Join Now
            </Button>
            <Button
              onClick={setIsRegistrationOpen}
              className="bg-transparent border-2 border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black font-bold px-8 py-3 text-lg"
            >
              Sign Up & Bet
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
