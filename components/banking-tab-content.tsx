"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, Wallet, Shield, Clock, CheckCircle, AlertCircle, DollarSign, TrendingUp } from "lucide-react"

export default function BankingTabContent() {
  const [activeTab, setActiveTab] = useState("deposit")

  const paymentMethods = [
    {
      category: "Credit Cards",
      icon: "/images/credit-card-payment-logos.png",
      methods: [
        { name: "Visa", fee: "Free", minAmount: "$10", maxAmount: "$5,000", processingTime: "Instant" },
        { name: "Mastercard", fee: "Free", minAmount: "$10", maxAmount: "$5,000", processingTime: "Instant" },
        { name: "American Express", fee: "2.5%", minAmount: "$25", maxAmount: "$2,500", processingTime: "Instant" },
      ],
    },
    {
      category: "Cryptocurrency",
      icon: "/images/cryptocurrency-payment-logo.png",
      methods: [
        { name: "Bitcoin", fee: "Free", minAmount: "$20", maxAmount: "$50,000", processingTime: "15-30 mins" },
        { name: "Ethereum", fee: "Free", minAmount: "$20", maxAmount: "$25,000", processingTime: "5-15 mins" },
        { name: "Litecoin", fee: "Free", minAmount: "$20", maxAmount: "$10,000", processingTime: "10-20 mins" },
        { name: "USDT", fee: "Free", minAmount: "$20", maxAmount: "$50,000", processingTime: "5-10 mins" },
      ],
    },
    {
      category: "P2P Payments",
      icon: "/images/peer-to-peer-payment-logo.png",
      methods: [
        { name: "Zelle", fee: "Free", minAmount: "$50", maxAmount: "$2,500", processingTime: "Instant" },
        { name: "Cash App", fee: "Free", minAmount: "$25", maxAmount: "$1,000", processingTime: "Instant" },
        { name: "Venmo", fee: "Free", minAmount: "$25", maxAmount: "$1,000", processingTime: "Instant" },
      ],
    },
  ]

  const transactions = [
    {
      id: "TXN001",
      type: "Deposit",
      method: "Bitcoin",
      amount: "$500.00",
      status: "Completed",
      date: "2024-01-15 14:30",
      fee: "$0.00",
    },
    {
      id: "TXN002",
      type: "Withdrawal",
      method: "Visa",
      amount: "$250.00",
      status: "Processing",
      date: "2024-01-14 09:15",
      fee: "$5.00",
    },
    {
      id: "TXN003",
      type: "Deposit",
      method: "Zelle",
      amount: "$1,000.00",
      status: "Completed",
      date: "2024-01-13 16:45",
      fee: "$0.00",
    },
    {
      id: "TXN004",
      type: "Withdrawal",
      method: "Bitcoin",
      amount: "$750.00",
      status: "Completed",
      date: "2024-01-12 11:20",
      fee: "$0.00",
    },
    {
      id: "TXN005",
      type: "Deposit",
      method: "Mastercard",
      amount: "$300.00",
      status: "Failed",
      date: "2024-01-11 13:10",
      fee: "$0.00",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "256-bit SSL encryption protects all transactions",
      color: "text-brand-primary-green",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Most deposits are processed instantly",
      color: "text-brand-vibrant-green",
    },
    {
      icon: CreditCard,
      title: "Multiple Methods",
      description: "Credit cards, crypto, and P2P payments accepted",
      color: "text-brand-primary-green",
    },
    {
      icon: Wallet,
      title: "Low Fees",
      description: "Competitive fees with many free options",
      color: "text-brand-vibrant-green",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400"
      case "Processing":
        return "bg-yellow-500/20 text-yellow-400"
      case "Failed":
        return "bg-red-500/20 text-red-400"
      default:
        return "bg-brand-smoke-gray/20 text-brand-smoke-gray"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4" />
      case "Processing":
        return <Clock className="w-4 h-4" />
      case "Failed":
        return <AlertCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-brand-charcoal-black text-brand-soft-white">
      {/* Hero Section */}

      {/* Mobile Hero - Image First, Text Below */}
      <div className="block md:hidden">
        {/* Hero Image */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <Image
            src="/images/banking-hero-money.jpg"
            alt="Banking Hero - Money and Casino"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Hero Text Content */}
        <div className="bg-brand-charcoal-black px-4 py-6 sm:px-6 sm:py-8">
          <div className="text-center space-y-4">
            <h1 className="text-2xl sm:text-3xl font-black text-brand-soft-white leading-tight">
              FAST. SAFE.
              <br />
              HASSLE-FREE PAYOUTS.
            </h1>
            <p className="text-sm sm:text-base text-brand-smoke-gray leading-relaxed max-w-md mx-auto">
              Deposit and withdraw with confidence using crypto, cards, or P2P payments.
            </p>
            <Button
              onClick={() => window.open("https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en", "_blank")}
              className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-6 sm:px-8 py-3 text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-105 touch-manipulation"
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Hero - Overlay Design */}
      <div className="hidden md:block relative h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden">
        <Image
          src="/images/banking-hero-money.jpg"
          alt="Banking Hero - Money and Casino"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 md:px-8 lg:pl-12 xl:pl-24">
          <div className="text-left space-y-2 sm:space-y-3 md:space-y-4 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-brand-soft-white leading-tight">
              FAST. SAFE.
              <br />
              HASSLE-FREE PAYOUTS.
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed">
              Deposit and withdraw with confidence using crypto, cards, or P2P payments.
            </p>
            <Button
              onClick={() => window.open("https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en", "_blank")}
              className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 touch-manipulation"
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 md:py-8">
        {/* Banking Tabs */}
        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 bg-brand-charcoal-black-secondary gap-1 sm:gap-0 p-1">
              <TabsTrigger
                value="deposit"
                className="data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black text-sm sm:text-base py-2 sm:py-3"
              >
                Deposit
              </TabsTrigger>
              <TabsTrigger
                value="withdraw"
                className="data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black text-sm sm:text-base py-2 sm:py-3"
              >
                Withdraw
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className="data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black text-sm sm:text-base py-2 sm:py-3"
              >
                Transaction History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="deposit" className="mt-4 sm:mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* Payment Methods */}
                <div className="lg:col-span-2 order-2 lg:order-1">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Choose Payment Method</h2>
                  <div className="space-y-4 sm:space-y-6">
                    {paymentMethods.map((category, index) => (
                      <Card
                        key={index}
                        className="p-3 sm:p-4 md:p-6 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30"
                      >
                        <div className="flex items-center mb-3 sm:mb-4 text-white">
                          <Image
                            src={category.icon || "/placeholder.svg"}
                            alt={category.category}
                            width={40}
                            height={30}
                            className="mr-3 sm:mr-4 w-8 h-6 sm:w-10 sm:h-8 md:w-12 md:h-8"
                            loading="lazy"
                            sizes="(max-width: 768px) 32px, (max-width: 1024px) 40px, 48px"
                          />
                          <h3 className="text-lg sm:text-xl font-bold">{category.category}</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          {category.methods.map((method, methodIndex) => (
                            <Card
                              key={methodIndex}
                              className="p-3 sm:p-4 bg-brand-charcoal-black-tertiary/30 border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300 cursor-pointer"
                            >
                              <div className="flex justify-between items-start mb-2 text-white">
                                <h4 className="font-semibold text-sm sm:text-base text-white">{method.name}</h4>
                                <Badge
                                  className={`text-xs ${
                                    method.fee === "Free"
                                      ? "bg-green-500/20 text-green-400"
                                      : "bg-yellow-500/20 text-yellow-400"
                                  }`}
                                >
                                  {method.fee}
                                </Badge>
                              </div>
                              <div className="space-y-1 text-xs sm:text-sm text-brand-smoke-gray">
                                <div>Min: {method.minAmount}</div>
                                <div>Max: {method.maxAmount}</div>
                                <div>Processing: {method.processingTime}</div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Deposit Form */}
                <div className="order-1 lg:order-2">
                  <Card className="p-4 sm:p-6 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 sticky top-4">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">Deposit Funds</h3>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white text-sm sm:text-base" htmlFor="amount">
                          Amount
                        </Label>
                        <Input
                          id="amount"
                          placeholder="Enter amount"
                          className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/50 text-white h-10 sm:h-12 text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <Label className="text-white text-sm sm:text-base" htmlFor="method">
                          Payment Method
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/50 text-white h-10 sm:h-12 text-sm sm:text-base">
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bitcoin">Bitcoin</SelectItem>
                            <SelectItem value="visa">Visa</SelectItem>
                            <SelectItem value="mastercard">Mastercard</SelectItem>
                            <SelectItem value="zelle">Zelle</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-white text-sm sm:text-base" htmlFor="bonus">
                          Bonus Code (Optional)
                        </Label>
                        <Input
                          id="bonus"
                          placeholder="Enter bonus code"
                          className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/50 h-10 sm:h-12 text-sm sm:text-base"
                        />
                      </div>
                      <Button
                        onClick={() =>
                          window.open("https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en", "_blank")
                        }
                        className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold h-10 sm:h-12 text-sm sm:text-base"
                      >
                        Sign Up to Deposit
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="withdraw" className="mt-4 sm:mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* Withdrawal Methods */}
                <div className="lg:col-span-2 order-2 lg:order-1">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Withdrawal Methods</h2>
                  <div className="space-y-4 sm:space-y-6">
                    {paymentMethods.map((category, index) => (
                      <Card
                        key={index}
                        className="p-3 sm:p-4 md:p-6 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30"
                      >
                        <div className="flex items-center mb-3 sm:mb-4 text-white">
                          <Image
                            src={category.icon || "/placeholder.svg"}
                            alt={category.category}
                            width={40}
                            height={30}
                            className="mr-3 sm:mr-4 w-8 h-6 sm:w-10 sm:h-8 md:w-12 md:h-8"
                            loading="lazy"
                            sizes="(max-width: 768px) 32px, (max-width: 1024px) 40px, 48px"
                          />
                          <h3 className="text-lg sm:text-xl font-bold">{category.category}</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          {category.methods.map((method, methodIndex) => (
                            <Card
                              key={methodIndex}
                              className="p-3 sm:p-4 bg-brand-charcoal-black-tertiary/30 border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300 cursor-pointer"
                            >
                              <div className="flex justify-between items-start mb-2 text-white">
                                <h4 className="font-semibold text-sm sm:text-base">{method.name}</h4>
                                <Badge
                                  className={`text-xs ${
                                    method.fee === "Free"
                                      ? "bg-green-500/20 text-green-400"
                                      : "bg-yellow-500/20 text-yellow-400"
                                  }`}
                                >
                                  {method.fee}
                                </Badge>
                              </div>
                              <div className="space-y-1 text-xs sm:text-sm text-brand-smoke-gray">
                                <div>Min: {method.minAmount}</div>
                                <div>Max: {method.maxAmount}</div>
                                <div>Processing: {method.processingTime}</div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Withdrawal Form */}
                <div className="order-1 lg:order-2">
                  <Card className="p-4 sm:p-6 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 sticky top-4">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">Withdraw Funds</h3>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white text-sm sm:text-base" htmlFor="withdraw-amount">
                          Amount
                        </Label>
                        <Input
                          id="withdraw-amount"
                          placeholder="Enter amount"
                          className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/50 text-white h-10 sm:h-12 text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <Label className="text-white text-sm sm:text-base" htmlFor="withdraw-method">
                          Withdrawal Method
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/50 text-white h-10 sm:h-12 text-sm sm:text-base">
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bitcoin">Bitcoin</SelectItem>
                            <SelectItem value="visa">Visa</SelectItem>
                            <SelectItem value="mastercard">Mastercard</SelectItem>
                            <SelectItem value="zelle">Zelle</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-white text-sm sm:text-base" htmlFor="wallet-address">
                          Wallet Address / Account
                        </Label>
                        <Input
                          id="wallet-address"
                          placeholder="Enter wallet address or account"
                          className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/50 text-white h-10 sm:h-12 text-sm sm:text-base"
                        />
                      </div>
                      <Button
                        onClick={() =>
                          window.open("https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en", "_blank")
                        }
                        className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold h-10 sm:h-12 text-sm sm:text-base"
                      >
                        Sign Up to Withdraw
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-4 sm:mt-6">
              <Card className="p-3 sm:p-4 md:p-6 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Transaction History</h2>

                {/* Mobile Card View */}
                <div className="block md:hidden space-y-3">
                  {transactions.map((transaction) => (
                    <Card
                      key={transaction.id}
                      className="p-3 bg-brand-charcoal-black-tertiary/30 border border-brand-smoke-gray/20"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="text-brand-soft-white font-mono text-xs">{transaction.id}</div>
                          <div className="text-brand-smoke-gray text-xs">{transaction.date}</div>
                        </div>
                        <Badge className={`${getStatusColor(transaction.status)} flex items-center gap-1 text-xs`}>
                          {getStatusIcon(transaction.status)}
                          {transaction.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <Badge
                            className={`text-xs mb-1 ${
                              transaction.type === "Deposit"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-blue-500/20 text-blue-400"
                            }`}
                          >
                            {transaction.type}
                          </Badge>
                          <div className="text-brand-soft-white text-sm">{transaction.method}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-brand-soft-white font-semibold text-sm">{transaction.amount}</div>
                          <div className="text-brand-smoke-gray text-xs">Fee: {transaction.fee}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-brand-smoke-gray/30">
                        <th className="text-left py-3 px-4 text-brand-smoke-gray text-sm">Transaction ID</th>
                        <th className="text-left py-3 px-4 text-brand-smoke-gray text-sm">Type</th>
                        <th className="text-left py-3 px-4 text-brand-smoke-gray text-sm">Method</th>
                        <th className="text-left py-3 px-4 text-brand-smoke-gray text-sm">Amount</th>
                        <th className="text-left py-3 px-4 text-brand-smoke-gray text-sm">Fee</th>
                        <th className="text-left py-3 px-4 text-brand-smoke-gray text-sm">Status</th>
                        <th className="text-left py-3 px-4 text-brand-smoke-gray text-sm">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b border-brand-smoke-gray/20">
                          <td className="py-3 px-4 text-brand-soft-white font-mono text-sm">{transaction.id}</td>
                          <td className="py-3 px-4">
                            <Badge
                              className={`text-xs ${
                                transaction.type === "Deposit"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-blue-500/20 text-blue-400"
                              }`}
                            >
                              {transaction.type}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-brand-soft-white text-sm">{transaction.method}</td>
                          <td className="py-3 px-4 text-brand-soft-white font-semibold text-sm">
                            {transaction.amount}
                          </td>
                          <td className="py-3 px-4 text-brand-smoke-gray text-sm">{transaction.fee}</td>
                          <td className="py-3 px-4">
                            <Badge className={`${getStatusColor(transaction.status)} flex items-center gap-1 text-xs`}>
                              {getStatusIcon(transaction.status)}
                              {transaction.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-brand-smoke-gray text-sm">{transaction.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Features */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Banking Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 hover:border-brand-primary-green/50 transition-all duration-300 text-center"
              >
                <feature.icon
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 ${feature.color}`}
                />
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2 text-white">{feature.title}</h3>
                <p className="text-brand-smoke-gray text-xs sm:text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <Card className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-brand-primary-green/20 to-brand-vibrant-green/10 border border-brand-primary-green/30 text-center">
            <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-brand-primary-green" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-brand-soft-white">$50M+</div>
            <div className="text-brand-smoke-gray text-xs sm:text-sm">Processed</div>
          </Card>
          <Card className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-brand-vibrant-green/20 to-brand-primary-green/10 border border-brand-vibrant-green/30 text-center">
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-brand-vibrant-green" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-brand-soft-white">&lt; 5 min</div>
            <div className="text-brand-smoke-gray text-xs sm:text-sm">Avg Processing</div>
          </Card>
          <Card className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-brand-primary-green/20 to-brand-vibrant-green/10 border border-brand-primary-green/30 text-center">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-brand-primary-green" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-brand-soft-white">100%</div>
            <div className="text-brand-smoke-gray text-xs sm:text-sm">Secure</div>
          </Card>
          <Card className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-brand-vibrant-green/20 to-brand-primary-green/10 border border-brand-vibrant-green/30 text-center">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-brand-vibrant-green" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-brand-soft-white">15+</div>
            <div className="text-brand-smoke-gray text-xs sm:text-sm">Payment Methods</div>
          </Card>
        </div>
      </div>
    </div>
  )
}
