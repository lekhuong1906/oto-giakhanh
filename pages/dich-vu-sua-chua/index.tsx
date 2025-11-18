// pages/dich-vu.tsx
import Head from "next/head"
import { Wrench, Sparkles, ThermometerSun, ShieldCheck, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "bao-duong-dinh-ky",
    title: "Bảo dưỡng định kỳ",
    icon: Wrench,
    short:
      "Thay dầu, kiểm tra tổng thể giúp xe vận hành ổn định, tăng tuổi thọ động cơ.",
    details: [
      "Thay dầu nhớt, lọc dầu, lọc gió động cơ",
      "Kiểm tra phanh, lốp, hệ thống lái",
      "Kiểm tra ắc quy, nước làm mát, dung dịch",
    ],
    estTime: "2–4 giờ",
  },
  {
    id: "sua-chua-may-gam",
    title: "Sửa chữa máy – gầm",
    icon: ShieldCheck,
    short:
      "Xử lý các vấn đề về động cơ, hộp số, gầm xe với máy chẩn đoán hiện đại.",
    details: [
      "Đọc lỗi, kiểm tra bằng máy chuyên dụng",
      "Sửa chữa, đại tu động cơ – hộp số",
      "Xử lý tiếng kêu, rung lắc bất thường",
    ],
    estTime: "Tùy mức độ",
  },
  {
    id: "dien-dieu-hoa",
    title: "Điện – điều hòa – tiện ích",
    icon: ThermometerSun,
    short:
      "Kiểm tra và sửa chữa hệ thống điện, điều hòa, các tính năng tiện nghi trên xe.",
    details: [
      "Sửa điều hòa không mát, có mùi, chảy nước",
      "Xử lý đèn, kính, gương, khóa điện",
      "Lắp đặt, sửa các thiết bị điện tử",
    ],
    estTime: "2–6 giờ",
  },
  {
    id: "do-xe-nang-cap",
    title: "Độ xe – nâng cấp phụ kiện",
    icon: Sparkles,
    short:
      "Độ ngoại thất, nội thất, ánh sáng, âm thanh, bảo vệ xe theo phong cách riêng.",
    details: [
      "Độ đèn bi, LED, bodykit, mâm lốp",
      "Dán film cách nhiệt, phủ ceramic, phủ gầm",
      "Bọc ghế da, thảm sàn, nâng cấp âm thanh",
    ],
    estTime: "Theo gói độ",
  },
  {
    id: "kiem-tra-truoc-khi-mua",
    title: "Kiểm tra xe trước khi mua",
    icon: Car,
    short:
      "Kiểm tra tổng thể xe cũ trước khi quyết định mua – hạn chế rủi ro, xe tai nạn.",
    details: [
      "Kiểm tra khung gầm, tai nạn, thủy kích",
      "Đánh giá động cơ, hộp số, hệ thống điện",
      "Tư vấn tổng quan tình trạng xe",
    ],
    estTime: "1.5–3 giờ",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Dịch Vụ Sửa Chữa & Bảo Dưỡng Ô Tô | Ô Tô Gia Khánh</title>
        <meta
          name="description"
          content="Danh sách dịch vụ sửa chữa, bảo dưỡng, độ xe và chăm sóc ô tô tại Ô Tô Gia Khánh."
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        {/* Header page */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-wide text-red-500 mb-2">
            Dịch vụ tại Ô Tô Gia Khánh
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
            Dịch vụ sửa chữa & chăm sóc ô tô
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl">
            Chúng tôi cung cấp đa dạng dịch vụ từ bảo dưỡng định kỳ, sửa chữa
            chuyên sâu cho đến độ xe và chăm sóc ngoại nội thất. Tất cả đều được
            thực hiện bởi đội ngũ kỹ thuật viên nhiều kinh nghiệm cùng trang
            thiết bị hiện đại.
          </p>
        </div>

        {/* CTA nhóm */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Button asChild size="sm">
            <a href="/lien-he">Liên hệ sửa chữa ngay</a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href="/lien-he">Tư vấn dịch vụ</a>
          </Button>
        </div>

        {/* Danh sách dịch vụ */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <section
                key={service.id}
                id={service.id}
                className="border rounded-2xl p-5 md:p-6 shadow-sm bg-white hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-9 w-9 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-base md:text-lg mb-1">
                      {service.title}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600">
                      {service.short}
                    </p>
                  </div>
                </div>

                <ul className="text-xs md:text-sm text-gray-700 space-y-1.5 mb-4">
                  {service.details.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs md:text-sm text-gray-500">
                    Thời gian dự kiến:{" "}
                    <span className="font-medium text-gray-700">
                      {service.estTime}
                    </span>
                  </p>
                  <Button asChild size="sm" variant="outline">
                    <a href={`/dat-lich-sua-chua?service=${service.id}`}>
                      Liên hệ ngay
                    </a>
                  </Button>
                </div>
              </section>
            )
          })}
        </div>

        {/* Gợi ý thêm ở cuối trang */}
        <div className="mt-12 border rounded-2xl p-5 md:p-6 bg-gray-50">
          <h2 className="font-semibold text-base md:text-lg mb-2">
            Không chắc xe đang gặp vấn đề gì?
          </h2>
          <p className="text-sm text-gray-700 mb-3">
            Bạn chỉ cần mô tả triệu chứng (tiếng kêu lạ, xe yếu, hao xăng, đèn
            báo lỗi...) – chúng tôi sẽ gợi ý hạng mục kiểm tra phù hợp và ước
            lượng chi phí cho bạn.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="sm">
              <a href="/lien-he">Gửi mô tả tình trạng xe</a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href="tel:0909xxxxxx">Gọi hotline 0973 874 677</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
