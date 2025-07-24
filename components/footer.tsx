import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const footerLinks = {
    legal1: [
      { name: "Terms & Conditions", href: "/terms-conditions" },
      { name: "Self Exclusion", href: "/responsible-gaming" },
      { name: "Dispute Resolution", href: "/help-center" },
      { name: "Fairness & RNG", href: "/help-center" },
    ],
    legal2: [
      { name: "Privacy Policy", href: "/terms-conditions" },
      { name: "Responsible Gaming", href: "/responsible-gaming" },
      { name: "Account/Payouts/Bonuses", href: "/help-center" },
      { name: "AML", href: "/terms-conditions" },
    ],
    rules: [
      { name: "House Rules", href: "/terms-conditions" },
      { name: "Sports Rules", href: "/terms-conditions" },
      { name: "Casino Rules", href: "/terms-conditions" },
    ],
    information: [
      { name: "About Us", href: "/help-center" },
      { name: "Help FAQs", href: "/help-center" },
      { name: "Affiliate Program", href: "/help-center" },
    ],
  }

  return (
    <footer className="bg-brand-charcoal-black-secondary border-t border-brand-smoke-gray/20 text-brand-soft-white">
      {/* Social Media Icons */}
      <div className="border-b border-brand-smoke-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6">
          <div className="flex justify-center space-x-6">
            <Link
              href="https://twitter.com"
              className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://facebook.com"
              className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://reddit.com"
              className="text-brand-smoke-gray hover:text-brand-primary-green transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Legal Column 1 */}
          <div>
            <h3 className="text-brand-primary-green font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal1.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-smoke-gray hover:text-brand-soft-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column 2 */}
          <div>
            <h3 className="text-brand-primary-green font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal2.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-smoke-gray hover:text-brand-soft-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rules */}
          <div>
            <h3 className="text-brand-primary-green font-bold text-lg mb-4">Rules</h3>
            <ul className="space-y-2">
              {footerLinks.rules.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-smoke-gray hover:text-brand-soft-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-brand-primary-green font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              {footerLinks.information.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-smoke-gray hover:text-brand-soft-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-brand-smoke-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6">
          {/* Disclaimer */}
          <div className="text-center mb-6">
            <p className="text-brand-smoke-gray text-xs leading-relaxed max-w-4xl mx-auto">
              The user is warned that they should make their own inquiry into the legality of participating in any of
              these games and/or activities. IBETSPORTS assumes no responsibility for the actions by and makes no
              representation or endorsement of any of these games and/or activities if they are illegal in the
              jurisdiction of the reader or client of this site.
            </p>
          </div>

          {/* Copyright and Payment Methods */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-brand-smoke-gray text-sm">© 2024 IBETSPORTS. All rights reserved.</div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-brand-smoke-gray text-sm">We Accept:</span>
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/cryptocurrency-payment-logo.png"
                  alt="Cryptocurrency payments"
                  width={32}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/images/credit-card-payment-logos.png"
                  alt="Credit card payments"
                  width={32}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/images/peer-to-peer-payment-logo.png"
                  alt="P2P payments"
                  width={32}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
