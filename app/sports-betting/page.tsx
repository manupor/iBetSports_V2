import { Card } from "@/components/ui/card"
import { Trophy, Target, TrendingUp, Clock } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function SportsBettingPage() {
  const sportsOffered = [
    { sport: "Football", markets: 150, leagues: 25 },
    { sport: "Basketball", markets: 120, leagues: 18 },
    { sport: "Tennis", markets: 80, leagues: 12 },
    { sport: "Baseball", markets: 90, leagues: 8 },
    { sport: "Hockey", markets: 70, leagues: 10 },
    { sport: "Boxing/MMA", markets: 45, leagues: 6 },
  ]

  const features = [
    {
      icon: Trophy,
      title: "Live Betting",
      description: "Bet on games as they happen with real-time odds",
    },
    {
      icon: Target,
      title: "Best Odds",
      description: "Competitive odds across all major sports",
    },
    {
      icon: TrendingUp,
      title: "Cash Out",
      description: "Take control of your bets with our cash out feature",
    },
    {
      icon: Clock,
      title: "24/7 Action",
      description: "Sports betting available around the clock",
    },
  ]

  return (
    <div className="bg-brand-charcoal-black min-h-screen text-brand-soft-white font-poppins">
      <TopNavigation activeTab="sportsbook" showTabs={true} />

      {/* Header */}
      <header className="bg-brand-charcoal-black-secondary/95 backdrop-blur-sm py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Sports Betting</h1>
            <p className="text-xl text-brand-smoke-gray max-w-3xl mx-auto">
              Bet on your favorite sports with the best odds and live betting options
            </p>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Our Sportsbook</h2>
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

      {/* Sports Offered */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sports We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsOffered.map((sport, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-4">{sport.sport}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-brand-smoke-gray">Markets:</span>
                    <span className="text-brand-soft-white font-bold">{sport.markets}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-smoke-gray">Leagues:</span>
                    <span className="text-brand-soft-white font-bold">{sport.leagues}+</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
