import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wrench, Award } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full bg-yellow-500 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 items-center text-center">
        <div>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-700 text-white text-xl font-semibold">
              <Award className="h-3 w-3" />
              Top 10 Gara Ô Tô uy tín tại Gia Lai
            </span>
          </div>
          <p className="text-xl uppercase tracking-wide text-red-700 mb-2">
            Ô Tô Gia Khánh
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Giải pháp toàn diện cho chiếc xe của bạn
          </h1>
          <p className="text-sm md:text-base text-gray-200 mb-6">
            Phụ tùng chính hãng, giá tốt – Dịch vụ sửa chữa chuyên nghiệp, bảo
            hành rõ ràng. Đặt lịch online tiện lợi.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {/* <Button asChild size="lg" className="bg-red-700 hover:bg-red-800">
              <Link href="/lien-he">
                <Wrench className="h-4 w-4 mr-2" />
                Đặt lịch sửa chữa
              </Link>
            </Button> */}
            {/* <Button asChild variant="outline" size="lg" className="border-gray-500 text-white">
              <a href="/san-pham">Xem phụ tùng</a>
            </Button> */}
          </div>
        </div>

        {/* <div className="h-48 md:h-64 rounded-2xl bg-[#111828] shadow-xl overflow-hidden">
          <Image
            src="/images/banner_logo.webp"
            alt="Banner ô tô Gia Khánh"
            className="w-full h-full object-cover"
            width={800}
            height={400}
          />
        </div> */}
      </div>
    </section>
  )
}

