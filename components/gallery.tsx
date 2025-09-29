"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Crochet", "Sketches", "Paintings", "Embroidery"]

  const galleryItems = [
    {
      id: 1,
      category: "Crochet",
      title: "Baby Blanket",
      image: "/beautiful-handmade-crochet-baby-blanket-in-soft-co.jpg",
    },
    {
      id: 2,
      category: "Sketches",
      title: "Portrait Drawing",
      image: "/detailed-pencil-portrait-sketch-of-a-person.jpg",
    },
    { id: 3, category: "Paintings", title: "Floral Art", image: "/beautiful-watercolor-floral-painting.jpg" },
    {
      id: 4,
      category: "Embroidery",
      title: "Decorative Piece",
      image: "/intricate-embroidery-work-with-floral-patterns.jpg",
    },
    { id: 5, category: "Crochet", title: "Scarf Collection", image: "/colorful-handmade-crochet-scarves.jpg" },
    { id: 6, category: "Sketches", title: "Pet Portrait", image: "/charming-pencil-sketch-of-a-cute-dog.jpg" },
    { id: 7, category: "Paintings", title: "Abstract Art", image: "/modern-abstract-painting-with-soft-colors.jpg" },
    { id: 8, category: "Embroidery", title: "Monogram Design", image: "/elegant-embroidered-monogram-on-fabric.jpg" },
  ]

  const filteredItems =
    activeFilter === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">Our Beautiful Creations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
            Explore our portfolio of handcrafted pieces, each one unique and made with love.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "transition-all duration-200",
                  activeFilter === filter && "bg-primary text-primary-foreground",
                )}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-xl overflow-hidden bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" onClick={scrollToContact}>
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
