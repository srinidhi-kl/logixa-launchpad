import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const partners = [
  "NORDLINE",
  "PACIFIC BULK",
  "AEROCARGO",
  "MERIDIAN CO.",
  "TERRAFREIGHT",
  "BLUEPORT",
];

const testimonials = [
  {
    quote:
      "LOGIXA rebuilt our inbound ocean lane and cut two days off every sailing. Their clearance team is exceptional.",
    name: "Priya Nair",
    role: "Head of Supply Chain, Vantage Polymers",
  },
  {
    quote:
      "Project cargo is where most forwarders fail. LOGIXA planned the lift, the permits and the route without a single surprise.",
    name: "Daniel Osei",
    role: "Procurement Director, Helix Energy",
  },
  {
    quote:
      "We finally have one partner across air, sea and road — with real tracking instead of email chasing.",
    name: "Marta Ruiz",
    role: "Logistics Manager, Casa Textiles",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
            Trusted by Businesses Worldwide
          </h2>
        </Reveal>

        <div className="mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14">
            {[...partners, ...partners].map((partner, i) => (
              <span
                key={`${partner}-${i}`}
                className="text-lg font-extrabold tracking-[0.2em] text-muted-foreground/45"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 110}>
              <figure className="h-full rounded-2xl border border-border bg-card p-7 shadow-card">
                <Quote className="size-7 text-accent" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <div className="text-sm font-bold text-primary">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
