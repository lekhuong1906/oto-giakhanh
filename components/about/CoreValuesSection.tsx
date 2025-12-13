interface CoreValue {
  title: string;
  subtitle: string;
  description: string;
}

interface CoreValuesSectionProps {
  title: string;
  values: CoreValue[];
}

export default function CoreValuesSection({ title, values }: CoreValuesSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        {values.map((value, index) => (
          <div key={index} className="rounded-2xl bg-white border border-gray-200 p-4 space-y-2">
            <p className="text-xs font-semibold text-red-700 uppercase">{value.title}</p>
            <p className="font-semibold text-gray-900">{value.subtitle}</p>
            <p className="text-gray-600 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}