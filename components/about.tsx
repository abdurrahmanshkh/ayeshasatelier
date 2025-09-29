import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">From Hobby to Passion</h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              What started as a simple hobby has blossomed into a thriving business built on love, creativity, and the
              joy of bringing your ideas to life. Ayesha's journey began with a single crochet hook and a sketch pad,
              but it was the overwhelming love and demand from customers that transformed her passion into Ayesha's
              Atelier.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Today, we specialize in creating one-of-a-kind pieces that tell your story. From intricate crochet
              blankets to detailed portrait sketches, every creation is handmade with meticulous attention to detail and
              boundless love.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">From Hobby to Passion</h3>
                  <p className="text-sm text-muted-foreground">Started with love, grown with dedication</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Handmade Quality</h3>
                  <p className="text-sm text-muted-foreground">Every piece crafted with care</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Custom Designs</h3>
                  <p className="text-sm text-muted-foreground">Bringing your vision to life</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
              <img
                src="/professional-portrait-of-female-artist-in-her-craf.jpg"
                alt="Ayesha in her atelier workspace"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent/30 animate-float"></div>
            <div
              className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-secondary/40 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
