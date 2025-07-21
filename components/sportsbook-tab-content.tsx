"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

function SportsbookTabContent() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  const promotions = [
    {
      id: "IBS125CS",
      image: "/images/125-sports-bonus.png",
      title: "125% SP WELCOME BONUS",
      terms: (
        <div className="space-y-4">
          <p>
            <strong>125% SP WELCOME BONUS</strong>
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>You will receive a 125% bonus on your qualifying initial deposit only.</li>
            <li>A minimum deposit of $100 USD is required to qualify for the bonus.</li>
            <li>The maximum bonus per deposit is $1000 USD</li>
            <li>Bonus awarded as Free Play money.</li>
            <li>There is a 15X rollover requirement associated with this promotion.</li>
            <li>There is a Max cashout of $10,000.00 USD and the bonus expires in 14 days.</li>
            <li>
              Rollover (w) is calculated based on your deposit (d) plus bonus, (b) multiplied by the rollover
              requirement of your bonus (r). Rollover Formula w = (d+b)* r
            </li>
            <li>
              Please note that only the lowest amount between the risk and the win counts towards your rollover
              requirement. Horses, Casino, and Poker will not contribute action towards the rollover.
            </li>
            <li>
              To receive the bonus, you must use Promo Code <strong>IBS125CS</strong>
            </li>
            <li>
              To redeem the bonus, you must contact us through our NEED HELP section on the upper right hand corner of
              the page.
            </li>
            <li>This promotion is non-transferable.</li>
            <li>
              The free plays can only be used on straight bets up to +250. They cannot be used in the Racebook, Casino,
              and Poker
            </li>
            <li>
              IBETSPORTS reserves the right to alter or amend the Terms and Conditions of this promotion at any time
              without notice.
            </li>
            <li>
              Promotions and bonuses are restricted to one per: deposit, person, account, household, email, and phone
              number.
            </li>
          </ol>
          <p className="text-sm mt-4">
            <strong>Important Disclaimer:</strong>
            <br />
            The user is warned that they should make their own inquiry into the legality of participating in any of
            these games and/or activities. IBETSPORTS assumes no responsibility for the actions by and makes no
            representation or endorsement of any of these games and/or activities if they are illegal in the
            jurisdiction of the reader or client of this site.
          </p>
        </div>
      ),
    },
    {
      id: "IBS200CP",
      image: "/images/200-crypto-bonus.png",
      title: "200% CRYPTO CASINO WELCOME BONUS",
      terms: (
        <div className="space-y-4">
          <p>
            <strong>200% CRYPTO CASINO WELCOME BONUS</strong>
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>
              You will receive a <strong>200%</strong> bonus on your qualifying INITIAL deposit only.
            </li>
            <li>
              A minimum deposit of <strong>$50</strong> is required to qualify for the bonus.
            </li>
            <li>
              The maximum amount awarded for this bonus is <strong>$2000.00</strong> USD
            </li>
            <li>
              The maximum cash out for this bonus is <strong>$10,000</strong> and expires in 7 days.
            </li>
            <li>
              There is a <strong>40X</strong> rollover requirement associated with this promotion.
            </li>
            <li>Deposits made via CRYPTO only are eligible for this bonus.</li>
            <li>The Bonus applies ONLY for online casino.</li>
            <li>Bonuses are for USA Players, bonuses for other players are at the discretion of management.</li>
            <li>
              To receive the bonus, you must use Promo Code <strong>IBS200CP</strong>
            </li>
            <li>To redeem the bonus, you may do so through our CASHIER/ PROMO CODE FIELD</li>
            <li>
              Promotions and bonuses are restricted to one per: deposit, person, account, household, email, and phone
              number.
            </li>
            <li>
              IBETSPORTS reserves the right to alter or amend the Terms and Conditions of this promotion at any time
              without notice.
            </li>
            <li>
              Note: if the player's account uses a currency other than USD, the amounts mentioned above are equivalent
              to the local currency.
            </li>
          </ol>
          <p className="text-sm mt-4">
            <strong>Important Disclaimer:</strong>
            <br />
            The user is warned that they should make their own inquiry into the legality of participating in any of
            these games and/or activities. IBETSPORTS assumes no responsibility for the actions by and makes no
            representation or endorsement of any of these games and/or activities if they are illegal in the
            jurisdiction of the reader or client of this site.
          </p>
        </div>
      ),
    },
    {
      id: "IBS150CS",
      image: "/images/150-casino-reload.png",
      title: "150% CASINO RELOAD BONUS",
      terms: (
        <div className="space-y-4">
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>First Time Deposit Crypto Casino 250% min 100$ max 2k 40x rollover max cash 10k 7 day expiration</li>
            <li>
              First Time Deposit Other Deposit Type other 200% min 50$ max 1k 30x rollover max cash out 5k 7 days
              expiration
            </li>
            <li>Reload crypto 150% 100 min 1k max 40x rollover max cash 10k 7 day expiration</li>
            <li>Reload Other Deposit Type 100% 100 min 1k max 40x rollover max cash 5k 7 day expiration</li>
            <li>
              Promotions and bonuses are restricted to one per: deposit, person, account, household, email, and phone
              number.
            </li>
            <li>
              All bonuses come with a rollover requirement, please make sure you understand the requirements prior to
              agreeing. You may decline the bonus but every deposit has a one time rollover requirement.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "IBS200CPR",
      image: "/images/200-refer-bonus.png",
      title: "200% REFER A FRIEND BONUS",
      terms: (
        <div className="space-y-4">
          <p className="text-sm">Friends have more fun together.</p>
          <p className="text-sm">
            Share your invite link with your friends via email, social media, or SMS and ask them to sign up, we'll give
            you a 200% bonus up to $200 when they make their first deposit (min: $50).
          </p>
          <p className="text-sm">
            <strong>Unlimited Referrals, Unlimited Bonuses!</strong>
          </p>
          <p className="text-sm">Repeat & Repeat</p>
          <p className="text-sm">
            Enjoy an unlimited amount of referral bonuses and get paid with each new friend that joins!
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-brand-charcoal-black">
      {/* Sportsbook Iframe */}
      <div className="w-full bg-brand-charcoal-black-secondary rounded-lg overflow-hidden border border-brand-smoke-gray/20">
        <div className="bg-gradient-to-r from-brand-charcoal-black to-brand-charcoal-black-secondary p-4">
          <h2 className="text-brand-soft-white text-xl font-bold">Live Sportsbook</h2>
        </div>
        <div className="bg-brand-charcoal-black p-2">
          <iframe
            src="https://betslip.ibetsports.com/mainbk/betslip"
            width="100%"
            height="1100px"
            frameBorder="0"
            allowFullScreen
            className="w-full border-0 rounded-lg bg-transparent opacity-100 text-black"
            title="Sportsbook Interface"
            style={{ backgroundColor: "#1a1a1a", colorScheme: "dark" }}
          />
        </div>
      </div>

      {/* Promotional Cards Section */}
      <div className="container mx-auto px-4 py-16">
        {/* First Row of Promotions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {promotions.slice(0, 2).map((promo) => (
            <div key={promo.id} className="relative group">
              <div className="bg-brand-charcoal-black-secondary rounded-xl overflow-hidden border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300">
                <div className="relative">
                  <img src={promo.image || "/placeholder.svg"} alt={promo.title} className="w-full h-64 object-cover" />
                  <Dialog open={openModal === promo.id} onOpenChange={(open) => setOpenModal(open ? promo.id : null)}>
                    <DialogTrigger asChild>
                      <Button className="absolute bottom-4 left-4 bg-brand-primary-green/80 hover:bg-brand-primary-green text-brand-charcoal-black font-bold px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
                        Terms
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 max-w-2xl max-h-[80vh]">
                      <DialogHeader>
                        <DialogTitle className="text-brand-soft-white uppercase font-bold">
                          Terms and Conditions
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="max-h-[60vh] pr-4">
                        <div className="text-brand-soft-white">{promo.terms}</div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row of Promotions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {promotions.slice(2, 4).map((promo) => (
            <div key={promo.id} className="relative group">
              <div className="bg-brand-charcoal-black-secondary rounded-xl overflow-hidden border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300">
                <div className="relative">
                  <img src={promo.image || "/placeholder.svg"} alt={promo.title} className="w-full h-64 object-cover" />
                  <Dialog open={openModal === promo.id} onOpenChange={(open) => setOpenModal(open ? promo.id : null)}>
                    <DialogTrigger asChild>
                      <Button className="absolute bottom-4 left-4 bg-brand-primary-green/80 hover:bg-brand-primary-green text-brand-charcoal-black font-bold px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
                        Terms
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 max-w-2xl max-h-[80vh]">
                      <DialogHeader>
                        <DialogTitle className="text-brand-soft-white uppercase font-bold">
                          Terms and Conditions
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="max-h-[60vh] pr-4">
                        <div className="text-brand-soft-white">{promo.terms}</div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marketing Content */}
        <div className="max-w-4xl mx-auto space-y-8 text-brand-soft-white">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-brand-primary-green">
              Your Destination for Comprehensive Sports Betting Odds
            </h2>
            <p className="text-lg leading-relaxed text-brand-smoke-gray">
              Our online sportsbook offers everything you need to elevate your sports betting experience. From the
              latest NFL odds to MLB, NHL, NBA, and soccer odds, we bring you competitive betting lines across all major
              leagues and tournaments worldwide. Get ahead with accurate betting odds, updated in real-time to reflect
              every game-changing moment and player update, so you're always ready to place winning bets.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-brand-primary-green">
              Explore Pre-Match and Live Betting for Maximum Thrills
            </h2>
            <p className="text-lg leading-relaxed text-brand-smoke-gray">
              Whether you prefer pre-match odds to get in early on your favorite teams or live betting for instant
              action, our sportsbook has you covered. With a wide range of options from straight bets to parlays,
              spreads, and props, you can tailor your bets to match your strategy. Our live betting feature lets you
              follow every intense play as it happens, putting you right at the heart of each game.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-brand-primary-green">
              Bet on Top Leagues with Unmatched Variety
            </h2>
            <p className="text-lg leading-relaxed text-brand-smoke-gray">
              From NFL and NBA to MLB, NHL, UFC, and international soccer leagues, our online sportsbook brings you the
              most popular events and betting markets. We also provide insights and data to support your decisions,
              ensuring you can bet with confidence and precision.
            </p>
            <p className="text-lg leading-relaxed text-brand-smoke-gray mt-4">
              Don't miss a beat—join today and start betting on your favorite sports! Sign up now, make your deposit,
              and take advantage of our exclusive betting offers to kick off your winning streak!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { SportsbookTabContent }
export default SportsbookTabContent
