"use client"

import { useState } from "react"
import TopNavigation from "@/components/top-navigation"
import SportsbookTabContent from "@/components/sportsbook-tab-content"
import Footer from "@/components/footer"

export default function SportsPage() {
  const [activeTab, setActiveTab] = useState("sports")
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
      <SportsbookTabContent setIsRegistrationOpen={() => setIsRegistrationOpen(true)} />
      <Footer />
    </div>
  )
}
