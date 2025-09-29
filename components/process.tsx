import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Lightbulb, Hammer, Gift } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Consult",
      description: "Discuss your vision",
      details:
        "We start with a conversation about your ideas, preferences, and requirements to understand exactly what you envision.",
    },
    {
      icon: Lightbulb,
      title: "Design",
      description: "Custom artwork creation",
      details:
        "Our team creates initial designs and sketches, working closely with you to refine every detail until it's perfect.",
    },
    {
      icon: Hammer,
      title: "Craft",
      description: "Handmade with care",
      details:
        "Using premium materials and traditional techniques, we carefully handcraft your piece with attention to every detail.",
    },
    {
      icon: Gift,
      title: "Deliver",
      description: "Your beautiful creation",
      details: "Your finished piece is carefully packaged and delivered, ready to bring joy and beauty to your space.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our simple 4-step process ensures your custom artwork is created exactly as you envision it, from initial
            consultation to final delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif font-bold mb-2">{step.title}</h3>
                  <p className="text-accent font-medium mb-3">{step.description}</p>
                  <p className="text-sm text-muted-foreground text-pretty">{step.details}</p>
                </CardContent>
              </Card>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
