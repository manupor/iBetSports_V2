import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dices, Play, Trophy, Gem, Crown } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function CasinoGamesPage() {
  const gameCategories = [
    {
      title: "Slot Machines",
      description: "Over 500+ premium slot games with progressive jackpots",
      games: 523,
      icon: Dices,
      color: "from-brand-primary-green to-brand-primary-green-dark",
    },
    {
      title: "Table Games",
      description: "Classic casino games including Blackjack, Roulette, and Baccarat",
      games: 45,
      icon: Trophy,
      color: "from-brand-primary-green to-brand-primary-green-dark",
    },
    {
      title: "Live Casino",
      description: "Real dealers streaming live from professional studios",
      games: 78,
      icon: Crown,
      color: "from-brand-vibrant-green to-brand-vibrant-green-dark",
    },
    {
      title: "Jackpot Games",
      description: "Progressive jackpots with prizes reaching millions",
      games: 32,
      icon: Gem,
      color: "from-brand-primary-green to-brand-vibrant-green",
    },
  ]

  const featuredGames = [
    { name: "Mega Fortune", jackpot: "$2.4M", rtp: "96.6%" },
    { name: "Starburst", jackpot: "N/A", rtp: "96.1%" },
    { name: "Book of Dead", jackpot: "N/A", rtp: "94.2%" },
    { name: "Gonzo's Quest", jackpot: "N/A", rtp: "95.9%" },
  ]

  return (
    <div className="bg-brand-charcoal-black min-h-screen text-brand-soft-white font-poppins">
      <TopNavigation activeTab="casino" showTabs={true} />

      {/* Header */}
      <header className="bg-brand-charcoal-black-secondary/95 backdrop-blur-sm py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Casino Games</h1>
            <p className="text-xl text-brand-smoke-gray max-w-3xl mx-auto">
              Discover our extensive collection of premium casino games with the highest RTPs and biggest jackpots
            </p>
          </div>
        </div>
      </header>

      {/* Game Categories */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Game Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameCategories.map((category, index) => (
              <Card key={index} className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-center`}>
                <category.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm opacity-90 mb-4">{category.description}</p>
                <Badge className="bg-black/20">{category.games} Games</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl"
              >
                <div className="aspect-square bg-brand-charcoal-black-tertiary/30 rounded-lg mb-4 flex items-center justify-center">
                  <Play className="w-8 h-8 text-brand-primary-green" />
                </div>
                <h3 className="text-lg font-bold mb-2">{game.name}</h3>
                <div className="space-y-1 text-sm text-brand-smoke-gray">
                  <p>Jackpot: {game.jackpot}</p>
                  <p>RTP: {game.rtp}</p>
                </div>
                <Button className="w-full mt-4 bg-brand-primary-green hover:bg-brand-primary-green-dark">
                  Play Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
