import { useEffect, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroImage from "@/assets/hero-logistics.jpg";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 600) * 0.25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative isolate pb-40 lg:pb-32">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={heroImage}
          alt="Container ship, cargo plane and freight truck moving goods at dusk"
          width={1920}
          height={1080}
          className="h-[120%] w-full object-cover"
          style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.05)` }}
        />
      </div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.21 0.055 253 / 0.92) 0%, oklch(0.21 0.055 253 / 0.78) 45%, oklch(0.21 0.055 253 / 0.95) 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 pt-40 pb-16 lg:px-8 lg:pt-52 lg:pb-24">
        <div className="max-w-3xl">
          <p className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary-foreground/85 uppercase">
            Uncomplicating Global Logistics, Every Mile.
          </p>
          <h1 className="animate-fade-in mt-6 text-4xl leading-[1.05] font-extrabold text-primary-foreground sm:text-5xl lg:text-6xl">
            Your Global Partner in Freight &amp; Supply Chain Solutions
          </h1>
          <p className="animate-fade-in mt-6 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
            Air, Sea, Land &amp; Project Cargo — delivered with commitment, collaboration, and
            customer intimacy.
          </p>
          <div className="animate-fade-in mt-9 flex flex-wrap gap-3">
            <Button variant="accent" size="xl" asChild>
              <a href="#contact">
                Get a Free Quote <ArrowRight />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#track">Track Your Shipment</a>
            </Button>
          </div>
        </div>
      </div>

      <div
        id="track"
        className="absolute inset-x-0 -bottom-px z-20 mx-auto w-full max-w-5xl translate-y-1/2 px-5 lg:px-8"
      >
        <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-float sm:p-7">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-primary">Track &amp; Trace</h2>
              <p className="text-sm text-muted-foreground">
                Real-time visibility on every consignment.
              </p>
            </div>
          </div>
          <form
            className="mt-5 grid gap-3 sm:grid-cols-[200px_1fr_auto]"
            onSubmit={(e) => e.preventDefault()}
          >
            <Select defaultValue="awb">
              <SelectTrigger className="h-12 rounded-xl">
                <SelectValue placeholder="Reference type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="awb">AWB No.</SelectItem>
                <SelectItem value="bl">Bill of Lading</SelectItem>
                <SelectItem value="container">Container No.</SelectItem>
                <SelectItem value="booking">Booking Ref.</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                aria-label="Tracking number"
                placeholder="Enter your tracking number"
                className="h-12 rounded-xl pl-11"
              />
            </div>
            <Button type="submit" variant="navy" size="xl">
              Track
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
