"use client"

import { useState } from "react"
import TopNavigation from "@/components/top-navigation"
import RacebookTabContent from "@/components/racebook-tab-content"
import Footer from "@/components/footer"

export default function RacebookPage() {
  const [activeTab, setActiveTab] = useState("racebook")
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
      <RacebookTabContent setIsRegistrationOpen={() => setIsRegistrationOpen(true)} />
      <Footer />
    </div>
  )
}
