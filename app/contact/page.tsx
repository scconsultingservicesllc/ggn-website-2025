"use client"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import CalendlyEmbed from "@/components/calendly-embed"

export default function ContactPage() {
  const handleScheduleAssessment = () => {
    const scheduleSection = document.getElementById("schedule-assessment")
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Contact Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary/10 via-white to-brand-secondary/5 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-brand-dark mb-4 sm:mb-6">
              Ready to Transform Your Property's <span className="text-brand-primary">Energy Performance?</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-dark/80 mb-6 sm:mb-8 leading-relaxed">
              Schedule your complimentary assessment and discover exactly how much you could be saving while improving
              your NOI.
            </p>

            {/* Reassuring Elements */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
              <Badge className="bg-brand-primary/10 text-brand-primary px-3 sm:px-4 py-2 text-xs sm:text-sm lg:text-base">
                No Obligation Consultation
              </Badge>
              <Badge className="bg-brand-secondary/10 text-brand-secondary px-3 sm:px-4 py-2 text-xs sm:text-sm lg:text-base">
                Custom Analysis for Your Property
              </Badge>
              <Badge className="bg-brand-primary/20 text-brand-primary px-3 sm:px-4 py-2 text-xs sm:text-sm lg:text-base">
                Speak Directly with Experts
              </Badge>
            </div>

            {/* Key Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-brand-dark/80 max-w-5xl mx-auto mb-8">
              <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/50 rounded-lg">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                <span className="font-medium text-xs sm:text-sm">Phone</span>
                <a
                  href="tel:+18776047106"
                  className="text-brand-primary hover:text-brand-secondary transition-colors text-xs sm:text-sm"
                >
                  + 1 (877) 604-7106
                </a>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/50 rounded-lg">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                <span className="font-medium text-xs sm:text-sm">Email</span>
                <a
                  href="mailto:info@getgreennoi.com"
                  className="text-brand-primary hover:text-brand-secondary transition-colors text-xs sm:text-sm break-all"
                >
                  info@getgreennoi.com
                </a>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/50 rounded-lg">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                <span className="font-medium text-xs sm:text-sm">Mailing Address</span>
                <div className="text-center text-xs sm:text-sm">
                  <div>382 NE 191st St PMB 94209</div>
                  <div>Miami, FL 33179-3899</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/50 rounded-lg">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                <span className="font-medium text-xs sm:text-sm">Response Time</span>
                <span className="text-xs sm:text-sm">Within 4 business hours</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              onClick={handleScheduleAssessment}
            >
              Schedule Your Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-brand-dark mb-4">
              Have Specific Questions?
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 max-w-3xl mx-auto">
              Send us your questions and we'll get back to you within 4 business hours.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-md border">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@company.com" />
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your company name" />
              </div>

              <div>
                <Label htmlFor="propertyType">Property Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="multifamily">Multifamily</SelectItem>
                    <SelectItem value="office">Office</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="hotel">Hotel/Hospitality</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Your Questions</Label>
                <Textarea
                  id="message"
                  placeholder="What would you like to know about our energy efficiency solutions?"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold"
              >
                Send Questions
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Calendly Embed */}
      <CalendlyEmbed />

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-brand-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 max-w-3xl mx-auto">
              Get answers to common questions about our energy efficiency solutions and process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark hover:text-brand-primary">
                  How much can I expect to save on my energy bills?
                </AccordionTrigger>
                <AccordionContent className="text-brand-dark/80 leading-relaxed">
                  Savings vary by property type and current efficiency levels, but our clients typically see 30-50%
                  reduction in energy costs through LED lighting upgrades, and 30-50% reduction in water costs through
                  our water efficiency programs. We provide detailed ROI projections specific to your property during
                  our assessment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark hover:text-brand-primary">
                  What is the typical payback period for energy efficiency improvements?
                </AccordionTrigger>
                <AccordionContent className="text-brand-dark/80 leading-relaxed">
                  Most of our LED lighting projects pay for themselves within 12-18 months, while water efficiency
                  improvements typically have a 6-12 month payback period. EV charging stations can generate positive
                  cash flow immediately while adding property value. We factor in all available rebates and incentives
                  to minimize upfront costs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark hover:text-brand-primary">
                  Do you handle all permits and rebate applications?
                </AccordionTrigger>
                <AccordionContent className="text-brand-dark/80 leading-relaxed">
                  Yes, we manage the entire process including permits, utility rebate applications, and regulatory
                  compliance. Our team has extensive experience with rebate programs across different jurisdictions and
                  ensures you receive maximum available incentives. This turnkey approach means minimal administrative
                  burden for your team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark hover:text-brand-primary">
                  How long does a typical installation take?
                </AccordionTrigger>
                <AccordionContent className="text-brand-dark/80 leading-relaxed">
                  Installation timelines depend on project scope and property size. LED lighting retrofits typically
                  take 1-3 weeks, water efficiency upgrades can be completed in 1-2 weeks, and EV charging installations
                  usually take 1-2 weeks. We coordinate all work to minimize tenant disruption and can often work during
                  off-hours or weekends if needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark hover:text-brand-primary">
                  What types of properties do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-brand-dark/80 leading-relaxed">
                  We specialize in commercial real estate including multifamily communities, office buildings, retail
                  centers, industrial facilities, hotels, and single-family rental portfolios. Our solutions are
                  scalable from individual properties to large portfolios, and we have experience with both
                  owner-occupied and tenant-occupied spaces.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark hover:text-brand-primary">
                  Do you provide ongoing maintenance and support?
                </AccordionTrigger>
                <AccordionContent className="text-brand-dark/80 leading-relaxed">
                  Yes, we offer comprehensive maintenance programs and ongoing support. LED lighting systems require
                  minimal maintenance but we provide warranties and replacement services. For EV charging stations, we
                  offer maintenance contracts and 24/7 support. We also provide performance monitoring to ensure you're
                  achieving projected savings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark hover:text-brand-primary">
                  How do you ensure minimal disruption to tenants during installation?
                </AccordionTrigger>
                <AccordionContent className="text-brand-dark/80 leading-relaxed">
                  We develop detailed installation plans that prioritize tenant comfort and business continuity. This
                  includes advance communication, flexible scheduling, working during off-hours when possible, and
                  completing work in phases to maintain essential services. Our experienced installation teams are
                  trained to work efficiently in occupied buildings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark hover:text-brand-primary">
                  What financing options are available?
                </AccordionTrigger>
                <AccordionContent className="text-brand-dark/80 leading-relaxed">
                  We offer various financing solutions including traditional purchase, lease options, and power purchase
                  agreements (PPAs) for solar installations. Many utility rebate programs provide significant upfront
                  cost reductions. We work with you to structure financing that aligns with your cash flow preferences
                  and maximizes tax benefits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark hover:text-brand-primary">
                  How do you measure and verify energy savings?
                </AccordionTrigger>
                <AccordionContent className="text-brand-dark/80 leading-relaxed">
                  We use industry-standard measurement and verification protocols, comparing pre and post-installation
                  utility bills and conducting regular performance monitoring. You receive detailed reports showing
                  actual savings versus projections, and we guarantee our performance estimates. If savings don't meet
                  projections, we work to identify and resolve any issues.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark hover:text-brand-primary">
                  Can you work with properties that have existing energy efficiency measures?
                </AccordionTrigger>
                <AccordionContent className="text-brand-dark/80 leading-relaxed">
                  Absolutely. Our assessment process identifies additional optimization opportunities even in properties
                  with some existing efficiency measures. We can upgrade older LED systems to newer technology, add
                  smart controls to existing lighting, optimize water systems, or add EV charging to complement existing
                  sustainability initiatives.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
