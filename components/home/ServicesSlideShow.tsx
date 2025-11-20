"use client"

import { useState, useEffect } from "react"
import {
  Wrench,
  Sparkles,
  ThermometerSun,
  ShieldCheck,
  Car,
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
    title: "CỨU HỘ Ô TÔ 24/7",
    desc: "Hỗ trợ cứu hộ khi xe gặp sự cố, chết máy, nổ lốp,...",
    icon: Car,
  },
  {
    id: 2,
    title: "SỬA XE LƯU ĐỘNG – TẠI CHỖ",
    desc: "Kỹ thuật viên đến tận nơi kiểm tra & xử lý lỗi cơ bản.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "BẢO DƯỠNG ĐỊNH KỲ",
    desc: "Thay dầu, lọc, kiểm tra hệ thống phanh, lốp,...",
    icon: Wrench,
  },
  {
    id: 4,
    title: "ĐIỆN – ĐIỀU HÒA",
    desc: "Sửa điều hòa không mát, vệ sinh dàn lạnh, kiểm tra điện,...",
    icon: ThermometerSun,
  },
  {
    id: 5,
    title: "LÀM ĐỒNG – PHỤ KIỆN",
    desc: "Độ đèn, bodykit, âm thanh, dán film,...",
    icon: Sparkles,
  },
  {
    id: 6,
    title: "ĐỘ XE – PHỤ KIỆN",
    desc: "Độ đèn, bodykit, âm thanh, dán film,...",
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
        <div className="flex justify-between items-center mb-6 text-red-700">
          <h2 className="text-xl md:text-2xl font-semibold">
            Các dịch vụ bên garage
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
