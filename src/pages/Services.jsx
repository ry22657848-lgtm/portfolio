import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services, philosophy } from "@/data/content";

export default function Services() {
  return (
    <>
      <section className="bg-[#F8F0E5] pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn><p className="eyebrow">Services</p><h1 className="display-heading mt-5 max-w-3xl text-[38px] sm:text-[52px] md:text-[64px]">Digital solutions built around your business.</h1><p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#6F6258]">A focused set of services across web, design and AI — each one built around real business outcomes rather than technology for its own sake.</p></FadeIn>
        </div>
      </section>
      <section className="bg-[#F8F0E5] pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (<FadeIn key={s.no} delay={(i % 3) * 0.05}><ServiceCard {...s} /></FadeIn>))}
          </div>
        </div>
      </section>
      <section className="bg-[#F3E5D3]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
          <SectionHeading eyebrow="How I work" title={<>Understand. Build. Improve.</>} description="A simple process that keeps every project tied to a real business goal." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {philosophy.map((p, i) => (<FadeIn key={p.no} delay={i * 0.06}><div className="card-warm h-full p-8"><span className="font-display text-4xl text-[#A9683F]/40">{p.no}</span><h3 className="mt-4 font-display text-2xl text-[#302018]">{p.title}</h3><p className="mt-3 text-[15px] leading-relaxed text-[#6F6258]">{p.desc}</p></div></FadeIn>))}
          </div>
        </div>
      </section>
      <section className="bg-[#F8F0E5]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-24 text-center">
          <FadeIn><h2 className="display-heading text-[34px] sm:text-[44px] md:text-[52px]">Not sure where to start?</h2><p className="mx-auto mt-5 max-w-xl text-[17px] text-[#6F6258]">Tell me what you're trying to improve and I'll suggest the simplest path forward.</p><div className="mt-8"><Button to="/contact">Start a Conversation</Button></div></FadeIn>
        </div>
      </section>
    </>
  );
}
