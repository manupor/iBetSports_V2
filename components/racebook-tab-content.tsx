"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface RacebookTabContentProps {
  setIsRegistrationOpen?: () => void
}

export default function RacebookTabContent({ setIsRegistrationOpen }: RacebookTabContentProps) {
  return (
    <div className="min-h-screen bg-brand-charcoal-black font-poppins">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Mobile Hero Layout - Image first, then text below */}
        <div className="block md:hidden">
          {/* Mobile Hero Image */}
          <div className="relative w-full h-48 sm:h-56 overflow-hidden">
            <Image
              src="/images/las-carreras-de-caballos-de-fondo-pista-de-carreras-en-fondo-de-neon.avif"
              alt="Horse racing track with neon lighting effects"
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
                RIDE THE ACTION.
                <span className="block">BET ON EVERY RACE, EVERY TRACK.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white">
                Stay ahead of the pack with live odds, fast results, and daily race coverage.
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
            src="/images/las-carreras-de-caballos-de-fondo-pista-de-carreras-en-fondo-de-neon.avif"
            alt="Horse racing track with neon lighting effects"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-start pl-6 lg:pl-12">
            <div className="text-left space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-brand-soft-white">
                RIDE THE ACTION.
                <span className="block">BET ON EVERY RACE, EVERY TRACK.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white">
                Stay ahead of the pack with live odds, fast results, and daily race coverage.
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
        {/* Track Selection */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-brand-soft-white mb-6">
            <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
              TODAY'S RACES
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Track Cards */}
            {[
              { name: "Churchill Downs", races: 8, nextRace: "2:30 PM" },
              { name: "Santa Anita", races: 9, nextRace: "3:15 PM" },
              { name: "Belmont Park", races: 7, nextRace: "4:00 PM" },
              { name: "Del Mar", races: 10, nextRace: "5:45 PM" },
              { name: "Keeneland", races: 6, nextRace: "6:30 PM" },
              { name: "Gulfstream Park", races: 11, nextRace: "7:15 PM" },
            ].map((track, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300 p-6"
              >
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-brand-soft-white">{track.name}</h3>
                  <div className="space-y-2">
                    <p className="text-brand-smoke-gray">{track.races} races today</p>
                    <p className="text-brand-primary-green font-semibold">Next: {track.nextRace}</p>
                  </div>
                  <Button
                    onClick={setIsRegistrationOpen}
                    className="w-full bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    VIEW RACES
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Race */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-brand-soft-white mb-6">
            <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
              FEATURED RACE
            </span>
          </h2>

          <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-soft-white mb-4">Kentucky Derby Stakes</h3>
                <div className="space-y-3 text-brand-smoke-gray">
                  <p>
                    <span className="text-brand-primary-green font-semibold">Track:</span> Churchill Downs
                  </p>
                  <p>
                    <span className="text-brand-primary-green font-semibold">Distance:</span> 1 1/4 miles
                  </p>
                  <p>
                    <span className="text-brand-primary-green font-semibold">Post Time:</span> 6:57 PM EST
                  </p>
                  <p>
                    <span className="text-brand-primary-green font-semibold">Purse:</span> $3,000,000
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  onClick={setIsRegistrationOpen}
                  className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-12 py-4 text-xl rounded-lg transition-all duration-300"
                >
                  BET NOW
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Betting Types */}
        <section>
          <h2 className="text-3xl font-black text-brand-soft-white mb-6">
            <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
              BET TYPES
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "Win", description: "Pick the horse that finishes first" },
              { type: "Place", description: "Pick a horse to finish first or second" },
              { type: "Show", description: "Pick a horse to finish first, second, or third" },
              { type: "Exacta", description: "Pick the first two horses in exact order" },
              { type: "Trifecta", description: "Pick the first three horses in exact order" },
              { type: "Superfecta", description: "Pick the first four horses in exact order" },
              { type: "Daily Double", description: "Pick winners of two consecutive races" },
              { type: "Pick 3", description: "Pick winners of three consecutive races" },
            ].map((bet, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300 p-4"
              >
                <div className="text-center space-y-3">
                  <h3 className="text-lg font-bold text-brand-primary-green">{bet.type}</h3>
                  <p className="text-sm text-brand-smoke-gray">{bet.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
