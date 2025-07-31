"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

export function Footer() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <footer className="bg-brand-charcoal-black border-t border-brand-smoke-gray/20 text-brand-soft-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Mobile Accordion Layout */}
        <div className="block md:hidden space-y-4">
          {/* Logo and Description */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/ibet-sports-logo-v2.png"
                alt="IBetSports Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-brand-smoke-gray text-sm leading-relaxed max-w-sm mx-auto">
              Your premier destination for sports betting and casino gaming. Experience the thrill of winning with our
              secure platform and exciting promotions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="border-b border-brand-smoke-gray/20 pb-4">
            <h3 className="text-brand-soft-white font-bold text-lg mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/casino-games"
                className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
              >
                Casino Games
              </Link>
              <Link
                href="/sports-betting"
                className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
              >
                Sports Betting
              </Link>
              <Link
                href="/live-casino"
                className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
              >
                Live Casino
              </Link>
              <Link
                href="/promotions"
                className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
              >
                Promotions
              </Link>
              <Link
                href="/vip-program"
                className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
              >
                VIP Program
              </Link>
              <Link
                href="/help-center"
                className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
              >
                Help Center
              </Link>
            </div>
          </div>

          {/* Information Section */}
          <div className="border-b border-brand-smoke-gray/20 pb-4">
            <button
              onClick={() => toggleSection("information")}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-brand-soft-white font-bold text-lg">Information</h3>
              {expandedSections.information ? (
                <ChevronUp className="w-5 h-5 text-brand-primary-green" />
              ) : (
                <ChevronDown className="w-5 h-5 text-brand-primary-green" />
              )}
            </button>
            {expandedSections.information && (
              <div className="mt-3 space-y-2">
                <Link
                  href="/about-us"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  About Us
                </Link>
                <Link
                  href="/help-faqs"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  Help & FAQs
                </Link>
                <a
                  href="#"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  Affiliate Program
                </a>
              </div>
            )}
          </div>

          {/* Legal Section */}
          <div className="border-b border-brand-smoke-gray/20 pb-4">
            <button
              onClick={() => toggleSection("legal")}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-brand-soft-white font-bold text-lg">Legal</h3>
              {expandedSections.legal ? (
                <ChevronUp className="w-5 h-5 text-brand-primary-green" />
              ) : (
                <ChevronDown className="w-5 h-5 text-brand-primary-green" />
              )}
            </button>
            {expandedSections.legal && (
              <div className="mt-3 space-y-2">
                <Link
                  href="/terms-conditions"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/responsible-gaming"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  Responsible Gaming
                </Link>
                <Link
                  href="/aml"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  AML Policy
                </Link>
                <Link
                  href="/account-payouts"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  Account & Payouts
                </Link>
              </div>
            )}
          </div>

          {/* Rules Section */}
          <div className="border-b border-brand-smoke-gray/20 pb-4">
            <button
              onClick={() => toggleSection("rules")}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-brand-soft-white font-bold text-lg">Rules</h3>
              {expandedSections.rules ? (
                <ChevronUp className="w-5 h-5 text-brand-primary-green" />
              ) : (
                <ChevronDown className="w-5 h-5 text-brand-primary-green" />
              )}
            </button>
            {expandedSections.rules && (
              <div className="mt-3 space-y-2">
                <Link
                  href="/house-rules"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  House Rules
                </Link>
                <Link
                  href="/sports-rules"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  Sports Rules
                </Link>
                <Link
                  href="/casino-rules"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  Casino Rules
                </Link>
              </div>
            )}
          </div>

          {/* Support Section */}
          <div className="border-b border-brand-smoke-gray/20 pb-4">
            <button
              onClick={() => toggleSection("support")}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-brand-soft-white font-bold text-lg">Support</h3>
              {expandedSections.support ? (
                <ChevronUp className="w-5 h-5 text-brand-primary-green" />
              ) : (
                <ChevronDown className="w-5 h-5 text-brand-primary-green" />
              )}
            </button>
            {expandedSections.support && (
              <div className="mt-3 space-y-2">
                <Link
                  href="/contact-us"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  Contact Us
                </Link>
                <Link
                  href="/live-chat"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  Live Chat
                </Link>
                <Link
                  href="/self-exclusion"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  Self Exclusion
                </Link>
                <Link
                  href="/dispute-resolution"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  Dispute Resolution
                </Link>
                <Link
                  href="/fairness-rng"
                  className="block text-brand-smoke-gray hover:text-brand-primary-green transition-colors text-sm py-1"
                >
                  Fairness & RNG
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-brand-soft-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/casino-games"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Casino Games
                </Link>
              </li>
              <li>
                <Link
                  href="/sports-betting"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Sports Betting
                </Link>
              </li>
              <li>
                <Link
                  href="/live-casino"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Live Casino
                </Link>
              </li>
              <li>
                <Link
                  href="/promotions"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Promotions
                </Link>
              </li>
              <li>
                <Link
                  href="/vip-program"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  VIP Program
                </Link>
              </li>
              <li>
                <Link
                  href="/help-center"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-brand-soft-white font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/help-faqs"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Help & FAQs
                </Link>
              </li>
              <li>
                <a href="#" className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-brand-soft-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/responsible-gaming"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Responsible Gaming
                </Link>
              </li>
              <li>
                <Link href="/aml" className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors">
                  AML Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/account-payouts"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Account & Payouts
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-brand-soft-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact-us"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/live-chat"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Live Chat
                </Link>
              </li>
              <li>
                <Link
                  href="/self-exclusion"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Self Exclusion
                </Link>
              </li>
              <li>
                <Link
                  href="/dispute-resolution"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Dispute Resolution
                </Link>
              </li>
              <li>
                <Link
                  href="/fairness-rng"
                  className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
                >
                  Fairness & RNG
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-smoke-gray/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="hidden md:block">
                <Image
                  src="/images/ibet-sports-logo-v2.png"
                  alt="IBetSports Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-brand-smoke-gray text-sm text-center md:text-left">
                © 2024 IBetSports. All rights reserved.
              </p>
            </div>

            {/* Secure Site Indicator */}
            <div className="flex items-center space-x-2 text-brand-smoke-gray text-sm">
              <div className="w-3 h-3 bg-brand-primary-green rounded-full"></div>
              <span>Secure Site</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 pt-4 border-t border-brand-smoke-gray/10">
            <p className="text-brand-smoke-gray text-xs leading-relaxed text-center md:text-left">
              Gambling can be addictive. Please play responsibly. Must be 18+ to participate. IBetSports is committed to
              responsible gaming and player protection.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
