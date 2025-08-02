"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface RacebookTabContentProps {
  setIsRegistrationOpen: (open: boolean) => void
}

export default function RacebookTabContent({ setIsRegistrationOpen }: RacebookTabContentProps) {
  const races = [
    { track: "Churchill Downs", race: "Race 5", time: "3:15 PM", distance: "6F", horses: 8 },
    { track: "Santa Anita", race: "Race 7", time: "4:30 PM", distance: "1M", horses: 10 },
    { track: "Gulfstream Park", race: "Race 3", time: "2:45 PM", distance: "7F", horses: 9 },
    { track: "Del Mar", race: "Race 6", time: "5:00 PM", distance: "1 1/8M", horses: 7 },
  ]

  return (
    <div className="min-h-screen bg-brand-charcoal-black font-poppins w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ibetsports-horse-racing-hero.png"
            alt="Horse Racing Hero"
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
                HORSE
              </span>{" "}
              RACING
            </h1>
            <p className="text-brand-smoke-gray text-lg md:text-xl max-w-2xl">
              Experience the thrill of horse racing with live odds and expert picks
            </p>
            <Button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold px-8 py-3 text-lg"
            >
              BET ON RACES
            </Button>
          </div>
        </div>
      </section>

      {/* Races Section */}
      <section className="py-12 bg-black w-full">
        <div className="w-full px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-brand-soft-white mb-4">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                TODAY'S
              </span>{" "}
              RACES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {races.map((race, index) => (
              <Card key={index} className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-brand-soft-white font-bold text-xl">{race.track}</h3>
                      <p className="text-brand-smoke-gray">
                        {race.race} • {race.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-brand-primary-green font-bold">{race.distance}</p>
                      <p className="text-brand-smoke-gray text-sm">{race.horses} Horses</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      onClick={() => setIsRegistrationOpen(true)}
                      className="flex-1 bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold"
                    >
                      WIN
                    </Button>
                    <Button
                      onClick={() => setIsRegistrationOpen(true)}
                      variant="outline"
                      className="flex-1 text-brand-soft-white border-brand-smoke-gray hover:bg-brand-primary-green hover:text-brand-charcoal-black"
                    >
                      PLACE
                    </Button>
                    <Button
                      onClick={() => setIsRegistrationOpen(true)}
                      variant="outline"
                      className="flex-1 text-brand-soft-white border-brand-smoke-gray hover:bg-brand-primary-green hover:text-brand-charcoal-black"
                    >
                      SHOW
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
