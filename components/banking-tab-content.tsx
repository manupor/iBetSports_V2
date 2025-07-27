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
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/hero1.png"
          alt="Sports Banking Hero"
          fill
          className="object-contain object-right"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-start pl-12 lg:pl-24">
          <div className="text-left space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-brand-soft-white">BANKING</h1>
            <p className="text-xl md:text-2xl text-brand-smoke-gray">Secure deposits and withdrawals</p>
            <Button className="bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold px-8 py-3 text-lg">
              Make Deposit
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8">
        {/* Banking Tabs */}
        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-brand-charcoal-black-secondary">
              <TabsTrigger
                value="deposit"
                className="data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black"
              >
                Deposit
              </TabsTrigger>
              <TabsTrigger
                value="withdraw"
                className="data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black"
              >
                Withdraw
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className="data-[state=active]:bg-brand-primary-green data-[state=active]:text-brand-charcoal-black"
              >
                Transaction History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="deposit" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Payment Methods */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">Choose Payment Method</h2>
                  <div className="space-y-6">
                    {paymentMethods.map((category, index) => (
                      <Card
                        key={index}
                        className="p-6 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.methods.map((method, methodIndex) => (
                            <Card
                              key={methodIndex}
                              className="p-4 bg-brand-charcoal-black-tertiary/30 border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300 cursor-pointer"
                            >
                              <div className="flex justify-between items-start mb-2 text-white">
                                <h4 className="font-semibold text-white">{method.name}</h4>
                                <Badge
                                  className={
                                    method.fee === "Free"
                                      ? "bg-green-500/20 text-green-400"
                                      : "bg-yellow-500/20 text-yellow-400"
                                  }
                                >
                                  {method.fee}
                                </Badge>
                              </div>
                              <div className="space-y-1 text-sm text-brand-smoke-gray">
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
                <div>
                  <Card className="p-6 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30">
                    <h3 className="text-xl font-bold mb-4 text-white">Deposit Funds</h3>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white" htmlFor="amount">
                          Amount
                        </Label>
                        <Input
                          id="amount"
                          placeholder="Enter amount"
                          className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/50 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-white" htmlFor="method">
                          Payment Method
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/50 text-white">
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
                        <Label className="text-white" htmlFor="bonus">
                          Bonus Code (Optional)
                        </Label>
                        <Input
                          id="bonus"
                          placeholder="Enter bonus code"
                          className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/50"
                        />
                      </div>
                      <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold">
                        Deposit Now
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="withdraw" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Withdrawal Methods */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">Withdrawal Methods</h2>
                  <div className="space-y-6">
                    {paymentMethods.map((category, index) => (
                      <Card
                        key={index}
                        className="p-6 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30"
                      >
                        <div className="flex items-center mb-4">
                          <Image
                            src={category.icon || "/placeholder.svg"}
                            alt={category.category}
                            width={60}
                            height={40}
                            className="mr-4"
                          />
                          <h3 className="text-xl font-bold">{category.category}</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.methods.map((method, methodIndex) => (
                            <Card
                              key={methodIndex}
                              className="p-4 bg-brand-charcoal-black-tertiary/30 border border-brand-smoke-gray/20 hover:border-brand-primary-green/50 transition-all duration-300 cursor-pointer"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold">{method.name}</h4>
                                <Badge
                                  className={
                                    method.fee === "Free"
                                      ? "bg-green-500/20 text-green-400"
                                      : "bg-yellow-500/20 text-yellow-400"
                                  }
                                >
                                  {method.fee}
                                </Badge>
                              </div>
                              <div className="space-y-1 text-sm text-brand-smoke-gray">
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
                <div>
                  <Card className="p-6 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30">
                    <h3 className="text-xl font-bold mb-4">Withdraw Funds</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="withdraw-amount">Amount</Label>
                        <Input
                          id="withdraw-amount"
                          placeholder="Enter amount"
                          className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="withdraw-method">Withdrawal Method</Label>
                        <Select>
                          <SelectTrigger className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/50">
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
                        <Label htmlFor="wallet-address">Wallet Address / Account</Label>
                        <Input
                          id="wallet-address"
                          placeholder="Enter wallet address or account"
                          className="bg-brand-charcoal-black-tertiary border-brand-smoke-gray/50"
                        />
                      </div>
                      <Button className="w-full bg-brand-primary-green hover:bg-brand-primary-green-dark text-brand-charcoal-black font-bold">
                        Request Withdrawal
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <Card className="p-6 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30">
                <h2 className="text-2xl font-bold mb-6">Transaction History</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-brand-smoke-gray/30">
                        <th className="text-left py-3 px-4 text-brand-smoke-gray">Transaction ID</th>
                        <th className="text-left py-3 px-4 text-brand-smoke-gray">Type</th>
                        <th className="text-left py-3 px-4 text-brand-smoke-gray">Method</th>
                        <th className="text-left py-3 px-4 text-brand-smoke-gray">Amount</th>
                        <th className="text-left py-3 px-4 text-brand-smoke-gray">Fee</th>
                        <th className="text-left py-3 px-4 text-brand-smoke-gray">Status</th>
                        <th className="text-left py-3 px-4 text-brand-smoke-gray">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b border-brand-smoke-gray/20">
                          <td className="py-3 px-4 text-brand-soft-white font-mono text-sm">{transaction.id}</td>
                          <td className="py-3 px-4">
                            <Badge
                              className={
                                transaction.type === "Deposit"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-blue-500/20 text-blue-400"
                              }
                            >
                              {transaction.type}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-brand-soft-white">{transaction.method}</td>
                          <td className="py-3 px-4 text-brand-soft-white font-semibold">{transaction.amount}</td>
                          <td className="py-3 px-4 text-brand-smoke-gray">{transaction.fee}</td>
                          <td className="py-3 px-4">
                            <Badge className={`${getStatusColor(transaction.status)} flex items-center gap-1`}>
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
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Banking Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-brand-charcoal-black-secondary border border-brand-smoke-gray/30 hover:border-brand-primary-green/50 transition-all duration-300 text-center"
              >
                <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color}`} />
                <h3 className="font-bold text-lg mb-2 text-white">{feature.title}</h3>
                <p className="text-brand-smoke-gray">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-to-br from-brand-primary-green/20 to-brand-vibrant-green/10 border border-brand-primary-green/30 text-center">
            <DollarSign className="w-8 h-8 mx-auto mb-2 text-brand-primary-green" />
            <div className="text-2xl font-bold text-brand-soft-white">$50M+</div>
            <div className="text-brand-smoke-gray">Processed</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-brand-vibrant-green/20 to-brand-primary-green/10 border border-brand-vibrant-green/30 text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-brand-vibrant-green" />
            <div className="text-2xl font-bold text-brand-soft-white">&lt; 5 min</div>
            <div className="text-brand-smoke-gray">Avg Processing</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-brand-primary-green/20 to-brand-vibrant-green/10 border border-brand-primary-green/30 text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-brand-primary-green" />
            <div className="text-2xl font-bold text-brand-soft-white">100%</div>
            <div className="text-brand-smoke-gray">Secure</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-brand-vibrant-green/20 to-brand-primary-green/10 border border-brand-vibrant-green/30 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-brand-vibrant-green" />
            <div className="text-2xl font-bold text-brand-soft-white">15+</div>
            <div className="text-brand-smoke-gray">Payment Methods</div>
          </Card>
        </div>
      </div>
    </div>
  )
}
