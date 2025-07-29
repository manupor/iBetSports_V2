"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Gift, Star, Trophy, Users, DollarSign, Calendar } from "lucide-react"

export function PromotionsTabContent() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const promotions = [
    {
      id: 1,
      title: "125% Sports Welcome Bonus",
      description: "Get up to $1,000 bonus on your first sports deposit",
      image: "/images/125-sports-bonus.png",
      category: "sports",
      bonus: "125%",
      maxBonus: "$1,000",
      code: "IBS125CS",
      featured: true,
      terms: `
        <h3>125% SP WELCOME BONUS</h3>
        <ol>
          <li>You will receive a 125% bonus on your qualifying initial deposit only.</li>
          <li>A minimum deposit of $100 USD is required to qualify for the bonus.</li>
          <li>The maximum bonus per deposit is $1000 USD</li>
          <li>Bonus awarded as Free Play money.</li>
          <li>There is a 15X rollover requirement associated with this promotion.</li>
          <li>There is a Max cashout of $10,000.00 USD and the bonus expires in 14 days.</li>
          <li>Rollover (w) is calculated based on your deposit (d) plus bonus, (b) multiplied by the rollover requirement of your bonus (r). Rollover Formula w = (d+b)* r</li>
          <li>Please note that only the lowest amount between the risk and the win counts towards your rollover requirement. Horses, Casino, and Poker will not contribute action towards the rollover.</li>
          <li>To receive the bonus, you must use Promo Code <strong>IBS125CS</strong></li>
          <li>To redeem the bonus, you must contact us through our NEED HELP section on the upper right hand corner of the page.</li>
          <li>This promotion is non-transferable.</li>
          <li>The free plays can only be used on straight bets up to +250. They cannot be used in the Racebook, Casino, and Poker</li>
          <li>IBETSPORTS reserves the right to alter or amend the Terms and Conditions of this promotion at any time without notice.</li>
          <li>Promotions and bonuses are restricted to one per: deposit, person, account, household, email, and phone number.</li>
        </ol>
      `,
    },
    {
      id: 2,
      title: "200% Crypto Casino Bonus",
      description: "Double your crypto deposits with our exclusive casino bonus",
      image: "/images/200-crypto-bonus.png",
      category: "casino",
      bonus: "200%",
      maxBonus: "$2,000",
      code: "IBS200CP",
      featured: true,
      terms: `
        <h3>200% CRYPTO CASINO WELCOME BONUS</h3>
        <ol>
          <li>You will receive a <strong>200%</strong> bonus on your qualifying INITIAL deposit only.</li>
          <li>A minimum deposit of <strong>$50</strong> is required to qualify for the bonus.</li>
          <li>The maximum amount awarded for this bonus is <strong>$2000.00</strong> USD</li>
          <li>The maximum cash out for this bonus is <strong>$10,000</strong> and expires in 7 days.</li>
          <li>There is a <strong>40X</strong> rollover requirement associated with this promotion.</li>
          <li>Deposits made via CRYPTO only are eligible for this bonus.</li>
          <li>The Bonus applies ONLY for online casino.</li>
          <li>Bonuses are for USA Players, bonuses for other players are at the discretion of management.</li>
          <li>To receive the bonus, you must use Promo Code <strong>IBS200CP</strong></li>
          <li>To redeem the bonus, you may do so through our CASHIER/ PROMO CODE FIELD</li>
          <li>Promotions and bonuses are restricted to one per: deposit, person, account, household, email, and phone number.</li>
          <li>IBETSPORTS reserves the right to alter or amend the Terms and Conditions of this promotion at any time without notice.</li>
        </ol>
      `,
    },
    {
      id: 3,
      title: "150% Casino Reload Bonus",
      description: "Reload your account and get 150% extra to play with",
      image: "/images/150-casino-reload.png",
      category: "casino",
      bonus: "150%",
      maxBonus: "$1,000",
      code: "IBS150CS",
      featured: false,
      terms: `
        <h3>150% CASINO RELOAD BONUS</h3>
        <ol>
          <li>First Time Deposit Crypto Casino 250% min 100$ max 2k 40x rollover max cash 10k 7 day expiration</li>
          <li>First Time Deposit Other Deposit Type other 200% min 50$ max 1k 30x rollover max cash out 5k 7 days expiration</li>
          <li>Reload crypto 150% 100 min 1k max 40x rollover max cash 10k 7 day expiration</li>
          <li>Reload Other Deposit Type 100% 100 min 1k max 40x rollover max cash 5k 7 day expiration</li>
          <li>Promotions and bonuses are restricted to one per: deposit, person, account, household, email, and phone number.</li>
          <li>All bonuses come with a rollover requirement , please make sure you understand the requirements prior to agreeing. You may decline the bonus but every deposit has a one time rollover requirement.</li>
        </ol>
      `,
    },
    {
      id: 4,
      title: "200% Refer a Friend Bonus",
      description: "Earn bonuses for every friend you refer to our platform",
      image: "/images/200-refer-bonus.png",
      category: "referral",
      bonus: "200%",
      maxBonus: "$200",
      code: "IBS200CPR",
      featured: false,
      terms: `
        <h3>200% REFER A FRIEND BONUS</h3>
        <p>Friends have more fun together.</p>
        <p>Share your invite link with your friends via email, social media, or SMS and ask them to sign up, we'll give you a 200% bonus up to $200 when they make their first deposit (min: $50).</p>
        <p><strong>Unlimited Referrals, Unlimited Bonuses!</strong></p>
        <p>Repeat & Repeat</p>
        <p>Enjoy an unlimited amount of referral bonuses and get paid with each new friend that joins!</p>
      `,
    },
  ]

  const categories = [
    { id: "all", label: "All Promotions", icon: Gift },
    { id: "sports", label: "Sports", icon: Trophy },
    { id: "casino", label: "Casino", icon: Star },
    { id: "referral", label: "Referral", icon: Users },
  ]

  const filteredPromotions =
    selectedCategory === "all" ? promotions : promotions.filter((promo) => promo.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/jugador-de-futbol-americano-de-estilo-neon.jpg"
          alt="Neon Football Player Promotions Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-start pl-6 lg:pl-12">
          <div className="text-left space-y-4">
            <h1 className="text-4xl md:text-6xl font-black">PROMOTIONS</h1>
            <p className="text-xl md:text-2xl text-brand-smoke-gray">Exclusive bonuses and rewards await</p>
            <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-8 py-3 text-lg mt-6">
              Claim Bonus
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-primary-green mb-2">$50K+</div>
              <div className="text-brand-smoke-gray">Daily Bonuses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-primary-green mb-2">24/7</div>
              <div className="text-brand-smoke-gray">Active Promos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-primary-green mb-2">200%</div>
              <div className="text-brand-smoke-gray">Max Bonus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-primary-green mb-2">15K+</div>
              <div className="text-brand-smoke-gray">Happy Winners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-brand-primary-green text-brand-charcoal-black"
                      : "bg-brand-charcoal-black-secondary text-brand-soft-white hover:bg-brand-primary-green/20"
                  }`}
                >
                  <IconComponent size={20} />
                  <span>{category.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPromotions.map((promo) => (
              <Card
                key={promo.id}
                className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/20 overflow-hidden group hover:border-brand-primary-green/50 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={promo.image || "/placeholder.svg"}
                    alt={promo.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {promo.featured && (
                    <Badge className="absolute top-4 left-4 bg-brand-primary-green text-brand-charcoal-black">
                      <Star size={16} className="mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 bg-brand-primary-green text-brand-charcoal-black px-3 py-1 rounded-full font-bold">
                    {promo.bonus}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-brand-soft-white mb-2">{promo.title}</h3>
                  <p className="text-brand-smoke-gray mb-4">{promo.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-brand-primary-green">
                        <DollarSign size={16} />
                        <span className="font-bold">{promo.maxBonus}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-brand-smoke-gray">
                        <Calendar size={16} />
                        <span className="text-sm">Code: {promo.code}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold">
                      Claim Bonus
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent"
                        >
                          Terms
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/20 text-brand-soft-white max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-brand-primary-green">Terms and Conditions</DialogTitle>
                        </DialogHeader>
                        <div
                          className="prose prose-invert max-w-none"
                          dangerouslySetInnerHTML={{ __html: promo.terms }}
                        />
                        <div className="mt-6 p-4 bg-brand-charcoal-black rounded-lg">
                          <p className="text-sm text-brand-smoke-gray">
                            <strong>Important Disclaimer:</strong> The user is warned that they should make their own
                            inquiry into the legality of participating in any of these games and/or activities.
                            IBETSPORTS assumes no responsibility for the actions by and makes no representation or
                            endorsement of any of these games and/or activities if they are illegal in the jurisdiction
                            of the reader or client of this site.
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Program Teaser */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-primary-green/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary-green rounded-full mb-6">
            <Trophy size={32} className="text-brand-charcoal-black" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-soft-white mb-4">Ready for VIP Treatment?</h2>
          <p className="text-xl text-brand-smoke-gray mb-8 max-w-2xl mx-auto">
            Join our exclusive VIP program and unlock premium bonuses, personal account managers, and exclusive events.
          </p>
          <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-8 py-3 text-lg">
            Learn More About VIP
          </Button>
        </div>
      </section>

      {/* Responsible Gaming Notice */}
      <section className="py-8 px-4 bg-brand-charcoal-black-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-smoke-gray text-sm">
            Please gamble responsibly. All bonuses come with terms and conditions. Players must be 18+ and located in
            eligible jurisdictions. If you feel you have a gambling problem, please seek help.
          </p>
        </div>
      </section>
    </div>
  )
}

export default PromotionsTabContent
