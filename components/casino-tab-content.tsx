"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, LayoutGrid, List, Star, Zap, Crown, TrendingUp, Clock, Users } from 'lucide-react'

interface CasinoTabContentProps {
  setIsRegistrationOpen?: (open: boolean) => void
}

export default function CasinoTabContent({ setIsRegistrationOpen }: CasinoTabContentProps = {}) {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const allGames = [
    // Slot Games
    {
      id: 1,
      name: "Mega Fortune Dreams",
      provider: "NetEnt",
      image: "/images/Fizzy-Pennyslot.jpg",
      rtp: "96.4%",
      jackpot: "$2,847,392",
      category: "jackpot",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "12.3K",
      description: "Progressive jackpot slot with luxury theme",
    },
    {
      id: 2,
      name: "Lightning Roulette",
      provider: "Evolution",
      image: "/images/Golden-Catch.jpg",
      rtp: "97.3%",
      jackpot: null,
      category: "live",
      isNew: false,
      isHot: true,
      rating: 4.9,
      players: "8.7K",
      description: "Live roulette with random multipliers",
    },
    {
      id: 3,
      name: "Book of Dead",
      provider: "Play'n GO",
      image: "/images/Max-Megaways-2.jpg",
      rtp: "96.2%",
      jackpot: null,
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.7,
      players: "15.2K",
      description: "Egyptian adventure slot game",
    },
    {
      id: 4,
      name: "Immersive Roulette",
      provider: "Evolution",
      image: "/images/Gifts-of-Fortune.jpg",
      rtp: "97.3%",
      jackpot: null,
      category: "live",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "6.9K",
      description: "HD live roulette experience",
    },
    {
      id: 5,
      name: "Starburst",
      provider: "NetEnt",
      image: "/images/Kingmaker-Fully-Loaded.jpg",
      rtp: "96.1%",
      jackpot: null,
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "22.1K",
      description: "Classic space-themed slot",
    },
    {
      id: 6,
      name: "Blackjack Pro",
      provider: "NetEnt",
      image: "/images/Castle-of-Terror.jpg",
      rtp: "99.4%",
      jackpot: null,
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.9,
      players: "4.3K",
      description: "Professional blackjack variant",
    },
    {
      id: 7,
      name: "Gates of Olympus",
      provider: "Pragmatic Play",
      image: "/images/Danger-High-Voltage.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: true,
      isHot: true,
      rating: 4.7,
      players: "18.5K",
      description: "Greek mythology themed slot",
    },
    {
      id: 8,
      name: "Sweet Bonanza",
      provider: "Pragmatic Play",
      image: "/images/Chocolates.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "16.2K",
      description: "Candy-themed tumbling reels slot",
    },
    {
      id: 9,
      name: "Wolf Gold",
      provider: "Pragmatic Play",
      image: "/images/Big-Bad-Bison.jpg",
      rtp: "96.0%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "11.7K",
      description: "Wild west adventure slot",
    },
    {
      id: 10,
      name: "Dead or Alive 2",
      provider: "NetEnt",
      image: "/images/wild-mustang.jpg",
      rtp: "96.8%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.9,
      players: "9.4K",
      description: "High volatility western slot",
    },
    {
      id: 11,
      name: "Gonzo's Quest",
      provider: "NetEnt",
      image: "/images/wild-rocks.jpg",
      rtp: "96.0%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.7,
      players: "13.8K",
      description: "Avalanche feature adventure slot",
    },
    {
      id: 12,
      name: "Reactoonz",
      provider: "Play'n GO",
      image: "/images/ultimo-bingo-paris.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "7.9K",
      description: "Alien-themed cluster pays slot",
    },
    {
      id: 13,
      name: "European Roulette",
      provider: "NetEnt",
      image: "/images/tacomania.jpg",
      rtp: "97.3%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.8,
      players: "5.2K",
      description: "Classic European roulette",
    },
    {
      id: 14,
      name: "American Roulette",
      provider: "NetEnt",
      image: "/images/xtreme.jpg",
      rtp: "94.7%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "3.1K",
      description: "American style roulette",
    },
    {
      id: 15,
      name: "French Roulette",
      provider: "NetEnt",
      image: "/images/warrior-angels.jpg",
      rtp: "98.6%",
      category: "table",
      isNew: false,
      isHot: true,
      rating: 4.9,
      players: "2.8K",
      description: "French roulette with La Partage",
    },
    {
      id: 16,
      name: "Multi-hand Blackjack",
      provider: "NetEnt",
      image: "/images/totem-spirits.jpg",
      rtp: "99.6%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.8,
      players: "4.7K",
      description: "Play multiple hands simultaneously",
    },
    {
      id: 17,
      name: "European Blackjack",
      provider: "NetEnt",
      image: "/images/triple-bonus.jpg",
      rtp: "99.3%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.7,
      players: "3.9K",
      description: "European blackjack variant",
    },
    {
      id: 18,
      name: "21 Burn Blackjack",
      provider: "Betsoft",
      image: "/images/turbo-2.jpg",
      rtp: "99.5%",
      category: "table",
      isNew: true,
      isHot: true,
      rating: 4.8,
      players: "2.3K",
      description: "Unique blackjack with burn feature",
    },
    {
      id: 19,
      name: "Speed Roulette",
      provider: "Evolution",
      image: "/images/wonderful-lamp.jpg",
      rtp: "97.3%",
      category: "live",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "7.2K",
      description: "Fast-paced live roulette",
    },
    {
      id: 20,
      name: "Speed Baccarat",
      provider: "Evolution",
      image: "/images/Fizzy-Pennyslot.jpg",
      rtp: "98.9%",
      category: "live",
      isNew: false,
      isHot: true,
      rating: 4.9,
      players: "5.8K",
      description: "Quick live baccarat rounds",
    },
    {
      id: 21,
      name: "Lightning Blackjack",
      provider: "Evolution",
      image: "/images/Golden-Catch.jpg",
      rtp: "99.5%",
      category: "live",
      isNew: true,
      isHot: true,
      rating: 4.9,
      players: "6.4K",
      description: "Live blackjack with multipliers",
    },
    {
      id: 22,
      name: "First Person Roulette",
      provider: "Evolution",
      image: "/images/Max-Megaways-2.jpg",
      rtp: "97.3%",
      category: "live",
      isNew: false,
      isHot: false,
      rating: 4.7,
      players: "3.5K",
      description: "RNG roulette with live switch",
    },
    {
      id: 23,
      name: "First Person Baccarat",
      provider: "Evolution",
      image: "/images/Gifts-of-Fortune.jpg",
      rtp: "98.9%",
      category: "live",
      isNew: false,
      isHot: false,
      rating: 4.8,
      players: "2.9K",
      description: "RNG baccarat with live option",
    },
    {
      id: 24,
      name: "First Person Blackjack",
      provider: "Evolution",
      image: "/images/Kingmaker-Fully-Loaded.jpg",
      rtp: "99.4%",
      category: "live",
      isNew: false,
      isHot: false,
      rating: 4.8,
      players: "4.1K",
      description: "RNG blackjack with live dealer",
    },
    // Crash Games
    {
      id: 25,
      name: "Aviator",
      provider: "Spribe",
      image: "/images/aviator-new.jpg",
      rtp: "97.0%",
      category: "crash",
      isNew: false,
      isHot: true,
      rating: 4.9,
      players: "25.3K",
      description: "Popular crash game with airplane",
    },
    // More Slots
    {
      id: 31,
      name: "Bonanza Megaways",
      provider: "Big Time Gaming",
      image: "/images/cash-quest.jpg",
      rtp: "96.0%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "19.5K",
      description: "Mining themed Megaways slot",
    },
    {
      id: 32,
      name: "Immortal Romance",
      provider: "Microgaming",
      image: "/images/coins-96.jpg",
      rtp: "96.9%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.7,
      players: "12.4K",
      description: "Vampire romance themed slot",
    },
    {
      id: 33,
      name: "Thunderstruck II",
      provider: "Microgaming",
      image: "/images/coins-88.jpg",
      rtp: "96.7%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "10.8K",
      description: "Norse mythology slot sequel",
    },
    {
      id: 34,
      name: "Fire Joker",
      provider: "Play'n GO",
      image: "/images/bouncy-bombs.jpg",
      rtp: "96.2%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "8.9K",
      description: "Classic fruit slot with fire",
    },
    {
      id: 35,
      name: "Big Bass Bonanza",
      provider: "Pragmatic Play",
      image: "/images/coins-98.jpg",
      rtp: "96.7%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.9,
      players: "21.3K",
      description: "Fishing themed slot adventure",
    },
    // Jackpot Games
    {
      id: 36,
      name: "Mega Moolah",
      provider: "Microgaming",
      image: "/images/jugador-de-futbol-americano-de-estilo-neon.jpg",
      rtp: "88.1%",
      jackpot: "$15,234,567",
      category: "jackpot",
      isNew: false,
      isHot: true,
      rating: 4.6,
      players: "28.7K",
      description: "World's biggest progressive jackpot",
    },
    {
      id: 37,
      name: "Hall of Gods",
      provider: "NetEnt",
      image: "/images/retrato-de-personas-jugando-y-jugando-en-un-casino.jpg",
      rtp: "95.7%",
      jackpot: "$3,456,789",
      category: "jackpot",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "8.9K",
      description: "Norse gods progressive jackpot",
    },
    {
      id: 38,
      name: "Divine Fortune",
      provider: "NetEnt",
      image: "/images/football-hero-promotions.jpg",
      rtp: "96.6%",
      jackpot: "$1,234,567",
      category: "jackpot",
      isNew: false,
      isHot: true,
      rating: 4.7,
      players: "15.6K",
      description: "Ancient Greece jackpot slot",
    },
    // More Table Games
    {
      id: 39,
      name: "Baccarat Pro",
      provider: "NetEnt",
      image: "/images/Fizzy-Pennyslot.jpg",
      rtp: "98.9%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "4.5K",
      description: "Professional baccarat variant",
    },
    {
      id: 40,
      name: "Caribbean Stud Poker",
      provider: "NetEnt",
      image: "/images/Golden-Catch.jpg",
      rtp: "98.2%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "2.1K",
      description: "Caribbean poker variant",
    },
    {
      id: 41,
      name: "Crazy Time",
      provider: "Evolution",
      image: "/images/Fizzy-Pennyslot.jpg",
      rtp: "96.1%",
      category: "live",
      isNew: false,
      isHot: true,
      rating: 4.9,
      players: "35.2K",
      description: "Live game show with bonus rounds",
    },
    {
      id: 42,
      name: "Monopoly Live",
      provider: "Evolution",
      image: "/images/Golden-Catch.jpg",
      rtp: "96.2%",
      category: "live",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "28.4K",
      description: "Monopoly themed live game show",
    },
    {
      id: 43,
      name: "Dream Catcher",
      provider: "Evolution",
      image: "/images/Max-Megaways-2.jpg",
      rtp: "96.6%",
      category: "live",
      isNew: false,
      isHot: false,
      rating: 4.7,
      players: "18.9K",
      description: "Money wheel live game",
    },
    {
      id: 44,
      name: "Lightning Dice",
      provider: "Evolution",
      image: "/images/Gifts-of-Fortune.jpg",
      rtp: "96.6%",
      category: "live",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "12.3K",
      description: "Live dice game with multipliers",
    },
    {
      id: 45,
      name: "Book of Ra Deluxe",
      provider: "Novomatic",
      image: "/images/Kingmaker-Fully-Loaded.jpg",
      rtp: "95.1%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.7,
      players: "24.6K",
      description: "Egyptian adventure classic slot",
    },
    {
      id: 46,
      name: "Sizzling Hot Deluxe",
      provider: "Novomatic",
      image: "/images/Castle-of-Terror.jpg",
      rtp: "95.7%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "16.8K",
      description: "Classic fruit slot machine",
    },
    {
      id: 47,
      name: "Lucky Lady's Charm",
      provider: "Novomatic",
      image: "/images/Danger-High-Voltage.jpg",
      rtp: "95.1%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "19.2K",
      description: "Lucky charm themed slot",
    },
    {
      id: 48,
      name: "Razor Shark",
      provider: "Push Gaming",
      image: "/images/Chocolates.jpg",
      rtp: "96.7%",
      category: "slots",
      isNew: true,
      isHot: true,
      rating: 4.8,
      players: "22.1K",
      description: "Underwater shark adventure",
    },
    {
      id: 49,
      name: "The Dog House",
      provider: "Pragmatic Play",
      image: "/images/Big-Bad-Bison.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.7,
      players: "18.7K",
      description: "Dog themed slot with multipliers",
    },
    {
      id: 50,
      name: "Fruit Party",
      provider: "Pragmatic Play",
      image: "/images/wild-mustang.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "14.3K",
      description: "Colorful fruit cluster slot",
    },
    {
      id: 51,
      name: "Money Train 2",
      provider: "Relax Gaming",
      image: "/images/wild-rocks.jpg",
      rtp: "96.4%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "20.5K",
      description: "Wild west train heist slot",
    },
    {
      id: 52,
      name: "Temple Tumble",
      provider: "Relax Gaming",
      image: "/images/ultimo-bingo-paris.jpg",
      rtp: "96.3%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "11.9K",
      description: "Ancient temple adventure slot",
    },
    {
      id: 56,
      name: "Keno",
      provider: "Spribe",
      image: "/images/originals-cases.png",
      rtp: "97.0%",
      category: "crash",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "8.7K",
      description: "Number selection lottery game",
    },
    {
      id: 60,
      name: "Age of the Gods",
      provider: "Playtech",
      image: "/images/tacomania.jpg",
      rtp: "95.0%",
      jackpot: "$892,456",
      category: "jackpot",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.8K",
      description: "Greek mythology progressive jackpot",
    },
    {
      id: 61,
      name: "Gladiator Jackpot",
      provider: "Playtech",
      image: "/images/xtreme.jpg",
      rtp: "94.1%",
      jackpot: "$567,234",
      category: "jackpot",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "9.6K",
      description: "Roman gladiator progressive slot",
    },
    {
      id: 62,
      name: "Beach Life",
      provider: "Playtech",
      image: "/images/warrior-angels.jpg",
      rtp: "93.3%",
      jackpot: "$1,456,789",
      category: "jackpot",
      isNew: false,
      isHot: true,
      rating: 4.3,
      players: "7.2K",
      description: "Beach themed progressive jackpot",
    },
    {
      id: 63,
      name: "Three Card Poker",
      provider: "Evolution",
      image: "/images/totem-spirits.jpg",
      rtp: "96.6%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "3.8K",
      description: "Fast-paced poker variant",
    },
    {
      id: 64,
      name: "Casino Hold'em",
      provider: "Evolution",
      image: "/images/triple-bonus.jpg",
      rtp: "97.8%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "2.9K",
      description: "Texas Hold'em against the house",
    },
    {
      id: 65,
      name: "Dragon Tiger",
      provider: "Evolution",
      image: "/images/turbo-2.jpg",
      rtp: "96.3%",
      category: "table",
      isNew: true,
      isHot: true,
      rating: 4.7,
      players: "5.4K",
      description: "Simple two-card comparison game",
    },
    // Additional Slot Games
    {
      id: 66,
      name: "Buffalo King",
      provider: "Pragmatic Play",
      image: "/images/wonderful-lamp.jpg",
      rtp: "96.1%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.7,
      players: "17.2K",
      description: "Buffalo themed slot with megaways",
    },
    {
      id: 67,
      name: "Mustang Gold",
      provider: "Pragmatic Play",
      image: "/images/Fizzy-Pennyslot.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "13.8K",
      description: "Wild west mustang adventure",
    },
    {
      id: 68,
      name: "Great Rhino",
      provider: "Pragmatic Play",
      image: "/images/Golden-Catch.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "11.4K",
      description: "African safari themed slot",
    },
    {
      id: 69,
      name: "Pirate Gold",
      provider: "Pragmatic Play",
      image: "/images/Max-Megaways-2.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "19.6K",
      description: "Pirate treasure hunting slot",
    },
    {
      id: 70,
      name: "John Hunter Tomb",
      provider: "Pragmatic Play",
      image: "/images/Gifts-of-Fortune.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: true,
      isHot: true,
      rating: 4.7,
      players: "15.3K",
      description: "Adventure tomb raiding slot",
    },
    // More NetEnt Slots
    {
      id: 71,
      name: "Twin Spin",
      provider: "NetEnt",
      image: "/images/Kingmaker-Fully-Loaded.jpg",
      rtp: "96.6%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "12.7K",
      description: "Classic twin reel slot",
    },
    {
      id: 72,
      name: "Jack and the Beanstalk",
      provider: "NetEnt",
      image: "/images/Castle-of-Terror.jpg",
      rtp: "96.3%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "9.8K",
      description: "Fairy tale adventure slot",
    },
    {
      id: 73,
      name: "Jungle Spirit",
      provider: "NetEnt",
      image: "/images/Danger-High-Voltage.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.7,
      players: "14.2K",
      description: "Wild jungle animal slot",
    },
    // Microgaming Slots
    {
      id: 74,
      name: "Jurassic Park",
      provider: "Microgaming",
      image: "/images/Chocolates.jpg",
      rtp: "96.7%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.8,
      players: "21.5K",
      description: "Dinosaur movie themed slot",
    },
    {
      id: 75,
      name: "Game of Thrones",
      provider: "Microgaming",
      image: "/images/Big-Bad-Bison.jpg",
      rtp: "95.0%",
      category: "slots",
      isNew: false,
      isHot: true,
      rating: 4.7,
      players: "18.9K",
      description: "Epic fantasy TV series slot",
    },
    // More Live Casino Games
    {
      id: 76,
      name: "Auto Roulette",
      provider: "Evolution",
      image: "/images/wild-mustang.jpg",
      rtp: "97.3%",
      category: "live",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "8.4K",
      description: "Automated live roulette",
    },
    {
      id: 77,
      name: "VIP Blackjack",
      provider: "Evolution",
      image: "/images/wild-rocks.jpg",
      rtp: "99.4%",
      category: "live",
      isNew: false,
      isHot: true,
      rating: 4.9,
      players: "6.7K",
      description: "High stakes VIP blackjack",
    },
    {
      id: 78,
      name: "Salon Prive Baccarat",
      provider: "Evolution",
      image: "/images/ultimo-bingo-paris.jpg",
      rtp: "98.9%",
      category: "live",
      isNew: false,
      isHot: false,
      rating: 4.8,
      players: "3.2K",
      description: "Exclusive private baccarat",
    },
    // Bingo Games
    {
      id: 79,
      name: "90 Ball Bingo",
      provider: "Pragmatic Play",
      image: "/images/Fizzy-Pennyslot.jpg",
      rtp: "95.0%",
      category: "bingo",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "5.6K",
      description: "Classic 90 ball bingo",
    },
    {
      id: 80,
      name: "75 Ball Bingo",
      provider: "Pragmatic Play",
      image: "/images/Golden-Catch.jpg",
      rtp: "95.0%",
      category: "bingo",
      isNew: false,
      isHot: false,
      rating: 4.3,
      players: "4.8K",
      description: "American style 75 ball bingo",
    },
    {
      id: 81,
      name: "Speed Bingo",
      provider: "Pragmatic Play",
      image: "/images/Max-Megaways-2.jpg",
      rtp: "95.0%",
      category: "bingo",
      isNew: true,
      isHot: true,
      rating: 4.6,
      players: "7.2K",
      description: "Fast-paced bingo variant",
    },
    // More Jackpot Games
    {
      id: 82,
      name: "Arabian Nights",
      provider: "NetEnt",
      image: "/images/Gifts-of-Fortune.jpg",
      rtp: "95.6%",
      jackpot: "$2,345,678",
      category: "jackpot",
      isNew: false,
      isHot: true,
      rating: 4.6,
      players: "16.8K",
      description: "Arabian themed progressive jackpot",
    },
    {
      id: 83,
      name: "King Cashalot",
      provider: "Microgaming",
      image: "/images/Kingmaker-Fully-Loaded.jpg",
      rtp: "89.4%",
      jackpot: "$678,901",
      category: "jackpot",
      isNew: false,
      isHot: false,
      rating: 4.2,
      players: "5.4K",
      description: "Medieval king progressive slot",
    },
    // Additional Table Games
    {
      id: 84,
      name: "Pai Gow Poker",
      provider: "NetEnt",
      image: "/images/Castle-of-Terror.jpg",
      rtp: "97.3%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "2.8K",
      description: "Chinese poker variant",
    },
    {
      id: 85,
      name: "Red Dog",
      provider: "NetEnt",
      image: "/images/Danger-High-Voltage.jpg",
      rtp: "97.8%",
      category: "table",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "1.9K",
      description: "Simple card comparison game",
    },
    // More Crash Games
    {
      id: 86,
      name: "Rocket Dice",
      provider: "BGaming",
      image: "/images/Chocolates.jpg",
      rtp: "97.0%",
      category: "crash",
      isNew: true,
      isHot: true,
      rating: 4.7,
      players: "12.4K",
      description: "Dice-based crash game",
    },
    {
      id: 87,
      name: "Balloon",
      provider: "BGaming",
      image: "/images/Big-Bad-Bison.jpg",
      rtp: "97.0%",
      category: "crash",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "8.9K",
      description: "Balloon popping crash game",
    },
    // Continue adding games up to around 150+ total games...
    {
      id: 88,
      name: "Hi-Lo",
      provider: "BGaming",
      image: "/images/wild-mustang.jpg",
      rtp: "97.0%",
      category: "crash",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "7.5K",
      description: "Simple high-low prediction game",
    },
    {
      id: 89,
      name: "Scratch Dice",
      provider: "BGaming",
      image: "/images/wild-rocks.jpg",
      rtp: "97.0%",
      category: "crash",
      isNew: true,
      isHot: true,
      rating: 4.6,
      players: "10.2K",
      description: "Scratch card dice game",
    },
    {
      id: 90,
      name: "Heads & Tails",
      provider: "BGaming",
      image: "/images/ultimo-bingo-paris.jpg",
      rtp: "97.0%",
      category: "crash",
      isNew: false,
      isHot: false,
      rating: 4.3,
      players: "6.8K",
      description: "Coin flip prediction game",
    },
    {
      id: 91,
      name: "Mighty Kong",
      provider: "Pragmatic Play",
      image: "/images/tacomania.jpg",
      rtp: "96.64%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.2K",
      description: "King Kong themed slot",
    },
    {
      id: 92,
      name: "Hot Safari",
      provider: "Pragmatic Play",
      image: "/images/xtreme.jpg",
      rtp: "96.17%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.3,
      players: "9.8K",
      description: "African safari themed slot",
    },
    {
      id: 93,
      name: "Queen of Gold",
      provider: "Pragmatic Play",
      image: "/images/warrior-angels.jpg",
      rtp: "96.98%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.5K",
      description: "Egyptian queen themed slot",
    },
    {
      id: 94,
      name: "Ancient Egypt Classic",
      provider: "Pragmatic Play",
      image: "/images/totem-spirits.jpg",
      rtp: "96.51%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "10.9K",
      description: "Ancient Egypt themed slot",
    },
    {
      id: 95,
      name: "Safari King",
      provider: "Pragmatic Play",
      image: "/images/triple-bonus.jpg",
      rtp: "96.29%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.3,
      players: "9.5K",
      description: "African wildlife themed slot",
    },
    {
      id: 96,
      name: "Leprechaun Carol",
      provider: "Pragmatic Play",
      image: "/images/turbo-2.jpg",
      rtp: "96.36%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.8K",
      description: "Christmas themed leprechaun slot",
    },
    {
      id: 97,
      name: "Santa",
      provider: "Pragmatic Play",
      image: "/images/wonderful-lamp.jpg",
      rtp: "95.92%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.2,
      players: "8.7K",
      description: "Christmas themed Santa slot",
    },
    {
      id: 98,
      name: "Sweet Bonanza Xmas",
      provider: "Pragmatic Play",
      image: "/images/Fizzy-Pennyslot.jpg",
      rtp: "96.48%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.1K",
      description: "Christmas themed candy slot",
    },
    {
      id: 99,
      name: "Fruit Rainbow",
      provider: "Pragmatic Play",
      image: "/images/Golden-Catch.jpg",
      rtp: "96.25%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.3,
      players: "9.3K",
      description: "Classic fruit themed slot",
    },
    {
      id: 100,
      name: "Ultra Burn",
      provider: "Pragmatic Play",
      image: "/images/Max-Megaways-2.jpg",
      rtp: "96.62%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.5K",
      description: "Classic fruit themed slot",
    },
    {
      id: 101,
      name: "Hot to Burn",
      provider: "Pragmatic Play",
      image: "/images/Gifts-of-Fortune.jpg",
      rtp: "96.71%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.4K",
      description: "Classic fruit themed slot",
    },
    {
      id: 102,
      name: "5 Lions Gold",
      provider: "Pragmatic Play",
      image: "/images/Kingmaker-Fully-Loaded.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.1K",
      description: "Asian themed slot with lions",
    },
    {
      id: 103,
      name: "5 Lions Dance",
      provider: "Pragmatic Play",
      image: "/images/Castle-of-Terror.jpg",
      rtp: "96.7%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.3K",
      description: "Asian themed slot with lions",
    },
    {
      id: 104,
      name: "Great Rhino Megaways",
      provider: "Pragmatic Play",
      image: "/images/Danger-High-Voltage.jpg",
      rtp: "96.58%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "13.5K",
      description: "African safari themed megaways slot",
    },
    {
      id: 105,
      name: "Curse of the Werewolf",
      provider: "Pragmatic Play",
      image: "/images/Chocolates.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.7K",
      description: "Werewolf themed megaways slot",
    },
    {
      id: 106,
      name: "The Dog House Megaways",
      provider: "Pragmatic Play",
      image: "/images/Big-Bad-Bison.jpg",
      rtp: "96.55%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.9K",
      description: "Dog themed megaways slot",
    },
    {
      id: 107,
      name: "Buffalo King Megaways",
      provider: "Pragmatic Play",
      image: "/images/wild-mustang.jpg",
      rtp: "96.52%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "13.8K",
      description: "Buffalo themed megaways slot",
    },
    {
      id: 108,
      name: "Chilli Heat Megaways",
      provider: "Pragmatic Play",
      image: "/images/wild-rocks.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.4K",
      description: "Mexican themed megaways slot",
    },
    {
      id: 109,
      name: "Madame Destiny Megaways",
      provider: "Pragmatic Play",
      image: "/images/ultimo-bingo-paris.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.6K",
      description: "Fortune teller themed megaways slot",
    },
    {
      id: 110,
      name: "Gems Bonanza",
      provider: "Pragmatic Play",
      image: "/images/tacomania.jpg",
      rtp: "96.51%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.6,
      players: "13.2K",
      description: "Gem themed cluster pays slot",
    },
    {
      id: 111,
      name: "Release the Kraken",
      provider: "Pragmatic Play",
      image: "/images/xtreme.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.9K",
      description: "Sea monster themed slot",
    },
    {
      id: 112,
      name: "Pirate Gold Deluxe",
      provider: "Pragmatic Play",
      image: "/images/warrior-angels.jpg",
      rtp: "96.48%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.7K",
      description: "Pirate themed slot",
    },
    {
      id: 113,
      name: "Joker's Jewels",
      provider: "Pragmatic Play",
      image: "/images/totem-spirits.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.3K",
      description: "Joker themed slot",
    },
    {
      id: 114,
      name: "Money Mouse",
      provider: "Pragmatic Play",
      image: "/images/triple-bonus.jpg",
      rtp: "96.64%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.5K",
      description: "Chinese New Year themed slot",
    },
    {
      id: 115,
      name: "Mystic Chief",
      provider: "Pragmatic Play",
      image: "/images/turbo-2.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.6K",
      description: "Native American themed slot",
    },
    {
      id: 116,
      name: "Rise of Giza PowerNudge",
      provider: "Pragmatic Play",
      image: "/images/wonderful-lamp.jpg",
      rtp: "96.49%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.8K",
      description: "Ancient Egypt themed slot",
    },
    {
      id: 117,
      name: "Cash Bonanza",
      provider: "Pragmatic Play",
      image: "/images/Fizzy-Pennyslot.jpg",
      rtp: "96.52%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.2K",
      description: "Money themed slot",
    },
    {
      id: 118,
      name: "Bigger Bass Bonanza",
      provider: "Pragmatic Play",
      image: "/images/Golden-Catch.jpg",
      rtp: "96.71%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.4K",
      description: "Fishing themed slot",
    },
    {
      id: 119,
      name: "Starlight Princess",
      provider: "Pragmatic Play",
      image: "/images/Max-Megaways-2.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.5K",
      description: "Anime themed slot",
    },
    {
      id: 120,
      name: "Gates of Valhalla",
      provider: "Pragmatic Play",
      image: "/images/Gifts-of-Fortune.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.7K",
      description: "Norse mythology themed slot",
    },
    {
      id: 121,
      name: "Rock Vegas",
      provider: "Pragmatic Play",
      image: "/images/Kingmaker-Fully-Loaded.jpg",
      rtp: "96.64%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.3K",
      description: "Stone Age themed slot",
    },
    {
      id: 122,
      name: "Gold Party",
      provider: "Pragmatic Play",
      image: "/images/Castle-of-Terror.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.6K",
      description: "Leprechaun themed slot",
    },
    {
      id: 123,
      name: "Snakes and Ladders Megadice",
      provider: "Pragmatic Play",
      image: "/images/Danger-High-Voltage.jpg",
      rtp: "96.68%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.9K",
      description: "Board game themed slot",
    },
    {
      id: 124,
      name: "Extra Juicy Megaways",
      provider: "Pragmatic Play",
      image: "/images/Chocolates.jpg",
      rtp: "96.42%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.1K",
      description: "Fruit themed megaways slot",
    },
    {
      id: 125,
      name: "Barn Festival",
      provider: "Pragmatic Play",
      image: "/images/Big-Bad-Bison.jpg",
      rtp: "96.45%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.4K",
      description: "Farm themed slot",
    },
    {
      id: 126,
      name: "Tic Tac Take",
      provider: "Pragmatic Play",
      image: "/images/wild-mustang.jpg",
      rtp: "96.39%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.3K",
      description: "Tic Tac Toe themed slot",
    },
    {
      id: 127,
      name: "Rainbow Gold",
      provider: "Pragmatic Play",
      image: "/images/wild-rocks.jpg",
      rtp: "96.63%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.7K",
      description: "Leprechaun themed slot",
    },
    {
      id: 128,
      name: "Wild Beach Party",
      provider: "Pragmatic Play",
      image: "/images/ultimo-bingo-paris.jpg",
      rtp: "96.45%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.9K",
      description: "Beach themed cluster pays slot",
    },
    {
      id: 129,
      name: "Queenie",
      provider: "Pragmatic Play",
      image: "/images/tacomania.jpg",
      rtp: "96.51%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.1K",
      description: "Alice in Wonderland themed slot",
    },
    {
      id: 130,
      name: "Little Gem",
      provider: "Pragmatic Play",
      image: "/images/xtreme.jpg",
      rtp: "96.7%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.3K",
      description: "Gem themed slot",
    },
    {
      id: 131,
      name: "Book of The Fallen",
      provider: "Pragmatic Play",
      image: "/images/warrior-angels.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.6K",
      description: "Ancient Egypt themed slot",
    },
    {
      id: 132,
      name: "Super X",
      provider: "Pragmatic Play",
      image: "/images/totem-spirits.jpg",
      rtp: "96.51%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.8K",
      description: "Luxury themed slot",
    },
    {
      id: 133,
      name: "Treasure Wild",
      provider: "Pragmatic Play",
      image: "/images/triple-bonus.jpg",
      rtp: "96.53%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.2K",
      description: "Treasure themed slot",
    },
    {
      id: 134,
      name: "Chicken Drop",
      provider: "Pragmatic Play",
      image: "/images/turbo-2.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.4K",
      description: "Farm themed cluster pays slot",
    },
    {
      id: 135,
      name: "Day of Dead",
      provider: "Pragmatic Play",
      image: "/images/wonderful-lamp.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.5K",
      description: "Mexican Day of the Dead themed slot",
    },
    {
      id: 136,
      name: "Big Juan",
      provider: "Pragmatic Play",
      image: "/images/Fizzy-Pennyslot.jpg",
      rtp: "96.7%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.7K",
      description: "Mexican themed slot",
    },
    {
      id: 137,
      name: "Smugglers Cove",
      provider: "Pragmatic Play",
      image: "/images/Golden-Catch.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.3K",
      description: "Pirate themed slot",
    },
    {
      id: 138,
      name: "Christmas Big Bass Bonanza",
      provider: "Pragmatic Play",
      image: "/images/Max-Megaways-2.jpg",
      rtp: "96.71%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.6K",
      description: "Christmas themed fishing slot",
    },
    {
      id: 139,
      name: "Santa's Wonderland",
      provider: "Pragmatic Play",
      image: "/images/Gifts-of-Fortune.jpg",
      rtp: "96.23%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.9K",
      description: "Christmas themed cluster pays slot",
    },
    {
      id: 140,
      name: "Sweet Powernudge",
      provider: "Pragmatic Play",
      image: "/images/Kingmaker-Fully-Loaded.jpg",
      rtp: "96.08%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.1K",
      description: "Candy themed slot",
    },
    {
      id: 141,
      name: "Shield of Sparta",
      provider: "Pragmatic Play",
      image: "/images/Castle-of-Terror.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.4K",
      description: "Ancient Greece themed slot",
    },
    {
      id: 142,
      name: "Hot Pepper",
      provider: "Pragmatic Play",
      image: "/images/Danger-High-Voltage.jpg",
      rtp: "96.45%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.3K",
      description: "Mexican themed slot",
    },
    {
      id: 143,
      name: "Pinup Girls",
      provider: "Pragmatic Play",
      image: "/images/Chocolates.jpg",
      rtp: "96.45%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.7K",
      description: "Pinup themed slot",
    },
    {
      id: 144,
      name: "Jane Hunter and the Mask of Montezuma",
      provider: "Pragmatic Play",
      image: "/images/Big-Bad-Bison.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.9K",
      description: "Adventure themed slot",
    },
    {
      id: 145,
      name: "Lamp of Infinity",
      provider: "Pragmatic Play",
      image: "/images/wild-mustang.jpg",
      rtp: "96.07%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.1K",
      description: "Arabian themed slot",
    },
    {
      id: 146,
      name: "Diamonds of Egypt",
      provider: "Pragmatic Play",
      image: "/images/wild-rocks.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.3K",
      description: "Ancient Egypt themed slot",
    },
    {
      id: 147,
      name: "Wild Hop & Drop",
      provider: "Pragmatic Play",
      image: "/images/ultimo-bingo-paris.jpg",
      rtp: "96.46%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.7K",
      description: "Frog themed slot",
    },
    {
      id: 148,
      name: "Peak Power",
      provider: "Pragmatic Play",
      image: "/images/tacomania.jpg",
      rtp: "96.02%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.9K",
      description: "Energy themed slot",
    },
    {
      id: 149,
      name: "Club Tropicana",
      provider: "Pragmatic Play",
      image: "/images/xtreme.jpg",
      rtp: "96.08%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.1K",
      description: "Tropical themed slot",
    },
    {
      id: 150,
      name: "Cowboys Gold",
      provider: "Pragmatic Play",
      image: "/images/warrior-angels.jpg",
      rtp: "96.5%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.3K",
      description: "Wild West themed slot",
    },
    {
      id: 151,
      name: "Floating Dragon Hold&Spin",
      provider: "Pragmatic Play",
      image: "/images/totem-spirits.jpg",
      rtp: "96.7%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.6K",
      description: "Asian themed slot",
    },
    {
      id: 152,
      name: "Hot Fiesta",
      provider: "Pragmatic Play",
      image: "/images/triple-bonus.jpg",
      rtp: "96.56%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.5,
      players: "12.8K",
      description: "Mexican themed slot",
    },
    {
      id: 153,
      name: "Juicy Fruits",
      provider: "Pragmatic Play",
      image: "/images/turbo-2.jpg",
      rtp: "96.51%",
      category: "slots",
      isNew: false,
      isHot: false,
      rating: 4.4,
      players: "11.2K",
      description: "Fruit themed slot",
    },
  ]

  const categories = [
    { id: "all", name: "All Games", count: allGames.length, icon: "🎮" },
    { id: "slots", name: "Slots", count: allGames.filter((g) => g.category === "slots").length, icon: "🎰" },
    { id: "table", name: "Table Games", count: allGames.filter((g) => g.category === "table").length, icon: "🃏" },
    { id: "live", name: "Live Casino", count: allGames.filter((g) => g.category === "live").length, icon: "🎥" },
    { id: "jackpot", name: "Jackpots", count: allGames.filter((g) => g.category === "jackpot").length, icon: "💰" },
    { id: "new", name: "New Games", count: allGames.filter((g) => g.isNew).length, icon: "✨" },
    { id: "popular", name: "Popular", count: allGames.filter((g) => g.isHot).length, icon: "🔥" },
    { id: "crash", name: "Crash Games", count: allGames.filter((g) => g.category === "crash").length, icon: "🚀" },
    { id: "poker", name: "Video Poker", count: allGames.filter((g) => g.category === "poker").length, icon: "♠️" },
    { id: "bingo", name: "Bingo", count: allGames.filter((g) => g.category === "bingo").length, icon: "🎱" },
  ]

  const filteredGames = allGames.filter((game) => {
    const matchesSearch =
      game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || game.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const GameCard = ({ game }: { game: any }) => (
    <Card className="group relative overflow-hidden rounded-xl bg-brand-charcoal-black-secondary border border-brand-primary-green/30 shadow-lg hover:shadow-xl hover:shadow-brand-primary-green/20 transition-all duration-300 cursor-pointer transform hover:scale-105">
      <div className="aspect-[3/4] relative">
        <Image
          src={game.image || "/placeholder.svg"}
          alt={game.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {game.isNew && (
            <Badge className="bg-brand-vibrant-green text-brand-charcoal-black text-xs px-2 py-1 font-bold">NEW</Badge>
          )}
          {game.isHot && <Badge className="bg-red-500 text-white text-xs px-2 py-1 font-bold">HOT</Badge>}
          {game.jackpot && <Badge className="bg-yellow-500 text-black text-xs px-2 py-1 font-bold">JACKPOT</Badge>}
        </div>

        <div className="absolute top-2 right-2">
          <Badge className="bg-black/70 text-brand-soft-white px-2 py-1 text-xs">RTP {game.rtp}</Badge>
        </div>

        {game.jackpot && (
          <div className="absolute top-12 right-2">
            <Badge className="bg-brand-primary-green text-brand-charcoal-black px-2 py-1 text-xs font-bold">
              {game.jackpot}
            </Badge>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={() => setIsRegistrationOpen && setIsRegistrationOpen(true)}
            className="bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-black px-6 py-3 text-sm rounded-lg shadow-xl transform hover:scale-105 transition-all duration-200 mb-3"
          >
            PLAY NOW
          </Button>

          <p className="text-brand-primary-green text-xs font-bold mb-2">🎁 GET 125% BONUS!</p>

          <p className="text-brand-soft-white text-xs text-center px-2">{game.description}</p>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-brand-soft-white text-sm truncate">{game.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs text-brand-smoke-gray">{game.rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-brand-smoke-gray mb-2">
          <span>{game.provider}</span>
          <div className="flex items-center space-x-1">
            <Users className="w-3 h-3" />
            <span>{game.players}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <Badge variant="outline" className="text-brand-primary-green border-brand-primary-green">
            {categories.find((cat) => cat.id === game.category)?.name || game.category}
          </Badge>
          {game.jackpot && (
            <div className="flex items-center space-x-1 text-yellow-400">
              <TrendingUp className="w-3 h-3" />
              <span className="text-xs font-bold">Jackpot</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-brand-charcoal-black">
      {/* Mobile Hero Section */}
      <div className="block md:hidden">
        <div className="relative h-48 sm:h-56">
          <Image
            src="/images/casino-hero.avif"
            alt="Casino background"
            fill
            className="object-cover"
            priority={false}
            loading="lazy"
            sizes="100vw"
          />
        </div>
        <div className="bg-brand-charcoal-black py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-black text-brand-soft-white mb-4">CASINO GAMES</h1>
            <p className="text-lg mb-6 max-w-3xl mx-auto text-white">
              Experience the thrill of over 2,800+ premium casino games
              <br />
              with the highest RTPs and biggest jackpots
            </p>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-4 py-2 rounded-full">
                <Crown className="w-5 h-5 text-brand-primary-green" />
                <span className="text-brand-soft-white font-bold text-sm">VIP Rewards Available</span>
              </div>
              <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-brand-vibrant-green" />
                <span className="text-brand-soft-white font-bold text-sm">Instant Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Hero Section */}
      <div className="hidden md:block relative bg-gradient-to-r from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]">
        <div className="absolute inset-0">
          <Image
            src="/images/casino-hero.avif"
            alt="Casino background"
            fill
            className="object-cover"
            loading="lazy"
            priority={false}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-left flex flex-col justify-center items-start h-full">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-soft-white mb-4">CASINO GAMES</h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl lg:text-xl text-white">
            Experience the thrill of over 2,800+ premium casino games
            <br />
            with the highest RTPs and biggest jackpots
          </p>
          <div className="flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-4 md:px-6 py-2 md:py-3 rounded-full">
              <Crown className="w-5 h-5 md:w-6 md:h-6 text-brand-primary-green" />
              <span className="text-brand-soft-white font-bold text-sm md:text-base">VIP Rewards Available</span>
            </div>
            <div className="flex items-center space-x-4 bg-brand-charcoal-black-secondary px-4 md:px-6 py-2 md:py-3 rounded-full">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-brand-vibrant-green" />
              <span className="text-brand-soft-white font-bold text-sm md:text-base">Instant Play</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sign Up Call-to-Action Banner */}
      <div className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl md:text-2xl font-black text-brand-charcoal-black mb-1">🎰 PLAY ANY GAME NOW!</h3>
              <p className="text-brand-charcoal-black font-bold">
                Sign up in 30 seconds and get 125% Welcome Bonus + Free Spins!
              </p>
            </div>
            <Button
              onClick={() => setIsRegistrationOpen && setIsRegistrationOpen(true)}
              className="bg-brand-charcoal-black hover:bg-brand-charcoal-black-secondary text-brand-primary-green font-black px-8 py-3 text-lg shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              SIGN UP NOW - GET BONUS!
            </Button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-brand-charcoal-black-secondary border-b border-brand-smoke-gray/20 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-smoke-gray w-4 h-4 md:w-5 md:h-5" />
              <Input
                placeholder="Search games, providers, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-brand-charcoal-black-tertiary border-brand-smoke-gray/30 text-brand-soft-white placeholder-brand-smoke-gray"
              />
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-brand-charcoal-black-tertiary rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={
                    viewMode === "grid" ? "bg-brand-primary-green text-brand-charcoal-black" : "text-brand-soft-white"
                  }
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={
                    viewMode === "list" ? "bg-brand-primary-green text-brand-charcoal-black" : "text-brand-soft-white"
                  }
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              <Button
                variant="outline"
                className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-brand-charcoal-black border-b border-brand-smoke-gray/20 py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-3 md:px-6">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 justify-center sm:justify-start">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 ${
                  selectedCategory === category.id
                    ? "bg-brand-primary-green text-brand-charcoal-black hover:bg-brand-primary-green-dark"
                    : "border-brand-primary-green/30 text-brand-soft-white hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <Badge
                  variant="secondary"
                  className="ml-1 sm:ml-2 bg-brand-smoke-gray/20 text-brand-soft-white text-xs px-1 sm:px-2"
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-6 space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-soft-white text-center sm:text-left">
              {selectedCategory === "all" ? "All Games" : categories.find((cat) => cat.id === selectedCategory)?.name}
            </h2>
            <Badge variant="outline" className="text-brand-primary-green border-brand-primary-green">
              {filteredGames.length} games
            </Badge>
          </div>
          <div className="flex items-center space-x-2 text-brand-smoke-gray text-xs sm:text-sm">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Updated 2 minutes ago</span>
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div
            className={`grid gap-4 md:gap-6 ${
              viewMode === "grid"
                ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-brand-soft-white mb-2">No games found</h3>
            <p className="text-brand-smoke-gray mb-4">Try adjusting your search or selecting a different category</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
              }}
              className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More Button */}
        {filteredGames.length > 0 && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent px-8 py-3"
            >
              Load More Games
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
