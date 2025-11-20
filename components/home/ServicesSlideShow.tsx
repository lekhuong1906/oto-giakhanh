"use client"

import { useState, useEffect } from "react"
import {
  Wrench,
  Sparkles,
  ThermometerSun,
  ShieldCheck,
  Car,
  Hammer,
  Brush,
  AppWindow,
  Droplets,
  Cog
} from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const services = [
  {
    id: 1,
    title: "Sơn ô tô công nghệ cao",
    desc: "Sơn phối màu chuẩn hãng, sơn dặm – sơn full xe, công nghệ phòng sơn hiện đại, bảo hành màu sơn lâu dài.",
    icon: Brush,
  },
  {
    id: 2,
    title: "Đồng – Sơn – Sửa va quẹt",
    desc: "Xử lý va quẹt, trầy xước, móp méo thân vỏHỗ trợ cứu hộ khi xe gặp sự cố, chết máy, nổ lốp,...",
    icon: Hammer,
  },
  {
    id: 3,
    title: "Sửa chữa điện – máy",
    desc: "Kiểm tra – sửa chữa hệ thống điện thân xe, điện lạnh, động cơ, ECU,...",
    icon: Wrench,
  },
  {
    id: 4,
    title: "Thay kính – Sửa kính vỡ",
    desc: "Thay kính trước/sau, kính sườn, xử lý nứt – vỡ kính an toàn theo tiêu chuẩn kỹ thuật.",
    icon: AppWindow,
  },
  {
    id: 5,
    title: "Khắc phục xe ngập nước – thủy kích",
    desc: "Xử lý xe ngập nước, thủy kích, phục hồi động cơ, kiểm tra điện – ECU – lọc gió – dầu máy.",
    icon: Droplets,
  },
  {
    id: 6,
    title: "Làm bảo hiểm ô tô",
    desc: "Hỗ trợ toàn bộ hồ sơ bảo hiểm, giám định – sửa chữa từ A–Z, không thu tiền vụ, thay thế phụ tùng chính hãng.",
    icon: ShieldCheck,
  },
  {
    id: 7,
    title: "Bảo dưỡng định kỳ",
    desc: "Thay dầu, lọc dầu, kiểm tra phanh – máy – điện, vệ sinh khoang máy & gầm toàn diện.",
    icon: Cog,
  },
  {
    id: 9,
    title: "Chăm sóc – Làm đẹp xe",
    desc: "Đánh bóng, phủ ceramic, rửa xe detailing, dọn nội thất, khử mùi, phục hồi sơn.",
    icon: Sparkles,
  },
]

export default function ServicesSlideShow() {
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

  const plugin = Autoplay({ delay: 3000, stopOnMouseEnter: true })

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* header */}
        <div className="mb-6 text-center text-red-700">
          <p className="text-xs text-yellow-700 uppercase tracking-wide mb-1">
            Dịch vụ sửa chữa
          </p>
          <h2 className="text-xl md:text-2xl font-semibold">
            Dịch vụ nổi bật tại Ô Tô Gia Khánh
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
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <CarouselItem key={service.id} className="pl-2 md:pl-4 md:basis-1/3 ">
                  <div className="rounded-3xl bg-gray-50 px-6 py-8 text-center shadow hover:shadow-md transition-shadow duration-300 hover:bg-yellow-400">
                    <div className="h-14 w-14 mx-auto rounded-full border flex items-center justify-center mb-4 bg-white">
                      <Icon className="h-6 w-6 text-red-700" />
                    </div>
                    <h3 className="font-bold text-primary mb-2 uppercase text-sm">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600">{service.desc}</p>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${i === current - 1 ? "bg-primary" : "bg-gray-300"
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
