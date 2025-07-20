"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, Clock, Users, Headphones, Zap } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"
import { useState } from "react"
import { Footer } from "@/components/footer"

export default function LiveChatPage() {
  const [message, setMessage] = useState("")
  const [chatStarted, setChatStarted] = useState(false)

  const supportFeatures = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Our support team is available around the clock to help you",
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Get immediate answers to your questions in real-time",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Trained professionals ready to solve any issue",
    },
    {
      icon: Users,
      title: "Multilingual",
      description: "Support available in multiple languages",
    },
  ]

  const commonQuestions = [
    "How do I make a deposit?",
    "How long do withdrawals take?",
    "How do I claim my bonus?",
    "I forgot my password",
    "How do I verify my account?",
    "What games do you offer?",
  ]

  const handleStartChat = () => {
    setChatStarted(true)
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to the chat system
      setMessage("")
    }
  }

  return (
    <div className="bg-brand-charcoal-black min-h-screen text-brand-soft-white font-poppins">
      <TopNavigation showTabs={true} />

      {/* Header */}
      <header className="bg-brand-charcoal-black-secondary/95 backdrop-blur-sm py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MessageCircle className="w-10 h-10 text-brand-primary-green" />
              <h1 className="text-4xl md:text-6xl font-bold">Live Chat</h1>
            </div>
            <p className="text-xl text-brand-smoke-gray max-w-3xl mx-auto">
              Get instant help from our support team. We're here 24/7 to assist you with any questions or issues.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 rounded-2xl overflow-hidden h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="bg-brand-charcoal-black-tertiary/30 p-4 border-b border-brand-smoke-gray/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-primary-green rounded-full flex items-center justify-center">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Support Team</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-primary-green rounded-full"></div>
                      <span className="text-sm text-brand-smoke-gray">Online - Average response time: 30 seconds</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                {!chatStarted ? (
                  <div className="text-center py-12">
                    <MessageCircle className="w-16 h-16 mx-auto mb-4 text-brand-smoke-gray" />
                    <h3 className="text-xl font-bold mb-2">Start a Conversation</h3>
                    <p className="text-brand-smoke-gray mb-6">
                      Click the button below to connect with our support team
                    </p>
                    <Button
                      onClick={handleStartChat}
                      className="bg-brand-primary-green hover:bg-brand-primary-green-dark"
                    >
                      Start Chat
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Welcome Message */}
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-brand-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                        <Headphones className="w-4 h-4" />
                      </div>
                      <div className="bg-brand-charcoal-black-tertiary/50 p-3 rounded-lg max-w-xs">
                        <p className="text-sm">Hello! Welcome to Draft Casino support. How can I help you today?</p>
                        <span className="text-xs text-brand-smoke-gray mt-1 block">Just now</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              {chatStarted && (
                <div className="p-4 border-t border-brand-smoke-gray/30">
                  <div className="flex items-center space-x-3">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 bg-brand-charcoal-black border-brand-smoke-gray/50 focus:border-brand-primary-green"
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <Button
                      onClick={handleSendMessage}
                      className="bg-brand-primary-green hover:bg-brand-primary-green-dark"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <Card className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Quick Questions</h3>
              <div className="space-y-2">
                {commonQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="block w-full text-left text-sm text-brand-smoke-gray hover:text-brand-soft-white transition-colors py-2 px-3 rounded hover:bg-brand-charcoal-black-tertiary/30"
                    onClick={() => setMessage(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </Card>

            {/* Support Features */}
            <Card className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Why Choose Live Chat?</h3>
              <div className="space-y-4">
                {supportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <feature.icon className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">{feature.title}</h4>
                      <p className="text-xs text-brand-smoke-gray">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Alternative Contact */}
            <Card className="bg-brand-charcoal-black-secondary/50 border border-brand-smoke-gray/30 p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-soft-white bg-transparent"
                >
                  Email Support
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-brand-primary-green text-brand-primary-green hover:bg-brand-primary-green hover:text-brand-soft-white bg-transparent"
                >
                  Help Center
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
