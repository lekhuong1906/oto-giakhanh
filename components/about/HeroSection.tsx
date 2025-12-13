import Link from "next/link";
import { PhoneCall, Wrench, ShieldCheck, Building2 } from "lucide-react";

interface HeroSectionProps {
  pageUrl: string;
}

export default function HeroSection({ pageUrl }: HeroSectionProps) {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 lg:py-16 grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-xs font-medium text-yellow-700 px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
            Gara Ô Tô Gia Khánh
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Công nghệ ô tô Gia Khánh
            <span className="block text-red-700">
              Tận tâm với từng chiếc xe, trọn vẹn với từng khách hàng.
            </span>
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Ô Tô Gia Khánh là gara chuyên về đồng – sơn, điện – điều hòa,
            máy – gầm, chăm sóc xe, làm bảo hiểm và cứu hộ. Đặt uy tín,
            minh bạch và chất lượng dịch vụ lên hàng đầu, chúng tôi luôn
            nỗ lực để anh em yên tâm khi giao xe.
          </p>

          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-700" />
              Chuyên xử lý va quẹt, trầy xước, móp méo, sơn xe công nghệ cao
            </li>
            <li className="flex gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-700" />
              Điện – điều hòa – máy – gầm, chẩn đoán bằng thiết bị hiện đại
            </li>
            <li className="flex gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-700" />
              Làm bảo hiểm, cứu hộ và hỗ trợ khách hàng không kể ngày đêm
            </li>
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="tel:09xxxxxxxx"
              className="inline-flex items-center gap-2 rounded-full bg-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 transition"
            >
              <PhoneCall className="w-4 h-4" />
              Gọi tư vấn ngay
            </a>
            <Link
              href="/dich-vu-sua-chua"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:border-red-700 hover:text-red-700 transition"
            >
              Xem dịch vụ
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="rounded-2xl bg-gray-900 text-white p-5 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Lĩnh vực chính
              </p>
              <p className="font-semibold">
                Đồng – sơn, máy – gầm, điện – điều hòa, bảo hiểm và cứu hộ
              </p>
            </div>
            <div className="mt-4 flex gap-3 text-xs text-gray-300">
              <span className="inline-flex items-center gap-1">
                <Wrench className="w-4 h-4" /> Kỹ thuật kinh nghiệm
              </span>
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Minh bạch – rõ ràng
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-white border border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-yellow-100 p-2">
                  <Building2 className="w-5 h-5 text-yellow-700" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Định hướng
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    Gara "anh em" nhưng làm việc chuyên nghiệp.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-4 space-y-2">
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Cam kết
              </p>
              <p className="text-sm text-gray-800">
                Tư vấn đúng bệnh – báo giá rõ ràng – làm tới nơi tới chốn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}