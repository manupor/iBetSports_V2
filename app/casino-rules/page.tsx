"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  AlertTriangle,
  Clock,
  DollarSign,
  Users,
  Gamepad2,
  CheckCircle,
  XCircle,
  Phone,
  Mail,
  MessageCircle,
  Dice1,
  Spade,
  Heart,
} from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function CasinoRulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black-tertiary">
      <TopNavigation />
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-brand-primary-green/20 to-brand-secondary-blue/20 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-brand-primary-green/20 p-3 rounded-full">
                <Spade className="w-8 h-8 text-brand-primary-green" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-soft-white mb-4">Casino Rules</h1>
            <p className="text-lg md:text-xl text-brand-smoke-gray max-w-3xl mx-auto">
              Complete guide to our casino gaming rules, policies, and fair play standards
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid gap-8">
          {/* General Casino Rules */}
          <Card className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-primary-green text-xl md:text-2xl">
                <Shield className="w-6 h-6" />
                General Casino Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-brand-soft-white flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-primary-green" />
                    Game Integrity
                  </h3>
                  <ul className="space-y-2 text-brand-smoke-gray">
                    <li>• All games use certified Random Number Generators (RNG)</li>
                    <li>• Games are regularly tested for fairness by independent auditors</li>
                    <li>• Live dealer games are streamed in real-time from licensed studios</li>
                    <li>• Game outcomes cannot be influenced by players or operators</li>
                    <li>• All game results are final and cannot be altered</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-brand-soft-white flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Prohibited Activities
                  </h3>
                  <ul className="space-y-2 text-brand-smoke-gray">
                    <li>• Using automated betting software or bots</li>
                    <li>• Colluding with other players in live games</li>
                    <li>• Exploiting software bugs or glitches</li>
                    <li>• Card counting in live blackjack games</li>
                    <li>• Any form of cheating or fraudulent activity</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Betting Rules */}
          <Card className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-primary-green text-xl md:text-2xl">
                <DollarSign className="w-6 h-6" />
                Betting Rules & Limits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-brand-charcoal-black/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-brand-soft-white mb-3">Minimum Bets</h3>
                  <div className="space-y-2 text-brand-smoke-gray">
                    <div className="flex justify-between">
                      <span>Slots:</span>
                      <span className="text-brand-primary-green">$0.10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Table Games:</span>
                      <span className="text-brand-primary-green">$1.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Live Casino:</span>
                      <span className="text-brand-primary-green">$5.00</span>
                    </div>
                  </div>
                </div>
                <div className="bg-brand-charcoal-black/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-brand-soft-white mb-3">Maximum Bets</h3>
                  <div className="space-y-2 text-brand-smoke-gray">
                    <div className="flex justify-between">
                      <span>Slots:</span>
                      <span className="text-brand-primary-green">$500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Table Games:</span>
                      <span className="text-brand-primary-green">$10,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Live Casino:</span>
                      <span className="text-brand-primary-green">$25,000</span>
                    </div>
                  </div>
                </div>
                <div className="bg-brand-charcoal-black/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-brand-soft-white mb-3">Maximum Payouts</h3>
                  <div className="space-y-2 text-brand-smoke-gray">
                    <div className="flex justify-between">
                      <span>Daily:</span>
                      <span className="text-brand-primary-green">$500,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekly:</span>
                      <span className="text-brand-primary-green">$2,000,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly:</span>
                      <span className="text-brand-primary-green">$5,000,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Game-Specific Rules */}
          <Card className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-primary-green text-xl md:text-2xl">
                <Gamepad2 className="w-6 h-6" />
                Game-Specific Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-soft-white mb-3 flex items-center gap-2">
                      <Dice1 className="w-5 h-5 text-brand-primary-green" />
                      Slot Games
                    </h3>
                    <ul className="space-y-2 text-brand-smoke-gray">
                      <li>• All spins are independent and random</li>
                      <li>• Bonus features trigger according to game rules</li>
                      <li>• Progressive jackpots require maximum bet</li>
                      <li>• Autoplay stops on bonus features or big wins</li>
                      <li>• Game history available for 90 days</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-soft-white mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      Blackjack
                    </h3>
                    <ul className="space-y-2 text-brand-smoke-gray">
                      <li>• Standard 21 rules apply</li>
                      <li>• Dealer stands on soft 17</li>
                      <li>• Blackjack pays 3:2</li>
                      <li>• Double down on any two cards</li>
                      <li>• Split up to 3 times (4 hands total)</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-soft-white mb-3 flex items-center gap-2">
                      <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                      Roulette
                    </h3>
                    <ul className="space-y-2 text-brand-smoke-gray">
                      <li>• European (single zero) and American (double zero) available</li>
                      <li>• Maximum 8 numbers per straight-up bet</li>
                      <li>• "En Prison" rule applies on European tables</li>
                      <li>• Minimum time between spins: 20 seconds</li>
                      <li>• No bets accepted after "No more bets" call</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-soft-white mb-3 flex items-center gap-2">
                      <Spade className="w-5 h-5 text-brand-soft-white" />
                      Poker Games
                    </h3>
                    <ul className="space-y-2 text-brand-smoke-gray">
                      <li>• Standard poker hand rankings apply</li>
                      <li>• Video poker uses 52-card deck per hand</li>
                      <li>• Live poker follows casino hold'em rules</li>
                      <li>• Side bets are optional and independent</li>
                      <li>• Optimal strategy charts available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Live Casino Rules */}
          <Card className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-primary-green text-xl md:text-2xl">
                <Users className="w-6 h-6" />
                Live Casino Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-brand-soft-white">Player Conduct</h3>
                  <ul className="space-y-2 text-brand-smoke-gray">
                    <li>• Be respectful to dealers and other players</li>
                    <li>• No abusive or inappropriate language in chat</li>
                    <li>• Follow dealer instructions at all times</li>
                    <li>• No discussion of cards or strategy during play</li>
                    <li>• Violations may result in chat restrictions or game removal</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-brand-soft-white">Technical Requirements</h3>
                  <ul className="space-y-2 text-brand-smoke-gray">
                    <li>• Stable internet connection required</li>
                    <li>• Minimum 2 Mbps download speed recommended</li>
                    <li>• Latest browser version for optimal performance</li>
                    <li>• Disconnections: bets stand, auto-decisions apply</li>
                    <li>• Game history available for review</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Malfunction & Disputes */}
          <Card className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-primary-green text-xl md:text-2xl">
                <AlertTriangle className="w-6 h-6" />
                Malfunctions & Disputes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-3">Game Malfunctions</h3>
                  <ul className="space-y-2 text-brand-smoke-gray">
                    <li>• All game malfunctions void pays and plays</li>
                    <li>• Incomplete games will be restored when possible</li>
                    <li>• Server errors result in bet refunds</li>
                    <li>• Visual display errors don't affect actual results</li>
                    <li>• Contact support immediately for any issues</li>
                  </ul>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Dispute Resolution</h3>
                  <ul className="space-y-2 text-brand-smoke-gray">
                    <li>• Report disputes within 30 days of occurrence</li>
                    <li>• All game rounds are logged and reviewable</li>
                    <li>• Independent auditors may review disputed games</li>
                    <li>• Management decisions are final</li>
                    <li>• Escalation to licensing authority available</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Time Limits & Responsible Gaming */}
          <Card className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-primary-green text-xl md:text-2xl">
                <Clock className="w-6 h-6" />
                Time Limits & Responsible Gaming
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-brand-charcoal-black/50 p-4 rounded-lg text-center">
                  <Clock className="w-8 h-8 text-brand-primary-green mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-brand-soft-white mb-2">Session Limits</h3>
                  <p className="text-brand-smoke-gray text-sm">
                    Set daily, weekly, or monthly time limits for your gaming sessions
                  </p>
                </div>
                <div className="bg-brand-charcoal-black/50 p-4 rounded-lg text-center">
                  <DollarSign className="w-8 h-8 text-brand-primary-green mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-brand-soft-white mb-2">Deposit Limits</h3>
                  <p className="text-brand-smoke-gray text-sm">
                    Control your spending with customizable deposit limits
                  </p>
                </div>
                <div className="bg-brand-charcoal-black/50 p-4 rounded-lg text-center">
                  <Shield className="w-8 h-8 text-brand-primary-green mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-brand-soft-white mb-2">Self-Exclusion</h3>
                  <p className="text-brand-smoke-gray text-sm">
                    Take a break with temporary or permanent self-exclusion options
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="bg-gradient-to-r from-brand-primary-green/10 to-brand-secondary-blue/10 border-brand-primary-green/20">
            <CardHeader>
              <CardTitle className="text-brand-primary-green text-xl md:text-2xl text-center">
                Need Help with Casino Rules?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="bg-brand-primary-green/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="w-6 h-6 text-brand-primary-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-soft-white">Live Chat</h3>
                  <p className="text-brand-smoke-gray text-sm">Get instant help from our casino support team</p>
                  <Badge variant="outline" className="border-brand-primary-green text-brand-primary-green">
                    24/7 Available
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="bg-brand-primary-green/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-brand-primary-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-soft-white">Email Support</h3>
                  <p className="text-brand-smoke-gray text-sm">casino@ibetsports.ag</p>
                  <Badge variant="outline" className="border-brand-primary-green text-brand-primary-green">
                    Response within 2 hours
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="bg-brand-primary-green/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6 text-brand-primary-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-soft-white">Phone Support</h3>
                  <p className="text-brand-smoke-gray text-sm">+1-800-IBET-CASINO</p>
                  <Badge variant="outline" className="border-brand-primary-green text-brand-primary-green">
                    24/7 Available
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
