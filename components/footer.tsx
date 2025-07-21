"use client"

import { Facebook, Instagram, Twitter } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-brand-charcoal-black-tertiary text-brand-soft-white">
      {/* Social Media Icons */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a
              href="https://x.com/I_BetSports"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-brand-smoke-gray/20 rounded-lg flex items-center justify-center hover:bg-brand-primary-green/20 transition-colors"
            >
              <Twitter className="w-6 h-6 text-brand-soft-white" />
            </a>
            <a
              href="https://www.instagram.com/i_betsports/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-brand-smoke-gray/20 rounded-lg flex items-center justify-center hover:bg-brand-primary-green/20 transition-colors"
            >
              <Instagram className="w-6 h-6 text-brand-soft-white" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61575245489301"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-brand-smoke-gray/20 rounded-lg flex items-center justify-center hover:bg-brand-primary-green/20 transition-colors"
            >
              <Facebook className="w-6 h-6 text-brand-soft-white" />
            </a>
            <a
              href="https://www.reddit.com/user/IBetSports-ag/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-brand-smoke-gray/20 rounded-lg flex items-center justify-center hover:bg-brand-primary-green/20 transition-colors"
            >
              <svg className="w-6 h-6 text-brand-soft-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12 border-t border-brand-smoke-gray/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Legal Column 1 */}
            <div>
              <h3 className="text-brand-primary-green text-xl font-bold mb-6 uppercase">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/terms-conditions"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/self-exclusion"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
                  >
                    Self Exclusion
                  </a>
                </li>
                <li>
                  <a
                    href="/dispute-resolution"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
                  >
                    Dispute Resolution
                  </a>
                </li>
                <li>
                  <a
                    href="/fairness-rng"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
                  >
                    Fairness & RNG Testing Methods
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column 2 */}
            <div>
              <h3 className="text-brand-primary-green text-xl font-bold mb-6 uppercase">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/responsible-gaming"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
                  >
                    Responsible Gaming
                  </a>
                </li>
                <li>
                  <a
                    href="/account-payouts"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
                  >
                    Account, Payouts and Bonuses
                  </a>
                </li>
                <li>
                  <a
                    href="/aml"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
                  >
                    AML
                  </a>
                </li>
              </ul>
            </div>

            {/* Rules Column */}
            <div>
              <h3 className="text-brand-primary-green text-xl font-bold mb-6 uppercase">Rules</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/house-rules"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
                  >
                    House Rules
                  </a>
                </li>
                <li>
                  <a
                    href="/sports-rules"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
                  >
                    Sports Rules
                  </a>
                </li>
                <li>
                  <a
                    href="/casino-rules"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
                  >
                    Casino Rules
                  </a>
                </li>
              </ul>
            </div>

            {/* Information Column */}
            <div>
              <h3 className="text-brand-primary-green text-xl font-bold mb-6 uppercase">Information</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about-us"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/help-faqs"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
                  >
                    Help FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="https://topaffiliates.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm"
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
      <div className="bg-brand-charcoal-black py-8 border-t border-brand-smoke-gray/20">
        <div className="container mx-auto px-4">
          {/* Disclaimer */}
          <div className="text-center mb-6">
            <p className="text-brand-smoke-gray text-sm leading-relaxed max-w-4xl mx-auto">
              In order to register for this website, the user is required to accept the General Terms and Conditions. In
              the event the General Terms and Conditions are updated, existing users may choose to discontinue using the
              products and services before the said update shall become effective, which is a minimum of two weeks after
              it has been announced.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center mb-8">
            <p className="text-brand-soft-white font-medium">© 2025 Ibetsports | All Rights Reserved</p>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center items-center space-x-6">
            <div className="flex items-center space-x-4">
              <div className="bg-brand-smoke-gray/20 rounded-lg p-3">
                <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
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
              <div className="bg-brand-smoke-gray/20 rounded-lg p-3">
                <div className="text-brand-primary-green font-bold text-sm">
                  25
                  <br />
                  YEARS
                </div>
              </div>
              <div className="bg-brand-smoke-gray/20 rounded-lg p-3">
                <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div className="bg-brand-smoke-gray/20 rounded-lg p-3">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h8.93c2.606 0 4.706 1.026 5.74 2.805 1.036 1.785.309 4.08-1.588 5.295-.44.282-.915.501-1.414.656.916.361 1.683.964 2.148 1.716.465.753.677 1.624.677 2.61 0 1.011-.21 1.94-.677 2.757-.467.817-1.234 1.420-2.148 1.781-.915.361-2.057.542-3.426.542H7.076z" />
                </svg>
              </div>
              <div className="bg-brand-smoke-gray/20 rounded-lg p-3">
                <div className="text-brand-primary-green font-bold text-xs">
                  P2P
                  <br />
                  Procure to Pay
                </div>
              </div>
              <div className="bg-brand-smoke-gray/20 rounded-lg p-3">
                <div className="text-brand-soft-white font-bold text-xs border border-brand-soft-white rounded-full w-8 h-8 flex items-center justify-center">
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
