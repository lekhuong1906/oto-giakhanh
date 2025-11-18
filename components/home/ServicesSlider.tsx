// components/home/services-slider.tsx
import { useEffect, useState } from "react"
import { Wrench, Sparkles, ThermometerSun, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Bảo dưỡng định kỳ",
    short: "Thay dầu, kiểm tra toàn bộ hệ thống, đảm bảo xe luôn trong trạng thái tốt nhất.",
    bullets: [
      "Thay dầu nhớt, lọc dầu, lọc gió",
      "Kiểm tra phanh, lốp, ắc quy",
      "Kiểm tra gầm, treo, hệ thống lái",
    ],
    icon: Wrench,
  },
  {
    id: 2,
    title: "Sửa chữa máy – gầm",
    short: "Xử lý các vấn đề về động cơ, hộp số, gầm xe chính xác, rõ lỗi.",
    bullets: [
      "Đọc lỗi, kiểm tra bằng máy chuyên dụng",
      "Sửa chữa, đại tu động cơ – hộp số",
      "Kiểm tra, xử lý tiếng động lạ gầm xe",
    ],
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Điện – điều hòa – tiện ích",
    short: "Kiểm tra và sửa chữa hệ thống điện, điều hòa, các tính năng tiện nghi trên xe.",
    bullets: [
      "Sửa điều hòa không mát, có mùi lạ",
      "Xử lý đèn, kính, gương, khóa điện",
      "Nâng cấp màn hình, camera, cảm biến",
    ],
    icon: ThermometerSun,
  },
  {
    id: 4,
    title: "Độ xe – nâng cấp phụ kiện",
    short: "Độ ngoại thất, nội thất, nâng cấp ánh sáng, âm thanh, bảo vệ xe.",
    bullets: [
      "Độ đèn bi, LED, bodykit",
      "Phủ gầm, phủ ceramic, dán film",
      "Độ âm thanh, bọc ghế, thảm sàn",
    ],
    icon: Sparkles,
  },
]

export default function ServicesSlider() {
  const [index, setIndex] = useState(0)
  const activeSlide = slides[index]

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  const goTo = (i: number) => {
    if (i < 0) i = slides.length - 1
    if (i >= slides.length) i = 0
    setIndex(i)
  }

  const Icon = activeSlide.icon

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-[2fr,3fr] items-center">
        {/* Left: Intro */}
        <div>
          <p className="text-xs uppercase tracking-wide text-red-500 mb-2">
            Dịch vụ tại garage
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Dịch vụ chăm sóc & sửa chữa toàn diện
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            Chúng tôi cung cấp đầy đủ các dịch vụ từ bảo dưỡng định kỳ, sửa chữa
            chuyên sâu cho đến độ xe, nâng cấp phụ kiện –{" "}
            <span className="font-medium">tất cả trong một địa chỉ</span>.
          </p>

          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Kỹ thuật viên có kinh nghiệm, làm việc cẩn thận</li>
            <li>• Báo giá rõ ràng, minh bạch trước khi sửa</li>
            <li>• Bảo hành dịch vụ, nhắc lịch bảo dưỡng định kỳ</li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild size="sm">
              <a href="/dat-lich-sua-chua">Đặt lịch ngay</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="/dich-vu">Xem tất cả dịch vụ</a>
            </Button>
          </div>
        </div>

        {/* Right: Slider */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-7 shadow-xl relative overflow-hidden">
          <div className="flex items-start gap-4 mb-4">
            <div className="h-11 w-11 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-1">
                {activeSlide.title}
              </h3>
              <p className="text-gray-200 text-sm">{activeSlide.short}</p>
            </div>
          </div>

          <ul className="space-y-2 text-sm text-gray-100 mb-6">
            {activeSlide.bullets.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-8 w-8 border-gray-600"
                onClick={() => goTo(index - 1)}
              >
                <span className="sr-only">Previous</span>
                ‹
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-8 w-8 border-gray-600"
                onClick={() => goTo(index + 1)}
              >
                <span className="sr-only">Next</span>
                ›
              </Button>
            </div>

            <div className="flex items-center gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-red-500" : "w-2 bg-gray-600"
                  }`}
                  aria-label={`Xem dịch vụ: ${slide.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
