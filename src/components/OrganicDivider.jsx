import { cn } from "@/lib/utils";

export default function OrganicDivider({ color = "#F8F0E5", className, height = 100 }) {
  return (
    <div className={cn("pointer-events-none w-full overflow-hidden leading-[0]", className)} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full" style={{ height }}>
        <path d="M0,64 C320,120 1120,8 1440,56 L1440,120 L0,120 Z" fill={color} />
      </svg>
    </div>
  );
}
