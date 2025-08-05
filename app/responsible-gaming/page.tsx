import TopNavigation from "@/components/top-navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Clock, DollarSign, AlertTriangle, Heart } from "lucide-react"
import Footer from "@/components/footer"

export default function ResponsibleGamingPage() {
  const tools = [
    {
      icon: DollarSign,
      title: "Deposit Limits",
      description: "Set daily, weekly, or monthly deposit limits to control your spending",
    },
    {
      icon: Clock,
      title: "Session Time Limits",
      description: "Set time limits for your gaming sessions to maintain balance",
    },
    {
      icon: Shield,
      title: "Self-Exclusion",
      description: "Temporarily or permanently exclude yourself from gambling",
    },
    {
      icon: AlertTriangle,
      title: "Reality Checks",
      description: "Receive regular reminders about your gaming time and spending",
    },
  ]

  const warningSignsData = [
    "Gambling with money you can't afford to lose",
    "Chasing losses with bigger bets",
    "Lying about gambling activities",
    "Neglecting work, family, or social responsibilities",
    "Feeling anxious or depressed about gambling",
    "Borrowing money to gamble",
  ]

  const supportOrganizations = [
    {
      name: "GamCare",
      description: "Free support, information and advice for anyone affected by gambling problems",
      website: "www.gamcare.org.uk",
      phone: "0808 8020 133",
    },
    {
      name: "Gambling Therapy",
      description: "Global service offering support and advice to anyone affected by gambling problems",
      website: "www.gamblingtherapy.org",
      phone: "Available online",
    },
    {
      name: "BeGambleAware",
      description: "Independent charity providing information, advice and support for problem gambling",
      website: "www.begambleaware.org",
      phone: "Available online",
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
              <Heart className="w-8 h-8 text-brand-primary-green" />
              <h1 className="text-4xl md:text-6xl font-bold">Responsible Gaming</h1>
            </div>
            <p className="text-xl text-brand-smoke-gray max-w-3xl mx-auto">
              We're committed to providing a safe and responsible gaming environment for all our players
            </p>
          </div>
        </div>
      </header>

      {/* Our Commitment */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment</h2>
          <p className="text-lg text-brand-smoke-gray leading-relaxed">
            At Draft Casino, we believe gambling should be entertaining and fun. We're committed to promoting
            responsible gambling and providing tools to help our players maintain control over their gaming activities.
            We work closely with leading responsible gambling organizations to ensure we provide the best possible
            protection for our players.
          </p>
        </div>
      </section>

      {/* Responsible Gaming Tools */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Responsible Gaming Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl text-center"
              >
                <tool.icon className="w-12 h-12 mx-auto mb-4 text-brand-primary-green" />
                <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                <p className="text-brand-smoke-gray">{tool.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark px-8 py-3">
              Access Gaming Tools
            </Button>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Warning Signs</h2>
          <p className="text-lg text-brand-smoke-gray mb-8 text-center">
            If you recognize any of these signs in yourself or someone you know, it may be time to seek help:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warningSignsData.map((sign, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-brand-charcoal-black-secondary/30 rounded-lg"
              >
                <AlertTriangle className="w-5 h-5 text-brand-vibrant-green mt-0.5 flex-shrink-0" />
                <span className="text-brand-smoke-gray">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Organizations */}
      <section className="py-12 md:py-20 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get Help</h2>
          <p className="text-lg text-brand-smoke-gray mb-8 text-center max-w-3xl mx-auto">
            If you need support with gambling-related issues, these organizations provide free, confidential help:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOrganizations.map((org, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-3 text-brand-primary-green">{org.name}</h3>
                <p className="text-brand-smoke-gray mb-4">{org.description}</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-brand-smoke-gray">Website: </span>
                    <span className="text-brand-soft-white">{org.website}</span>
                  </div>
                  <div>
                    <span className="text-sm text-brand-smoke-gray">Phone: </span>
                    <span className="text-brand-soft-white">{org.phone}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age Verification */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Age Verification</h2>
          <div className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-8 rounded-2xl">
            <div className="text-6xl mb-4">🔞</div>
            <h3 className="text-2xl font-bold mb-4 text-brand-primary-green">18+ Only</h3>
            <p className="text-lg text-brand-smoke-gray">
              You must be 18 years or older to create an account and gamble on this site. We use industry-standard age
              verification processes to ensure compliance with legal requirements.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
