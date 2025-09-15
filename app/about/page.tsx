"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, TrendingUp, Shield, Lightbulb, HandHeart } from "lucide-react"
import { Clock, Star } from "lucide-react"
import CalendlyEmbed from "@/components/calendly-embed"

export default function AboutPage() {
  const handleScheduleAssessment = () => {
    const scheduleSection = document.getElementById("schedule-assessment")
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* About Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary/10 via-white to-brand-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-semibold text-4xl lg:text-5xl text-brand-dark mb-6">
              Real Estate Energy Efficiency Specialists <span className="text-brand-primary">You Can Trust</span>
            </h1>
            <p className="text-xl text-brand-dark/80 mb-8 leading-relaxed">
              We prove that sustainable energy practices drive measurable property performance improvements through
              systematic implementation and ongoing partnership.
            </p>

            {/* Key Credibility Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="font-heading font-semibold text-2xl text-brand-primary">2014</div>
                <div className="text-sm text-brand-dark/70">Founded</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-semibold text-2xl text-brand-primary">1,000</div>
                <div className="text-sm text-brand-dark/70">Properties Optimized</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-semibold text-2xl text-brand-primary">$150M+</div>
                <div className="text-sm text-brand-dark/70">Dollars Saved</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-semibold text-2xl text-brand-primary">100%</div>
                <div className="text-sm text-brand-dark/70">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Origin and Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading font-semibold text-3xl text-brand-dark">
                Saving the Future Through Smart Energy Solutions
              </h2>
              <p className="text-lg text-brand-dark/80 leading-relaxed">
                Get Green NOI is a group of commercial real estate experts and green energy engineers who have a passion
                for saving energy and increasing the bottom line for CRE owners and managers.
              </p>
              <p className="text-lg text-brand-dark/80 leading-relaxed">
                Eliminating wasted resources seems like something everyone should do, but where do you start? That's
                where we come in. We take the time to thoroughly understand your goals and facilities, complete detailed
                assessments, and create financial models that work within your budget.
              </p>
              <p className="text-lg text-brand-dark/80 leading-relaxed">
                Our experience ensures a smooth installation process, and our detailed approach ensures no stone is left
                unturned in terms of rebates or incentives that can help offset the cost of your energy conservation
                measures.
              </p>
              <div className="bg-brand-light p-6 rounded-lg">
                <p className="text-brand-dark/80 italic">
                  "Researchers at MIT estimate commercial buildings account for 20% of all the energy used in the U.S.
                  and conclude that as much as 30% of that energy is wasted."
                </p>
                <p className="text-sm text-brand-dark/60 mt-2">- MIT News</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/walmart_EV_charger_t1100.jpg"
                alt="Professional EV charging stations installed by Get Green NOI, showcasing modern charging infrastructure with green displays"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-primary text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-semibold text-sm">EV Infrastructure Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-semibold text-3xl text-brand-dark mb-4">Leadership Team & Expertise</h2>
            <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
              Our team combines deep real estate investment experience with energy engineering expertise to deliver
              superior results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/images/chandler-reed-headshot.jpg" className="object-cover" />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">Chandler Reed</CardTitle>
                <p className="text-brand-dark/70">Chief Executive Officer</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-brand-dark/80">
                    Began his real estate career with Camden Property Trust, one of the nation's largest multifamily
                    REITs. Previously worked for a private multifamily investment firm and full-service CRE development
                    firm.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      B.S. Finance - UF
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      M.S. Real Estate - UF
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      CRE Finance & Sustainability Expert
                    </Badge>
                  </div>
                  <p className="text-sm text-brand-dark/80">
                    Graduated from University of Florida's #1 ranked public real estate program. Led major urban
                    neighborhood developments.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/images/richard-blackwood-headshot.png" className="object-cover" />
                  <AvatarFallback>RB</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">Richard Blackwood</CardTitle>
                <p className="text-brand-dark/70">VP, Operations - PMP</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-brand-dark/80">
                    M.S. in Engineering Management from University of South Florida. Extensive experience in multifamily
                    services industry with focus on energy conservation projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      PMP Certified
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      M.S. Engineering Mgmt
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      EVSE Expert
                    </Badge>
                  </div>
                  <p className="text-sm text-brand-dark/80">
                    Specializes in lighting, EVSE, and water efficiency products. Expert knowledge of regional rebate
                    incentive programs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/images/bert-de-alejo-headshot.jpg" className="object-cover" />
                  <AvatarFallback>BA</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">Bert de Alejo</CardTitle>
                <p className="text-brand-dark/70">Board Member</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-brand-dark/80">
                    Active real estate investor with 15+ years in acquisition and operation of multifamily and
                    industrial properties. Partner in Florida-based investment firm for 10 years.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      B.S.B.A. Georgetown
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      M.B.A. USF
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Licensed GC & Broker
                    </Badge>
                  </div>
                  <p className="text-sm text-brand-dark/80">
                    Directly oversaw 18,000+ multifamily units and led investment team conducting $1.5B+ in
                    transactions. Tampa, FL resident.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach and Differentiators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-semibold text-3xl text-brand-dark mb-4">
              What Makes Get Green NOI Different
            </h2>
            <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
              Our methodology and approach deliver superior results through systematic processes and ongoing
              partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <HandHeart className="w-12 h-12 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-brand-dark mb-3">Partnership Philosophy</h3>
                  <p className="text-brand-dark/80 leading-relaxed">
                    We function as an extension of your team rather than an external vendor. This approach ensures
                    recommendations align with business objectives and operational constraints rather than just
                    technical possibilities.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <TrendingUp className="w-12 h-12 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-brand-dark mb-3">Financial Transparency</h3>
                  <p className="text-brand-dark/80 leading-relaxed">
                    Every recommendation includes detailed ROI analysis with conservative projections and guaranteed
                    performance metrics. This transparency allows informed decisions based on realistic financial
                    expectations.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Lightbulb className="w-12 h-12 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-brand-dark mb-3">Technical Excellence</h3>
                  <p className="text-brand-dark/80 leading-relaxed">
                    Our assessment methodology and implementation processes exceed industry standards. Proprietary
                    evaluation technology and systematic project management ensure superior results compared to less
                    thorough approaches.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Users className="w-12 h-12 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-brand-dark mb-3">Ongoing Partnership</h3>
                  <p className="text-brand-dark/80 leading-relaxed">
                    The relationship continues after installation through performance monitoring, savings verification,
                    and ongoing optimization recommendations. This continued support ensures projected results and
                    identifies future improvement opportunities.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-semibold text-3xl text-brand-dark mb-4">Our Core Values</h2>
            <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
              These values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Users className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h4 className="font-semibold text-brand-dark mb-3">People Focused</h4>
              <p className="text-brand-dark/80 text-sm leading-relaxed">
                We serve people in all aspects of business - our Clients, Teammates, and Partners. We serve our Clients
                who the business exists to serve, our Teammates who the business can't exist without, and our Partners
                who keep our business moving.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Shield className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h4 className="font-semibold text-brand-dark mb-3">Integrity</h4>
              <p className="text-brand-dark/80 text-sm leading-relaxed">
                The core of our business - we do the right thing because it's the right thing. This principle guides
                every recommendation, every project, and every client interaction.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h4 className="font-semibold text-brand-dark mb-3">Evolve</h4>
              <p className="text-brand-dark/80 text-sm leading-relaxed">
                We specialize in making commercial properties more efficient in cost-effective ways. As technology
                evolves, we evolve, implementing new processes and solutions to constantly improve our offerings.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Clock className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h4 className="font-semibold text-brand-dark mb-3">Efficient Speed</h4>
              <p className="text-brand-dark/80 text-sm leading-relaxed">
                We understand the need to be fast and always strive to be faster. We achieve this by being more
                efficient and avoid sacrificing quality for speed.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Star className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h4 className="font-semibold text-brand-dark mb-3">Fun</h4>
              <p className="text-brand-dark/80 text-sm leading-relaxed">
                We have fun at all times. We enjoy what we do and the people we do it with. We naturally enjoy
                interacting with others and look to make everyone's day better one smile at a time.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Lightbulb className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h4 className="font-semibold text-brand-dark mb-3">Life is Short</h4>
              <p className="text-brand-dark/80 text-sm leading-relaxed">
                Life is too short to not enjoy it! This philosophy drives our positive approach to business and our
                commitment to making every interaction meaningful and enjoyable.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-semibold text-3xl text-brand-dark mb-6">
              Partner With Proven Energy Efficiency Experts
            </h2>
            <p className="text-xl text-brand-dark/80 mb-8 leading-relaxed">
              Join the 1000 commercial properties that trust{" "}
              <span className="text-brand-primary font-bold">Get Green NOI</span> to deliver measurable energy savings
              and enhanced NOI performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold"
                onClick={handleScheduleAssessment}
              >
                Schedule Your Assessment
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
