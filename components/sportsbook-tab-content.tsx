"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { X } from 'lucide-react'

const SportsbookContent = () => {
  const [openModal, setOpenModal] = useState<string | null>(null)

  const promoCards = [
    {
      id: "IBS125CS",
      image: "/images/125-sports-bonus.png",
      title: "125% SP WELCOME BONUS",
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
        "Promotions and bonuses are restricted to one per: deposit, person, account, household, email, and phone number."
      ]
    },
    {
      id: "IBS200CP",
      image: "/images/200-crypto-bonus.png",
      title: "200% CRYPTO CASINO WELCOME BONUS",
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
        "IBETSPORTS reserves the right to alter or amend the Terms and Conditions of this promotion at any time without notice."
      ]
    },
    {
      id: "IBS150CS",
      image: "/images/150-casino-reload.png",
      title: "150% CASINO RELOAD BONUS",
      terms: [
        "First Time Deposit Crypto Casino 250% min 100$ max 2k 40x rollover max cash 10k 7 day expiration",
        "First Time Deposit Other Deposit Type other 200% min 50$ max 1k 30x rollover max cash out 5k 7 days expiration",
        "Reload crypto 150% 100 min 1k max 40x rollover max cash 10k 7 day expiration",
        "Reload Other Deposit Type 100% 100 min 1k max 40x rollover max cash 5k 7 day expiration",
        "Promotions and bonuses are restricted to one per: deposit, person, account, household, email, and phone number.",
        "All bonuses come with a rollover requirement , please make sure you understand the requirements prior to agreeing. You may decline the bonus but every deposit has a one time rollover requirement."
      ]
    },
    {
      id: "IBS200CPR",
      image: "/images/200-refer-bonus.png",
      title: "200% REFER A FRIEND BONUS",
      terms: [
        "Friends have more fun together.",
        "Share your invite link with your friends via email, social media, or SMS and ask them to sign up, we'll give you a 200% bonus up to $200 when they make their first deposit (min: $50).",
        "Unlimited Referrals, Unlimited Bonuses!",
        "Repeat & Repeat",
        "Enjoy an unlimited amount of referral bonuses and get paid with each new friend that joins!"
      ]
    }
  ]

  return (
    <div className="w-full bg-brand-charcoal-black min-h-screen font-poppins">
      {/* Header Section */}
      <div className="bg-brand-charcoal-black-secondary border-b border-brand-primary-green/20 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-black text-brand-soft-white mb-2">
              SPORTS BETTING
            </h1>
            <p className="text-brand-smoke-gray text-lg">
              Live betting interface with exclusive promotions
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Betting Interface */}
        <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 mb-8">
          <div className="p-6 border-b border-brand-smoke-gray/20">
            <h3 className="text-xl font-bold text-brand-soft-white text-center">
              LIVE BETTING INTERFACE
            </h3>
          </div>
          
          <div className="p-6">
            <div className="w-full bg-brand-charcoal-black rounded-lg overflow-hidden border border-brand-smoke-gray/20">
              <iframe 
                src="https://betslip.ibetsports.com/mainbk/betslip" 
                width="100%" 
                height="1100px" 
                frameBorder="0" 
                allowFullScreen
                className="w-full"
                title="Sports Betting Interface"
              />
            </div>
          </div>
        </Card>

        {/* Promotional Cards Section */}
        <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 mb-8">
          <div className="p-6 border-b border-brand-smoke-gray/20">
            <h3 className="text-xl font-bold text-brand-soft-white text-center">
              EXCLUSIVE BONUSES & PROMOTIONS
            </h3>
          </div>
          
          <div className="p-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {promoCards.slice(0, 2).map((promo) => (
                <Card key={promo.id} className="bg-brand-charcoal-black border border-brand-primary-green/20 overflow-hidden hover:border-brand-primary-green/40 transition-colors group">
                  <div className="relative">
                    <img
                      src={promo.image || "/placeholder.svg"}
                      alt={promo.title}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <Dialog open={openModal === promo.id} onOpenChange={(open) => setOpenModal(open ? promo.id : null)}>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            className="bg-brand-primary-green/90 hover:bg-brand-primary-green text-black font-bold px-4 py-2 rounded-md opacity-90 group-hover:opacity-100 transition-opacity"
                          >
                            TERMS
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 text-brand-soft-white max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-brand-primary-green text-xl font-bold uppercase">
                              TERMS AND CONDITIONS
                            </DialogTitle>
                          </DialogHeader>
                          <div className="mt-6">
                            <h4 className="text-lg font-bold text-brand-soft-white mb-4">{promo.title}</h4>
                            <ol className="space-y-3 text-brand-smoke-gray">
                              {promo.terms.map((term, index) => (
                                <li key={index} className="text-sm leading-relaxed">
                                  {index + 1}. {term}
                                </li>
                              ))}
                            </ol>
                            <div className="mt-6 p-4 bg-brand-charcoal-black rounded-lg border border-brand-smoke-gray/20">
                              <p className="text-sm font-bold text-brand-soft-white mb-2">Important Disclaimer:</p>
                              <p className="text-xs text-brand-smoke-gray">
                                The user is warned that they should make their own inquiry into the legality of participating in any of these games and/or activities. 
                                IBETSPORTS assumes no responsibility for the actions by and makes no representation or endorsement of any of these games and/or activities if they are illegal in the jurisdiction of the reader or client of this site.
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {promoCards.slice(2, 4).map((promo) => (
                <Card key={promo.id} className="bg-brand-charcoal-black border border-brand-primary-green/20 overflow-hidden hover:border-brand-primary-green/40 transition-colors group">
                  <div className="relative">
                    <img
                      src={promo.image || "/placeholder.svg"}
                      alt={promo.title}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <Dialog open={openModal === promo.id} onOpenChange={(open) => setOpenModal(open ? promo.id : null)}>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            className="bg-brand-primary-green/90 hover:bg-brand-primary-green text-black font-bold px-4 py-2 rounded-md opacity-90 group-hover:opacity-100 transition-opacity"
                          >
                            TERMS
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 text-brand-soft-white max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-brand-primary-green text-xl font-bold uppercase">
                              TERMS AND CONDITIONS
                            </DialogTitle>
                          </DialogHeader>
                          <div className="mt-6">
                            <h4 className="text-lg font-bold text-brand-soft-white mb-4">{promo.title}</h4>
                            <ol className="space-y-3 text-brand-smoke-gray">
                              {promo.terms.map((term, index) => (
                                <li key={index} className="text-sm leading-relaxed">
                                  {index + 1}. {term}
                                </li>
                              ))}
                            </ol>
                            <div className="mt-6 p-4 bg-brand-charcoal-black rounded-lg border border-brand-smoke-gray/20">
                              <p className="text-sm font-bold text-brand-soft-white mb-2">Important Disclaimer:</p>
                              <p className="text-xs text-brand-smoke-gray">
                                The user is warned that they should make their own inquiry into the legality of participating in any of these games and/or activities. 
                                IBETSPORTS assumes no responsibility for the actions by and makes no representation or endorsement of any of these games and/or activities if they are illegal in the jurisdiction of the reader or client of this site.
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>

        {/* Content Section */}
        <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-8 md:p-12">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section 1 */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-black text-brand-soft-white mb-6">
                Your Destination for Comprehensive Sports Betting Odds
              </h2>
              <p className="text-lg md:text-xl text-brand-smoke-gray leading-relaxed">
                Our online sportsbook offers everything you need to elevate your sports betting experience. From the latest NFL odds to MLB, NHL, NBA, and soccer odds, we bring you competitive betting lines across all major leagues and tournaments worldwide. Get ahead with accurate betting odds, updated in real-time to reflect every game-changing moment and player update, so you're always ready to place winning bets.
              </p>
            </div>

            {/* Section 2 */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-black text-brand-soft-white mb-6">
                Explore Pre-Match and Live Betting for Maximum Thrills
              </h2>
              <p className="text-lg text-brand-smoke-gray leading-relaxed">
                Whether you prefer pre-match odds to get in early on your favorite teams or live betting for instant action, our sportsbook has you covered. With a wide range of options from straight bets to parlays, spreads, and props, you can tailor your bets to match your strategy. Our live betting feature lets you follow every intense play as it happens, putting you right at the heart of each game.
              </p>
            </div>

            {/* Section 3 */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-black text-brand-soft-white mb-6">
                Bet on Top Leagues with Unmatched Variety
              </h2>
              <p className="text-lg text-brand-smoke-gray leading-relaxed mb-8">
                From NFL and NBA to MLB, NHL, UFC, and international soccer leagues, our online sportsbook brings you the most popular events and betting markets. We also provide insights and data to support your decisions, ensuring you can bet with confidence and precision.
              </p>
              
              <p className="text-lg text-brand-smoke-gray leading-relaxed mb-8">
                Don't miss a beat—join today and start betting on your favorite sports! Sign up now, make your deposit, and take advantage of our exclusive betting offers to kick off your winning streak!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-black font-black px-12 py-4 text-xl rounded-lg">
                  SIGN UP NOW
                </Button>
                <Button 
                  variant="outline" 
                  className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-black px-12 py-4 text-xl font-bold rounded-lg"
                >
                  START BETTING
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default SportsbookContent
