"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Play, Users, Video, Crown, Star, Target } from "lucide-react"

/* ────────────────────────────
 DATA
 ──────────────────────────── */

const categories = [
  { id: "all", name: "All Games", count: 13 },
  { id: "roulette", name: "Roulette", count: 5 },
  { id: "blackjack", name: "Blackjack", count: 5 },
  { id: "baccarat", name: "Baccarat", count: 2 },
  { id: "poker", name: "Poker", count: 0 },
  { id: "gameshow", name: "Game Shows", count: 0 },
] as const

const liveGames = [
  {
    id: 1,
    name: "Lightning Roulette",
    provider: "Evolution Gaming",
    image: "/images/lightning-roulette.png",
    category: "roulette",
    players: "2.4K",
    dealer: "Emma",
    language: "English",
    minBet: "$1",
    maxBet: "$5,000",
    isVip: false,
    isNew: false,
    rating: 4.9,
    features: ["Lightning Multipliers", "HD Stream", "Mobile Optimized"],
  },
  {
    id: 2,
    name: "Immersive Roulette",
    provider: "Evolution Gaming",
    image: "/images/immersive-roulette.png",
    category: "roulette",
    players: "1.8K",
    dealer: "Sofia",
    language: "English",
    minBet: "$1",
    maxBet: "$10,000",
    isVip: true,
    isNew: false,
    rating: 4.8,
    features: ["Multiple Cameras", "Slow Motion", "HD Stream"],
  },
  {
    id: 3,
    name: "Speed Roulette",
    provider: "Evolution Gaming",
    image: "/images/speed-roulette.png",
    category: "roulette",
    players: "1.2K",
    dealer: "Alex",
    language: "English",
    minBet: "$0.50",
    maxBet: "$2,500",
    isVip: false,
    isNew: false,
    rating: 4.7,
    features: ["Fast Gameplay", "25 Second Rounds", "HD Stream"],
  },
  {
    id: 4,
    name: "Lightning Blackjack",
    provider: "Evolution Gaming",
    image: "/images/lightning-blackjack.png",
    category: "blackjack",
    players: "1.9K",
    dealer: "Michael",
    language: "English",
    minBet: "$1",
    maxBet: "$2,500",
    isVip: false,
    isNew: true,
    rating: 4.9,
    features: ["Lightning Cards", "Multipliers", "Unlimited Players"],
  },
  {
    id: 5,
    name: "First Person Blackjack",
    provider: "Evolution Gaming",
    image: "/images/first-person-blackjack.png",
    category: "blackjack",
    players: "856",
    dealer: "AI Dealer",
    language: "Multi-language",
    minBet: "$1",
    maxBet: "$1,000",
    isVip: false,
    isNew: false,
    rating: 4.6,
    features: ["RNG Based", "Fast Play", "Switch to Live"],
  },
  {
    id: 6,
    name: "Speed Baccarat",
    provider: "Evolution Gaming",
    image: "/images/speed-baccarat.png",
    category: "baccarat",
    players: "1.5K",
    dealer: "Luna",
    language: "English",
    minBet: "$1",
    maxBet: "$10,000",
    isVip: false,
    isNew: false,
    rating: 4.8,
    features: ["27 Second Rounds", "Side Bets", "HD Stream"],
  },
  {
    id: 7,
    name: "First Person Baccarat",
    provider: "Evolution Gaming",
    image: "/images/first-person-baccarat.png",
    category: "baccarat",
    players: "743",
    dealer: "AI Dealer",
    language: "Multi-language",
    minBet: "$1",
    maxBet: "$5,000",
    isVip: false,
    isNew: false,
    rating: 4.7,
    features: ["RNG Based", "Statistics", "Switch to Live"],
  },
  {
    id: 8,
    name: "First Person Roulette",
    provider: "Evolution Gaming",
    image: "/images/first-person-roulette.png",
    category: "roulette",
    players: "692",
    dealer: "AI Dealer",
    language: "Multi-language",
    minBet: "$0.10",
    maxBet: "$1,000",
    isVip: false,
    isNew: false,
    rating: 4.5,
    features: ["RNG Based", "Statistics", "Switch to Live"],
  },
  {
    id: 9,
    name: "21 Burn Blackjack",
    provider: "Betsoft",
    image: "/images/21-burn-blackjack.png",
    category: "blackjack",
    players: "650",
    dealer: "Isabella",
    language: "English",
    minBet: "$5",
    maxBet: "$500",
    isVip: false,
    isNew: true,
    rating: 4.7,
    features: ["Burn Card Option", "Side Bets", "Classic Feel"],
  },
  {
    id: 10,
    name: "European Blackjack",
    provider: "Play'n GO",
    image: "/images/european-blackjack.png",
    category: "blackjack",
    players: "980",
    dealer: "Lucas",
    language: "English",
    minBet: "$1",
    maxBet: "$1,000",
    isVip: false,
    isNew: false,
    rating: 4.8,
    features: ["European Rules", "HD Stream", "Insurance Bet"],
  },
  {
    id: 11,
    name: "American Roulette",
    provider: "NetEnt",
    image: "/images/american-roulette.png",
    category: "roulette",
    players: "1.1K",
    dealer: "Chloe",
    language: "English",
    minBet: "$0.50",
    maxBet: "$2,000",
    isVip: false,
    isNew: false,
    rating: 4.6,
    features: ["Double Zero", "Statistics View", "Racetrack Betting"],
  },
  {
    id: 12,
    name: "Multihand Blackjack",
    provider: "Pragmatic Play",
    image: "/images/multihand-blackjack.png",
    category: "blackjack",
    players: "1.3K",
    dealer: "Marco",
    language: "English",
    minBet: "$10",
    maxBet: "$3,000",
    isVip: true,
    isNew: false,
    rating: 4.9,
    features: ["Play Multiple Hands", "Fast-Paced", "VIP Tables"],
  },
  {
    id: 13,
    name: "French Roulette",
    provider: "Evolution Gaming",
    image: "/images/french-roulette.png",
    category: "roulette",
    players: "800",
    dealer: "Amelie",
    language: "French",
    minBet: "$2",
    maxBet: "$5,000",
    isVip: false,
    isNew: false,
    rating: 4.8,
    features: ["La Partage Rule", "Authentic French Style", "HD Stream"],
  },
] as const

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

/* ────────────────────────────
 COMPONENT
 ──────────────────────────── */

export default function LiveCasinoTabContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredGames = liveGames.filter((g) => selectedCategory === "all" || g.category === selectedCategory)

  /* Helper: single game card */
  const LiveGameCard = ({ game }: { game: (typeof liveGames)[number] }) => (
    <Card className="group relative overflow-hidden rounded-xl bg-brand-charcoal-black-secondary border border-brand-primary-green/30 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="aspect-[4/3] relative bg-black">
        <Image src={game.image || "/placeholder.svg"} alt={game.name} fill className="object-contain p-1" />

        {/* LIVE badge */}
        <div className="absolute top-2 left-2 z-10">
          <Badge className="bg-red-500 text-white animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full mr-1" />
            LIVE
          </Badge>
        </div>

        {/* NEW / VIP badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1 z-10">
          {game.isNew && <Badge className="bg-brand-vibrant-green text-brand-charcoal-black text-xs">NEW</Badge>}
          {game.isVip && (
            <Badge className="bg-yellow-500 text-brand-charcoal-black text-xs">
              <Crown className="w-3 h-3 mr-1" />
              VIP
            </Badge>
          )}
        </div>

        {/* Player count */}
        <div className="absolute bottom-12 left-2 z-10">
          <Badge className="bg-black/70 text-brand-soft-white text-xs">
            <Users className="w-3 h-3 mr-1" />
            {game.players}
          </Badge>
        </div>

        {/* Game name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent z-10">
          <h3 className="font-bold text-brand-soft-white text-sm truncate">{game.name}</h3>
        </div>
      </div>

      {/* Game info */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs text-brand-smoke-gray">{game.rating}</span>
          </div>
          <span className="text-xs text-brand-smoke-gray">{game.provider}</span>
        </div>
        <div className="text-xs text-brand-smoke-gray mb-3 flex justify-between">
          <span>
            {game.minBet} - {game.maxBet}
          </span>
          <span>Dealer: {game.dealer}</span>
        </div>
        <Button className="mt-auto w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold">
          <Play className="w-4 h-4 mr-2" />
          Play Live
        </Button>
      </div>
    </Card>
  )

  /* ────────────────────────────
   RENDER
   ──────────────────────────── */

  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      {/* Live Casino Interface */}
      <section className="w-full mb-8">
        <div className="bg-brand-charcoal-black-secondary/50 p-4 mb-6 rounded-lg border border-brand-primary-green/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <h2 className="text-xl font-bold">LIVE CASINO LOBBY</h2>
            </div>
            <Badge className="bg-brand-primary-green text-brand-charcoal-black">
              <Users className="w-4 h-4 mr-1" />
              8.7K Playing
            </Badge>
          </div>

          <div className="w-full rounded-lg overflow-hidden border border-brand-smoke-gray/30">
            <iframe
              src="https://lobby.gamemecanica.net/?token=dGVzdGxvYmJ5OnRlc3Q%3D&playerId=Mzk1NA%3D%3D&language=en&casinoClient=I_BET_SPORTS_LIVE"
              width="100%"
              height="1000"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              className="w-full"
              title="Live Casino Lobby"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
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

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black py-12 md:py-16">
        <Image
          src="/images/live-lobby.png"
          alt="Live casino background"
          fill
          className="absolute inset-0 object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4">LIVE CASINO</h1>
          <p className="text-xl md:text-2xl text-brand-smoke-gray mb-8 max-w-3xl mx-auto">
            Experience the thrill of real casino games with professional dealers streaming live in HD
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4 bg-brand-charcoal-black-secondary px-6 py-3 rounded-full">
              <Video className="w-6 h-6 text-brand-primary-green" />
              <span className="font-bold">HD Live Streaming</span>
            </div>
            <div className="flex items-center gap-4 bg-brand-charcoal-black-secondary px-6 py-3 rounded-full">
              <Users className="w-6 h-6 text-brand-vibrant-green" />
              <span className="font-bold">Professional Dealers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-brand-charcoal-black-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Live Tables",
                value: "156",
                Icon: Video,
                color: "text-brand-primary-green",
              },
              {
                title: "Active Players",
                value: "12.4K",
                Icon: Users,
                color: "text-brand-vibrant-green",
              },
              {
                title: "Professional Dealers",
                value: "89",
                Icon: Crown,
                color: "text-yellow-500",
              },
              {
                title: "Languages",
                value: "12",
                Icon: Target,
                color: "text-blue-500",
              },
            ].map(({ title, value, Icon, color }) => (
              <Card
                key={title}
                className="bg-brand-charcoal-black border border-brand-primary-green/30 p-6 text-center"
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${color}`} />
                <div className="text-3xl font-bold mb-1">{value}</div>
                <div className="text-sm text-brand-smoke-gray">{title}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          {/* Category tabs */}
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-brand-charcoal-black-secondary mb-8">
            {categories.map((c) => (
              <TabsTrigger
                key={c.id}
                value={c.id}
                className="data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black text-brand-soft-white"
              >
                <span className="flex flex-col items-center">
                  <span className="text-sm font-bold">{c.name}</span>
                  <span className="text-xs opacity-70">({c.count})</span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Games grid (same value for each trigger, rendered once) */}
          <TabsContent value={selectedCategory}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map((g) => (
                <LiveGameCard key={g.id} game={g} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Content Sections */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="space-y-12">
          {/* Section 1 */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Play Your Favorite Games in Our Immersive Live Casino
            </h2>
            <p className="text-lg text-brand-smoke-gray leading-relaxed max-w-4xl mx-auto text-center">
              Enjoy real-time excitement with our Live Dealer Casino, where the action is streamed directly to you in
              high-definition. With a range of classic games like Live Blackjack, Live Baccarat, Live Roulette, and Live
              Craps, you can enjoy the thrill of a land-based casino from the comfort of your own space. Each game is
              hosted by professional dealers, creating an authentic atmosphere where you can chat with both dealers and
              other players, adding a social dimension to your experience.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Live Blackjack: Challenge the Dealer in Real Time
            </h2>
            <p className="text-lg text-brand-smoke-gray leading-relaxed max-w-4xl mx-auto text-center">
              In our Live Dealer Casino, classic table games come to life. With Live Blackjack, you can test your skills
              against a live dealer and use strategy to get closer to 21. Watch every deal, react to every hand, and see
              if you have what it takes to beat the house!
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Live Roulette, Baccarat, and More – Anytime, Anywhere
            </h2>
            <p className="text-lg text-brand-smoke-gray leading-relaxed max-w-4xl mx-auto text-center">
              From the suspenseful spins of Live Roulette to the elegance of Live Baccarat, each game is designed to
              bring the true essence of casino gaming to you. Our live streaming technology ensures seamless play on
              desktop and mobile, so you never miss a moment of the action, no matter where you are. Immerse yourself in
              a real casino experience. Join our Live Dealer Casino today and feel the rush of live-action betting. Sign
              up now and take your seat at the table!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
