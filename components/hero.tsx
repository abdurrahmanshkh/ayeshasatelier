import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, Heart } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/20 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-secondary/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand Mark */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center shadow-lg">
              <Palette className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance">
            Welcome to <span className="text-gradient">Ayesha's Atelier</span>
            <br />
            Where Art Meets Heart
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Custom artwork, handmade with love. Specializing in crochet creations and beautiful sketches.
            <span className="flex items-center justify-center mt-2 text-accent">
              <Heart className="w-5 h-5 mr-2" />
              Turning your ideas into beautiful reality
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Order Custom Artwork
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              View Gallery
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
              100% Handmade
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
              Custom Designs
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
              Made with Love
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
