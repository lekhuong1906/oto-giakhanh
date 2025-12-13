import { Droplets, LifeBuoy } from "lucide-react";

interface Scenario {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProcessScenariosSectionProps {
  scenariosTitle: string;
  scenariosList: string[];
  scenarios: Scenario[];
  processTitle: string;
  processSteps: ProcessStep[];
}

export default function ProcessScenariosSection({
  scenariosTitle,
  scenariosList,
  scenarios,
  processTitle,
  processSteps,
}: ProcessScenariosSectionProps) {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">{scenariosTitle}</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {scenariosList.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-700" />
                {item}
              </li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-2 gap-4 text-sm pt-2">
            {scenarios.map((scenario, index) => (
              <div key={index} className="rounded-2xl bg-red-50 border border-red-100 p-4 space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-red-700">
                  {scenario.icon}
                  {scenario.title}
                </div>
                <p className="text-gray-700">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">{processTitle}</h2>
          <ol className="space-y-3 text-sm text-gray-700">
            {processSteps.map((step) => (
              <li key={step.step} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                  {step.step}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{step.title}</p>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}