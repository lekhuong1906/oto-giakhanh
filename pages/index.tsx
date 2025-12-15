// pages/index.tsx
import Seo from "../components/seo/Seo"
import SerViceSlideShow from "@/components/home/ServicesSlideShow"
import ActivityCarousel from "@/components/home/ActivityCarousel"
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection"
import ProcessSection from "@/components/home/ProcessSection"
import CustomerReviewsSection from "@/components/home/CustomerReviewsSection"
import HeroSection from "@/components/home/HeroSection"

export default function HomePage() {
  const customerReviews = [
    {
      name: "Anh Minh",
      rating: 5,
      comment: "Dịch vụ rất chuyên nghiệp, kỹ thuật viên tận tình. Xe mình bị va quẹt nặng nhưng sửa xong như mới. Giá cả hợp lý, minh bạch.",
      date: "15/11/2024",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Chị Lan",
      rating: 5,
      comment: "Gia Khánh cứu hộ kịp thời khi xe mình chết máy giữa đường. Cứu hộ 24/7 đúng như quảng cáo. Rất đáng tin cậy!",
      date: "22/11/2024",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Anh Tuấn",
      rating: 4,
      comment: "Làm bảo hiểm rất hỗ trợ, không thu tiền vụ. Tư vấn rõ ràng, xử lý nhanh chóng. Chỉ có điều chờ hơi lâu nhưng chất lượng tốt.",
      date: "08/12/2024",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Anh Huy",
      rating: 5,
      comment: "Đồng sơn rất đẹp, màu xe như mới. Kỹ thuật viên có tâm, giải thích từng bước làm. Rất hài lòng!",
      date: "01/12/2024",
    },
    {
      name: "Chị Mai",
      rating: 5,
      comment: "Sửa chữa máy gầm, điện điều hòa rất chuyên nghiệp. Báo giá trước, không phát sinh. Uy tín!",
      date: "18/11/2024",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Anh Sơn",
      rating: 4,
      comment: "Cứu hộ nhanh, hỗ trợ tận tình. Xe ngập nước nhưng được xử lý kịp thời. Cảm ơn Gia Khánh!",
      date: "25/11/2024",
    },
    {
      name: "Chị Linh",
      rating: 5,
      comment: "Làm đẹp xe, phủ ceramic rất chất lượng. Tư vấn nhiệt tình, giá hợp lý. Sẽ quay lại!",
      date: "10/12/2024",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Anh Đức",
      rating: 5,
      comment: "Bảo hiểm vật chất, hỗ trợ hồ sơ đầy đủ. Không thu tiền vụ, đúng như cam kết. Tốt!",
      date: "05/12/2024",
    },
  ];

  return (
    <>
      <Seo
        title="Phụ Tùng & Dịch Vụ Ô Tô"
        description="Chuyên phụ tùng, phụ kiện ô tô chính hãng và dịch vụ sửa chữa uy tín tại Gia Lai. Top 10 gara uy tín - Đồng sơn, điện máy, bảo dưỡng, cứu hộ 24/7, làm bảo hiểm không thu tiền vụ."
        url="/"
        keywords="phụ tùng ô tô Gia Lai, gara ô tô uy tín, sửa chữa ô tô, đồng sơn ô tô, cứu hộ ô tô 24/7, bảo hiểm ô tô, bảo dưỡng ô tô, Top 10 gara Gia Lai"
      />

      <HeroSection />
      <WhyChooseUsSection />
      <SerViceSlideShow />
      <ProcessSection />
      <CustomerReviewsSection reviews={customerReviews} />
      <ActivityCarousel />
    </>
  )
}
