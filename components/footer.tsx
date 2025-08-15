"use client";

import { Instagram, ChevronDown, ChevronUp, X, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SportRules from "../components/SportRules";

// Comprehensive popup content components
const TermsConditionsContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-brand-primary-green mb-6">
      Terms & Conditions
    </h1>
    <div className="space-y-5 text-brand-soft-white">
      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          1. Acceptance of Terms
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          By accessing and using ibetsports.ag ("the Site"), you accept and
          agree to be bound by the terms and provisions of this agreement. These
          Terms and Conditions constitute a legally binding agreement between
          you and IBetSports. If you do not agree to abide by the above, please
          do not use this service.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          2. Account Registration & Eligibility
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-2">
          <p>To create an account, you must:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Be at least 18 years old</li>
            <li>
              Be legally eligible to participate in gaming activities in your
              jurisdiction
            </li>
            <li>Provide accurate and complete information</li>
            <li>Maintain confidentiality of your account credentials</li>
            <li>
              Only one account per person, household, or IP address is permitted
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          3. Deposits & Withdrawals
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-2">
              Deposits
            </h3>
            <ul className="list-disc list-inside text-brand-smoke-gray space-y-1">
              <li>Minimum: $20</li>
              <li>Maximum: $10,000 per transaction</li>
              <li>Processed instantly</li>
              <li>Multiple payment methods accepted</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-2">
              Withdrawals
            </h3>
            <ul className="list-disc list-inside text-brand-smoke-gray space-y-1">
              <li>Minimum: $20</li>
              <li>Maximum: $10,000 per day</li>
              <li>Crypto: within 1 hour</li>
              <li>Traditional: 24-48 hours</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          4. Bonuses & Promotions
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-2">
          <p>All bonuses are subject to specific terms and conditions:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Welcome bonus: 100% match up to $1,000 + 100 free spins</li>
            <li>Wagering requirement: 35x bonus amount</li>
            <li>Maximum bet with bonus funds: $5 per spin/hand</li>
            <li>Bonus funds expire after 30 days</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          5. Prohibited Activities
        </h2>
        <div className="text-sm text-brand-smoke-gray">
          <p className="mb-2">
            The following activities may result in account closure:
          </p>
          <div className="grid md:grid-cols-2 gap-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Creating multiple accounts</li>
              <li>Using automated betting systems</li>
              <li>Collusion with other players</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Money laundering activities</li>
              <li>Bonus abuse or exploitation</li>
              <li>Providing false information</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          6. Limitation of Liability
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          IBetSports shall not be liable for any direct, indirect, incidental,
          special, or consequential damages arising from your use of the site.
          Our total liability shall not exceed the amount of your account
          balance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          7. Governing Law
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          These terms are governed by the laws of Antigua and Barbuda. Any
          disputes shall be resolved through binding arbitration.
        </p>
      </section>
    </div>
  </div>
);

const ResponsibleGamingContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-brand-primary-green mb-6">
      Responsible Gaming
    </h1>
    <div className="space-y-5 text-brand-soft-white">
      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Our Commitment
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          At IBetSports, we are committed to promoting responsible gaming and
          providing a safe, enjoyable environment for all our players. Gaming
          should be an enjoyable form of entertainment, not a way to make money
          or escape from problems.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Warning Signs
        </h2>
        <div className="text-sm text-brand-smoke-gray">
          <p className="mb-2">
            Please consider whether any of the following apply to you:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Do you spend more time or money gaming than you can afford?</li>
            <li>Do you chase losses with bigger bets?</li>
            <li>Do you feel anxious when you can't play?</li>
            <li>Has gaming affected your relationships?</li>
            <li>Do you lie about your gaming habits?</li>
            <li>Do you borrow money to fund your gaming?</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Self-Help Tools
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Deposit Limits
            </h3>
            <p>Set daily, weekly, or monthly deposit limits.</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Loss Limits
            </h3>
            <p>Set limits on how much you can lose.</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Session Time Limits
            </h3>
            <p>Set limits on how long you can play.</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Self-Exclusion
            </h3>
            <p>Exclude yourself from accessing your account.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Getting Help
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Professional Organizations
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Gamblers Anonymous: www.gamblersanonymous.org</li>
              <li>National Council on Problem Gambling: www.ncpgambling.org</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Helplines
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>National Problem Gambling Helpline: 1-800-522-4700</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Underage Gaming Prevention
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          Our site is strictly for players aged 18 and over. We use age
          verification systems and monitor for underage access attempts.
        </p>
      </section>
    </div>
  </div>
);

const PrivacyPolicyContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-brand-primary-green mb-6">
      Privacy Policy
    </h1>
    <div className="space-y-5 text-brand-soft-white">
      <section>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          <strong>Last Updated:</strong> January 1, 2025
        </p>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          This Privacy Policy describes how IBetSports ("we," "our," or "us")
          collects, uses, and protects your personal information when you use
          our website and services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          1. Information We Collect
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Personal Information
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Name, date of birth, contact information</li>
              <li>Address and identification documents</li>
              <li>Payment method details</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Technical Information
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>IP address and device information</li>
              <li>Browser type and operating system</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          2. How We Use Your Information
        </h2>
        <div className="text-sm text-brand-smoke-gray">
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>To provide and maintain our gaming services</li>
            <li>To process transactions and verify identity</li>
            <li>To comply with legal requirements</li>
            <li>To improve our services and user experience</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          3. Information Sharing
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          We do not sell your personal information. We may share your
          information with:
        </p>
        <div className="text-sm text-brand-smoke-gray">
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Payment processors</li>
            <li>Regulatory authorities</li>
            <li>Law enforcement agencies</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          4. Data Security
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          We implement industry-standard security measures to protect your
          personal information:
        </p>
        <div className="text-sm text-brand-smoke-gray">
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>256-bit SSL encryption</li>
            <li>Secure servers with firewall protection</li>
            <li>Regular security audits</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          5. Your Rights
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          You have the right to:
        </p>
        <div className="text-sm text-brand-smoke-gray">
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal data</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          6. Contact Us
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          If you have questions, contact our Data Protection Officer at
          privacy@ibetsports.ag.
        </p>
      </section>
    </div>
  </div>
);

const HelpFAQsContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-brand-primary-green mb-6">
      Help & Frequently Asked Questions
    </h1>
    <div className="space-y-5 text-brand-soft-white">
      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Account Management
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              How do I create an account?
            </h3>
            <p>Click "Sign Up" and fill out the registration form.</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              How do I verify my account?
            </h3>
            <p>Upload a photo ID and utility bill.</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              I forgot my password.
            </h3>
            <p>Click "Forgot Password" to reset it.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Deposits & Withdrawals
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              What payment methods do you accept?
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cryptocurrencies</li>
              <li>Credit Cards</li>
              <li>E-wallets</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              How long do withdrawals take?
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cryptocurrencies: Within 1 hour</li>
              <li>E-wallets: 12-24 hours</li>
              <li>Credit Cards: 3-5 business days</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Bonuses & Promotions
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              What is the welcome bonus?
            </h3>
            <p>100% match bonus up to $1,000 plus 100 free spins.</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              How do wagering requirements work?
            </h3>
            <p>Wager a specified amount before withdrawing bonus winnings.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Gaming & Technical
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Are the games fair?
            </h3>
            <p>
              Yes, all our games use certified Random Number Generators (RNG).
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Can I play on mobile?
            </h3>
            <p>Yes, our website is fully optimized for mobile devices.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Customer Support
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              How can I contact support?
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Live Chat: Available on our website</li>
              <li>Email: support@ibetsports.ag</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const DisputeResolutionContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-brand-primary-green mb-6">
      Dispute Resolution
    </h1>
    <div className="space-y-5 text-brand-soft-white">
      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Our Commitment
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          At IBetSports, we are committed to resolving disputes fairly and
          efficiently. Our customer support team is available 24/7 to assist
          you.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Step-by-Step Resolution Process
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Step 1: Initial Contact
            </h3>
            <p>
              Contact our customer support team via Live Chat, Email, or Phone.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Step 2: Investigation
            </h3>
            <p>Our team will investigate your case thoroughly.</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Step 3: Resolution & Communication
            </h3>
            <p>
              We will contact you with our findings and proposed resolution.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Escalation Process
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Level 1: Supervisor Review
            </h3>
            <p>Request a supervisor review within 7 days.</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Level 2: Management Review
            </h3>
            <p>Request a management review within 14 days.</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Level 3: Independent Mediation
            </h3>
            <p>For unresolved disputes, we offer independent mediation.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          External Dispute Resolution
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Gaming License Authority
            </h3>
            <p>Antigua and Barbuda Financial Services Regulatory Commission</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Alternative Dispute Resolution
            </h3>
            <p>eCOGRA (eCommerce Online Gaming Regulation and Assurance)</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const FairnessRNGContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-brand-primary-green mb-6">
      Fairness & RNG Testing
    </h1>
    <div className="space-y-5 text-brand-soft-white">
      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Our Commitment
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          At IBetSports, fairness and transparency are fundamental. Our games
          use certified Random Number Generators (RNG) to ensure unbiased
          outcomes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Random Number Generation (RNG)
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              What is RNG?
            </h3>
            <p>
              RNG is a computational process that produces sequences of numbers
              that lack any pattern.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              RNG Certification
            </h3>
            <p>
              All our RNG systems are certified by internationally recognized
              testing laboratories.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Independent Testing & Auditing
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Testing Laboratories
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>eCOGRA</li>
              <li>iTech Labs</li>
              <li>Gaming Laboratories International (GLI)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Audit Frequency
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>RNG testing: Monthly</li>
              <li>Payout percentage verification: Quarterly</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Return to Player (RTP) Information
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          Return to Player (RTP) is the percentage of wagered money that a game
          will pay back to players over time.
        </p>
      </section>
    </div>
  </div>
);

const AccountPayoutsContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-brand-primary-green mb-6">
      Account, Payouts & Bonuses
    </h1>
    <div className="space-y-5 text-brand-soft-white">
      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Account Management
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Account Registration
            </h3>
            <p>
              To create an account, you must be at least 18 years of age and
              provide accurate information.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Account Verification
            </h3>
            <p>
              Verification is required for withdrawals. Upload a photo ID and
              utility bill.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Account Security
            </h3>
            <p>We implement security measures to protect your account.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Payout Information
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Withdrawal Methods
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cryptocurrencies</li>
              <li>E-Wallets</li>
              <li>Credit/Debit Cards</li>
              <li>Bank Transfer</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Withdrawal Limits
            </h3>
            <p>
              Daily Limit: $10,000, Weekly Limit: $50,000, Monthly Limit:
              $200,000
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Bonus System
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Welcome Bonus Package
            </h3>
            <p>
              100% match up to $1,000 + 100 free spins on your first deposit.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Wagering Requirements
            </h3>
            <p>
              Casino Bonuses: 35x bonus amount, Sports Bonuses: 5x bonus amount.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const AMLContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-brand-primary-green mb-6">
      Anti-Money Laundering (AML) Policy
    </h1>
    <div className="space-y-5 text-brand-soft-white">
      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Our Commitment
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          IBetSports is committed to maintaining the highest standards of
          anti-money laundering (AML) compliance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Customer Due Diligence (CDD)
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Identity Verification
            </h3>
            <p>All customers must provide valid identification.</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Transaction Monitoring
            </h3>
            <p>
              We continuously monitor customer accounts for suspicious
              activities.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Reporting & Compliance
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Suspicious Activity Reports (SARs)
            </h3>
            <p>
              We file reports with relevant authorities when suspicious activity
              is identified.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Staff Training & Awareness
            </h3>
            <p>All staff receive comprehensive AML training.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Customer Responsibilities
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          Customers must provide accurate information and report any suspicious
          activity.
        </p>
      </section>
    </div>
  </div>
);

const HouseRulesContent = () => (
  <div className="max-w-4xl mx-auto p-4">
    <h1 className="text-3xl font-bold text-brand-primary-green mb-6">
      House Rules & Regulations
    </h1>
    <div className="space-y-5 text-brand-soft-white">
      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Rule Clarification
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed">
          1 - All rules, regulations, and payoffs are subject to change by
          ibetsports.ag without prior written notice.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          2 - Any sports or horse racing ruling not specifically stated in the
          rules or regulations will be decided according to official Las Vegas
          rules.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          3 - ibetsports.ag shall not be responsible for any damages or losses
          deemed or alleged to have resulted from, or been caused by, this
          website or its content. This includes any person’s use or misuse of
          the content, inability to connect with or use the site, delays in
          operations or transmission, communication failures, or any errors or
          omissions in the content.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          4 - All clients must be at least the legal alcoholic beverage drinking
          age in their country, state, or jurisdiction.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          5 - All rules, regulations, and wagering odds will be constantly
          updated on our website. Please double-check any issue or difference in
          the rules before making a claim with our customer service staff.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          6 - ibetsports.ag reserves the right to limit or refuse services for
          any reason and to refuse wagers from clients located in jurisdictions
          where online wagering is illegal. Certain countries may be restricted
          from creating an account, depositing funds, or claiming a bonus.
          Restricted countries are subject to change without prior notice.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          7 - All rules, regulations, and wagering odds will be constantly
          updated on our website. Please double-check any issue or difference in
          the rules before making a claim with our customer service staff.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          8 - Minimum and maximum wager amounts on all sporting events will be
          determined by ibetsports.ag and are subject to change without prior
          written notice. ibetsports.ag also reserves the right to adjust limits
          on individual accounts as part of regular account profiling. Services
          are intended for recreational purposes, and specific profiles will be
          assigned whenever non-recreational play or activity is identified.
          Such activity includes, but is not limited to: betting on both sides
          of a wager, using multiple accounts, betting high-risk lines or
          events, steam plays, betting exclusively on one type of event or
          market, or collusion. To be considered a recreational player, accounts
          must show balanced action across different bet types, markets, and
          events (“50/50 action” requirements).
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          9 - ibetsports.ag will not accept a wager without the proper account
          number and password for both telephone and online wagering.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          10 - Each client is responsible for maintaining the security of their
          betting account and should take all necessary measures to prevent its
          use by any third party. Any transaction made with the account number
          and password will be considered valid, subject to the current account
          balance.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          11 - All accounts are private and confidential. All telephone calls
          are recorded for the protection of ibetsports.ag and its clients in
          case of disputes. Any dispute must be claimed within seven (7) days of
          the graded wager.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          12 - When wagering online, members are solely responsible for their
          own account transactions. Please review all wagers for accuracy before
          submitting them. ibetsports.ag is not responsible for missing or
          duplicate wagers made by the client and will not entertain discrepancy
          claims regarding missing or duplicate plays. Clients may review their
          “OPEN BETS” on the site after each session to ensure all wagers were
          accepted. Check all xtransactions carefully.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          13 - Wagers placed online or by phone can be changed or cancelled by
          the customer only if all of the following conditions are met:
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          A. The lines and odds are the same as the original wager.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          B. No more than five (5) minutes have passed since the original wager.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          C. The game or event has not started.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          14 - After wagers are placed by telephone, the clerk will read them
          back. If the read-back is correct, the client must confirm by stating
          their account number and password. If a mistake is noticed, it is the
          client’s responsibility to inform the clerk before the call ends. Once
          the client confirms the read-back, wagers are final. If a client hangs
          up before confirming but the plays were read back correctly, all plays
          are considered final.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          15 - If a client is disconnected before a read-back is completed, it
          is their responsibility to call back as soon as possible to verify
          pending wagers. If the client provided a team and amount before
          disconnection, the wager will be entered into the system even without
          a read-back
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          16 - Wagers are graded only after the contest is final.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          17 - Baseball, Football, Basketball, Hockey, and Soccer events must be
          played on the scheduled date. Any game cancelled or postponed will be
          deemed “no action” and funds returned. Tennis, Boxing, NASCAR, and
          Golf events must be played within seven (7) days of the original date.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          18 - For suspended games, continued games, and overturned decisions,
          ibetsports.ag follows generally accepted Las Vegas gaming rules.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          19 - In all future wagers (e.g., Super Bowl winner), the winner as
          determined by the League Commissioner will be declared the winner for
          betting purposes. In NCAA Football, the winner of the BCS Championship
          Game will be declared the National Champion. Any future wager does not
          count toward any rollover requirement.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          20 - For horse racing, the clerk will provide the POST TIME once the
          ticket is completed. This POST TIME must match or be earlier than the
          OFF TIME posted at the grading website. Post times are non-negotiable
          and final. Horse wagers do not count toward rollover requirements
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          21 - ibetsports.ag relies entirely on the information provided by the
          customer in their application to establish a wagering account. Payouts
          will only be made to the name on the account. Payments to third
          parties are not allowed
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          22 - If funds are credited to a customer’s account in error, the
          customer must notify ibetsports.ag immediately. Unless otherwise
          notified by ibetsports.ag, any transactions made with such funds will
          be void.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          23 - Although our computer system maintains exact balances, it is the
          client’s responsibility to verify their account balance each time they
          log in or call by phone.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          24 - Payout requests must be submitted online via our cashier. Some
          payment options may be available only by phone for specific account
          profiles. Payment methods and limits are subject to change without
          prior notice and may depend on third-party providers. All outgoing
          fees are the responsibility of the customer. Customers can unlock free
          payments based on VIP status. All bonuses carry a rollover
          requirement, which the customer agrees to complete when accepted.
          Payouts are sent using the same method as the deposit (restrictions
          may apply)
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          25 - Action on Casino, Future Wagers, Live Wagering, and Horses does
          not count toward sportsbook bonus rollover. For Casino rollover, some
          games and/or providers may not count or may be excluded from specific
          promotions.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          26 - The maximum payout for any parlay is 500:1.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          27 - You must play your deposit amount at least once before requesting
          a payout. The 1x calculation is based on the lesser of the “Risk” or
          “Win” amount.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          28 - Winnings from free plays in free contests have a maximum payout
          of $100. For all non-deposit bonuses (contests, free plays,
          complimentary spins, etc.), a minimum deposit and action requirements
          will apply.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          29 - Bonus rollover requirements may vary by location at the
          discretion of management.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          30 - Third-party products such as Live Wagering and Props Builder may
          have different rules for certain sports. Please refer to each
          product’s page for specific rules. It is the client’s responsibility
          to know and understand these rules.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          31 - Customers cannot combine bonuses. If an account receives multiple
          bonuses, rollover requirements will be cumulative, and withdrawal
          restrictions will remain until all rollovers are completed.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          32 - In case of duplicate accounts, the site will consolidate them
          into one active account and close all others. Bonuses received may be
          forfeited or collected from all accounts.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          33 - ibetsports.ag reserves the right to request documentation and
          require an account to complete a standard KYC process whenever deemed
          necessary.
        </p>
        <p className="text-brand-smoke-gray leading-relaxed">
          34 - ibetsports.ag reserves the right to request documentation and
          require an account to complete a standard KYC process whenever deemed
          necessary.
        </p>
      </section>

      {/* <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Prohibited Activities
        </h2>
        <div className="text-sm text-brand-smoke-gray">
          <p className="mb-2">
            The following activities are strictly prohibited:
          </p>
          <div className="grid md:grid-cols-2 gap-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Creating multiple accounts</li>
              <li>Using fraudulent payment methods</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Bonus abuse</li>
              <li>Collusion between players</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Betting Limits & Restrictions
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Standard Limits
            </h3>
            <p>Minimum bet: $0.10, Maximum bet: Varies by game.</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Bonus Betting Restrictions
            </h3>
            <p>Maximum bet with bonus funds: $5 per spin/hand.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Game Malfunctions & Disputes
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          Malfunction voids all pays and plays. Contact customer support for
          disputes.
        </p>
      </section> */}
    </div>
  </div>
);

const SportsRulesContent = () => (
  <div className="space-y-6">
    <SportRules />
  </div>
);

const CasinoRulesContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-brand-primary-green mb-6">
      Casino Rules
    </h1>
    <div className="space-y-5 text-brand-soft-white">
      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          General Casino Rules
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          These rules apply to all casino games offered on IBetSports.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Game Integrity
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <p>All games use certified Random Number Generators (RNG).</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Betting Rules
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <p>Minimum bet: $0.10, Maximum bet: Varies by game.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Malfunctions
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          Malfunction voids all pays and plays. Contact customer support
          immediately.
        </p>
      </section>
    </div>
  </div>
);

const AboutUsContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-brand-primary-green mb-6">
      About IBetSports
    </h1>
    <div className="space-y-5 text-brand-soft-white">
      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Our Story
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          IBetSports has been at the forefront of online gaming since 1999.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Our Mission
        </h2>
        <p className="text-brand-smoke-gray leading-relaxed text-sm">
          Our mission is to provide the ultimate online gaming experience.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Why Choose IBetSports
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Industry Experience
            </h3>
            <p>With over 25 years in the online gaming industry.</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-soft-white mb-1">
              Licensed & Regulated
            </h3>
            <p>We operate under a full gaming license.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
          Contact Information
        </h2>
        <div className="text-sm text-brand-smoke-gray space-y-3">
          <div>
            <p>Customer Support: Available 24/7</p>
            <p>Email: support@ibetsports.ag</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const openPopup = (popup: string) => {
    setActivePopup(popup);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const goHome = () => {
    setActivePopup(null);
    window.location.href = "/";
  };

  const popupContent = {
    "terms-conditions": <TermsConditionsContent />,
    "responsible-gaming": <ResponsibleGamingContent />,
    "privacy-policy": <PrivacyPolicyContent />,
    "help-faqs": <HelpFAQsContent />,
    "dispute-resolution": <DisputeResolutionContent />,
    "fairness-rng": <FairnessRNGContent />,
    "account-payouts": <AccountPayoutsContent />,
    aml: <AMLContent />,
    "house-rules": <HouseRulesContent />,
    "sports-rules": <SportsRulesContent />,
    "casino-rules": <CasinoRulesContent />,
    "about-us": <AboutUsContent />,
  };

  return (
    <>
      <footer className="bg-brand-charcoal-black-tertiary text-brand-soft-white">
        {/* Social Media Icons */}
        <div className="py-4 sm:py-6 border-b border-brand-smoke-gray/10">
          <div className="container mx-auto px-3 sm:px-4 md:px-6">
            <div className="flex justify-center space-x-3 sm:space-x-4">
              <a
                href="https://www.instagram.com/i_bet_sports?igsh=MW1mNmRtZXR2OTlrag=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-smoke-gray/20 rounded-lg flex items-center justify-center hover:bg-brand-primary-green/20 transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-brand-soft-white" />
              </a>
              <a
                href="https://www.reddit.com/user/IBetSports-ag/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-smoke-gray/20 rounded-lg flex items-center justify-center hover:bg-brand-primary-green/20 transition-colors"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-brand-soft-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                </svg>
              </a>
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-smoke-gray/20 rounded-lg flex items-center justify-center group cursor-default relative"
                title="Secure Gaming Site - SSL Protected"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary-green"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  <path
                    d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                    fill="black"
                  />
                </svg>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-brand-charcoal-black text-brand-soft-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Secure Site
                </div>
              </div>
              <a
                href="https://topaffiliates.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-brand-smoke-gray/20 rounded-lg px-3 py-2 hover:bg-brand-primary-green/20 transition-colors group"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-brand-soft-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <span className="text-brand-soft-white text-xs font-medium">
                  Affiliate Program
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Accordion / Desktop Grid */}
        <div className="py-6 sm:py-8 md:py-12">
          <div className="container mx-auto px-3 sm:px-4 md:px-6">
            {/* Mobile Accordion */}
            <div className="md:hidden space-y-2">
              {/* Quick Links */}
              <div className="border-b border-brand-smoke-gray/10 pb-2">
                <div className="flex justify-between items-center py-2">
                  <h3 className="text-brand-primary-green font-bold text-sm uppercase">
                    Quick Links
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openPopup("terms-conditions")}
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors text-left"
                  >
                    Terms & Conditions
                  </button>
                  <button
                    onClick={() => openPopup("responsible-gaming")}
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors text-left"
                  >
                    Responsible Gaming
                  </button>
                  <button
                    onClick={() => openPopup("privacy-policy")}
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                  <button
                    onClick={() => openPopup("help-faqs")}
                    className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors text-left"
                  >
                    Help & FAQs
                  </button>
                </div>
              </div>

              {/* Legal Section */}
              <div className="border-b border-brand-smoke-gray/10 pb-2">
                <button
                  onClick={() => toggleSection("legal")}
                  className="flex justify-between items-center w-full py-2"
                >
                  <h3 className="text-brand-primary-green font-bold text-sm uppercase">
                    Legal
                  </h3>
                  {expandedSection === "legal" ? (
                    <ChevronUp className="w-4 h-4 text-brand-primary-green" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-brand-primary-green" />
                  )}
                </button>
                {expandedSection === "legal" && (
                  <div className="grid grid-cols-1 gap-1 mt-2">
                    <button
                      onClick={() => openPopup("dispute-resolution")}
                      className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors text-left"
                    >
                      Dispute Resolution
                    </button>
                    <button
                      onClick={() => openPopup("fairness-rng")}
                      className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors text-left"
                    >
                      Fairness & RNG Testing
                    </button>
                    <button
                      onClick={() => openPopup("account-payouts")}
                      className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors text-left"
                    >
                      Account & Payouts
                    </button>
                    <button
                      onClick={() => openPopup("aml")}
                      className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors text-left"
                    >
                      AML
                    </button>
                  </div>
                )}
              </div>

              {/* Rules Section */}
              <div className="border-b border-brand-smoke-gray/10 pb-2">
                <button
                  onClick={() => toggleSection("rules")}
                  className="flex justify-between items-center w-full py-2"
                >
                  <h3 className="text-brand-primary-green font-bold text-sm uppercase">
                    Rules
                  </h3>
                  {expandedSection === "rules" ? (
                    <ChevronUp className="w-4 h-4 text-brand-primary-green" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-brand-primary-green" />
                  )}
                </button>
                {expandedSection === "rules" && (
                  <div className="grid grid-cols-1 gap-1 mt-2">
                    <button
                      onClick={() => openPopup("house-rules")}
                      className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors text-left"
                    >
                      House Rules
                    </button>
                    <button
                      onClick={() => openPopup("sports-rules")}
                      className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors text-left"
                    >
                      Sports Rules
                    </button>
                    <button
                      onClick={() => openPopup("casino-rules")}
                      className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors text-left"
                    >
                      Casino Rules
                    </button>
                  </div>
                )}
              </div>

              {/* Information Section */}
              <div className="border-b border-brand-smoke-gray/10 pb-2">
                <button
                  onClick={() => toggleSection("information")}
                  className="flex justify-between items-center w-full py-2"
                >
                  <h3 className="text-brand-primary-green font-bold text-sm uppercase">
                    Information
                  </h3>
                  {expandedSection === "information" ? (
                    <ChevronUp className="w-4 h-4 text-brand-primary-green" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-brand-primary-green" />
                  )}
                </button>
                {expandedSection === "information" && (
                  <div className="grid grid-cols-1 gap-1 mt-2">
                    <button
                      onClick={() => openPopup("about-us")}
                      className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors text-left"
                    >
                      About Us
                    </button>
                    <button
                      onClick={() => openPopup("help-faqs")}
                      className="text-xs text-brand-soft-white hover:text-brand-primary-green transition-colors text-left"
                    >
                      Help & FAQs
                    </button>
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
                    <button
                      onClick={() => openPopup("terms-conditions")}
                      className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline text-left"
                    >
                      Terms and Conditions
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openPopup("dispute-resolution")}
                      className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline text-left"
                    >
                      Dispute Resolution
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openPopup("fairness-rng")}
                      className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline text-left"
                    >
                      Fairness & RNG Testing Methods
                    </button>
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
                    <button
                      onClick={() => openPopup("privacy-policy")}
                      className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline text-left"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openPopup("responsible-gaming")}
                      className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline text-left"
                    >
                      Responsible Gaming
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openPopup("account-payouts")}
                      className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline text-left"
                    >
                      Account, Payouts and Bonuses
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openPopup("aml")}
                      className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline text-left"
                    >
                      AML
                    </button>
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
                    <button
                      onClick={() => openPopup("house-rules")}
                      className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline text-left"
                    >
                      House Rules
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openPopup("sports-rules")}
                      className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline text-left"
                    >
                      Sports Rules
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openPopup("casino-rules")}
                      className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline text-left"
                    >
                      Casino Rules
                    </button>
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
                    <button
                      onClick={() => openPopup("about-us")}
                      className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline text-left"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openPopup("help-faqs")}
                      className="text-brand-soft-white hover:text-brand-primary-green transition-colors uppercase text-sm font-medium hover:underline text-left"
                    >
                      Help & FAQs
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-brand-charcoal-black py-3 sm:py-4 border-t border-brand-smoke-gray/20">
          <div className="container mx-auto px-3 sm:px-4 md:px-6">
            {/* Copyright */}
            <div className="text-center mb-3 sm:mb-4">
              <p className="text-brand-soft-white font-medium text-xs sm:text-sm">
                © 2025 Ibetsports | All Rights Reserved
              </p>
            </div>

            {/* Payment Methods */}
            <div className="flex justify-center items-center">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-brand-smoke-gray/20 rounded p-1 sm:p-1.5">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
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
                <div className="bg-brand-smoke-gray/20 rounded p-1 sm:p-1.5">
                  <div className="text-brand-primary-green font-bold text-[0.5rem] sm:text-[0.6rem] leading-tight">
                    25
                    <br />
                    YRS
                  </div>
                </div>
                <div className="bg-brand-smoke-gray/20 rounded p-1 sm:p-1.5">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-red-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div className="bg-brand-smoke-gray/20 rounded p-1 sm:p-1.5">
                  <div className="text-brand-soft-white font-bold text-[0.4rem] sm:text-[0.5rem] border border-brand-soft-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    21+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Popup Modal */}
      {activePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="relative w-full max-w-6xl h-[95vh] bg-brand-charcoal-black-secondary rounded-lg overflow-hidden border border-brand-primary-green/30">
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-brand-smoke-gray/20 bg-brand-charcoal-black flex-shrink-0">
              <Button
                onClick={goHome}
                variant="ghost"
                className="text-brand-primary-green hover:text-brand-vibrant-green hover:bg-brand-primary-green/10 flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
              <Button
                onClick={closePopup}
                variant="ghost"
                className="text-brand-smoke-gray hover:text-brand-soft-white hover:bg-brand-smoke-gray/10 p-2"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Content */}
            <div
              className="flex-1 overflow-y-auto p-4 sm:p-6"
              style={{ height: "calc(95vh - 80px)" }}
            >
              {popupContent[activePopup as keyof typeof popupContent]}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
