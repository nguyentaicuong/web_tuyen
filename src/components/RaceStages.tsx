import { motion, useReducedMotion } from 'framer-motion';
import { BadgeCheck, Dumbbell, Mic2, Waves } from 'lucide-react';
import { figmaAssets } from '../data/figmaAssets';
import { raceStages } from '../data/stages';
import { DecorationLayer } from './DecorationLayer';
import { SectionTitle } from './SectionTitle';

const stageIcons = {
  tug: Dumbbell,
  team: Waves,
  talent: Mic2
};

const stageImages = {
  tug: figmaAssets.stages.tug,
  team: figmaAssets.stages.team,
  talent: figmaAssets.stages.talent
};

export function RaceStages() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="stages" className="stages-section relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <DecorationLayer variant="light" density="normal" />
      <div className="container-x relative z-10">
        <SectionTitle title="03 CHẶNG ĐUA" />

        <div className="stage-sequence mt-14 space-y-9 pl-8 sm:pl-10 lg:space-y-10">
          {raceStages.map((stage, index) => {
            const Icon = stageIcons[stage.visual];
            const reverse = index % 2 === 1;

            return (
              <motion.article
                key={stage.title}
                className="stage-card group grid overflow-hidden rounded-[2rem] border border-orange-100 bg-[#fffaf3] shadow-soft transition hover:-translate-y-1 hover:shadow-orange lg:grid-cols-2"
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.24 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={['stage-visual-panel min-h-[320px] overflow-hidden', reverse ? 'lg:order-2' : ''].join(' ')}>
                  <motion.img
                    src={stageImages[stage.visual]}
                    alt={`Minh họa ${stage.title}`}
                    className="stage-visual-image relative z-10 h-full min-h-[320px] w-full object-contain p-5 transition duration-700 group-hover:scale-[1.04] sm:p-7 lg:p-8"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                    transition={{ duration: 0.55 }}
                  />
                </div>
                <div className="stage-copy-panel text-fit-container flex flex-col justify-center p-6 sm:p-8 lg:p-8 xl:p-10">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid size-12 place-items-center rounded-2xl bg-orange-100 text-brand-deep transition group-hover:bg-brand-orange group-hover:text-white">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="fit-pill rounded-full bg-yellow-100 px-4 py-2 text-xs font-black uppercase text-amber-700">
                      {stage.subtitle}
                    </span>
                  </div>
                  <h3 className="stage-heading font-black uppercase text-brand-orange">
                    {stage.title}
                  </h3>
                  <motion.div
                    className="mt-7 space-y-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: shouldReduceMotion ? 0 : 0.08
                        }
                      }
                    }}
                  >
                    {[stage.description, `Thể thức: ${stage.format}`, stage.criteria ? `Tiêu chí chấm điểm: ${stage.criteria}` : '']
                      .filter(Boolean)
                      .map((copy) => (
                        <motion.p
                          key={copy}
                          className="fit-copy flex gap-3 text-base font-semibold leading-8 text-slate-600"
                          variants={{
                            hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
                            visible: { opacity: 1, y: 0 }
                          }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
                        >
                          <BadgeCheck className="mt-1 size-5 shrink-0 text-brand-deep" aria-hidden="true" />
                          <span>{copy}</span>
                        </motion.p>
                      ))}
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
