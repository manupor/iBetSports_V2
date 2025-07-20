import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, Users, Clock, Shield } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function LiveCasinoPage() {
  const liveGames = [
    { name: "Live Blackjack", tables: 12, minBet: "$1", maxBet: "$5,000" },
    { name: "Live Roulette", tables: 8, minBet: "$0.50", maxBet: "$10,000" },
    { name: "Live Baccarat", tables: 6, minBet: "$5", maxBet: "$25,000" },
    { name: "Live Poker", tables: 4, minBet: "$2", maxBet: "$1,000" },
  ]

  const features = [
    {
      icon: Video,
      title: "HD Streaming",
      description: "Crystal clear video quality with multiple camera angles",
    },
    {
      icon: Users,
      title: "Professional Dealers",
      description: "Experienced dealers trained in world-class casinos",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Live games available around the clock",
    },
    {
      icon: Shield,
      title: "Fair Play",
      description: "All games are monitored and certified for fairness",
    },
  ]

  return (
    <div className="bg-brand-charcoal-black min-h-screen text-brand-soft-white font-poppins">
      <TopNavigation activeTab="casino" showTabs={true} />

      {/* Header */}
      <header className="bg-brand-charcoal-black-secondary/95 backdrop-blur-sm py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Live Casino</h1>
            <p className="text-xl text-brand-smoke-gray max-w-3xl mx-auto">
              Experience the thrill of a real casino with live dealers streaming in HD
            </p>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Live Casino Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-brand-primary-green" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-brand-smoke-gray">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Games */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Available Live Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveGames.map((game, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{game.name}</h3>
                  <Badge className="bg-brand-primary-green/20 text-brand-primary-green">LIVE</Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-brand-smoke-gray">Tables:</span>
                    <span className="text-brand-soft-white font-bold">{game.tables}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-smoke-gray">Min Bet:</span>
                    <span className="text-brand-soft-white font-bold">{game.minBet}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-smoke-gray">Max Bet:</span>
                    <span className="text-brand-soft-white font-bold">{game.maxBet}</span>
                  </div>
                </div>
                <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark">Join Table</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
