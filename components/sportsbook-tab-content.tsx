const SportsbookContent = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[70vh] overflow-hidden bg-black">
        <img
          src="/images/hero-football-player.png"
          alt="STAKE - Jugador de fútbol americano con efectos de neón y estadio de fondo"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="relative z-20 p-8 md:p-16 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Apuesta en grande con Stake</h2>
          <p className="text-lg md:text-xl mb-8">La mejor plataforma de apuestas deportivas en línea.</p>
          <button className="bg-yellow-500 text-black py-2 px-6 rounded-full font-bold hover:bg-yellow-600 transition-colors">
            ¡Apuesta Ahora!
          </button>
        </div>
      </div>
      <div className="p-4">{/* Additional content can be added here */}</div>
    </div>
  )
}

export default SportsbookContent
