"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Ayesha created the most beautiful baby blanket for my daughter. The attention to detail and quality is absolutely amazing. I couldn't be happier!",
      service: "Custom Crochet Blanket",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "The portrait sketch of my grandmother was beyond my expectations. Ayesha captured her essence perfectly. It's now a treasured family heirloom.",
      service: "Portrait Sketching",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "I commissioned a custom painting for my living room and it's absolutely stunning. The colors and style match perfectly with my decor. Highly recommend!",
      service: "Custom Painting",
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "The embroidered monogram on my wedding handkerchief was exquisite. Such beautiful craftsmanship and attention to detail. Thank you for making our day special!",
      service: "Custom Embroidery",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our happy customers have to say about their handcrafted pieces.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Customer Info */}
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-accent">{testimonials[currentIndex].service}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-10 h-10 p-0 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-10 h-10 p-0 bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
