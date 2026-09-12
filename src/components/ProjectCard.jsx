import { Image } from "@/components/ui/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, className, large }) {
  return (
    <article className={cn("group flex flex-col overflow-hidden card-warm p-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(60,35,20,0.13)]", className)}>
      <div className="relative overflow-hidden rounded-[18px]">
        <Image src={project.image} alt={`${project.name} — ${project.category}`} className={cn("w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]", large ? "aspect-[16/10]" : "aspect-[4/3]")} fittingType="fill" />
        <span className="absolute left-3 top-3 rounded-full bg-[#FFFDFC]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#392116] backdrop-blur">{project.status}</span>
      </div>
      <div className="flex flex-1 flex-col px-3 pb-2 pt-5">
        <span className="eyebrow-muted">{project.category}</span>
        <h3 className="mt-2 font-display text-2xl text-[#302018]">{project.name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#6F6258]">{project.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-[#DDCDBB] px-3 py-1 text-[12px] text-[#6F6258]">{t}</span>
          ))}
        </div>
        <a href="#" onClick={(e) => e.preventDefault()} className="group/link mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#A9683F]">
          View Project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
