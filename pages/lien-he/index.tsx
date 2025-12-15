// pages/lien-he.tsx
import Seo from "../../components/seo/Seo"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Liên Hệ"
        description="Liên hệ Ô Tô Gia Khánh - Hotline 0973 874 677. Địa chỉ: Lô 5-6, Đường số 1, Quốc lộ 1D, Phường Quy Nhơn Nam, Tỉnh Gia Lai. Cứu hộ 24/7, tư vấn miễn phí."
        url="/lien-he"
        keywords="liên hệ Ô Tô Gia Khánh, hotline gara ô tô, địa chỉ gara Gia Lai, cứu hộ ô tô, tư vấn sửa chữa ô tô"
      />

      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        {/* Tiêu đề trang */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-wide text-yellow-700 mb-2">
            Liên hệ
          </p>
          <h1 className="text-2xl md:text-3xl text-red-700 font-semibold mb-3">
            Kết nối với Công Ty TNHH Công Nghệ Ô Tô Gia Khánh
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl">
            Nếu bạn cần tư vấn về phụ tùng, phụ kiện hoặc đặt lịch sửa chữa, hãy
            liên hệ với chúng tôi qua hotline, Zalo, email hoặc ghé trực tiếp
            garage. Đội ngũ tư vấn luôn sẵn sàng hỗ trợ.
          </p>
        </div>

        {/* Thông tin liên hệ + form đơn giản (optional) */}
        <div className="grid gap-8 md:grid-cols-[1.3fr,1.7fr] mb-12">
          {/* Khối thông tin */}
          <div className="space-y-5">
            <div className="border rounded-2xl p-4 md:p-5 bg-white shadow-sm">
              <h2 className="font-semibold text-base md:text-lg mb-3">
                Thông tin liên hệ
              </h2>

              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <Phone className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">Hotline</p>
                    <p>0973 874 677</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <Mail className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>duycong@gmai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <MapPin className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">Địa chỉ garage</p>
                    <p>Lô 5-6, Đường số 1, Quốc lộ 1D, Phường Quy Nhơn Nam, Tỉnh Gia Lai</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <Clock className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">Thời gian làm việc</p>
                    <p>Thứ 2 – Thứ 7: 8:00 – 18:00</p>
                    <p>Chủ nhật: 8:30 – 16:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild size="sm" className="bg-red-700 hover:bg-red-800">
                  <a href="tel:0909xxxxxx">Gọi ngay</a>
                </Button>
                <Button asChild size="sm" variant="outline" className="hover:bg-yellow-400">
                  <a href="/dat-lich-sua-chua">Đặt lịch sửa chữa</a>
                </Button>
              </div>
            </div>

            {/* Optional: Gợi ý form đơn giản (sau này có thể nối API) */}
            {/* <div className="border rounded-2xl p-4 md:p-5 bg-gray-50">
              <h2 className="font-semibold text-base md:text-lg mb-3">
                Gửi yêu cầu nhanh
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mb-3">
                Hãy để lại thông tin và tình trạng xe, chúng tôi sẽ gọi lại tư
                vấn trong thời gian sớm nhất.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-3 text-sm"
              >
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label className="font-medium">Họ tên</label>
                    <input
                      type="text"
                      className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-medium">Số điện thoại</label>
                    <input
                      type="tel"
                      className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500"
                      placeholder="09xx xxx xxx"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-medium">Loại xe</label>
                  <input
                    type="text"
                    className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500"
                    placeholder="VD: Vios 2019, Fortuner 2021..."
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-medium">Tình trạng / nhu cầu</label>
                  <textarea
                    rows={3}
                    className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500 resize-none"
                    placeholder="Mô tả triệu chứng, tiếng kêu, đèn báo lỗi... hoặc nhu cầu độ xe."
                  />
                </div>

                <Button type="submit" size="sm">
                  Gửi yêu cầu (demo – chưa nối API)
                </Button>
              </form>
            </div> */}
          </div>

          {/* Khối map */}
          <div className="space-y-4">
            <h2 className="font-semibold text-base md:text-lg text-red-700">
              Bản đồ chỉ đường
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Bạn có thể tìm kiếm &quot;Ô Tô Gia Khánh&quot; trên Google Maps
              hoặc sử dụng bản đồ bên dưới để dẫn đường đến garage.
            </p>

            <div className="rounded-2xl overflow-hidden border shadow-sm h-72 md:h-full min-h-[280px]">
              {/* Replace src bên dưới bằng link embed Google Maps vị trí thực của bạn */}
              <iframe
                title="Bản đồ đường đi tới Ô Tô Gia Khánh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6356593043876!2d106.78103637587028!3d10.841132857936461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527dc64b9c1b9%3A0x6fa8002b33cd807!2zQ8O0bmcgdmnDqm4gQ2FvIMSR4buTbiBUaMO0bmcgVMOibiBWaeG7h3Q!5e0!3m2!1svi!2svi!4v1700000000000!5m2!1svi!2svi"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
