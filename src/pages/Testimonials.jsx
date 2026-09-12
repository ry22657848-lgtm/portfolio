import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <>
      <section className="bg-[#392116] text-[#F8F0E5] pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn><p className="eyebrow text-[#E8C9A8]">What people say</p><h1 className="display-heading mt-5 max-w-3xl text-[38px] sm:text-[52px] md:text-[64px] text-[#F8F0E5]">Good work speaks through experience.</h1><p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#E8D9C8]">I'd rather share honest words from real people than invented reviews. When there's a story worth telling, it'll live here — in the meantime, here's what working together tends to feel like.</p></FadeIn>
        </div>
      </section>
      <section className="bg-[#392116] text-[#F8F0E5] pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[{ q: "Clear, honest communication at every step of the project.", t: "How I work" }, { q: "Thoughtful design paired with reliable, maintainable engineering.", t: "What I deliver" }, { q: "A quiet focus on outcomes that actually matter to the business.", t: "What I care about" }].map((c, i) => (
              <FadeIn key={c.t} delay={i * 0.06}>
                <div className="h-full rounded-[22px] border border-[#F8F0E5]/15 bg-[#F8F0E5]/[0.04] p-8"><Quote className="h-7 w-7 text-[#A9683F]" /><p className="mt-5 font-display text-2xl leading-snug text-[#F8F0E5]">{c.q}</p><p className="mt-6 text-[12px] uppercase tracking-[0.16em] text-[#E8C9A8]">{c.t}</p></div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.1}>
            <div className="mt-12 rounded-[22px] border border-dashed border-[#F8F0E5]/20 p-8 text-center"><p className="text-[15px] text-[#E8D9C8]">Worked with me? I'd value a few honest words about the experience.</p><div className="mt-5"><Button to="/contact" variant="outlineLight">Share your experience</Button></div></div>
          </FadeIn>
        </div>
      </section>
      <section className="bg-[#F8F0E5]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-24 text-center">
          <FadeIn><h2 className="display-heading text-[34px] sm:text-[44px] md:text-[52px]">Let's create the next story.</h2><div className="mt-8"><Button to="/contact">Start a Conversation</Button></div></FadeIn>
        </div>
      </section>
    </>
  );
}
