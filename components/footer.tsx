import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-brand-charcoal-black-secondary text-brand-smoke-gray py-8 md:py-12 border-t border-brand-smoke-gray/20">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Link href="/" className="flex items-center h-full py-2">
            <img
              src="/images/ibet-sports-logo-v2.png"
              alt="Draft Casino Logo"
              className="h-16 w-auto object-contain" // Adjusted size for footer
            />
          </Link>
          <p className="text-sm text-center md:text-left">
            Tu destino principal para juegos de casino emocionantes y apuestas deportivas.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-brand-smoke-gray hover:text-brand-soft-white transition-colors">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-brand-smoke-gray hover:text-brand-soft-white transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-brand-smoke-gray hover:text-brand-soft-white transition-colors">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-brand-smoke-gray hover:text-brand-soft-white transition-colors">
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-brand-soft-white mb-4 text-center md:text-left">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <Link href="/casino-games" className="hover:text-brand-soft-white transition-colors">
                Juegos de Casino
              </Link>
            </li>
            <li>
              <Link href="/sports-betting" className="hover:text-brand-soft-white transition-colors">
                Apuestas Deportivas
              </Link>
            </li>
            <li>
              <Link href="/promotions" className="hover:text-brand-soft-white transition-colors">
                Promociones
              </Link>
            </li>
            <li>
              <Link href="/vip-program" className="hover:text-brand-soft-white transition-colors">
                Programa VIP
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold text-brand-soft-white mb-4 text-center md:text-left">Soporte</h3>
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <Link href="/help-center" className="hover:text-brand-soft-white transition-colors">
                Centro de Ayuda
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-brand-soft-white transition-colors">
                Contáctanos
              </Link>
            </li>
            <li>
              <Link href="/live-chat" className="hover:text-brand-soft-white transition-colors">
                Chat en Vivo
              </Link>
            </li>
            <li>
              <Link href="/responsible-gaming" className="hover:text-brand-soft-white transition-colors">
                Juego Responsable
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-bold text-brand-soft-white mb-4 text-center md:text-left">Legal</h3>
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <Link href="/terms-conditions" className="hover:text-brand-soft-white transition-colors">
                Términos y Condiciones
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-brand-soft-white transition-colors">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-brand-soft-white transition-colors">
                Política de Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 mt-8 pt-8 border-t border-brand-smoke-gray/20 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Draft Casino. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
