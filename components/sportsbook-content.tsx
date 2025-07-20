"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SportsbookContent() {
  type Match = {
    id: number
    league: string
    home: string
    away: string
    score: string
    time: string
    status: "LIVE" | "UPCOMING"
  }

  const [matches] = useState<Match[]>([
    {
      id: 1,
      league: "Argentina • Superliga",
      home: "Racing Club",
      away: "Barracas Central",
      score: "0 – 0",
      time: "44'",
      status: "LIVE",
    },
    {
      id: 2,
      league: "Brazil • Serie A",
      home: "Bahia",
      away: "Atlético-MG",
      score: "0 – 0",
      time: "28'",
      status: "LIVE",
    },
    {
      id: 3,
      league: "Brazil • Serie C",
      home: "Tombense",
      away: "ABC FC",
      score: "1 – 2",
      time: "90'",
      status: "LIVE",
    },
  ])

  return (
    <section className="px-4 md:px-12 py-12 md:py-20 bg-brand-charcoal-black">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Sports Betting</h1>
          <p className="text-brand-smoke-gray text-lg md:text-xl">
            Bet live on your favourite sports with real-time odds
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((m) => (
            <Card
              key={m.id}
              className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 rounded-2xl"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge
                    className={
                      m.status === "LIVE"
                        ? "bg-brand-primary-green/20 text-brand-primary-green"
                        : "bg-brand-vibrant-green/20 text-brand-vibrant-green"
                    }
                  >
                    {m.status}
                  </Badge>
                  <span className="text-sm text-brand-smoke-gray">{m.time}</span>
                </div>

                <p className="text-brand-smoke-gray text-sm">{m.league}</p>

                <div className="flex items-center justify-between font-bold text-lg">
                  <span className="text-brand-soft-white">{m.home}</span>
                  <span className="text-brand-primary-green">{m.score}</span>
                  <span className="text-brand-soft-white">{m.away}</span>
                </div>

                <Button size="sm" className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark mt-4">
                  Bet Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
