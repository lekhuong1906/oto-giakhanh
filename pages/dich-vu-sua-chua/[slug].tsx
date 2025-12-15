import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Seo from "@/components/seo/Seo";
import Link from "next/link";
import { services, getServiceBySlug, Service } from "@/data/services";
import { iconMap } from "@/data/icons";

type Props = {
    service: Service;
};

const ServiceDetailPage: NextPage<Props> = ({ service }) => {
    const Icon = iconMap[service.icon]; // Map icon string → React component

    return (
        <>
            <Seo
                title={service.seoTitle.replace(" | Ô Tô Gia Khánh", "").replace(" – ", " - ")}
                description={service.seoDescription}
                url={`/dich-vu-sua-chua/${service.slug}`}
                keywords={`${service.title}, dịch vụ ${service.title.toLowerCase()}, ${service.title.toLowerCase()} tại Gia Lai, gara ${service.title.toLowerCase()}, Ô Tô Gia Khánh`}
                ogType="article"
            />

            <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
                {/* BREADCRUMB */}
                <nav className="text-sm text-gray-500 flex items-center gap-1">
                    <Link href="/" className="hover:text-red-700">
                        Trang chủ
                    </Link>
                    <span>/</span>

                    <Link href="/dich-vu-sua-chua" className="hover:text-red-700">
                        Dịch vụ sửa chữa
                    </Link>
                    <span>/</span>

                    <span className="text-gray-800 font-medium">{service.title}</span>
                </nav>

                {/* HERO */}
                <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="rounded-2xl bg-yellow-50 p-3">
                            <Icon className="w-10 h-10 text-red-700" />
                        </div>

                        <div className="flex-1 space-y-3">
                            <h1 className="text-2xl md:text-3xl font-bold text-yellow-700">
                                {service.title}
                            </h1>

                            <p className="text-gray-600 leading-relaxed text-base">
                                {service.heroIntro}
                            </p>

                            <div className="inline-flex items-center gap-2 bg-gray-100 text-sm px-4 py-1.5 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full" />
                                Dự kiến: {service.estTime}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="grid md:grid-cols-3 gap-8">
                    {/* LEFT CONTENT */}
                    <div className="md:col-span-2 space-y-10">
                        {/* DETAILS */}
                        <div>
                            <h2 className="text-lg font-semibold text-yellow-700 mb-3">
                                Hạng mục công việc
                            </h2>
                            <ul className="space-y-2">
                                {service.details.map((item) => (
                                    <li key={item} className="flex gap-2 text-gray-700">
                                        <span className="mt-1 w-1.5 h-1.5 bg-red-700 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* WHY US */}
                        <div>
                            <h2 className="text-lg font-semibold text-yellow-700 mb-3">
                                Vì sao nên chọn Ô Tô Gia Khánh?
                            </h2>
                            <ul className="space-y-2">
                                {service.whyUs.map((item) => (
                                    <li key={item} className="flex gap-2 text-gray-700">
                                        <span className="mt-1 w-1.5 h-1.5 bg-red-600 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* PROCESS */}
                        <div>
                            <h2 className="text-lg font-semibold text-yellow-700 mb-3">
                                Quy trình thực hiện
                            </h2>
                            <ol className="space-y-3">
                                {service.processSteps.map((step, index) => (
                                    <li key={step} className="flex gap-4 items-start">
                                        <span className="flex items-center justify-center bg-red-700 text-white font-semibold rounded-full w-7 h-7 text-xs mt-1">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray-700">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <aside className="space-y-7">
                        {/* CONTACT BOX */}
                        <div className="bg-yellow-800 text-white rounded-2xl p-6 space-y-3">
                            <h3 className="text-lg font-semibold">
                                Liên hệ {service.title}
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                Gọi ngay để được hỗ trợ nhanh chóng — hạn chế chờ đợi, có hỗ trợ ngoài giờ.
                            </p>

                            <div className="text-sm space-y-1">
                                <p>
                                    ☎ Hotline:{" "}
                                    <a
                                        href="tel:0973 874 677"
                                        className="font-semibold text-yellow-400"
                                    >
                                        0973 874 677
                                    </a>
                                </p>
                                <p>⏰ 7:30 – 19:00 (Hỗ trợ ngoài giờ)</p>
                            </div>
                        </div>

                        {/* IDEAL FOR */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6">
                            <h3 className="text-base font-semibold mb-3 text-yellow-700">
                                Phù hợp khi:
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {service.idealFor.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="mt-1 w-1.5 h-1.5 bg-red-700 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RELATED SERVICES */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6">
                            <h3 className="text-base font-semibold mb-3 text-yellow-700">
                                Dịch vụ liên quan
                            </h3>

                            <ul className="space-y-2 text-sm">
                                {services
                                    .filter((s) => s.slug !== service.slug)
                                    .slice(0, 4)
                                    .map((item) => {
                                        const RelatedIcon = iconMap[item.icon];
                                        return (
                                            <li key={item.slug}>
                                                <Link
                                                    href={`/dich-vu-sua-chua/${item.slug}`}
                                                    className="flex items-center gap-3 hover:text-red-700 text-gray-700"
                                                >
                                                    <span className="bg-gray-100 rounded-lg p-2">
                                                        <RelatedIcon className="w-4 h-4" />
                                                    </span>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </aside>
                </section>
            </main>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = services.map((s) => ({ params: { slug: s.slug } }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    const slug = ctx.params?.slug as string;
    const service = getServiceBySlug(slug);

    if (!service) {
        return { notFound: true };
    }

    return {
        props: { service },
    };
};

export default ServiceDetailPage;
