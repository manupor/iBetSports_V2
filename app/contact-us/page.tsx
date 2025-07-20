"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { useState } from "react"
import { Footer } from "@/components/footer"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      info: "Available 24/7",
      action: "Start Chat",
      href: "/live-chat",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      info: "support@draftcasino.com",
      action: "Send Email",
      href: "mailto:support@draftcasino.com",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      info: "+1 (555) 123-4567",
      action: "Call Now",
      href: "tel:+15551234567",
    },
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      info: "123 Casino Street, Gaming District, Las Vegas, NV 89101",
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "24/7 Customer Support Available",
    },
    {
      icon: Mail,
      title: "General Inquiries",
      info: "info@draftcasino.com",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to the server
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Thank you for your message! We'll get back to you within 24 hours.")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-brand-charcoal-black min-h-screen text-brand-soft-white font-poppins">
      <TopNavigation showTabs={true} />

      {/* Header */}
      <header className="bg-brand-charcoal-black-secondary/95 backdrop-blur-sm py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Mail className="w-10 h-10 text-brand-primary-green" />
              <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
            </div>
            <p className="text-xl text-brand-smoke-gray max-w-3xl mx-auto">
              We're here to help! Get in touch with our support team for any questions, concerns, or feedback.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 md:p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Send className="w-6 h-6 text-brand-primary-green" />
                <h2 className="text-2xl font-bold">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-smoke-gray mb-2">Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="bg-brand-charcoal-black border-brand-smoke-gray/50 focus:border-brand-primary-green"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-smoke-gray mb-2">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="bg-brand-charcoal-black border-brand-smoke-gray/50 focus:border-brand-primary-green"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-smoke-gray mb-2">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    className="bg-brand-charcoal-black border-brand-smoke-gray/50 focus:border-brand-primary-green"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-smoke-gray mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your question or concern in detail..."
                    rows={6}
                    className="bg-brand-charcoal-black border-brand-smoke-gray/50 focus:border-brand-primary-green resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-primary-green/20 p-3 rounded-lg">
                        <method.icon className="w-6 h-6 text-brand-primary-green" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1">{method.title}</h3>
                        <p className="text-brand-smoke-gray mb-2">{method.description}</p>
                        <p className="text-brand-soft-white font-medium mb-3">{method.info}</p>
                        <a href={method.href}>
                          <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark">
                            {method.action}
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Information */}
            <Card className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Office Information</h3>
              <div className="space-y-4">
                {officeInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <info.icon className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-brand-soft-white mb-1">{info.title}</h4>
                      <p className="text-brand-smoke-gray text-sm">{info.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* FAQ Link */}
            <Card className="bg-gradient-to-r from-brand-primary-green/20 to-brand-vibrant-green/20 border border-brand-primary-green/30 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Need Quick Answers?</h3>
              <p className="text-brand-smoke-gray mb-4">
                Check out our Help Center for instant answers to common questions.
              </p>
              <Button
                variant="outline"
                className="border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-soft-white bg-transparent"
              >
                Visit Help Center
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Response Time Notice */}
      <section className="py-8 bg-brand-charcoal-black-secondary/20">
        <div className="max-w-4xl mx-auto px-4 md:px-12 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="w-6 h-6 text-brand-primary-green" />
            <h3 className="text-xl font-bold">Response Times</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-brand-charcoal-black-secondary/50 p-4 rounded-lg">
              <div className="font-bold text-brand-primary-green">Live Chat</div>
              <div className="text-brand-smoke-gray">Instant - 30 seconds</div>
            </div>
            <div className="bg-brand-charcoal-black-secondary/50 p-4 rounded-lg">
              <div className="font-bold text-brand-primary-green">Email</div>
              <div className="text-brand-smoke-gray">Within 24 hours</div>
            </div>
            <div className="bg-brand-charcoal-black-secondary/50 p-4 rounded-lg">
              <div className="font-bold text-brand-primary-green">Phone</div>
              <div className="text-brand-smoke-gray">Immediate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
