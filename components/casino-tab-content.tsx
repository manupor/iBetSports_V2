"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Star, Trophy, Users } from "lucide-react"
import Image from "next/image"

const games = [
  {
    name: "Gates of Olympus",
    provider: "Pragmatic Play",
    image: "/placeholder.svg?height=200&width=300&text=Gates+of+Olympus",
    tags: ["new", "popular"],
    rtp: 96.5,
  },
  {
    name: "Sweet Bonanza",
    provider: "Pragmatic Play",
    image: "/placeholder.svg?height=200&width=300&text=Sweet+Bonanza",
    tags: ["popular"],
    rtp: 96.48,
  },
  {
    name: "The Dog House",
    provider: "Pragmatic Play",
    image: "/placeholder.svg?height=200&width=300&text=Dog+House",
    tags: [],
    rtp: 96.51,
  },
  {
    name: "Book of Dead",
    provider: "Play'n GO",
    image: "/placeholder.svg?height=200&width=300&text=Book+of+Dead",
    tags: ["popular"],
    rtp: 96.21,
  },
  {
    name: "Starburst",
    provider: "NetEnt",
    image: "/placeholder.svg?height=200&width=300&text=Starburst",
    tags: ["classic"],
    rtp: 96.09,
  },
  {
    name: "Gonzo's Quest",
    provider: "NetEnt",
    image: "/placeholder.svg?height=200&width=300&text=Gonzo+Quest",
    tags: [],
    rtp: 95.97,
  },
  {
    name: "Mega Moolah",
    provider: "Microgaming",
    image: "/placeholder.svg?height=200&width=300&text=Mega+Moolah",
    tags: ["jackpot"],
    rtp: 88.12,
  },
  {
    name: "Lightning Roulette",
    provider: "Evolution Gaming",
    image: "/placeholder.svg?height=200&width=300&text=Lightning+Roulette",
    tags: ["live", "popular"],
    rtp: 97.3,
  },
  {
    name: "Crazy Time",
    provider: "Evolution Gaming",
    image: "/placeholder.svg?height=200&width=300&text=Crazy+Time",
    tags: ["live"],
    rtp: 96.08,
  },
  {
    name: "Blackjack Live",
    provider: "Evolution Gaming",
    image: "/placeholder.svg?height=200&width=300&text=Blackjack+Live",
    tags: ["live", "table"],
    rtp: 99.29,
  },
  {
    name: "Aviator",
    provider: "Spribe",
    image: "/placeholder.svg?height=200&width=300&text=Aviator",
    tags: ["crash", "popular"],
    rtp: 97.0,
  },
  {
    name: "Plinko",
    provider: "BGaming",
    image: "/placeholder.svg?height=200&width=300&text=Plinko",
    tags: ["casual"],
    rtp: 99.0,
  },
]

const recentWinners = [
  { user: "Player_777", amount: "$1,250.50", game: "Gates of Olympus" },
  { user: "LuckyLucy", amount: "$800.00", game: "Sweet Bonanza" },
  { user: "JackpotJoe", amount: "$5,600.75", game: "Mega Moolah" },
  { user: "BetMaster", amount: "$320.00", game: "Blackjack Live" },
  { user: "SpinsQueen", amount: "$950.20", game: "Book of Dead" },
]

const GameCard = ({ game }: { game: (typeof games)[0] }) => (
  <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30">
    <CardContent className="p-0 relative">
      <Image
        src={game.image || "/placeholder.svg"}
        alt={game.name}
        width={300}
        height={200}
        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
      <div className="absolute top-2 left-2 flex space-x-1">
        {game.tags.includes("new") && (
          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
        )}
        {game.tags.includes("popular") && (
          <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">HOT</span>
        )}
        {game.tags.includes("jackpot") && (
          <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">JACKPOT</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg truncate text-white">{game.name}</h3>
        <p className="text-sm text-gray-400">{game.provider}</p>
        <div className="flex justify-between items-center mt-2">
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold flex-1 mr-2">
            Play Now
          </Button>
          <span className="text-xs text-gray-300 whitespace-nowrap">RTP {game.rtp}%</span>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default function CasinoTabContent() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredGames = games.filter(
    (game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.provider.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1200&text=Casino+Hero+Banner"
          alt="Casino Hero"
          width={1200}
          height={400}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Over 5,000 Games Waiting For You
          </h2>
          <p className="mt-2 text-lg text-gray-200 drop-shadow">Slots, Live Casino, Table Games & More!</p>
          <Button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-6">
            Explore Games
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="bg-gray-900/70 border-gray-700 backdrop-blur-sm">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for games or providers..."
                className="pl-10 w-full bg-gray-800 border-gray-600 focus:ring-pink-500 focus:border-pink-500 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-[180px] bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white border-gray-600">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="slots">Slots</SelectItem>
                <SelectItem value="live">Live Casino</SelectItem>
                <SelectItem value="table">Table Games</SelectItem>
                <SelectItem value="jackpot">Jackpot</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[180px] bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white border-gray-600">
                <SelectItem value="popular">Popularity</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="az">A-Z</SelectItem>
                <SelectItem value="za">Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Games Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
        {filteredGames.map((game) => (
          <GameCard key={game.name} game={game} />
        ))}
      </div>

      {/* Recent Winners and Top Providers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-gray-900/70 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Trophy className="mr-2 text-yellow-400" />
              Recent Big Wins
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700 hover:bg-gray-800/50">
                  <TableHead className="text-gray-300">User</TableHead>
                  <TableHead className="text-gray-300">Amount</TableHead>
                  <TableHead className="text-gray-300">Game</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentWinners.map((winner, index) => (
                  <TableRow key={index} className="border-gray-700 hover:bg-gray-800/50">
                    <TableCell className="font-medium flex items-center text-white">
                      <Users className="mr-2 h-4 w-4 text-gray-400" />
                      {winner.user}
                    </TableCell>
                    <TableCell className="text-green-400 font-bold">{winner.amount}</TableCell>
                    <TableCell className="text-gray-300">{winner.game}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/70 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Star className="mr-2 text-yellow-400" />
              Top Providers
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-3">
            {["Pragmatic Play", "Evolution", "NetEnt", "Play'n GO", "Microgaming", "BGaming"].map((provider) => (
              <Button
                key={provider}
                variant="outline"
                className="bg-gray-800 border-gray-600 hover:bg-gray-700 text-white justify-start"
              >
                {provider}
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
