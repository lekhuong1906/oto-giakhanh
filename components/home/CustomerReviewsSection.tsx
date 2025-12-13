"use client"

import { useState, useEffect } from "react"
import { Star, User } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string; // Optional avatar URL
}

interface CustomerReviewsSectionProps {
  reviews: Review[];
}

export default function CustomerReviewsSection({ reviews }: CustomerReviewsSectionProps) {
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

  const plugin = Autoplay({ delay: 3500, stopOnMouseEnter: true })

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <p className="text-xs text-yellow-700 uppercase tracking-wide mb-1">
            Khách hàng nói gì
          </p>
          <h2 className="text-2xl md:text-3xl text-red-700 font-semibold mb-2">
            Phản hồi từ những khách hàng đã tin tưởng
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Những lời khen ngợi và trải nghiệm thực tế từ khách hàng đã sử dụng
            dịch vụ của chúng tôi.
          </p>
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
            {reviews.map((review, idx) => (
              <CarouselItem key={idx} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="rounded-2xl border border-gray-100 bg-gray-50/60 px-4 py-4 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                      {review.avatar ? (
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className={`h-3 w-3 shrink-0 ${
                              starIdx < review.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-sm text-gray-900">{review.name}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 mb-3 italic overflow-hidden" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: '1.4em',
                    maxHeight: '4.2em'
                  }}> "{review.comment}"</p>
                  <span className="text-xs text-gray-500">{review.date}</span>
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
                i === current - 1 ? "bg-red-700" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}