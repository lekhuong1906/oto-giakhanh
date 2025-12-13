import Head from "next/head";
import HeroSection from "../../components/about/HeroSection";
import StatsSection from "../../components/about/StatsSection";
import AboutSection from "../../components/about/AboutSection";
import CoreValuesSection from "../../components/about/CoreValuesSection";
import ProcessScenariosSection from "../../components/about/ProcessScenariosSection";
import ContactSection from "../../components/about/ContactSection";
import { Wrench, ShieldCheck, Droplets, LifeBuoy, PhoneCall, MapPin, Clock } from "lucide-react";

export default function AboutPage() {
  const pageUrl = "https://oto-giakhanh.vercel.app/gioi-thieu";

  const stats = [
    {
      label: "Kinh nghiệm",
      value: "Nhiều năm",
      description: "Làm việc thực tế với nhiều dòng xe.",
    },
    {
      label: "Lĩnh vực",
      value: "Đồng – Sơn",
      description: "Mạnh nhất về xử lý va quẹt, sơn xe.",
    },
    {
      label: "Hỗ trợ",
      value: "Cứu hộ 24/7",
      description: "Gọi là có mặt, không kể giờ giấc.",
    },
    {
      label: "Bảo hiểm",
      value: "Không thu tiền vụ",
      description: "Hỗ trợ từ A–Z, tối ưu quyền lợi khách.",
    },
  ];

  const serviceFields = [
    {
      title: "Lĩnh vực chính",
      icon: <Wrench className="w-3 h-3" />,
      items: [
        "Đồng – sơn ô tô, phục hồi thân vỏ",
        "Sửa chữa máy – gầm, điện – điều hòa",
        "Chăm sóc – làm đẹp xe, phủ ceramic",
      ],
    },
    {
      title: "Bảo hiểm & cứu hộ",
      icon: <ShieldCheck className="w-3 h-3" />,
      items: [
        "Làm bảo hiểm, hỗ trợ hồ sơ, không thu tiền vụ",
        "Cứu hộ 24/7, hỗ trợ tận nơi",
        "Xử lý tai nạn, va quẹt, ngập nước, thủy kích",
      ],
    },
  ];

  const coreValues = [
    {
      title: "Minh bạch",
      subtitle: "Báo đúng, làm đúng, giải thích rõ.",
      description:
        "Mọi hạng mục đều được giải thích và thống nhất trước khi làm. Không tự ý phát sinh chi phí khiến khách khó chịu.",
    },
    {
      title: "Tận tâm",
      subtitle: "Xử lý như xe của chính mình.",
      description:
        "Dù là va quẹt nhỏ hay tai nạn nặng, chúng tôi đều cố gắng xử lý chỉn chu và hỗ trợ khách đến cùng.",
    },
    {
      title: "Đồng hành",
      subtitle: "Không chỉ sửa – mà còn tư vấn lâu dài.",
      description:
        "Hướng dẫn cách sử dụng, bảo dưỡng để xe bền, tiết kiệm và hạn chế hư hỏng về sau.",
    },
  ];

  const scenarios = [
    {
      title: "Ngập nước – thủy kích",
      icon: <Droplets className="w-4 h-4" />,
      description:
        "Tuyệt đối không cố đề nổ nhiều lần. Gọi cứu hộ hoặc liên hệ gara để được hướng dẫn xử lý ban đầu.",
    },
    {
      title: "Cứu hộ 24/7",
      icon: <LifeBuoy className="w-4 h-4" />,
      description:
        "Hỗ trợ kéo xe, xử lý sự cố tại chỗ trong khả năng, đưa xe về gara an toàn nếu cần sửa chữa sâu.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Tiếp nhận & lắng nghe",
      description: "Ghi nhận tình trạng xe, nhu cầu và mong muốn của khách hàng.",
    },
    {
      step: 2,
      title: "Kiểm tra & tư vấn",
      description: "Kiểm tra thực tế, chẩn đoán nguyên nhân và đưa ra phương án xử lý phù hợp.",
    },
    {
      step: 3,
      title: "Báo giá minh bạch",
      description: "Thống nhất chi phí và thời gian dự kiến trước khi bắt đầu sửa chữa.",
    },
    {
      step: 4,
      title: "Thi công & kiểm tra",
      description: "Thực hiện hạng mục đã thống nhất, chạy thử và kiểm tra kỹ trước khi bàn giao.",
    },
    {
      step: 5,
      title: "Bàn giao & chăm sóc sau sửa chữa",
      description: "Giải thích hạng mục đã làm, hướng dẫn sử dụng và bảo dưỡng, nhắc lịch trong những lần tiếp theo.",
    },
  ];

  const contactInfos = [
    {
      icon: <PhoneCall className="w-4 h-4 text-yellow-400" />,
      label: "Hotline",
      content: "09xx xxx xxx",
      subContent: "Có hỗ trợ ngoài giờ và cứu hộ 24/7 tùy khu vực.",
    },
    {
      icon: <MapPin className="w-4 h-4 text-yellow-400" />,
      label: "Địa chỉ gara",
      content: "[Điền địa chỉ gara của bạn tại đây để khách dễ tìm]",
    },
    {
      icon: <Clock className="w-4 h-4 text-yellow-400" />,
      label: "Thời gian làm việc",
      content: "7:30 – 19:00 mỗi ngày. Có hỗ trợ ngoài giờ và cứu hộ theo yêu cầu.",
    },
  ];

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
        <HeroSection pageUrl={pageUrl} />

        <StatsSection stats={stats} />

        <AboutSection
          title="Về Công Ty TNHH Ô Tô Gia Khánh"
          description={[
            "Gia Khánh là đơn vị chuyên đồng – sơn, điện – điều hòa, máy – gầm, làm bảo hiểm và cứu hộ ô tô. Chúng tôi xây dựng gara theo hướng: gần gũi, dễ trao đổi như anh em, nhưng quy trình làm việc rõ ràng và chuyên nghiệp.",
            "Từ những ca va quẹt nhỏ, trầy xước nhẹ cho tới tai nạn nặng, xe ngập nước, thủy kích… đội ngũ kỹ thuật luôn cố gắng mang lại phương án xử lý hợp lý, an toàn và tối ưu chi phí cho khách.",
          ]}
          commitments={[
            "Tập trung vào chất lượng tay nghề và thái độ phục vụ.",
            "Tư vấn rõ ràng, không ép làm những hạng mục không cần thiết.",
            "Luôn ưu tiên an toàn và lợi ích lâu dài cho khách hàng.",
          ]}
          serviceFields={serviceFields}
        />

        <CoreValuesSection title="Giá trị cốt lõi" values={coreValues} />

        <ProcessScenariosSection
          scenariosTitle="Khi nào nên tìm đến Gia Khánh?"
          scenariosList={[
            "Xe bị va quẹt, trầy xước, móp méo, cần làm đẹp lại.",
            "Điều hòa không mát, máy yếu, xe rung, có tiếng kêu lạ.",
            "Xe gặp tai nạn, cần làm bảo hiểm vật chất.",
            "Xe bị ngập nước, thủy kích hoặc chết máy giữa đường.",
          ]}
          scenarios={scenarios}
          processTitle="Quy trình làm việc"
          processSteps={processSteps}
        />

        <ContactSection
          title="Sẵn sàng hỗ trợ anh em mọi lúc – chỉ cần gọi, Gia Khánh xử lý."
          subtitle="Liên hệ gara"
          description="Dù xe đang gặp vấn đề gì: va quẹt, máy yếu, điều hòa không mát, ngập nước hay cần cứu hộ… hãy cứ liên hệ, chúng tôi sẽ tư vấn hướng xử lý phù hợp nhất."
          contactInfos={contactInfos}
        />
      </main>
    </>
  );
}
