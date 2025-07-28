"use client"

import { ArrowLeft, Shield, Clock, AlertTriangle, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function SelfExclusionPage() {
  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      {/* Header */}
      <div className="bg-brand-charcoal-black-secondary border-b border-brand-smoke-gray/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-brand-primary-green hover:text-brand-primary-green/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary-green/20 rounded-full mb-6">
            <Shield className="w-8 h-8 text-brand-primary-green" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Self-Exclusion</h1>
          <p className="text-lg text-brand-smoke-gray max-w-2xl mx-auto">
            Take control of your gaming experience with our comprehensive self-exclusion tools and responsible gaming
            features.
          </p>
        </div>

        {/* What is Self-Exclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-brand-primary-green">What is Self-Exclusion?</h2>
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8">
            <p className="text-brand-smoke-gray mb-4">
              Self-exclusion is a voluntary tool that allows you to restrict your access to IBetSports for a specified
              period. During this time, you will not be able to access your account, place bets, or participate in any
              gaming activities.
            </p>
            <p className="text-brand-smoke-gray">
              This feature is designed to help players who feel they need a break from gambling or want to limit their
              gaming activity for personal reasons.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-brand-primary-green">How Self-Exclusion Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
              <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-brand-primary-green font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold mb-3">Request Exclusion</h3>
              <p className="text-brand-smoke-gray text-sm">
                Contact our support team via email or live chat to request self-exclusion from your account.
              </p>
            </div>
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
              <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-brand-primary-green font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold mb-3">Choose Duration</h3>
              <p className="text-brand-smoke-gray text-sm">
                Select your preferred exclusion period: 24 hours, 7 days, 1 month, 3 months, 6 months, or 1 year.
              </p>
            </div>
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
              <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-brand-primary-green font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold mb-3">Account Blocked</h3>
              <p className="text-brand-smoke-gray text-sm">
                Your account will be immediately blocked for the selected period. No early reactivation is possible.
              </p>
            </div>
          </div>
        </section>

        {/* Exclusion Periods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-brand-primary-green">Available Exclusion Periods</h2>
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-brand-primary-green" />
                <span>24 Hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-brand-primary-green" />
                <span>7 Days</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-brand-primary-green" />
                <span>1 Month</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-brand-primary-green" />
                <span>3 Months</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-brand-primary-green" />
                <span>6 Months</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-brand-primary-green" />
                <span>1 Year</span>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-brand-primary-green">Important Information</h2>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-yellow-500 mb-3">Please Note:</h3>
                <ul className="space-y-2 text-brand-smoke-gray">
                  <li>• Self-exclusion cannot be reversed once activated</li>
                  <li>• You will not receive promotional materials during exclusion</li>
                  <li>• Any pending withdrawals will be processed normally</li>
                  <li>• Your account balance will remain secure during exclusion</li>
                  <li>• Creating new accounts during exclusion is prohibited</li>
                  <li>• Exclusion applies to all IBetSports services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Other Responsible Gaming Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-brand-primary-green">Other Responsible Gaming Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
              <h3 className="font-bold mb-3">Deposit Limits</h3>
              <p className="text-brand-smoke-gray text-sm mb-4">
                Set daily, weekly, or monthly deposit limits to control your spending.
              </p>
              <Link
                href="/responsible-gaming"
                className="text-brand-primary-green hover:text-brand-primary-green/80 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
              <h3 className="font-bold mb-3">Session Time Limits</h3>
              <p className="text-brand-smoke-gray text-sm mb-4">
                Set time limits for your gaming sessions to maintain healthy gaming habits.
              </p>
              <Link
                href="/responsible-gaming"
                className="text-brand-primary-green hover:text-brand-primary-green/80 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
              <h3 className="font-bold mb-3">Loss Limits</h3>
              <p className="text-brand-smoke-gray text-sm mb-4">
                Set maximum loss limits to prevent excessive losses during gaming sessions.
              </p>
              <Link
                href="/responsible-gaming"
                className="text-brand-primary-green hover:text-brand-primary-green/80 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
              <h3 className="font-bold mb-3">Reality Checks</h3>
              <p className="text-brand-smoke-gray text-sm mb-4">
                Receive regular reminders about your gaming time and spending.
              </p>
              <Link
                href="/responsible-gaming"
                className="text-brand-primary-green hover:text-brand-primary-green/80 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        {/* How to Request Self-Exclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-brand-primary-green">How to Request Self-Exclusion</h2>
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8">
            <p className="text-brand-smoke-gray mb-6">
              To request self-exclusion from IBetSports, please contact our support team using one of the following
              methods:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-primary-green" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email Support</h3>
                  <p className="text-brand-smoke-gray text-sm mb-2">Send an email with your self-exclusion request</p>
                  <a
                    href="mailto:support@ibetsports.ag"
                    className="text-brand-primary-green hover:text-brand-primary-green/80 text-sm font-medium"
                  >
                    support@ibetsports.ag
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-primary-green" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Live Chat</h3>
                  <p className="text-brand-smoke-gray text-sm mb-2">
                    Contact our live chat support for immediate assistance
                  </p>
                  <Link
                    href="/live-chat"
                    className="text-brand-primary-green hover:text-brand-primary-green/80 text-sm font-medium"
                  >
                    Start Live Chat →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-brand-primary-green">Need Additional Support?</h2>
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8">
            <p className="text-brand-smoke-gray mb-6">
              If you're struggling with gambling addiction, professional help is available. Here are some resources that
              can provide support:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Gambling Addiction Resources</h3>
                <ul className="space-y-2 text-brand-smoke-gray text-sm">
                  <li>
                    •{" "}
                    <a
                      href="https://www.gamblersanonymous.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-primary-green hover:underline"
                    >
                      Gamblers Anonymous
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://www.ncpgambling.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-primary-green hover:underline"
                    >
                      National Council on Problem Gambling
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://www.gamcare.org.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-primary-green hover:underline"
                    >
                      GamCare
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://www.begambleaware.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-primary-green hover:underline"
                    >
                      BeGambleAware
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Crisis Helplines</h3>
                <ul className="space-y-2 text-brand-smoke-gray text-sm">
                  <li>• National Problem Gambling Helpline: 1-800-522-4700</li>
                  <li>• Crisis Text Line: Text HOME to 741741</li>
                  <li>• National Suicide Prevention Lifeline: 988</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-brand-primary-green/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Take Control?</h2>
          <p className="text-brand-smoke-gray mb-6 max-w-2xl mx-auto">
            If you feel you need a break from gambling, don't hesitate to use our self-exclusion tools. Your wellbeing
            is our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/live-chat"
              className="bg-brand-primary-green text-brand-charcoal-black px-6 py-3 rounded-lg font-bold hover:bg-brand-primary-green/90 transition-colors"
            >
              Request Self-Exclusion
            </Link>
            <Link
              href="/responsible-gaming"
              className="border border-brand-primary-green text-brand-primary-green px-6 py-3 rounded-lg font-bold hover:bg-brand-primary-green/10 transition-colors"
            >
              View All Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
