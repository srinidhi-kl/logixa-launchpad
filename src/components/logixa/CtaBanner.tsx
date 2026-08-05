import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section id="contact" className="px-5 py-20 lg:px-8 lg:py-24">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-orange px-8 py-14 text-center shadow-float sm:px-14">
          <h2 className="text-3xl font-extrabold text-accent-foreground sm:text-4xl">
            Ready to Simplify Your Supply Chain?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-accent-foreground/85 sm:text-base">
            Tell us your lane and cargo — we'll come back with a routing plan and a rate.
          </p>
          <Button variant="navy" size="xl" className="mt-8" asChild>
            <a href="mailto:hello@logixa.com">
              Contact Our Team <ArrowRight />
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
