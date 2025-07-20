import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Star, Gift, Zap, Shield, Phone, Calendar } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function VipProgramPage() {
  const vipTiers = [
    {
      name: "Bronze VIP",
      level: 1,
      pointsRequired: "0",
      cashback: "1%",
      color: "from-brand-vibrant-green to-brand-vibrant-green-dark",
      perks: ["Basic VIP Support", "Monthly Bonus", "Birthday Gift", "Faster Withdrawals"],
    },
    {
      name: "Silver VIP",
      level: 2,
      pointsRequired: "10,000",
      cashback: "2%",
      color: "from-brand-smoke-gray/50 to-brand-smoke-gray/70",
      perks: ["Priority Support", "Weekly Bonuses", "Exclusive Tournaments", "Higher Limits", "Personal Gifts"],
    },
    {
      name: "Gold VIP",
      level: 3,
      pointsRequired: "50,000",
      cashback: "3%",
      color: "from-brand-vibrant-green to-brand-vibrant-green-dark",
      perks: [
        "VIP Support Line",
        "Daily Bonuses",
        "Exclusive Games",
        "Luxury Gifts",
        "Event Invitations",
        "Custom Promotions",
      ],
    },
    {
      name: "Diamond VIP",
      level: 4,
      pointsRequired: "250,000",
      cashback: "5%",
      color: "from-brand-primary-green to-brand-primary-green-dark",
      perks: [
        "Personal Manager",
        "Custom Bonuses",
        "Luxury Experiences",
        "Private Events",
        "Exclusive Vacations",
        "Unlimited Withdrawals",
        "24/7 Concierge",
      ],
    },
  ]

  const exclusivePerks = [
    {
      icon: Crown,
      title: "Personal Account Manager",
      description: "Dedicated support from your personal VIP manager",
      tier: "Gold+",
    },
    {
      icon: Gift,
      title: "Custom Bonuses",
      description: "Personalized bonus offers tailored to your play style",
      tier: "Silver+",
    },
    {
      icon: Zap,
      title: "Faster Withdrawals",
      description: "Priority processing for all withdrawal requests",
      tier: "Bronze+",
    },
    {
      icon: Shield,
      title: "Higher Limits",
      description: "Increased deposit and betting limits for bigger wins",
      tier: "Silver+",
    },
    {
      icon: Phone,
      title: "VIP Support Line",
      description: "Direct access to our VIP support team",
      tier: "Gold+",
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Invitations to VIP-only events and experiences",
      tier: "Gold+",
    },
  ]

  const luxuryRewards = [
    {
      title: "Luxury Vacations",
      description: "All-expenses-paid trips to exotic destinations",
      image: "🏝️",
      tier: "Diamond",
    },
    {
      title: "Premium Electronics",
      description: "Latest gadgets and high-end electronics",
      image: "📱",
      tier: "Gold+",
    },
    {
      title: "Fine Dining",
      description: "Michelin-starred restaurant experiences",
      image: "🍽️",
      tier: "Gold+",
    },
    {
      title: "Luxury Watches",
      description: "Premium timepieces from top brands",
      image: "⌚",
      tier: "Diamond",
    },
    {
      title: "Sports Events",
      description: "VIP tickets to major sporting events",
      image: "🏆",
      tier: "Silver+",
    },
    {
      title: "Concert Tickets",
      description: "Backstage passes to exclusive concerts",
      image: "🎵",
      tier: "Silver+",
    },
  ]

  return (
    <div className="bg-brand-charcoal-black min-h-screen text-brand-soft-white font-poppins">
      <TopNavigation showTabs={true} />

      {/* Header */}
      <header className="bg-brand-charcoal-black-secondary/95 backdrop-blur-sm py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Crown className="w-10 h-10 text-brand-vibrant-green" />
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-brand-vibrant-green via-brand-vibrant-green to-brand-vibrant-green bg-clip-text text-transparent">
                  VIP Program
                </span>
              </h1>
            </div>
            <p className="text-xl text-brand-smoke-gray max-w-3xl mx-auto">
              Experience the ultimate in luxury gaming with exclusive rewards, personal service, and VIP treatment
            </p>
          </div>
        </div>
      </header>

      {/* VIP Tiers */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">VIP Tiers</h2>
            <p className="text-lg text-brand-smoke-gray">Climb the VIP ladder and unlock exclusive benefits</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vipTiers.map((tier, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${tier.color} p-6 rounded-2xl relative overflow-hidden transform hover:scale-105 transition-all duration-300`}
              >
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Crown className="w-12 h-12" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <Badge className="bg-black/20 mb-4">Level {tier.level}</Badge>

                  <div className="space-y-2 mb-4">
                    <div className="text-2xl font-black">{tier.cashback}</div>
                    <div className="text-sm opacity-80">Cashback Rate</div>
                  </div>

                  <div className="text-sm mb-4">
                    <span className="opacity-80">Points Required: </span>
                    <span className="font-bold">{tier.pointsRequired}</span>
                  </div>

                  <div className="space-y-2 text-left">
                    {tier.perks.map((perk, perkIndex) => (
                      <div key={perkIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Perks */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive VIP Perks</h2>
            <p className="text-lg text-brand-smoke-gray">Enjoy privileges that money can't buy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exclusivePerks.map((perk, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-vibrant-green/20 p-3 rounded-lg">
                    <perk.icon className="w-6 h-6 text-brand-vibrant-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-brand-soft-white">{perk.title}</h3>
                      <Badge className="bg-brand-vibrant-green/20 text-brand-vibrant-green text-xs">{perk.tier}</Badge>
                    </div>
                    <p className="text-brand-smoke-gray">{perk.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Rewards */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Luxury Rewards</h2>
            <p className="text-lg text-brand-smoke-gray">Redeem your VIP points for extraordinary experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxuryRewards.map((reward, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl text-center hover:border-brand-vibrant-green/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{reward.image}</div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-brand-soft-white">{reward.title}</h3>
                  <Badge className="bg-brand-vibrant-green/20 text-brand-vibrant-green text-xs">{reward.tier}</Badge>
                </div>
                <p className="text-brand-smoke-gray mb-4">{reward.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-brand-vibrant-green text-brand-vibrant-green hover:bg-brand-vibrant-green hover:text-brand-charcoal-black bg-transparent"
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How VIP Points Work</h2>
            <p className="text-lg text-brand-smoke-gray">Earn points with every bet and climb the VIP ladder</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl text-center">
              <div className="bg-brand-primary-green/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-primary-green font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Play & Earn</h3>
              <p className="text-brand-smoke-gray">Earn 1 VIP point for every $10 wagered on any game</p>
            </Card>

            <Card className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl text-center">
              <div className="bg-brand-primary-green/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-primary-green font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Climb Tiers</h3>
              <p className="text-brand-smoke-gray">Accumulate points to unlock higher VIP tiers and better rewards</p>
            </Card>

            <Card className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl text-center">
              <div className="bg-brand-primary-green/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-primary-green font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Enjoy Benefits</h3>
              <p className="text-brand-smoke-gray">Access exclusive perks, bonuses, and luxury rewards</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Join VIP */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-12 text-center">
          <Card className="bg-gradient-to-r from-brand-primary-green/20 via-brand-vibrant-green/20 to-brand-primary-green/20 border border-brand-vibrant-green/30 p-8 md:p-12 rounded-2xl">
            <Crown className="w-16 h-16 mx-auto mb-6 text-brand-vibrant-green" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join VIP?</h2>
            <p className="text-lg text-brand-smoke-gray mb-8 max-w-2xl mx-auto">
              Start earning VIP points today and unlock a world of exclusive benefits, luxury rewards, and personalized
              service.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark px-8 py-3 text-lg">
                Start Playing Now
              </Button>
              <Button
                variant="outline"
                className="border-brand-vibrant-green text-brand-vibrant-green hover:bg-brand-vibrant-green hover:text-brand-charcoal-black px-8 py-3 text-lg bg-transparent"
              >
                Contact VIP Manager
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
