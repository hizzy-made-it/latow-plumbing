import {
  ArrowUpFromLine,
  Building2,
  Cog,
  Droplets,
  Flame,
  GitBranch,
  HardHat,
  Sun,
  Waves,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  Wrench,
  Flame,
  GitBranch,
  Waves,
  Droplets,
  HardHat,
  Sun,
  Cog,
  ArrowUpFromLine,
  Building2,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Wrench;
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
