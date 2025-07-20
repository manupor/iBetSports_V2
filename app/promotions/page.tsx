import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, RefreshCw, Zap, Crown, Trophy, Calendar, Star } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function PromotionsPage() {
  const activePromotions = [
    {
      title: "Welcome Package",
      description: "Get up to $10,000 + 500 Free Spins",
      type: "New Players",
      value: "$10,000",
      color: "from-brand-primary-green to-brand-primary-green-dark",
      icon: Gift,
      expires: "No Expiry",
      code: "WELCOME10K",
      terms: "Min deposit $20. 35x wagering requirement.",
    },
    {
      title: "Daily Cashback",
      description: "15% cashback on all losses every day",
      type: "Daily",
      value: "15%",
      color: "from-brand-primary-green to-brand-primary-green-dark",
      icon: RefreshCw,
      expires: "Daily Reset",
      code: "CASHBACK15",
      terms: "No wagering requirements. Max cashback $500/day.",
    },
    {
      title: "Weekend Reload",
      description: "75% bonus up to $2,500 every weekend",
      type: "Weekend",
      value: "$2,500",
      color: "from-brand-primary-green to-brand-primary-green-dark",
      icon: Zap,
      expires: "Every Weekend",
      code: "WEEKEND75",
      terms: "Available Fri-Sun. 25x wagering requirement.",
    },
    {
      title: "VIP Exclusive",
      description: "Monthly bonus for VIP members only",
      type: "VIP Only",
      value: "$5,000",
      color: "from-brand-vibrant-green to-brand-vibrant-green-dark",
      icon: Crown,
      expires: "Monthly",
      code: "VIP5000",
      terms: "VIP status required. Personal bonus amounts vary.",
    },
  ]

  const tournaments = [
    {
      name: "Mega Slot Tournament",
      prize: "$100,000",
      participants: "5,247",
      timeLeft: "3d 14h",
      status: "Active",
      entry: "Free",
      games: "All Slots",
    },
    {
      name: "Blackjack Championship",
      prize: "$50,000",
      participants: "2,134",
      timeLeft: "1d 8h",
      status: "Active",
      entry: "$25",
      games: "Live Blackjack",
    },
    {
      name: "Crypto Cup",
      prize: "$250,000",
      participants: "8,921",
      timeLeft: "Starting Soon",
      status: "Upcoming",
      entry: "Free",
      games: "All Games",
    },
    {
      name: "High Roller Challenge",
      prize: "$75,000",
      participants: "456",
      timeLeft: "5d 12h",
      status: "Active",
      entry: "$100",
      games: "Table Games",
    },
  ]

  const loyaltyTiers = [
    {
      name: "Bronze",
      cashback: "1%",
      perks: ["Basic Support", "Monthly Bonus"],
      color: "from-brand-vibrant-green to-brand-vibrant-green-dark",
    },
    {
      name: "Silver",
      cashback: "2%",
      perks: ["Priority Support", "Weekly Bonus", "Faster Withdrawals"],
      color: "from-brand-smoke-gray/50 to-brand-smoke-gray/70",
    },
    {
      name: "Gold",
      cashback: "3%",
      perks: ["VIP Support", "Daily Bonus", "Exclusive Games"],
      color: "from-brand-vibrant-green to-brand-vibrant-green-dark",
    },
    {
      name: "Diamond",
      cashback: "5%",
      perks: ["Personal Manager", "Custom Bonuses", "Luxury Gifts"],
      color: "from-brand-primary-green to-brand-primary-green-dark",
    },
  ]

  return (
    <div className="bg-brand-charcoal-black min-h-screen text-brand-soft-white font-poppins">
      <TopNavigation activeTab="promotions" showTabs={true} />

      {/* Header */}
      <header className="bg-brand-charcoal-black-secondary/95 backdrop-blur-sm py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-brand-soft-white">Amazing</span>{" "}
              <span className="bg-gradient-to-r from-brand-primary-green via-brand-vibrant-green to-brand-primary-green bg-clip-text text-transparent">
                Promotions
              </span>
            </h1>
            <p className="text-xl text-brand-smoke-gray max-w-3xl mx-auto">
              Boost your gameplay with our exclusive bonuses, tournaments, and VIP rewards
            </p>
          </div>
        </div>
      </header>

      {/* Active Promotions */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Active Promotions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {activePromotions.map((promo, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${promo.color} p-6 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className="flex items-center space-x-3">
                      <promo.icon className="w-6 h-6 md:w-8 md:h-8" />
                      <Badge className="bg-black/20 text-brand-soft-white px-2 md:px-3 py-1">{promo.type}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold">{promo.value}</div>
                      <div className="text-xs md:text-sm opacity-80">Max Bonus</div>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-xl md:text-2xl font-bold">{promo.title}</h4>
                    <p className="text-base md:text-lg opacity-90">{promo.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-xs md:text-sm opacity-80">Promo Code</div>
                        <div className="font-bold bg-black/20 px-2 md:px-3 py-1 rounded-lg inline-block text-sm">
                          {promo.code}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs md:text-sm opacity-80">Expires</div>
                        <div className="font-bold text-sm">{promo.expires}</div>
                      </div>
                    </div>

                    <div className="text-xs opacity-75 bg-black/10 p-2 rounded">{promo.terms}</div>

                    <Button className="w-full bg-black/20 hover:bg-black/30 text-brand-soft-white font-bold py-2 md:py-3 mt-4 md:mt-6">
                      Claim Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tournaments</h2>
            <p className="text-lg text-brand-smoke-gray">Compete against other players for massive prizes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tournaments.map((tournament, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Trophy className="w-8 h-8 text-brand-vibrant-green" />
                    <Badge
                      className={`${tournament.status === "Active" ? "bg-brand-primary-green/20 text-brand-primary-green border-brand-primary-green/30" : "bg-brand-vibrant-green/20 text-brand-vibrant-green border-brand-vibrant-green/30"}`}
                    >
                      {tournament.status}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-brand-soft-white">{tournament.name}</h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray">Prize Pool:</span>
                      <span className="text-brand-vibrant-green font-bold">{tournament.prize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray">Players:</span>
                      <span className="text-brand-soft-white">{tournament.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray">Entry Fee:</span>
                      <span className="text-brand-soft-white">{tournament.entry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray">Games:</span>
                      <span className="text-brand-soft-white">{tournament.games}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray">Time Left:</span>
                      <span className="text-brand-soft-white font-bold">{tournament.timeLeft}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark">
                    {tournament.status === "Active" ? "Join Tournament" : "Register Now"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Loyalty Program */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Crown className="w-10 h-10 text-brand-vibrant-green" />
              <h2 className="text-3xl md:text-4xl font-bold">VIP Loyalty Program</h2>
            </div>
            <p className="text-lg text-brand-smoke-gray max-w-3xl mx-auto">
              Earn points with every bet and unlock exclusive rewards, higher limits, and personal service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loyaltyTiers.map((tier, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${tier.color} p-6 rounded-2xl text-center relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <Crown className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-black mb-4">{tier.cashback}</div>
                  <div className="text-sm opacity-90 mb-4">Cashback Rate</div>

                  <div className="space-y-2">
                    {tier.perks.map((perk, perkIndex) => (
                      <div key={perkIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-brand-vibrant-green hover:bg-brand-vibrant-green-dark text-brand-charcoal-black px-8 py-3 text-lg">
              Join VIP Program
            </Button>
          </div>
        </div>
      </section>

      {/* Promotion Calendar */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calendar className="w-8 h-8 text-brand-primary-green" />
              <h2 className="text-3xl md:text-4xl font-bold">Weekly Schedule</h2>
            </div>
            <p className="text-lg text-brand-smoke-gray">Never miss out on our regular promotions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {[
              { day: "Monday", promo: "Reload Bonus", desc: "50% up to $1,000" },
              { day: "Tuesday", promo: "Free Spins", desc: "100 Free Spins" },
              { day: "Wednesday", promo: "Cashback", desc: "20% Cashback" },
              { day: "Thursday", promo: "Tournament", desc: "$25K Prize Pool" },
              { day: "Friday", promo: "Weekend Bonus", desc: "75% up to $2,500" },
              { day: "Saturday", promo: "Live Casino", desc: "25% Bonus" },
              { day: "Sunday", promo: "Sports Boost", desc: "Odds Boost" },
            ].map((schedule, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-4 rounded-xl text-center"
              >
                <h4 className="font-bold text-brand-primary-green mb-2">{schedule.day}</h4>
                <h5 className="font-semibold text-brand-soft-white mb-1">{schedule.promo}</h5>
                <p className="text-sm text-brand-smoke-gray">{schedule.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
