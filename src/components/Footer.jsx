import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = ["Website Development", "AI Solutions", "Automation", "UI/UX", "Digital Products"];
const socials = [{ label: "LinkedIn", href: "#" }, { label: "GitHub", href: "#" }, { label: "Instagram", href: "#" }, { label: "X", href: "#" }];

export default function Footer() {
  return (
    <footer className="bg-[#392116] text-[#F8F0E5]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F8F0E5]/30 font-display text-lg">RY</span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-xl">Rishabh Yadav</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E8C9A8]">Freelancer · Website Developer · AI Engineer</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[#E8D9C8]">I build useful digital experiences — modern websites, intelligent tools and practical automation that help businesses move forward.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="rounded-full border border-[#F8F0E5]/25 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#E8D9C8] transition-colors hover:border-[#A9683F] hover:text-[#F8F0E5]">{s.label}</a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-[#E8C9A8]">Navigate</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}><NavLink to={l.to} end={l.to === "/"} className="text-[15px] text-[#E8D9C8] transition-colors hover:text-[#F8F0E5]">{l.label}</NavLink></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow text-[#E8C9A8]">Stay updated</p>
            <p className="mt-5 text-[15px] text-[#E8D9C8] max-w-xs">New projects, ideas and insights on websites, AI and building better digital experiences.</p>
            <form className="mt-5 flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" aria-label="Email address" className="w-full rounded-full border border-[#F8F0E5]/25 bg-transparent px-5 py-3 text-sm text-[#F8F0E5] placeholder:text-[#E8D9C8]/60 focus:border-[#A9683F] focus:outline-none" />
              <button type="submit" className="group flex shrink-0 items-center gap-1.5 rounded-full bg-[#A9683F] px-5 py-3 text-sm font-semibold text-[#FFFDFC] transition-colors hover:bg-[#95582f]">Subscribe<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
            </form>
            <ul className="mt-7 space-y-2.5">
              {serviceLinks.map((s) => (<li key={s} className="text-[14px] text-[#E8D9C8]/80">{s}</li>))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[#F8F0E5]/15 pt-7 text-[13px] text-[#E8D9C8]/70 sm:flex-row sm:items-center">
          <p>© 2026 Rishabh Yadav. All rights reserved.</p>
          <p>Made with care and coded by Rishabh Yadav</p>
        </div>
      </div>
    </footer>
  );
}
