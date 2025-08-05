"use client"

import { useState } from "react"
import TopNavigation from "@/components/top-navigation"
import PromotionsTabContent from "@/components/promotions-tab-content"
import Footer from "@/components/footer"

export default function PromotionsPage() {
  const [activeTab, setActiveTab] = useState("promotions")
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
      <PromotionsTabContent setIsRegistrationOpen={() => setIsRegistrationOpen(true)} />
      <Footer />
    </div>
  )
}
