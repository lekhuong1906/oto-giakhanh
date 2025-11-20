// pages/index.tsx
import Head from "next/head"
import { Button } from "@/components/ui/button"
import SerViceSlideShow from "@/components/home/ServicesSlideShow"
import ActivityCarousel from "@/components/home/ActivityCarousel"
import { Wrench } from "lucide-react"
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection"
import ProcessSection from "@/components/home/ProcessSection"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Phụ Tùng & Dịch Vụ Ô Tô | Ô Tô Gia Khánh</title>
        <meta
          name="description"
          content="Chuyên phụ tùng, phụ kiện ô tô chính hãng và dịch vụ sửa chữa uy tín."
        />
      </Head>

      {/* Hero */}
      <section className="w-full bg-yellow-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-wide text-red-700 mb-2">
              Phụ tùng & Dịch vụ ô tô
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              
            </h1>Giải pháp toàn diện cho chiếc xe của bạn
            <p className="text-sm md:text-base text-gray-200 mb-6">
              Phụ tùng chính hãng, giá tốt – Dịch vụ sửa chữa chuyên nghiệp, bảo
              hành rõ ràng. Đặt lịch online tiện lợi.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-red-700 hover:bg-red-800">
                <a href="/lien-he">
                  <Wrench className="h-4 w-4 mr-2" />
                  Đặt lịch sửa chữa
                </a>
              </Button>
              {/* <Button asChild variant="outline" size="lg" className="border-gray-500 text-white">
                <a href="/san-pham">Xem phụ tùng</a>
              </Button> */}
            </div>
          </div>

          <div>
            <div className="h-48 md:h-64 rounded-2xl bg-gradient-to-br from-red-600 via-yellow-600 to-yellow-900 shadow-xl flex items-center justify-center">
              <span className="text-gray-100 text-sm">
                (Khu vực hình ảnh garage / xe ô tô)
              </span>
            </div>
          </div>
        </div>
      </section>

       {/* <ServicesSlider /> */}
       <WhyChooseUsSection />
       <SerViceSlideShow />
       <ProcessSection />
       <ActivityCarousel />

      {/* Các section khác: Danh mục, Sản phẩm, Dịch vụ... có thể dùng lại từ bản trước */}
    </>
  )
}
