import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/ggn-logo.png" alt="Get Green NOI Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-heading font-semibold text-lg sm:text-xl">Get Green NOI</span>
            </Link>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              Commercial real estate energy solutions that boost NOI through guaranteed savings while enhancing property
              performance and tenant satisfaction.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/get-green-noi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <a
                href="mailto:info@getgreennoi.com"
                className="text-white/60 hover:text-brand-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-base sm:text-lg">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-brand-primary transition-colors text-sm sm:text-base"
                >
                  Lighting & Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-brand-primary transition-colors text-sm sm:text-base"
                >
                  EV Chargers
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-brand-primary transition-colors text-sm sm:text-base"
                >
                  Water Conservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-base sm:text-lg">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-brand-primary transition-colors text-sm sm:text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-brand-primary transition-colors text-sm sm:text-base"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-brand-primary transition-colors text-sm sm:text-base"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-white/80 hover:text-brand-primary transition-colors text-sm sm:text-base"
                >
                  Case Study
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-brand-primary transition-colors text-sm sm:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h4 className="font-heading font-semibold text-base sm:text-lg">Contact Us</h4>
            <div className="space-y-4">
              {/* Mailing Address */}
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <div className="text-white/80 text-sm sm:text-base">
                    <div className="font-medium text-white mb-1">Mailing Address:</div>
                    <div>Get Green NOI</div>
                    <div>382 NE 191st St PMB 94209</div>
                    <div>Miami, Florida 33179-3899</div>
                  </div>
                </div>
              </div>

              {/* Remittance Address */}
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <div className="text-white/80 text-sm sm:text-base">
                    <div className="font-medium text-white mb-1">Remittance Address:</div>
                    <div>Get Green NOI/Bank of Tampa</div>
                    <div>P.O. Box 20644</div>
                    <div>Tampa, FL 33622</div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary flex-shrink-0" />
                  <a
                    href="mailto:info@getgreennoi.com"
                    className="text-white/80 hover:text-brand-primary transition-colors text-sm sm:text-base break-all"
                  >
                    info@getgreennoi.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary flex-shrink-0" />
                  <a
                    href="tel:+18776047106"
                    className="text-white/80 hover:text-brand-primary transition-colors text-sm sm:text-base"
                  >
                    + 1 (877) 604-7106
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-xs sm:text-sm text-center md:text-left">
              © 2025 Get Green NOI. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link href="#" className="text-white/60 hover:text-brand-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-brand-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/60 hover:text-brand-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
