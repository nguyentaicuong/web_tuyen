import { motion, useReducedMotion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { DecorationLayer } from './DecorationLayer';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { figmaAssets } from '../data/figmaAssets';
import diemSoChienThuatTitle from '../assets/headings/diem-so-chien-thuat.svg';
import latNguocTheCoTitle from '../assets/headings/lat-nguoc-the-co.svg';

const prizeCards = [
  {
    rank: '01 Giải Nhì',
    title: 'Á quân bứt phá',
    amount: 20,
    suffix: 'Tr VND',
    medal: figmaAssets.decorations.medalGold
  },
  {
    rank: '01 Giải Ba',
    title: 'Bản lĩnh đường đua',
    amount: 15,
    suffix: 'Tr VND',
    medal: figmaAssets.decorations.medalSilver
  },
  {
    rank: '03 Giải Khuyến khích',
    title: 'Tinh thần Future Makers',
    amount: 10,
    suffix: 'Tr VND / Giải',
    medal: figmaAssets.decorations.medalBronze
  }
];

const scoreRanks = ['Giải nhất', 'Giải nhì', 'Giải ba', 'Khuyến khích'];

const scoreRows = [
  {
    label: 'Kéo co',
    subtitle: 'Sức mạnh & chiến thuật',
    tone: 'text-brand-orange',
    scores: ['100đ', '70đ', '50đ', '30đ']
  },
  {
    label: 'Team building',
    subtitle: 'Phối hợp đồng đội',
    tone: 'text-sky-500',
    scores: ['100đ', '70đ', '50đ', '30đ']
  },
  {
    label: 'Got Talent',
    subtitle: 'Sáng tạo & nghệ thuật',
    tone: 'text-purple-700',
    scores: ['100đ', '70đ', '50đ', '30đ']
  }
];

const bonusItems = [
  {
    score: '+30đ',
    title: 'Điểm truyền thông',
    copy: 'Đội trưởng có hình ảnh ra quân trên Xuân Cầu Family đạt tương tác nổi bật.'
  },
  {
    score: '+20đ/chặng',
    title: 'Điểm kỷ luật',
    copy: 'Cộng thẳng cho đội tập trung đầy đủ quân số và đúng giờ quy định.'
  },
  {
    score: '+30đ',
    title: 'Nhận diện đội đua',
    copy: 'Phụ kiện độc lạ, bảng cổ vũ hoặc slogan chào sân chất nhất.'
  },
  {
    score: '+40đ',
    title: 'Hoa khôi check-in',
    copy: 'Ảnh tập thể tại Photobooth Gala được vote trực tiếp qua màn LED.'
  }
];

export function Rewards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="rewards" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <DecorationLayer variant="light" density="normal" />
      <div className="container-x relative z-10">
        <SectionTitle label="CƠ CẤU" title="GIẢI THƯỞNG" className="clean-section-title" />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <Reveal className="reward-champion-card relative min-h-[420px] overflow-hidden rounded-[2.25rem] bg-[#fff2d2] p-7 shadow-soft sm:p-10 lg:min-h-[520px] lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.8),transparent_26%),radial-gradient(circle_at_74%_20%,rgba(250,204,21,0.34),transparent_24%)]" />
            <motion.img
              src={figmaAssets.decorations.trophy}
              alt=""
              className="champion-trophy absolute bottom-8 right-5 z-10 h-[230px] w-auto object-contain sm:bottom-9 sm:right-9 sm:h-[300px] lg:bottom-10 lg:right-12 lg:h-[360px]"
              animate={shouldReduceMotion ? undefined : { y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.06, rotate: 2 }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-20 max-w-[64%] pt-6 sm:pt-10">
              <p className="text-[clamp(3.8rem,10vw,7rem)] font-black leading-none text-brand-orange">01</p>
              <p className="mt-2 text-[clamp(2.4rem,6vw,4.8rem)] font-black uppercase leading-none text-brand-orange">Giải nhất</p>
              <p className="mt-8 text-[clamp(2.25rem,7vw,5rem)] font-black leading-none text-slate-800">
                <AnimatedCounter value={25000000} suffix=" VND" />
              </p>
              <p className="mt-4 text-[clamp(1.8rem,4vw,3.8rem)] font-black uppercase leading-none text-slate-800">+ Cúp vô địch</p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {prizeCards.map((prize, index) => (
              <motion.article
                key={prize.rank}
                className="reward-medal-card group relative overflow-hidden rounded-[2rem] bg-[#fff2d2] p-6 shadow-soft"
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                viewport={{ once: false, amount: 0.32 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.08 }}
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <motion.img
                    src={prize.medal}
                    alt=""
                    className="reward-medal-icon h-24 w-auto shrink-0 object-contain sm:h-28"
                    animate={shouldReduceMotion ? undefined : { y: [0, -7, 0], rotate: [-1, 1, -1] }}
                    transition={{ duration: 4.2 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-black uppercase text-brand-orange">{prize.rank}</p>
                    <h3 className="mt-1 text-balance text-[clamp(1.25rem,2.4vw,1.72rem)] font-black uppercase leading-tight tracking-[-0.02em] text-slate-900">{prize.title}</h3>
                    <p className="mt-3 text-[clamp(2.25rem,5vw,4rem)] font-black leading-none text-brand-orange">
                      <AnimatedCounter value={prize.amount} suffix={prize.suffix} />
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <Reveal className="launch-benefit mt-7 rounded-[2rem] bg-white/[0.88] p-5 shadow-soft backdrop-blur sm:p-7">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-orange-100 text-brand-orange shadow-[0_14px_30px_rgba(249,115,22,0.16)]">
              <Gift className="size-7" aria-hidden="true" />
            </span>
            <p className="text-[clamp(1.2rem,3vw,2rem)] font-black leading-tight text-slate-900">
              Đặc quyền bệ phóng: BTC hỗ trợ ngay{' '}
              <span className="text-brand-orange">
                <AnimatedCounter value={5000000} suffix=" VND/đội" />
              </span>{' '}
              làm kinh phí đầu tư ban đầu cho tiết mục Got Talent.
            </p>
          </div>
        </Reveal>

        <Reveal className="score-arena mt-14 overflow-hidden rounded-[2.25rem] bg-brand-orange text-white shadow-soft">
          <div className="relative isolate px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_12%,rgba(255,255,255,0.32),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(250,204,21,0.34),transparent_26%),linear-gradient(135deg,#f97316_0%,#ff9f1c_48%,#fff176_100%)]" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[radial-gradient(circle_at_52%_100%,rgba(124,45,18,0.24),transparent_48%)]" />

            <div className="score-stack grid gap-8 md:gap-10">
              <motion.div
                className="score-wide-box score-wide-box--strategy overflow-hidden rounded-[2rem] bg-white/[0.97] p-4 text-slate-950 shadow-[0_24px_70px_rgba(124,45,18,0.22)] ring-1 ring-white/70 sm:p-6 lg:p-8"
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.24 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="score-heading-row mx-auto max-w-5xl text-center">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-orange sm:text-sm">Bảng điểm chính</p>
                  <img
                    src={diemSoChienThuatTitle}
                    alt="Điểm số chiến thuật"
                    className="score-title-svg mx-auto mt-3 h-auto w-full max-w-[720px]"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="mx-auto mt-4 max-w-3xl text-sm font-bold leading-6 text-slate-600 sm:text-base">
                    Mỗi chặng là một cú bứt tốc. Đội dẫn đầu cần giữ nhịp, đội phía sau vẫn có đủ đường để lật ngược thế cờ.
                  </p>
                </div>

                <div className="score-table-panel mt-7 rounded-[1.6rem] bg-orange-50/80 p-2.5 text-slate-950 shadow-[inset_0_0_0_1px_rgba(249,115,22,0.12)] sm:p-4 lg:mt-8">
                  <div className="score-table-scroll overflow-x-auto">
                    <div className="score-table-grid">
                      <div className="score-row grid grid-cols-[1.12fr_repeat(4,minmax(0,1fr))] gap-1.5 sm:gap-2.5 lg:gap-3">
                        <div className="score-cell score-cell--header">Hạng</div>
                        {scoreRanks.map((rank) => (
                          <div key={rank} className="score-cell score-cell--header">
                            {rank}
                          </div>
                        ))}
                      </div>

                      <div className="mt-1.5 space-y-1.5 sm:mt-2.5 sm:space-y-2.5 lg:mt-3 lg:space-y-3">
                        {scoreRows.map((row, rowIndex) => (
                          <motion.div
                            key={row.label}
                            className="score-row grid grid-cols-[1.12fr_repeat(4,minmax(0,1fr))] gap-1.5 sm:gap-2.5 lg:gap-3"
                            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.45 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.42, delay: shouldReduceMotion ? 0 : rowIndex * 0.08 }}
                          >
                            <div className="score-cell score-cell--label">
                              <span className={['score-row-title font-black uppercase leading-tight', row.tone].join(' ')}>{row.label}</span>
                              <span className="mt-1 block text-[0.68rem] font-bold uppercase leading-tight text-slate-500 sm:text-xs">{row.subtitle}</span>
                            </div>
                            {row.scores.map((score, index) => (
                              <div key={`${row.label}-${score}-${index}`} className="score-cell score-cell--value">
                                <span className={row.tone}>{score}</span>
                              </div>
                            ))}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="score-wide-box comeback-panel rounded-[2rem] bg-slate-950 p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.25)] ring-1 ring-white/10 sm:p-6 lg:p-8"
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.24 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="comeback-layout grid gap-5 lg:grid-cols-[0.34fr_0.66fr] lg:items-stretch">
                  <div className="comeback-title-box flex h-full flex-col justify-between rounded-[1.5rem] bg-white/[0.06] p-5 ring-1 ring-white/10 sm:p-6">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-100 sm:text-sm">Hệ thống điểm phụ</p>
                      <img
                        src={latNguocTheCoTitle}
                        alt="Lật ngược thế cờ"
                        className="comeback-title-svg mt-3 h-auto w-full max-w-[390px]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="mt-5 rounded-2xl bg-white p-4 text-sm font-extrabold leading-6 text-slate-900">
                      Tổng điểm = Chặng 1 + Chặng 2 + Chặng 3 + Tổng điểm phụ. Nếu bằng điểm, ưu tiên Got Talent, điểm phụ, rồi kết quả đối đầu tại Kéo co.
                    </p>
                  </div>

                  <div className="bonus-grid grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {bonusItems.map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="bonus-card flex min-h-[165px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur"
                        initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={shouldReduceMotion ? undefined : { y: -4, backgroundColor: 'rgba(255,255,255,0.14)' }}
                        viewport={{ once: false, amount: 0.45 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.38, delay: shouldReduceMotion ? 0 : index * 0.06 }}
                      >
                        <div>
                          <p className="text-[clamp(1.25rem,2.6vw,1.85rem)] font-black leading-none text-brand-yellow">{item.score}</p>
                          <h4 className="mt-2 text-sm font-black uppercase leading-tight text-white">{item.title}</h4>
                        </div>
                        <p className="mt-3 text-sm font-semibold leading-6 text-white/[0.72]">{item.copy}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
