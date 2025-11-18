"use client"

import { useState, useEffect } from "react"
import {
  Wrench,
  Sparkles,
  ThermometerSun,
  ShieldCheck,
  Car,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const services = [
  {
    id: 1,
    title: "CỨU HỘ Ô TÔ 24/7",
    desc: "Hỗ trợ cứu hộ khi xe gặp sự cố, chết máy, nổ lốp, hết ắc quy,...",
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
    title: "ĐỘ XE – PHỤ KIỆN",
    desc: "Độ đèn, bodykit, âm thanh, dán film,...",
    icon: Sparkles,
  },
]

const ITEMS_PER_PAGE = 3
const AUTOPLAY_MS = 3000

export default function ServicesSlider() {
  const [start, setStart] = useState(0)

  const handlePrev = () => {
    setStart((prev) => (prev - 1 + services.length) % services.length)
  }

  const handleNext = () => {
    setStart((prev) => (prev + 1) % services.length)
  }

  // Auto chạy từng card
  useEffect(() => {
    const id = setInterval(() => {
      setStart((prev) => (prev + 1) % services.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  // Create the visible array by rotating
  const visible = Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => {
    const index = (start + i) % services.length
    return services[index]
  })

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            Các dịch vụ bên garage
          </h2>

          <div className="hidden md:flex gap-2">
            <button
              onClick={handlePrev}
              className="h-9 w-9 rounded-full border flex items-center justify-center"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="h-9 w-9 rounded-full border flex items-center justify-center"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visible.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-gray-50 px-6 py-7 text-center shadow hover:shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-white border flex items-center justify-center">
                    <Icon className="h-7 w-7 text-blue-700" />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-blue-800 uppercase mb-3">
                  {service.title}
                </h3>

                <p className="text-xs text-gray-700">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
