"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const items = [
  { id: 1, src: "/images/activity/anh-1.webp", alt: "Garage 1" },
  { id: 2, src: "/images/activity/anh-2.webp", alt: "Garage 2" },
  { id: 3, src: "/images/activity/anh-3.webp", alt: "Office" },
  { id: 4, src: "/images/activity/anh-4.webp", alt: "Showroom" },
  { id: 5, src: "/images/activity/anh-5.webp", alt: "Training" },
  { id: 6, src: "/images/activity/anh-6.webp", alt: "Training 2" },
]

const ITEMS_PER_PAGE = 3
const AUTOPLAY_MS = 3200

export default function ActivityCarousel() {
  const [start, setStart] = useState(0)
  const total = items.length

  const next = () => setStart((prev) => (prev + 1) % total)
  const prev = () => setStart((prev) => (prev - 1 + total) % total)

  // Auto chạy từng card
  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  const visible = Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => {
    const index = (start + i) % total
    return items[index]
  })

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            Hoạt động tại Ô Tô Gia Khánh
          </h2>

          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              className="h-9 w-9 rounded-full border flex items-center justify-center"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="h-9 w-9 rounded-full border flex items-center justify-center"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Desktop: 3 ảnh vuông */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {visible.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl overflow-hidden bg-gray-100 shadow-sm"
            >
              <div className="relative w-full aspect-square max-h-[450px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: 1 ảnh */}
        <div className="md:hidden">
          <div className="rounded-3xl overflow-hidden shadow-sm bg-gray-100 fade-in">
            <div className="relative w-full aspect-square max-h-[450px]">
              <Image
                src={items[start].src}
                alt={items[start].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
