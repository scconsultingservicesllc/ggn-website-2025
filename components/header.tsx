"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLogoClick = () => {
    router.push("/")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleScheduleAssessment = () => {
    setIsOpen(false)
    const scheduleSection = document.getElementById("schedule-assessment")
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navigationItems = [
    { name: "Services", href: "/services" },
    { name: "Case Study", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-18 flex items-center justify-between">
        {/* Logo and Company Name */}
        <div
          className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleLogoClick}
        >
          <Image
            src="/images/ggn-logo.png"
            alt="Get Green NOI Logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <span className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl text-brand-dark">
            Get Green NOI
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className="text-brand-dark hover:text-brand-primary transition-colors font-medium text-sm xl:text-base"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Button
            className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-sm xl:text-base px-4 xl:px-6"
            onClick={handleScheduleAssessment}
          >
            Schedule Assessment
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px] md:w-[400px]">
            <div className="flex flex-col space-y-6 mt-6">
              {/* Mobile Logo */}
              <div
                className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
              >
                <Image src="/images/ggn-logo.png" alt="Get Green NOI Logo" width={32} height={32} className="w-8 h-8" />
                <span className="font-heading font-semibold text-lg text-brand-dark">Get Green NOI</span>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="text-left text-brand-dark hover:text-brand-primary transition-colors font-medium py-3 text-lg border-b border-gray-100 last:border-b-0"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              {/* Mobile CTA Button */}
              <Button
                className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold w-full py-3 text-base"
                onClick={handleScheduleAssessment}
              >
                Schedule Assessment
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
