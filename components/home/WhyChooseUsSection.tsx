import { ShieldCheck, Clock, ThumbsUp, Wrench } from "lucide-react"

export default function WhyChooseUsSection() {
  const items = [
    {
      icon: Wrench,
      title: "Kỹ thuật viên tay nghề cao",
      desc: "Đội ngũ kỹ thuật viên nhiều năm kinh nghiệm, được đào tạo bài bản, xử lý được nhiều dòng xe khác nhau.",
    },
    {
      icon: ShieldCheck,
      title: "Minh bạch & có bảo hành",
      desc: "Kiểm tra, báo giá chi tiết trước khi sửa. Có bảo hành theo từng hạng mục và nhắc lịch bảo dưỡng định kỳ.",
    },
    {
      icon: Clock,
      title: "Nhanh chóng & đúng hẹn",
      desc: "Quy trình tiếp nhận – sửa chữa – bàn giao xe rõ ràng, hạn chế tối đa việc trễ hẹn hoặc phát sinh thêm.",
    },
    {
      icon: ThumbsUp,
      title: "Phụ tùng chính hãng",
      desc: "Ưu tiên sử dụng phụ tùng chính hãng hoặc thương hiệu uy tín, phù hợp nhu cầu và ngân sách của khách.",
    },
  ]

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <p className="text-xs text-yellow-700 uppercase tracking-wide mb-1">
            Tại sao chọn chúng tôi
          </p>
          <h2 className="text-2xl md:text-3xl text-red-700 font-semibold mb-2">
            Garage đáng tin cậy cho chiếc xe của bạn
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Không chỉ sửa xe, chúng tôi tập trung xây dựng mối quan hệ lâu dài
            với khách hàng bằng sự minh bạch, tận tâm và chất lượng dịch vụ.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="flex gap-4 rounded-2xl bg-white hover:bg-yellow-400 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 h-11 w-11 rounded-full bg-white border-1 border-gray-200 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary text-red-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
