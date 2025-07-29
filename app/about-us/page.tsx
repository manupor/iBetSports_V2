"use client"

import { Shield, Users, Trophy, Clock, Globe, Award, CheckCircle, Star, HeadphonesIcon, Zap } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      <TopNavigation showTabs={false} />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black-tertiary">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/10 to-transparent"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-primary-green to-brand-soft-white bg-clip-text text-transparent">
              About IBetSports
            </h1>
            <p className="text-xl md:text-2xl text-brand-smoke-gray mb-8 leading-relaxed">
              Your trusted gaming destination with over 25 years of excellence in online sports betting and casino
              entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-primary-green hover:bg-brand-primary-green/90 text-brand-charcoal-black font-bold py-3 px-8 rounded-lg transition-colors">
                Join Now
              </button>
              <button className="border-2 border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black font-bold py-3 px-8 rounded-lg transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary-green">
                Leading the Industry Since 1999
              </h2>
              <p className="text-lg text-brand-smoke-gray max-w-3xl mx-auto">
                IBetSports has been at the forefront of online gaming innovation, providing players worldwide with a
                secure, fair, and entertaining gaming experience. Licensed and regulated in Antigua and Barbuda, we
                operate with the highest standards of integrity and player protection.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-brand-charcoal-black-secondary rounded-lg border border-brand-smoke-gray/20">
                <div className="text-3xl md:text-4xl font-bold text-brand-primary-green mb-2">25+</div>
                <div className="text-brand-smoke-gray">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-brand-charcoal-black-secondary rounded-lg border border-brand-smoke-gray/20">
                <div className="text-3xl md:text-4xl font-bold text-brand-primary-green mb-2">500K+</div>
                <div className="text-brand-smoke-gray">Active Players</div>
              </div>
              <div className="text-center p-6 bg-brand-charcoal-black-secondary rounded-lg border border-brand-smoke-gray/20">
                <div className="text-3xl md:text-4xl font-bold text-brand-primary-green mb-2">99.9%</div>
                <div className="text-brand-smoke-gray">Uptime</div>
              </div>
              <div className="text-center p-6 bg-brand-charcoal-black-secondary rounded-lg border border-brand-smoke-gray/20">
                <div className="text-3xl md:text-4xl font-bold text-brand-primary-green mb-2">24/7</div>
                <div className="text-brand-smoke-gray">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Gaming Platform */}
      <div className="py-16 bg-brand-charcoal-black-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary-green">
                Comprehensive Gaming Platform
              </h2>
              <p className="text-lg text-brand-smoke-gray max-w-3xl mx-auto">
                From sports betting to live casino games, we offer a complete entertainment experience with cutting-edge
                technology and the best odds in the industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-colors">
                <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-brand-primary-green" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-soft-white">Sportsbook</h3>
                <p className="text-brand-smoke-gray">
                  Comprehensive sports betting with competitive odds on all major sports and leagues worldwide.
                </p>
              </div>

              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-colors">
                <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-brand-primary-green" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-soft-white">Casino Games</h3>
                <p className="text-brand-smoke-gray">
                  Thousands of slot machines, table games, and progressive jackpots from top software providers.
                </p>
              </div>

              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-colors">
                <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-brand-primary-green" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-soft-white">Live Casino</h3>
                <p className="text-brand-smoke-gray">
                  Real-time gaming with professional dealers in blackjack, roulette, baccarat, and poker.
                </p>
              </div>

              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-colors">
                <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-brand-primary-green" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-soft-white">Horse Racing</h3>
                <p className="text-brand-smoke-gray">
                  Daily horse racing action from tracks around the world with live streaming and results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary-green">
                Our Commitment to Excellence
              </h2>
              <p className="text-lg text-brand-smoke-gray max-w-3xl mx-auto">
                We are dedicated to providing a safe, secure, and enjoyable gaming environment with the highest
                standards of customer service and responsible gaming practices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand-primary-green" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-soft-white">Security & Trust</h3>
                <p className="text-brand-smoke-gray">
                  Advanced SSL encryption, secure payment processing, and strict data protection protocols ensure your
                  information is always safe.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-brand-primary-green" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-soft-white">Fair Gaming</h3>
                <p className="text-brand-smoke-gray">
                  All our games use certified Random Number Generators (RNG) and are regularly audited by independent
                  testing agencies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-brand-primary-green" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-soft-white">Global Reach</h3>
                <p className="text-brand-smoke-gray">
                  Serving players from around the world with multilingual support and multiple currency options for your
                  convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-brand-charcoal-black-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary-green">Why Choose IBetSports?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-soft-white mb-1">Competitive Odds</h4>
                    <p className="text-sm text-brand-smoke-gray">Best odds in the industry across all sports</p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-soft-white mb-1">Fast Payouts</h4>
                    <p className="text-sm text-brand-smoke-gray">Quick and secure withdrawal processing</p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-soft-white mb-1">Mobile Optimized</h4>
                    <p className="text-sm text-brand-smoke-gray">Seamless gaming on all devices</p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-soft-white mb-1">VIP Program</h4>
                    <p className="text-sm text-brand-smoke-gray">Exclusive rewards for loyal players</p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-soft-white mb-1">Live Streaming</h4>
                    <p className="text-sm text-brand-smoke-gray">Watch games live while you bet</p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-soft-white mb-1">Crypto Friendly</h4>
                    <p className="text-sm text-brand-smoke-gray">Bitcoin and cryptocurrency support</p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-soft-white mb-1">Responsible Gaming</h4>
                    <p className="text-sm text-brand-smoke-gray">Tools to help you play responsibly</p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-charcoal-black p-6 rounded-lg border border-brand-smoke-gray/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-soft-white mb-1">24/7 Support</h4>
                    <p className="text-sm text-brand-smoke-gray">Round-the-clock customer assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary-green">Get in Touch</h2>
            <p className="text-lg text-brand-smoke-gray mb-8">
              Have questions? Our friendly support team is available 24/7 to assist you.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-brand-charcoal-black-secondary p-6 rounded-lg border border-brand-smoke-gray/20">
                <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="w-6 h-6 text-brand-primary-green" />
                </div>
                <h3 className="font-bold mb-2 text-brand-soft-white">Live Chat</h3>
                <p className="text-brand-smoke-gray text-sm mb-4">Available 24/7 for instant support</p>
                <button className="bg-brand-primary-green hover:bg-brand-primary-green/90 text-brand-charcoal-black font-bold py-2 px-4 rounded-lg transition-colors text-sm">
                  Start Chat
                </button>
              </div>
              <div className="bg-brand-charcoal-black-secondary p-6 rounded-lg border border-brand-smoke-gray/20">
                <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-brand-primary-green" />
                </div>
                <h3 className="font-bold mb-2 text-brand-soft-white">Email Support</h3>
                <p className="text-brand-smoke-gray text-sm mb-4">support@ibetsports.ag</p>
                <a
                  href="mailto:support@ibetsports.ag"
                  className="bg-brand-primary-green hover:bg-brand-primary-green/90 text-brand-charcoal-black font-bold py-2 px-4 rounded-lg transition-colors text-sm inline-block"
                >
                  Send Email
                </a>
              </div>
              <div className="bg-brand-charcoal-black-secondary p-6 rounded-lg border border-brand-smoke-gray/20">
                <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-brand-primary-green" />
                </div>
                <h3 className="font-bold mb-2 text-brand-soft-white">Phone Support</h3>
                <p className="text-brand-smoke-gray text-sm mb-4">+1-800-IBET-SPORTS</p>
                <a
                  href="tel:+18004238776"
                  className="bg-brand-primary-green hover:bg-brand-primary-green/90 text-brand-charcoal-black font-bold py-2 px-4 rounded-lg transition-colors text-sm inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-primary-green hover:bg-brand-primary-green/90 text-brand-charcoal-black font-bold py-3 px-8 rounded-lg transition-colors">
                Start Live Chat
              </button>
              <button className="border-2 border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black font-bold py-3 px-8 rounded-lg transition-colors">
                Contact Form
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
