import { Phone, ClipboardList, Wrench, CheckCircle2 } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      icon: Phone,
      label: "Bước 1",
      title: "Tiếp nhận & tư vấn",
      desc: "Khách hàng mô tả tình trạng xe qua điện thoại, chat hoặc đến trực tiếp garage. Kỹ thuật tư vấn hạng mục cần kiểm tra.",
    },
    {
      icon: ClipboardList,
      label: "Bước 2",
      title: "Kiểm tra & báo giá",
      desc: "Kiểm tra chi tiết bằng mắt thường và máy chẩn đoán. Giải thích rõ nguyên nhân, phương án xử lý và báo giá cụ thể.",
    },
    {
      icon: Wrench,
      label: "Bước 3",
      title: "Tiến hành sửa chữa",
      desc: "Thực hiện sửa chữa, thay thế phụ tùng theo đúng hạng mục đã thống nhất. Khách có thể theo dõi quá trình nếu muốn.",
    },
    {
      icon: CheckCircle2,
      label: "Bước 4",
      title: "Kiểm tra & bàn giao",
      desc: "Chạy thử, kiểm tra lại toàn bộ trước khi bàn giao. Hướng dẫn khách cách sử dụng, bảo dưỡng và thông tin bảo hành.",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <p className="text-xs text-yellow-700 uppercase tracking-wide mb-1">
            Quy trình làm việc
          </p>
          <h2 className="text-2xl md:text-3xl text-red-700 font-semibold mb-2">
            Dịch vụ rõ ràng, minh bạch theo từng bước
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Chúng tôi xây dựng quy trình chuẩn để khách hàng luôn nắm được xe
            mình đang ở giai đoạn nào, làm những gì và chi phí ra sao.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-gray-100 bg-gray-50/60 px-4 py-5 text-center flex flex-col items-center"
              >
                <div className="mb-3">
                  <span className="inline-flex items-center justify-center rounded-full bg-primary text-white bg-yellow-400 text-[11px] font-semibold px-3 py-1">
                    {step.label}
                  </span>
                </div>
                <div className="h-11 w-11 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm">
                  <Icon className="h-5 w-5 text-primary text-red-700" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.desc}</p>

                {/* line nối các step trên desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-0 translate-x-1/2 w-8 border-t border-dashed border-gray-300" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
