"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Trophy, TrendingUp, Clock } from "lucide-react"
import Image from "next/image"

const featuredMatches = [
  {
    id: 1,
    sport: "Football",
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    homeOdds: "2.10",
    drawOdds: "3.40",
    awayOdds: "3.20",
    time: "15:30",
    date: "Today",
  },
  {
    id: 2,
    sport: "Basketball",
    homeTeam: "Lakers",
    awayTeam: "Warriors",
    homeOdds: "1.85",
    drawOdds: null,
    awayOdds: "1.95",
    time: "20:00",
    date: "Today",
  },
  {
    id: 3,
    sport: "Tennis",
    homeTeam: "Djokovic",
    awayTeam: "Nadal",
    homeOdds: "1.75",
    drawOdds: null,
    awayOdds: "2.05",
    time: "14:00",
    date: "Tomorrow",
  },
]

const popularSports = [
  { name: "Football", icon: "⚽", matches: 156 },
  { name: "Basketball", icon: "🏀", matches: 89 },
  { name: "Tennis", icon: "🎾", matches: 67 },
  { name: "Baseball", icon: "⚾", matches: 45 },
  { name: "Hockey", icon: "🏒", matches: 34 },
  { name: "Soccer", icon: "⚽", matches: 234 },
]

export default function SportsbookTabContent() {
  const sportsbookUrl = "https://www.betus.com.pa/sportsbook/"

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1200&text=Sports+Betting+Hero"
          alt="Sportsbook Hero"
          width={1200}
          height={400}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">Live Sports Betting</h2>
          <p className="mt-2 text-lg text-gray-200 drop-shadow">Bet on your favorite teams and players!</p>
          <Button
            onClick={() => window.open(sportsbookUrl, "_blank")}
            className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-6"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Launch Sportsbook
          </Button>
        </div>
      </div>

      {/* Featured Matches and Popular Sports */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-gray-900/70 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Trophy className="mr-2 text-yellow-400" />
                Featured Matches
              </h3>
              <Button
                variant="outline"
                onClick={() => window.open(sportsbookUrl, "_blank")}
                className="bg-gray-800 border-gray-600 hover:bg-gray-700 text-white"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {featuredMatches.map((match) => (
                <Card key={match.id} className="bg-gray-800/50 border-gray-600">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400">{match.sport}</span>
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-300">
                          {match.date} {match.time}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-white font-semibold">{match.homeTeam}</div>
                        <div className="text-gray-300 text-sm">vs</div>
                        <div className="text-white font-semibold">{match.awayTeam}</div>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-green-600/20 border-green-500 text-green-400 hover:bg-green-600/30"
                        >
                          {match.homeOdds}
                        </Button>
                        {match.drawOdds && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-yellow-600/20 border-yellow-500 text-yellow-400 hover:bg-yellow-600/30"
                          >
                            {match.drawOdds}
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-red-600/20 border-red-500 text-red-400 hover:bg-red-600/30"
                        >
                          {match.awayOdds}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/70 border-gray-700">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="mr-2 text-pink-400" />
              Popular Sports
            </h3>

            <div className="space-y-3">
              {popularSports.map((sport) => (
                <Button
                  key={sport.name}
                  variant="outline"
                  className="w-full justify-between bg-gray-800 border-gray-600 hover:bg-gray-700 text-white"
                  onClick={() => window.open(sportsbookUrl, "_blank")}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{sport.icon}</span>
                    <span>{sport.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">{sport.matches} matches</span>
                </Button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-lg border border-pink-500/30">
              <h4 className="font-bold text-white mb-2">🎯 Bet Builder Available</h4>
              <p className="text-sm text-gray-300 mb-3">
                Create custom bets by combining multiple selections from the same match.
              </p>
              <Button
                size="sm"
                onClick={() => window.open(sportsbookUrl, "_blank")}
                className="w-full bg-pink-600 hover:bg-pink-700"
              >
                Try Bet Builder
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
