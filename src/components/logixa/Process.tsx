import { FileText, CalendarCheck, Navigation, PackageCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { icon: FileText, title: "Request a Quote", text: "Share your lane, cargo and timeline." },
  { icon: CalendarCheck, title: "Plan & Book", text: "We design the route and confirm capacity." },
  { icon: Navigation, title: "Ship & Track", text: "Live milestones from pickup to port." },
  { icon: PackageCheck, title: "Deliver & Confirm", text: "Proof of delivery and clean documentation." },
];

export function Process() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl">
              Four steps from enquiry to delivery
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="absolute top-7 right-10 left-10 hidden border-t-2 border-dashed border-border lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 110}>
                <div className="relative text-center lg:text-left">
                  <span className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-full border-2 border-accent bg-background text-accent lg:mx-0">
                    <step.icon className="size-6" />
                  </span>
                  <div className="mt-5 text-xs font-bold tracking-[0.18em] text-accent uppercase">
                    Step {i + 1}
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
