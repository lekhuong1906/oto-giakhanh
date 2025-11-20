import { IconName } from "./icons";

export type Service = {
  id: number;
  slug: string;
  title: string;
  icon: IconName;
  short: string;
  details: string[];
  estTime: string;
  seoTitle: string;
  seoDescription: string;
  heroIntro: string;
  whyUs: string[];
  idealFor: string[];
  processSteps: string[];
};

export const services: Service[] = [
  {
    id: 1,
    slug: "bao-duong-dinh-ky",
    title: "Bảo dưỡng định kỳ",
    icon: "Wrench",
    short:
      "Thay dầu, kiểm tra tổng thể giúp xe vận hành ổn định và tăng tuổi thọ động cơ.",
    details: [
      "Thay dầu nhớt, lọc dầu, lọc gió động cơ",
      "Kiểm tra phanh, lốp, hệ thống lái và treo",
      "Kiểm tra ắc quy, nước làm mát, dung dịch",
    ],
    estTime: "2–4 giờ",
    seoTitle: "Bảo dưỡng định kỳ ô tô – Giúp xe luôn vận hành êm ái",
    seoDescription:
      "Dịch vụ bảo dưỡng định kỳ ô tô tại Ô Tô Gia Khánh: thay dầu, kiểm tra phanh, lốp, gầm, điện giúp xe hoạt động ổn định và bền bỉ.",
    heroIntro:
      "Bảo dưỡng định kỳ là cách đơn giản và hiệu quả nhất để giữ cho chiếc xe của bạn luôn vận hành ổn định, tiết kiệm nhiên liệu và hạn chế hư hỏng lớn về sau. Tại Ô Tô Gia Khánh, mọi hạng mục bảo dưỡng đều được thực hiện theo khuyến cáo của nhà sản xuất, sử dụng dầu nhớt và vật tư chất lượng.",
    whyUs: [
      "Quy trình bảo dưỡng rõ ràng, minh bạch từng hạng mục",
      "Tư vấn theo tình trạng thực tế xe, không vẽ việc",
      "Dầu nhớt, phụ tùng chính hãng hoặc thương hiệu uy tín",
      "Có lịch nhắc bảo dưỡng cho khách hàng thân thiết",
    ],
    idealFor: [
      "Xe mới cần bảo dưỡng theo số km đầu tiên",
      "Xe chạy dịch vụ cần kiểm tra thường xuyên",
      "Xe sử dụng lâu ngày nhưng chưa từng bảo dưỡng tổng thể",
    ],
    processSteps: [
      "Tiếp nhận xe, trao đổi nhu cầu & số km đã chạy",
      "Kiểm tra nhanh toàn xe: dầu, nước, phanh, lốp, gầm, đèn",
      "Báo giá chi tiết từng hạng mục cần làm",
      "Tiến hành thay dầu, vệ sinh, siết lại các chi tiết cần thiết",
      "Chạy thử, kiểm tra lần cuối và bàn giao xe cho khách",
    ],
  },
  {
    id: 2,
    slug: "sua-chua-may-gam",
    title: "Sửa chữa máy – gầm",
    icon: "ShieldCheck",
    short:
      "Chẩn đoán và sửa chữa động cơ, hộp số, gầm xe với thiết bị hiện đại.",
    details: [
      "Đọc lỗi, kiểm tra bằng máy chuyên dụng",
      "Sửa chữa, đại tu động cơ – hộp số",
      "Xử lý tiếng kêu, rung lắc bất thường",
    ],
    estTime: "Tùy mức độ",
    seoTitle: "Sửa chữa máy – gầm ô tô – Chẩn đoán chính xác, xử lý triệt để",
    seoDescription:
      "Dịch vụ sửa chữa máy – gầm ô tô tại Ô Tô Gia Khánh: kiểm tra bằng máy chẩn đoán, xử lý tiếng kêu, rung lắc, đại tu động cơ – hộp số.",
    heroIntro:
      "Máy và gầm là ‘trái tim’ của chiếc xe. Chỉ cần một tiếng kêu lạ hay cảm giác rung bất thường cũng có thể là dấu hiệu của hư hỏng nghiêm trọng. Chúng tôi sử dụng máy chẩn đoán hiện đại kết hợp kinh nghiệm thực tế để tìm đúng nguyên nhân và đưa ra phương án sửa chữa tối ưu.",
    whyUs: [
      "Có máy chẩn đoán, đọc lỗi chuẩn từng dòng xe",
      "Kỹ thuật có kinh nghiệm về động cơ, hộp số, gầm",
      "Tư vấn nhiều phương án phù hợp ngân sách",
      "Bảo hành rõ ràng theo từng hạng mục sửa chữa",
    ],
    idealFor: [
      "Xe có tiếng kêu lạ ở gầm, gõ máy, rung vô-lăng",
      "Động cơ yếu, hao xăng, hụt ga",
      "Xe bị ngập nước, nghi ngờ thủy kích động cơ",
    ],
    processSteps: [
      "Lái thử xe để ghi nhận triệu chứng thực tế",
      "Kết nối máy chẩn đoán, kiểm tra mã lỗi",
      "Tháo kiểm tra bộ phận nghi ngờ (nếu cần)",
      "Báo giá chi tiết từng hạng mục và thời gian hoàn thành",
      "Tiến hành sửa chữa, chạy thử, kiểm tra và bàn giao",
    ],
  },
  {
    id: 3,
    slug: "dien-dieu-hoa",
    title: "Điện – điều hòa – tiện ích",
    icon: "ThermometerSun",
    short:
      "Kiểm tra và sửa chữa hệ thống điện, điều hòa và các tiện ích trên xe.",
    details: [
      "Sửa điều hòa không mát, có mùi, chảy nước",
      "Xử lý đèn, kính, gương, khóa điện",
      "Lắp đặt, sửa các thiết bị điện tử, màn hình, camera",
    ],
    estTime: "2–6 giờ",
    seoTitle: "Sửa điện, điều hòa ô tô – Lạnh sâu, vận hành ổn định",
    seoDescription:
      "Dịch vụ điện – điều hòa ô tô tại Ô Tô Gia Khánh: sửa điều hòa không mát, xử lý chập điện, đèn, kính, gương, màn hình, camera.",
    heroIntro:
      "Hệ thống điện và điều hòa quyết định sự thoải mái và an toàn khi sử dụng xe. Từ điều hòa không mát, đèn báo lỗi, kính – gương không hoạt động cho tới các hệ thống tiện ích như màn hình, camera, cảm biến… đều cần kỹ thuật có chuyên môn để xử lý đúng cách.",
    whyUs: [
      "Thiết bị đo đạc, kiểm tra mạch điện chuyên dụng",
      "Xử lý triệt để, không đấu nối tạm bợ gây chập cháy",
      "Có kinh nghiệm với nhiều dòng xe phổ thông và cao cấp",
      "Nhận nâng cấp thêm các tiện ích: màn hình, camera, cảm biến",
    ],
    idealFor: [
      "Điều hòa không lạnh sâu, có mùi, chảy nước",
      "Đèn báo lỗi trên táp-lô, hệ thống điện chập chờn",
      "Muốn nâng cấp màn hình, camera lùi, camera 360",
    ],
    processSteps: [
      "Tiếp nhận xe và lắng nghe mô tả tình trạng từ khách",
      "Kiểm tra sơ bộ, dùng thiết bị đo/ máy chẩn đoán nếu cần",
      "Xác định nguyên nhân, tư vấn phương án sửa chữa/ nâng cấp",
      "Tiến hành xử lý, test lại nhiều lần",
      "Bàn giao xe và hướng dẫn khách sử dụng, bảo quản",
    ],
  },
  {
    id: 4,
    slug: "do-xe-nang-cap",
    title: "Độ xe – nâng cấp phụ kiện",
    icon: "Sparkles",
    short:
      "Độ ngoại thất, nội thất, ánh sáng và phụ kiện theo phong cách riêng.",
    details: [
      "Độ đèn bi, LED, bodykit, mâm lốp",
      "Dán film cách nhiệt, phủ ceramic, phủ gầm",
      "Bọc ghế da, thảm sàn, nâng cấp âm thanh",
    ],
    estTime: "Theo gói độ",
    seoTitle: "Độ xe, nâng cấp phụ kiện ô tô – Đậm chất riêng của bạn",
    seoDescription:
      "Dịch vụ độ xe, nâng cấp phụ kiện tại Ô Tô Gia Khánh: độ đèn, bodykit, nội thất, âm thanh, dán film, phủ ceramic, phủ gầm.",
    heroIntro:
      "Chiếc xe không chỉ là phương tiện di chuyển mà còn thể hiện phong cách của chủ xe. Gia Khánh cung cấp nhiều gói độ và nâng cấp phụ kiện giúp xe đẹp hơn, tiện nghi hơn nhưng vẫn đảm bảo an toàn và tính kỹ thuật.",
    whyUs: [
      "Tư vấn phong cách độ phù hợp với từng dòng xe",
      "Thi công kỹ, đi dây gọn, không cắt phá cấu trúc xe",
      "Sử dụng vật tư, phụ kiện chính hãng hoặc thương hiệu uy tín",
      "Chế độ bảo hành rõ ràng cho từng hạng mục độ",
    ],
    idealFor: [
      "Muốn nâng cấp ánh sáng, đèn bi, đèn LED",
      "Muốn xe mát hơn, nội thất sạch hơn nhờ dán film, phủ ceramic",
      "Muốn nâng cấp âm thanh, bọc ghế da, làm lại nội thất",
    ],
    processSteps: [
      "Tư vấn theo nhu cầu và ngân sách của khách",
      "Lên phương án độ chi tiết, chọn mẫu và vật tư",
      "Đặt lịch thi công, chuẩn bị phụ kiện",
      "Tiến hành lắp đặt, căn chỉnh, hoàn thiện",
      "Bàn giao xe, hướng dẫn sử dụng và bảo hành",
    ],
  },
  {
    id: 5,
    slug: "kiem-tra-truoc-khi-mua",
    title: "Kiểm tra xe trước khi mua",
    icon: "Car",
    short:
      "Đánh giá xe cũ toàn diện trước khi mua – tránh xe lỗi, tai nạn, thủy kích.",
    details: [
      "Kiểm tra khung gầm, dấu hiệu tai nạn, đâm đụng",
      "Đánh giá động cơ, hộp số, hệ thống điện",
      "Tư vấn tình trạng tổng thể, báo cáo chi tiết",
    ],
    estTime: "1.5–3 giờ",
    seoTitle: "Kiểm tra xe cũ trước khi mua – Tránh rủi ro, mua nhầm xe lỗi",
    seoDescription:
      "Dịch vụ kiểm tra xe trước khi mua tại Ô Tô Gia Khánh: soi khung gầm, động cơ, hộp số, điện, tai nạn, thủy kích, báo cáo chi tiết.",
    heroIntro:
      "Mua xe cũ nếu không kiểm tra kỹ rất dễ gặp phải xe tai nạn, xe ngập nước hoặc xe đã từng đại tu nặng. Chúng tôi hỗ trợ kiểm tra tổng thể chiếc xe bạn định mua để hạn chế tối đa rủi ro.",
    whyUs: [
      "Kiểm tra kỹ khung gầm, dấu hiệu tai nạn, cắt nối",
      "Đánh giá động cơ, hộp số, điện, các hệ thống an toàn",
      "Báo cáo trung thực, tư vấn khách nên mua hay không",
    ],
    idealFor: [
      "Người chuẩn bị mua xe cũ nhưng không rành kỹ thuật",
      "Người muốn có đánh giá khách quan trước khi quyết định",
    ],
    processSteps: [
      "Tiếp nhận thông tin xe cần kiểm tra",
      "Hẹn lịch kiểm tra tại gara hoặc nơi xem xe",
      "Tiến hành kiểm tra tổng thể trong và ngoài xe",
      "Lập báo cáo nhanh và tư vấn trực tiếp cho khách",
    ],
  },
  {
    id: 6,
    slug: "dong-son-xe",
    title: "Đồng – sơn xe",
    icon: "Hammer",
    short:
      "Xử lý trầy xước, móp méo, va quẹt và sơn dặm – sơn full xe công nghệ cao.",
    details: [
      "Sửa móp vè, cản, nắn khung",
      "Sơn dặm – phục hồi chuẩn màu 100%",
      "Sơn full xe công nghệ phòng sơn khép kín",
    ],
    estTime: "1–3 ngày",
    seoTitle: "Đồng sơn ô tô – Sửa va quẹt, trầy xước, trả lại xe như mới",
    seoDescription:
      "Dịch vụ đồng sơn ô tô tại Ô Tô Gia Khánh: xử lý móp, méo, trầy xước, sơn dặm, sơn full xe bằng công nghệ phòng sơn hiện đại.",
    heroIntro:
      "Tai nạn nhẹ, va quẹt, trầy xước là chuyện khó tránh. Đồng – sơn chuẩn giúp chiếc xe lấy lại vẻ ngoài như mới, giữ được giá trị khi sử dụng lâu dài hoặc bán lại.",
    whyUs: [
      "Phòng sơn khép kín, hạn chế bụi, bề mặt sơn đẹp",
      "Pha màu chính xác theo mã sơn nhà sản xuất",
      "Kỹ thuật nắn đồng, chỉnh form chuẩn form ban đầu",
      "Bảo hành màu sơn, chống bong tróc, phai màu",
    ],
    idealFor: [
      "Xe bị va quẹt, trầy xước nhẹ hoặc móp mạnh",
      "Xe cần làm đẹp lại tổng thể để bán hoặc đi dịch vụ",
    ],
    processSteps: [
      "Khảo sát mức độ hư hại thân vỏ",
      "Báo giá chi tiết từng vị trí, từng tấm",
      "Tiến hành nắn đồng, xử lý bề mặt",
      "Sơn lót, sơn màu, sơn bóng và sấy",
      "Ráp lại chi tiết, đánh bóng hoàn thiện và bàn giao",
    ],
  },
  {
    id: 7,
    slug: "son-cong-nghe-cao",
    title: "Sơn ô tô công nghệ cao",
    icon: "SprayCan",
    short:
      "Phòng sơn tiêu chuẩn, phối màu chính xác, bề mặt bóng đẹp và bền màu lâu dài.",
    details: [
      "Phối màu chuẩn theo mã nhà sản xuất",
      "Sơn công nghệ cao – hạn chế bụi sơn",
      "Bảo hành màu sơn dài hạn",
    ],
    estTime: "1–3 ngày",
    seoTitle: "Sơn ô tô công nghệ cao – Chuẩn màu, bền đẹp theo thời gian",
    seoDescription:
      "Dịch vụ sơn ô tô công nghệ cao tại Ô Tô Gia Khánh: phối màu chuẩn hãng, phòng sơn tiêu chuẩn, bề mặt sơn bóng và bền.",
    heroIntro:
      "Khi sơn lại xe, điều quan trọng nhất là màu sơn phải trùng với màu nguyên bản, bề mặt sơn mịn, bóng và bền màu. Chúng tôi sử dụng buồng sơn – sấy và hệ thống pha màu theo tiêu chuẩn để đảm bảo chất lượng cuối cùng.",
    whyUs: [
      "Phòng sơn, buồng sấy tiêu chuẩn",
      "Màu sơn pha theo máy, chuẩn gần như tuyệt đối",
      "Kỹ thuật mài – chà – sơn – đánh bóng bài bản",
    ],
    idealFor: [
      "Xe bị trầy xước nhiều vị trí, cần sơn dặm",
      "Xe muốn đổi mới diện mạo, sơn lại tổng thể",
    ],
    processSteps: [
      "Tư vấn phạm vi sơn: dặm từng chi tiết hoặc full xe",
      "Chuẩn bị bề mặt, xử lý lỗi cũ trước khi sơn",
      "Pha màu, phun sơn từng lớp: lót – màu – bóng",
      "Sấy, đánh bóng hoàn thiện và kiểm tra cuối",
    ],
  },
  {
    id: 8,
    slug: "thay-kinh-o-to",
    title: "Thay kính – xử lý kính vỡ",
    icon: "AppWindow",
    short:
      "Thay kính trước – sau – kính sườn, xử lý nứt vỡ an toàn theo tiêu chuẩn.",
    details: [
      "Thay kính trước/sau chính hãng",
      "Xử lý nứt nhỏ – khoan chống nứt",
      "Hiệu chỉnh cảm biến mưa/lane sau khi thay",
    ],
    estTime: "1–2 giờ",
    seoTitle: "Thay kính ô tô, xử lý kính vỡ – An toàn, thẩm mỹ cao",
    seoDescription:
      "Dịch vụ thay kính ô tô tại Ô Tô Gia Khánh: thay kính trước, kính sau, kính sườn, xử lý nứt vỡ, căn chỉnh cảm biến chuẩn.",
    heroIntro:
      "Kính xe không chỉ ảnh hưởng tới tầm nhìn mà còn liên quan trực tiếp tới an toàn. Khi kính bị nứt, vỡ hoặc mờ, việc thay thế đúng kỹ thuật là rất quan trọng.",
    whyUs: [
      "Nguồn kính rõ ràng, đảm bảo chất lượng",
      "Tháo lắp đúng quy trình, không làm hỏng ron, nội thất",
      "Căn lại cảm biến mưa, camera, lane assist (nếu có)",
    ],
    idealFor: [
      "Kính trước bị nứt, đá văng, cấn mạnh",
      "Kính sườn hoặc kính sau bị vỡ do va chạm",
    ],
    processSteps: [
      "Khảo sát mức độ nứt/vỡ kính",
      "Tư vấn thay mới hoặc xử lý chống nứt (nếu còn khả thi)",
      "Đặt kính và lịch hẹn (nếu cần)",
      "Tháo kính cũ, lắp kính mới, cân chỉnh lại các chi tiết liên quan",
    ],
  },
  {
    id: 9,
    slug: "ngap-nuoc-thuy-kich",
    title: "Khắc phục ngập nước – thủy kích",
    icon: "Droplets",
    short:
      "Xử lý xe ngập nước, thủy kích – cứu hộ và phục hồi động cơ an toàn.",
    details: [
      "Kiểm tra và xử lý phần điện – ECU",
      "Vệ sinh bướm ga, lọc gió, thay dầu",
      "Phục hồi động cơ sau thủy kích",
    ],
    estTime: "Tùy tình trạng",
    seoTitle: "Xử lý xe ngập nước, thủy kích – Cứu xe kịp thời, đúng cách",
    seoDescription:
      "Dịch vụ khắc phục xe ngập nước, thủy kích tại Ô Tô Gia Khánh: cứu hộ, xử lý động cơ, điện, thay dầu, làm sạch hệ thống.",
    heroIntro:
      "Xe ngập nước hoặc nghi ngờ thủy kích tuyệt đối không nên cố đề nổ nhiều lần. Cách xử lý ban đầu quyết định rất lớn đến mức độ hư hại và chi phí sửa chữa sau này.",
    whyUs: [
      "Có xe cứu hộ đưa xe về gara an toàn",
      "Quy trình xử lý thủy kích bài bản, hạn chế hư hỏng lan rộng",
      "Tư vấn trung thực mức độ hư hại và chi phí dự kiến",
    ],
    idealFor: [
      "Xe đi qua vùng ngập nước sâu, chết máy giữa đường",
      "Xe đã đề nổ trong tình trạng còn nước trong khoang máy",
    ],
    processSteps: [
      "Cứu hộ xe về gara (nếu cần)",
      "Tháo kiểm tra bugi, họng hút gió, dầu máy…",
      "Xử lý phần nước xâm nhập, làm sạch, thay dầu, lọc",
      "Đề nổ, theo dõi, đánh giá mức độ hư hại thực tế",
    ],
  },
  {
    id: 10,
    slug: "bao-hiem-o-to",
    title: "Làm bảo hiểm ô tô",
    icon: "ShieldCheck",
    short:
      "Hỗ trợ toàn bộ hồ sơ bảo hiểm, sửa chữa đúng quy trình, không thu tiền vụ.",
    details: [
      "Tiếp nhận xe và hỗ trợ hồ sơ bảo hiểm",
      "Giám định, làm việc với hãng bảo hiểm",
      "Sửa chữa – thay thế phụ tùng đúng tiêu chuẩn",
    ],
    estTime: "1–5 ngày",
    seoTitle: "Làm bảo hiểm ô tô – Không thu tiền vụ, xử lý A–Z",
    seoDescription:
      "Dịch vụ làm bảo hiểm ô tô tại Ô Tô Gia Khánh: hỗ trợ hồ sơ, giám định, sửa chữa, không thu tiền vụ, đúng quy trình hãng.",
    heroIntro:
      "Khi xảy ra va chạm, thủ tục bảo hiểm thường mất thời gian và khá rắc rối. Gia Khánh hỗ trợ khách hàng từ khâu hồ sơ tới sửa chữa hoàn thiện, giúp bạn tiết kiệm công sức và chi phí.",
    whyUs: [
      "Kinh nghiệm làm việc với nhiều hãng bảo hiểm khác nhau",
      "Không thu tiền vụ, hỗ trợ tối đa quyền lợi cho khách",
      "Sửa chữa theo đúng quy trình, phụ tùng rõ nguồn gốc",
    ],
    idealFor: [
      "Xe bị tai nạn, trầy móp, vỡ đèn, vỡ kính",
      "Xe có bảo hiểm vật chất và muốn tận dụng quyền lợi",
    ],
    processSteps: [
      "Tiếp nhận xe và chụp ảnh hiện trạng",
      "Hỗ trợ khách hàng khai báo, làm hồ sơ bảo hiểm",
      "Làm việc với giám định viên, chốt phương án sửa",
      "Tiến hành sửa chữa, thay thế phụ tùng",
      "Bàn giao xe hoàn thiện cho khách",
    ],
  },
  {
    id: 11,
    slug: "cuu-ho-24-7",
    title: "Cứu hộ 24/7",
    icon: "LifeBuoy",
    short:
      "Hỗ trợ tận nơi mọi lúc – xử lý sự cố nhanh: tai nạn, chết máy, ngập nước.",
    details: [
      "Cứu hộ xe chết máy, sự cố bất ngờ",
      "Hỗ trợ tai nạn – va quẹt – kẹt bánh",
      "Vận chuyển xe về gara an toàn",
    ],
    estTime: "Tùy vị trí",
    seoTitle: "Cứu hộ ô tô 24/7 – Gọi là có mặt",
    seoDescription:
      "Dịch vụ cứu hộ ô tô 24/7 tại Ô Tô Gia Khánh: hỗ trợ tại chỗ, kéo xe, xử lý tai nạn, ngập nước, chết máy.",
    heroIntro:
      "Xe hư giữa đường, đặc biệt là ban đêm hoặc trời mưa, là trải nghiệm không dễ chịu chút nào. Dịch vụ cứu hộ 24/7 của Gia Khánh luôn sẵn sàng hỗ trợ bạn mọi lúc mọi nơi.",
    whyUs: [
      "Hỗ trợ nhanh trong khu vực hoạt động",
      "Có thể xử lý tạm thời tại chỗ tùy tình huống",
      "Kéo xe về gara hoặc địa điểm khách yêu cầu",
    ],
    idealFor: [
      "Xe chết máy, nổ lốp, không thể tiếp tục di chuyển",
      "Xe bị tai nạn, cần vận chuyển an toàn",
    ],
    processSteps: [
      "Tiếp nhận cuộc gọi, ghi nhận vị trí và tình trạng xe",
      "Tư vấn cách xử lý tạm thời an toàn cho khách hàng",
      "Điều xe cứu hộ hoặc kỹ thuật tới hiện trường",
      "Xử lý tại chỗ hoặc kéo xe về gara để sửa chữa",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
