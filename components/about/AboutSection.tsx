import { Wrench, ShieldCheck } from "lucide-react";

interface ServiceField {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

interface AboutSectionProps {
  title: string;
  description: string[];
  commitments: string[];
  serviceFields: ServiceField[];
}

export default function AboutSection({
  title,
  description,
  commitments,
  serviceFields,
}: AboutSectionProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14 space-y-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
          {description.map((para, index) => (
            <p key={index} className="text-gray-600 text-sm md:text-base leading-relaxed">
              {para}
            </p>
          ))}

          <ul className="space-y-2 text-sm text-gray-700">
            {commitments.map((commitment, index) => (
              <li key={index} className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-600" />
                {commitment}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          {serviceFields.map((field, index) => (
            <div key={index} className="rounded-2xl bg-white border border-gray-200 p-4 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
                {field.icon}
                {field.title}
              </div>
              <ul className="space-y-2 text-gray-700">
                {field.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}