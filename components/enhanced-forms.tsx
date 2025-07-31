"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Phone, ArrowLeft, ArrowRight } from "lucide-react"

// Declare BackEndLogin function
declare const BackEndLogin: any

interface EnhancedFormsProps {
  isLoginOpen: boolean
  setIsLoginOpen: (open: boolean) => void
  isSignupOpen: boolean
  setIsSignupOpen: (open: boolean) => void
}

export function EnhancedForms({ isLoginOpen, setIsLoginOpen, isSignupOpen, setIsSignupOpen }: EnhancedFormsProps) {
  const [signupStep, setSignupStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    emailConfirmation: "",
    promotionalCode: "",
    password: "",
    passwordConfirmation: "",
    termsAccepted: false,
  })

  const switchToRegister = () => {
    setIsLoginOpen(false)
    setTimeout(() => setIsSignupOpen(true), 100)
  }

  const switchToLogin = () => {
    setIsSignupOpen(false)
    setTimeout(() => setIsLoginOpen(true), 100)
  }

  const handleSignupClose = () => {
    setIsSignupOpen(false)
    setSignupStep(1)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      emailConfirmation: "",
      promotionalCode: "",
      password: "",
      passwordConfirmation: "",
      termsAccepted: false,
    })
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    setSignupStep(2)
  }

  const handlePrevStep = () => {
    setSignupStep(1)
  }

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    handleSignupClose()
  }

  const handleLoginSubmit = (form: HTMLFormElement) => {
    if (typeof BackEndLogin === "function") {
      BackEndLogin(form)
    } else {
      console.error("BackEndLogin function not available")
    }
    return false
  }

  return (
    <>
      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogTrigger asChild>
          <Button className="hidden">Login</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md bg-brand-charcoal-black border border-brand-primary-green/30 text-brand-soft-white p-0 gap-0 w-[90vw] max-w-[400px] max-h-[90vh] overflow-y-auto">
          <div className="relative p-3 sm:p-6 md:p-8">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-brand-charcoal-black-secondary/80 hover:bg-brand-primary-green/20 border border-brand-primary-green/30 rounded-full flex items-center justify-center text-brand-soft-white hover:text-brand-primary-green transition-all duration-200 z-10"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-brand-soft-white text-xl sm:text-2xl font-black">
                <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                  LOGIN
                </span>
              </h2>
            </div>

            <form
              name="LoginForm"
              action="javascript:void(0)"
              onSubmit={(e) => {
                e.preventDefault()
                handleLoginSubmit(e.target as HTMLFormElement)
                return false
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="loginUsername" className="text-brand-soft-white font-semibold">
                  Username or Email
                </Label>
                <input
                  type="text"
                  name="username"
                  id="loginUsername"
                  placeholder="Username or Email"
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="loginPassword" className="text-brand-soft-white font-semibold">
                  Password
                </Label>
                <input
                  type="password"
                  name="password"
                  id="loginPassword"
                  placeholder="Password"
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                  required
                />
              </div>

              <small name="msj_error_lg" className="text-red-500 block"></small>

              <input type="hidden" name="BackEndUrl" value="https://betslip.ibetsports.ag/" />
              <input type="hidden" name="idsite" value="901" />

              <button
                type="submit"
                name="btn-login"
                className="w-full h-11 sm:h-12 bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black rounded-lg text-base sm:text-lg mt-4 sm:mt-6"
              >
                LOGIN
              </button>
            </form>

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
                <a
                  href="/reset-password"
                  className="text-brand-primary-green hover:text-brand-vibrant-green underline text-sm sm:text-base cursor-pointer"
                >
                  Forgot your password?
                </a>
              </p>
            </div>

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

      {/* Signup Dialog */}
      <Dialog open={isSignupOpen} onOpenChange={handleSignupClose}>
        <DialogTrigger asChild>
          <Button className="hidden">Sign Up</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg bg-brand-charcoal-black border border-brand-primary-green/30 text-brand-soft-white p-0 gap-0 w-[90vw] max-w-[450px] max-h-[85vh] overflow-y-auto">
          <div className="relative p-3 sm:p-6 md:p-8">
            <button
              onClick={handleSignupClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-brand-charcoal-black-secondary hover:bg-brand-primary-green/20 border border-brand-primary-green/30 rounded-full flex items-center justify-center text-brand-soft-white hover:text-brand-primary-green transition-all duration-200 z-10"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Step Indicator - Mobile Only */}
            <div className="flex justify-center mb-4 sm:hidden">
              <div className="flex space-x-2">
                <div
                  className={`w-3 h-3 rounded-full ${signupStep === 1 ? "bg-brand-primary-green" : "bg-brand-smoke-gray/30"}`}
                ></div>
                <div
                  className={`w-3 h-3 rounded-full ${signupStep === 2 ? "bg-brand-primary-green" : "bg-brand-smoke-gray/30"}`}
                ></div>
              </div>
            </div>

            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-brand-soft-white text-xl sm:text-2xl font-black">
                <span className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green bg-clip-text text-transparent">
                  <span className="sm:hidden">{signupStep === 1 ? "CREATE YOUR ACCOUNT" : "SET YOUR PASSWORD"}</span>
                  <span className="hidden sm:inline">CREATE YOUR ACCOUNT</span>
                </span>
              </h2>
            </div>

            {/* Desktop Form */}
            <div className="hidden sm:block">
              <form onSubmit={handleSignupSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-brand-soft-white font-semibold">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
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
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
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
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
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
                    value={formData.emailConfirmation}
                    onChange={(e) => handleInputChange("emailConfirmation", e.target.value)}
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
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
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
                    value={formData.passwordConfirmation}
                    onChange={(e) => handleInputChange("passwordConfirmation", e.target.value)}
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
                    value={formData.promotionalCode}
                    onChange={(e) => handleInputChange("promotionalCode", e.target.value)}
                    className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm sm:text-base"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.termsAccepted}
                    onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
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
            </div>

            {/* Mobile Multi-Step Form */}
            <div className="block sm:hidden">
              {signupStep === 1 && (
                <form onSubmit={handleNextStep} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstNameMobile" className="text-brand-soft-white font-semibold">
                      First Name
                    </Label>
                    <Input
                      id="firstNameMobile"
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="w-full h-11 px-3 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastNameMobile" className="text-brand-soft-white font-semibold">
                      Last Name
                    </Label>
                    <Input
                      id="lastNameMobile"
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="w-full h-11 px-3 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emailMobile" className="text-brand-soft-white font-semibold">
                      Email
                    </Label>
                    <Input
                      id="emailMobile"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full h-11 px-3 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emailConfirmationMobile" className="text-brand-soft-white font-semibold">
                      Confirm Email
                    </Label>
                    <Input
                      id="emailConfirmationMobile"
                      type="email"
                      placeholder="Confirm your email"
                      value={formData.emailConfirmation}
                      onChange={(e) => handleInputChange("emailConfirmation", e.target.value)}
                      className="w-full h-11 px-3 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="promotionalCodeMobile" className="text-brand-soft-white font-semibold">
                      Promotional Code (Optional)
                    </Label>
                    <Input
                      id="promotionalCodeMobile"
                      type="text"
                      placeholder="Enter promotional code"
                      value={formData.promotionalCode}
                      onChange={(e) => handleInputChange("promotionalCode", e.target.value)}
                      className="w-full h-11 px-3 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black rounded-lg text-base mt-6 flex items-center justify-center"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}

              {signupStep === 2 && (
                <form onSubmit={handleSignupSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="passwordMobile" className="text-brand-soft-white font-semibold">
                      Password
                    </Label>
                    <Input
                      id="passwordMobile"
                      type="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="w-full h-11 px-3 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="passwordConfirmationMobile" className="text-brand-soft-white font-semibold">
                      Confirm Password
                    </Label>
                    <Input
                      id="passwordConfirmationMobile"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.passwordConfirmation}
                      onChange={(e) => handleInputChange("passwordConfirmation", e.target.value)}
                      className="w-full h-11 px-3 bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded-lg text-brand-soft-white placeholder:text-brand-smoke-gray focus:ring-2 focus:ring-brand-primary-green focus:outline-none focus:border-brand-primary-green text-sm"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="termsMobile"
                      checked={formData.termsAccepted}
                      onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
                      className="w-4 h-4 text-brand-primary-green bg-brand-charcoal-black-secondary border-brand-smoke-gray/30 rounded focus:ring-brand-primary-green"
                      required
                    />
                    <Label htmlFor="termsMobile" className="text-sm text-brand-smoke-gray">
                      I agree to the{" "}
                      <span className="text-brand-primary-green hover:underline cursor-pointer">
                        Terms & Conditions
                      </span>
                    </Label>
                  </div>

                  <div className="flex space-x-3 mt-6">
                    <Button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex-1 h-11 bg-brand-charcoal-black-secondary border border-brand-primary-green/30 hover:bg-brand-primary-green/10 text-brand-soft-white font-semibold rounded-lg text-base flex items-center justify-center"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 h-11 bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black rounded-lg text-base"
                    >
                      CREATE ACCOUNT
                    </Button>
                  </div>
                </form>
              )}
            </div>

            <div className="text-center mt-4 sm:mt-6">
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
