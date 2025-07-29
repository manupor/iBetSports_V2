"use client"

import {
  Search,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  FileText,
  Shield,
  CreditCard,
  Users,
  Gamepad2,
  Trophy,
  Star,
} from "lucide-react"
import { useState } from "react"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function HelpFAQsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Categories", icon: HelpCircle },
    { id: "account", label: "Account & Registration", icon: Users },
    { id: "deposits", label: "Deposits & Withdrawals", icon: CreditCard },
    { id: "betting", label: "Sports Betting", icon: Trophy },
    { id: "casino", label: "Casino Games", icon: Gamepad2 },
    { id: "bonuses", label: "Bonuses & Promotions", icon: Star },
    { id: "security", label: "Security & Privacy", icon: Shield },
    { id: "technical", label: "Technical Support", icon: FileText },
  ]

  const faqs = [
    {
      id: 1,
      category: "account",
      question: "How do I create an account?",
      answer:
        "To create an account, click the 'Sign Up' button in the top right corner of our website. Fill out the registration form with your personal information, verify your email address, and you'll be ready to start betting and playing.",
    },
    {
      id: 2,
      category: "account",
      question: "What documents do I need for account verification?",
      answer:
        "For account verification, you'll need a government-issued photo ID (passport, driver's license, or national ID card) and a recent utility bill or bank statement showing your address. This helps us comply with regulatory requirements and keep your account secure.",
    },
    {
      id: 3,
      category: "deposits",
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards (Visa, Mastercard), cryptocurrencies (Bitcoin, Ethereum, Litecoin), bank transfers, and e-wallets. All transactions are processed securely with industry-standard encryption.",
    },
    {
      id: 4,
      category: "deposits",
      question: "How long do withdrawals take?",
      answer:
        "Withdrawal processing times vary by method: Cryptocurrencies (1-24 hours), e-wallets (24-48 hours), credit/debit cards (3-5 business days), and bank transfers (5-7 business days). All withdrawals are subject to our verification process.",
    },
    {
      id: 5,
      category: "betting",
      question: "What sports can I bet on?",
      answer:
        "We offer betting on a wide range of sports including football (NFL, college), basketball (NBA, NCAA), baseball (MLB), hockey (NHL), soccer, tennis, golf, MMA, boxing, and many more. We also offer live betting and futures markets.",
    },
    {
      id: 6,
      category: "betting",
      question: "What are the minimum and maximum bet limits?",
      answer:
        "Minimum bets start at $1 for most markets. Maximum bet limits vary by sport and market type, ranging from $1,000 to $50,000 or more for major events. Limits may be adjusted based on your account status and betting history.",
    },
    {
      id: 7,
      category: "casino",
      question: "Are your casino games fair?",
      answer:
        "Yes, all our casino games use certified Random Number Generators (RNG) and are regularly audited by independent testing agencies. We're licensed and regulated, ensuring fair play and transparent gaming for all players.",
    },
    {
      id: 8,
      category: "casino",
      question: "Can I play casino games for free?",
      answer:
        "Many of our slot games and table games offer demo modes where you can play for free without wagering real money. This is a great way to learn the games and practice your strategies before playing with real money.",
    },
    {
      id: 9,
      category: "bonuses",
      question: "What welcome bonuses do you offer?",
      answer:
        "New players can enjoy generous welcome bonuses including a 100% deposit match up to $1,000 for sports betting and a separate casino welcome package. Bonuses come with terms and conditions that must be met before withdrawal.",
    },
    {
      id: 10,
      category: "bonuses",
      question: "How do I claim my bonus?",
      answer:
        "Most bonuses are automatically credited to your account when you meet the requirements. Some bonuses may require a promo code during deposit or registration. Check your account's bonus section or contact support if you need assistance.",
    },
    {
      id: 11,
      category: "security",
      question: "How do you protect my personal information?",
      answer:
        "We use advanced SSL encryption to protect all data transmission and store your information on secure servers. We never share your personal information with third parties without your consent, except as required by law or regulation.",
    },
    {
      id: 12,
      category: "security",
      question: "What should I do if I suspect unauthorized account access?",
      answer:
        "If you suspect unauthorized access to your account, immediately change your password, contact our support team, and review your account activity. We recommend using strong, unique passwords and enabling two-factor authentication when available.",
    },
    {
      id: 13,
      category: "technical",
      question: "Why can't I access the website?",
      answer:
        "If you're having trouble accessing our website, try clearing your browser cache and cookies, disabling browser extensions, or trying a different browser. If the problem persists, contact our technical support team for assistance.",
    },
    {
      id: 14,
      category: "technical",
      question: "Is there a mobile app available?",
      answer:
        "Our website is fully optimized for mobile devices and works seamlessly on smartphones and tablets. You can access all features including betting, casino games, deposits, and withdrawals through your mobile browser.",
    },
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      <TopNavigation showTabs={false} />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black-tertiary py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/10 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-brand-primary-green/20 rounded-full mb-6">
              <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary-green" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-primary-green to-brand-soft-white bg-clip-text text-transparent">
              Help & FAQs
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-smoke-gray mb-8 leading-relaxed">
              Find answers to common questions and get the help you need to make the most of your gaming experience.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-brand-smoke-gray" />
              </div>
              <input
                type="text"
                placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder-brand-smoke-gray focus:outline-none focus:ring-2 focus:ring-brand-primary-green focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Section */}
      <div className="py-12 bg-brand-charcoal-black-secondary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-primary-green">Need Immediate Help?</h2>
            <p className="text-brand-smoke-gray">Our support team is available 24/7 to assist you</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20 text-center hover:border-brand-primary-green/50 transition-colors">
              <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-brand-primary-green" />
              </div>
              <h3 className="font-bold mb-2 text-brand-soft-white">Live Chat</h3>
              <p className="text-sm text-brand-smoke-gray mb-4">Available 24/7</p>
              <button className="bg-brand-primary-green hover:bg-brand-primary-green/90 text-brand-charcoal-black font-bold py-2 px-4 rounded-lg transition-colors text-sm">
                Start Chat
              </button>
            </div>

            <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20 text-center hover:border-brand-primary-green/50 transition-colors">
              <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-brand-primary-green" />
              </div>
              <h3 className="font-bold mb-2 text-brand-soft-white">Phone Support</h3>
              <p className="text-sm text-brand-smoke-gray mb-4">1-888-203-1771</p>
              <a
                href="tel:+18882031771"
                className="bg-brand-primary-green hover:bg-brand-primary-green/90 text-brand-charcoal-black font-bold py-2 px-4 rounded-lg transition-colors text-sm inline-block"
              >
                Call Now
              </a>
            </div>

            <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20 text-center hover:border-brand-primary-green/50 transition-colors">
              <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-brand-primary-green" />
              </div>
              <h3 className="font-bold mb-2 text-brand-soft-white">Email Support</h3>
              <p className="text-sm text-brand-smoke-gray mb-4">support@ibetsports.ag</p>
              <a
                href="mailto:support@ibetsports.ag"
                className="bg-brand-primary-green hover:bg-brand-primary-green/90 text-brand-charcoal-black font-bold py-2 px-4 rounded-lg transition-colors text-sm inline-block"
              >
                Send Email
              </a>
            </div>

            <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20 text-center hover:border-brand-primary-green/50 transition-colors">
              <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-brand-primary-green" />
              </div>
              <h3 className="font-bold mb-2 text-brand-soft-white">Response Time</h3>
              <p className="text-sm text-brand-smoke-gray mb-4">Average: 2 minutes</p>
              <div className="bg-brand-primary-green/20 text-brand-primary-green font-bold py-2 px-4 rounded-lg text-sm">
                Fast Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Categories and Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary-green">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-brand-smoke-gray">Browse by category or search for specific topics</p>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === category.id
                          ? "bg-brand-primary-green text-brand-charcoal-black"
                          : "bg-brand-charcoal-black-secondary text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-charcoal-black"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm">{category.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-brand-charcoal-black-secondary rounded-lg border border-brand-smoke-gray/20"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-brand-charcoal-black/50 transition-colors"
                    >
                      <span className="font-semibold text-brand-soft-white pr-4">{faq.question}</span>
                      {expandedFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-brand-primary-green flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-brand-smoke-gray flex-shrink-0" />
                      )}
                    </button>
                    {expandedFAQ === faq.id && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-brand-smoke-gray/20 pt-4">
                          <p className="text-brand-smoke-gray leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-brand-smoke-gray mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-brand-soft-white">No results found</h3>
                  <p className="text-brand-smoke-gray">Try adjusting your search or selecting a different category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="py-16 bg-brand-charcoal-black-secondary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary-green">Additional Resources</h2>
            <p className="text-lg text-brand-smoke-gray mb-8">Explore more helpful information and tools</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20">
                <FileText className="w-8 h-8 text-brand-primary-green mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-brand-soft-white">Terms & Conditions</h3>
                <p className="text-sm text-brand-smoke-gray mb-4">Read our complete terms of service</p>
                <a href="/terms-conditions" className="text-brand-primary-green hover:underline text-sm font-medium">
                  View Terms →
                </a>
              </div>

              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20">
                <Shield className="w-8 h-8 text-brand-primary-green mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-brand-soft-white">Responsible Gaming</h3>
                <p className="text-sm text-brand-smoke-gray mb-4">Learn about safe gaming practices</p>
                <a href="/responsible-gaming" className="text-brand-primary-green hover:underline text-sm font-medium">
                  Learn More →
                </a>
              </div>

              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20">
                <Users className="w-8 h-8 text-brand-primary-green mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-brand-soft-white">About Us</h3>
                <p className="text-sm text-brand-smoke-gray mb-4">Learn more about IBetSports</p>
                <a href="/about-us" className="text-brand-primary-green hover:underline text-sm font-medium">
                  Read More →
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
