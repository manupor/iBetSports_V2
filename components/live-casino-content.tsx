import type React from "react"

type LiveCasinoContentProps = {}

const LiveCasinoContent: React.FC<LiveCasinoContentProps> = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://lobby.gamemecanica.net/?token=dGVzdGxvYmJ5OnRlc3Q%3D&playerId=Mzk1NA%3D%3D&language=en&casinoClient=I_BET_SPORTS_LIVE"
        className="w-full h-full border-0"
        title="Live Casino Game"
        allowFullScreen
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  )
}

export default LiveCasinoContent
