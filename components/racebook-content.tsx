"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Trophy, Clock, Star, Target, Award, Zap } from "lucide-react"
import Image from "next/image"

export function RacebookContent() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const promotions = [
    {
      id: "IBS125CS",
      title: "125% Sports Welcome Bonus",
      image: "/images/125-sports-bonus.png",
      code: "IBS125CS",
      terms: [
        "You will receive a 125% bonus on your qualifying initial deposit only.",
        "A minimum deposit of $100 USD is required to qualify for the bonus.",
        "The maximum bonus per deposit is $1000 USD",
        "Bonus awarded as Free Play money.",
        "There is a 15X rollover requirement associated with this promotion.",
        "There is a Max cashout of $10,000.00 USD and the bonus expires in 14 days.",
        "Rollover (w) is calculated based on your deposit (d) plus bonus, (b) multiplied by the rollover requirement of your bonus (r). Rollover Formula w = (d+b)* r",
        "Please note that only the lowest amount between the risk and the win counts towards your rollover requirement. Horses, Casino, and Poker will not contribute action towards the rollover.",
        "To receive the bonus, you must use Promo Code IBS125CS",
        "To redeem the bonus, you must contact us through our NEED HELP section on the upper right hand corner of the page.",
        "This promotion is non-transferable.",
        "The free plays can only be used on straight bets up to +250. They cannot be used in the Racebook, Casino, and Poker",
        "IBETSPORTS reserves the right to alter or amend the Terms and Conditions of this promotion at any time without notice.",
        "Promotions and bonuses are restricted to one per: deposit, person, account, household, email, and phone number.",
      ],
    },
    {
      id: "IBS200CP",
      title: "200% Crypto Casino Bonus",
      image: "/images/200-crypto-bonus.png",
      code: "IBS200CP",
      terms: [
        "You will receive a 200% bonus on your qualifying INITIAL deposit only.",
        "A minimum deposit of $50 is required to qualify for the bonus.",
        "The maximum amount awarded for this bonus is $2000.00 USD",
        "The maximum cash out for this bonus is $10,000 and expires in 7 days.",
        "There is a 40X rollover requirement associated with this promotion.",
        "Deposits made via CRYPTO only are eligible for this bonus.",
        "The Bonus applies ONLY for online casino.",
        "Bonuses are for USA Players, bonuses for other players are at the discretion of management.",
        "To receive the bonus, you must use Promo Code IBS200CP",
        "To redeem the bonus, you may do so through our CASHIER/ PROMO CODE FIELD",
        "Promotions and bonuses are restricted to one per: deposit, person, account, household, email, and phone number.",
        "IBETSPORTS reserves the right to alter or amend the Terms and Conditions of this promotion at any time without notice.",
      ],
    },
    {
      id: "IBS150CS",
      title: "150% Casino Reload Bonus",
      image: "/images/150-casino-reload.png",
      code: "IBS150CS",
      terms: [
        "First Time Deposit Crypto Casino 250% min 100$ max 2k 40x rollover max cash 10k 7 day expiration",
        "First Time Deposit Other Deposit Type other 200% min 50$ max 1k 30x rollover max cash out 5k 7 days expiration",
        "Reload crypto 150% 100 min 1k max 40x rollover max cash 10k 7 day expiration",
        "Reload Other Deposit Type 100% 100 min 1k max 40x rollover max cash 5k 7 day expiration",
        "Promotions and bonuses are restricted to one per: deposit, person, account, household, email, and phone number.",
        "All bonuses come with a rollover requirement, please make sure you understand the requirements prior to agreeing. You may decline the bonus but every deposit has a one time rollover requirement.",
      ],
    },
    {
      id: "IBS200CPR",
      title: "200% Refer a Friend Bonus",
      image: "/images/200-refer-bonus.png",
      code: "IBS200CPR",
      terms: [
        "Friends have more fun together.",
        "Share your invite link with your friends via email, social media, or SMS and ask them to sign up, we'll give you a 200% bonus up to $200 when they make their first deposit (min: $50).",
        "Unlimited Referrals, Unlimited Bonuses!",
        "Repeat & Repeat",
        "Enjoy an unlimited amount of referral bonuses and get paid with each new friend that joins!",
      ],
    },
  ]

  const openModal = (modalId: string) => {
    setActiveModal(modalId)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <div className="bg-brand-charcoal-black min-h-screen text-brand-soft-white">
      {/* Main Racebook Interface */}
      <section className="mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="bg-brand-charcoal-black-secondary rounded-2xl overflow-hidden border border-brand-smoke-gray/30">
            <div className="aspect-[16/10] md:aspect-[16/8] relative">
              <iframe
                src="https://jefecolchon.com/BOSSWagering/Racebook/InternetBetTaker/?siteid=BLR-T02&lng=en-EN"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Horse Racing Betting Interface"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-soft-white mb-4">Exclusive Racebook Bonuses</h2>
            <p className="text-brand-smoke-gray text-lg">
              Boost your horse racing bets with our amazing promotional offers
            </p>
          </div>

          {/* First Row - Sports & Crypto Bonuses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {promotions.slice(0, 2).map((promo, index) => (
              <Card
                key={promo.id}
                className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 rounded-2xl overflow-hidden hover:border-brand-primary-green/50 transition-all duration-300 relative group"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src={promo.image || `/placeholder.svg?height=350&width=640&query=${promo.title}+racebook+bonus`}
                    alt={promo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Terms Button */}
                  <Button
                    onClick={() => openModal(promo.id)}
                    className="absolute bottom-4 left-4 bg-brand-primary-green/80 hover:bg-brand-primary-green text-black font-bold px-4 py-2 text-sm rounded-lg backdrop-blur-sm"
                  >
                    Terms
                  </Button>

                  {/* Promo Code */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <span className="text-brand-primary-green font-bold text-sm">Code: {promo.code}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Second Row - Reload & Refer Bonuses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promotions.slice(2, 4).map((promo, index) => (
              <Card
                key={promo.id}
                className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 rounded-2xl overflow-hidden hover:border-brand-primary-green/50 transition-all duration-300 relative group"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src={promo.image || `/placeholder.svg?height=350&width=640&query=${promo.title}+racebook+bonus`}
                    alt={promo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Terms Button */}
                  <Button
                    onClick={() => openModal(promo.id)}
                    className="absolute bottom-4 left-4 bg-brand-primary-green/80 hover:bg-brand-primary-green text-black font-bold px-4 py-2 text-sm rounded-lg backdrop-blur-sm"
                  >
                    Terms
                  </Button>

                  {/* Promo Code */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <span className="text-brand-primary-green font-bold text-sm">Code: {promo.code}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Horse Racing Features */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-soft-white">
                Discover Top Racetracks and Unbeatable Horse Betting Odds
              </h1>
              <p className="text-lg text-brand-smoke-gray leading-relaxed">
                Welcome to the ultimate online racebook, where horse racing fans can access the most exciting races and
                top racetracks from around the world. Whether you're tuning in for the renowned Triple Crown events—the
                Kentucky Derby, Preakness Stakes, and Belmont Stakes—or following international races, our platform
                provides you with the latest horse betting odds to keep you ahead of the game.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-soft-white">
                Get Rewarded with Racebook Rebates
              </h2>
              <p className="text-lg text-brand-smoke-gray leading-relaxed">
                At our online horse betting platform, you not only get a front-row seat to every thrilling race but also
                enjoy our exclusive Rebates. Our rebates give you cash back on every bet you place, so you can keep your
                winning streak going even when the odds don't fall in your favor. It's our way of ensuring every bet is
                packed with value!
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-soft-white">
                Exclusive Features for a Complete Horse Betting Experience
              </h2>
              <p className="text-lg text-brand-smoke-gray leading-relaxed">
                With live racing action, expert odds, and detailed stats on top racetracks, we provide a seamless horse
                betting experience for beginners and seasoned pros alike. Enjoy watching your favorite horses cross the
                finish line while benefiting from our easy-to-navigate betting tools, extensive race coverage, and
                reliable betting odds.
              </p>
              <p className="text-lg text-brand-smoke-gray leading-relaxed mt-4">
                <strong className="text-brand-primary-green">Ready to place your bets?</strong> Join now to claim your
                racebook rebate and experience the thrill of winning big! Sign up today and dive into the world of horse
                racing action!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Racing Categories */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-soft-white mb-4">Popular Racing Events</h2>
            <p className="text-brand-smoke-gray text-lg">Bet on the most exciting horse racing events worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Kentucky Derby",
                description: "The most exciting two minutes in sports",
                icon: Trophy,
                color: "from-yellow-600 to-yellow-700",
              },
              {
                name: "Preakness Stakes",
                description: "The second jewel of the Triple Crown",
                icon: Award,
                color: "from-purple-600 to-purple-700",
              },
              {
                name: "Belmont Stakes",
                description: "The test of champions",
                icon: Star,
                color: "from-blue-600 to-blue-700",
              },
              {
                name: "Breeders' Cup",
                description: "World championships of horse racing",
                icon: Target,
                color: "from-green-600 to-green-700",
              },
              {
                name: "Daily Races",
                description: "Live racing action every day",
                icon: Clock,
                color: "from-red-600 to-red-700",
              },
              {
                name: "International",
                description: "Top races from around the globe",
                icon: Zap,
                color: "from-orange-600 to-orange-700",
              },
            ].map((race, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${race.color} p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                <race.icon className="w-8 h-8 mx-auto mb-3 text-white" />
                <h3 className="text-white font-bold text-lg mb-2">{race.name}</h3>
                <p className="text-white/80 text-sm mb-4">{race.description}</p>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-0">Bet Now</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Racebook Features */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-soft-white mb-4">Why Choose Our Racebook</h2>
            <p className="text-brand-smoke-gray text-lg">Experience the best in online horse racing betting</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-brand-primary-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-soft-white mb-3">Live Racing</h3>
              <p className="text-brand-smoke-gray">
                Watch live streams of races from top tracks around the world while you bet
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-vibrant-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-brand-vibrant-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-soft-white mb-3">Expert Odds</h3>
              <p className="text-brand-smoke-gray">
                Get the most competitive odds and detailed statistics for informed betting decisions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-brand-primary-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-soft-white mb-3">Instant Payouts</h3>
              <p className="text-brand-smoke-gray">
                Quick and secure payouts with multiple withdrawal options available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-brand-charcoal-black-secondary rounded-2xl border border-brand-smoke-gray/30 w-full max-w-2xl max-h-[80vh] overflow-hidden">
            <div className="bg-brand-charcoal-black-tertiary p-4 border-b border-brand-smoke-gray/30 flex items-center justify-between">
              <h3 className="text-xl font-bold text-brand-soft-white uppercase">Terms and Conditions</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="text-brand-smoke-gray hover:text-brand-soft-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {promotions.find((p) => p.id === activeModal) && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-brand-primary-green">
                    {promotions.find((p) => p.id === activeModal)?.title.toUpperCase()}
                  </h4>
                  <ol className="space-y-2 text-brand-smoke-gray">
                    {promotions
                      .find((p) => p.id === activeModal)
                      ?.terms.map((term, index) => (
                        <li key={index} className="text-sm leading-relaxed">
                          {index + 1}. {term}
                        </li>
                      ))}
                  </ol>

                  <div className="mt-6 p-4 bg-brand-charcoal-black-tertiary/50 rounded-lg">
                    <h5 className="font-bold text-brand-vibrant-green mb-2">Important Disclaimer:</h5>
                    <p className="text-sm text-brand-smoke-gray">
                      The user is warned that they should make their own inquiry into the legality of participating in
                      any of these games and/or activities. IBETSPORTS assumes no responsibility for the actions by and
                      makes no representation or endorsement of any of these games and/or activities if they are illegal
                      in the jurisdiction of the reader or client of this site.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
