import FadeIn from "./FadeIn";
import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, description, align = "left", dark = false, className, action }) {
  const isCenter = align === "center";
  return (
    <div className={cn("flex flex-col gap-5", isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start", className)}>
      {eyebrow && <FadeIn><span className={dark ? "eyebrow text-[#E8C9A8]" : "eyebrow"}>{eyebrow}</span></FadeIn>}
      <FadeIn delay={0.05}>
        <h2 className={cn("display-heading text-balance", "text-[34px] sm:text-[42px] md:text-[54px]", dark ? "text-[#F8F0E5]" : "text-[#302018]")}>{title}</h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.1}>
          <p className={cn("max-w-2xl text-[17px] leading-relaxed", dark ? "text-[#E8D9C8]" : "text-[#6F6258]", isCenter && "mx-auto")}>{description}</p>
        </FadeIn>
      )}
      {action && <FadeIn delay={0.12}>{action}</FadeIn>}
    </div>
  );
}
