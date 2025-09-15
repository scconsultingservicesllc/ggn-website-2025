"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Zap,
  Droplets,
  TrendingUp,
  Shield,
  CheckCircle,
  DollarSign,
  Clock,
  Award,
  Target,
  BarChart3,
  Wrench,
  Users,
  Car,
} from "lucide-react"
import CalendlyEmbed from "@/components/calendly-embed"
import Image from "next/image"

export default function ServicesPage() {
  const handleScheduleAssessment = () => {
    const scheduleSection = document.getElementById("schedule-assessment")
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Services Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary/10 via-white to-brand-secondary/5 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-brand-dark mb-4 sm:mb-6">
              Comprehensive Energy Solutions That Deliver <span className="text-brand-primary">Measurable ROI</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-brand-dark/80 mb-6 sm:mb-8 leading-relaxed">
              From LED retrofits to water efficiency programs, we provide turnkey implementations that enhance property
              performance while reducing operational costs.
            </p>

            {/* Statistics Bar */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
              <Badge className="bg-brand-primary/10 text-brand-primary px-3 sm:px-4 lg:px-6 py-2 text-xs sm:text-sm lg:text-lg">
                $150M+ Saved
              </Badge>
              <Badge className="bg-brand-secondary/10 text-brand-secondary px-3 sm:px-4 py-2 text-xs sm:text-sm lg:text-base">
                1,000+ Properties Optimized
              </Badge>
              <Badge className="bg-brand-accent/10 text-brand-accent px-3 sm:px-4 py-2 text-xs sm:text-sm lg:text-base">
                100% Client Satisfaction
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="led" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 sm:mb-12 max-w-2xl mx-auto h-auto">
              <TabsTrigger value="led" className="text-xs sm:text-sm font-medium p-2 sm:p-3">
                LED & Energy
              </TabsTrigger>
              <TabsTrigger value="water" className="text-xs sm:text-sm font-medium p-2 sm:p-3">
                Water Efficiency
              </TabsTrigger>
              <TabsTrigger value="ev" className="text-xs sm:text-sm font-medium p-2 sm:p-3">
                EV Charging
              </TabsTrigger>
            </TabsList>

            {/* LED Lighting & Energy Efficiency Tab */}
            <TabsContent value="led" className="space-y-8 sm:space-y-12">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-brand-dark mb-3 sm:mb-4">
                  Cutting Edge LED Technology That Transforms Energy Expenses Into NOI
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-brand-dark/80 max-w-3xl mx-auto">
                  Our approach differs from basic LED retrofits by using custom design technology and lighting controls
                  that optimizes for both energy efficiency, aesthetic appeal, and property safety
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="text-base sm:text-lg">Immediate NOI Improvement</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                      Our LED retrofits achieve 30-50%+ reduction in energy bills without sacrificing property safety.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Wrench className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="text-base sm:text-lg">Maintenance Efficiency</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                      LED technology reduces maintenance labor costs by 80% through extended bulb life and improved
                      reliability, reducing maintenance calls and improving tenant satisfaction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Target className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="text-base sm:text-lg">Aesthetic + Safety Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                      Proper LED lighting design aesthetically improves real estate spaces while providing a feeling of
                      security, increasing tenant satisfaction and allowing for premium rent justification
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Award className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="text-base sm:text-lg">Rebate Procurement</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                      Our expertise in utility rebate programs can offset 40-70% of implementation costs in many
                      jurisdictions, ensuring maximum available incentives.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* ROI Calculator Section */}
              <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl p-6 sm:p-8 lg:p-10 border border-brand-primary/10">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-brand-dark mb-3 sm:mb-4">
                    Calculate Your Energy Savings Potential
                  </h3>
                  <p className="text-base sm:text-lg text-brand-dark/80 max-w-3xl mx-auto leading-relaxed">
                    Use our interactive ROI calculator to estimate your property's energy savings and payback period.
                    Get instant projections based on your specific property details.
                  </p>
                </div>

                {/* Calculator Container */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  {/* Energy Efficiency Calculator Embed */}
                  <div className="responsive-iframe-container">
                    <iframe
                      src="https://v0-energy-efficiency-calculator.vercel.app/"
                      frameBorder="0"
                      scrolling="auto"
                      title="Energy Efficiency Calculator"
                    ></iframe>
                  </div>
                </div>

                {/* Call to Action Below Calculator */}
                <div className="text-center mt-6 sm:mt-8">
                  <p className="text-brand-dark/70 text-sm sm:text-base mb-4">
                    Want a detailed analysis specific to your property?
                  </p>
                  <Button
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold"
                    onClick={handleScheduleAssessment}
                  >
                    Schedule Assessment
                  </Button>
                </div>
              </div>

              <style jsx>{`
                .responsive-iframe-container {
                  position: relative;
                  width: 100%;
                  max-width: 1200px;
                  margin: 0 auto;
                  aspect-ratio: 16 / 10;
                  min-height: 600px;
                }

                .responsive-iframe-container iframe {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  border: none;
                  border-radius: 8px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 768px) {
                  .responsive-iframe-container {
                    aspect-ratio: 4 / 5;
                    min-height: 700px;
                  }
                }
              `}</style>

              {/* Process Timeline */}
              {/* Process Timeline - Enhanced Vertical Design */}
              <div className="bg-brand-light rounded-2xl p-4 sm:p-6 lg:p-8">
                <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl text-brand-dark mb-8 sm:mb-12 text-center">
                  Our Systematic Implementation Process
                </h3>

                <div className="relative max-w-4xl mx-auto">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary/30 via-brand-primary/50 to-brand-primary/30 rounded-full"></div>

                  <div className="space-y-8 sm:space-y-12">
                    {[
                      {
                        phase: "Initial Assessment",
                        days: "Days 1-3",
                        icon: CheckCircle,
                        description:
                          "Comprehensive facility evaluation and energy audit to identify all optimization opportunities",
                      },
                      {
                        phase: "Custom Design",
                        days: "Days 4-7",
                        icon: Target,
                        description:
                          "Tailored solution design with detailed ROI projections and implementation planning",
                      },
                      {
                        phase: "Proposal & Approval",
                        days: "Days 8-10",
                        icon: BarChart3,
                        description:
                          "Detailed proposal presentation with financing options and project timeline approval",
                      },
                      {
                        phase: "Professional Install",
                        days: "Timeline Varies",
                        icon: Wrench,
                        description: "Expert installation with minimal disruption and guaranteed quality standards",
                      },
                      {
                        phase: "Performance Verify",
                        days: "Ongoing",
                        icon: TrendingUp,
                        description: "Continuous monitoring and optimization to ensure projected savings are achieved",
                      },
                    ].map((step, index) => (
                      <div key={index} className="relative flex items-start">
                        {/* Timeline Node */}
                        <div className="absolute left-6 w-6 h-6 bg-brand-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>

                        {/* Content Card */}
                        <div className="ml-20 w-full">
                          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-primary">
                            <div className="flex items-start gap-3 sm:gap-4">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                  <h4 className="font-heading font-semibold text-base sm:text-lg text-brand-dark">
                                    {step.phase}
                                  </h4>
                                  <span className="text-xs sm:text-sm text-brand-primary font-medium bg-brand-primary/10 px-2 py-1 rounded-full mt-1 sm:mt-0 self-start">
                                    {step.days}
                                  </span>
                                </div>
                                <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Water Efficiency Programs Tab */}
            <TabsContent value="water" className="space-y-8 sm:space-y-12">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-brand-dark mb-3 sm:mb-4">
                  Comprehensive Water Conservation Programs That Uncover Hidden Profit Opportunities
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-brand-dark/80 max-w-3xl mx-auto">
                  Water efficiency assessments typically identify 30-50%+ waste in real estate properties, representing
                  significant untapped savings potential.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="text-base sm:text-lg">Hidden Waste Discovery</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                      Advanced detection technology identifies leaks, inefficient fixtures, and usage patterns. A single
                      running toilet can waste 200 gallons per day, costing $400-600 annually.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="text-base sm:text-lg">Rebate Program Mastery</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                      Municipal and utility water efficiency rebate programs can cover 50-70% of upgrade costs. We
                      handle the entire rebate application and verification process.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="text-base sm:text-lg">Regulatory Compliance</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                      Proactive water efficiency improvements help properties stay ahead of increasing water
                      restrictions and avoid potential penalty fees while demonstrating environmental stewardship.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="text-base sm:text-lg">Predictable Savings</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                      Water efficiency improvements create permanent reductions in operating costs with detailed
                      reporting. Typically pay for themselves in 6-12 months.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Solution Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  "Toilet Retrofits",
                  "Smart Irrigation Systems",
                  "Shower Head + Faucet Aerators Retrofits",
                  "Water Heater Retrofits",
                ].map((solution, index) => (
                  <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                    <Droplets className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary mx-auto mb-2 sm:mb-3" />
                    <h4 className="font-semibold text-brand-dark text-sm sm:text-base">{solution}</h4>
                  </Card>
                ))}
              </div>

              {/* Water Efficiency ROI Calculator Section */}
              <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl p-6 sm:p-8 lg:p-10 border border-brand-primary/10">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-brand-dark mb-3 sm:mb-4">
                    Calculate Your Water Savings Potential
                  </h3>
                  <p className="text-base sm:text-lg text-brand-dark/80 max-w-3xl mx-auto leading-relaxed">
                    Use our interactive Aqua Mizer calculator to estimate your property's water conservation savings and
                    payback period. Get instant projections based on your specific property details.
                  </p>
                </div>

                {/* Calculator Container */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  {/* Aqua Mizer Calculator Embed */}
                  <div className="responsive-iframe-container">
                    <iframe
                      src="https://v0-aqua-mizer-ggn-calc-1.vercel.app/embed"
                      frameBorder="0"
                      scrolling="auto"
                      title="Aqua Mizer Calculator"
                      loading="lazy"
                      allow="clipboard-write"
                    ></iframe>
                  </div>
                </div>

                {/* Call to Action Below Calculator */}
                <div className="text-center mt-6 sm:mt-8">
                  <p className="text-brand-dark/70 text-sm sm:text-base mb-4">
                    Want a detailed water efficiency analysis specific to your property?
                  </p>
                  <Button
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold"
                    onClick={handleScheduleAssessment}
                  >
                    Schedule Assessment
                  </Button>
                </div>
              </div>

              <style jsx>{`
                .responsive-iframe-container {
                  position: relative;
                  width: 100%;
                  max-width: 1200px;
                  margin: 0 auto;
                  aspect-ratio: 16 / 10;
                  min-height: 600px;
                }

                .responsive-iframe-container iframe {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  border: none;
                  border-radius: 8px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 768px) {
                  .responsive-iframe-container {
                    aspect-ratio: 4 / 5;
                    min-height: 700px;
                  }
                }
              `}</style>

              {/* Water Efficiency Process Timeline */}
              <div className="bg-brand-light rounded-2xl p-4 sm:p-6 lg:p-8">
                <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl text-brand-dark mb-8 sm:mb-12 text-center">
                  Our Water Conservation Implementation Process
                </h3>

                <div className="relative max-w-4xl mx-auto">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary/30 via-brand-primary/50 to-brand-primary/30 rounded-full"></div>

                  <div className="space-y-8 sm:space-y-12">
                    {[
                      {
                        phase: "Water Usage Assessment",
                        days: "Days 1-2",
                        icon: Droplets,
                        description:
                          "Comprehensive water audit identifying leaks, inefficient fixtures, and usage patterns across your property",
                      },
                      {
                        phase: "Efficiency Analysis",
                        days: "Days 3-5",
                        icon: BarChart3,
                        description:
                          "Detailed analysis of water consumption data with identification of highest-impact improvement opportunities",
                      },
                      {
                        phase: "Rebate Research",
                        days: "Days 6-7",
                        icon: DollarSign,
                        description:
                          "Complete research and application for all available municipal and utility water efficiency rebates",
                      },
                      {
                        phase: "Fixture Installation",
                        days: "Timeline Varies",
                        icon: Wrench,
                        description:
                          "Professional installation of water-efficient fixtures with minimal disruption to daily operations",
                      },
                      {
                        phase: "Savings Verification",
                        days: "Ongoing",
                        icon: CheckCircle,
                        description:
                          "Monthly monitoring and reporting to verify projected water savings are being achieved",
                      },
                    ].map((step, index) => (
                      <div key={index} className="relative flex items-start">
                        {/* Timeline Node */}
                        <div className="absolute left-6 w-6 h-6 bg-brand-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>

                        {/* Content Card */}
                        <div className="ml-20 w-full">
                          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-primary">
                            <div className="flex items-start gap-3 sm:gap-4">
                              <div className="w-10 h-10 sm:w-12 sm:w-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                  <h4 className="font-heading font-semibold text-base sm:text-lg text-brand-dark">
                                    {step.phase}
                                  </h4>
                                  <span className="text-xs sm:text-sm text-brand-primary font-medium bg-brand-primary/10 px-2 py-1 rounded-full mt-1 sm:mt-0 self-start">
                                    {step.days}
                                  </span>
                                </div>
                                <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* EV Charging Solutions Tab */}
            <TabsContent value="ev" className="space-y-8 sm:space-y-12">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-brand-dark mb-3 sm:mb-4">
                  Strategic EV Infrastructure That Enhances Property Value While Generating Revenue
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-brand-dark/80 max-w-3xl mx-auto">
                  EV charging isn't experimental—it's essential infrastructure that smart property owners are
                  implementing now to stay competitive.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="text-base sm:text-lg">Revenue Generation</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                      Level 2 charging stations can generate $500-1,500 monthly revenue per station, depending on usage
                      patterns and pricing strategies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Target className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="text-base sm:text-lg">Tenant Attraction</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                      EV charging amenities increasingly influence commercial tenant decisions, particularly for office
                      properties where employee convenience drives leasing choices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="text-base sm:text-lg">Future-Proofing</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                      Properties without charging infrastructure will become less competitive over the next 5-10 years.
                      Current installation protects against future obsolescence.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="text-base sm:text-lg">Implementation Flexibility</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                      Phased installation can start small and expand based on actual usage patterns, with initial
                      installations designed to accommodate future expansion.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Installation Considerations */}
              <Card className="p-4 sm:p-6 lg:p-8 bg-brand-light">
                <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl text-brand-dark mb-4 sm:mb-6 text-center">
                  Installation Considerations We Handle
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center">
                    <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <h4 className="font-semibold text-brand-dark mb-2 text-sm sm:text-base">Electrical Capacity</h4>
                    <p className="text-brand-dark/80 text-xs sm:text-sm">
                      Assessment of existing electrical infrastructure with clear recommendations for any necessary
                      upgrades.
                    </p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <h4 className="font-semibold text-brand-dark mb-2 text-sm sm:text-base">Permitting Requirements</h4>
                    <p className="text-brand-dark/80 text-xs sm:text-sm">
                      Complete handling of all permitting and regulatory requirements for seamless installation.
                    </p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                    <h4 className="font-semibold text-brand-dark mb-2 text-sm sm:text-base">Timeline Expectations</h4>
                    <p className="text-brand-dark/80 text-xs sm:text-sm">
                      Clear project timelines with guaranteed completion dates and minimal operational disruption.
                    </p>
                  </div>
                </div>
              </Card>

              {/* EV Charging ROI Calculator Section */}
              <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl p-6 sm:p-8 lg:p-10 border border-brand-primary/10">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-brand-dark mb-3 sm:mb-4">
                    Calculate Your EV Charging ROI Potential
                  </h3>
                  <p className="text-base sm:text-lg text-brand-dark/80 max-w-3xl mx-auto leading-relaxed">
                    Use our interactive ROI calculator to estimate your property's EV charging revenue potential and
                    payback period. Get instant projections based on your specific property details and usage patterns.
                  </p>
                </div>

                {/* Calculator Container */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden max-w-5xl mx-auto">
                  {/* EV Charger ROI Calculator Embed */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      minWidth: "320px",
                      height: "0",
                      paddingBottom: "80%",
                      overflow: "hidden",
                      maxWidth: "1400px",
                      margin: "0 auto",
                    }}
                  >
                    <iframe
                      src="https://v0-ev-charger-roi-calculator.vercel.app/"
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                      title="EV Charger ROI Calculator"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Call to Action Below Calculator */}
                <div className="text-center mt-6 sm:mt-8">
                  <p className="text-brand-dark/70 text-sm sm:text-base mb-4">
                    Want a detailed EV charging analysis specific to your property?
                  </p>
                  <Button
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold"
                    onClick={handleScheduleAssessment}
                  >
                    Schedule Assessment
                  </Button>
                </div>
              </div>

              {/* EV Charging Process Timeline */}
              <div className="bg-brand-light rounded-2xl p-4 sm:p-6 lg:p-8">
                <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl text-brand-dark mb-8 sm:mb-12 text-center">
                  Our EV Charging Implementation Process
                </h3>

                <div className="relative max-w-4xl mx-auto">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary/30 via-brand-primary/50 to-brand-primary/30 rounded-full"></div>

                  <div className="space-y-8 sm:space-y-12">
                    {[
                      {
                        phase: "Site Assessment",
                        days: "Days 1-3",
                        icon: Target,
                        description:
                          "Comprehensive evaluation of electrical capacity, optimal placement locations, and usage projections",
                      },
                      {
                        phase: "Infrastructure Planning",
                        days: "Days 4-7",
                        icon: Zap,
                        description:
                          "Detailed electrical infrastructure assessment with upgrade recommendations and cost analysis",
                      },
                      {
                        phase: "Permitting & Approvals",
                        days: "Days 8-14",
                        icon: Shield,
                        description:
                          "Complete handling of all permits, utility approvals, and regulatory compliance requirements",
                      },
                      {
                        phase: "Professional Installation",
                        days: "Timeline Varies",
                        icon: Wrench,
                        description:
                          "Expert installation of charging stations with minimal disruption and guaranteed quality standards",
                      },
                      {
                        phase: "Revenue Optimization",
                        days: "Ongoing",
                        icon: TrendingUp,
                        description:
                          "Performance monitoring, usage analytics, and pricing optimization to maximize revenue generation",
                      },
                    ].map((step, index) => (
                      <div key={index} className="relative flex items-start">
                        {/* Timeline Node */}
                        <div className="absolute left-6 w-6 h-6 bg-brand-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>

                        {/* Content Card */}
                        <div className="ml-20 w-full">
                          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-primary">
                            <div className="flex items-start gap-3 sm:gap-4">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                  <h4 className="font-heading font-semibold text-base sm:text-lg text-brand-dark">
                                    {step.phase}
                                  </h4>
                                  <span className="text-xs sm:text-sm text-brand-primary font-medium bg-brand-primary/10 px-2 py-1 rounded-full mt-1 sm:mt-0 self-start">
                                    {step.days}
                                  </span>
                                </div>
                                <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-brand-dark mb-3 sm:mb-4">
              Your Implementation Roadmap
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brand-dark/80 max-w-3xl mx-auto">
              Your step-by-step journey from initial consultation to measurable energy savings and enhanced NOI
              performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">Phase 1: Comprehensive Assessment</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                  Detailed facility evaluation, current usage analysis, and custom ROI modeling that goes beyond basic
                  energy audits to identify optimization opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">Phase 2: Custom Solution Design</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                  Each implementation plan tailored specifically to your property's characteristics, usage patterns, and
                  budget parameters with conservative and optimistic scenarios.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">Phase 3: Professional Installation</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                  Coordinated installations that minimize tenant disruption while maintaining high-quality standards
                  with clear communication and adherence to promised timelines.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">Phase 4: Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
                  Performance monitoring, savings verification, and ongoing optimization recommendations to ensure
                  projected results and identify additional improvement opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-brand-dark mb-3 sm:mb-4">
              Industries We Serve
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brand-dark/80 max-w-3xl mx-auto mb-6 sm:mb-8">
              We understand the unique needs of CRE owners and managers and maximize value on every project to increase
              the bottom line.
            </p>
          </div>

          {/* Industry Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Multifamily Buildings */}
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-brand-dark">Multifamily Communities</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed mb-4">
                  Multifamily buildings present a large opportunity for energy savings. According to a CNT Energy and
                  ACEEE report, multifamily housing buildings can reduce their electricity usage by over 15% by
                  implementing cost-effective and comprehensive retrofits.
                </p>
              </CardContent>
            </Card>

            {/* Parking Garages */}
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Car className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-brand-dark">Parking Garages</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed mb-4">
                  Dark parking garages can create dangerous situations for drivers and pedestrians alike. A properly lit
                  parking garage can help mitigate those risks by providing a consistent, brightly lit environment.
                </p>
                <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed mb-4">
                  Utilizing EV Charging Stations to drive parking traffic + provide another stream of income.
                </p>
              </CardContent>
            </Card>

            {/* Hotels & Resorts */}
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-brand-dark">Hotels & Resorts</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed mb-4">
                  Hotels present a large opportunity for energy savings. According to an ACEEE report, hotels & resorts
                  can reduce their electricity usage by over 46% by implementing cost-effective and comprehensive
                  retrofits, and lighting control systems.
                </p>
                <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed mb-4">
                  These assets also present one of the largest opportunities for water conservation projects.
                </p>
              </CardContent>
            </Card>

            {/* Industrial */}
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:w-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-brand-dark">Industrial</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed mb-4">
                  Industrial and storage warehouses cover millions of square feet of opportunity where the on-site and
                  logistical teams rely on safe, consistent dependable lighting for smooth operations. LED lighting
                  provides consistent visibility and contributes to employee safety, minimal risk, and maintenance free
                  operation.
                </p>
              </CardContent>
            </Card>

            {/* Single Family Rental Communities */}
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-brand-dark">Single Family Rental Communities</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed mb-4">
                  In a detailed 2017 study from Iowa State University, "Energy Efficiency in U.S. Residential Rental
                  Housing: Adoption Rates and Impact on Rent," researchers concluded that energy efficiency components
                  in rental units were not widespread. Yet, when energy-efficient solutions were implemented, rents
                  increased in a range from 6% to 14.1%.
                </p>
              </CardContent>
            </Card>

            {/* Retail */}
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-brand-dark">Retail</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed mb-4">
                  Between energy reduction solutions, and utilizing EV Charging Stations to drive retail traffic to
                  tenants, Retail presents one of the best opportunities for green energy projects in all of commercial
                  real estate.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Partners Section */}
          <div className="text-center">
            <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl text-brand-dark mb-4 sm:mb-6">
              Our Partners
            </h3>
            <p className="text-brand-dark/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
              We work with some of the largest institutional commercial real estate owners and operators in the nation
            </p>

            {/* Partner Logos with Simple Green Background */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-brand-primary to-brand-secondary p-6 sm:p-8 min-h-[140px] flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 to-brand-secondary/90 group-hover:from-brand-primary group-hover:to-brand-secondary transition-all duration-300"></div>
                <Image
                  src="/images/tgm-logo-for-ggn.png"
                  alt="TGM logo"
                  width={120}
                  height={80}
                  className="relative z-10 w-full h-auto max-w-[80px] sm:max-w-[100px] object-contain filter brightness-0 invert"
                />
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-brand-primary to-brand-secondary p-6 sm:p-8 min-h-[140px] flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 to-brand-secondary/90 group-hover:from-brand-primary group-hover:to-brand-secondary transition-all duration-300"></div>
                <Image
                  src="/images/lincoln-logo-for-ggn.png"
                  alt="Lincoln Property Company logo"
                  width={160}
                  height={80}
                  className="relative z-10 w-full h-auto max-w-[120px] sm:max-w-[140px] object-contain filter brightness-0 invert"
                />
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-brand-primary to-brand-secondary p-6 sm:p-8 min-h-[140px] flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 to-brand-secondary/90 group-hover:from-brand-primary group-hover:to-brand-secondary transition-all duration-300"></div>
                <Image
                  src="/images/camden-logo-for-ggn.png"
                  alt="Camden logo"
                  width={120}
                  height={80}
                  className="relative z-10 w-full h-auto max-w-[80px] sm:max-w-[100px] object-contain filter brightness-0 invert"
                />
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-brand-primary to-brand-secondary p-6 sm:p-8 min-h-[140px] flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 to-brand-secondary/90 group-hover:from-brand-primary group-hover:to-brand-secondary transition-all duration-300"></div>
                <Image
                  src="/images/zrs-logo-for-ggn.png"
                  alt="ZRS logo"
                  width={120}
                  height={80}
                  className="relative z-10 w-full h-auto max-w-[80px] sm:max-w-[100px] object-contain filter brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-brand-dark mb-4 sm:mb-6">
              Ready to Optimize Your Property's Energy Performance?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brand-dark/80 mb-6 sm:mb-8 leading-relaxed">
              Schedule your complimentary assessment and discover exactly how much you could be saving while improving
              your NOI.
            </p>
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

      {/* Calendly Embed */}
      <CalendlyEmbed />
    </div>
  )
}
