"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Trophy, Gem } from "lucide-react"
import CasinoTabContent from "@/components/casino-tab-content"
import SportsbookTabContent from "@/components/sportsbook-tab-content"

type Tab = "casino" | "sports"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>("casino")

  const renderContent = () => {
    switch (activeTab) {
      case "casino":
        return <CasinoTabContent />
      case "sports":
        return <SportsbookTabContent />
      default:
        return <CasinoTabContent />
    }
  }

  return (
    <div className="w-full text-white min-h-screen">
      {/* Welcome Bonus Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">125% Welcome Bonus up to $1,250!</h1>
        <p className="text-sm md:text-base mt-2">Make your first deposit and start your winning journey.</p>
      </div>

      {/* Tab Navigation */}
      <nav className="bg-gray-900/50 backdrop-blur-sm sticky top-14 z-40 border-b border-gray-700">
        <div className="container mx-auto flex justify-center items-center space-x-4 md:space-x-8 p-4">
          <Button
            variant="ghost"
            className={`text-lg font-semibold transition-all duration-300 px-6 py-3 ${
              activeTab === "casino"
                ? "text-pink-400 border-b-2 border-pink-400 bg-pink-400/10"
                : "text-gray-400 hover:text-white hover:bg-gray-800/50"
            }`}
            onClick={() => setActiveTab("casino")}
          >
            <Gem className="mr-2 h-5 w-5" />
            Casino
          </Button>
          <Button
            variant="ghost"
            className={`text-lg font-semibold transition-all duration-300 px-6 py-3 ${
              activeTab === "sports"
                ? "text-pink-400 border-b-2 border-pink-400 bg-pink-400/10"
                : "text-gray-400 hover:text-white hover:bg-gray-800/50"
            }`}
            onClick={() => setActiveTab("sports")}
          >
            <Trophy className="mr-2 h-5 w-5" />
            Sports
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">{renderContent()}</main>
    </div>
  )
}
