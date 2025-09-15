"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    Calendly: any
  }
}

export default function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/getgreennoi/call-with-get-green-noi",
          parentElement: document.getElementById("calendly-inline-widget"),
          prefill: {},
          utm: {},
          // Disable cookies banner
          hideGdprBanner: true,
          hideCookieBanner: true,
        })
      }
    }

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="schedule-assessment" className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-brand-dark mb-3 sm:mb-4">
            Schedule Your Assessment
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/80 max-w-2xl mx-auto">
            Book a 15-minute consultation to discuss your property's energy efficiency potential and discover how much
            you could be saving.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            id="calendly-inline-widget"
            className="min-h-[800px] bg-white rounded-lg shadow-lg"
            style={{ minHeight: "800px", width: "100%", height: "800px" }}
          />
        </div>
      </div>
    </section>
  )
}
