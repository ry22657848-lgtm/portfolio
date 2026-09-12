import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import HeroImage from "@/components/HeroImage";
import CapabilityStrip from "@/components/CapabilityStrip";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import OrganicDivider from "@/components/OrganicDivider";
import { services, projects } from "@/data/content";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F8F0E5] pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-[#A9683F]/8 blur-3xl" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
          <div className="order-2 lg:order-1">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow">Hello, I'm Rishabh</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }} className="display-heading mt-5 text-[42px] sm:text-[54px] md:text-[64px] lg:text-[72px]">I build digital experiences that move businesses <span className="serif-italic">forward.</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#6F6258]">I'm a freelancer, website developer and AI engineer helping businesses turn ideas into modern websites, intelligent digital experiences and practical AI-powered solutions.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/projects">View My Work</Button>
              <Button to="/contact" variant="secondary">Let's Work Together</Button>
            </motion.div>
          </div>
          <div className="order-1 lg:order-2"><HeroImage /></div>
        </div>
      </section>
      <OrganicDivider color="#F3E5D3" height={80} />
      <CapabilityStrip />
      <OrganicDivider color="#F8F0E5" height={80} />
      <section className="bg-[#F8F0E5]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 py-20 md:py-28 lg:grid-cols-2">
          <FadeIn>
            <p className="eyebrow">About Rishabh</p>
            <h2 className="display-heading mt-5 text-[34px] sm:text-[44px] md:text-[52px]">Building with code, design and intelligence.</h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#6F6258]">I'm a full-stack developer with a love for clean code, intuitive design and practical AI. I partner with businesses to turn real problems into useful digital products — quietly, carefully and with a focus on what actually matters.</p>
            <div className="mt-8"><Button to="/about" variant="secondary">More about me</Button></div>
          </FadeIn>
          <FadeIn delay={0.1} className="grid gap-5 sm:grid-cols-3">
            {[{ k: "Websites", v: "Modern & responsive" }, { k: "AI", v: "Practical, not theatrical" }, { k: "Automation", v: "Less manual work" }].map((s) => (
              <div key={s.k} className="card-warm p-6"><p className="font-display text-2xl text-[#302018]">{s.k}</p><p className="mt-2 text-[14px] text-[#6F6258]">{s.v}</p></div>
            ))}
          </FadeIn>
        </div>
      </section>
      <section className="bg-[#F3E5D3]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Services" title={<>How I can help your business grow.</>} description="A focused set of services across web, design and AI — each built around real business outcomes." />
            <Button to="/services" variant="secondary" className="shrink-0">All services</Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s, i) => (<FadeIn key={s.no} delay={i * 0.05}><ServiceCard {...s} /></FadeIn>))}
          </div>
        </div>
      </section>
      <section className="bg-[#F8F0E5]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Selected Work" title={<>Some things I've built.</>} description="A few demo and concept projects showing how I think about web, AI and product design." />
            <Button to="/projects" className="shrink-0">View all projects</Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {projects.slice(0, 2).map((p, i) => (<FadeIn key={p.name} delay={i * 0.06}><ProjectCard project={p} large /></FadeIn>))}
          </div>
        </div>
      </section>
      <section className="bg-[#392116] text-[#F8F0E5]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
          <SectionHeading eyebrow="What people say" dark title={<>Good work speaks through experience.</>} description="I'm building a body of work one careful project at a time. When there's a story worth sharing, it'll live here." />
          <FadeIn delay={0.1}>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {["Clear communication, on every project.", "Thoughtful design and reliable engineering."].map((t) => (
                <div key={t} className="rounded-[22px] border border-[#F8F0E5]/15 bg-[#F8F0E5]/[0.04] p-8"><p className="font-display text-2xl leading-snug text-[#F8F0E5]">"{t}"</p><p className="mt-6 text-[13px] uppercase tracking-[0.14em] text-[#E8C9A8]">Your story could be next</p></div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15}><div className="mt-10"><Button to="/testimonials" variant="outlineLight">Read testimonials</Button></div></FadeIn>
        </div>
      </section>
      <section className="bg-[#F8F0E5]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-24 md:py-32 text-center">
          <FadeIn>
            <p className="eyebrow">Let's build</p>
            <h2 className="display-heading mt-5 text-[36px] sm:text-[48px] md:text-[60px]">Have an idea? Let's build something <span className="serif-italic">useful</span> together.</h2>
            <p className="mx-auto mt-6 max-w-xl text-[17px] text-[#6F6258]">Tell me what you're working on, what you're trying to improve, or what you'd like to build.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button to="/contact">Start a Conversation</Button>
              <Link to="/projects" className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#302018]">See my work<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
