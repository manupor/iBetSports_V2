"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PromotionsTabContentProps {
  setIsRegistrationOpen: (open: boolean) => void
}

export default function PromotionsTabContent({ setIsRegistrationOpen }: PromotionsTabContentProps) {
  const promotions = [
    {
      title: "Welcome Bonus",
      description: "125% match on your first deposit up to $1,000",
      image: "/images/sports-promo.png",
      bonus: "125%",
      type: "New Players",
    },
    {
      title: "Crypto Bonus",
      description: "200% bonus when you deposit with Bitcoin or Ethereum",
      image: "/images/crypto-promo.png",
      bonus: "200%",
      type: "Cryptocurrency",
    },
    {
      title: "Casino Reload",
      description: "150% reload bonus every week on casino games",
      image: "/images/casino-reload-promo.png",
      bonus: "150%",
      type: "Weekly",
    },
    {
      title: "Refer a Friend",
      description: "Get $50 for every friend you refer who makes a deposit",
      image: "/images/refer-friend-promo.png",
      bonus: "$50",
      type: "Referral",
    },
  ]

  return (
    <div className="min-h-screen bg-brand-charcoal-black font-poppins w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/football-hero-promotions.jpg"
            alt="Promotions Hero"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                EXCLUSIVE
              </span>{" "}
              PROMOTIONS
            </h1>
            <p className="text-brand-smoke-gray text-lg md:text-xl max-w-2xl">
              Maximize your winnings with our incredible bonus offers and promotions
            </p>
            <Button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold px-8 py-3 text-lg"
            >
              CLAIM BONUSES
            </Button>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-12 bg-black w-full">
        <div className="w-full px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-brand-soft-white mb-4">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                CURRENT
              </span>{" "}
              OFFERS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promotions.map((promo, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 overflow-hidden hover:border-brand-primary-green/50 transition-colors duration-200"
              >
                <div className="relative">
                  <div className="aspect-video relative">
                    <Image
                      src={promo.image || "/placeholder.svg"}
                      alt={promo.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-brand-primary-green text-brand-charcoal-black px-3 py-1 rounded-full font-bold text-sm">
                      {promo.bonus}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {promo.type}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-brand-soft-white font-bold text-xl mb-2">{promo.title}</h3>
                  <p className="text-brand-smoke-gray mb-4">{promo.description}</p>
                  <Button
                    onClick={() => setIsRegistrationOpen(true)}
                    className="w-full bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold"
                  >
                    CLAIM NOW
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Terms */}
          <div className="mt-12 text-center">
            <Card className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 p-6">
              <h3 className="text-brand-soft-white font-bold text-lg mb-4">Important Terms & Conditions</h3>
              <div className="text-brand-smoke-gray text-sm space-y-2">
                <p>• All bonuses subject to 35x wagering requirements</p>
                <p>• New players only for welcome bonus</p>
                <p>• Minimum deposit requirements apply</p>
                <p>• Full terms and conditions available on request</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
