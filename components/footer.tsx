"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <footer className="bg-brand-charcoal-black-secondary border-t border-brand-smoke-gray/20 w-full">
      <div className="w-full px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Image
              src="/placeholder.svg?height=40&width=120&text=IBET+SPORTS"
              alt="IBET Sports Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-brand-smoke-gray text-sm">
              Your premier destination for sports betting and casino gaming. Licensed and regulated for your security.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-brand-primary-green/20 rounded-full flex items-center justify-center">
                <span className="text-brand-primary-green text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-brand-primary-green/20 rounded-full flex items-center justify-center">
                <span className="text-brand-primary-green text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-brand-primary-green/20 rounded-full flex items-center justify-center">
                <span className="text-brand-primary-green text-sm">i</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-brand-soft-white font-bold text-sm">QUICK LINKS</h3>
            <div className="space-y-2">
              <Button
                variant="link"
                className="text-brand-smoke-gray hover:text-brand-primary-green p-0 h-auto text-sm"
              >
                Sports Betting
              </Button>
              <Button
                variant="link"
                className="text-brand-smoke-gray hover:text-brand-primary-green p-0 h-auto text-sm"
              >
                Casino Games
              </Button>
              <Button
                variant="link"
                className="text-brand-smoke-gray hover:text-brand-primary-green p-0 h-auto text-sm"
              >
                Live Casino
              </Button>
              <Button
                variant="link"
                className="text-brand-smoke-gray hover:text-brand-primary-green p-0 h-auto text-sm"
              >
                Promotions
              </Button>
              <Button
                variant="link"
                className="text-brand-smoke-gray hover:text-brand-primary-green p-0 h-auto text-sm"
              >
                VIP Program
              </Button>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-brand-soft-white font-bold text-sm">SUPPORT</h3>
            <div className="space-y-2">
              <Button
                variant="link"
                className="text-brand-smoke-gray hover:text-brand-primary-green p-0 h-auto text-sm"
              >
                Help Center
              </Button>
              <Button
                variant="link"
                className="text-brand-smoke-gray hover:text-brand-primary-green p-0 h-auto text-sm"
              >
                Contact Us
              </Button>
              <Button
                variant="link"
                className="text-brand-smoke-gray hover:text-brand-primary-green p-0 h-auto text-sm"
              >
                Live Chat
              </Button>
              <Button
                variant="link"
                className="text-brand-smoke-gray hover:text-brand-primary-green p-0 h-auto text-sm"
              >
                Responsible Gaming
              </Button>
              <Button
                variant="link"
                className="text-brand-smoke-gray hover:text-brand-primary-green p-0 h-auto text-sm"
              >
                Terms & Conditions
              </Button>
            </div>
          </div>

          {/* Mobile Accordion / Desktop Grid */}
          <div className="md:hidden space-y-2">
            {/* Quick Links */}
            <div className="border-b border-brand-smoke-gray/10 pb-2">
              <div className="flex justify-between items-center py-2">
                <h3 className="text-brand-primary-green font-bold text-sm uppercase">Quick Links</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="/terms-conditions"
                  className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/responsible-gaming"
                  className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                >
                  Responsible Gaming
                </a>
                <a
                  href="/privacy-policy"
                  className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/help-faqs"
                  className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                >
                  Help & FAQs
                </a>
              </div>
            </div>

            {/* Legal Section */}
            <div className="border-b border-brand-smoke-gray/10 pb-2">
              <button onClick={() => toggleSection("legal")} className="flex justify-between items-center w-full py-2">
                <h3 className="text-brand-primary-green font-bold text-sm uppercase">Legal</h3>
                {expandedSection === "legal" ? (
                  <ChevronUp className="w-4 h-4 text-brand-primary-green" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-brand-primary-green" />
                )}
              </button>
              {expandedSection === "legal" && (
                <div className="grid grid-cols-1 gap-1 mt-2">
                  <a
                    href="/dispute-resolution"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    Dispute Resolution
                  </a>
                  <a
                    href="/fairness-rng"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    Fairness & RNG Testing
                  </a>
                  <a
                    href="/account-payouts"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    Account & Payouts
                  </a>
                  <a
                    href="/aml"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    AML Policy
                  </a>
                </div>
              )}
            </div>

            {/* Rules Section */}
            <div className="border-b border-brand-smoke-gray/10 pb-2">
              <button onClick={() => toggleSection("rules")} className="flex justify-between items-center w-full py-2">
                <h3 className="text-brand-primary-green font-bold text-sm uppercase">Rules</h3>
                {expandedSection === "rules" ? (
                  <ChevronUp className="w-4 h-4 text-brand-primary-green" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-brand-primary-green" />
                )}
              </button>
              {expandedSection === "rules" && (
                <div className="grid grid-cols-1 gap-1 mt-2">
                  <a
                    href="/house-rules"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    House Rules
                  </a>
                  <a
                    href="/sports-rules"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    Sports Rules
                  </a>
                  <a
                    href="/casino-rules"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    Casino Rules
                  </a>
                </div>
              )}
            </div>

            {/* Terms & Conditions Section */}
            <div className="border-b border-brand-smoke-gray/10 pb-2">
              <button onClick={() => toggleSection("terms")} className="flex justify-between items-center w-full py-2">
                <h3 className="text-brand-primary-green font-bold text-sm uppercase">Terms & Conditions</h3>
                {expandedSection === "terms" ? (
                  <ChevronUp className="w-4 h-4 text-brand-primary-green" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-brand-primary-green" />
                )}
              </button>
              {expandedSection === "terms" && (
                <div className="grid grid-cols-1 gap-1 mt-2">
                  <a
                    href="/terms-conditions"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    General Terms
                  </a>
                  <a
                    href="/account-registration"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    Account Registration
                  </a>
                  <a
                    href="/deposits-withdrawals"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    Deposits & Withdrawals
                  </a>
                  <a
                    href="/bonuses-promotions"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    Bonuses & Promotions
                  </a>
                  <a
                    href="/game-rules"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    Game Rules & Fair Play
                  </a>
                </div>
              )}
            </div>

            {/* Information Section */}
            <div className="border-b border-brand-smoke-gray/10 pb-2">
              <button
                onClick={() => toggleSection("information")}
                className="flex justify-between items-center w-full py-2"
              >
                <h3 className="text-brand-primary-green font-bold text-sm uppercase">Information</h3>
                {expandedSection === "information" ? (
                  <ChevronUp className="w-4 h-4 text-brand-primary-green" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-brand-primary-green" />
                )}
              </button>
              {expandedSection === "information" && (
                <div className="grid grid-cols-1 gap-1 mt-2">
                  <a
                    href="/about-us"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    About Us
                  </a>
                  <a
                    href="/help-faqs"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    Help & FAQs
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
            {/* Legal Column 1 */}
            <div>
              <h3 className="text-brand-primary-green text-lg lg:text-xl font-bold mb-6 lg:mb-8 uppercase tracking-wide">
                Legal
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                <li>
                  <a
                    href="/terms-conditions"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/dispute-resolution"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    Dispute Resolution
                  </a>
                </li>
                <li>
                  <a
                    href="/fairness-rng"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    Fairness & RNG Testing Methods
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column 2 */}
            <div>
              <h3 className="text-brand-primary-green text-lg lg:text-xl font-bold mb-6 lg:mb-8 uppercase tracking-wide">
                Legal
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/responsible-gaming"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    Responsible Gaming
                  </a>
                </li>
                <li>
                  <a
                    href="/account-payouts"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    Account, Payouts and Bonuses
                  </a>
                </li>
                <li>
                  <a
                    href="/aml"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    AML Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Rules Column */}
            <div>
              <h3 className="text-brand-primary-green text-lg lg:text-xl font-bold mb-6 lg:mb-8 uppercase tracking-wide">
                Rules
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                <li>
                  <a
                    href="/house-rules"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    House Rules
                  </a>
                </li>
                <li>
                  <a
                    href="/sports-rules"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    Sports Rules
                  </a>
                </li>
                <li>
                  <a
                    href="/casino-rules"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    Casino Rules
                  </a>
                </li>
              </ul>
            </div>

            {/* Information Column */}
            <div>
              <h3 className="text-brand-primary-green text-lg lg:text-xl font-bold mb-6 lg:mb-8 uppercase tracking-wide">
                Information
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                <li>
                  <a
                    href="/about-us"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/help-faqs"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    Help & FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-smoke-gray/20 mt-8 pt-8 text-center">
          <p className="text-brand-smoke-gray text-sm">
            © 2024 IBetSports. All rights reserved. | 18+ Only | Gamble Responsibly
          </p>
        </div>
      </div>
    </footer>
  )
}
