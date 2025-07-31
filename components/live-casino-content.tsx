import type React from "react"

type LiveCasinoContentProps = {}

const LiveCasinoContent: React.FC<LiveCasinoContentProps> = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=en&cur=USD&gameSymbol=vs25live1&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net"
        className="w-full h-full border-0"
        title="Live Casino Game"
        allowFullScreen
      />
    </div>
  )
}

export default LiveCasinoContent
