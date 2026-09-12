import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const projectTypes = ["Website", "Landing Page", "AI Solution", "Automation", "Digital Product"];
const budgets = ["< $1k", "$1k – $5k", "$5k – $15k", "$15k+", "Not sure yet"];

function Field({ label, children }) {
  return (<label className="flex flex-col gap-2"><span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6F6258]">{label}</span>{children}</label>);
}

const inputCls = "w-full rounded-xl border border-[#DDCDBB] bg-[#FFFDFC] px-4 py-3 text-[16px] text-[#302018] placeholder:text-[#6F6258]/50 focus:border-[#A9683F] focus:outline-none focus:ring-2 focus:ring-[#A9683F]/20 transition";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "Website", budget: "$1k – $5k", message: "" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <>
      <section className="bg-[#F8F0E5] pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn><p className="eyebrow">Let's build</p><h1 className="display-heading mt-5 max-w-3xl text-[38px] sm:text-[52px] md:text-[64px]">Have an idea? Let's build something <span className="serif-italic">useful</span> together.</h1><p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#6F6258]">Tell me what you're working on, what you're trying to improve, or what you'd like to build. I read every message and reply thoughtfully.</p></FadeIn>
        </div>
      </section>
      <section className="bg-[#F8F0E5] pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-7">
            <div className="card-warm p-7 md:p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A9683F]/15 text-[#A9683F]"><Check className="h-7 w-7" /></span>
                  <h2 className="mt-6 font-display text-3xl text-[#302018]">Thank you, {form.name || "friend"}.</h2>
                  <p className="mt-3 max-w-md text-[16px] text-[#6F6258]">Your message is on its way. I'll get back to you shortly with thoughts on the simplest path forward.</p>
                  <button onClick={() => setSent(false)} className="mt-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#A9683F]">Send another message</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Your Name"><input required value={form.name} onChange={update("name")} className={inputCls} placeholder="Rishabh Yadav" /></Field>
                    <Field label="Your Email"><input required type="email" value={form.email} onChange={update("email")} className={inputCls} placeholder="you@business.com" /></Field>
                  </div>
                  <Field label="Company / Business"><input value={form.company} onChange={update("company")} className={inputCls} placeholder="Optional" /></Field>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6F6258]">Project Type</span>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {projectTypes.map((t) => (<button key={t} type="button" onClick={() => set("type", t)} className={cn("rounded-full border px-4 py-2 text-[13px] font-medium transition-colors", form.type === t ? "border-[#392116] bg-[#392116] text-[#F8F0E5]" : "border-[#DDCDBB] text-[#6F6258] hover:border-[#A9683F]")}>{t}</button>))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6F6258]">Budget Range</span>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {budgets.map((b) => (<button key={b} type="button" onClick={() => set("budget", b)} className={cn("rounded-full border px-4 py-2 text-[13px] font-medium transition-colors", form.budget === b ? "border-[#A9683F] bg-[#A9683F]/10 text-[#A9683F]" : "border-[#DDCDBB] text-[#6F6258] hover:border-[#A9683F]")}>{b}</button>))}
                    </div>
                  </div>
                  <Field label="Your Message"><textarea required rows={5} value={form.message} onChange={update("message")} className={cn(inputCls, "resize-none")} placeholder="Tell me about your project, goals and timeline…" /></Field>
                  <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#392116] px-6 py-4 text-sm font-semibold text-[#F8F0E5] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(57,33,22,0.28)] sm:w-auto">Start a Conversation<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
                </form>
              )}
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-5">
            <div className="space-y-8">
              <div><p className="eyebrow-muted">Availability</p><p className="mt-3 font-display text-2xl text-[#302018]">Available for freelance & full-time roles.</p></div>
              <div className="h-px w-full bg-[#DDCDBB]" />
              <div><p className="eyebrow-muted">Based in</p><p className="mt-3 text-[17px] text-[#302018]">India · Working worldwide</p></div>
              <div className="h-px w-full bg-[#DDCDBB]" />
              <div><p className="eyebrow-muted">What happens next</p><ol className="mt-4 space-y-3 text-[15px] text-[#6F6258]"><li>1. I read your message and reply within a day or two.</li><li>2. We talk through goals, scope and a rough timeline.</li><li>3. I propose the simplest useful path forward.</li></ol></div>
              <div className="h-px w-full bg-[#DDCDBB]" />
              <p className="text-[14px] text-[#6F6258]">Prefer email? Real contact details will appear here once provided. For now, the form above reaches me directly.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
