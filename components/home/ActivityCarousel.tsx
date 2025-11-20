"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const items = [
  { id: 1, src: "/images/activity/anh-1.webp", alt: "Garage 1" },
  { id: 2, src: "/images/activity/anh-2.webp", alt: "Garage 2" },
  { id: 3, src: "/images/activity/anh-3.webp", alt: "Office" },
  { id: 4, src: "/images/activity/anh-4.webp", alt: "Showroom" },
  { id: 5, src: "/images/activity/anh-5.webp", alt: "Training" },
  { id: 6, src: "/images/activity/anh-6.webp", alt: "Training 2" },
]

export default function ActivityCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const plugin = Autoplay({ delay: 3200, stopOnMouseEnter: true })

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* header */}
        <div className="text-center mb-6">
          <p className="text-xs text-yellow-700 uppercase tracking-wide mb-1">
            Hình ảnh thực tế
          </p>
          <h2 className="text-xl text-red-700 md:text-2xl font-semibold">
            Hoạt động tại Ô Tô Gia Khánh
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/3">
                <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative w-full aspect-square max-h-[450px]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current - 1 ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
