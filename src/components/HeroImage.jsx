import { Image } from "@/components/ui/image";
import { motion } from "framer-motion";
import { HERO_IMAGE } from "@/data/content";

export default function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full border border-[#E8D3C0]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-6 top-16 h-10 w-10 rounded-full bg-[#E8D3C0]/60" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-10 bottom-24 h-16 w-16 rounded-full border border-[#DDCDBB]" aria-hidden="true" />
      <div className="absolute -right-8 top-8 h-[78%] w-[55%] rounded-[44%_56%_50%_50%_/_50%_50%_56%_44%] bg-[#A9683F]/15 blur-[2px]" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="arch-frame relative overflow-hidden border-[6px] border-[#F3E5D3] shadow-[0_30px_70px_rgba(60,35,20,0.18)]"
      >
        <Image src={HERO_IMAGE} alt="Rishabh Yadav, freelancer, website developer and AI engineer, working at his desk" className="aspect-[4/5] w-full" fittingType="fill" focalPointX={0.5} focalPointY={0.4} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute -left-4 bottom-10 sm:-left-8 card-warm px-5 py-4"
      >
        <p className="eyebrow-muted">Available</p>
        <p className="mt-1 font-display text-lg text-[#302018]">For New Projects</p>
      </motion.div>
    </div>
  );
}
