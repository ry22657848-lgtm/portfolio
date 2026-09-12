import { Globe, Palette, BrainCircuit, Workflow, LayoutTemplate, Boxes, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  "Website Development": Globe,
  "UI/UX Design": Palette,
  "AI Solutions": BrainCircuit,
  "AI Automation": Workflow,
  "Landing Pages": LayoutTemplate,
  "Custom Digital Products": Boxes,
};

export default function ServiceCard({ no, title, desc }) {
  const Icon = iconMap[title] ?? Boxes;
  return (
    <div className="group card-warm flex flex-col p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(60,35,20,0.12)]">
      <div className="flex items-start justify-between">
        <span className="font-display text-3xl text-[#A9683F]/30 transition-colors group-hover:text-[#A9683F]/60">{no}</span>
        <Icon className="h-7 w-7 text-[#392116] transition-colors group-hover:text-[#A9683F]" strokeWidth={1.25} />
      </div>
      <h3 className="mt-6 font-display text-2xl text-[#302018]">{title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#6F6258]">{desc}</p>
      <Link to="/services" className="group/link mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#A9683F]">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
}
