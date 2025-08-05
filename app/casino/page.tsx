"use client"

import { useState } from "react"
import TopNavigation from "@/components/top-navigation"
import CasinoTabContent from "@/components/casino-tab-content"
import Footer from "@/components/footer"

export default function CasinoPage() {
  const [activeTab, setActiveTab] = useState("casino")
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
      <CasinoTabContent setIsRegistrationOpen={() => setIsRegistrationOpen(true)} />
      <Footer />
    </div>
  )
}
