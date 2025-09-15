"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Droplets, Car, CheckCircle, TrendingUp, Shield, Users, Award } from "lucide-react"
import CalendlyEmbed from "@/components/calendly-embed"

export default function HomePage() {
  const handleScheduleAssessment = () => {
    const scheduleSection = document.getElementById("schedule-assessment")
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const trustedPartners = [
    {
      src: "/images/rmr-logo.png",
      alt: "The RMR Group logo",
    },
    {
      src: "/images/bridgeig-logo-new.png",
      alt: "Bridge Investment Group logo",
    },
    {
      src: "/images/marriott-logo.webp",
      alt: "Marriott logo",
    },
    {
      src: "/images/greystar-logo.png",
      alt: "Greystar logo",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Fully Responsive */}
      <section className="relative bg-gradient-to-br from-brand-primary/10 via-white to-brand-secondary/5 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 2xl:py-40">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
            <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in-up order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h1 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-brand-dark leading-tight">
                  Transform Utility Expenses Into <span className="text-brand-primary">Net Operating Income</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-brand-dark/80 leading-relaxed max-w-2xl">
                  Real estate energy efficiency solutions that boost NOI through guaranteed savings while enhancing
                  property performance and tenant satisfaction.
                </p>
              </div>

              {/* Credibility Indicators - Responsive */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 py-3 sm:py-4 md:py-6">
                <div className="text-center">
                  <div className="font-heading font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-brand-primary">
                    1,000+
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-brand-dark/70">Properties Served</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-brand-primary">
                    $150M+
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-brand-dark/70">Saved</div>
                </div>
              </div>

              {/* Dual CTA - Responsive */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 h-auto"
                  onClick={handleScheduleAssessment}
                >
                  Schedule Assessment
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-transparent text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 h-auto"
                  asChild
                >
                  <Link href="/services">Learn About Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-in-right order-1 lg:order-2">
              <Image
                src="/images/environmental-sustainability.png"
                alt="Environmental sustainability concept showing green energy solutions for commercial real estate"
                width={600}
                height={400}
                className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:max-w-none"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust and Credibility Section - Fully Responsive */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-brand-light">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-heading font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-brand-dark mb-2 sm:mb-3 md:mb-4">
              Trusted by Leading Commercial Real Estate Companies
            </h2>
          </div>

          {/* Client Logos Grid - Perfect Responsive Alignment */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12 lg:mb-16 max-w-6xl mx-auto">
            {trustedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 mx-auto"
                style={{
                  width: "100%",
                  maxWidth: "280px",
                  height: "140px",
                  minHeight: "120px",
                }}
              >
                <div className="w-full h-full p-3 sm:p-4 flex items-center justify-center">
                  <Image
                    src={partner.src || "/placeholder.svg"}
                    alt={partner.alt}
                    width={200}
                    height={100}
                    className="w-full h-full object-contain max-w-[80%] max-h-[80%]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Featured Testimonial - Responsive */}
          <Card className="max-w-5xl mx-auto hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-brand-primary" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-dark/90 italic mb-3 sm:mb-4 md:mb-5 leading-relaxed">
                    "Get Green NOI has been a reliable and valued partner over the years. We expect a lot from our
                    service providers, and they consistently deliver—on time, with excellent quality, and strong
                    communication. Their consistency across our portfolio nationwide has improved resident satisfaction
                    and our bottom line. Working with them continues to be a seamless and rewarding experience that we
                    are excited to continue."
                  </blockquote>
                  <div className="font-semibold text-brand-dark text-sm sm:text-base md:text-lg">Crystalynn Clark</div>
                  <div className="text-brand-dark/70 text-xs sm:text-sm md:text-base">Director, Construction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Preview Section - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="font-heading font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-brand-dark mb-3 sm:mb-4 md:mb-6">
              Three Core Solutions That Drive Immediate ROI
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-dark/80 max-w-4xl mx-auto leading-relaxed px-4">
              Our comprehensive approach addresses the impactful areas of real estate energy consumption with
              measurable, guaranteed results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* LED Lighting & Energy Efficiency */}
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <CardHeader className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-brand-primary" />
                </div>
                <CardTitle className="font-heading text-base sm:text-lg md:text-xl text-brand-dark">
                  Energy Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 pt-0 flex flex-col justify-between flex-1">
                <p className="text-brand-dark/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-1">
                  Proprietary design technology creates lighting solutions that enhance aesthetics and operational
                  efficiency while delivering immediate NOI impact and maintenance cost reduction.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-transparent text-sm sm:text-base"
                  asChild
                >
                  <Link href="/services">Explore Lighting Solutions</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Water Efficiency Programs */}
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <CardHeader className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <Droplets className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:w-12 text-brand-primary" />
                </div>
                <CardTitle className="font-heading text-base sm:text-lg md:text-xl text-brand-dark">
                  Water Conservation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 pt-0 flex flex-col justify-between flex-1">
                <p className="text-brand-dark/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-1">
                  Our patented water efficiency solutions reduce real estate water consumption by 30-50%+. We navigate
                  complex rebate programs to offset upgrade investments.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-transparent text-sm sm:text-base"
                  asChild
                >
                  <Link href="/services">Discover Water Savings</Link>
                </Button>
              </CardContent>
            </Card>

            {/* EV Charging Solutions */}
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full md:col-span-2 lg:col-span-1">
              <CardHeader className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <Car className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:w-12 text-brand-primary" />
                </div>
                <CardTitle className="font-heading text-base sm:text-lg md:text-xl text-brand-dark">
                  EV Charging Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 pt-0 flex flex-col justify-between flex-1">
                <p className="text-brand-dark/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-1">
                  Turnkey EV charging installations improve tenant satisfaction while creating potential revenue
                  streams. Complete support from site assessment to ongoing maintenance.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-transparent text-sm sm:text-base"
                  asChild
                >
                  <Link href="/services">Plan EV Infrastructure</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Approach Section - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-brand-light">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="font-heading font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-brand-dark mb-3 sm:mb-4 md:mb-6">
              Your Strategic Energy Partner, Not Just Another Vendor
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-dark/80 max-w-4xl mx-auto leading-relaxed px-4">
              We work as an extension of your team, providing ongoing partnership that ensures continued optimization
              and maximum ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Comprehensive Assessment */}
            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <CardHeader className="p-4 sm:p-6 md:p-8">
                <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-brand-primary" />
                </div>
                <CardTitle className="font-heading text-sm sm:text-base md:text-lg text-brand-dark">
                  Comprehensive Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 pt-0">
                <p className="text-brand-dark/80 leading-relaxed text-xs sm:text-sm md:text-base">
                  Proprietary evaluation technology identifies opportunities that other providers often miss.
                </p>
              </CardContent>
            </Card>

            {/* Custom Solution Design */}
            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <CardHeader className="p-4 sm:p-6 md:p-8">
                <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-brand-primary" />
                </div>
                <CardTitle className="font-heading text-sm sm:text-base md:text-lg text-brand-dark">
                  Custom Solution Design
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 pt-0">
                <p className="text-brand-dark/80 leading-relaxed text-xs sm:text-sm md:text-base">
                  Each implementation is tailored to your specific facility and budget requirements.
                </p>
              </CardContent>
            </Card>

            {/* Professional Installation */}
            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <CardHeader className="p-4 sm:p-6 md:p-8">
                <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-brand-primary" />
                </div>
                <CardTitle className="font-heading text-sm sm:text-base md:text-lg text-brand-dark">
                  Professional Installation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 pt-0">
                <p className="text-brand-dark/80 leading-relaxed text-xs sm:text-sm md:text-base">
                  Guaranteed timelines with minimal operational disruption to your daily operations.
                </p>
              </CardContent>
            </Card>

            {/* Ongoing Partnership */}
            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full sm:col-span-2 lg:col-span-1">
              <CardHeader className="p-4 sm:p-6 md:p-8">
                <div className="mx-auto w-10 h-10 sm:w-12 sm:w-12 md:w-16 md:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-brand-primary" />
                </div>
                <CardTitle className="font-heading text-sm sm:text-base md:text-lg text-brand-dark">
                  Ongoing Partnership
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 pt-0">
                <p className="text-brand-dark/80 leading-relaxed text-xs sm:text-sm md:text-base">
                  Performance monitoring and continued optimization support for maximum long-term value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center max-w-5xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-brand-dark mb-4 sm:mb-6 md:mb-8">
              Ready to Transform Your Property's Energy Performance?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-dark/80 mb-6 sm:mb-8 md:mb-10 leading-relaxed px-4">
              Schedule your assessment and discover how much you could be saving on energy costs while improving your{" "}
              <span className="text-brand-primary font-semibold">NOI</span>.
            </p>
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 h-auto"
              onClick={handleScheduleAssessment}
            >
              Get Your Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Calendly Embed */}
      <CalendlyEmbed />
    </div>
  )
}
