"use client"

import {
  Shield,
  FileText,
  Search,
  AlertTriangle,
  Users,
  Lock,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react"

export default function AMLPage() {
  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-brand-primary-green/20 p-4 rounded-full">
                <Shield className="w-12 h-12 md:w-16 md:h-16 text-brand-primary-green" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-soft-white">
              Anti-Money Laundering (AML)
            </h1>
            <p className="text-lg md:text-xl text-brand-smoke-gray max-w-3xl mx-auto leading-relaxed">
              IBetSports is committed to preventing money laundering and terrorist financing through comprehensive
              compliance measures and regulatory adherence.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12 lg:mb-16">
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 border border-brand-smoke-gray/20">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-primary-green/20 p-3 rounded-lg flex-shrink-0">
                  <FileText className="w-6 h-6 text-brand-primary-green" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-brand-soft-white mb-4">Our AML Commitment</h2>
                  <p className="text-brand-smoke-gray leading-relaxed mb-4">
                    IBetSports operates under strict Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF)
                    policies in accordance with international regulations and best practices. We are committed to
                    preventing our platform from being used for money laundering or terrorist financing activities.
                  </p>
                  <p className="text-brand-smoke-gray leading-relaxed">
                    Our comprehensive AML program includes customer due diligence, ongoing monitoring, suspicious
                    activity reporting, and staff training to ensure full compliance with applicable laws and
                    regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key AML Measures Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {/* Customer Due Diligence */}
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-brand-smoke-gray/20 hover:border-brand-primary-green/30 transition-colors">
              <div className="bg-brand-primary-green/20 p-3 rounded-lg w-fit mb-4">
                <Users className="w-6 h-6 text-brand-primary-green" />
              </div>
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Customer Due Diligence (CDD)</h3>
              <p className="text-brand-smoke-gray text-sm leading-relaxed">
                We verify the identity of all customers through comprehensive documentation requirements including
                government-issued ID, proof of address, and payment method verification.
              </p>
            </div>

            {/* Enhanced Due Diligence */}
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-brand-smoke-gray/20 hover:border-brand-primary-green/30 transition-colors">
              <div className="bg-brand-primary-green/20 p-3 rounded-lg w-fit mb-4">
                <Search className="w-6 h-6 text-brand-primary-green" />
              </div>
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Enhanced Due Diligence (EDD)</h3>
              <p className="text-brand-smoke-gray text-sm leading-relaxed">
                High-risk customers undergo additional verification procedures including source of funds documentation,
                enhanced background checks, and ongoing monitoring.
              </p>
            </div>

            {/* Transaction Monitoring */}
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-brand-smoke-gray/20 hover:border-brand-primary-green/30 transition-colors">
              <div className="bg-brand-primary-green/20 p-3 rounded-lg w-fit mb-4">
                <AlertTriangle className="w-6 h-6 text-brand-primary-green" />
              </div>
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Transaction Monitoring</h3>
              <p className="text-brand-smoke-gray text-sm leading-relaxed">
                All transactions are monitored using advanced systems to detect suspicious patterns, unusual activity,
                and potential money laundering indicators.
              </p>
            </div>
          </div>

          {/* AML Procedures */}
          <div className="mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white mb-8 text-center">
              AML Procedures & Requirements
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Identity Verification */}
              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 border border-brand-smoke-gray/20">
                <h3 className="text-xl font-bold text-brand-primary-green mb-6">Identity Verification Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary-green flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-soft-white mb-1">Government-Issued Photo ID</h4>
                      <p className="text-sm text-brand-smoke-gray">
                        Valid passport, driver's license, or national ID card
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary-green flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-soft-white mb-1">Proof of Address</h4>
                      <p className="text-sm text-brand-smoke-gray">
                        Utility bill, bank statement, or official document (within 3 months)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary-green flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-soft-white mb-1">Payment Method Verification</h4>
                      <p className="text-sm text-brand-smoke-gray">
                        Bank card photos, cryptocurrency wallet verification, or payment provider confirmation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary-green flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-soft-white mb-1">Source of Funds Documentation</h4>
                      <p className="text-sm text-brand-smoke-gray">
                        Employment verification, business documentation, or wealth source evidence (for high-value
                        transactions)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suspicious Activity Indicators */}
              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 border border-brand-smoke-gray/20">
                <h3 className="text-xl font-bold text-brand-primary-green mb-6">Suspicious Activity Indicators</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-soft-white mb-1">Unusual Transaction Patterns</h4>
                      <p className="text-sm text-brand-smoke-gray">
                        Rapid deposits and withdrawals, structuring transactions to avoid reporting thresholds
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-soft-white mb-1">Inconsistent Information</h4>
                      <p className="text-sm text-brand-smoke-gray">
                        Mismatched personal details, false documentation, or contradictory statements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-soft-white mb-1">High-Risk Jurisdictions</h4>
                      <p className="text-sm text-brand-smoke-gray">
                        Transactions from or to countries with inadequate AML controls or sanctions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-soft-white mb-1">Reluctance to Provide Information</h4>
                      <p className="text-sm text-brand-smoke-gray">
                        Unwillingness to provide required documentation or answer compliance questions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Framework */}
          <div className="mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white mb-8 text-center">
              Regulatory Compliance Framework
            </h2>

            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 border border-brand-smoke-gray/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-brand-primary-green mb-4">International Standards</h3>
                  <ul className="space-y-2 text-brand-smoke-gray">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-primary-green rounded-full"></div>
                      <span className="text-sm">Financial Action Task Force (FATF) Recommendations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-primary-green rounded-full"></div>
                      <span className="text-sm">EU Anti-Money Laundering Directives</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-primary-green rounded-full"></div>
                      <span className="text-sm">Wolfsberg Group Principles</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-primary-green rounded-full"></div>
                      <span className="text-sm">Basel Committee Guidelines</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-brand-primary-green mb-4">Reporting & Record Keeping</h3>
                  <ul className="space-y-2 text-brand-smoke-gray">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-primary-green rounded-full"></div>
                      <span className="text-sm">Suspicious Activity Reports (SARs)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-primary-green rounded-full"></div>
                      <span className="text-sm">Currency Transaction Reports (CTRs)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-primary-green rounded-full"></div>
                      <span className="text-sm">Customer records maintained for 5+ years</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-primary-green rounded-full"></div>
                      <span className="text-sm">Transaction records maintained for 5+ years</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Assessment */}
          <div className="mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-soft-white mb-8 text-center">
              Risk Assessment Categories
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Low Risk */}
              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-green-500/30">
                <div className="text-center mb-4">
                  <div className="bg-green-500/20 p-3 rounded-full w-fit mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-green-500">Low Risk</h3>
                </div>
                <ul className="space-y-2 text-sm text-brand-smoke-gray">
                  <li>• Established customers with verified identity</li>
                  <li>• Regular transaction patterns</li>
                  <li>• Low-risk jurisdictions</li>
                  <li>• Standard documentation provided</li>
                  <li>• No suspicious activity history</li>
                </ul>
              </div>

              {/* Medium Risk */}
              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-yellow-500/30">
                <div className="text-center mb-4">
                  <div className="bg-yellow-500/20 p-3 rounded-full w-fit mx-auto mb-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-bold text-yellow-500">Medium Risk</h3>
                </div>
                <ul className="space-y-2 text-sm text-brand-smoke-gray">
                  <li>• New customers with limited history</li>
                  <li>• Higher transaction volumes</li>
                  <li>• Certain geographic locations</li>
                  <li>• Business or corporate accounts</li>
                  <li>• Enhanced monitoring required</li>
                </ul>
              </div>

              {/* High Risk */}
              <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 border border-red-500/30">
                <div className="text-center mb-4">
                  <div className="bg-red-500/20 p-3 rounded-full w-fit mx-auto mb-3">
                    <Lock className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-red-500">High Risk</h3>
                </div>
                <ul className="space-y-2 text-sm text-brand-smoke-gray">
                  <li>• Politically Exposed Persons (PEPs)</li>
                  <li>• High-risk jurisdictions</li>
                  <li>• Large cash transactions</li>
                  <li>• Complex ownership structures</li>
                  <li>• Enhanced Due Diligence required</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mb-12 lg:mb-16">
            <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-500/30 rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-red-400 mb-3">Important AML Notice</h3>
                  <p className="text-brand-smoke-gray leading-relaxed mb-4">
                    IBetSports reserves the right to request additional documentation, freeze accounts, or report
                    suspicious activities to relevant authorities as required by law. Failure to comply with AML
                    requirements may result in account suspension or closure.
                  </p>
                  <p className="text-brand-smoke-gray leading-relaxed">
                    We are legally obligated to report suspicious transactions and may not be able to inform customers
                    when such reports are made. Customer cooperation with AML procedures is mandatory and appreciated.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 border border-brand-smoke-gray/20">
            <h2 className="text-2xl font-bold text-brand-soft-white mb-6 text-center">AML Compliance Contact</h2>
            <p className="text-brand-smoke-gray text-center mb-8 max-w-2xl mx-auto">
              For AML-related inquiries, compliance questions, or to report suspicious activities, please contact our
              dedicated compliance team.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-brand-primary-green/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <Mail className="w-6 h-6 text-brand-primary-green" />
                </div>
                <h3 className="font-semibold text-brand-soft-white mb-2">Email Support</h3>
                <p className="text-brand-smoke-gray text-sm mb-2">compliance@ibetsports.ag</p>
                <p className="text-brand-smoke-gray text-xs">Response within 24 hours</p>
              </div>

              <div className="text-center">
                <div className="bg-brand-primary-green/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-brand-primary-green" />
                </div>
                <h3 className="font-semibold text-brand-soft-white mb-2">Live Chat</h3>
                <p className="text-brand-smoke-gray text-sm mb-2">Available 24/7</p>
                <p className="text-brand-smoke-gray text-xs">Instant compliance assistance</p>
              </div>

              <div className="text-center">
                <div className="bg-brand-primary-green/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <Phone className="w-6 h-6 text-brand-primary-green" />
                </div>
                <h3 className="font-semibold text-brand-soft-white mb-2">Phone Support</h3>
                <p className="text-brand-smoke-gray text-sm mb-2">+1-800-IBET-AML</p>
                <p className="text-brand-smoke-gray text-xs">Monday - Friday, 9 AM - 6 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
