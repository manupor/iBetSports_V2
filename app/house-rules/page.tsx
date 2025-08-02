"use client"

import { Shield, AlertTriangle, Users, Clock, DollarSign, Gamepad2, Ban, CheckCircle } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function HouseRulesPage() {
  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      <TopNavigation />
      {/* Header Section */}
      <div className="bg-gradient-to-r from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black py-12 md:py-16">
        <div className="container mx-auto px-4 md:px:6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-brand-primary-green/20 p-4 rounded-full">
                <Shield className="w-12 h-12 text-brand-primary-green" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-soft-white">House Rules</h1>
            <p className="text-lg md:text-xl text-brand-smoke-gray max-w-3xl mx-auto">
              Fair play guidelines and regulations that govern all gaming activities at IBetSports
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Introduction */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="bg-brand-primary-green/20 p-3 rounded-lg flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-brand-primary-green" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-brand-soft-white mb-4">Important Notice</h2>
                <p className="text-brand-smoke-gray leading-relaxed">
                  These House Rules apply to all games and betting activities on IBetSports. By participating in any
                  gaming activity, you agree to abide by these rules. Violation of these rules may result in account
                  suspension, bet cancellation, or other disciplinary actions as deemed appropriate by IBetSports
                  management.
                </p>
              </div>
            </div>
          </div>

          {/* General Rules */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-8 h-8 text-brand-primary-green" />
              <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white">General Rules</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold text-brand-primary-green mb-4">Account Requirements</h3>
                <ul className="space-y-2 text-brand-smoke-gray">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-brand-primary-green mt-1 flex-shrink-0" />
                    <span>Players must be 18 years or older</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-brand-primary-green mt-1 flex-shrink-0" />
                    <span>One account per person, household, or IP address</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-brand-primary-green mt-1 flex-shrink-0" />
                    <span>Account verification required before withdrawals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-brand-primary-green mt-1 flex-shrink-0" />
                    <span>Accurate personal information must be provided</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold text-brand-primary-green mb-4">Prohibited Activities</h3>
                <ul className="space-y-2 text-brand-smoke-gray">
                  <li className="flex items-start space-x-2">
                    <Ban className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Collusion or match-fixing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Ban className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Use of automated betting systems or bots</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Ban className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Bonus abuse or exploitation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Ban className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Money laundering or fraudulent activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Betting Rules */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <DollarSign className="w-8 h-8 text-brand-primary-green" />
              <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white">Betting Rules</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold text-brand-primary-green mb-4">Bet Acceptance</h3>
                <ul className="space-y-3 text-brand-smoke-gray text-sm">
                  <li>• All bets are subject to acceptance by IBetSports</li>
                  <li>• Minimum and maximum bet limits apply</li>
                  <li>• Bets placed after event start may be voided</li>
                  <li>• Incorrect odds may result in bet cancellation</li>
                  <li>• System malfunctions void affected bets</li>
                </ul>
              </div>

              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold text-brand-primary-green mb-4">Settlement Rules</h3>
                <ul className="space-y-3 text-brand-smoke-gray text-sm">
                  <li>• Official results determine bet outcomes</li>
                  <li>• Dead heat rules apply where applicable</li>
                  <li>• Postponed events may void bets</li>
                  <li>• Rule 4 deductions may apply in horse racing</li>
                  <li>• Disputes resolved using official sources</li>
                </ul>
              </div>

              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold text-brand-primary-green mb-4">Payout Limits</h3>
                <ul className="space-y-3 text-brand-smoke-gray text-sm">
                  <li>• Maximum daily payout: $500,000</li>
                  <li>• Maximum single bet payout: $100,000</li>
                  <li>• Progressive jackpots excluded from limits</li>
                  <li>• VIP players may have higher limits</li>
                  <li>• Limits may vary by sport or game type</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Casino Rules */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Gamepad2 className="w-8 h-8 text-brand-primary-green" />
              <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white">Casino Rules</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold text-brand-primary-green mb-4">Game Integrity</h3>
                <div className="space-y-4 text-brand-smoke-gray">
                  <p>
                    All casino games use certified Random Number Generators (RNG) to ensure fair and random outcomes.
                    Game results cannot be predicted or manipulated.
                  </p>
                  <ul className="space-y-2">
                    <li>• RNG testing performed by independent auditors</li>
                    <li>• Game history available for player review</li>
                    <li>• Malfunction voids all pays and plays</li>
                    <li>• Return to Player (RTP) rates clearly displayed</li>
                  </ul>
                </div>
              </div>

              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold text-brand-primary-green mb-4">Live Casino Rules</h3>
                <div className="space-y-4 text-brand-smoke-gray">
                  <p>
                    Live casino games are conducted by professional dealers in real-time. Standard casino rules apply
                    with additional live gaming protocols.
                  </p>
                  <ul className="space-y-2">
                    <li>• Dealer decisions are final</li>
                    <li>• Chat must remain respectful and appropriate</li>
                    <li>• Video feed interruptions may void rounds</li>
                    <li>• Side bets subject to table limits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Time Limits and Disputes */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-8 h-8 text-brand-primary-green" />
              <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white">Time Limits & Disputes</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-primary-green mb-4">Dispute Resolution</h3>
                <div className="space-y-4 text-brand-smoke-gray">
                  <p>
                    All disputes must be reported within 30 days of the incident. IBetSports will investigate all
                    legitimate complaints fairly and promptly.
                  </p>
                  <div className="bg-brand-charcoal-black/50 rounded-lg p-4">
                    <h4 className="font-bold text-brand-soft-white mb-2">Dispute Process:</h4>
                    <ol className="space-y-1 text-sm">
                      <li>1. Contact customer support immediately</li>
                      <li>2. Provide detailed information and evidence</li>
                      <li>3. Allow 48-72 hours for investigation</li>
                      <li>4. Receive written resolution decision</li>
                      <li>5. Escalate to management if unsatisfied</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-primary-green mb-4">Important Time Limits</h3>
                <div className="space-y-4">
                  <div className="bg-brand-charcoal-black/50 rounded-lg p-4">
                    <h4 className="font-bold text-brand-soft-white mb-2">Bet Settlement:</h4>
                    <ul className="space-y-1 text-sm text-brand-smoke-gray">
                      <li>• Sports bets: Within 24 hours of event completion</li>
                      <li>• Casino games: Immediately after round completion</li>
                      <li>• Live betting: Real-time settlement</li>
                    </ul>
                  </div>
                  <div className="bg-brand-charcoal-black/50 rounded-lg p-4">
                    <h4 className="font-bold text-brand-soft-white mb-2">Account Actions:</h4>
                    <ul className="space-y-1 text-sm text-brand-smoke-gray">
                      <li>• Withdrawals: 1-7 business days</li>
                      <li>• Verification: Up to 72 hours</li>
                      <li>• Bonus expiry: As specified in terms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-brand-primary-green/10 to-brand-primary-green/5 rounded-lg p-6 md:p-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white mb-4">
                Questions About House Rules?
              </h2>
              <p className="text-brand-smoke-gray mb-6 max-w-2xl mx-auto">
                Our customer support team is available 24/7 to help clarify any house rules or resolve disputes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/live-chat"
                  className="bg-brand-primary-green hover:bg-brand-primary-green/90 text-brand-charcoal-black font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Live Chat Support
                </a>
                <a
                  href="mailto:support@ibetsports.ag"
                  className="bg-brand-charcoal-black-secondary hover:bg-brand-charcoal-black border border-brand-primary-green text-brand-primary-green font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
