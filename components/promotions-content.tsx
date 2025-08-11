"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function PromotionsContent() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  const promotions = [
    {
      id: "sports125",
      title: "125%",
      subtitle: "SPORTS",
      description: "FREE PLAY",
      subtext: "WELCOME BONUS",
      minDeposit: "DEP MIN: $100",
      image: "/images/hero-football-players.jpg",
      terms: {
        title: "125% Sports Free Play Welcome Bonus",
        content: [
          "Only applicable on initial deposits from $100.",
          "The maximum amount awarded for this bonus is $1,250.",
          "This bonus carries a 15x rollover.",
          "Sports Free plays have a 30-day expiration period unless otherwise specified. After 30 days, any unused bonus funds will be automatically removed from your account.",
          "Ibetsports reserves the right to deny and/or remove this promotion at any time without prior notice.",
        ],
      },
    },
    {
      id: "crypto200",
      title: "200%",
      subtitle: "CRYPTO",
      description: "CASINO WELCOME BONUS",
      subtext: "",
      minDeposit: "MIN DEP $100",
      image: "/images/crypto-bull-neon.jpg",
      terms: {
        title: "200% CRYPTO CASINO WELCOME BONUS",
        content: [
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
    },
    {
      id: "casino150",
      title: "150%",
      subtitle: "CASINO RELOAD",
      description: "BONUS",
      subtext: "",
      minDeposit: "MIN DEP $100",
      image: "/images/casino-background.png",
      terms: {
        title: "150% Casino Reload Bonus",
        content: [
          "First Time Deposit Crypto Casino 250% min 100$ max 2k 40x rollover max cash 10k 7 day expiration",
          "First Time Deposit Other Deposit Type other 200% min 50$ max 1k 30x rollover max cash out 5k 7 days expiration",
          "Reload crypto 150% 100 min 1k max 40x rollover max cash 10k 7 day expiration",
          "Reload Other Deposit Type 100% 100 min 1k max 40x rollover max cash 5k 7 day expiration",
          "Promotions and bonuses are restricted to one per: deposit, person, account, household, email, and phone number.",
          "All bonuses come with a rollover requirement, please make sure you understand the requirements prior to agreeing. You may decline the bonus but every deposit has a one time rollover requirement.",
        ],
      },
    },
    {
      id: "referral200",
      title: "200%",
      subtitle: "BUDDY REFERRAL",
      description: "BONUS",
      subtext: "FOR EXISTING CUSTOMERS",
      minDeposit: "",
      image: "/images/refer-friend-promo.png",
      terms: {
        title: "200% Buddy Referral Bonus",
        content: [
          "Friends have more fun together.",
          "Share your invite link with your friends via email, social media, or SMS and ask them to sign up, we'll give you a 200% bonus up to $200 when they make their first deposit (min: $50).",
          "Unlimited Referrals, Unlimited Bonuses!",
          "Repeat & Repeat",
          "Enjoy an unlimited amount of referral bonuses and get paid with each new friend that joins!",
        ],
      },
    },
    {
      id: "sports100",
      title: "100%",
      subtitle: "SPORTS",
      description: "FREE PLAY WELCOME BONUS",
      subtext: "",
      minDeposit: "DEP MIN: $100",
      image: "/images/hero-basketball-players.png",
      terms: {
        title: "100% Sports Free Play Welcome Bonus",
        content: [
          "Only applicable on initial deposits from $100.",
          "The maximum amount awarded for this bonus is $1,000.",
          "This bonus carries a 12x rollover.",
          "Sports Free plays have a 30-day expiration period unless otherwise specified. After 30 days, any unused bonus funds will be automatically removed from your account.",
          "Ibetsports reserves the right to deny and/or remove this promotion at any time without prior notice.",
        ],
      },
    },
    {
      id: "sports50",
      title: "50%",
      subtitle: "SPORTS",
      description: "FREE PLAY",
      subtext: "RELOAD BONUS",
      minDeposit: "",
      image: "/images/hero-football-player.png",
      terms: {
        title: "50% Sports Free Play Reload Bonus",
        content: [
          "Only applicable on initial deposits from $50.",
          "The maximum amount awarded for this bonus is $1,000.",
          "This bonus carries a 8x rollover.",
          "Sports Free plays have a 30-day expiration period unless otherwise specified. After 30 days, any unused bonus funds will be automatically removed from your account.",
          "Ibetsports reserves the right to deny and/or remove this promotion at any time without prior notice.",
        ],
      },
    },
    {
      id: "sports20",
      title: "20%",
      subtitle: "SPORTS",
      description: "CASH RELOAD BONUS",
      subtext: "",
      minDeposit: "",
      image: "/images/hero-basketball-players.png",
      terms: {
        title: "20% Sports Cash Reload Bonus",
        content: [
          "Only applicable on initial deposits from $50.",
          "The maximum amount awarded for this bonus is $1,000.",
          "This bonus carries a 10x rollover.",
          "Ibetsports reserves the right to deny and/or remove this promotion at any time without prior notice.",
        ],
      },
    },
  ]

  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-charcoal-black to-brand-charcoal-black-secondary py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-brand-soft-white mb-4">
            UNLOCK EXCLUSIVE BONUSES WITH OUR ONLINE CASINO & SPORTSBOOK
          </h1>
        </div>
      </div>

      {/* Promotions Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {promotions.map((promo, index) => (
            <Card
              key={promo.id}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary-green/20 to-brand-vibrant-green/10 border border-brand-primary-green/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={promo.image || "/placeholder.svg"}
                  alt={`${promo.title} ${promo.subtitle} promotion`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-between p-6 md:p-8">
                  <div className="flex-1">
                    {/* Bloque escalado para aumentar porcentaje + shape */}
                    <div className="mb-4 scale-110 md:scale-125 origin-left">
                      <div className="text-7xl md:text-8xl font-black text-yellow-400 leading-tight">{promo.title}</div>
                      <div className="text-2xl md:text-3xl font-bold text-brand-soft-white mt-1">{promo.subtitle}</div>
                      <div className="text-lg md:text-xl font-semibold text-brand-soft-white">{promo.description}</div>
                      {promo.subtext && (
                        <div className="text-sm md:text-base text-brand-smoke-gray mt-1">{promo.subtext}</div>
                      )}
                      {promo.minDeposit && (
                        <div className="text-sm md:text-base text-brand-vibrant-green font-semibold mt-2">
                          {promo.minDeposit}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Terms Button */}
                <div className="absolute bottom-4 left-6">
                  <Dialog open={openModal === promo.id} onOpenChange={(open) => setOpenModal(open ? promo.id : null)}>
                    <DialogTrigger asChild>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-lg text-sm">
                        TERMS
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-brand-charcoal-black border border-brand-primary-green/30 text-brand-soft-white max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-brand-primary-green">
                          TERMS AND CONDITIONS
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-brand-soft-white mb-4">{promo.terms.title}</h3>
                        <ul className="space-y-2 text-brand-smoke-gray">
                          {promo.terms.content.map((term, idx) => (
                            <li key={idx} className="text-sm leading-relaxed">
                              • {term}
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-brand-smoke-gray mt-4">
                          For more details please visit our Terms & Conditions section.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Information Sections */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white mb-4">
              Start Your Journey with a Generous Welcome Bonus
            </h2>
            <p className="text-brand-smoke-gray text-base md:text-lg leading-relaxed">
              Get ready to make the most of every bet and spin with our exciting range of bonuses, designed to boost
              your play right from the start. Whether you're a sports enthusiast or a casino lover, our welcome bonuses
              let you double your deposit and dive into the action. New members can kick off their experience with a
              substantial sportsbook bonus, perfect for exploring our extensive selection of sporting events and live
              betting options.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white mb-4">
              Dedicated Casino Bonus – More Spins, More Wins
            </h2>
            <p className="text-brand-smoke-gray text-base md:text-lg leading-relaxed">
              In our online casino, we've tailored a dedicated casino bonus for players who want to maximize their slot
              and table game play. This bonus offers you extra funds to enjoy thrilling online slots, blackjack,
              roulette, and more. Experience the excitement of real-money gaming with more chances to win big!
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white mb-4">
              Crypto Bonus and Sports Reload Offers
            </h2>
            <p className="text-brand-smoke-gray text-base md:text-lg leading-relaxed">
              Love betting with crypto? We've got you covered! Our exclusive crypto bonus is available for players who
              deposit with Bitcoin or other cryptocurrencies, giving you even more value for every crypto deposit. Plus,
              regular sports bettors can take advantage of our sports reload bonus, which rewards you with additional
              funds on repeat deposits to keep the game going. Ready to claim your bonuses? Sign up today, make your
              first deposit, and start betting big with BetOdds.ag! Don't miss out on these exclusive offers—join now
              and elevate your gaming experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
