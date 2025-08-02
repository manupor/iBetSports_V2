"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BankingTabContentProps {
  setIsRegistrationOpen: (open: boolean) => void
}

export default function BankingTabContent({ setIsRegistrationOpen }: BankingTabContentProps) {
  const paymentMethods = [
    { name: "Bitcoin", image: "/cryptocurrency-payment-logo.png", type: "Cryptocurrency", fee: "0%" },
    { name: "Ethereum", image: "/cryptocurrency-payment-logo.png", type: "Cryptocurrency", fee: "0%" },
    { name: "Credit Card", image: "/credit-card-payment-logos.png", type: "Traditional", fee: "2.9%" },
    { name: "Bank Transfer", image: "/peer-to-peer-payment-logo.png", type: "Traditional", fee: "1.5%" },
  ]

  return (
    <div className="min-h-screen bg-brand-charcoal-black font-poppins w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banking-hero-money.jpg"
            alt="Banking Hero"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                SECURE
              </span>{" "}
              BANKING
            </h1>
            <p className="text-brand-smoke-gray text-lg md:text-xl max-w-2xl">
              Fast deposits and withdrawals with multiple payment options
            </p>
            <Button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-bold px-8 py-3 text-lg"
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-12 bg-black w-full">
        <div className="w-full px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-brand-soft-white mb-4">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                PAYMENT
              </span>{" "}
              METHODS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <Card
                key={index}
                className="bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 p-6 text-center"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-brand-primary-green/10 flex items-center justify-center">
                    <span className="text-brand-primary-green font-bold text-2xl">$</span>
                  </div>
                  <div>
                    <h3 className="text-brand-soft-white font-bold text-lg">{method.name}</h3>
                    <p className="text-brand-smoke-gray text-sm">{method.type}</p>
                    <p className="text-brand-primary-green text-sm font-bold">Fee: {method.fee}</p>
                  </div>
                  <Button
                    onClick={() => setIsRegistrationOpen(true)}
                    variant="outline"
                    className="w-full text-brand-soft-white border-brand-smoke-gray hover:bg-brand-primary-green hover:text-brand-charcoal-black"
                  >
                    USE METHOD
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-6 text-center">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-brand-primary-green/20 flex items-center justify-center">
                  <span className="text-brand-primary-green font-bold text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-brand-soft-white font-bold">Instant Deposits</h3>
                  <p className="text-brand-smoke-gray text-sm">Start playing immediately</p>
                </div>
              </div>
            </Card>

            <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-6 text-center">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-brand-primary-green/20 flex items-center justify-center">
                  <span className="text-brand-primary-green font-bold text-xl">🔒</span>
                </div>
                <div>
                  <h3 className="text-brand-soft-white font-bold">Secure Transactions</h3>
                  <p className="text-brand-smoke-gray text-sm">Bank-level encryption</p>
                </div>
              </div>
            </Card>

            <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 p-6 text-center">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-brand-primary-green/20 flex items-center justify-center">
                  <span className="text-brand-primary-green font-bold text-xl">💰</span>
                </div>
                <div>
                  <h3 className="text-brand-soft-white font-bold">Fast Withdrawals</h3>
                  <p className="text-brand-smoke-gray text-sm">Get your winnings quickly</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
