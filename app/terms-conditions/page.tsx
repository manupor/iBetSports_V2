import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, Scale, AlertCircle } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function TermsConditionsPage() {
  const sections = [
    {
      title: "1. General Terms",
      content: [
        "These terms and conditions govern your use of Draft Casino",
        "By creating an account, you agree to be bound by these terms",
        "We reserve the right to modify these terms at any time",
        "Continued use of the site constitutes acceptance of any changes",
      ],
    },
    {
      title: "2. Account Registration",
      content: [
        "You must be 18 years or older to register",
        "Only one account per person is permitted",
        "You must provide accurate and complete information",
        "You are responsible for maintaining account security",
      ],
    },
    {
      title: "3. Deposits and Withdrawals",
      content: [
        "All transactions must be in your own name",
        "Minimum deposit amounts apply to all payment methods",
        "Withdrawal requests may take up to 5 business days",
        "Identity verification may be required for withdrawals",
      ],
    },
    {
      title: "4. Bonuses and Promotions",
      content: [
        "All bonuses are subject to wagering requirements",
        "Bonus terms and conditions apply to all promotional offers",
        "We reserve the right to void bonuses obtained fraudulently",
        "Maximum bet limits may apply when using bonus funds",
      ],
    },
    {
      title: "5. Game Rules and Fair Play",
      content: [
        "All games are provided by licensed software providers",
        "Random Number Generators ensure fair game outcomes",
        "Any form of cheating or advantage play is prohibited",
        "We reserve the right to void bets placed in error",
      ],
    },
    {
      title: "6. Responsible Gaming",
      content: [
        "We promote responsible gambling practices",
        "Self-exclusion tools are available upon request",
        "Deposit and loss limits can be set on your account",
        "We work with problem gambling support organizations",
      ],
    },
  ]

  return (
    <div className="bg-brand-charcoal-black min-h-screen text-brand-soft-white font-poppins">
      <TopNavigation showTabs={true} />

      {/* Header */}
      <header className="bg-brand-charcoal-black-secondary/95 backdrop-blur-sm py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Scale className="w-8 h-8 text-brand-primary-green" />
              <h1 className="text-4xl md:text-6xl font-bold">Terms & Conditions</h1>
            </div>
            <p className="text-xl text-brand-smoke-gray max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services
            </p>
          </div>
        </div>
      </header>

      {/* Last Updated */}
      <section className="py-8 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <div className="flex items-center justify-center space-x-2 text-brand-smoke-gray">
            <FileText className="w-5 h-5" />
            <span>Last updated: January 15, 2025</span>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <Card className="bg-brand-vibrant-green/10 border border-brand-vibrant-green/30 p-6 rounded-2xl">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-brand-vibrant-green mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-brand-vibrant-green mb-2">Important Notice</h3>
                <p className="text-brand-smoke-gray">
                  These terms and conditions constitute a legally binding agreement between you and Draft Casino. Please
                  read them carefully and contact our support team if you have any questions.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-12 space-y-8">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 md:p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-brand-primary-green">{section.title}</h2>
              <div className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-primary-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-brand-smoke-gray leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-4xl mx-auto px-4 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About These Terms?</h2>
          <p className="text-lg text-brand-smoke-gray mb-8">
            If you have any questions about these terms and conditions, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark px-8 py-3">
              Contact Support
            </Button>
            <Button
              variant="outline"
              className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-soft-white px-8 py-3 bg-transparent"
            >
              Live Chat
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
