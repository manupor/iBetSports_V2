"use client"

import { Shield, BarChart3, Users, CheckCircle, ExternalLink, Clock, Award } from "lucide-react"
import Link from "next/link"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function FairnessRNGPage() {
  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      <TopNavigation />
      {/* Header */}
      <div className="bg-brand-charcoal-black-secondary border-b border-brand-smoke-gray/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-brand-primary-green" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-brand-soft-white">Fairness & RNG Testing Methods</h1>
              <p className="text-brand-smoke-gray mt-1">Ensuring fair play and random outcomes for all players</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-brand-primary-green mb-4">
              Our Commitment to Fair Gaming
            </h2>
            <p className="text-brand-soft-white leading-relaxed mb-4">
              At IBetSports, we are committed to providing a fair and transparent gaming environment for all our
              players. Our games use certified Random Number Generators (RNG) and undergo regular testing by independent
              third-party auditors to ensure complete fairness and randomness.
            </p>
            <p className="text-brand-smoke-gray leading-relaxed">
              We believe that trust is the foundation of any successful gaming platform, which is why we maintain the
              highest standards of fairness and transparency in all our operations.
            </p>
          </div>

          {/* RNG Technology */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-brand-primary-green" />
              <h2 className="text-xl md:text-2xl font-bold text-brand-soft-white">
                Random Number Generator (RNG) Technology
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-brand-primary-green mb-3">What is RNG?</h3>
                <p className="text-brand-soft-white leading-relaxed">
                  A Random Number Generator (RNG) is a computer algorithm that produces sequences of numbers that lack
                  any pattern and are statistically random. In online gaming, RNGs ensure that game outcomes are
                  completely unpredictable and fair for all players.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-primary-green mb-3">How Our RNG Works</h3>
                <ul className="space-y-2 text-brand-soft-white">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                    <span>Uses cryptographically secure algorithms to generate truly random numbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                    <span>Seeded with unpredictable data sources including system time and hardware entropy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                    <span>Generates millions of random numbers per second, even when games are not being played</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                    <span>Cannot be predicted, influenced, or manipulated by players or operators</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testing Methods */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-brand-primary-green" />
              <h2 className="text-xl md:text-2xl font-bold text-brand-soft-white">
                Independent Testing & Certification
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-primary-green">Testing Procedures</h3>
                <ul className="space-y-3 text-brand-soft-white">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Statistical Analysis:</strong> Millions of game rounds analyzed for randomness patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Chi-Square Tests:</strong> Mathematical verification of random distribution
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Frequency Analysis:</strong> Ensuring all outcomes occur at expected rates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Correlation Testing:</strong> Verifying independence between game rounds
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-primary-green">Certification Bodies</h3>
                <ul className="space-y-3 text-brand-soft-white">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>eCOGRA:</strong> eCommerce Online Gaming Regulation and Assurance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>iTech Labs:</strong> Independent testing laboratory for online gaming
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>GLI:</strong> Gaming Laboratories International certification
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>TST:</strong> Technical Systems Testing for gaming compliance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Game Categories */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-brand-soft-white mb-6">RNG Testing by Game Category</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-primary-green mb-3">Slot Games</h3>
                <ul className="space-y-2 text-sm text-brand-soft-white">
                  <li>• Reel spin outcomes</li>
                  <li>• Bonus feature triggers</li>
                  <li>• Progressive jackpot selection</li>
                  <li>• Symbol positioning</li>
                </ul>
              </div>

              <div className="bg-brand-charcoal-black/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-primary-green mb-3">Table Games</h3>
                <ul className="space-y-2 text-sm text-brand-soft-white">
                  <li>• Card shuffling algorithms</li>
                  <li>• Dice roll outcomes</li>
                  <li>• Roulette wheel spins</li>
                  <li>• Deal sequences</li>
                </ul>
              </div>

              <div className="bg-brand-charcoal-black/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-primary-green mb-3">Live Casino</h3>
                <ul className="space-y-2 text-sm text-brand-soft-white">
                  <li>• Physical equipment monitoring</li>
                  <li>• Real-time result verification</li>
                  <li>• Camera angle integrity</li>
                  <li>• Dealer action validation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testing Schedule */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-brand-primary-green" />
              <h2 className="text-xl md:text-2xl font-bold text-brand-soft-white">Testing Schedule & Frequency</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-brand-primary-green mb-4">Regular Testing</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-brand-smoke-gray/20">
                    <span className="text-brand-soft-white">Daily Monitoring</span>
                    <span className="text-brand-primary-green font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-brand-smoke-gray/20">
                    <span className="text-brand-soft-white">Weekly Analysis</span>
                    <span className="text-brand-primary-green font-medium">Every 7 Days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-brand-smoke-gray/20">
                    <span className="text-brand-soft-white">Monthly Audit</span>
                    <span className="text-brand-primary-green font-medium">Every 30 Days</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-brand-soft-white">Annual Certification</span>
                    <span className="text-brand-primary-green font-medium">Yearly</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-primary-green mb-4">Special Testing</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-brand-smoke-gray/20">
                    <span className="text-brand-soft-white">New Game Launch</span>
                    <span className="text-brand-primary-green font-medium">Pre-Release</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-brand-smoke-gray/20">
                    <span className="text-brand-soft-white">System Updates</span>
                    <span className="text-brand-primary-green font-medium">Post-Update</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-brand-smoke-gray/20">
                    <span className="text-brand-soft-white">Player Complaints</span>
                    <span className="text-brand-primary-green font-medium">As Needed</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-brand-soft-white">Regulatory Review</span>
                    <span className="text-brand-primary-green font-medium">On Demand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Player Rights */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-brand-primary-green" />
              <h2 className="text-xl md:text-2xl font-bold text-brand-soft-white">Player Rights & Transparency</h2>
            </div>

            <div className="space-y-4">
              <p className="text-brand-soft-white leading-relaxed">As a player at IBetSports, you have the right to:</p>

              <ul className="space-y-3 text-brand-soft-white">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Request information about our RNG testing procedures and results</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Access your complete gaming history and transaction records</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Report any concerns about game fairness to our support team</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>View certification documents from our independent testing laboratories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Receive detailed explanations of how specific games determine outcomes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Certificates & Reports */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-brand-soft-white mb-6">Certificates & Testing Reports</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-primary-green">Available Documents</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center justify-between p-3 bg-brand-charcoal-black/50 rounded-lg hover:bg-brand-charcoal-black/70 transition-colors"
                  >
                    <span className="text-brand-soft-white">RNG Certification 2024</span>
                    <ExternalLink className="w-4 h-4 text-brand-primary-green" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between p-3 bg-brand-charcoal-black/50 rounded-lg hover:bg-brand-charcoal-black/70 transition-colors"
                  >
                    <span className="text-brand-soft-white">Monthly Audit Report</span>
                    <ExternalLink className="w-4 h-4 text-brand-primary-green" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between p-3 bg-brand-charcoal-black/50 rounded-lg hover:bg-brand-charcoal-black/70 transition-colors"
                  >
                    <span className="text-brand-soft-white">Game Fairness Statistics</span>
                    <ExternalLink className="w-4 h-4 text-brand-primary-green" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-primary-green">Testing Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-brand-smoke-gray/20">
                    <span className="text-brand-soft-white">Games Tested</span>
                    <span className="text-brand-primary-green font-medium">500+</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-brand-smoke-gray/20">
                    <span className="text-brand-soft-white">Test Rounds Completed</span>
                    <span className="text-brand-primary-green font-medium">10M+</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-brand-smoke-gray/20">
                    <span className="text-brand-soft-white">Certification Bodies</span>
                    <span className="text-brand-primary-green font-medium">4</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-brand-soft-white">Pass Rate</span>
                    <span className="text-brand-primary-green font-medium">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-brand-primary-green/10 border border-brand-primary-green/20 rounded-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-brand-soft-white mb-4">Questions About Game Fairness?</h2>
            <p className="text-brand-soft-white mb-6 leading-relaxed">
              If you have any questions about our RNG testing methods, game fairness, or would like to request
              additional information about our certification processes, please don't hesitate to contact us.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="mailto:fairness@ibetsports.ag"
                className="flex items-center gap-3 p-4 bg-brand-charcoal-black-secondary rounded-lg hover:bg-brand-charcoal-black/70 transition-colors"
              >
                <div className="w-10 h-10 bg-brand-primary-green/20 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-brand-primary-green" />
                </div>
                <div>
                  <div className="font-medium text-brand-soft-white">Email Support</div>
                  <div className="text-sm text-brand-smoke-gray">fairness@ibetsports.ag</div>
                </div>
              </a>

              <Link
                href="/live-chat"
                className="flex items-center gap-3 p-4 bg-brand-charcoal-black-secondary rounded-lg hover:bg-brand-charcoal-black/70 transition-colors"
              >
                <div className="w-10 h-10 bg-brand-primary-green/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-brand-primary-green" />
                </div>
                <div>
                  <div className="font-medium text-brand-soft-white">Live Chat</div>
                  <div className="text-sm text-brand-smoke-gray">Available 24/7</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
