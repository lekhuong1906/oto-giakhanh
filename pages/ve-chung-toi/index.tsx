import Head from "next/head";
import Link from "next/link";
import {
  Building2,
  Wrench,
  Sparkles,
  ShieldCheck,
  LifeBuoy,
  Droplets,
  PhoneCall,
  MapPin,
  Clock,
} from "lucide-react";

export default function AboutPage() {
  const pageUrl = "https://oto-giakhanh.vercel.app/gioi-thieu";

  return (
    <>
      <Head>
        <title>Giới thiệu | Ô Tô Gia Khánh</title>
        <meta
          name="description"
          content="Công ty TNHH Ô Tô Gia Khánh – Gara sửa chữa, bảo dưỡng, đồng sơn, điện máy, làm bảo hiểm và cứu hộ ô tô uy tín."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Giới thiệu | Ô Tô Gia Khánh" />
        <meta
          property="og:description"
          content="Ô Tô Gia Khánh – đơn vị chuyên đồng sơn, điện – điều hòa, máy – gầm, bảo dưỡng, cứu hộ, làm bảo hiểm ô tô uy tín."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
      </Head>

      <main className="bg-gray-50">
        {/* HERO */}
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
                        Gara “anh em” nhưng làm việc chuyên nghiệp.
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

        {/* STATS */}
        <section className="border-b border-gray-200 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-xs text-gray-400 uppercase">Kinh nghiệm</p>
              <p className="text-xl font-semibold">Nhiều năm</p>
              <p className="text-xs text-gray-300">
                Làm việc thực tế với nhiều dòng xe.
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase">Lĩnh vực</p>
              <p className="text-xl font-semibold">Đồng – Sơn</p>
              <p className="text-xs text-gray-300">
                Mạnh nhất về xử lý va quẹt, sơn xe.
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase">Hỗ trợ</p>
              <p className="text-xl font-semibold">Cứu hộ 24/7</p>
              <p className="text-xs text-gray-300">
                Gọi là có mặt, không kể giờ giấc.
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase">Bảo hiểm</p>
              <p className="text-xl font-semibold">Không thu tiền vụ</p>
              <p className="text-xs text-gray-300">
                Hỗ trợ từ A–Z, tối ưu quyền lợi khách.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT TEXT + CORE FIELDS */}
        <section className="max-w-6xl mx-auto px-4 py-10 md:py-14 space-y-10">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Về Công Ty TNHH Ô Tô Gia Khánh
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Gia Khánh là đơn vị chuyên đồng – sơn, điện – điều hòa, máy –
                gầm, làm bảo hiểm và cứu hộ ô tô. Chúng tôi xây dựng gara theo
                hướng: gần gũi, dễ trao đổi như anh em, nhưng quy trình làm
                việc rõ ràng và chuyên nghiệp.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Từ những ca va quẹt nhỏ, trầy xước nhẹ cho tới tai nạn nặng, xe
                ngập nước, thủy kích… đội ngũ kỹ thuật luôn cố gắng mang lại
                phương án xử lý hợp lý, an toàn và tối ưu chi phí cho khách.
              </p>

              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  Tập trung vào chất lượng tay nghề và thái độ phục vụ.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  Tư vấn rõ ràng, không ép làm những hạng mục không cần thiết.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  Luôn ưu tiên an toàn và lợi ích lâu dài cho khách hàng.
                </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-white border border-gray-200 p-4 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
                  <Wrench className="w-3 h-3" />
                  Lĩnh vực chính
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>Đồng – sơn ô tô, phục hồi thân vỏ</li>
                  <li>Sửa chữa máy – gầm, điện – điều hòa</li>
                  <li>Chăm sóc – làm đẹp xe, phủ ceramic</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white border border-gray-200 p-4 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
                  <ShieldCheck className="w-3 h-3" />
                  Bảo hiểm & cứu hộ
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>Làm bảo hiểm, hỗ trợ hồ sơ, không thu tiền vụ</li>
                  <li>Cứu hộ 24/7, hỗ trợ tận nơi</li>
                  <li>Xử lý tai nạn, va quẹt, ngập nước, thủy kích</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CORE VALUES */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Giá trị cốt lõi
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="rounded-2xl bg-white border border-gray-200 p-4 space-y-2">
                <p className="text-xs font-semibold text-red-700 uppercase">
                  Minh bạch
                </p>
                <p className="font-semibold text-gray-900">
                  Báo đúng, làm đúng, giải thích rõ.
                </p>
                <p className="text-gray-600 text-sm">
                  Mọi hạng mục đều được giải thích và thống nhất trước khi làm.
                  Không tự ý phát sinh chi phí khiến khách khó chịu.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-gray-200 p-4 space-y-2">
                <p className="text-xs font-semibold text-red-700 uppercase">
                  Tận tâm
                </p>
                <p className="font-semibold text-gray-900">
                  Xử lý như xe của chính mình.
                </p>
                <p className="text-gray-600 text-sm">
                  Dù là va quẹt nhỏ hay tai nạn nặng, chúng tôi đều cố gắng xử
                  lý chỉn chu và hỗ trợ khách đến cùng.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-gray-200 p-4 space-y-2">
                <p className="text-xs font-semibold text-red-700 uppercase">
                  Đồng hành
                </p>
                <p className="font-semibold text-gray-900">
                  Không chỉ sửa – mà còn tư vấn lâu dài.
                </p>
                <p className="text-gray-600 text-sm">
                  Hướng dẫn cách sử dụng, bảo dưỡng để xe bền, tiết kiệm và
                  hạn chế hư hỏng về sau.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS + SCENARIOS */}
        <section className="border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Khi nào nên tìm đến Gia Khánh?
              </h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-700" />
                  Xe bị va quẹt, trầy xước, móp méo, cần làm đẹp lại.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-700" />
                  Điều hòa không mát, máy yếu, xe rung, có tiếng kêu lạ.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-700" />
                  Xe gặp tai nạn, cần làm bảo hiểm vật chất.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-700" />
                  Xe bị ngập nước, thủy kích hoặc chết máy giữa đường.
                </li>
              </ul>

              <div className="grid sm:grid-cols-2 gap-4 text-sm pt-2">
                <div className="rounded-2xl bg-red-50 border border-red-100 p-4 space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-red-700">
                    <Droplets className="w-4 h-4" />
                    Ngập nước – thủy kích
                  </div>
                  <p className="text-gray-700">
                    Tuyệt đối không cố đề nổ nhiều lần. Gọi cứu hộ hoặc liên hệ
                    gara để được hướng dẫn xử lý ban đầu.
                  </p>
                </div>
                <div className="rounded-2xl bg-yellow-50 border border-yellow-100 p-4 space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-yellow-700">
                    <LifeBuoy className="w-4 h-4" />
                    Cứu hộ 24/7
                  </div>
                  <p className="text-gray-700">
                    Hỗ trợ kéo xe, xử lý sự cố tại chỗ trong khả năng, đưa xe
                    về gara an toàn nếu cần sửa chữa sâu.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Quy trình làm việc
              </h2>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Tiếp nhận & lắng nghe
                    </p>
                    <p className="text-gray-600">
                      Ghi nhận tình trạng xe, nhu cầu và mong muốn của khách
                      hàng.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Kiểm tra & tư vấn
                    </p>
                    <p className="text-gray-600">
                      Kiểm tra thực tế, chẩn đoán nguyên nhân và đưa ra phương
                      án xử lý phù hợp.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Báo giá minh bạch
                    </p>
                    <p className="text-gray-600">
                      Thống nhất chi phí và thời gian dự kiến trước khi bắt đầu
                      sửa chữa.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                    4
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Thi công & kiểm tra
                    </p>
                    <p className="text-gray-600">
                      Thực hiện hạng mục đã thống nhất, chạy thử và kiểm tra
                      kỹ trước khi bàn giao.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                    5
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Bàn giao & chăm sóc sau sửa chữa
                    </p>
                    <p className="text-gray-600">
                      Giải thích hạng mục đã làm, hướng dẫn sử dụng và bảo
                      dưỡng, nhắc lịch trong những lần tiếp theo.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* CONTACT / INFO */}
        <section className="bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid md:grid-cols-[1.5fr,1fr] gap-8 items-center">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Liên hệ gara
              </p>
              <h2 className="text-xl md:text-2xl font-bold">
                Sẵn sàng hỗ trợ anh em mọi lúc – chỉ cần gọi, Gia Khánh xử lý.
              </h2>
              <p className="text-sm text-gray-300 max-w-xl">
                Dù xe đang gặp vấn đề gì: va quẹt, máy yếu, điều hòa không mát,
                ngập nước hay cần cứu hộ… hãy cứ liên hệ, chúng tôi sẽ tư vấn
                hướng xử lý phù hợp nhất.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="rounded-2xl bg-gray-800 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs uppercase tracking-wide text-gray-400">
                    Hotline
                  </span>
                </div>
                <a
                  href="tel:09xxxxxxxx"
                  className="text-lg font-semibold text-yellow-300"
                >
                  09xx xxx xxx
                </a>
                <p className="text-gray-400 text-xs">
                  Có hỗ trợ ngoài giờ và cứu hộ 24/7 tùy khu vực.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-800 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs uppercase tracking-wide text-gray-400">
                    Địa chỉ gara
                  </span>
                </div>
                <p className="text-sm">
                  [Điền địa chỉ gara của bạn tại đây để khách dễ tìm]
                </p>
              </div>

              <div className="rounded-2xl bg-gray-800 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs uppercase tracking-wide text-gray-400">
                    Thời gian làm việc
                  </span>
                </div>
                <p className="text-sm">
                  7:30 – 19:00 mỗi ngày. Có hỗ trợ ngoài giờ và cứu hộ theo yêu
                  cầu.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
