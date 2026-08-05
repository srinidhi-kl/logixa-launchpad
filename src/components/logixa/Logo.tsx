import { cn } from "@/lib/utils";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <a href="#top" className={cn("inline-flex items-center gap-2.5", className)} aria-label="LOGIXA home">
      <svg viewBox="0 0 48 48" className="h-9 w-9 shrink-0" role="img" aria-hidden="true">
        <circle
          cx="24"
          cy="24"
          r="19"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className={light ? "text-primary-foreground" : "text-primary"}
        />
        <path
          d="M5.5 24h37M24 5.2c5.2 5.4 5.2 32.2 0 37.6-5.2-5.4-5.2-32.2 0-37.6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.45"
          className={light ? "text-primary-foreground" : "text-primary"}
        />
        <path
          d="M15 33 33 15m0 0h-11m11 0v11"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl font-extrabold tracking-tight",
            light ? "text-primary-foreground" : "text-primary",
          )}
        >
          LOGIXA
        </span>
        <span className="mt-1 h-[2px] w-full rounded-full bg-accent" />
      </span>
    </a>
  );
}
