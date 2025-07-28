"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TrendingUp, Users, Clock, Trophy, Target, Zap, Star, Play, DollarSign } from "lucide-react"

export default function SportsbookTabContent() {
  const [selectedSport, setSelectedSport] = useState("featured")
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  const promotions = [
    {
      id: "IBS125CS",
      title: "125% SPORTS WELCOME BONUS",
      image: "/images/125-sports-bonus.png",
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
      title: "200% CRYPTO CASINO WELCOME BONUS",
      image: "/images/200-crypto-bonus.png",
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
      title: "150% CASINO RELOAD BONUS",
      image: "/images/150-casino-reload.png",
      terms: [
        "First Time Deposit Crypto Casino 250% min 100$ max 2k 40x rollover max cash 10k 7 day expiration",
        "First Time Deposit Other Deposit Type other 200% min 50$ max 1k 30x rollover max cash out 5k 7 days expiration",
        "Reload crypto 150% 100 min 1k max 40x rollover max cash 10k 7 day expiration",
        "Reload Other Deposit Type 100% 100 min 1k max 40x rollover max cash 5k 7 day expiration",
        "Promotions and bonuses are restricted to one per: deposit, person, account, household, email, and phone number.",
        "All bonuses come with a rollover requirement , please make sure you understand the requirements prior to agreeing. You may decline the bonus but every deposit has a one time rollover requirement.",
      ],
    },
    {
      id: "IBS200CPR",
      title: "200% REFER A FRIEND BONUS",
      image: "/images/200-refer-bonus.png",
      terms: [
        "Friends have more fun together.",
        "Share your invite link with your friends via email, social media, or SMS and ask them to sign up, we'll give you a 200% bonus up to $200 when they make their first deposit (min: $50).",
        "Unlimited Referrals, Unlimited Bonuses!",
        "Repeat & Repeat",
        "Enjoy an unlimited amount of referral bonuses and get paid with each new friend that joins!",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      {/* Live Betting Interface */}
      <section className="w-full">
        <div className="bg-brand-charcoal-black-secondary/50 p-4 mb-6 rounded-lg border border-brand-primary-green/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <h2 className="text-xl font-bold">LIVE SPORTS BETTING</h2>
            </div>
            <Badge className="bg-brand-primary-green text-brand-charcoal-black">
              <Users className="w-4 h-4 mr-1" />
              12.4K Active
            </Badge>
          </div>

          <div className="w-full rounded-lg overflow-hidden border border-brand-smoke-gray/30">
            <iframe
              src="https://betslip.ibetsports.com/mainbk/betslip"
              width="100%"
              height="1100"
              frameBorder="0"
              allowFullScreen
              className="w-full"
              title="Sports Betting Interface"
            />
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {promotions.map((promo) => (
            <Card
              key={promo.id}
              className="group relative overflow-hidden bg-brand-charcoal-black-secondary border border-brand-primary-green/30 hover:border-brand-primary-green transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={promo.image || "/placeholder.svg"}
                  alt={promo.title}
                  width={640}
                  height={350}
                  className="w-full h-auto object-cover"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="absolute bottom-4 left-4 bg-brand-primary-green/90 hover:bg-brand-primary-green text-brand-charcoal-black font-bold text-xs px-4 py-2">
                      TERMS
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 text-brand-soft-white max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-brand-primary-green text-lg font-bold">
                        TERMS AND CONDITIONS
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <h3 className="font-bold text-brand-soft-white">{promo.title}</h3>
                      <ol className="list-decimal list-inside space-y-2 text-sm">
                        {promo.terms.map((term, index) => (
                          <li key={index} className="text-brand-smoke-gray leading-relaxed">
                            {term}
                          </li>
                        ))}
                      </ol>
                      <div className="mt-6 p-4 bg-brand-charcoal-black/50 rounded-lg">
                        <p className="font-bold text-brand-soft-white mb-2">Important Disclaimer:</p>
                        <p className="text-sm text-brand-smoke-gray">
                          The user is warned that they should make their own inquiry into the legality of participating
                          in any of these games and/or activities. IBETSPORTS assumes no responsibility for the actions
                          by and makes no representation or endorsement of any of these games and/or activities if they
                          are illegal in the jurisdiction of the reader or client of this site.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="space-y-12">
          {/* Hero Content */}
          <div className="text-center mb-12">
            <Image
              src="/images/hero-nfl-players-bonus.png"
              alt="Sports Betting Hero"
              width={800}
              height={400}
              className="w-full max-w-4xl mx-auto rounded-2xl mb-8"
            />
          </div>

          {/* Section 1 */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Your Destination for Comprehensive Sports Betting Odds
            </h2>
            <p className="text-lg text-brand-smoke-gray leading-relaxed max-w-4xl mx-auto text-center">
              Our online sportsbook offers everything you need to elevate your sports betting experience. From the
              latest NFL odds to MLB, NHL, NBA, and soccer odds, we bring you competitive betting lines across all major
              leagues and tournaments worldwide. Get ahead with accurate betting odds, updated in real-time to reflect
              every game-changing moment and player update, so you're always ready to place winning bets.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-brand-primary-green" />
                <h3 className="text-xl font-bold text-white">Pre-Match Betting</h3>
              </div>
              <p className="text-brand-smoke-gray">
                Get in early on your favorite teams with comprehensive pre-match odds and analysis.
              </p>
            </Card>
            <Card className="bg-brand-charcoal-black-secondary border border-brand-vibrant-green/30 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-8 h-8 text-brand-vibrant-green" />
                <h3 className="text-xl font-bold text-white">Live Betting</h3>
              </div>
              <p className="text-brand-smoke-gray">
                Experience instant action with live betting that puts you right at the heart of each game.
              </p>
            </Card>
          </div>

          {/* Section 2 */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Explore Pre-Match and Live Betting for Maximum Thrills
            </h2>
            <p className="text-lg text-brand-smoke-gray leading-relaxed max-w-4xl mx-auto text-center">
              Whether you prefer pre-match odds to get in early on your favorite teams or live betting for instant
              action, our sportsbook has you covered. With a wide range of options from straight bets to parlays,
              spreads, and props, you can tailor your bets to match your strategy. Our live betting feature lets you
              follow every intense play as it happens, putting you right at the heart of each game.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Bet on Top Leagues with Unmatched Variety
            </h2>
            <p className="text-lg text-brand-smoke-gray leading-relaxed max-w-4xl mx-auto text-center">
              From NFL and NBA to MLB, NHL, UFC, and international soccer leagues, our online sportsbook brings you the
              most popular events and betting markets. We also provide insights and data to support your decisions,
              ensuring you can bet with confidence and precision.
            </p>

            {/* Leagues Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { name: "NFL", icon: Trophy },
                { name: "NBA", icon: Target },
                { name: "MLB", icon: Star },
                { name: "NHL", icon: TrendingUp },
              ].map((league) => (
                <Card
                  key={league.name}
                  className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-4 text-center hover:border-brand-primary-green transition-colors"
                >
                  <league.icon className="w-8 h-8 mx-auto mb-2 text-brand-primary-green" />
                  <h4 className="text-xl font-bold text-white">{league.name}</h4>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 py-12">
            <p className="text-lg text-brand-smoke-gray max-w-3xl mx-auto">
              Don't miss a beat—join today and start betting on your favorite sports! Sign up now, make your deposit,
              and take advantage of our exclusive betting offers to kick off your winning streak!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-8 py-3 text-lg">
                    <Play className="w-5 h-5 mr-2" />
                    SIGN UP NOW
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 text-white max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-brand-primary-green text-xl font-bold text-center">
                      CREATE YOUR ACCOUNT
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 p-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-brand-charcoal-black border-brand-smoke-gray text-white placeholder:text-brand-smoke-gray"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-white">
                        Username
                      </Label>
                      <Input
                        id="username"
                        type="text"
                        placeholder="Choose a username"
                        className="bg-brand-charcoal-black border-brand-smoke-gray text-white placeholder:text-brand-smoke-gray"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        className="bg-brand-charcoal-black border-brand-smoke-gray text-white placeholder:text-brand-smoke-gray"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-white">
                        Confirm Password
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        className="bg-brand-charcoal-black border-brand-smoke-gray text-white placeholder:text-brand-smoke-gray"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        className="w-4 h-4 text-brand-primary-green bg-brand-charcoal-black border-brand-smoke-gray rounded focus:ring-brand-primary-green"
                      />
                      <Label htmlFor="terms" className="text-sm text-white">
                        I agree to the Terms & Conditions and Privacy Policy
                      </Label>
                    </div>
                    <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold py-2">
                      CREATE ACCOUNT
                    </Button>
                    <p className="text-center text-sm text-white">
                      Already have an account?{" "}
                      <button className="text-brand-primary-green hover:underline">Sign In</button>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-brand-vibrant-green hover:bg-brand-vibrant-green hover:text-brand-charcoal-black font-bold px-8 py-3 text-lg text-white bg-transparent"
                  >
                    <DollarSign className="w-5 h-5 mr-2" />
                    START BETTING
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
