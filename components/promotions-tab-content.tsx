"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Star } from "lucide-react"

export default function PromotionsTabContent() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  /* --------------------------------------------------------------------- */
  /*                               DATA                                    */
  /* --------------------------------------------------------------------- */

  const promotions = [
    {
      id: "sports-welcome",
      title: "125% Sports Welcome Bonus",
      image: "/images/sports-promo.png",
      description: "Get a 125% bonus on your first sports deposit up to $1,000",
      code: "SPORTS125",
      category: "Sports",
      isNew: true,
      terms: [
        "125% bonus on qualifying initial deposit only",
        "Minimum deposit of $100 USD required",
        "Maximum bonus per deposit is $1,000 USD",
        "15X rollover requirement",
        "Max cashout of $10,000 USD",
        "Bonus expires in 14 days",
        "Free plays can only be used on straight bets up to +250",
      ],
    },
    {
      id: "crypto-casino",
      title: "200% Crypto Casino Bonus",
      image: "/images/crypto-promo.png",
      description: "Double your crypto deposit with our exclusive casino bonus",
      code: "CRYPTO200",
      category: "Casino",
      isHot: true,
      terms: [
        "200% bonus on qualifying INITIAL deposit only",
        "Minimum deposit of $50 required",
        "Maximum bonus amount is $2,000 USD",
        "40X rollover requirement",
        "Crypto deposits only",
        "Casino games only",
        "Max cashout of $10,000",
        "Expires in 7 days",
      ],
    },
    {
      id: "casino-reload",
      title: "150% Casino Reload Bonus",
      image: "/images/casino-reload-promo.png",
      description: "Reload your account and get 150% bonus on casino games",
      code: "RELOAD150",
      category: "Casino",
      isNew: false,
      terms: [
        "150% reload bonus for existing players",
        "Minimum deposit of $100 required",
        "Maximum bonus of $1,000",
        "40X rollover requirement",
        "Casino games only",
        "Max cashout of $10,000",
        "Expires in 7 days",
      ],
    },
    {
      id: "refer-friend",
      title: "200% Refer a Friend Bonus",
      image: "/images/refer-friend-promo.png",
      description: "Earn 200% bonus up to $200 for each friend you refer",
      code: "REFER200",
      category: "Referral",
      isHot: false,
      terms: [
        "200% bonus up to $200 per referral",
        "Friend must make minimum deposit of $50",
        "Unlimited referrals allowed",
        "Bonus paid when friend makes first deposit",
        "Standard rollover requirements apply",
      ],
    },
  ]

  const dailyPromotions = [
    {
      day: "Monday",
      promo: "Reload Monday",
      bonus: "50% up to $500",
      game: "All Games",
    },
    {
      day: "Tuesday",
      promo: "Table Tuesday",
      bonus: "25% up to $250",
      game: "Table Games",
    },
    {
      day: "Wednesday",
      promo: "Wild Wednesday",
      bonus: "75% up to $750",
      game: "Slots",
    },
    {
      day: "Thursday",
      promo: "Throwback Thursday",
      bonus: "100% up to $1000",
      game: "Classic Games",
    },
    {
      day: "Friday",
      promo: "Free Bet Friday",
      bonus: "$25 Free Bet",
      game: "Sports",
    },
    {
      day: "Saturday",
      promo: "Super Saturday",
      bonus: "200% up to $2000",
      game: "All Games",
    },
    {
      day: "Sunday",
      promo: "Sunday Funday",
      bonus: "150% up to $1500",
      game: "Live Casino",
    },
  ]

  const vipLevels = [
    {
      level: "Bronze",
      icon: "🥉",
      requirements: "$1,000+ wagered",
      benefits: ["5% cashback", "Weekly bonuses", "Priority support"],
      color: "from-amber-600/20 to-amber-800/10 border-amber-600/30",
    },
    {
      level: "Silver",
      icon: "🥈",
      requirements: "$10,000+ wagered",
      benefits: ["7% cashback", "Exclusive tournaments", "Personal account manager"],
      color: "from-gray-400/20 to-gray-600/10 border-gray-400/30",
    },
    {
      level: "Gold",
      icon: "🥇",
      requirements: "$50,000+ wagered",
      benefits: ["10% cashback", "VIP events", "Higher betting limits"],
      color: "from-yellow-400/20 to-yellow-600/10 border-yellow-400/30",
    },
    {
      level: "Platinum",
      icon: "💎",
      requirements: "$100,000+ wagered",
      benefits: ["15% cashback", "Luxury gifts", "Dedicated VIP host"],
      color: "from-purple-400/20 to-purple-600/10 border-purple-400/30",
    },
  ]

  /* --------------------------------------------------------------------- */
  /*                               RENDER                                  */
  /* --------------------------------------------------------------------- */

  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      {/* ─────────────────────── HERO ─────────────────────── */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero2.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end md:items-center justify-center pb-4 md:pb-0">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-black">PROMOTIONS</h1>
            <p className="text-xl md:text-2xl text-brand-smoke-gray">Exclusive bonuses and rewards await</p>
            <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-8 py-3 text-lg">
              Claim Bonus
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 space-y-16">
        {/* ────────────────── FEATURED PROMOS ───────────────── */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Promotions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promotions.map((promo) => (
              <Card
                key={promo.id}
                className="relative overflow-hidden bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 hover:border-brand-primary-green/60 transition-all"
              >
                {/* IMAGE */}
                <Image
                  src={promo.image || "/placeholder.svg"}
                  alt={promo.title}
                  width={640}
                  height={360}
                  className="w-full h-56 object-cover"
                  priority
                />

                {/* CATEGORY + NEW/HOT BADGES (top-left) */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge
                    className={
                      promo.category === "Sports"
                        ? "bg-blue-500 text-white"
                        : promo.category === "Casino"
                          ? "bg-purple-500 text-white"
                          : "bg-green-500 text-white"
                    }
                  >
                    {promo.category}
                  </Badge>
                  {promo.isNew && <Badge className="bg-brand-vibrant-green text-brand-charcoal-black">NEW</Badge>}
                  {promo.isHot && <Badge className="bg-red-500 text-white">HOT</Badge>}
                </div>

                {/* COMPACT OVERLAY (bottom) */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 space-y-4">
                  <h3 className="text-xl font-bold">{promo.title}</h3>
                  <p className="text-brand-smoke-gray text-sm">{promo.description}</p>

                  <div className="flex items-center justify-between gap-4">
                    <div className="text-xs">
                      <span className="text-brand-smoke-gray">Code:&nbsp;</span>
                      <span className="text-brand-primary-green font-mono font-semibold">{promo.code}</span>
                    </div>

                    <div className="flex gap-2">
                      {/* TERMS MODAL */}
                      <Dialog
                        open={openModal === promo.id}
                        onOpenChange={(open) => setOpenModal(open ? promo.id : null)}
                      >
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-brand-smoke-gray text-brand-smoke-gray hover:border-brand-primary-green hover:text-brand-primary-green bg-transparent"
                          >
                            Terms
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 text-brand-soft-white max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-brand-primary-green">
                              {promo.title} – Terms &amp; Conditions
                            </DialogTitle>
                          </DialogHeader>
                          <ul className="space-y-2 text-sm mt-4 max-h-[60vh] overflow-y-auto pr-2">
                            {promo.terms.map((term, i) => (
                              <li key={i} className="flex items-start text-brand-smoke-gray">
                                <span className="text-brand-primary-green mr-2">•</span>
                                {term}
                              </li>
                            ))}
                          </ul>
                        </DialogContent>
                      </Dialog>

                      <Button
                        size="sm"
                        className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black"
                      >
                        Claim
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ────────────────── DAILY PROMOS ───────────────── */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Daily Promotions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {dailyPromotions.map((d) => (
              <Card
                key={d.day}
                className="p-4 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 hover:border-brand-primary-green/60 transition-colors text-center"
              >
                <h3 className="font-bold text-brand-primary-green mb-2">{d.day}</h3>
                <h4 className="font-semibold text-sm mb-1">{d.promo}</h4>
                <div className="text-xs text-brand-smoke-gray mb-1">{d.bonus}</div>
                <Badge className="bg-brand-primary-green/20 text-brand-primary-green text-xs">{d.game}</Badge>
              </Card>
            ))}
          </div>
        </section>

        {/* ────────────────── VIP PROGRAM ───────────────── */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">VIP Loyalty Program</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vipLevels.map((level) => (
              <Card
                key={level.level}
                className={`p-6 bg-gradient-to-br ${level.color} text-center hover:scale-105 transition-transform`}
              >
                <div className="text-5xl mb-4">{level.icon}</div>
                <h3 className="text-xl font-bold mb-1">{level.level}</h3>
                <p className="text-sm text-brand-smoke-gray mb-4">{level.requirements}</p>
                <div className="space-y-2">
                  {level.benefits.map((b) => (
                    <div key={b} className="text-sm flex items-center justify-center">
                      <Star className="w-3 h-3 mr-1 text-brand-primary-green" />
                      {b}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ────────────────── PROMO CATEGORIES (simple) ───────────────── */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Promotion Categories</h2>
          <div className="flex flex-wrap gap-4">
            {[...new Set(promotions.map((p) => p.category))].map((cat) => (
              <Badge
                key={cat}
                className="bg-brand-primary-green/20 text-brand-primary-green px-4 py-2 rounded-full text-sm"
              >
                {cat}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
