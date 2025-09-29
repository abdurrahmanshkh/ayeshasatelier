import { Heart, Instagram, Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
                <Image
                  src="/images/logo.jpg"
                  alt="Ayesha's Atelier Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Ayesha's Atelier</h3>
                <p className="text-sm opacity-90">Handcrafted with Love</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4 max-w-md">
              Creating beautiful, handmade artwork that brings joy and meaning to your life. From crochet to sketches,
              every piece is crafted with love and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/ayeshas_atelier"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:ateliar.ayesha@gmail.com" className="hover:opacity-80 transition-opacity">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+918097684385" className="hover:opacity-80 transition-opacity">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="opacity-90 hover:opacity-100 transition-opacity">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Custom Crochet</li>
              <li className="opacity-90">Portrait Sketching</li>
              <li className="opacity-90">Custom Paintings</li>
              <li className="opacity-90">Embroidery Work</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90 flex items-center justify-center">
            © {currentYear} Ayesha's Atelier. Made with <Heart className="w-4 h-4 mx-1 fill-current" />
            for art lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  )
}
