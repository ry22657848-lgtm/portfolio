import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <>
      <section className="bg-[#F8F0E5] pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn><p className="eyebrow">Selected Work</p><h1 className="display-heading mt-5 max-w-3xl text-[38px] sm:text-[52px] md:text-[64px]">Ideas turned into digital experiences.</h1><p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#6F6258]">A selection of demo and concept projects across web, AI and product design. Each one is labelled honestly — these are explorations of how I think and build, not fabricated client work.</p></FadeIn>
        </div>
      </section>
      <section className="bg-[#F8F0E5] pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((p, i) => (<FadeIn key={p.name} delay={(i % 2) * 0.06} className={i % 3 === 0 ? "lg:col-span-2" : ""}><ProjectCard project={p} large={i % 3 === 0} className="h-full" /></FadeIn>))}
          </div>
          <FadeIn delay={0.1}>
            <div className="mt-12 rounded-[22px] border border-dashed border-[#DDCDBB] bg-[#FFFDFC]/60 p-8 text-center">
              <p className="text-[15px] text-[#6F6258]">More projects are being documented. If you'd like to see something specific, I'm happy to walk you through relevant work.</p>
              <div className="mt-5"><Button to="/contact" variant="secondary">Ask about my work</Button></div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
