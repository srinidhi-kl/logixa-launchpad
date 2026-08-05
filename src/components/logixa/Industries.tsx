import { Wine, Biohazard, Tractor, Sofa, Snowflake, Luggage } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Wine, label: "Fragile Goods" },
  { icon: Biohazard, label: "Hazardous / DG Cargo" },
  { icon: Tractor, label: "Heavy Equipment" },
  { icon: Sofa, label: "Household Goods" },
  { icon: Snowflake, label: "Reefer Containers" },
  { icon: Luggage, label: "Personal Effects" },
];

export function Industries() {
  return (
    <section id="industries" className="border-y border-border bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <h2 className="text-center text-2xl font-extrabold text-primary sm:text-3xl">
            Cargo we handle every day
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 6) * 70}>
              <div className="flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-card px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-card">
                <item.icon className="size-7 text-accent" />
                <span className="text-sm font-semibold text-primary">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
