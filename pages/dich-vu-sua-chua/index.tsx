// pages/dich-vu.tsx
import Seo from "@/components/seo/Seo"
import {
  Wrench,
  ShieldCheck,
  ThermometerSun,
  Sparkles,
  Car,
  Hammer,
  Droplets,
  AppWindow,
  LifeBuoy,
  SprayCan,
} from "lucide-react";
import { Button } from "@/components/ui/button"

export const services = [
  {
    id: 1,
    slug: "bao-duong-dinh-ky",
    title: "Bảo dưỡng định kỳ",
    icon: Wrench,
    short:
      "Thay dầu, kiểm tra tổng thể giúp xe vận hành ổn định và tăng tuổi thọ động cơ.",
    details: [
      "Thay dầu nhớt, lọc dầu, lọc gió động cơ",
      "Kiểm tra phanh, lốp, hệ thống lái và treo",
      "Kiểm tra ắc quy, nước làm mát, dung dịch",
    ],
    estTime: "2–4 giờ",
  },
  {
    id: 2,
    slug: "sua-chua-may-gam",
    title: "Sửa chữa máy – gầm",
    icon: ShieldCheck,
    short:
      "Chẩn đoán và sửa chữa động cơ, hộp số, gầm xe với thiết bị hiện đại.",
    details: [
      "Đọc lỗi, kiểm tra bằng máy chuyên dụng",
      "Sửa chữa, đại tu động cơ – hộp số",
      "Xử lý tiếng kêu, rung lắc bất thường",
    ],
    estTime: "Tùy mức độ",
  },
  {
    id: 3,
    slug: "dien-dieu-hoa",
    title: "Điện – điều hòa – tiện ích",
    icon: ThermometerSun,
    short:
      "Kiểm tra và sửa chữa hệ thống điện, điều hòa và các tiện ích trên xe.",
    details: [
      "Sửa điều hòa không mát, có mùi, chảy nước",
      "Xử lý đèn, kính, gương, khóa điện",
      "Lắp đặt, sửa các thiết bị điện tử, màn hình, camera",
    ],
    estTime: "2–6 giờ",
  },
  {
    id: 4,
    slug: "do-xe-nang-cap",
    title: "Độ xe – nâng cấp phụ kiện",
    icon: Sparkles,
    short:
      "Độ ngoại thất, nội thất, ánh sáng và phụ kiện theo phong cách riêng.",
    details: [
      "Độ đèn bi, LED, bodykit, mâm lốp",
      "Dán film cách nhiệt, phủ ceramic, phủ gầm",
      "Bọc ghế da, thảm sàn, nâng cấp âm thanh",
    ],
    estTime: "Theo gói độ",
  },
  {
    id: 5,
    slug: "kiem-tra-truoc-khi-mua",
    title: "Kiểm tra xe trước khi mua",
    icon: Car,
    short:
      "Đánh giá xe cũ toàn diện trước khi mua – tránh xe lỗi, tai nạn, thủy kích.",
    details: [
      "Kiểm tra khung gầm, dấu hiệu tai nạn, đâm đụng",
      "Đánh giá động cơ, hộp số, hệ thống điện",
      "Tư vấn tình trạng tổng thể, báo cáo chi tiết",
    ],
    estTime: "1.5–3 giờ",
  },
  {
    id: 6,
    slug: "dong-son-xe",
    title: "Đồng – sơn xe",
    icon: Hammer,
    short:
      "Xử lý trầy xước, móp méo, va quẹt và sơn dặm – sơn full xe công nghệ cao.",
    details: [
      "Sửa móp vè, cản, nắn khung",
      "Sơn dặm – phục hồi chuẩn màu 100%",
      "Sơn full xe công nghệ phòng sơn khép kín",
    ],
    estTime: "1–3 ngày",
  },
  {
    id: 7,
    slug: "son-cong-nghe-cao",
    title: "Sơn ô tô công nghệ cao",
    icon: SprayCan,
    short:
      "Phòng sơn tiêu chuẩn, phối màu chính xác, bề mặt bóng đẹp và bền màu lâu dài.",
    details: [
      "Phối màu chuẩn theo mã nhà sản xuất",
      "Sơn công nghệ cao – hạn chế bụi sơn",
      "Bảo hành màu sơn dài hạn",
    ],
    estTime: "1–3 ngày",
  },
  {
    id: 8,
    slug: "thay-kinh-o-to",
    title: "Thay kính – xử lý kính vỡ",
    icon: AppWindow,
    short:
      "Thay kính trước – sau – kính sườn, xử lý nứt vỡ an toàn theo tiêu chuẩn.",
    details: [
      "Thay kính trước/sau chính hãng",
      "Xử lý nứt nhỏ – khoan chống nứt",
      "Hiệu chỉnh cảm biến mưa/lane sau khi thay",
    ],
    estTime: "1–2 giờ",
  },
  {
    id: 9,
    slug: "ngap-nuoc-thuy-kich",
    title: "Khắc phục ngập nước – thủy kích",
    icon: Droplets,
    short:
      "Xử lý xe ngập nước, thủy kích – cứu hộ và phục hồi động cơ an toàn.",
    details: [
      "Kiểm tra và xử lý phần điện – ECU",
      "Vệ sinh bướm ga, lọc gió, thay dầu",
      "Phục hồi động cơ sau thủy kích",
    ],
    estTime: "Tùy tình trạng",
  },
  {
    id: 10,
    slug: "bao-hiem-o-to",
    title: "Làm bảo hiểm ô tô",
    icon: ShieldCheck,
    short:
      "Hỗ trợ toàn bộ hồ sơ bảo hiểm, sửa chữa đúng quy trình, không thu tiền vụ.",
    details: [
      "Tiếp nhận xe và hỗ trợ hồ sơ bảo hiểm",
      "Giám định, làm việc với hãng bảo hiểm",
      "Sửa chữa – thay thế phụ tùng đúng tiêu chuẩn",
    ],
    estTime: "1–5 ngày",
  },
  {
    id: 11,
    slug: "cuu-ho-24-7",
    title: "Cứu hộ 24/7",
    icon: LifeBuoy,
    short:
      "Hỗ trợ tận nơi mọi lúc – xử lý sự cố nhanh: tai nạn, chết máy, ngập nước.",
    details: [
      "Cứu hộ xe chết máy, sự cố bất ngờ",
      "Hỗ trợ tai nạn – va quẹt – kẹt bánh",
      "Vận chuyển xe về gara an toàn",
    ],
    estTime: "Tùy vị trí",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Dịch Vụ Sửa Chữa & Bảo Dưỡng Ô Tô"
        description="Danh sách đầy đủ dịch vụ sửa chữa, bảo dưỡng, độ xe và chăm sóc ô tô tại Ô Tô Gia Khánh: đồng sơn, điện máy, bảo dưỡng định kỳ, cứu hộ 24/7, làm bảo hiểm, kiểm tra xe trước khi mua."
        url="/dich-vu-sua-chua"
        keywords="dịch vụ sửa chữa ô tô, bảo dưỡng ô tô, đồng sơn ô tô, sửa điện điều hòa, cứu hộ ô tô, làm bảo hiểm ô tô, độ xe, kiểm tra xe cũ"
      />

      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        {/* Header page */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-wide text-yellow-700 mb-2">
            Dịch vụ tại Ô Tô Gia Khánh
          </p>
          <h1 className="text-2xl md:text-3xl text-red-700 font-semibold mb-3">
            Dịch vụ sửa chữa & Chăm sóc ô tô
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
          <Button asChild size="sm" className="bg-red-700 hover:bg-red-800">
            <a href="/lien-he">Liên hệ sửa chữa ngay</a>
          </Button>
          <Button asChild size="sm" variant="outline" className="hover:bg-yellow-400">
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
                className="border rounded-2xl p-5 md:p-6 shadow-sm bg-white hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-9 w-9 rounded-full bg-red-700 text-white flex items-center justify-center flex-shrink-0">
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
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-red-700 flex-shrink-0" />
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
                  <Button asChild size="sm" variant="outline" className="hover:bg-yellow-400">
                    <a href={`/dich-vu-sua-chua/${service.slug}`}>
                      Chi tiết
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
            <Button asChild size="sm" className="bg-red-700">
              <a href="/lien-he">Gửi mô tả tình trạng xe</a>
            </Button>
            <Button asChild size="sm" variant="outline" className="hover:bg-yellow-400">
              <a href="tel:0909xxxxxx">Gọi hotline 0973 874 677</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
