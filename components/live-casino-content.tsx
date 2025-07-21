"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function LiveCasinoContent() {
  return (
    <section className="px-4 md:px-12 py-12 md:py-20 bg-brand-charcoal-black text-brand-soft-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Live Casino Iframe */}
        <div className="w-full">
          <iframe
            src="https://lobby.gamemecanica.net/?token=dGVzdGxvYmJ5OnRlc3Q%3D&playerId=Mzk1NA%3D%3D&language=en&casinoClient=I_BET_SPORTS_LIVE"
            width="100%"
            height="1000"
            className="border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>

        {/* Promotional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 125% Sports Welcome Bonus */}
          <Card className="bg-gradient-to-br from-brand-electric-green/20 to-brand-neon-yellow/20 border-brand-electric-green/30">
            <CardContent className="p-0 relative">
              <img
                src="/images/125-sports-bonus.png"
                alt="125% Sports Welcome Bonus"
                className="w-full h-auto rounded-lg"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute bottom-4 left-4 bg-brand-electric-green/80 text-brand-charcoal-black hover:bg-brand-electric-green"
                  >
                    Terms
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-brand-charcoal-black text-brand-soft-white border-brand-electric-green/30">
                  <DialogHeader>
                    <DialogTitle className="text-brand-electric-green">
                      125% SP WELCOME BONUS - TERMS AND CONDITIONS
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2 text-sm max-h-96 overflow-y-auto">
                    <ol className="list-decimal list-inside space-y-1">
                      <li>You will receive a 125% bonus on your qualifying initial deposit only.</li>
                      <li>A minimum deposit of $100 USD is required to qualify for the bonus.</li>
                      <li>The maximum bonus per deposit is $1000 USD</li>
                      <li>Bonus awarded as Free Play money.</li>
                      <li>There is a 15X rollover requirement associated with this promotion.</li>
                      <li>There is a Max cashout of $10,000.00 USD and the bonus expires in 14 days.</li>
                      <li>
                        To receive the bonus, you must use Promo Code <strong>IBS125CS</strong>
                      </li>
                      <li>This promotion is non-transferable.</li>
                      <li>
                        IBETSPORTS reserves the right to alter or amend the Terms and Conditions of this promotion at
                        any time without notice.
                      </li>
                    </ol>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* 200% Crypto Casino Bonus */}
          <Card className="bg-gradient-to-br from-brand-electric-green/20 to-brand-neon-yellow/20 border-brand-electric-green/30">
            <CardContent className="p-0 relative">
              <img
                src="/images/200-crypto-bonus.png"
                alt="200% Crypto Casino Bonus"
                className="w-full h-auto rounded-lg"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute bottom-4 left-4 bg-brand-electric-green/80 text-brand-charcoal-black hover:bg-brand-electric-green"
                  >
                    Terms
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-brand-charcoal-black text-brand-soft-white border-brand-electric-green/30">
                  <DialogHeader>
                    <DialogTitle className="text-brand-electric-green">
                      200% CRYPTO CASINO WELCOME BONUS - TERMS AND CONDITIONS
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2 text-sm max-h-96 overflow-y-auto">
                    <ol className="list-decimal list-inside space-y-1">
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
                      <li>
                        To receive the bonus, you must use Promo Code <strong>IBS200CP</strong>
                      </li>
                      <li>
                        IBETSPORTS reserves the right to alter or amend the Terms and Conditions of this promotion at
                        any time without notice.
                      </li>
                    </ol>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* 150% Casino Reload Bonus */}
          <Card className="bg-gradient-to-br from-brand-electric-green/20 to-brand-neon-yellow/20 border-brand-electric-green/30">
            <CardContent className="p-0 relative">
              <img
                src="/images/150-casino-reload.png"
                alt="150% Casino Reload Bonus"
                className="w-full h-auto rounded-lg"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute bottom-4 left-4 bg-brand-electric-green/80 text-brand-charcoal-black hover:bg-brand-electric-green"
                  >
                    Terms
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-brand-charcoal-black text-brand-soft-white border-brand-electric-green/30">
                  <DialogHeader>
                    <DialogTitle className="text-brand-electric-green">
                      150% CASINO RELOAD BONUS - TERMS AND CONDITIONS
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2 text-sm max-h-96 overflow-y-auto">
                    <ol className="list-decimal list-inside space-y-1">
                      <li>
                        First Time Deposit Crypto Casino 250% min 100$ max 2k 40x rollover max cash 10k 7 day expiration
                      </li>
                      <li>
                        First Time Deposit Other Deposit Type other 200% min 50$ max 1k 30x rollover max cash out 5k 7
                        days expiration
                      </li>
                      <li>Reload crypto 150% 100 min 1k max 40x rollover max cash 10k 7 day expiration</li>
                      <li>Reload Other Deposit Type 100% 100 min 1k max 40x rollover max cash 5k 7 day expiration</li>
                      <li>
                        Promotions and bonuses are restricted to one per: deposit, person, account, household, email,
                        and phone number.
                      </li>
                    </ol>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* 200% Refer a Friend Bonus */}
          <Card className="bg-gradient-to-br from-brand-electric-green/20 to-brand-neon-yellow/20 border-brand-electric-green/30">
            <CardContent className="p-0 relative">
              <img
                src="/images/200-refer-bonus.png"
                alt="200% Refer a Friend Bonus"
                className="w-full h-auto rounded-lg"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute bottom-4 left-4 bg-brand-electric-green/80 text-brand-charcoal-black hover:bg-brand-electric-green"
                  >
                    Terms
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-brand-charcoal-black text-brand-soft-white border-brand-electric-green/30">
                  <DialogHeader>
                    <DialogTitle className="text-brand-electric-green">
                      200% REFER A FRIEND BONUS - TERMS AND CONDITIONS
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2 text-sm max-h-96 overflow-y-auto">
                    <p>Friends have more fun together.</p>
                    <p>
                      Share your invite link with your friends via email, social media, or SMS and ask them to sign up,
                      we'll give you a 200% bonus up to $200 when they make their first deposit (min: $50).
                    </p>
                    <p>
                      <strong>Unlimited Referrals, Unlimited Bonuses!</strong>
                    </p>
                    <p>Repeat & Repeat</p>
                    <p>Enjoy an unlimited amount of referral bonuses and get paid with each new friend that joins!</p>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* Live Casino Information */}
        <div className="space-y-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-brand-electric-green">
            Play Your Favorite Games in Our Immersive Live Casino
          </h2>

          <p className="text-lg md:text-xl text-brand-smoke-gray max-w-4xl mx-auto">
            Enjoy real-time excitement with our Live Dealer Casino, where the action is streamed directly to you in
            high-definition. With a range of classic games like Live Blackjack, Live Baccarat, Live Roulette, and Live
            Craps, you can enjoy the thrill of a land-based casino from the comfort of your own space.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Live Blackjack",
                desc: "Challenge the dealer in real time and use strategy to get closer to 21.",
              },
              {
                title: "Live Roulette",
                desc: "Experience the suspenseful spins with our professional dealers.",
              },
              {
                title: "Live Baccarat",
                desc: "Enjoy the elegance of this classic card game with live streaming.",
              },
              {
                title: "HD Streaming",
                desc: "Crystal clear video quality brings the casino to your screen.",
              },
              {
                title: "Professional Dealers",
                desc: "Interact with experienced dealers in real-time chat.",
              },
              {
                title: "24/7 Availability",
                desc: "Play anytime, anywhere on desktop or mobile devices.",
              },
            ].map((feature) => (
              <Card key={feature.title} className="bg-brand-charcoal-black/50 border-brand-electric-green/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-brand-electric-green">{feature.title}</h3>
                  <p className="text-brand-smoke-gray">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-electric-green to-brand-neon-yellow text-brand-charcoal-black hover:from-brand-neon-yellow hover:to-brand-electric-green font-bold px-8 py-4 text-lg"
            >
              Join Live Casino Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
