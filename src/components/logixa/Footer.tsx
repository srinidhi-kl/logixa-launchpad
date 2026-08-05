import { Linkedin, Twitter, Facebook, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "./Logo";
import { services } from "./Services";

const company = [
  { label: "About", href: "#about" },
  { label: "Careers", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Track Shipment", href: "#track" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-navy pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-5 flex gap-2 text-sm leading-relaxed text-primary-foreground/70">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              Office No. 306, Sai Chamber, Sec 11, CBD Belapur, Navi Mumbai - 400614
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="LOGIXA social profile"
                  className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.15em] text-primary-foreground uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.15em] text-primary-foreground uppercase">
              Company
            </h3>
            <ul className="mt-5 space-y-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.15em] text-primary-foreground uppercase">
              Newsletter
            </h3>
            <p className="mt-5 text-sm text-primary-foreground/70">
              Freight market updates and rate trends, once a month.
            </p>
            <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                required
                aria-label="Email address"
                placeholder="you@company.com"
                className="h-12 rounded-xl border-primary-foreground/20 bg-primary-foreground/8 text-primary-foreground placeholder:text-primary-foreground/45"
              />
              <Button type="submit" variant="accent" size="xl" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 LOGIXA Logistics &amp; Consultants. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-accent">
              Privacy Policy
            </a>
            <a href="#top" className="transition-colors hover:text-accent">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
