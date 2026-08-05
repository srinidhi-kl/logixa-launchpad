import { Handshake, Users, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";
import aboutImage from "@/assets/about-port.jpg";

const values = [
  { icon: Handshake, title: "Commitment", text: "We own every shipment end to end — deadlines kept, promises met." },
  { icon: Users, title: "Collaboration", text: "One connected team across carriers, customs and your warehouse." },
  { icon: HeartHandshake, title: "Customer Intimacy", text: "Dedicated coordinators who know your cargo and your business." },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Aerial view of a container terminal with gantry cranes"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-2xl object-cover shadow-float"
            />
            <div className="absolute -right-4 -bottom-6 hidden rounded-2xl bg-gradient-navy px-7 py-5 shadow-float sm:block">
              <div className="text-3xl font-extrabold text-primary-foreground">98%</div>
              <div className="text-xs tracking-wide text-primary-foreground/75 uppercase">
                On-time delivery
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl">
              Customer-centric supply chain services, built on dependability
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We work towards customer-centric solutions by providing quality supply chain services.
              LOGIXA delivers top-quality logistics at cost-effective prices — consistent value and
              dependability for customers large and small, across every trade lane we serve.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={120 + i * 100}>
                <div className="h-full rounded-xl border border-border bg-card p-5 shadow-card transition-transform duration-300 hover:-translate-y-1">
                  <value.icon className="size-6 text-accent" />
                  <h3 className="mt-3 text-sm font-bold text-primary">{value.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
