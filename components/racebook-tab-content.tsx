"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Clock, TrendingUp, Play, Eye } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function RacebookTabContent() {
  const [selectedTrack, setSelectedTrack] = useState("churchill")
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  const tracks = [
    { id: "churchill", name: "Churchill Downs", location: "Louisville, KY" },
    { id: "belmont", name: "Belmont Park", location: "Elmont, NY" },
    { id: "santa-anita", name: "Santa Anita", location: "Arcadia, CA" },
    { id: "gulfstream", name: "Gulfstream Park", location: "Hallandale Beach, FL" },
  ]

  const liveRaces = [
    {
      track: "Churchill Downs",
      race: "Race 7",
      time: "3:45 PM",
      distance: "1 1/8 miles",
      horses: 8,
      prize: "$75,000",
      status: "Live",
    },
    {
      track: "Belmont Park",
      race: "Race 5",
      time: "4:15 PM",
      distance: "1 mile",
      horses: 10,
      prize: "$50,000",
      status: "Starting Soon",
    },
    {
      track: "Santa Anita",
      race: "Race 6",
      time: "4:30 PM",
      distance: "6 furlongs",
      horses: 12,
      prize: "$40,000",
      status: "Upcoming",
    },
  ]

  const upcomingRaces = [
    {
      time: "4:45 PM",
      track: "Churchill Downs",
      race: "Race 8",
      distance: "1 1/4 miles",
      horses: 9,
      favorite: "Thunder Strike",
      odds: "3/1",
    },
    {
      time: "5:00 PM",
      track: "Belmont Park",
      race: "Race 6",
      distance: "1 1/16 miles",
      horses: 11,
      favorite: "Lightning Bolt",
      odds: "5/2",
    },
    {
      time: "5:15 PM",
      track: "Santa Anita",
      race: "Race 7",
      distance: "7 furlongs",
      horses: 8,
      favorite: "Speed Demon",
      odds: "2/1",
    },
    {
      time: "5:30 PM",
      track: "Gulfstream Park",
      race: "Race 4",
      distance: "1 mile",
      horses: 10,
      favorite: "Royal Thunder",
      odds: "7/2",
    },
  ]

  const racingFeatures = [
    {
      icon: Trophy,
      title: "Live Racing",
      description: "Watch and bet on live horse races from top tracks worldwide",
    },
    {
      icon: Target,
      title: "Best Odds",
      description: "Competitive odds on win, place, show, and exotic bets",
    },
    {
      icon: TrendingUp,
      title: "Expert Tips",
      description: "Get insights from professional handicappers",
    },
    {
      icon: Clock,
      title: "24/7 Racing",
      description: "Racing action available around the clock",
    },
  ]

  return (
    <div className="bg-brand-charcoal-black min-h-screen text-brand-soft-white font-poppins">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Desktop Hero */}
        <div className="hidden md:block relative w-full h-[45vh] overflow-hidden bg-black">
          <Image
            src="/images/las-carreras-de-caballos-de-fondo-pista-de-carreras-en-fondo-de-neon.jpg"
            alt="Horse racing track with neon background lighting effects"
            width={1920}
            height={600}
            className="absolute top-4 right-0 w-full h-full object-cover object-right"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-brand-primary-green/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/5 w-24 h-24 border border-brand-vibrant-green/30 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-brand-vibrant-green/25 rounded-full animate-ping"></div>
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center pl-12 lg:pl-24 pr-12 lg:pr-24">
            <div className="text-left space-y-1 md:space-y-2 max-w-2xl">
              <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-none tracking-tight">
                HORSE
              </div>
              <div className="text-xl lg:text-2xl xl:text-3xl font-black text-brand-golden-yellow leading-none tracking-tight">
                RACING BETS
              </div>
              <div className="text-base lg:text-lg xl:text-xl font-bold text-white leading-tight tracking-tight">
                LIVE RACING ACTION
              </div>
              <div className="text-sm lg:text-base xl:text-lg font-semibold text-white leading-tight tracking-tight mb-4">
                Bet on the World's Best Tracks
              </div>

              {/* Button integrated in text flow */}
              <div className="pt-2">
                <Button className="relative bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 lg:px-12 py-3 lg:py-4 text-xl lg:text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 border-4 border-white/20 backdrop-blur-sm">
                  <span className="relative z-10 drop-shadow-lg">BET NOW</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/30 to-brand-vibrant-green/30 rounded-full animate-pulse opacity-50"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero */}
        <div className="md:hidden">
          <div className="relative w-full h-[40vh] min-h-[300px] overflow-hidden">
            <Image
              src="/images/las-carreras-de-caballos-de-fondo-pista-de-carreras-en-fondo-de-neon.jpg"
              alt="Horse racing track with neon background lighting effects"
              fill
              className="object-cover object-right object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-primary-green/40 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-brand-vibrant-green/50 rounded-full animate-bounce"></div>
              <div className="absolute bottom-1/3 left-1/6 w-4 h-4 bg-brand-vibrant-green/30 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="bg-brand-charcoal-black px-4 py-6 sm:py-8">
            <div className="text-center space-y-4 sm:space-y-6">
              <h1 className="text-xl sm:text-2xl font-black leading-tight tracking-tight">
                <div className="text-brand-soft-white mb-2">HORSE RACING BETS</div>
                <div className="text-brand-vibrant-green">LIVE ACTION!</div>
              </h1>
              <p className="text-base text-brand-smoke-gray font-medium">
                <span className="text-brand-vibrant-green font-bold">LIVE RACING ACTION</span>
              </p>
              <p className="text-lg text-brand-soft-white font-bold">Bet on the World's Best Tracks</p>
              <Button className="relative bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-6 py-3 text-lg rounded-full mt-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 w-full sm:w-auto min-h-[52px]">
                <span className="relative z-10 drop-shadow-lg">BET NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/20 to-brand-vibrant-green/20 rounded-full animate-pulse opacity-30"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Racing Features */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
            Why Choose Our Racebook
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {racingFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-4 sm:p-6 rounded-2xl text-center hover:border-brand-primary-green/50 transition-all duration-300"
              >
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-brand-primary-green" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-brand-smoke-gray text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Track Selection */}
      <section className="py-8 sm:py-12 md:py-16 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Select Track</h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {tracks.map((track) => (
              <Button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                variant={selectedTrack === track.id ? "default" : "outline"}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg min-h-[44px] ${
                  selectedTrack === track.id
                    ? "bg-brand-primary-green text-brand-charcoal-black"
                    : "border-brand-smoke-gray/50 text-brand-smoke-gray hover:text-brand-soft-white hover:border-brand-primary-green/50"
                }`}
              >
                <div className="text-center">
                  <div className="font-bold">{track.name}</div>
                  <div className="text-xs opacity-80">{track.location}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Live Races */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">Live Races</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {liveRaces.map((race, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-4 sm:p-6 rounded-2xl hover:border-brand-primary-green/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold">{race.track}</h3>
                  <Badge
                    className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold ${
                      race.status === "Live"
                        ? "bg-red-500/20 text-red-400 border-red-500/30"
                        : race.status === "Starting Soon"
                          ? "bg-brand-vibrant-green/20 text-brand-vibrant-green border-brand-vibrant-green/30"
                          : "bg-brand-primary-green/20 text-brand-primary-green border-brand-primary-green/30"
                    }`}
                  >
                    {race.status}
                  </Badge>
                </div>
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-brand-smoke-gray">Race:</span>
                    <span className="text-brand-soft-white font-semibold">{race.race}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-brand-smoke-gray">Time:</span>
                    <span className="text-brand-soft-white font-semibold">{race.time}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-brand-smoke-gray">Distance:</span>
                    <span className="text-brand-soft-white font-semibold">{race.distance}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-brand-smoke-gray">Horses:</span>
                    <span className="text-brand-soft-white font-semibold">{race.horses}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-brand-smoke-gray">Prize:</span>
                    <span className="text-brand-vibrant-green font-bold">{race.prize}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <Button
                    className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold py-2 sm:py-3 text-sm sm:text-base min-h-[44px]"
                    onClick={() => setIsRegistrationOpen(true)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch
                  </Button>
                  <Button
                    variant="outline"
                    className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black py-2 sm:py-3 text-sm sm:text-base min-h-[44px] bg-transparent"
                    onClick={() => setIsRegistrationOpen(true)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Bet
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Races */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
            Upcoming Races
          </h2>

          {/* Mobile Card Layout */}
          <div className="block md:hidden space-y-4">
            {upcomingRaces.map((race, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-4 rounded-2xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-brand-primary-green font-bold text-lg">{race.time}</div>
                    <Badge className="bg-brand-vibrant-green/20 text-brand-vibrant-green px-2 py-1 text-xs">
                      {race.horses} horses
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray text-sm">Track:</span>
                      <span className="text-brand-soft-white font-semibold text-sm">{race.track}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray text-sm">Race:</span>
                      <span className="text-brand-soft-white font-semibold text-sm">{race.race}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray text-sm">Distance:</span>
                      <span className="text-brand-soft-white font-semibold text-sm">{race.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray text-sm">Favorite:</span>
                      <span className="text-brand-vibrant-green font-bold text-sm">{race.favorite}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray text-sm">Odds:</span>
                      <span className="text-brand-soft-white font-bold text-sm">{race.odds}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold py-3 min-h-[48px]"
                    onClick={() => setIsRegistrationOpen(true)}
                  >
                    Place Bet
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="text-sm md:text-base text-brand-smoke-gray uppercase border-b border-brand-smoke-gray/20">
                <tr>
                  <th className="text-left py-3 md:py-4 px-3 md:px-6 font-bold">Time</th>
                  <th className="text-left py-3 md:py-4 px-3 md:px-6 font-bold">Track</th>
                  <th className="text-left py-3 md:py-4 px-3 md:px-6 font-bold">Race</th>
                  <th className="text-left py-3 md:py-4 px-3 md:px-6 font-bold">Distance</th>
                  <th className="text-center py-3 md:py-4 px-3 md:px-6 font-bold">Horses</th>
                  <th className="text-left py-3 md:py-4 px-3 md:px-6 font-bold">Favorite</th>
                  <th className="text-center py-3 md:py-4 px-3 md:px-6 font-bold">Odds</th>
                  <th className="text-center py-3 md:py-4 px-3 md:px-6 font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {upcomingRaces.map((race, index) => (
                  <tr
                    key={index}
                    className="text-sm md:text-base border-b border-brand-smoke-gray/10 hover:bg-brand-charcoal-black-secondary/30 transition-colors"
                  >
                    <td className="py-3 md:py-4 px-3 md:px-6 text-brand-primary-green font-bold">{race.time}</td>
                    <td className="py-3 md:py-4 px-3 md:px-6 text-brand-soft-white font-medium">{race.track}</td>
                    <td className="py-3 md:py-4 px-3 md:px-6 text-brand-soft-white font-medium">{race.race}</td>
                    <td className="py-3 md:py-4 px-3 md:px-6 text-brand-soft-white font-medium">{race.distance}</td>
                    <td className="py-3 md:py-4 px-3 md:px-6 text-brand-soft-white font-medium text-center">
                      {race.horses}
                    </td>
                    <td className="py-3 md:py-4 px-3 md:px-6 text-brand-vibrant-green font-bold">{race.favorite}</td>
                    <td className="py-3 md:py-4 px-3 md:px-6 text-brand-soft-white font-bold text-center">
                      {race.odds}
                    </td>
                    <td className="py-3 md:py-4 px-3 md:px-6 text-center">
                      <Button
                        size="sm"
                        className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-4 py-2"
                        onClick={() => setIsRegistrationOpen(true)}
                      >
                        Bet
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Registration Modal */}
      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="bg-brand-charcoal-black border border-brand-smoke-gray/30 text-brand-soft-white max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-brand-primary-green">
              Create Your Account
            </DialogTitle>
          </DialogHeader>
          <form className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-brand-soft-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder:text-brand-smoke-gray focus:border-brand-primary-green"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username" className="text-brand-soft-white">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Choose a username"
                className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder:text-brand-smoke-gray focus:border-brand-primary-green"
                required
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
                className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder:text-brand-smoke-gray focus:border-brand-primary-green"
                required
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
                className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder:text-brand-smoke-gray focus:border-brand-primary-green"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="border-brand-smoke-gray/30 data-[state=checked]:bg-brand-primary-green" />
              <Label htmlFor="terms" className="text-sm text-brand-smoke-gray">
                I agree to the{" "}
                <span className="text-brand-primary-green hover:underline cursor-pointer">Terms & Conditions</span>
              </Label>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold py-3 text-lg rounded-lg"
            >
              Create Account
            </Button>
            <p className="text-center text-sm text-brand-smoke-gray">
              Already have an account?{" "}
              <span className="text-brand-primary-green hover:underline cursor-pointer">Sign In</span>
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
