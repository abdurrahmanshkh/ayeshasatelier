"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, PenTool, Palette, BedDouble as Needle } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Scissors,
      title: "Custom Crochet Creations",
      description:
        "Beautiful handmade blankets, accessories, and home decor pieces crafted with premium yarns and intricate patterns.",
      features: ["Baby blankets", "Scarves & hats", "Home decor", "Custom patterns"],
    },
    {
      icon: PenTool,
      title: "Portrait Sketching",
      description:
        "Detailed pencil portraits and character drawings that capture the essence and personality of your loved ones.",
      features: ["Pencil portraits", "Character drawings", "Pet portraits", "Custom illustrations"],
    },
    {
      icon: Palette,
      title: "Personalized Artwork",
      description:
        "Custom paintings and mixed media pieces tailored to your vision, style preferences, and space requirements.",
      features: ["Custom paintings", "Mixed media art", "Wall art", "Commissioned pieces"],
    },
    {
      icon: Needle,
      title: "Embroidery & Stitching",
      description:
        "Decorative embroidery work and personalized stitched items that add a special touch to any occasion.",
      features: ["Decorative pieces", "Personalized items", "Monogramming", "Custom designs"],
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">Our Handcrafted Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From intricate crochet work to beautiful sketches, we offer a range of handmade services to bring your
            creative visions to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm text-pretty">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent" onClick={scrollToContact}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
