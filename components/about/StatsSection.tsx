interface StatItem {
  label: string;
  value: string;
  description: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="border-b border-gray-200 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-xs text-gray-400 uppercase">{stat.label}</p>
            <p className="text-xl font-semibold">{stat.value}</p>
            <p className="text-xs text-gray-300">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}