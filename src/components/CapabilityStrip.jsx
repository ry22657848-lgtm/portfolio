import { Code2, BrainCircuit, Workflow, Package } from "lucide-react";
import { capabilities } from "@/data/content";

const icons = [Code2, BrainCircuit, Workflow, Package];

export default function CapabilityStrip() {
  return (
    <section className="bg-[#F3E5D3]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 md:py-16">
        <p className="eyebrow text-center">What I Build</p>
        <div className="mt-8 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-[#DDCDBB]">
          {capabilities.map((c, i) => {
            const Icon = icons[i];
            return (
              <div key={c.title} className="flex flex-col items-center px-6 text-center">
                <Icon className="h-8 w-8 text-[#392116]" strokeWidth={1.25} />
                <h3 className="mt-4 font-display text-xl text-[#302018]">{c.title}</h3>
                <p className="mt-2 max-w-[200px] text-[14px] leading-relaxed text-[#6F6258]">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
