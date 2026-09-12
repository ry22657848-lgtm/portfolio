import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-[#392116] text-[#F8F0E5] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(57,33,22,0.28)]",
  accent: "bg-[#A9683F] text-[#FFFDFC] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(169,104,63,0.30)]",
  secondary: "bg-transparent text-[#392116] border border-[#392116] hover:bg-[#392116] hover:text-[#F8F0E5]",
  light: "bg-[#F8F0E5] text-[#392116] hover:-translate-y-0.5",
  outlineLight: "bg-transparent text-[#F8F0E5] border border-[#F8F0E5]/40 hover:bg-[#F8F0E5] hover:text-[#392116]",
};

export default function Button({ children, to, href, variant = "primary", className, arrow = "right", ...props }) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out",
    variants[variant],
    className
  );
  const Icon = arrow === "down" ? ArrowDown : ArrowRight;
  const iconEl = arrow ? <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> : null;
  const downIconEl = arrow === "down" ? <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" /> : null;
  const finalIcon = arrow === "down" ? downIconEl : iconEl;
  const inner = <>{children}{finalIcon}</>;
  if (to) return <Link to={to} className={classes} {...props}>{inner}</Link>;
  if (href) return <a href={href} className={classes} {...props}>{inner}</a>;
  return <button className={classes} {...props}>{inner}</button>;
}
