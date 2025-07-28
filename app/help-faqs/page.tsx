"use client"

import { useState } from "react"
import {
  Search,
  MessageCircle,
  Mail,
  Phone,
  HelpCircle,
  User,
  CreditCard,
  Gift,
  Target,
  Settings,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HelpFAQsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = [
    {
      title: "Account & Registration",
      icon: User,
      color: "bg-blue-500",
      faqs: [
        {
          question: "How do I create an account?",
          answer:
            "Click 'Sign Up' in the top right corner, fill out the registration form with your personal details, verify your email address, and complete the account verification process by uploading required documents.",
        },
        {
          question: "What documents do I need for verification?",
          answer:
            "You'll need a government-issued photo ID (passport, driver's license), proof of address (utility bill, bank statement from last 3 months), and proof of payment method (bank statement, card photo).",
        },
        {
          question: "How long does account verification take?",
          answer:
            "Account verification typically takes 24-72 hours. During peak times, it may take up to 5 business days. You'll receive an email confirmation once your account is verified.",
        },
        {
          question: "Can I have multiple accounts?",
          answer:
            "No, only one account per person is allowed. Multiple accounts will result in account closure and forfeiture of funds. This policy helps us maintain fair gaming and prevent fraud.",
        },
        {
          question: "How do I reset my password?",
          answer:
            "Click 'Forgot Password' on the login page, enter your email address, and follow the instructions in the reset email. Make sure to check your spam folder if you don't receive it within 10 minutes.",
        },
      ],
    },
    {
      title: "Deposits & Withdrawals",
      icon: CreditCard,
      color: "bg-green-500",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept major credit/debit cards (Visa, Mastercard), cryptocurrencies (Bitcoin, Ethereum, Litecoin), bank transfers, and e-wallets (Skrill, Neteller, PayPal).",
        },
        {
          question: "What are the minimum and maximum deposit amounts?",
          answer:
            "Minimum deposit is $10 for most methods ($20 for Bitcoin). Maximum deposits vary: $5,000 for cards, $10,000 for bank transfers, and $50,000 for cryptocurrencies per transaction.",
        },
        {
          question: "How long do withdrawals take?",
          answer:
            "Cryptocurrency withdrawals: 1-2 hours. E-wallets: 24 hours. Credit/debit cards: 3-5 business days. Bank transfers: 5-7 business days. First withdrawals may take longer due to additional security checks.",
        },
        {
          question: "Are there any withdrawal fees?",
          answer:
            "We don't charge withdrawal fees for most methods. However, your bank or payment provider may charge their own fees. Cryptocurrency withdrawals have network fees that vary based on network congestion.",
        },
        {
          question: "Why was my withdrawal declined?",
          answer:
            "Common reasons include incomplete verification, using a different payment method than deposit, bonus wagering requirements not met, or insufficient funds. Contact support for specific details.",
        },
      ],
    },
    {
      title: "Bonuses & Promotions",
      icon: Gift,
      color: "bg-purple-500",
      faqs: [
        {
          question: "What welcome bonuses do you offer?",
          answer:
            "New players receive a 125% Sports Welcome Bonus up to $2,500 and a 200% Casino Welcome Bonus up to $1,000. Both bonuses have specific wagering requirements and terms.",
        },
        {
          question: "What are wagering requirements?",
          answer:
            "Wagering requirements are the number of times you must bet your bonus amount before withdrawing. Sports bonuses typically have 5x wagering, while casino bonuses have 35x wagering requirements.",
        },
        {
          question: "Can I withdraw my bonus immediately?",
          answer:
            "No, bonuses must meet wagering requirements first. Only the winnings from bonus play can be withdrawn after requirements are met. The original bonus amount is typically removed upon withdrawal.",
        },
        {
          question: "Do you offer reload bonuses?",
          answer:
            "Yes, we offer regular reload bonuses for existing players, including weekend bonuses, monthly cashback offers, and special event promotions. Check the Promotions page for current offers.",
        },
        {
          question: "How do I claim a bonus?",
          answer:
            "Most bonuses are automatically credited upon deposit. Some require a bonus code entered during deposit. Check the specific promotion terms and contact support if you don't receive your bonus.",
        },
      ],
    },
    {
      title: "Sports Betting",
      icon: Target,
      color: "bg-orange-500",
      faqs: [
        {
          question: "What sports do you offer betting on?",
          answer:
            "We offer betting on football, basketball, baseball, hockey, soccer, tennis, golf, MMA, boxing, horse racing, and many other sports including esports and virtual sports.",
        },
        {
          question: "What types of bets can I place?",
          answer:
            "You can place moneyline, point spread, totals (over/under), parlays, teasers, props, futures, and live in-game bets. Different bet types are available depending on the sport and event.",
        },
        {
          question: "What are your betting limits?",
          answer:
            "Minimum bet is typically $1. Maximum limits vary by sport and bet type, ranging from $1,000 to $100,000. Higher limits may be available for VIP players upon request.",
        },
        {
          question: "When are bets settled?",
          answer:
            "Most bets are settled immediately after the official result. Some bets may take longer if there are disputes or if we're waiting for official confirmation from the governing body.",
        },
        {
          question: "Can I cash out my bet early?",
          answer:
            "Yes, we offer cash out on selected pre-game and live bets. The cash out value is calculated based on current odds and game situation. Not all bets are eligible for cash out.",
        },
      ],
    },
    {
      title: "Technical Issues",
      icon: Settings,
      color: "bg-red-500",
      faqs: [
        {
          question: "The website won't load properly",
          answer:
            "Try clearing your browser cache and cookies, disable browser extensions, or try a different browser. Make sure you have a stable internet connection and the latest browser version.",
        },
        {
          question: "I can't place a bet",
          answer:
            "Check your account balance, ensure the event is still available for betting, and verify your bet amount meets minimum requirements. If the issue persists, contact live support immediately.",
        },
        {
          question: "The mobile app keeps crashing",
          answer:
            "Update the app to the latest version, restart your device, ensure you have sufficient storage space, and check your internet connection. Uninstall and reinstall the app if problems continue.",
        },
        {
          question: "I'm having trouble with live streaming",
          answer:
            "Ensure you have a funded account or recent betting activity, check your internet speed (minimum 1 Mbps recommended), disable VPN if active, and try refreshing the page or restarting the stream.",
        },
        {
          question: "My account balance is incorrect",
          answer:
            "Check your transaction history for recent activity. Balances update in real-time, but some transactions may take a few minutes to reflect. Contact support with specific details if discrepancies persist.",
        },
      ],
    },
    {
      title: "Security & Responsible Gaming",
      icon: Shield,
      color: "bg-indigo-500",
      faqs: [
        {
          question: "How do you protect my personal information?",
          answer:
            "We use 256-bit SSL encryption, store data on secure servers, comply with data protection regulations, and never share personal information with third parties without consent.",
        },
        {
          question: "What responsible gaming tools do you offer?",
          answer:
            "We provide deposit limits, loss limits, session time limits, cooling-off periods, and self-exclusion options. You can access these tools in your account settings or contact support for assistance.",
        },
        {
          question: "How can I set betting limits?",
          answer:
            "Go to Account Settings > Responsible Gaming to set daily, weekly, or monthly limits for deposits, losses, and session time. Limits take effect immediately and can only be decreased instantly.",
        },
        {
          question: "What is self-exclusion?",
          answer:
            "Self-exclusion temporarily or permanently blocks access to your account. During this period, you cannot deposit, bet, or access promotional materials. Contact support to activate self-exclusion.",
        },
        {
          question: "How do I report suspicious activity?",
          answer:
            "Contact our security team immediately at security@ibetsports.ag or through live chat. Provide as much detail as possible about the suspicious activity you've observed.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black-tertiary py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/10 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-brand-primary-green/20 rounded-full mb-6">
              <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary-green" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Help & <span className="text-brand-primary-green">FAQs</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-soft-white/80 mb-8 max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our support team for personalized assistance.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-soft-white/60" />
              <Input
                type="text"
                placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder:text-brand-soft-white/60 focus:border-brand-primary-green"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-12 sm:py-16 bg-brand-charcoal-black-secondary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-brand-soft-white/80">Our support team is available 24/7 to assist you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Live Chat */}
            <div className="bg-brand-charcoal-black-tertiary rounded-xl p-6 text-center hover:bg-brand-charcoal-black/50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary-green/20 rounded-full mb-4">
                <MessageCircle className="w-6 h-6 text-brand-primary-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-brand-soft-white/80 mb-4">Get instant help from our support agents</p>
              <p className="text-sm text-brand-primary-green mb-4">Available 24/7</p>
              <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green/90">Start Chat</Button>
            </div>

            {/* Email Support */}
            <div className="bg-brand-charcoal-black-tertiary rounded-xl p-6 text-center hover:bg-brand-charcoal-black/50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-brand-soft-white/80 mb-4">Send us a detailed message</p>
              <p className="text-sm text-blue-400 mb-4">Response within 2 hours</p>
              <Button
                variant="outline"
                className="w-full border-blue-400 text-blue-400 hover:bg-blue-400/10 bg-transparent"
              >
                Send Email
              </Button>
            </div>

            {/* Phone Support */}
            <div className="bg-brand-charcoal-black-tertiary rounded-xl p-6 text-center hover:bg-brand-charcoal-black/50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-full mb-4">
                <Phone className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone Support</h3>
              <p className="text-brand-soft-white/80 mb-4">Speak directly with our team</p>
              <p className="text-sm text-orange-400 mb-4">+1 (800) 123-4567</p>
              <Button
                variant="outline"
                className="w-full border-orange-400 text-orange-400 hover:bg-orange-400/10 bg-transparent"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-soft-white/80">Browse our comprehensive FAQ sections to find quick answers</p>
          </div>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-brand-charcoal-black-secondary rounded-xl p-6 sm:p-8">
                <div className="flex items-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 ${category.color} rounded-full mr-4`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group bg-brand-charcoal-black-tertiary rounded-lg">
                      <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-brand-charcoal-black/50 transition-colors rounded-lg">
                        <span className="font-medium text-brand-soft-white">{faq.question}</span>
                        <svg
                          className="w-5 h-5 text-brand-primary-green transition-transform group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-brand-soft-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Help Section */}
      <div className="py-12 sm:py-16 bg-brand-charcoal-black-secondary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-brand-soft-white/80 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you with any questions or issues you
            may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-primary-green hover:bg-brand-primary-green/90">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Live Chat
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green/10 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
