"use client"

import { TopNavigation } from "@/components/top-navigation"
import { Shield, Clock, AlertTriangle, Trophy, FileText, Users, Phone, Mail, MessageCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export default function SportsRulesPage() {
  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      <TopNavigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-brand-primary-green/20 p-4 rounded-full">
                <Trophy className="w-12 h-12 text-brand-primary-green" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-brand-soft-white">
              Sports Rules
            </h1>
            <p className="text-lg sm:text-xl text-brand-smoke-gray max-w-3xl mx-auto leading-relaxed">
              Comprehensive sports betting rules and regulations for all sporting events at IBetSports
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          {/* Related to Sporting Events */}
          <div className="mb-12">
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 sm:p-8 border border-brand-smoke-gray/20">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-brand-primary-green mr-3" />
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-soft-white">Related to Sporting Events</h2>
              </div>

              <div className="space-y-4 text-brand-smoke-gray">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    All sporting events must be played on date and site scheduled unless otherwise specified.
                    Exceptions: Auto Racing, Golf, Tennis, MMA, UFC and Boxing.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    Auto Racing, Golf, Tennis, MMA, UFC and Boxing are{" "}
                    <strong className="text-brand-soft-white">not subject to this rule</strong>. The wagers will remain
                    valid subject to the Ruling Body of each sport cancelling the event.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    If any event is postponed and/or rescheduled, the event will automatically constitute "no action".
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>We do not recognize suspended games, protests or overturned decisions for wagering purposes.</p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Las Vegas rules apply to any wager not covered by rules and regulations in here.</p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    For Cycling events riders might be issued the same time but they will be issued an order of finish
                    that is decided by photo finish. Results will be taken from the official finishing position in the
                    events main web site.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    For all props on players or teams we will use the official website of the sporting event to declare
                    the winner. Examples: WWW.NFL.COM, WWW.NBA.COM etc. For events that do not have an associated
                    website we will use WWW.ESPN.COM for results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* General Sports Rules */}
          <div className="mb-12">
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 sm:p-8 border border-brand-smoke-gray/20">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-brand-accent-orange mr-3" />
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-soft-white">For All Sports and Events</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h3 className="font-bold text-red-400 mb-2">BAD LINE RULE</h3>
                  <p className="text-brand-smoke-gray">
                    We reserve the right to cancel any wager accepted when the line was obviously posted incorrectly.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h3 className="font-bold text-red-400 mb-2">CHEATING RULE</h3>
                  <p className="text-brand-smoke-gray">
                    Wagers will also be cancelled when there is proof of cheating, attempted hacking or knowledgeable
                    deceit.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h3 className="font-bold text-red-400 mb-2">BAD TIME RULE</h3>
                  <p className="text-brand-smoke-gray">
                    We also reserve the right to cancel wagers placed after a game is final or an outcome can be deduced
                    from the score.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h3 className="font-bold text-red-400 mb-2">WRONG MATCHUP RULE</h3>
                  <p className="text-brand-smoke-gray">
                    Matchups that are posted incorrectly will be automatically cancelled. These include wrong
                    participants and matchup incorrectly entered into the system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Official Game Times Table */}
          <div className="mb-12">
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 sm:p-8 border border-brand-smoke-gray/20">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-brand-primary-green mr-3" />
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-soft-white">
                  Official Game Times for Betting
                </h2>
              </div>

              <p className="text-brand-smoke-gray mb-6">
                The following table tells you when a game becomes official for betting purposes:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-brand-primary-green/20">
                      <th className="border border-brand-smoke-gray/30 px-4 py-3 text-left text-brand-soft-white font-bold">
                        Sport
                      </th>
                      <th className="border border-brand-smoke-gray/30 px-4 py-3 text-left text-brand-soft-white font-bold">
                        Official Time Requirement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-brand-smoke-gray/10">
                      <td className="border border-brand-smoke-gray/30 px-4 py-3 text-brand-soft-white font-medium">
                        Pro Football
                      </td>
                      <td className="border border-brand-smoke-gray/30 px-4 py-3 text-brand-smoke-gray">
                        55 minutes of play
                      </td>
                    </tr>
                    <tr className="hover:bg-brand-smoke-gray/10">
                      <td className="border border-brand-smoke-gray/30 px-4 py-3 text-brand-soft-white font-medium">
                        College Football
                      </td>
                      <td className="border border-brand-smoke-gray/30 px-4 py-3 text-brand-smoke-gray">
                        55 minutes of play
                      </td>
                    </tr>
                    <tr className="hover:bg-brand-smoke-gray/10">
                      <td className="border border-brand-smoke-gray/30 px-4 py-3 text-brand-soft-white font-medium">
                        Basketball
                      </td>
                      <td className="border border-brand-smoke-gray/30 px-4 py-3 text-brand-smoke-gray">
                        All competitions/leagues except the NBA must go at least 35 minutes for action unless otherwise
                        specified.
                      </td>
                    </tr>
                    <tr className="hover:bg-brand-smoke-gray/10">
                      <td className="border border-brand-smoke-gray/30 px-4 py-3 text-brand-soft-white font-medium">
                        Pro Basketball
                      </td>
                      <td className="border border-brand-smoke-gray/30 px-4 py-3 text-brand-smoke-gray">
                        43 minutes of play
                      </td>
                    </tr>
                    <tr className="hover:bg-brand-smoke-gray/10">
                      <td className="border border-brand-smoke-gray/30 px-4 py-3 text-brand-soft-white font-medium">
                        College Basketball
                      </td>
                      <td className="border border-brand-smoke-gray/30 px-4 py-3 text-brand-smoke-gray">
                        35 minutes of play
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Additional Sports Rules */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-brand-smoke-gray/20">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-brand-primary-green mr-3" />
                <h3 className="text-xl font-bold text-brand-soft-white">Bet Settlement</h3>
              </div>
              <ul className="space-y-2 text-brand-smoke-gray">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-brand-primary-green rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>All bets are settled based on official results</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-brand-primary-green rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Overtime counts for all bets unless specified</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-brand-primary-green rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Dead heat rules apply where applicable</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-brand-primary-green rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Maximum payout limits may apply</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-brand-smoke-gray/20">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-brand-accent-orange mr-3" />
                <h3 className="text-xl font-bold text-brand-soft-white">Player Props</h3>
              </div>
              <ul className="space-y-2 text-brand-smoke-gray">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-brand-accent-orange rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Player must start the game for action</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-brand-accent-orange rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Statistics from official league sources</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-brand-accent-orange rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Regular season stats only unless specified</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-brand-accent-orange rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Voided if player doesn't participate</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-brand-primary-green/10 to-brand-accent-orange/10 rounded-lg p-6 sm:p-8 border border-brand-primary-green/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-soft-white mb-2">
                Need Clarification on Sports Rules?
              </h2>
              <p className="text-brand-smoke-gray">
                Our support team is available 24/7 to help with any questions about sports betting rules
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-brand-charcoal-black-secondary rounded-lg p-4 text-center border border-brand-smoke-gray/20">
                <MessageCircle className="w-8 h-8 text-brand-primary-green mx-auto mb-2" />
                <h3 className="font-bold text-brand-soft-white mb-1">Live Chat</h3>
                <p className="text-sm text-brand-smoke-gray">Available 24/7</p>
              </div>

              <div className="bg-brand-charcoal-black-secondary rounded-lg p-4 text-center border border-brand-smoke-gray/20">
                <Mail className="w-8 h-8 text-brand-accent-orange mx-auto mb-2" />
                <h3 className="font-bold text-brand-soft-white mb-1">Email Support</h3>
                <p className="text-sm text-brand-smoke-gray">support@ibetsports.ag</p>
              </div>

              <div className="bg-brand-charcoal-black-secondary rounded-lg p-4 text-center border border-brand-smoke-gray/20">
                <Phone className="w-8 h-8 text-brand-primary-green mx-auto mb-2" />
                <h3 className="font-bold text-brand-soft-white mb-1">Phone Support</h3>
                <p className="text-sm text-brand-smoke-gray">1-800-IBET-SPORTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
