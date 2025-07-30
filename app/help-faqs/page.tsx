"use client"

import { useState } from "react"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  {
    category: "Account & Registration",
    question: "How do I create an account?",
    answer:
      "Creating an account is simple! Click the 'Sign Up' button in the top navigation, fill out the registration form with your personal information, verify your email address, and you're ready to start playing.",
  },
  {
    category: "Account & Registration",
    question: "What information do I need to provide during registration?",
    answer:
      "You'll need to provide basic personal information including your full name, email address, date of birth, phone number, and create a secure password. All information must be accurate and verifiable.",
  },
  {
    category: "Account & Registration",
    question: "How do I verify my account?",
    answer:
      "Account verification typically involves confirming your email address and may require submitting identification documents. Check your email for verification instructions after registration.",
  },
  {
    category: "Deposits & Withdrawals",
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, bank transfers, e-wallets, and cryptocurrency. Check our Banking section for the complete list of available options.",
  },
  {
    category: "Deposits & Withdrawals",
    question: "How long do withdrawals take?",
    answer:
      "Withdrawal processing times vary by payment method. E-wallets typically process within 24 hours, while bank transfers may take 3-5 business days. Cryptocurrency withdrawals are usually processed within 1-2 hours.",
  },
  {
    category: "Deposits & Withdrawals",
    question: "Are there any fees for deposits or withdrawals?",
    answer:
      "We don't charge fees for most deposit methods. Withdrawal fees may apply depending on the payment method chosen. Check our Banking section for detailed fee information.",
  },
  {
    category: "Sports Betting",
    question: "What sports can I bet on?",
    answer:
      "We offer betting on a wide range of sports including football, basketball, baseball, hockey, soccer, tennis, golf, MMA, boxing, and many more. Check our Sportsbook for the complete list.",
  },
  {
    category: "Sports Betting",
    question: "What types of bets can I place?",
    answer:
      "You can place various types of bets including moneyline, point spread, totals (over/under), parlays, teasers, props, and live in-game betting options.",
  },
  {
    category: "Sports Betting",
    question: "Can I bet on live games?",
    answer:
      "Yes! We offer extensive live betting options with real-time odds updates during games. You can place bets while the action is happening.",
  },
  {
    category: "Casino Games",
    question: "What casino games are available?",
    answer:
      "Our casino features hundreds of games including slots, table games (blackjack, roulette, baccarat), video poker, and specialty games from top software providers.",
  },
  {
    category: "Casino Games",
    question: "Are the games fair and random?",
    answer:
      "Yes, all our games use certified Random Number Generators (RNG) and are regularly audited by independent testing agencies to ensure fairness and randomness.",
  },
  {
    category: "Casino Games",
    question: "Can I play casino games for free?",
    answer:
      "Many of our casino games offer demo modes where you can play for free to learn the rules and practice before playing with real money.",
  },
  {
    category: "Bonuses & Promotions",
    question: "What welcome bonuses are available?",
    answer:
      "New players can enjoy our generous welcome package including a 125% sign-up bonus on your first deposit, plus additional bonuses on subsequent deposits.",
  },
  {
    category: "Bonuses & Promotions",
    question: "How do I claim a bonus?",
    answer:
      "Most bonuses are automatically credited to your account when you meet the requirements. Some may require a bonus code during deposit or registration.",
  },
  {
    category: "Bonuses & Promotions",
    question: "What are wagering requirements?",
    answer:
      "Wagering requirements specify how many times you must play through a bonus amount before you can withdraw winnings. Requirements vary by bonus type and are clearly stated in the terms.",
  },
  {
    category: "Technical Support",
    question: "I'm having trouble logging in. What should I do?",
    answer:
      "First, ensure you're using the correct username and password. Try resetting your password if needed. Clear your browser cache or try a different browser. Contact support if issues persist.",
  },
  {
    category: "Technical Support",
    question: "The website is loading slowly. How can I fix this?",
    answer:
      "Try clearing your browser cache, disable browser extensions, check your internet connection, or try accessing the site from a different device or network.",
  },
  {
    category: "Technical Support",
    question: "How do I contact customer support?",
    answer:
      "You can reach our 24/7 customer support team via live chat, email, or phone. Live chat is the fastest way to get immediate assistance.",
  },
]

export default function HelpFAQsPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(faqData.map((item) => item.category)))]

  const filteredFAQs =
    selectedCategory === "All" ? faqData : faqData.filter((item) => item.category === selectedCategory)

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      <TopNavigation />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black-tertiary py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/10 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-brand-primary-green/20 rounded-full mb-6">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                Help Center
              </span>{" "}
              & FAQs
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-smoke-gray mb-8 leading-relaxed">
              Find answers to commonly asked questions and get the help you need
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Category Filter */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-brand-primary-green text-brand-charcoal-black"
                        : "bg-brand-charcoal-black-secondary text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-smoke-gray/20 border border-brand-smoke-gray/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4 sm:space-y-6">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-brand-charcoal-black-secondary rounded-xl border border-brand-smoke-gray/20 hover:border-brand-primary-green/30 transition-colors"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 sm:px-8 py-6 sm:py-8 text-left flex items-center justify-between hover:bg-brand-smoke-gray/5 rounded-xl transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <div className="text-xs sm:text-sm text-brand-primary-green font-semibold mb-2">
                        {faq.category}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-soft-white leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openItems.includes(index) ? (
                        <ChevronUpIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary-green" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-smoke-gray" />
                      )}
                    </div>
                  </button>

                  {openItems.includes(index) && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                      <div className="border-t border-brand-smoke-gray/20 pt-6">
                        <p className="text-sm sm:text-base text-brand-smoke-gray leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Support */}
            <div className="mt-12 sm:mt-16 text-center">
              <div className="bg-gradient-to-r from-brand-primary-green/10 to-brand-vibrant-green/10 rounded-2xl p-8 sm:p-10 md:p-12 border border-brand-primary-green/20">
                <h2 className="text-2xl sm:text-3xl font-black mb-4 text-brand-soft-white">Still Need Help?</h2>
                <p className="text-base sm:text-lg text-brand-smoke-gray mb-6 leading-relaxed">
                  Can't find the answer you're looking for? Our support team is here to help 24/7.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-brand-charcoal-black-secondary rounded-xl p-6 border border-brand-smoke-gray/20">
                    <div className="w-12 h-12 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-brand-primary-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-brand-soft-white mb-2">Live Chat</h3>
                    <p className="text-sm text-brand-smoke-gray">Available 24/7</p>
                  </div>

                  <div className="bg-brand-charcoal-black-secondary rounded-xl p-6 border border-brand-smoke-gray/20">
                    <div className="w-12 h-12 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-brand-primary-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-brand-soft-white mb-2">Email Support</h3>
                    <p className="text-sm text-brand-smoke-gray">Response within 24hrs</p>
                  </div>

                  <div className="bg-brand-charcoal-black-secondary rounded-xl p-6 border border-brand-smoke-gray/20">
                    <div className="w-12 h-12 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-brand-primary-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-brand-soft-white mb-2">Phone Support</h3>
                    <p className="text-sm text-brand-smoke-gray">1-888-210-3449</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
