"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Phone } from "lucide-react"

interface EnhancedFormsProps {
  isLoginOpen: boolean
  setIsLoginOpen: (open: boolean) => void
  isSignupOpen: boolean
  setIsSignupOpen: (open: boolean) => void
}

export function EnhancedForms({ isLoginOpen, setIsLoginOpen, isSignupOpen, setIsSignupOpen }: EnhancedFormsProps) {
  const switchToRegister = () => {
    setIsLoginOpen(false)
    setTimeout(() => setIsSignupOpen(true), 100)
  }

  const switchToLogin = () => {
    setIsSignupOpen(false)
    setTimeout(() => setIsLoginOpen(true), 100)
  }

  return (
    <>
      {/* Hidden Dialog Triggers */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogTrigger asChild>
          <Button className="hidden">Login</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md bg-brand-charcoal-black border border-brand-primary-green/30 text-brand-soft-white p-0 gap-0 w-[90vw] max-w-[400px] max-h-[90vh] overflow-y-auto">
          <div className="relative p-3 sm:p-6 md:p-8">
            {/* Close Button */}
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-brand-charcoal-black-secondary/80 hover:bg-brand-primary-green/20 border border-brand-primary-green/30 rounded-full flex items-center justify-center text-brand-soft-white hover:text-brand-primary-green transition-all duration-200 z-10"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Login Title */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-brand-soft-white text-xl sm:text-2xl font-black">
                <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                  LOGIN
                </span>
              </h2>
            </div>

            {/* Login Form */}
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="loginUsername" className="text-brand-soft-white font-semibold">
                  Username or Email
                </Label>
                <Input
                  id="loginUsername"
                  type="text"
                  placeholder="Enter your username or email"
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="loginPassword" className="text-brand-soft-white font-semibold">
                  Password
                </Label>
                <Input
                  id="loginPassword"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 sm:h-12 bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black rounded-lg text-base sm:text-lg mt-4 sm:mt-6"
              >
                LOGIN
              </Button>
            </form>

            {/* Links */}
            <div className="text-center space-y-3 mt-4 sm:mt-6">
              <p className="text-brand-soft-white text-sm sm:text-base">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-brand-primary-green hover:text-brand-vibrant-green underline font-medium cursor-pointer"
                  onClick={switchToRegister}
                >
                  Sign Up
                </button>
              </p>
              <p>
                <button
                  type="button"
                  className="text-brand-primary-green hover:text-brand-vibrant-green underline text-sm sm:text-base cursor-pointer"
                >
                  Forgot your password?
                </button>
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="grid grid-cols-1 gap-3 mt-6 sm:grid-cols-2 sm:gap-4 sm:mt-8">
              <div className="bg-brand-primary-green rounded-lg p-3 sm:p-4 text-center">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-black" />
                  <span className="font-bold text-sm sm:text-base lg:text-lg text-black">1 888 203 1771</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-black">Wagering</p>
              </div>
              <div className="bg-brand-primary-green rounded-lg p-3 sm:p-4 text-center">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-black" />
                  <span className="font-bold text-sm sm:text-base lg:text-lg text-black">1 888 210 3449</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-black">Customer Service</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
        <DialogTrigger asChild>
          <Button className="hidden">Sign Up</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg bg-brand-charcoal-black border border-brand-primary-green/30 text-brand-soft-white p-0 gap-0 w-[90vw] max-w-[450px] max-h-[85vh] overflow-y-auto">
          <div className="relative p-2 sm:p-4 md:p-6">
            {/* Close Button */}
            <button
              onClick={() => setIsSignupOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-brand-charcoal-black-secondary hover:bg-brand-primary-green/20 border border-brand-primary-green/30 rounded-full flex items-center justify-center text-brand-soft-white hover:text-brand-primary-green transition-all duration-200 z-10"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Register Title */}
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-brand-soft-white text-xl sm:text-2xl font-black">
                <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                  CREATE YOUR ACCOUNT
                </span>
              </h2>
            </div>

            {/* Registration Form */}
            <form className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-brand-soft-white font-semibold">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-brand-soft-white font-semibold">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-brand-soft-white font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emailConfirmation" className="text-brand-soft-white font-semibold">
                  Confirm Email
                </Label>
                <Input
                  id="emailConfirmation"
                  type="email"
                  placeholder="Confirm your email"
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
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
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="passwordConfirmation" className="text-brand-soft-white font-semibold">
                  Confirm Password
                </Label>
                <Input
                  id="passwordConfirmation"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="promotionalCode" className="text-brand-soft-white font-semibold">
                  Promotional Code (Optional)
                </Label>
                <Input
                  id="promotionalCode"
                  type="text"
                  placeholder="Enter promotional code"
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
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
                className="w-full h-11 sm:h-12 bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black rounded-lg text-base sm:text-lg mt-4 sm:mt-6"
              >
                CREATE ACCOUNT
              </Button>
            </form>
            <div className="text-center mt-3 sm:mt-4">
              <p className="text-sm text-brand-smoke-gray">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-brand-primary-green hover:text-brand-vibrant-green underline cursor-pointer font-semibold"
                  onClick={switchToLogin}
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
