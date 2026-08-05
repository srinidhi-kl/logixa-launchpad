import {
  Plane,
  Ship,
  Truck,
  FileCheck2,
  Container,
  Crane,
  Droplets,
  Warehouse,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./Reveal";

export const services = [
  { icon: Plane, title: "Air Freight", text: "Express and consolidated airfreight on global lanes." },
  { icon: Ship, title: "Sea Freight (LCL & FCL)", text: "Reliable ocean capacity for part and full container loads." },
  { icon: Truck, title: "Land Freight", text: "Door-to-door road transport with live milestone updates." },
  { icon: FileCheck2, title: "Custom Clearance", text: "Compliant, fast clearance handled by in-house brokers." },
  { icon: Crane, title: "Chartering & Break Bulk", text: "Vessel chartering and out-of-gauge break bulk moves." },
  { icon: Container, title: "Special Projects Cargo", text: "Engineered plans for heavy-lift and project shipments." },
  { icon: Droplets, title: "Bulk Liquid Solutions", text: "ISO tanks and flexi tanks for safe liquid transport." },
  { icon: Warehouse, title: "Storage & Warehousing", text: "Bonded and general storage with inventory visibility." },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Our Services
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl">
              End-to-end logistics solutions tailored to your business
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 90}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-float">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-base font-bold text-primary">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
