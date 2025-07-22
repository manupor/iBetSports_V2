"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Clock, Target, TrendingUp, Calendar, MapPin, Users, Zap, Star, Play, ExternalLink } from "lucide-react"

export default function RacebookTabContent() {
  const [selectedTrack, setSelectedTrack] = useState("all")

  const upcomingRaces = [
    {
      id: 1,
      track: "Churchill Downs",
      location: "Louisville, KY",
      race: "Kentucky Derby Prep",
      time: "3:45 PM EST",
      distance: "1 1/8 miles",
      surface: "Dirt",
      purse: "$400,000",
      horses: 12,
      favorite: "Thunder Strike",
      odds: "3/1",
      status: "upcoming",
    },
    {
      id: 2,
      track: "Santa Anita",
      location: "Arcadia, CA",
      race: "Santa Anita Handicap",
      time: "4:15 PM EST",
      distance: "1 1/4 miles",
      surface: "Dirt",
      purse: "$600,000",
      horses: 10,
      favorite: "Golden Thunder",
      odds: "5/2",
      status: "live",
    },
    {
      id: 3,
      track: "Belmont Park",
      location: "Elmont, NY",
      race: "Belmont Stakes Prep",
      time: "5:30 PM EST",
      distance: "1 1/2 miles",
      surface: "Dirt",
      purse: "$750,000",
      horses: 8,
      favorite: "Storm Chaser",
      odds: "2/1",
      status: "upcoming",
    },
    {
      id: 4,
      track: "Del Mar",
      location: "Del Mar, CA",
      race: "Pacific Classic",
      time: "6:00 PM EST",
      distance: "1 1/4 miles",
      surface: "Dirt",
      purse: "$1,000,000",
      horses: 9,
      favorite: "Speed Demon",
      odds: "7/2",
      status: "upcoming",
    },
  ]

  const tracks = [
    { id: "all", name: "All Tracks", count: 24 },
    { id: "churchill", name: "Churchill Downs", count: 8 },
    { id: "santa-anita", name: "Santa Anita", count: 6 },
    { id: "belmont", name: "Belmont Park", count: 5 },
    { id: "del-mar", name: "Del Mar", count: 5 },
  ]

  const raceStats = [
    {
      title: "Total Races Today",
      value: "47",
      icon: Trophy,
      color: "text-brand-primary-green",
    },
    {
      title: "Live Races",
      value: "3",
      icon: Zap,
      color: "text-red-500",
    },
    {
      title: "Total Purse",
      value: "$12.4M",
      icon: Target,
      color: "text-brand-vibrant-green",
    },
    {
      title: "Active Tracks",
      value: "24",
      icon: MapPin,
      color: "text-blue-500",
    },
  ]

  return (
    <div className="min-h-screen bg-brand-charcoal-black">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black py-12 md:py-16 min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/las-carreras-de-caballos-de-fondo-pista-de-carreras-en-fondo-de-neon.jpg"
            alt="Horse racing background"
            fill
            className="object-cover object-[50%_90%]" // Adjusted object-position to 50% 90%
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-black via-transparent to-brand-charcoal-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black text-brand-soft-white mb-4">HORSE RACING</h1>
          <p className="text-xl md:text-2xl text-brand-smoke-gray mb-8 max-w-3xl mx-auto">
            Bet on the most exciting horse races from tracks around the world
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-6 py-3 rounded-full">
              <Trophy className="w-6 h-6 text-brand-primary-green" />
              <span className="text-brand-soft-white font-bold">Live Racing</span>
            </div>
            <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-6 py-3 rounded-full">
              <Target className="w-6 h-6 text-brand-vibrant-green" />
              <span className="text-brand-soft-white font-bold">Best Odds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-8 bg-brand-charcoal-black-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {raceStats.map((stat, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black border border-brand-primary-green/30 p-6 text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-brand-soft-white mb-1">{stat.value}</div>
                <div className="text-sm text-brand-smoke-gray">{stat.title}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Race Schedule */}
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-soft-white mb-4">TODAY'S RACES</h2>
            <p className="text-xl text-brand-smoke-gray">Don't miss out on today's exciting racing action</p>
          </div>

          <Tabs value={selectedTrack} onValueChange={setSelectedTrack} className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 bg-brand-charcoal-black-secondary mb-8">
              {tracks.map((track) => (
                <TabsTrigger
                  key={track.id}
                  value={track.id}
                  className="data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black text-brand-soft-white"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold">{track.name}</span>
                    <span className="text-xs opacity-70">({track.count})</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedTrack} className="space-y-6">
              {upcomingRaces.map((race) => (
                <Card
                  key={race.id}
                  className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-brand-soft-white">{race.race}</h3>
                        {race.status === "live" && <Badge className="bg-red-500 text-white animate-pulse">LIVE</Badge>}
                        {race.status === "upcoming" && (
                          <Badge className="bg-brand-primary-green text-brand-charcoal-black">UPCOMING</Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-brand-smoke-gray mb-3">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>
                            {race.track}, {race.location}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{race.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Target className="w-4 h-4" />
                          <span>
                            {race.distance} • {race.surface}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="text-brand-soft-white">
                          <span className="text-brand-smoke-gray">Purse:</span>{" "}
                          <span className="font-bold text-brand-primary-green">{race.purse}</span>
                        </div>
                        <div className="text-brand-soft-white">
                          <span className="text-brand-smoke-gray">Horses:</span>{" "}
                          <span className="font-bold">{race.horses}</span>
                        </div>
                        <div className="text-brand-soft-white">
                          <span className="text-brand-smoke-gray">Favorite:</span>{" "}
                          <span className="font-bold text-brand-vibrant-green">{race.favorite}</span>{" "}
                          <span className="text-brand-primary-green">({race.odds})</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                      <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold">
                        <Play className="w-4 h-4 mr-2" />
                        Bet Now
                      </Button>
                      <Button
                        variant="outline"
                        className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Card
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 md:py-16 bg-brand-charcoal-black-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-soft-white mb-4">RACING FEATURES</h2>
            <p className="text-xl text-brand-smoke-gray">Everything you need for successful horse race betting</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Live Streaming",
                description: "Watch races live as they happen with HD quality streams",
              },
              {
                icon: TrendingUp,
                title: "Expert Tips",
                description: "Get insights from professional handicappers and analysts",
              },
              {
                icon: Target,
                title: "Best Odds",
                description: "Competitive odds on win, place, show, and exotic bets",
              },
              {
                icon: Calendar,
                title: "Race Calendar",
                description: "Never miss a race with our comprehensive racing calendar",
              },
              {
                icon: Users,
                title: "Community",
                description: "Join discussions with fellow racing enthusiasts",
              },
              {
                icon: Star,
                title: "VIP Program",
                description: "Exclusive benefits for our most loyal racing fans",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black border border-brand-primary-green/30 p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-brand-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-brand-primary-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-soft-white mb-2">{feature.title}</h3>
                <p className="text-brand-smoke-gray">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-soft-white mb-4">START BETTING ON RACES</h2>
          <p className="text-xl text-brand-smoke-gray mb-8">
            Join the excitement of horse racing with the best odds and features
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-8 py-4 text-lg">
              <Trophy className="w-5 h-5 mr-2" />
              View Today's Races
            </Button>
            <Button
              variant="outline"
              className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black px-8 py-4 text-lg bg-transparent"
            >
              Racing Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
