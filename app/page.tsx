"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TopNavigation from "@/components/top-navigation";
import Footer from "@/components/footer";
import CasinoTabContent from "@/components/casino-tab-content";
import SportsbookTabContent from "@/components/sportsbook-tab-content";
import RacebookTabContent from "@/components/racebook-tab-content";
import LiveCasinoTabContent from "@/components/live-casino-tab-content";
import BankingTabContent from "@/components/banking-tab-content";
import PromotionsTabContent from "@/components/promotions-tab-content";
import { X } from "lucide-react";

function HomePageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (
      tab &&
      [
        "casino",
        "sports",
        "racebook",
        "live-casino",
        "banking",
        "promotions",
      ].includes(tab)
    ) {
      setActiveTab(tab);
    } else {
      setActiveTab("home");
    }
  }, [searchParams]);

  const [timeLeft, setTimeLeft] = useState({
    hours: 45,
    minutes: 56,
    seconds: 23,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else {
          clearInterval(timer);
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const bets = [
    {
      user: "abirdesigns",
      game: "Mines",
      time: "7:49 PM",
      amount: 2893.0,
      mult: 1.032,
      profit: 92.58,
    },
    {
      user: "CryptoKing",
      game: "Crash",
      time: "7:48 PM",
      amount: 1250.0,
      mult: 2.45,
      profit: 1812.5,
    },
    {
      user: "LuckyPlayer",
      game: "Slots",
      time: "7:47 PM",
      amount: 500.0,
      mult: 0.0,
      profit: -500.0,
    },
    {
      user: "HighRoller",
      game: "Blackjack",
      time: "7:46 PM",
      amount: 5000.0,
      mult: 1.5,
      profit: 2500.0,
    },
    {
      user: "SlotMaster",
      game: "Roulette",
      time: "7:45 PM",
      amount: 750.0,
      mult: 35.0,
      profit: 26250.0,
    },
    {
      user: "BetKing",
      game: "Poker",
      time: "7:44 PM",
      amount: 1200.0,
      mult: 0.0,
      profit: -1200.0,
    },
    {
      user: "WinnerX",
      game: "Crash",
      time: "7:43 PM",
      amount: 300.0,
      mult: 5.2,
      profit: 1560.0,
    },
    {
      user: "ProGamer",
      game: "Mines",
      time: "7:42 PM",
      amount: 2000.0,
      mult: 2.1,
      profit: 4200.0,
    },
    {
      user: "CasinoAce",
      game: "Slots",
      time: "7:41 PM",
      amount: 450.0,
      mult: 12.5,
      profit: 5625.0,
    },
    {
      user: "BigBetter",
      game: "Blackjack",
      time: "7:40 PM",
      amount: 3500.0,
      mult: 1.5,
      profit: 5250.0,
    },
    {
      user: "LuckyStar",
      game: "Roulette",
      time: "7:39 PM",
      amount: 800.0,
      mult: 0.0,
      profit: -800.0,
    },
    {
      user: "MegaWin",
      game: "Crash",
      time: "7:38 PM",
      amount: 1500.0,
      mult: 8.7,
      profit: 13050.0,
    },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === "home") {
      router.push("/", { scroll: false });
    } else {
      router.push(`/?tab=${tabId}`, { scroll: false });
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "casino":
        return (
          <CasinoTabContent setIsRegistrationOpen={() => setShowSignup(true)} />
        );
      case "sports":
        return (
          <SportsbookTabContent
            setIsRegistrationOpen={() => setShowSignup(true)}
          />
        );
      case "racebook":
        return (
          <RacebookTabContent
            setIsRegistrationOpen={() => setShowSignup(true)}
          />
        );
      case "live-casino":
        return (
          <LiveCasinoTabContent
            setIsRegistrationOpen={() => setShowSignup(true)}
          />
        );
      case "banking":
        return (
          <BankingTabContent
            setIsRegistrationOpen={() => setShowSignup(true)}
          />
        );
      case "promotions":
        return (
          <PromotionsTabContent
            setIsRegistrationOpen={() => setShowSignup(true)}
          />
        );
      default:
        return (
          <div className="font-poppins bg-black w-full">
            {/* Hero Section */}
            <section className="relative w-full">
              {/* Desktop Hero */}
              <div className="hidden md:block relative w-full h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] 2xl:h-[65vh] 3xl:h-[70vh] overflow-hidden bg-black">
                {/* Text Overlay - Horizontal Layout */}
                <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 z-20">
                  {/* Left Side - Main Content */}
                  <div className="flex flex-col items-start text-left space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7 2xl:space-y-8 3xl:space-y-10 max-w-[45%] md:max-w-[48%] lg:max-w-[50%] xl:max-w-[52%] 2xl:max-w-[55%]">
                    {/* Main Sign Up Bonus */}
                    <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6 2xl:space-x-7 3xl:space-x-8 border-white border-2 md:border-3 rounded-2xl md:rounded-3xl lg:rounded-4xl px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 3xl:px-14 py-2 md:py-3 lg:py-4 xl:py-5 2xl:py-6 3xl:py-7 bg-black/40 backdrop-blur-sm shadow-2xl">
                      <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-black text-white leading-none tracking-tight">
                        125%
                      </span>
                      <span className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-black text-brand-golden-yellow leading-none tracking-tight">
                        SIGN UP BONUS!
                      </span>
                    </div>

                    {/* Supporting Text */}
                    <div className="space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5 2xl:space-y-6">
                      <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-white leading-tight tracking-tight">
                        QUICK PAYOUTS
                      </div>
                      <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold text-white leading-tight tracking-tight">
                        Bet Smarter, Win Bigger
                      </div>
                    </div>

                    {/* Call to Action Button */}
                    <button
                      onClick={() => setShowSignup(true)}
                      className="relative bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8 3xl:py-10 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 md:border-3 border-white/30 inline-flex items-center justify-center"
                    >
                      <span className="relative z-10 drop-shadow-lg">
                        JOIN NOW
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/20 to-brand-vibrant-green/20 rounded-full animate-pulse opacity-30 animate-[blink_2s_ease-in-out_infinite]"></div>
                    </button>
                  </div>

                  {/* Right Side - Crypto Bonus */}
                  <div className="flex flex-col items-end text-right space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7 2xl:space-y-8 max-w-[35%] md:max-w-[32%] lg:max-w-[30%] xl:max-w-[28%] 2xl:max-w-[25%] z-25">
                    <div className="bg-black/60 backdrop-blur-sm border border-brand-primary-green/40 rounded-xl md:rounded-2xl lg:rounded-3xl p-3 md:p-4 lg:p-4 xl:p-5 2xl:p-6 3xl:p-7 text-center space-y-2 md:space-y-2 lg:space-y-3 xl:space-y-3 2xl:space-y-4 shadow-2xl">
                      <div className="flex items-center justify-center space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6 2xl:space-x-7">
                        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 3xl:w-48 3xl:h-48 flex items-center justify-center shadow-lg shadow-black/50">
                          <Image
                            src="/images/bitcoin.png"
                            alt="Bitcoin"
                            width={96}
                            height={96}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-black leading-none tracking-tight text-white">
                            CRYPTO BONUS
                          </div>
                          <div
                            className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-black text-brand-golden-yellow leading-none tracking-tight drop-shadow-lg"
                            style={{
                              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                            }}
                          >
                            BOOST!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stadium Background - Full Width */}
                <div className="absolute inset-0 w-full h-full z-5">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estadio-de-futbol-vacio-por-la-noche-multitud-viendo-el-juego-bajo-las-luces.jpg-IRMstCEjNsbMbfuOHOqhaOMDwzaQHH.jpeg"
                    alt="Football stadium at night with dramatic lighting and 30 yard line marking"
                    width={1920}
                    height={600}
                    className="w-full h-full object-cover object-center"
                    priority
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                </div>

                {/* Hero Image - NFL Player on Right Side */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[45%] md:w-[48%] lg:w-[50%] xl:w-[52%] 2xl:w-[55%] 3xl:w-[58%] h-[85%] md:h-[88%] lg:h-[90%] xl:h-[92%] 2xl:h-[95%] 3xl:h-[98%] z-15">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nfl44-AxYQchGkxdsTaYsTPvWANpfbVqM3SW.png"
                    alt="Colorado football player #30 running with ball in black uniform against green background - sports betting hero"
                    width={400}
                    height={300}
                    className="w-full h-full object-contain object-bottom"
                    priority
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 45vw, 40vw"
                  />
                </div>

                {/* Green Smoke Effect */}
                <div className="absolute bottom-0 right-0 w-[50%] md:w-[52%] lg:w-[55%] xl:w-[58%] 2xl:w-[60%] 3xl:w-[65%] h-[75%] md:h-[78%] lg:h-[80%] xl:h-[82%] 2xl:h-[85%] 3xl:h-[88%] z-10 pointer-events-none">
                  <div className="absolute bottom-0 right-1/4 w-full h-full bg-gradient-radial from-brand-primary-green/25 via-brand-primary-green/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
                </div>

                {/* Wave Effects Behind Player */}
                <div className="absolute bottom-0 right-0 w-[50%] md:w-[52%] lg:w-[55%] xl:w-[58%] 2xl:w-[60%] 3xl:w-[65%] h-[75%] md:h-[78%] lg:h-[80%] xl:h-[82%] 2xl:h-[85%] 3xl:h-[88%] z-8 overflow-hidden pointer-events-none">
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-1/4 w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 3xl:w-36 h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 3xl:h-36 border border-brand-primary-green/20 rounded-full animate-pulse transform scale-75"></div>
                    <div className="absolute top-1/3 right-1/5 w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 3xl:w-32 h-14 md:h-16 lg:h-20 xl:h-24 2xl:h-28 3xl:w-32 border border-brand-vibrant-green/15 rounded-full animate-ping transform scale-90 animation-delay-1000"></div>
                    <div className="absolute top-1/2 right-1/3 w-12 md:w-14 lg:w-16 xl:w-20 2xl:w-24 3xl:w-28 h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 3xl:h-28 border border-brand-primary-green/25 rounded-full animate-pulse transform scale-110 animation-delay-2000"></div>
                    <div className="absolute bottom-1/3 right-1/6 w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-20 3xl:w-24 h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20 3xl:h-24 border border-brand-vibrant-green/20 rounded-full animate-ping transform scale-125 animation-delay-3000"></div>
                    <div className="absolute top-1/6 right-1/8 w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 3xl:w-40 h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 3xl:h-40 border border-brand-primary-green/10 rounded-full animate-pulse transform scale-150 animation-delay-4000"></div>
                  </div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
                  <div className="absolute top-1/4 left-1/6 w-4 md:w-5 lg:w-6 xl:w-7 2xl:w-8 3xl:w-10 h-4 md:h-5 lg:h-6 xl:h-7 2xl:h-8 3xl:h-10 border border-brand-primary-green/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/5 w-3 md:w-4 lg:w-5 xl:w-6 2xl:w-7 3xl:w-8 h-3 md:h-4 lg:h-5 xl:h-6 2xl:h-7 3xl:h-8 border border-brand-vibrant-green/30 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-1/3 left-1/4 w-2 md:w-3 lg:w-4 xl:w-5 2xl:w-6 3xl:w-7 h-2 md:h-3 lg:h-4 xl:h-5 2xl:h-6 3xl:h-7 border border-brand-vibrant-green/25 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Mobile Hero */}
              <div className="block md:hidden relative w-full bg-black">
                {/* Mobile Hero Image */}
                <div className="relative w-full h-[50vh] xs:h-[55vh] sm:h-[60vh] overflow-hidden">
                  {/* Stadium Background Overlay */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estadio-de-futbol-vacio-por-la-noche-multitud-viendo-el-juego-bajo-las-luces.jpg-IRMstCEjNsbMbfuOHOqhaOMDwzaQHH.jpeg"
                      alt="Football stadium background"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                  </div>

                  {/* Football Player - Positioned on Right */}
                  <div
                    className="absolute bottom-0 right-[-5%] z-40 w-[70%] xs:w-[75%] sm:w-[80%] h-[90%] xs:h-[95%] sm:h-[100%] cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setShowSignup(true)}
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nfl44-AxYQchGkxdsTaYsTPvWANpfbVqM3SW.png"
                      alt="Colorado football player #30 running with ball in black uniform against green background - sports betting hero"
                      width={300}
                      height={400}
                      className="w-full h-full object-contain object-bottom"
                      priority
                      sizes="(max-width: 640px) 50vw, 45vw"
                    />
                    {/* Clickable overlay indicator */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-green/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                        TAP TO JOIN
                      </div>
                    </div>
                  </div>

                  {/* Mobile Hero Text - Over Image */}
                  <div className="absolute inset-0 flex items-center justify-start px-3 xs:px-4 sm:px-6 z-30">
                    <div className="w-[60%] xs:w-[65%] sm:w-[70%] h-full flex items-center">
                      <div className="bg-black/80 backdrop-blur-sm rounded-none h-full w-full flex flex-col items-center justify-center p-3 xs:p-4 sm:p-5 space-y-4 xs:space-y-5 sm:space-y-6">
                        {/* Sign Up Bonus Box - Horizontal Layout */}
                        <div className="bg-black/60 border-2 border-white rounded-2xl xs:rounded-3xl px-4 xs:px-6 sm:px-8 py-3 xs:py-4 sm:py-5 text-center w-full">
                          <div className="flex flex-col items-center justify-center space-y-2 xs:space-y-3">
                            <span className="text-3xl xs:text-4xl sm:text-5xl font-black text-white leading-none tracking-tight">
                              125%
                            </span>
                            <div className="text-center">
                              <span className="text-lg xs:text-xl sm:text-2xl font-black text-brand-golden-yellow leading-none tracking-tight">
                                SIGN UP BONUS
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Supporting Text */}
                        <div className="space-y-2 xs:space-y-3 text-center">
                          <div className="text-xl xs:text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight">
                            QUICK PAYOUTS
                          </div>
                          <div className="text-lg xs:text-xl sm:text-2xl font-semibold text-white leading-tight tracking-tight">
                            Bet Smarter, Win Bigger
                          </div>
                        </div>

                        {/* Call to Action Button */}
                        <button
                          onClick={() => setShowSignup(true)}
                          className="relative bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 xs:px-10 sm:px-12 py-4 xs:py-5 sm:py-6 text-xl xs:text-2xl sm:text-3xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 w-full inline-flex items-center justify-center"
                        >
                          <span className="relative z-10 drop-shadow-lg font-black">
                            JOIN NOW
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-green/20 to-brand-vibrant-green/20 rounded-full animate-pulse opacity-30 animate-[blink_2s_ease-in-out_infinite]"></div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Green Effects */}
                  <div className="absolute bottom-0 right-0 w-full h-full z-8 pointer-events-none">
                    <div className="absolute bottom-1/4 right-1/4 w-full h-full bg-gradient-radial from-brand-primary-green/20 via-brand-primary-green/10 to-transparent rounded-full blur-xl animate-pulse"></div>
                  </div>
                </div>

                {/* Mobile Crypto Bonus Section - Moving Banner */}
                <div className="px-3 xs:px-4 sm:px-6 py-2 xs:py-3 bg-black overflow-hidden">
                  <div className="relative w-fit mx-auto h-14 xs:h-16 sm:h-18 bg-black/60 backdrop-blur-sm border border-brand-primary-green/30 rounded-xl xs:rounded-2xl shadow-2xl overflow-hidden">
                    <div className="flex items-center h-full px-4 xs:px-6 sm:px-8">
                      <div className="flex items-center space-x-2 xs:space-x-3">
                        <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 flex items-center justify-center shadow-lg shadow-black/50">
                          <Image
                            src="/images/bitcoin.png"
                            alt="Bitcoin"
                            width={64}
                            height={64}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-base xs:text-lg sm:text-xl font-black leading-none tracking-tight text-white">
                          CRYPTO BONUS
                        </span>
                        <span
                          className="text-sm xs:text-base sm:text-lg font-black text-brand-golden-yellow leading-none tracking-tight drop-shadow-lg"
                          style={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                          }}
                        >
                          BOOST!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Promotions Section */}
            <section className="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 bg-black border-b border-brand-smoke-gray/10 w-full">
              <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6 md:mb-8 mt-2 sm:mt-4">
                  <h2 className="font-black text-brand-soft-white mb-2 sm:mb-3 md:mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                      POWER YOUR PLAY
                    </span>{" "}
                    WITH IBET PROMOTIONS
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-brand-smoke-gray mb-3 sm:mb-4 md:mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl mx-auto font-medium leading-relaxed">
                    Unlock exclusive bonuses and maximize your gaming experience
                  </p>
                  <Button
                    onClick={() => handleTabChange("promotions")}
                    variant="outline"
                    className="text-brand-primary-green border-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-2.5 md:py-3 lg:py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold rounded-lg"
                  >
                    SEE ALL PROMOTIONS →
                  </Button>
                </div>

                {/* Promotions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                  {/* Crypto Bonus Card */}
                  <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 hover:border-brand-primary-green/60 hover:shadow-xl hover:shadow-brand-primary-green/20 transition-all duration-300 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 rounded-xl">
                    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-brand-primary-green/40 bg-brand-primary-green/10 flex items-center justify-center">
                          <span className="text-brand-primary-green font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                            ₿
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center space-y-2 sm:space-y-3">
                        <div className="flex flex-col items-center space-y-1">
                          <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-brand-soft-white">
                              200%
                            </span>
                            <span className="text-xs sm:text-sm md:text-base font-bold text-brand-vibrant-green">
                              CRYPTO BONUS
                            </span>
                          </div>
                          <p className="text-brand-smoke-gray text-xs md:text-sm font-medium">
                            BITCOIN & ETHEREUM
                          </p>
                        </div>
                        <Button
                          onClick={() => handleTabChange("promotions")}
                          variant="link"
                          className="text-brand-vibrant-green hover:text-brand-primary-green p-0 h-auto font-semibold text-xs md:text-sm"
                        >
                          MORE INFO
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Sign Up Bonus Card */}
                  <Card className="bg-brand-charcoal-black-secondary border border-brand-vibrant-green/30 hover:border-brand-vibrant-green/60 hover:shadow-xl hover:shadow-brand-vibrant-green/20 transition-all duration-300 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 rounded-xl">
                    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                      {/* Tag Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-brand-vibrant-green/40 bg-brand-vibrant-green/10 flex items-center justify-center">
                          <span className="text-brand-vibrant-green font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                            %
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center space-y-2 sm:space-y-3">
                        <div className="flex flex-col items-center space-y-1">
                          <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-brand-soft-white">
                              125%
                            </span>
                            <span className="text-xs sm:text-sm md:text-base font-bold text-brand-vibrant-green">
                              SIGN-UP BONUS
                            </span>
                          </div>
                          <p className="text-brand-smoke-gray text-xs md:text-sm font-medium">
                            ON YOUR FIRST 3 DEPOSITS
                          </p>
                        </div>
                        <Button
                          onClick={() => handleTabChange("promotions")}
                          variant="link"
                          className="text-brand-vibrant-green hover:text-brand-primary-green p-0 h-auto font-semibold text-xs md:text-sm"
                        >
                          MORE INFO
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Casino Bonus Card */}
                  <Card className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 hover:border-brand-primary-green/60 hover:shadow-xl hover:shadow-brand-primary-green/20 transition-all duration-300 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 rounded-xl sm:col-span-2 lg:col-span-1">
                    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                      {/* Playing Cards Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-brand-primary-green/40 bg-brand-primary-green/10 flex items-center justify-center">
                          <span className="text-brand-primary-green font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                            ♠
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center space-y-2 sm:space-y-3">
                        <div className="flex flex-col items-center space-y-1">
                          <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-brand-soft-white">
                              150%
                            </span>
                            <span className="text-xs sm:text-sm md:text-base font-bold text-brand-primary-green">
                              CASINO RELOAD
                            </span>
                          </div>
                          <p className="text-brand-smoke-gray text-xs md:text-sm font-medium">
                            WEEKLY RELOAD BONUS
                          </p>
                        </div>
                        <Button
                          onClick={() => handleTabChange("promotions")}
                          variant="link"
                          className="text-brand-primary-green hover:text-brand-vibrant-green p-0 h-auto font-semibold text-xs md:text-sm"
                        >
                          MORE INFO
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </section>

            {/* Gaming Options Section */}
            <section className="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 bg-brand-charcoal-black border-b border-brand-smoke-gray/10 w-full relative overflow-hidden">
              <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-brand-soft-white mb-3 sm:mb-4">
                    <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                      FEATURED GAMES
                    </span>{" "}
                    COLLECTION
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-brand-smoke-gray max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl mx-auto font-medium leading-relaxed mb-4">
                    Experience our handpicked selection of premium casino games
                    with the highest RTPs and biggest wins
                  </p>

                  {/* Pulsing Stats */}
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6">
                    <div className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 rounded-xl px-4 py-2 transform hover:scale-105 transition-all duration-300">
                      <div className="text-brand-primary-green font-black text-lg sm:text-xl">
                        2,800+
                      </div>
                      <div className="text-brand-smoke-gray text-xs sm:text-sm">
                        Games
                      </div>
                    </div>
                    <div className="bg-brand-charcoal-black-secondary border border-brand-vibrant-green/30 rounded-xl px-4 py-2 transform hover:scale-105 transition-all duration-300">
                      <div className="text-brand-vibrant-green font-black text-lg sm:text-xl">
                        99.7%
                      </div>
                      <div className="text-brand-smoke-gray text-xs sm:text-sm">
                        Max RTP
                      </div>
                    </div>
                    <div className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 rounded-xl px-4 py-2 transform hover:scale-105 transition-all duration-300">
                      <div className="text-brand-primary-green font-black text-lg sm:text-xl">
                        $15M+
                      </div>
                      <div className="text-brand-smoke-gray text-xs sm:text-sm">
                        Jackpots
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Games Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8">
                  {[
                    {
                      name: "Mega Fortune",
                      image: "/images/Fizzy-Pennyslot.jpg",
                      jackpot: "$2.8M",
                      hot: true,
                    },
                    {
                      name: "Lightning Roulette",
                      image: "/images/Golden-Catch.jpg",
                      rtp: "97.3%",
                      live: true,
                    },
                    {
                      name: "Sweet Bonanza",
                      image: "/images/Chocolates.jpg",
                      multiplier: "21,100x",
                      hot: true,
                    },
                    {
                      name: "Gates of Olympus",
                      image: "/images/Danger-High-Voltage.jpg",
                      multiplier: "5,000x",
                      new: true,
                    },
                    {
                      name: "Book of Dead",
                      image: "/images/Max-Megaways-2.jpg",
                      rtp: "96.2%",
                      popular: true,
                    },
                    {
                      name: "Starburst",
                      image: "/images/Kingmaker-Fully-Loaded.jpg",
                      rtp: "96.1%",
                      classic: true,
                    },
                    {
                      name: "Crazy Time",
                      image: "/images/Gifts-of-Fortune.jpg",
                      live: true,
                      hot: true,
                    },
                    {
                      name: "Big Bass Bonanza",
                      image: "/images/coins-98.jpg",
                      multiplier: "2,100x",
                      popular: true,
                    },
                    {
                      name: "Wolf Gold",
                      image: "/images/Big-Bad-Bison.jpg",
                      jackpot: "$250K",
                      popular: true,
                    },
                    {
                      name: "Blackjack Pro",
                      image: "/images/Castle-of-Terror.jpg",
                      rtp: "99.4%",
                      table: true,
                    },
                    {
                      name: "Monopoly Live",
                      image: "/images/wonderful-lamp.jpg",
                      live: true,
                      hot: true,
                    },
                    {
                      name: "Bonanza Megaways",
                      image: "/images/cash-quest.jpg",
                      ways: "117,649",
                      popular: true,
                    },
                    {
                      name: "Divine Fortune",
                      image: "/images/Fizzy-Pennyslot.jpg",
                      jackpot: "$1.2M",
                      hot: true,
                    },
                    {
                      name: "European Roulette",
                      image: "/images/tacomania.jpg",
                      rtp: "97.3%",
                      classic: true,
                    },
                    {
                      name: "Razor Shark",
                      image: "/images/wild-mustang.jpg",
                      multiplier: "2,500x",
                      popular: true,
                    },
                    {
                      name: "Money Train 2",
                      image: "/images/wild-rocks.jpg",
                      multiplier: "20,000x",
                      hot: true,
                    },
                    {
                      name: "Lightning Blackjack",
                      image: "/images/ultimo-bingo-paris.jpg",
                      live: true,
                      new: true,
                    },
                    {
                      name: "Mines",
                      image: "/images/originals-mines.png",
                      multiplier: "24.47x",
                      strategy: true,
                    },
                    {
                      name: "Speed Baccarat",
                      image: "/images/xtreme.jpg",
                      live: true,
                      fast: true,
                    },
                    {
                      name: "Jurassic Park",
                      image: "/images/warrior-angels.jpg",
                      ways: "243",
                      popular: true,
                    },
                  ].map((game, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl bg-brand-charcoal-black-secondary border border-brand-primary-green/20 hover:border-brand-primary-green/60 shadow-lg hover:shadow-xl hover:shadow-brand-primary-green/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
                      onClick={() => handleTabChange("casino")}
                    >
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={game.image || "/placeholder.svg"}
                          alt={game.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                        {/* Badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {game.hot && (
                            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                              🔥 HOT
                            </div>
                          )}
                          {game.new && (
                            <div className="bg-brand-vibrant-green text-brand-charcoal-black text-xs px-2 py-1 rounded-full font-bold">
                              ✨ NEW
                            </div>
                          )}
                          {game.live && (
                            <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                              🎥 LIVE
                            </div>
                          )}
                        </div>

                        {/* Game Stats */}
                        <div className="absolute top-2 right-2">
                          {game.jackpot && (
                            <div className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                              💰 {game.jackpot}
                            </div>
                          )}
                          {game.rtp && (
                            <div className="bg-brand-primary-green text-brand-charcoal-black text-xs px-2 py-1 rounded-full font-bold">
                              RTP {game.rtp}
                            </div>
                          )}
                          {game.multiplier && (
                            <div className="bg-brand-vibrant-green text-brand-charcoal-black text-xs px-2 py-1 rounded-full font-bold">
                              {game.multiplier}
                            </div>
                          )}
                        </div>

                        {/* Hover Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                          <button
                            onClick={() => setShowSignup(true)}
                            className="bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black rounded-full p-3 transform hover:scale-110 transition-all duration-200 shadow-lg"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                        </div>

                        {/* Game Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <h3 className="text-brand-soft-white font-bold text-sm truncate">
                            {game.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action Section */}
                <div className="relative bg-gradient-to-r from-brand-primary-green/10 via-brand-vibrant-green/10 to-brand-primary-green/10 rounded-2xl border border-brand-primary-green/30 p-6 sm:p-8 md:p-10 text-center overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 left-4 w-8 h-8 border border-brand-primary-green rounded-full"></div>
                    <div className="absolute top-8 right-8 w-6 h-6 border border-brand-vibrant-green rounded-full"></div>
                    <div className="absolute bottom-6 left-8 w-4 h-4 border border-brand-primary-green rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 border border-brand-vibrant-green rounded-full"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-brand-soft-white mb-4">
                        READY TO PLAY?
                      </h3>
                      <p className="text-lg sm:text-xl md:text-2xl text-brand-smoke-gray mb-2">
                        Explore our complete collection of{" "}
                        <span className="text-brand-primary-green font-bold">
                          2,800+ games
                        </span>
                      </p>
                      <p className="text-base sm:text-lg text-brand-smoke-gray">
                        Sign up now and get{" "}
                        <span className="text-brand-vibrant-green font-bold">
                          125% Welcome Bonus
                        </span>{" "}
                        + Free Spins!
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                      <Button
                        onClick={() => handleTabChange("casino")}
                        className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 w-full sm:w-auto"
                      >
                        EXPLORE ALL GAMES
                      </Button>

                      <Button
                        onClick={() => setShowSignup(true)}
                        variant="outline"
                        className="border-2 border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-charcoal-black bg-transparent px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl rounded-full font-bold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                      >
                        CLAIM BONUS
                      </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-8 pt-6 border-t border-brand-primary-green/20">
                      <div className="flex items-center space-x-2 text-brand-smoke-gray">
                        <div className="w-2 h-2 bg-brand-primary-green rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">
                          Instant Play
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-brand-smoke-gray">
                        <div className="w-2 h-2 bg-brand-vibrant-green rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">
                          Quick Payouts
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-brand-smoke-gray">
                        <div className="w-2 h-2 bg-brand-primary-green rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">
                          24/7 Support
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-brand-smoke-gray">
                        <div className="w-2 h-2 bg-brand-vibrant-green rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">
                          Secure & Licensed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Bets Section */}
            <section className="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 bg-black border-b border-brand-smoke-gray/10 w-full">
              <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-brand-soft-white mb-3 sm:mb-4">
                    <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                      RECENT BETS
                    </span>{" "}
                    LIVE FEED
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-brand-smoke-gray max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl mx-auto font-medium leading-relaxed">
                    See what other players are winning in real-time
                  </p>
                </div>

                <div className="bg-brand-charcoal-black-secondary rounded-lg sm:rounded-xl border border-brand-smoke-gray/20 overflow-hidden">
                  <div className="max-h-80 sm:max-h-96 overflow-y-auto">
                    {bets.map((bet, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 border-b border-brand-smoke-gray/10 last:border-b-0 hover:bg-brand-smoke-gray/5 transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green flex items-center justify-center flex-shrink-0">
                            <span className="text-brand-charcoal-black font-bold text-xs sm:text-sm">
                              {bet.user.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-brand-soft-white font-semibold text-sm sm:text-base truncate">
                              {bet.user}
                            </div>
                            <div className="text-brand-smoke-gray text-xs sm:text-sm">
                              {bet.game} • {bet.time}
                            </div>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-brand-soft-white font-bold text-xs sm:text-sm md:text-base">
                            ${bet.amount.toFixed(2)} × {bet.mult.toFixed(2)}
                          </div>
                          <div
                            className={`text-xs sm:text-sm font-semibold ${
                              bet.profit > 0
                                ? "text-brand-primary-green"
                                : "text-red-400"
                            }`}
                          >
                            {bet.profit > 0 ? "+" : ""}${bet.profit.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className=" min-h-screen bg-brand-charcoal-black font-poppins w-full">
      <TopNavigation
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onSignUpClick={() => setShowSignup(true)}
        onLoginClick={() => setShowLogin(true)}
      />

      <main className="flex-1 transition-all duration-300 w-full">
        {renderTabContent()}
      </main>

      <Footer />

      {/* Sign Up Iframe Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setShowSignup(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en"
              className="w-full h-full border-0"
              title="Sign Up"
            />
          </div>
        </div>
      )}

      {/* Login Iframe Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://betslip.ibetsports.ag/login"
              className="w-full h-full border-0"
              title="Login"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
}
