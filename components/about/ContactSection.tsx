import { PhoneCall, MapPin, Clock } from "lucide-react";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  content: string;
  subContent?: string;
}

interface ContactSectionProps {
  title: string;
  subtitle: string;
  description: string;
  contactInfos: ContactInfo[];
}

export default function ContactSection({
  title,
  subtitle,
  description,
  contactInfos,
}: ContactSectionProps) {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid md:grid-cols-[1.5fr,1fr] gap-8 items-center">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wide text-gray-400">{subtitle}</p>
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          <p className="text-sm text-gray-300 max-w-xl">{description}</p>
        </div>

        <div className="space-y-3 text-sm">
          {contactInfos.map((info, index) => (
            <div key={index} className="rounded-2xl bg-gray-800 p-4 space-y-2">
              <div className="flex items-center gap-2">
                {info.icon}
                <span className="text-xs uppercase tracking-wide text-gray-400">{info.label}</span>
              </div>
              <p className="text-sm">{info.content}</p>
              {info.subContent && (
                <p className="text-gray-400 text-xs">{info.subContent}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}