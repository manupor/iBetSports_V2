"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { useMediaQuery } from "usehooks-ts"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Race {
  id: number
  time: string
  location: string
  participants: string[]
}

const upcomingRaces: Race[] = [
  { id: 1, time: "10:00 AM", location: "Churchill Downs", participants: ["Horse A", "Horse B", "Horse C"] },
  { id: 2, time: "11:30 AM", location: "Santa Anita Park", participants: ["Horse D", "Horse E", "Horse F"] },
  { id: 3, time: "1:00 PM", location: "Belmont Park", participants: ["Horse G", "Horse H", "Horse I"] },
]

const RacebookTabContent = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [date, setDate] = useState<Date | undefined>(new Date())

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  const RegistrationModal = () => (
    <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
      <DialogContent className="bg-brand-charcoal-black border border-brand-primary-green/30 text-brand-soft-white max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-black text-brand-soft-white mb-4">
            <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
              JOIN IBETSPORTS
            </span>
          </DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-brand-soft-white font-semibold">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder:text-brand-smoke-gray focus:border-brand-primary-green"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username" className="text-brand-soft-white font-semibold">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Choose a username"
              className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder:text-brand-smoke-gray focus:border-brand-primary-green"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-brand-soft-white font-semibold">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder:text-brand-smoke-gray focus:border-brand-primary-green"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-brand-soft-white font-semibold">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 text-brand-soft-white placeholder:text-brand-smoke-gray focus:border-brand-primary-green"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-brand-primary-green bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded focus:ring-brand-primary-green"
              required
            />
            <Label htmlFor="terms" className="text-sm text-brand-smoke-gray">
              I agree to the{" "}
              <span className="text-brand-primary-green hover:underline cursor-pointer">Terms & Conditions</span>
            </Label>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black py-3 text-lg rounded-lg transition-all duration-300"
          >
            CREATE ACCOUNT
          </Button>
          <div className="text-center">
            <p className="text-sm text-brand-smoke-gray">
              Already have an account?{" "}
              <span className="text-brand-primary-green hover:underline cursor-pointer font-semibold">Sign In</span>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-brand-soft-white">Racebook</h1>

      {/* Calendar Section */}
      <Card className="w-full mb-4 bg-brand-charcoal-black border border-brand-primary-green/30">
        <CardHeader>
          <CardTitle className="text-brand-soft-white">Choose a Date</CardTitle>
          <CardDescription className="text-brand-smoke-gray">Select a date from the calendar.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 mt-4 bg-brand-charcoal-black border border-brand-primary-green/30">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date > new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>

      {/* Upcoming Races Section */}
      <h2 className="text-xl font-semibold mb-2 text-brand-soft-white">Upcoming Races</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {upcomingRaces.map((race) => (
          <Card key={race.id} className="bg-brand-charcoal-black border border-brand-primary-green/30">
            <CardHeader>
              <CardTitle className="text-brand-soft-white">{race.location}</CardTitle>
              <CardDescription className="text-brand-smoke-gray">Time: {race.time}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-brand-soft-white">Participants: {race.participants.join(", ")}</p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => setIsRegistrationOpen(true)}
                className="bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-bold"
              >
                Bet
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Mobile View Drawer */}
      {isMobile && (
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="fixed bottom-4 right-4 bg-brand-charcoal-black border border-brand-primary-green/30 text-brand-soft-white hover:bg-brand-charcoal-black-secondary">
              Place a Bet
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-brand-charcoal-black text-brand-soft-white">
            <DrawerHeader>
              <DrawerTitle>Place Your Bet</DrawerTitle>
              <DrawerDescription>Select your race and place your bet.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              {upcomingRaces.map((race) => (
                <div key={race.id} className="mb-4">
                  <h3 className="text-lg font-semibold">
                    {race.location} - {race.time}
                  </h3>
                  <p>Participants: {race.participants.join(", ")}</p>
                  <Button
                    onClick={() => setIsRegistrationOpen(true)}
                    className="w-full bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-bold"
                  >
                    Place Bet
                  </Button>
                </div>
              ))}
            </div>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
      <RegistrationModal />
    </div>
  )
}

export default RacebookTabContent
