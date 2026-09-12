import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./Button";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

function Monogram() {
  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="Rishabh Yadav — home">
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#392116]/25 bg-[#FFFDFC] font-display text-[#392116] text-lg leading-none transition-colors group-hover:bg-[#392116] group-hover:text-[#F8F0E5]">RY</span>
      <span className="hidden sm:flex flex-col leading-tight">
        <span className="font-display text-[#302018] text-[17px]">Rishabh Yadav</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6F6258]">Freelancer · Web · AI</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "bg-[#F8F0E5]/85 backdrop-blur-md border-b border-[#DDCDBB]/70 py-3" : "bg-transparent py-5")}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Monogram />
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => cn("text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors link-underline", isActive ? "text-[#A9683F]" : "text-[#302018] hover:text-[#A9683F]")}>{l.label}</NavLink>
          ))}
        </nav>
        <div className="hidden lg:block"><Button to="/contact" className="px-5 py-2.5">Let's Talk</Button></div>
        <button className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-[#392116]/20 text-[#392116]" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} className="lg:hidden absolute inset-x-0 top-full bg-[#F8F0E5] border-b border-[#DDCDBB] px-5 py-6 shadow-[0_20px_40px_rgba(60,35,20,0.08)]">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => cn("border-b border-[#DDCDBB]/60 py-3 text-sm font-semibold uppercase tracking-[0.14em]", isActive ? "text-[#A9683F]" : "text-[#302018]")}>{l.label}</NavLink>
              ))}
            </nav>
            <Button to="/contact" className="mt-5 w-full">Let's Talk</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
