import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, MessageCircle, Phone, Mail, Clock } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function HelpCenterPage() {
  const faqCategories = [
    {
      title: "Account & Registration",
      questions: [
        "How do I create an account?",
        "How do I verify my account?",
        "I forgot my password",
        "How do I change my personal details?",
      ],
    },
    {
      title: "Deposits & Withdrawals",
      questions: [
        "How do I make a deposit?",
        "What payment methods do you accept?",
        "How long do withdrawals take?",
        "Are there any fees?",
      ],
    },
    {
      title: "Bonuses & Promotions",
      questions: [
        "How do I claim my welcome bonus?",
        "What are wagering requirements?",
        "How do I use promo codes?",
        "When do promotions expire?",
      ],
    },
    {
      title: "Technical Issues",
      questions: ["Game won't load", "Connection problems", "Mobile app issues", "Browser compatibility"],
    },
  ]

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      action: "Start Chat",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24h",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      availability: "Mon-Fri 9AM-6PM",
      action: "Call Now",
    },
  ]

  return (
    <div className="bg-brand-charcoal-black min-h-screen text-brand-soft-white font-poppins">
      <TopNavigation showTabs={true} />

      {/* Header */}
      <header className="bg-brand-charcoal-black-secondary/95 backdrop-blur-sm py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Help Center</h1>
            <p className="text-xl text-brand-smoke-gray max-w-3xl mx-auto">
              Find answers to your questions or get in touch with our support team
            </p>
          </div>
        </div>
      </header>

      {/* Search */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 md:px-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-smoke-gray w-5 h-5" />
            <Input
              placeholder="Search for help articles..."
              className="pl-12 bg-brand-charcoal-black-secondary border-brand-smoke-gray/50 focus:border-brand-primary-green rounded-lg py-4"
            />
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl text-center"
              >
                <method.icon className="w-12 h-12 mx-auto mb-4 text-brand-primary-green" />
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-brand-smoke-gray mb-2">{method.description}</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Clock className="w-4 h-4 text-brand-smoke-gray" />
                  <span className="text-sm text-brand-smoke-gray">{method.availability}</span>
                </div>
                <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark">
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.questions.map((question, qIndex) => (
                    <button
                      key={qIndex}
                      className="block w-full text-left text-brand-smoke-gray hover:text-brand-soft-white transition-colors py-2 border-b border-brand-smoke-gray/20 last:border-b-0"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
