import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { Image } from "@/components/ui/image";
import { philosophy, HERO_IMAGE } from "@/data/content";

export default function About() {
  return (
    <>
      <section className="bg-[#F8F0E5] pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn><p className="eyebrow">About Rishabh</p><h1 className="display-heading mt-5 max-w-3xl text-[38px] sm:text-[52px] md:text-[64px]">Building with code, design and intelligence.</h1></FadeIn>
        </div>
      </section>
      <section className="bg-[#F8F0E5] pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="arch-frame relative overflow-hidden border-[6px] border-[#F3E5D3] shadow-[0_30px_70px_rgba(60,35,20,0.15)]">
              <Image src={HERO_IMAGE} alt="Rishabh Yadav at his desk" className="aspect-[4/5] w-full" fittingType="fill" focalPointX={0.5} focalPointY={0.4} />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-5 text-[17px] leading-relaxed text-[#6F6258]">
              <p>I'm Rishabh Yadav — a freelancer, website developer and AI engineer. I help businesses turn ideas into modern websites, intelligent digital experiences and practical AI-powered tools.</p>
              <p>My approach is quiet and deliberate. I start with the business problem, build with clean structure and thoughtful design, then refine around real users. I care less about novelty for its own sake and more about whether something is genuinely useful.</p>
              <p>I work on websites and landing pages that establish credibility, AI solutions that remove real repetitive effort, and automation that quietly saves teams hours every week. I partner with startups and established businesses alike — usually as an independent, sometimes embedded alongside a team.</p>
              <p className="font-display text-2xl text-[#302018]">I don't just build websites. I build useful digital experiences that help businesses move forward.</p>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="bg-[#F3E5D3]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
          <SectionHeading eyebrow="How I work" title={<>A simple, honest process.</>} description="Three steps that keep the work grounded in real outcomes." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <FadeIn key={p.no} delay={i * 0.06}>
                <div className="card-warm h-full p-8"><span className="font-display text-4xl text-[#A9683F]/40">{p.no}</span><h3 className="mt-4 font-display text-2xl text-[#302018]">{p.title}</h3><p className="mt-3 text-[15px] leading-relaxed text-[#6F6258]">{p.desc}</p></div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F8F0E5]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-24 text-center">
          <FadeIn><h2 className="display-heading text-[34px] sm:text-[44px] md:text-[52px]">Let's build something useful.</h2><p className="mx-auto mt-5 max-w-xl text-[17px] text-[#6F6258]">Available for freelance and full-time roles.</p><div className="mt-8"><Button to="/contact">Start a Conversation</Button></div></FadeIn>
        </div>
      </section>
    </>
  );
}
