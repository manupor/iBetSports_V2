"use client"

import { TopNavigation } from "@/components/top-navigation"
import { CreditCard, DollarSign, Gift, Shield, Clock, CheckCircle, AlertTriangle, Users, FileText } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function AccountPayoutsPage() {
  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      <TopNavigation />
      {/* Header */}
      <div className="bg-brand-charcoal-black-secondary border-b border-brand-smoke-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-soft-white mb-4">
            Account, Payouts & Bonuses
          </h1>
          <p className="text-lg text-brand-smoke-gray max-w-3xl">
            Comprehensive information about managing your account, withdrawal processes, and bonus terms at IBetSports.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Account Management Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-brand-primary-green" />
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-soft-white">Account Management</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-brand-smoke-gray/20">
              <h3 className="text-xl font-semibold text-brand-primary-green mb-4">Account Verification</h3>
              <ul className="space-y-3 text-brand-smoke-gray">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Government-issued photo ID required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Proof of address (utility bill or bank statement)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Payment method verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Verification typically completed within 24-48 hours</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-brand-smoke-gray/20">
              <h3 className="text-xl font-semibold text-brand-primary-green mb-4">Account Security</h3>
              <ul className="space-y-3 text-brand-smoke-gray">
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Two-factor authentication (2FA) available</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>SSL encryption for all transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Regular security audits and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Responsible gaming tools and limits</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Payouts Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-8 h-8 text-brand-primary-green" />
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-soft-white">Payout Information</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-brand-smoke-gray/20">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-brand-primary-green" />
                <h3 className="text-xl font-semibold text-brand-primary-green">Processing Times</h3>
              </div>
              <div className="space-y-3 text-brand-smoke-gray">
                <div className="flex justify-between">
                  <span>Cryptocurrency:</span>
                  <span className="text-brand-soft-white">1-2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Bank Transfer:</span>
                  <span className="text-brand-soft-white">3-5 business days</span>
                </div>
                <div className="flex justify-between">
                  <span>E-wallets:</span>
                  <span className="text-brand-soft-white">24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Credit/Debit Cards:</span>
                  <span className="text-brand-soft-white">3-7 business days</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-brand-smoke-gray/20">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-brand-primary-green" />
                <h3 className="text-xl font-semibold text-brand-primary-green">Withdrawal Limits</h3>
              </div>
              <div className="space-y-3 text-brand-smoke-gray">
                <div className="flex justify-between">
                  <span>Minimum:</span>
                  <span className="text-brand-soft-white">$20</span>
                </div>
                <div className="flex justify-between">
                  <span>Daily Maximum:</span>
                  <span className="text-brand-soft-white">$10,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekly Maximum:</span>
                  <span className="text-brand-soft-white">$50,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Maximum:</span>
                  <span className="text-brand-soft-white">$200,000</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-brand-smoke-gray/20">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-brand-primary-green" />
                <h3 className="text-xl font-semibold text-brand-primary-green">Required Documents</h3>
              </div>
              <ul className="space-y-2 text-brand-smoke-gray">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-primary-green mt-1 flex-shrink-0" />
                  <span>Valid government ID</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-primary-green mt-1 flex-shrink-0" />
                  <span>Proof of address</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-primary-green mt-1 flex-shrink-0" />
                  <span>Payment method verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-primary-green mt-1 flex-shrink-0" />
                  <span>Source of funds (if required)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">Important Payout Information</h3>
                <ul className="space-y-2 text-brand-smoke-gray">
                  <li>• All withdrawals must be made to the same payment method used for deposits</li>
                  <li>• Account verification is required before first withdrawal</li>
                  <li>• Bonus wagering requirements must be met before withdrawal</li>
                  <li>• Additional verification may be required for large withdrawals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bonuses Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Gift className="w-8 h-8 text-brand-primary-green" />
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-soft-white">Bonus Terms & Conditions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-brand-smoke-gray/20">
              <h3 className="text-xl font-semibold text-brand-primary-green mb-4">Welcome Bonus</h3>
              <div className="space-y-3 text-brand-smoke-gray">
                <div className="flex justify-between">
                  <span>Sports Bonus:</span>
                  <span className="text-brand-soft-white">125% up to $2,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Casino Bonus:</span>
                  <span className="text-brand-soft-white">200% up to $1,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Wagering Requirement:</span>
                  <span className="text-brand-soft-white">10x (Sports) / 35x (Casino)</span>
                </div>
                <div className="flex justify-between">
                  <span>Minimum Deposit:</span>
                  <span className="text-brand-soft-white">$20</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-brand-smoke-gray/20">
              <h3 className="text-xl font-semibold text-brand-primary-green mb-4">Ongoing Promotions</h3>
              <ul className="space-y-3 text-brand-smoke-gray">
                <li className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Weekly reload bonuses up to 50%</span>
                </li>
                <li className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Cashback offers on losses</span>
                </li>
                <li className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>VIP program with exclusive rewards</span>
                </li>
                <li className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                  <span>Refer-a-friend bonuses</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-brand-smoke-gray/20">
            <h3 className="text-xl font-semibold text-brand-primary-green mb-4">General Bonus Terms</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-brand-soft-white mb-3">Eligibility Requirements</h4>
                <ul className="space-y-2 text-brand-smoke-gray">
                  <li>• Must be 18+ years old</li>
                  <li>• One bonus per household/IP address</li>
                  <li>• Account must be verified</li>
                  <li>• Minimum deposit requirements apply</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-brand-soft-white mb-3">Wagering Contributions</h4>
                <div className="space-y-2 text-brand-smoke-gray">
                  <div className="flex justify-between">
                    <span>Slots:</span>
                    <span className="text-brand-soft-white">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Table Games:</span>
                    <span className="text-brand-soft-white">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sports Betting:</span>
                    <span className="text-brand-soft-white">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Live Casino:</span>
                    <span className="text-brand-soft-white">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-brand-charcoal-black-secondary rounded-lg p-8 border border-brand-smoke-gray/20">
          <h2 className="text-2xl font-bold text-brand-soft-white mb-6">Need Help with Your Account?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-brand-primary-green" />
              </div>
              <h3 className="font-semibold text-brand-soft-white mb-2">Email Support</h3>
              <p className="text-brand-smoke-gray mb-3">Get detailed help via email</p>
              <a
                href="mailto:support@ibetsports.ag"
                className="text-brand-primary-green hover:text-brand-primary-green/80 transition-colors"
              >
                support@ibetsports.ag
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-brand-primary-green" />
              </div>
              <h3 className="font-semibold text-brand-soft-white mb-2">Live Chat</h3>
              <p className="text-brand-smoke-gray mb-3">Instant support 24/7</p>
              <button className="text-brand-primary-green hover:text-brand-primary-green/80 transition-colors">
                Start Live Chat
              </button>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-brand-primary-green" />
              </div>
              <h3 className="font-semibold text-brand-soft-white mb-2">Help Center</h3>
              <p className="text-brand-smoke-gray mb-3">Browse our FAQ section</p>
              <Link
                href="/help-center"
                className="text-brand-primary-green hover:text-brand-primary-green/80 transition-colors"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
