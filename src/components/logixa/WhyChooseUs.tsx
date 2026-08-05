import { Globe2, Timer, FileCheck2, Radar } from "lucide-react";
import { Reveal } from "./Reveal";

const points = [
  { icon: Globe2, title: "Global Network", text: "Trusted agents in 100+ ports and every major air hub." },
  { icon: Timer, title: "On-Time Delivery", text: "Proactive routing keeps transit promises intact." },
  { icon: FileCheck2, title: "Custom Clearance Experts", text: "Documentation done right the first time." },
  { icon: Radar, title: "24/7 Cargo Tracking", text: "Live milestones and alerts, day or night." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-gradient-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              Freight moved with precision, not guesswork
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 90}>
              <div>
                <span className="flex size-13 items-center justify-center rounded-2xl bg-primary-foreground/10 text-accent">
                  <point.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary-foreground">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
