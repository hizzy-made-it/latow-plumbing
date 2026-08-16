import { cn } from "../lib/utils";

/**
 * Brand mark: the pipe-elbow "L" from the Latow logo with the water droplet
 * nested in its crook. Rebuilt as vector — the original raster tops out at
 * 113x95 and goes soft above ~40px.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 132 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-auto", className)}
      aria-hidden="true"
    >
      {/* pipe-elbow L: vertical riser + bottom run */}
      <path
        d="M30 18 V 86 H 104"
        stroke="currentColor"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* coupling bands — read as pipe joints */}
      <rect x="15" y="34" width="30" height="7" rx="3.5" fill="var(--color-navy-900)" opacity="0.3" />
      <rect x="72" y="71" width="7" height="30" rx="3.5" fill="var(--color-navy-900)" opacity="0.3" />
      {/* droplet in the open crook of the L */}
      <path
        d="M94 14 C94 14, 113 36, 113 46 A19 19 0 1 1 75 46 C75 36, 94 14, 94 14 Z"
        fill="url(#latow-drop)"
      />
      <circle cx="94" cy="48" r="8.5" fill="var(--color-water-050)" />
      <defs>
        <linearGradient id="latow-drop" x1="75" y1="14" x2="113" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8FE3F5" />
          <stop offset="0.5" stopColor="#5FB5CE" />
          <stop offset="1" stopColor="#32748A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Full horizontal lockup: mark + wordmark. */
export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark className={cn("text-bone shrink-0", compact ? "h-8" : "h-11")} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-extrabold tracking-[-0.04em] text-bone",
            compact ? "text-lg" : "text-xl md:text-[1.4rem]",
          )}
        >
          LATOW
        </span>
        <span
          className={cn(
            "font-sans font-semibold uppercase text-water-400",
            compact
              ? "text-[0.5rem] tracking-[0.2em]"
              : "text-[0.58rem] md:text-[0.62rem] tracking-[0.22em]",
          )}
        >
          Brothers Plumbing
        </span>
      </span>
    </span>
  );
}
