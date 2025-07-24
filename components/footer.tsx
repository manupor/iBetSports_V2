"use client"

import { Facebook, Instagram, Twitter, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <footer className="bg-brand-charcoal-black-tertiary text-brand-soft-white">
      {/* Social Media Icons */}
      <div className="py-6 border-b border-brand-smoke-gray/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <a
              href="https://x.com/I_BetSports"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-brand-smoke-gray/20 rounded-lg flex items-center justify-center hover:bg-brand-primary-green/20 transition-colors"
            >
              <Twitter className="w-5 h-5 text-brand-soft-white" />
            </a>
            <a
              href="https://www.instagram.com/i_betsports/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-brand-smoke-gray/20 rounded-lg flex items-center justify-center hover:bg-brand-primary-green/20 transition-colors"
            >
              <Instagram className="w-5 h-5 text-brand-soft-white" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61575245489301"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-brand-smoke-gray/20 rounded-lg flex items-center justify-center hover:bg-brand-primary-green/20 transition-colors"
            >
              <Facebook className="w-5 h-5 text-brand-soft-white" />
            </a>
            <a
              href="https://www.reddit.com/user/IBetSports-ag/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-brand-smoke-gray/20 rounded-lg flex items-center justify-center hover:bg-brand-primary-green/20 transition-colors"
            >
              <svg className="w-5 h-5 text-brand-soft-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Accordion / Desktop Grid */}
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Mobile Accordion */}
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
                    href="/self-exclusion"
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors"
                  >
                    Self Exclusion
                  </a>
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
                    AML
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
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-12 lg:gap-16">
            {/* Legal Column 1 */}
            <div>
              <h3 className="text-brand-primary-green text-xl font-bold mb-8 uppercase tracking-wide">Legal</h3>
              <ul className="space-y-4">
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
                    href="/self-exclusion"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    Self Exclusion
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
              <h3 className="text-brand-primary-green text-xl font-bold mb-8 uppercase tracking-wide">Legal</h3>
              <ul className="space-y-4">
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
                    AML
                  </a>
                </li>
              </ul>
            </div>

            {/* Rules Column */}
            <div>
              <h3 className="text-brand-primary-green text-xl font-bold mb-8 uppercase tracking-wide">Rules</h3>
              <ul className="space-y-4">
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
              <h3 className="text-brand-primary-green text-xl font-bold mb-8 uppercase tracking-wide">Information</h3>
              <ul className="space-y-4">
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
                    Help FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="https://topaffiliates.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline"
                  >
                    Affiliate Program
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-brand-charcoal-black py-4 border-t border-brand-smoke-gray/20">
        <div className="container mx-auto px-4">
          {/* Copyright */}
          <div className="text-center mb-4">
            <p className="text-brand-soft-white font-medium text-sm">© 2025 Ibetsports | All Rights Reserved</p>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-brand-smoke-gray/20 rounded p-1.5">
                <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546z" />
                  <path
                    d="M12.006 19.5c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5 7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5z"
                    fill="#fff"
                  />
                  <path
                    d="M12.006 6.5c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5-2.462-5.5-5.5-5.5z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="bg-brand-smoke-gray/20 rounded p-1.5">
                <div className="text-brand-primary-green font-bold text-[0.6rem] leading-tight">
                  25
                  <br />
                  YRS
                </div>
              </div>
              <div className="bg-brand-smoke-gray/20 rounded p-1.5">
                <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div className="bg-brand-smoke-gray/20 rounded p-1.5">
                <div className="text-brand-soft-white font-bold text-[0.5rem] border border-brand-soft-white rounded-full w-5 h-5 flex items-center justify-center">
                  21+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
