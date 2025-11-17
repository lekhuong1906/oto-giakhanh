// pages/ve-chung-toi.tsx
import Head from "next/head"
import { Wrench, ShieldCheck, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Về Chúng Tôi | AutoParts Garage</title>
        <meta
          name="description"
          content="Giới thiệu về AutoParts Garage - phụ tùng, phụ kiện ô tô và dịch vụ sửa chữa uy tín."
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">
          Về AutoParts Garage
        </h1>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          AutoParts Garage được thành lập với mục tiêu mang đến cho khách hàng
          những giải pháp toàn diện về phụ tùng, phụ kiện và dịch vụ sửa chữa
          ô tô. Chúng tôi luôn đặt{" "}
          <span className="font-medium">chất lượng – uy tín – minh bạch</span>{" "}
          lên hàng đầu.
        </p>

        {/* 3 điểm mạnh */}
        <div className="grid gap-5 md:grid-cols-3 mb-10">
          <div className="border rounded-xl p-4 md:p-5 shadow-sm">
            <div className="h-9 w-9 rounded-full bg-red-600 text-white flex items-center justify-center mb-3">
              <Wrench className="h-4 w-4" />
            </div>
            <h2 className="font-semibold mb-1 text-sm md:text-base">
              Đội ngũ kỹ thuật chuyên nghiệp
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Kỹ thuật viên có nhiều năm kinh nghiệm, thường xuyên cập nhật kiến
              thức, sử dụng máy móc hiện đại để chẩn đoán và sửa chữa.
            </p>
          </div>

          <div className="border rounded-xl p-4 md:p-5 shadow-sm">
            <div className="h-9 w-9 rounded-full bg-red-600 text-white flex items-center justify-center mb-3">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <h2 className="font-semibold mb-1 text-sm md:text-base">
              Sản phẩm chính hãng, rõ nguồn gốc
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Phụ tùng, phụ kiện được nhập từ các nhà cung cấp uy tín, có bảo
              hành, hóa đơn đầy đủ, tư vấn đúng nhu cầu thực tế.
            </p>
          </div>

          <div className="border rounded-xl p-4 md:p-5 shadow-sm">
            <div className="h-9 w-9 rounded-full bg-red-600 text-white flex items-center justify-center mb-3">
              <Clock className="h-4 w-4" />
            </div>
            <h2 className="font-semibold mb-1 text-sm md:text-base">
              Quy trình nhanh gọn – minh bạch
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Kiểm tra, báo lỗi và báo giá trước khi làm; khách hàng được theo
              dõi trực tiếp quá trình sửa chữa, không phát sinh chi phí bất ngờ.
            </p>
          </div>
        </div>

        {/* Nội dung chi tiết */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-semibold text-lg mb-2">Sứ mệnh</h2>
            <p className="text-sm text-gray-700 mb-3">
              Mang đến trải nghiệm dịch vụ tốt như hãng nhưng chi phí hợp lý
              hơn, giúp khách hàng yên tâm khi sử dụng ô tô mỗi ngày.
            </p>

            <h2 className="font-semibold text-lg mb-2">Giá trị cốt lõi</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Trung thực trong tư vấn và báo giá</li>
              <li>• Tận tâm trong từng hạng mục sửa chữa</li>
              <li>• Tôn trọng thời gian và tài sản của khách hàng</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">Cơ sở vật chất</h2>
            <p className="text-sm text-gray-700 mb-3">
              Garage được trang bị cầu nâng, máy chẩn đoán, máy nén khí, máy cân
              chỉnh… đầy đủ để phục vụ nhiều dòng xe từ phổ thông đến cao cấp.
            </p>

            <h2 className="font-semibold text-lg mb-2">
              Cam kết với khách hàng
            </h2>
            <ul className="text-sm text-gray-700 space-y-1 mb-3">
              <li>• Không thay thế khi chưa cần thiết</li>
              <li>• Giải thích rõ ràng trước và sau khi sửa</li>
              <li>• Bảo hành dịch vụ theo hạng mục công việc</li>
            </ul>

            <p className="text-sm text-gray-700">
              Nếu bạn cần tư vấn thêm, hãy liên hệ qua{" "}
              <span className="font-medium">hotline 0909 xxx xxx</span> hoặc gửi
              yêu cầu tại trang{" "}
              <a
                href="/lien-he"
                className="text-red-600 hover:underline font-medium"
              >
                Liên hệ
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
