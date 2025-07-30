"use client"

import { useState } from "react"
import { TopNavigation } from "@/components/top-navigation"
import { ShieldCheck, CalendarOff, UserX, LifeBuoy, Mail, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export default function SelfExclusionPage() {
  const [activeTab, setActiveTab] = useState("")

  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      <TopNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Header */}
      <div className="bg-brand-charcoal-black-secondary border-b border-brand-smoke-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-soft-white mt-4">
            Self-Exclusion Program
          </h1>
          <p className="text-brand-smoke-gray mt-2 text-sm sm:text-base">
            Take control of your gaming habits with our self-exclusion tools.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Introduction */}
        <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-brand-primary-green flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-soft-white mb-4">
                Our Commitment to Responsible Gaming
              </h2>
              <p className="text-brand-smoke-gray leading-relaxed mb-4">
                At IBetSports, your well-being is our priority. We provide a self-exclusion program to help you manage
                your gaming activity. Self-exclusion is a voluntary process where you can choose to take a break from
                our platform for a set period.
              </p>
              <p className="text-brand-smoke-gray leading-relaxed">
                This tool is designed to support responsible gaming and provide you with the resources you need to stay
                in control.
              </p>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-soft-white mb-8 text-center">
            How Self-Exclusion Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 text-center">
              <UserX className="w-12 h-12 text-brand-primary-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Choose Your Period</h3>
              <p className="text-brand-smoke-gray text-sm">
                Select a self-exclusion period from 6 months to 5 years, or permanently.
              </p>
            </div>
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 text-center">
              <CalendarOff className="w-12 h-12 text-brand-primary-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Account Restriction</h3>
              <p className="text-brand-smoke-gray text-sm">
                During this period, you will not be able to log in, deposit, or place bets on our platform.
              </p>
            </div>
            <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 text-center">
              <LifeBuoy className="w-12 h-12 text-brand-primary-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-brand-soft-white mb-3">Support & Resources</h3>
              <p className="text-brand-smoke-gray text-sm">
                We will remove you from marketing lists and provide information for support organizations.
              </p>
            </div>
          </div>
        </div>

        {/* Requesting Self-Exclusion */}
        <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 sm:p-8 mb-12">
          <h2 className="text-2xl font-bold text-brand-soft-white mb-6">How to Request Self-Exclusion</h2>
          <p className="text-brand-smoke-gray mb-6">
            To initiate the self-exclusion process, please contact our dedicated Responsible Gaming team through one of
            the channels below. Our team is available 24/7 to assist you with your request confidentially and without
            judgment.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-brand-primary-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-brand-soft-white mb-2">Email</h3>
                <p className="text-brand-smoke-gray text-sm mb-2">Send a request to our team.</p>
                <a
                  href="mailto:responsiblegaming@ibetsports.ag"
                  className="text-brand-primary-green hover:text-brand-primary-green/80 font-medium"
                >
                  responsiblegaming@ibetsports.ag
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle className="w-6 h-6 text-brand-primary-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-brand-soft-white mb-2">Live Chat</h3>
                <p className="text-brand-smoke-gray text-sm mb-2">Speak with an agent now.</p>
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
                <p className="text-brand-smoke-gray text-sm mb-2">Call us for assistance.</p>
                <a
                  href="tel:+1-800-IBET-RG"
                  className="text-brand-primary-green hover:text-brand-primary-green/80 font-medium"
                >
                  +1-800-IBET-RG
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mt-8">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-brand-soft-white mb-2">Important Information</h3>
              <p className="text-brand-smoke-gray text-sm">
                Self-exclusion is an irreversible process for the duration of the selected period. Once activated, it
                cannot be undone. We encourage you to withdraw any remaining balance before initiating self-exclusion.
                For more information, please visit our{" "}
                <Link href="/responsible-gaming" className="text-brand-primary-green underline">
                  Responsible Gaming
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
