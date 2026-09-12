import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import BlogCard from "@/components/BlogCard";
import { blogPosts, blogCategories } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Blog() {
  const [active, setActive] = useState("All");
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p !== featured);
  const filtered = active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);
  return (
    <>
      <section className="bg-[#F8F0E5] pt-32 pb-12 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn><p className="eyebrow">Thoughts & Insights</p><h1 className="display-heading mt-5 max-w-3xl text-[38px] sm:text-[52px] md:text-[60px]">Ideas on websites, AI and building better digital experiences.</h1></FadeIn>
        </div>
      </section>
      <section className="bg-[#F8F0E5] pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8"><FadeIn><BlogCard post={featured} featured /></FadeIn></div>
      </section>
      <section className="bg-[#F8F0E5] pb-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap gap-2.5">
            {blogCategories.map((c) => (
              <button key={c} onClick={() => setActive(c)} className={cn("rounded-full border px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors", active === c ? "border-[#392116] bg-[#392116] text-[#F8F0E5]" : "border-[#DDCDBB] text-[#6F6258] hover:border-[#A9683F] hover:text-[#A9683F]")}>{c}</button>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F8F0E5] pb-24 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(active === "All" ? rest : filtered.filter((p) => p !== featured)).map((p, i) => (<FadeIn key={p.slug} delay={(i % 3) * 0.05}><BlogCard post={p} /></FadeIn>))}
          </div>
          {active !== "All" && filtered.length === 0 && (<p className="mt-10 text-center text-[15px] text-[#6F6258]">No articles in this category yet — more writing is on the way.</p>)}
        </div>
      </section>
      <section className="bg-[#F3E5D3]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-24 text-center">
          <FadeIn><h2 className="display-heading text-[34px] sm:text-[44px] md:text-[52px]">More ideas, on the way.</h2><p className="mx-auto mt-5 max-w-xl text-[17px] text-[#6F6258]">Subscribe through the footer to get new articles on web, AI and building useful things.</p></FadeIn>
        </div>
      </section>
    </>
  );
}
