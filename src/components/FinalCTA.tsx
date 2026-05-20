import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { figmaAssets } from '../data/figmaAssets';

type FinalCTAProps = {
  onRegister: () => void;
};

export function FinalCTA({ onRegister }: FinalCTAProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-white px-4 py-16 sm:py-20">
      <motion.div
        className="cta-pattern relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-orange px-6 py-14 text-center text-white shadow-orange sm:px-10 lg:px-16 lg:py-20"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={figmaAssets.cta.footerTexture} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.16] mix-blend-soft-light" />
        <div className="text-fit-container relative z-10 mx-auto max-w-4xl">
          <p className="fit-pill text-sm font-black uppercase text-yellow-100">MNTN / Future Makers</p>
          <h2 className="sr-only">
            Sẵn sàng chưa các chiến binh?
            Chiếc cúp vô địch đang tìm kiếm chủ nhân xứng đáng!
          </h2>
          <img
            src={figmaAssets.cta.title}
            alt=""
            className="mx-auto mt-5 h-auto w-full max-w-4xl drop-shadow-[0_12px_0_rgba(124,45,18,0.12)]"
          />
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <motion.button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase text-brand-deep shadow-lg transition hover:bg-yellow-100"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              onClick={onRegister}
            >
              Đăng ký tham gia
              <ArrowRight className="size-4" aria-hidden="true" />
            </motion.button>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/[0.14] px-7 py-4 text-sm font-black uppercase text-white backdrop-blur transition hover:bg-white/[0.24]"
              href="tel:0336786895"
            >
              <PhoneCall className="size-4" aria-hidden="true" />
              0336786895
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
