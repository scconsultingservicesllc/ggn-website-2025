"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Zap, Droplets, Sun, Car, CheckCircle, Building, Star } from 'lucide-react'
import CalendlyEmbed from "@/components/calendly-embed"

export default function CaseStudiesPage() {
  const handleScheduleAssessment = () => {
    const scheduleSection = document.getElementById("schedule-assessment")
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      })
      
      // Additional smooth scroll enhancement
      const targetPosition = scheduleSection.offsetTop - 100
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary/10 via-white to-brand-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-semibold text-4xl lg:text-5xl text-brand-dark mb-6">
              Real Results from <span className="text-brand-primary">Real Property</span>
            </h1>
            <p className="text-xl text-brand-dark/80 mb-8 leading-relaxed">
              Discover how Get Green NOI has transformed energy performance and increased property values for commercial
              real estate owners nationwide. This is just one case study.
            </p>
            <Badge className="bg-brand-primary/10 text-brand-primary px-6 py-2 text-lg">
              $12.7MM Value Added in One Project
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Case Study Header */}
            <div className="text-center mb-16">
              <Badge className="bg-brand-primary/10 text-brand-primary px-4 py-2 mb-4">Featured Case Study</Badge>
              <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-brand-dark mb-6">
                How Get Green NOI Added $12.7MM of Value To a Multifamily Community in Florida
              </h2>
              <p className="text-xl text-brand-dark/80 max-w-4xl mx-auto leading-relaxed">
                A 90's vintage garden-style Florida multifamily community's utility expenses were out of control. They
                tried every trick in the book but to no avail. Finally, they reached out to Get Green NOI.
              </p>
            </div>

            {/* Key Results */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <DollarSign className="w-12 h-12 text-brand-primary mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-brand-primary">$474,954</CardTitle>
                  <p className="text-brand-dark/70">Projected NOI</p>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-brand-secondary mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-brand-secondary">$574,694</CardTitle>
                  <p className="text-brand-dark/70">Actual NOI Realized</p>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <Building className="w-12 h-12 text-brand-secondary mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-brand-secondary">121%</CardTitle>
                  <p className="text-brand-dark/70">Realized ROI Increase</p>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <Star className="w-12 h-12 text-brand-primary mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-brand-primary">$12.7MM</CardTitle>
                  <p className="text-brand-dark/70">Property Value Increase</p>
                </CardHeader>
              </Card>
            </div>

            {/* The Challenge */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark">The Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-brand-dark/80 leading-relaxed mb-6">
                  This 90's vintage garden-style multifamily community in Florida was struggling with escalating utility
                  expenses that were significantly impacting their NOI. Despite trying various cost-cutting measures,
                  they couldn't achieve meaningful reductions in their energy and water costs.
                </p>
                <p className="text-lg text-brand-dark/80 leading-relaxed">
                  The property management team knew they needed a comprehensive solution but weren't sure where to start
                  or how to evaluate the ROI of potential improvements. That's when they contacted Get Green NOI for our
                  proprietary Green Energy Audit.
                </p>
              </CardContent>
            </Card>

            {/* The Solution */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark">The Comprehensive Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-brand-dark/80 leading-relaxed mb-8">
                  Our proprietary Green Energy Audit identified four strategic solutions that would work together to
                  maximize energy savings and create new revenue streams:
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark mb-2">LED Lighting Conversion</h4>
                        <p className="text-brand-dark/80 text-sm leading-relaxed">
                          Convert all common area and exterior lighting to high-efficiency LED systems
                        </p>
                        <div className="mt-2 space-y-1">
                          <div className="text-sm text-brand-primary font-medium">Energy Savings: $26,101</div>
                          <div className="text-sm text-brand-primary font-medium">Material Savings: $30,161</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Droplets className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark mb-2">Low-Flow Plumbing Fixtures</h4>
                        <p className="text-brand-dark/80 text-sm leading-relaxed">
                          Replace all interior plumbing fixtures with water-efficient alternatives
                        </p>
                        <div className="mt-2 space-y-1">
                          <div className="text-sm text-brand-primary font-medium">Water Bill Savings: $200,138</div>
                          <div className="text-sm text-brand-primary font-medium">Water Rebate: $32,760</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Sun className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark mb-2">Solar Infrastructure</h4>
                        <p className="text-brand-dark/80 text-sm leading-relaxed">
                          Construct solar carports in parking areas plus solar pergolas in exterior amenities
                        </p>
                        <div className="mt-2 space-y-1">
                          <div className="text-sm text-brand-primary font-medium">Premium Parking Revenue: $9,000</div>
                          <div className="text-sm text-brand-primary font-medium">Energy Savings: $14,334</div>
                          <div className="text-sm text-brand-primary font-medium">Solar Tax Credit: $88,487</div>
                          <div className="text-sm text-brand-primary font-medium">MACRS Depreciation: $62,179</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Car className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark mb-2">EV Charging Stations</h4>
                        <p className="text-brand-dark/80 text-sm leading-relaxed">
                          Install five revenue-generating Level 2 dual-port EV charging stations
                        </p>
                        <div className="mt-2 space-y-1">
                          <div className="text-sm text-brand-primary font-medium">Annual Revenue: $11,794</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Implementation */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark">Seamless Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-brand-dark/80 leading-relaxed mb-6">
                      As a turnkey provider, Get Green NOI simultaneously executed all four projects for the community
                      in less than three months. Our comprehensive project management approach ensured minimal
                      disruption to residents while maintaining the highest quality standards.
                    </p>
                    <blockquote className="border-l-4 border-brand-primary pl-6 italic text-brand-dark/80 mb-6">
                      "We always joke with our clients that the hardest part of working with us is signing the
                      DocuSign..."
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-brand-primary" />
                      <span className="font-semibold text-brand-dark">Project completed in under 2 months</span>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/Park-Valenza_Temple-Terrace.jpg"
                      alt="Aerial view of Park Valenza multifamily community in Temple Terrace, Florida - representative of the type of property where Get Green NOI implemented comprehensive energy solutions resulting in $12.7MM value increase"
                      width={500}
                      height={400}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="mb-12 bg-brand-light">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark">Exceptional Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-xl text-brand-dark mb-4">Financial Performance</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-brand-dark/80">Projected NOI Increase:</span>
                        <span className="font-bold text-brand-primary">$474,954</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-brand-dark/80">Actual NOI Increase:</span>
                        <span className="font-bold text-brand-secondary">$574,694</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-brand-dark/80">Performance vs. Projection:</span>
                        <span className="font-bold text-brand-secondary">121%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-brand-primary/10 rounded-lg">
                        <span className="text-brand-dark font-semibold">Property Value Increase:</span>
                        <span className="font-bold text-brand-primary text-xl">$12.7MM</span>
                      </div>
                      <p className="text-sm text-brand-dark/70 text-center">Based on 4.5% Cap Rate</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl text-brand-dark mb-4">Additional Benefits</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-brand-dark">Improved Resident Satisfaction</h5>
                          <p className="text-sm text-brand-dark/80">
                            Renewal rates, satisfaction surveys, and Google Reviews received a huge boost
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-brand-dark">Enhanced Leasing Appeal</h5>
                          <p className="text-sm text-brand-dark/80">
                            Prospective residents were in awe of the community's dedication to green energy
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-brand-dark">Reduced Maintenance Burden</h5>
                          <p className="text-sm text-brand-dark/80">
                            On-site maintenance team thrilled with decrease in deferred maintenance work orders
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-brand-dark">Improved Safety</h5>
                          <p className="text-sm text-brand-dark/80">
                            Community crime plummeted thanks to improved lighting throughout the property
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-brand-dark">Competitive Advantage</h5>
                          <p className="text-sm text-brand-dark/80">
                            Leasing at all-time high as the only comp in the market with EV charging stations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-brand-dark/90 italic mb-6 leading-relaxed">
                    "Get Green NOI exceeded every expectation we had. Not only did they deliver 121% of their projected
                    savings, but the additional benefits to resident satisfaction and property appeal were beyond what
                    we could have imagined. This partnership added nearly $13 million in property value."
                  </blockquote>
                  <div className="font-semibold text-brand-dark">Clint Miller</div>
                  <div className="text-brand-dark/70">Director, Asset Management</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-semibold text-3xl text-brand-dark mb-6">
              Discover how much value <span className="text-brand-primary">Get Green NOI</span> can add to your real
              estate portfolio with a comprehensive energy assessment
            </h2>
            <p className="text-xl text-brand-dark/80 mb-8 leading-relaxed"></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold"
                onClick={handleScheduleAssessment}
              >
                Get Your Property Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-transparent"
                asChild
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Embed */}
      <CalendlyEmbed />
    </div>
  )
}
