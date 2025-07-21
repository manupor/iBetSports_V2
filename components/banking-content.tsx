import type React from "react"

interface BankingContentProps {
  title: string
  description: string
}

const BankingContent: React.FC<BankingContentProps> = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default BankingContent
