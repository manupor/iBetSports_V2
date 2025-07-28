"use client"

import { ArrowLeft, Scale, FileText, Clock, CheckCircle, AlertTriangle, Mail, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export default function DisputeResolutionPage() {
  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      {/* Header */}
      <div className="bg-brand-charcoal-black-secondary border-b border-brand-smoke-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-brand-primary-green hover:text-brand-primary-green/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-soft-white mt-4">Dispute Resolution</h1>
          <p className="text-brand-smoke-gray mt-2 text-sm sm:text-base">
            Fair and transparent resolution process for all player concerns
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Introduction */}
        <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex items-start gap-4">
            <Scale className="w-8 h-8 text-brand-primary-green flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-soft-white mb-4">
                Our Commitment to Fair Resolution
              </h2>
              <p className="text-brand-smoke-gray leading-relaxed mb-4">
                At IBetSports, we are committed to providing a fair, transparent, and efficient dispute resolution
                process. We understand that disagreements may occasionally arise, and we have established comprehensive
                procedures to address and resolve any concerns you may have.
              </p>
              <p className="text-brand-smoke-gray leading-relaxed">
                Our dispute resolution process is designed to be impartial, thorough, and conducted in accordance with
                industry best practices and regulatory requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Dispute Resolution Process */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-soft-white mb-8 text-center">
            How Our Dispute Resolution Process Works
          </h2>

          <div className="grid gap-6 md:gap-8">
            {/* Step 1 */}
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-primary-green rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-charcoal-black font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-soft-white mb-3">Initial Contact & Documentation</h3>
                  <p className="text-brand-smoke-gray mb-4">
                    Submit your dispute through our customer support channels with detailed information about your
                    concern. Include relevant documentation, transaction details, and any supporting evidence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-brand-primary-green/20 text-brand-primary-green px-3 py-1 rounded-full text-sm">
                      Email Support
                    </span>
                    <span className="bg-brand-primary-green/20 text-brand-primary-green px-3 py-1 rounded-full text-sm">
                      Live Chat
                    </span>
                    <span className="bg-brand-primary-green/20 text-brand-primary-green px-3 py-1 rounded-full text-sm">
                      Documentation Required
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-primary-green rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-charcoal-black font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-soft-white mb-3">Investigation & Review</h3>
                  <p className="text-brand-smoke-gray mb-4">
                    Our specialized dispute resolution team conducts a thorough investigation of your case. We review
                    all relevant information, transaction logs, game records, and applicable terms and conditions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      Thorough Investigation
                    </span>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Expert Review</span>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      Impartial Analysis
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-primary-green rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-charcoal-black font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-soft-white mb-3">Resolution & Communication</h3>
                  <p className="text-brand-smoke-gray mb-4">
                    We provide a detailed response with our findings and resolution. If the dispute is resolved in your
                    favor, appropriate action will be taken immediately. All decisions are communicated clearly with
                    full explanations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      Clear Communication
                    </span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      Immediate Action
                    </span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      Full Explanation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Disputes */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-soft-white mb-8">Types of Disputes We Handle</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
              <FileText className="w-8 h-8 text-brand-primary-green mb-4" />
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Account Issues</h3>
              <p className="text-brand-smoke-gray text-sm">
                Account access, verification problems, unauthorized access, and account closure disputes.
              </p>
            </div>

            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
              <Clock className="w-8 h-8 text-brand-primary-green mb-4" />
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Payment Disputes</h3>
              <p className="text-brand-smoke-gray text-sm">
                Deposit and withdrawal issues, payment processing delays, and transaction discrepancies.
              </p>
            </div>

            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-brand-primary-green mb-4" />
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Game Results</h3>
              <p className="text-brand-smoke-gray text-sm">
                Betting disputes, game malfunctions, incorrect odds, and payout discrepancies.
              </p>
            </div>

            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
              <AlertTriangle className="w-8 h-8 text-brand-primary-green mb-4" />
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Bonus Issues</h3>
              <p className="text-brand-smoke-gray text-sm">
                Bonus crediting problems, wagering requirement disputes, and promotional offer concerns.
              </p>
            </div>

            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
              <Scale className="w-8 h-8 text-brand-primary-green mb-4" />
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Terms Violations</h3>
              <p className="text-brand-smoke-gray text-sm">
                Disputes regarding terms and conditions interpretations and policy enforcement.
              </p>
            </div>

            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6">
              <MessageCircle className="w-8 h-8 text-brand-primary-green mb-4" />
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Service Quality</h3>
              <p className="text-brand-smoke-gray text-sm">
                Customer service complaints, technical issues, and general service quality concerns.
              </p>
            </div>
          </div>
        </div>

        {/* Response Times */}
        <div className="bg-gradient-to-r from-brand-primary-green/10 to-blue-500/10 rounded-lg p-6 sm:p-8 mb-12">
          <h2 className="text-2xl font-bold text-brand-soft-white mb-6">Response Times</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary-green mb-2">24 Hours</div>
              <div className="text-brand-soft-white font-medium mb-1">Initial Response</div>
              <div className="text-brand-smoke-gray text-sm">Acknowledgment of your dispute</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary-green mb-2">3-5 Days</div>
              <div className="text-brand-soft-white font-medium mb-1">Investigation</div>
              <div className="text-brand-smoke-gray text-sm">Thorough review and analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary-green mb-2">7 Days</div>
              <div className="text-brand-soft-white font-medium mb-1">Final Resolution</div>
              <div className="text-brand-smoke-gray text-sm">Complete resolution and response</div>
            </div>
          </div>
        </div>

        {/* External Mediation */}
        <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 sm:p-8 mb-12">
          <h2 className="text-2xl font-bold text-brand-soft-white mb-6">External Mediation</h2>
          <p className="text-brand-smoke-gray mb-6">
            If you are not satisfied with our internal dispute resolution process, you have the right to escalate your
            dispute to an independent third-party mediator or regulatory authority.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-brand-smoke-gray/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Gaming Commission</h3>
              <p className="text-brand-smoke-gray text-sm mb-3">
                Contact our licensing authority for regulatory disputes and compliance issues.
              </p>
              <a
                href="mailto:complaints@gamingcommission.gov"
                className="text-brand-primary-green hover:text-brand-primary-green/80 text-sm font-medium"
              >
                complaints@gamingcommission.gov
              </a>
            </div>

            <div className="border border-brand-smoke-gray/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Independent Mediator</h3>
              <p className="text-brand-smoke-gray text-sm mb-3">
                Third-party mediation services for unresolved disputes and neutral arbitration.
              </p>
              <a
                href="mailto:mediation@disputeresolution.org"
                className="text-brand-primary-green hover:text-brand-primary-green/80 text-sm font-medium"
              >
                mediation@disputeresolution.org
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-brand-soft-white mb-6">Contact Our Dispute Resolution Team</h2>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-brand-primary-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-brand-soft-white mb-2">Email Support</h3>
                <p className="text-brand-smoke-gray text-sm mb-2">Send detailed dispute information</p>
                <a
                  href="mailto:disputes@ibetsports.ag"
                  className="text-brand-primary-green hover:text-brand-primary-green/80 font-medium"
                >
                  disputes@ibetsports.ag
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageCircle className="w-6 h-6 text-brand-primary-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-brand-soft-white mb-2">Live Chat</h3>
                <p className="text-brand-smoke-gray text-sm mb-2">Immediate assistance available</p>
                <Link
                  href="/live-chat"
                  className="text-brand-primary-green hover:text-brand-primary-green/80 font-medium"
                >
                  Start Live Chat
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-brand-primary-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-brand-soft-white mb-2">Phone Support</h3>
                <p className="text-brand-smoke-gray text-sm mb-2">Speak directly with our team</p>
                <a
                  href="tel:+1-800-IBET-SPORTS"
                  className="text-brand-primary-green hover:text-brand-primary-green/80 font-medium"
                >
                  +1-800-IBET-SPORTS
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mt-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-brand-soft-white mb-2">Important Notice</h3>
              <p className="text-brand-smoke-gray text-sm">
                All disputes must be submitted within 30 days of the incident. Please ensure you provide complete and
                accurate information to expedite the resolution process. Our dispute resolution service is provided free
                of charge to all players.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
