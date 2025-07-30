"use client"

import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      <TopNavigation />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black-tertiary py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/10 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-brand-primary-green/20 rounded-full mb-6">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                About
              </span>{" "}
              ibetsports.ag
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-smoke-gray mb-8 leading-relaxed">
              Your premier destination for online sports betting and casino gaming
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12 md:gap-16">
              {/* Our Story */}
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-brand-soft-white">Our Story</h2>
                <p className="text-base sm:text-lg text-brand-smoke-gray leading-relaxed mb-6">
                  Founded with a passion for providing the ultimate gaming experience, ibetsports.ag has established
                  itself as a trusted leader in the online betting industry. We combine cutting-edge technology with
                  exceptional customer service to deliver an unparalleled platform for sports betting and casino gaming.
                </p>
                <p className="text-base sm:text-lg text-brand-smoke-gray leading-relaxed">
                  Our commitment to innovation, security, and responsible gaming has made us the preferred choice for
                  players worldwide who demand excellence in their online gaming experience.
                </p>
              </div>

              {/* Our Mission */}
              <div className="bg-brand-charcoal-black-secondary rounded-2xl p-8 sm:p-10 md:p-12 border border-brand-smoke-gray/20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-center">
                  <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-brand-smoke-gray leading-relaxed text-center">
                  To provide a safe, secure, and entertaining platform where players can enjoy the thrill of sports
                  betting and casino gaming with complete confidence. We strive to exceed expectations through
                  innovative features, competitive odds, and exceptional customer support.
                </p>
              </div>

              {/* Why Choose Us */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center text-brand-soft-white">
                  Why Choose ibetsports.ag?
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  <div className="text-center p-6 rounded-xl bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/30 transition-colors">
                    <div className="w-12 h-12 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-brand-primary-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-brand-soft-white mb-2">Secure & Licensed</h3>
                    <p className="text-sm text-brand-smoke-gray">
                      Fully licensed and regulated with state-of-the-art security measures
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/30 transition-colors">
                    <div className="w-12 h-12 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-brand-primary-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-brand-soft-white mb-2">Fast Payouts</h3>
                    <p className="text-sm text-brand-smoke-gray">
                      Quick and reliable withdrawal processing with multiple payment options
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/30 transition-colors">
                    <div className="w-12 h-12 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-brand-primary-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.944a11.955 11.955 0 00-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-brand-soft-white mb-2">24/7 Support</h3>
                    <p className="text-sm text-brand-smoke-gray">
                      Round-the-clock customer support via live chat, email, and phone
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/30 transition-colors">
                    <div className="w-12 h-12 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-brand-primary-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-brand-soft-white mb-2">Competitive Odds</h3>
                    <p className="text-sm text-brand-smoke-gray">
                      Industry-leading odds and betting lines across all major sports
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/30 transition-colors">
                    <div className="w-12 h-12 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-brand-primary-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-brand-soft-white mb-2">Mobile Optimized</h3>
                    <p className="text-sm text-brand-smoke-gray">
                      Seamless gaming experience across all devices and platforms
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 hover:border-brand-primary-green/30 transition-colors">
                    <div className="w-12 h-12 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-brand-primary-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-brand-soft-white mb-2">Exclusive Bonuses</h3>
                    <p className="text-sm text-brand-smoke-gray">
                      Generous welcome bonuses and ongoing promotions for all players
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-brand-primary-green/10 to-brand-vibrant-green/10 rounded-2xl p-8 sm:p-10 md:p-12 border border-brand-primary-green/20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-center text-brand-soft-white">
                  Get in Touch
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-brand-charcoal-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-brand-soft-white mb-2">Wagering Support</h3>
                    <p className="text-brand-primary-green font-bold text-lg">1 888 203 1771</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-brand-charcoal-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-brand-soft-white mb-2">Customer Service</h3>
                    <p className="text-brand-primary-green font-bold text-lg">1 888 210 3449</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
