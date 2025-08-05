"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Menu, X, Gem } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TopNavigation() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#", label: "Casino" },
    { href: "#", label: "Sports" },
    { href: "#", label: "Promotions" },
    { href: "#", label: "VIP" },
  ]

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Gem className="h-6 w-6 text-pink-500" />
              <span className="hidden font-bold sm:inline-block text-white">LuckySpin</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="md:hidden flex-1">
              <Link href="/" className="flex items-center space-x-2">
                <Gem className="h-6 w-6 text-pink-500" />
                <span className="font-bold text-white">LuckySpin</span>
              </Link>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
              </Button>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" onClick={() => setIsLoginOpen(true)} className="text-white hover:bg-gray-800">
                Log In
              </Button>
              <Button onClick={() => setIsRegisterOpen(true)} className="bg-pink-600 hover:bg-pink-700 text-white">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 border-t border-border/40">
            <nav className="flex flex-col items-start space-y-2 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-full p-2 rounded-md transition-colors hover:bg-accent text-foreground/60"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="w-full border-t pt-4 flex flex-col space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    setIsLoginOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Log In
                </Button>
                <Button
                  className="w-full justify-start bg-pink-600 hover:bg-pink-700"
                  onClick={() => {
                    setIsRegisterOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border-purple-500">
          <DialogHeader>
            <DialogTitle>Log In</DialogTitle>
            <DialogDescription>Access your LuckySpin account.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email-login" className="text-right">
                Email
              </Label>
              <Input
                id="email-login"
                type="email"
                placeholder="you@example.com"
                className="col-span-3 bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password-login" className="text-right">
                Password
              </Label>
              <Input
                id="password-login"
                type="password"
                className="col-span-3 bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Log In
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Register Dialog */}
      <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border-pink-500">
          <DialogHeader>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogDescription>Create your LuckySpin account to start playing.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email-register" className="text-right">
                Email
              </Label>
              <Input
                id="email-register"
                type="email"
                placeholder="you@example.com"
                className="col-span-3 bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password-register" className="text-right">
                Password
              </Label>
              <Input
                id="password-register"
                type="password"
                className="col-span-3 bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
              Create Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
