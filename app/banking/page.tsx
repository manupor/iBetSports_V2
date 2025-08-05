"use client"

import { useState } from "react"
import TopNavigation from "@/components/top-navigation"
import BankingTabContent from "@/components/banking-tab-content"
import Footer from "@/components/footer"

export default function BankingPage() {
  const [activeTab, setActiveTab] = useState("banking")
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <div className="min-h-screen bg-brand-charcoal-black">
      <TopNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showTabs={true}
        onSignUpClick={() => setIsRegistrationOpen(true)}
        onLoginClick={() => console.log("Login clicked")}
      />
      <BankingTabContent setIsRegistrationOpen={() => setIsRegistrationOpen(true)} />
      <Footer />
    </div>
  )
}
