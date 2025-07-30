"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const PromotionsTabContent = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <div className="container mx-auto py-8">
      {/* Mobile Hero - Image First, Text Below */}
      <section className="block md:hidden">
        <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-lg">
          <Image
            src="/images/football-hero-promotions.jpg"
            alt="Promotions Hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="bg-brand-charcoal-black text-center py-6 px-4">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-black">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                GET MORE FROM EVERY BET.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-brand-smoke-gray max-w-md mx-auto">
              Unlock exclusive bonuses, cashback rewards, and VIP perks designed to maximize your winnings.
            </p>
            <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
              <DialogTrigger asChild>
                <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-6 py-3 text-base">
                  <Play className="w-4 h-4 mr-2" />
                  CLAIM BONUS
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 text-white max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-brand-primary-green text-xl font-bold text-center">
                    CREATE YOUR ACCOUNT
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 p-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-brand-charcoal-black border-brand-smoke-gray text-white placeholder:text-brand-smoke-gray"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-white">
                      Username
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Choose a username"
                      className="bg-brand-charcoal-black border-brand-smoke-gray text-white placeholder:text-brand-smoke-gray"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      className="bg-brand-charcoal-black border-brand-smoke-gray text-white placeholder:text-brand-smoke-gray"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="bg-brand-charcoal-black border-brand-smoke-gray text-white placeholder:text-brand-smoke-gray"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 text-brand-primary-green bg-brand-charcoal-black border-brand-smoke-gray rounded focus:ring-brand-primary-green"
                    />
                    <Label htmlFor="terms" className="text-sm text-white">
                      I agree to the Terms & Conditions and Privacy Policy
                    </Label>
                  </div>
                  <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold py-2">
                    CREATE ACCOUNT
                  </Button>
                  <p className="text-center text-sm text-white">
                    Already have an account?{" "}
                    <button className="text-brand-primary-green hover:underline">Sign In</button>
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Desktop Hero - Overlay Design */}
      <section className="hidden md:block relative h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] w-full overflow-hidden rounded-lg mb-8">
        <Image
          src="/images/football-hero-promotions.jpg"
          alt="Promotions Hero"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-start pl-6 lg:pl-12 -mt-2.5">
          <div className="text-left space-y-4">
            <h1 className="text-4xl font-black md:text-5xl">
              <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                GET MORE FROM EVERY BET.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-brand-smoke-gray max-w-lg">
              Unlock exclusive bonuses, cashback rewards, and VIP perks designed to maximize your winnings.
            </p>
            <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
              <DialogTrigger asChild>
                <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-8 py-3 text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  CLAIM BONUS
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-brand-charcoal-black-secondary border border-brand-primary-green/30 text-white max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-brand-primary-green text-xl font-bold text-center">
                    CREATE YOUR ACCOUNT
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 p-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-brand-charcoal-black border-brand-smoke-gray text-white placeholder:text-brand-smoke-gray"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-white">
                      Username
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Choose a username"
                      className="bg-brand-charcoal-black border-brand-smoke-gray text-white placeholder:text-brand-smoke-gray"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      className="bg-brand-charcoal-black border-brand-smoke-gray text-white placeholder:text-brand-smoke-gray"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="bg-brand-charcoal-black border-brand-smoke-gray text-white placeholder:text-brand-smoke-gray"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 text-brand-primary-green bg-brand-charcoal-black border-brand-smoke-gray rounded focus:ring-brand-primary-green"
                    />
                    <Label htmlFor="terms" className="text-sm text-white">
                      I agree to the Terms & Conditions and Privacy Policy
                    </Label>
                  </div>
                  <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold py-2">
                    CREATE ACCOUNT
                  </Button>
                  <p className="text-center text-sm text-white">
                    Already have an account?{" "}
                    <button className="text-brand-primary-green hover:underline">Sign In</button>
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      {/* Promotions Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Promotion Card 1 */}
        <div className="rounded-lg overflow-hidden shadow-md bg-brand-charcoal-black-secondary">
          <Image
            src="/images/promotion-card-1.jpg"
            alt="Promotion 1"
            width={500}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">Welcome Bonus</h3>
            <p className="text-brand-smoke-gray text-sm mt-2">Get a 100% bonus on your first deposit up to $200!</p>
            <Button className="mt-4 bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold">
              Claim Now
            </Button>
          </div>
        </div>

        {/* Promotion Card 2 */}
        <div className="rounded-lg overflow-hidden shadow-md bg-brand-charcoal-black-secondary">
          <Image
            src="/images/promotion-card-2.jpg"
            alt="Promotion 2"
            width={500}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">Free Bet Friday</h3>
            <p className="text-brand-smoke-gray text-sm mt-2">
              Place a bet of $50 or more on any sports event and get a $10 free bet.
            </p>
            <Button className="mt-4 bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold">
              Learn More
            </Button>
          </div>
        </div>

        {/* Promotion Card 3 */}
        <div className="rounded-lg overflow-hidden shadow-md bg-brand-charcoal-black-secondary">
          <Image
            src="/images/promotion-card-3.jpg"
            alt="Promotion 3"
            width={500}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">Casino Cashback</h3>
            <p className="text-brand-smoke-gray text-sm mt-2">Get 10% cashback on your casino losses every week.</p>
            <Button className="mt-4 bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionsTabContent
