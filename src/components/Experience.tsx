import { motion, useReducedMotion } from 'framer-motion';
import { figmaAssets } from '../data/figmaAssets';
import { experiences } from '../data/experiences';
import { DecorationLayer } from './DecorationLayer';
import { SectionTitle } from './SectionTitle';

const experienceImages = {
  pool: figmaAssets.experience.pool,
  shore: figmaAssets.experience.shore,
  night: figmaAssets.experience.night,
  bar: figmaAssets.experience.bar,
  gym: figmaAssets.experience.gym
};

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative overflow-hidden bg-[#dff7f3] py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(14,165,233,0.22),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(223,247,243,0.88))]" />
      <DecorationLayer variant="ocean" density="normal" />

      <div className="container-x relative z-10">
        <SectionTitle label="ĐIỂM ĐẾN" title="ĐÁNG TRẢI NGHIỆM" />
        <motion.p
          className="fit-copy mx-auto mt-6 max-w-3xl text-center text-lg font-semibold leading-8 text-slate-700"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
        >
          Khám phá "đại bản doanh" của những Future Makers tại Dragon Dream Resort với các tiện ích miễn phí hoàn
          toàn.
        </motion.p>

        <motion.div
          className="mt-12 grid auto-rows-[220px] gap-5 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[250px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.16 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.09
              }
            }
          }}
        >
          {experiences.map((item, index) => (
            <motion.article
              key={item.title}
              className={[
                'group relative overflow-hidden rounded-[1.7rem] bg-slate-900 shadow-soft',
                item.featured ? 'md:row-span-2' : '',
                index === 2 ? 'lg:col-start-3 lg:row-span-2' : ''
              ].join(' ')}
              variants={{
                hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            >
              <img
                src={experienceImages[item.visual]}
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 transition group-hover:opacity-90" />
              <div className="text-fit-container absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                <h3 className="experience-card-title font-black uppercase text-yellow-100">
                  {item.title}
                </h3>
                <p className="fit-copy mt-2 max-w-md text-sm font-semibold leading-6 text-white/[0.78]">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
