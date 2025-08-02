"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Smartphone, Bitcoin, Shield, Clock, CheckCircle } from "lucide-react"

interface BankingTabContentProps {
  setIsRegistrationOpen?: () => void
}

export default function BankingTabContent({ setIsRegistrationOpen }: BankingTabContentProps) {
  const paymentMethods = [
    {
      id: 1,
      name: "Credit Cards",
      description: "Visa, Mastercard, American Express",
      icon: CreditCard,
      processingTime: "Instant",
      minDeposit: "$10",
      maxDeposit: "$5,000",
      fees: "No fees",
      popular: true,
    },
    {
      id: 2,
      name: "Cryptocurrency",
      description: "Bitcoin, Ethereum, Litecoin",
      icon: Bitcoin,
      processingTime: "5-15 minutes",
      minDeposit: "$20",
      maxDeposit: "$50,000",
      fees: "Network fees only",
      popular: true,
    },
    {
      id: 3,
      name: "Mobile Payments",
      description: "Apple Pay, Google Pay, Samsung Pay",
      icon: Smartphone,
      processingTime: "Instant",
      minDeposit: "$10",
      maxDeposit: "$2,500",
      fees: "No fees",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-brand-charcoal-black">
      {/* Mobile Hero Section - Image First, Text Below */}
      <div className="block md:hidden">
        {/* Hero Image */}
        <div className="relative h-48 sm:h-56">
          <Image
            src="/images/banking-hero-money.jpg"
            alt="Banking and payments background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Text Content Below Image */}
        <div className="bg-brand-charcoal-black py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-black text-brand-soft-white mb-4">SECURE BANKING</h1>
            <p className="text-lg mb-6 max-w-3xl mx-auto text-white">
              Fast, secure, and reliable payment methods
              <br />
              with instant deposits and quick withdrawals
            </p>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-brand-primary-green" />
                <span className="text-brand-soft-white font-bold text-sm">SSL Encrypted</span>
              </div>
              <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-brand-vibrant-green" />
                <span className="text-brand-soft-white font-bold text-sm">Instant Deposits</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Hero Section - Overlay Design */}
      <div className="hidden md:block relative bg-gradient-to-r from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]">
        <div className="absolute inset-0">
          <Image
            src="/images/banking-hero-money.jpg"
            alt="Banking and payments background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-left flex flex-col justify-center items-start h-full">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-soft-white mb-4">SECURE BANKING</h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl lg:text-xl text-white">
            Fast, secure, and reliable payment methods
            <br />
            with instant deposits and quick withdrawals
          </p>
          <div className="flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-4 md:px-6 py-2 md:py-3 rounded-full">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-brand-primary-green" />
              <span className="text-brand-soft-white font-bold text-sm md:text-base">SSL Encrypted</span>
            </div>
            <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-4 md:px-6 py-2 md:py-3 rounded-full">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-brand-vibrant-green" />
              <span className="text-brand-soft-white font-bold text-sm md:text-base">Instant Deposits</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Payment Methods */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-brand-soft-white mb-6">
            <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
              PAYMENT METHODS
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentMethods.map((method) => {
              const IconComponent = method.icon
              return (
                <Card
                  key={method.id}
                  className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300 p-6 relative"
                >
                  {method.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-brand-primary-green text-brand-charcoal-black">
                      Popular
                    </Badge>
                  )}

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-brand-primary-green/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-brand-primary-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-soft-white">{method.name}</h3>
                      <p className="text-sm text-brand-smoke-gray">{method.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray">Processing Time:</span>
                      <span className="text-brand-soft-white font-semibold">{method.processingTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray">Min Deposit:</span>
                      <span className="text-brand-soft-white font-semibold">{method.minDeposit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray">Max Deposit:</span>
                      <span className="text-brand-soft-white font-semibold">{method.maxDeposit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-smoke-gray">Fees:</span>
                      <span className="text-brand-primary-green font-semibold">{method.fees}</span>
                    </div>
                  </div>

                  <Button
                    onClick={setIsRegistrationOpen}
                    className="w-full bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    Get Started
                  </Button>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-brand-soft-white mb-6">
            <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
              SECURITY FEATURES
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "SSL Encryption",
                description: "256-bit SSL encryption protects all transactions",
              },
              {
                icon: CheckCircle,
                title: "Verified Accounts",
                description: "KYC verification ensures account security",
              },
              { icon: Clock, title: "24/7 Monitoring", description: "Round-the-clock fraud detection and prevention" },
              { icon: CreditCard, title: "PCI Compliant", description: "Payment Card Industry security standards" },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 p-6 text-center"
                >
                  <div className="w-16 h-16 bg-brand-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-brand-primary-green" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-soft-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-brand-smoke-gray">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-black text-brand-soft-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-brand-smoke-gray mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us with their gaming funds. Fast deposits, secure
            transactions, and quick withdrawals guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={setIsRegistrationOpen}
              className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-8 py-3 text-lg"
            >
              Create Account
            </Button>
            <Button
              onClick={setIsRegistrationOpen}
              className="bg-transparent border-2 border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black font-bold px-8 py-3 text-lg"
            >
              Make First Deposit
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
