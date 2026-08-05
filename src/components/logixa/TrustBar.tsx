import { CalendarClock, Globe2, Anchor, Headphones } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: CalendarClock, value: "10+", label: "Years Experience" },
  { icon: Globe2, value: "50+", label: "Global Partners" },
  { icon: Anchor, value: "100+", label: "Ports Covered" },
  { icon: Headphones, value: "24/7", label: "Support" },
];

export function TrustBar() {
  return (
    <section className="bg-secondary pt-36 pb-14 lg:pt-32">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90}>
            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                <stat.icon className="size-6" />
              </span>
              <div>
                <div className="text-2xl font-extrabold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
