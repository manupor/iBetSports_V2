"use client"

import { ArrowLeft, Shield, Eye, Lock, Database, Users, FileText, Mail, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      {/* Header */}
      <div className="bg-brand-charcoal-black-secondary border-b border-brand-smoke-gray/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-brand-primary-green hover:text-brand-primary-green/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-primary-green/20 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-brand-primary-green" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-brand-soft-white">Privacy Policy</h1>
              <p className="text-brand-smoke-gray text-sm md:text-base">
                Your privacy and data protection are our top priorities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 border border-brand-smoke-gray/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-primary-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-brand-primary-green" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-brand-soft-white mb-3">Introduction</h2>
                <p className="text-brand-smoke-gray leading-relaxed mb-4">
                  At IBetSports, we are committed to protecting your privacy and ensuring the security of your personal
                  information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website and use our services.
                </p>
                <p className="text-brand-smoke-gray leading-relaxed">
                  By using our services, you consent to the data practices described in this policy. We encourage you to
                  read this policy carefully to understand our practices regarding your personal information.
                </p>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 border border-brand-smoke-gray/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-brand-primary-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 text-brand-primary-green" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-brand-soft-white mb-3">Information We Collect</h2>
                <p className="text-brand-smoke-gray leading-relaxed">
                  We collect information you provide directly to us and information we obtain automatically when you use
                  our services.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <h3 className="text-lg font-semibold text-brand-primary-green mb-3">Personal Information</h3>
                <ul className="space-y-2 text-brand-smoke-gray text-sm">
                  <li>• Full name and date of birth</li>
                  <li>• Email address and phone number</li>
                  <li>• Physical address</li>
                  <li>• Government-issued ID information</li>
                  <li>• Payment method details</li>
                  <li>• Account credentials</li>
                </ul>
              </div>
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <h3 className="text-lg font-semibold text-brand-primary-green mb-3">Automatic Information</h3>
                <ul className="space-y-2 text-brand-smoke-gray text-sm">
                  <li>• IP address and location data</li>
                  <li>• Device and browser information</li>
                  <li>• Usage patterns and preferences</li>
                  <li>• Cookies and tracking technologies</li>
                  <li>• Transaction history</li>
                  <li>• Game play statistics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 border border-brand-smoke-gray/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-brand-primary-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-brand-primary-green" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-brand-soft-white mb-3">How We Use Your Information</h2>
                <p className="text-brand-smoke-gray leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <h4 className="font-semibold text-brand-primary-green mb-2">Account Management</h4>
                <p className="text-brand-smoke-gray text-sm">
                  Create and maintain your account, verify your identity, and provide customer support.
                </p>
              </div>
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <h4 className="font-semibold text-brand-primary-green mb-2">Service Provision</h4>
                <p className="text-brand-smoke-gray text-sm">
                  Process transactions, facilitate gaming activities, and deliver our services.
                </p>
              </div>
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <h4 className="font-semibold text-brand-primary-green mb-2">Legal Compliance</h4>
                <p className="text-brand-smoke-gray text-sm">
                  Meet regulatory requirements, prevent fraud, and ensure responsible gaming.
                </p>
              </div>
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <h4 className="font-semibold text-brand-primary-green mb-2">Communication</h4>
                <p className="text-brand-smoke-gray text-sm">
                  Send important updates, promotional offers, and respond to your inquiries.
                </p>
              </div>
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <h4 className="font-semibold text-brand-primary-green mb-2">Improvement</h4>
                <p className="text-brand-smoke-gray text-sm">
                  Analyze usage patterns to improve our services and user experience.
                </p>
              </div>
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <h4 className="font-semibold text-brand-primary-green mb-2">Security</h4>
                <p className="text-brand-smoke-gray text-sm">
                  Protect against unauthorized access, fraud, and other security threats.
                </p>
              </div>
            </div>
          </div>

          {/* Data Protection & Security */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 border border-brand-smoke-gray/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-brand-primary-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-brand-primary-green" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-brand-soft-white mb-3">Data Protection & Security</h2>
                <p className="text-brand-smoke-gray leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your personal information:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-brand-primary-green mb-3">Technical Safeguards</h3>
                <ul className="space-y-2 text-brand-smoke-gray text-sm">
                  <li>• 256-bit SSL encryption for all data transmission</li>
                  <li>• Secure servers with firewall protection</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Multi-factor authentication options</li>
                  <li>• Encrypted data storage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-primary-green mb-3">Administrative Safeguards</h3>
                <ul className="space-y-2 text-brand-smoke-gray text-sm">
                  <li>• Limited access to personal information</li>
                  <li>• Employee training on data protection</li>
                  <li>• Regular policy updates and reviews</li>
                  <li>• Incident response procedures</li>
                  <li>• Third-party security assessments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 border border-brand-smoke-gray/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-brand-primary-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-brand-primary-green" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-brand-soft-white mb-3">Your Privacy Rights</h2>
                <p className="text-brand-smoke-gray leading-relaxed mb-4">
                  You have certain rights regarding your personal information:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <h4 className="font-semibold text-brand-primary-green mb-2">Access & Portability</h4>
                <p className="text-brand-smoke-gray text-sm">
                  Request access to your personal data and receive a copy in a portable format.
                </p>
              </div>
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <h4 className="font-semibold text-brand-primary-green mb-2">Correction</h4>
                <p className="text-brand-smoke-gray text-sm">
                  Request correction of inaccurate or incomplete personal information.
                </p>
              </div>
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <h4 className="font-semibold text-brand-primary-green mb-2">Deletion</h4>
                <p className="text-brand-smoke-gray text-sm">
                  Request deletion of your personal data, subject to legal and regulatory requirements.
                </p>
              </div>
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <h4 className="font-semibold text-brand-primary-green mb-2">Opt-Out</h4>
                <p className="text-brand-smoke-gray text-sm">
                  Opt out of marketing communications and certain data processing activities.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies & Tracking */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 border border-brand-smoke-gray/10">
            <h2 className="text-xl font-bold text-brand-soft-white mb-4">Cookies & Tracking Technologies</h2>
            <p className="text-brand-smoke-gray leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage, and provide
              personalized content. You can manage your cookie preferences through your browser settings.
            </p>
            <div className="bg-brand-primary-green/10 border border-brand-primary-green/20 rounded-lg p-4">
              <p className="text-brand-primary-green text-sm font-medium">
                <strong>Note:</strong> Disabling certain cookies may affect the functionality of our services.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 border border-brand-smoke-gray/10">
            <h2 className="text-xl font-bold text-brand-soft-white mb-4">Data Retention</h2>
            <p className="text-brand-smoke-gray leading-relaxed mb-4">
              We retain your personal information for as long as necessary to provide our services and comply with legal
              obligations. Retention periods vary based on the type of information and applicable regulations.
            </p>
            <ul className="space-y-2 text-brand-smoke-gray text-sm">
              <li>• Account information: Retained while your account is active and for 7 years after closure</li>
              <li>• Transaction records: Retained for 7 years for regulatory compliance</li>
              <li>• Marketing data: Retained until you opt out or for 3 years of inactivity</li>
              <li>• Technical data: Typically retained for 2 years for security and improvement purposes</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-brand-charcoal-black-secondary rounded-lg p-6 md:p-8 border border-brand-smoke-gray/10">
            <h2 className="text-xl font-bold text-brand-soft-white mb-6">Contact Us About Privacy</h2>
            <p className="text-brand-smoke-gray leading-relaxed mb-6">
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact
              us:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-brand-primary-green" />
                  <h3 className="font-semibold text-brand-primary-green">Email</h3>
                </div>
                <p className="text-brand-smoke-gray text-sm">privacy@ibetsports.ag</p>
                <p className="text-brand-smoke-gray text-xs mt-1">Response within 48 hours</p>
              </div>

              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="w-5 h-5 text-brand-primary-green" />
                  <h3 className="font-semibold text-brand-primary-green">Live Chat</h3>
                </div>
                <p className="text-brand-smoke-gray text-sm">Available 24/7</p>
                <p className="text-brand-smoke-gray text-xs mt-1">Instant support</p>
              </div>

              <div className="bg-brand-charcoal-black/50 rounded-lg p-4 border border-brand-smoke-gray/5">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-brand-primary-green" />
                  <h3 className="font-semibold text-brand-primary-green">Phone</h3>
                </div>
                <p className="text-brand-smoke-gray text-sm">+1-800-IBET-SPORTS</p>
                <p className="text-brand-smoke-gray text-xs mt-1">Mon-Sun 24/7</p>
              </div>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="bg-brand-primary-green/10 border border-brand-primary-green/20 rounded-lg p-6">
            <h2 className="text-xl font-bold text-brand-primary-green mb-3">Policy Updates</h2>
            <p className="text-brand-soft-white text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
              the new policy on our website and sending you an email notification. Your continued use of our services
              after such modifications constitutes acceptance of the updated policy.
            </p>
            <p className="text-brand-primary-green text-sm font-medium mt-3">Last updated: January 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
