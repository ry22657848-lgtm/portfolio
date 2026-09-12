import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function BlogCard({ post, featured }) {
  return (
    <article className={cn("group flex flex-col overflow-hidden card-warm transition-all duration-300 hover:-translate-y-1.5", featured ? "md:flex-row" : "")}>
      <div className={cn("relative overflow-hidden", featured ? "md:w-1/2" : "")}>
        <Image src={post.image} alt={post.title} className={cn("w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]", featured ? "aspect-[16/11] md:h-full md:aspect-auto" : "aspect-[3/2]")} fittingType="fill" />
      </div>
      <div className={cn("flex flex-1 flex-col p-7", featured ? "md:w-1/2 md:justify-center" : "")}>
        <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6F6258]">
          <span className="text-[#A9683F]">{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-[#DDCDBB]" />
          <span>{post.date}</span>
          <span className="h-1 w-1 rounded-full bg-[#DDCDBB]" />
          <span>{post.read}</span>
        </div>
        <h3 className={cn("mt-4 font-display text-[#302018]", featured ? "text-3xl md:text-4xl" : "text-2xl")}>{post.title}</h3>
        <p className="mt-3 flex-1 text-[16px] leading-relaxed text-[#6F6258]">{post.excerpt}</p>
        <Link to="/blog" className="group/link mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#A9683F]">
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
