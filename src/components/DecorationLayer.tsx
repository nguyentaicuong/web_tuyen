import { motion, useReducedMotion } from 'framer-motion';
import { figmaAssets } from '../data/figmaAssets';

type DecorationLayerProps = {
  variant?: 'hero' | 'light' | 'dark' | 'ocean';
  density?: 'normal' | 'rich';
};

function floatingTransition(duration: number, delay = 0) {
  return {
    duration,
    delay,
    repeat: Infinity,
    ease: 'easeInOut' as const
  };
}

export function DecorationLayer({ variant = 'light', density = 'normal' }: DecorationLayerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (variant === 'hero') {
    return null;
  }

  const isDark = variant === 'dark';
  const overlayAsset = density === 'rich' ? figmaAssets.decorations.balloons : figmaAssets.decorations.confetti;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.img
        src={overlayAsset}
        alt=""
        className={[
          'asset-decoration left-1/2 top-8 w-[min(1500px,118vw)] -translate-x-1/2 object-contain',
          isDark ? 'opacity-20' : 'opacity-55'
        ].join(' ')}
        animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={floatingTransition(8, 0.2)}
      />
      <motion.img
        src={figmaAssets.hero.cloud}
        alt=""
        className={[
          'asset-decoration left-[4%] top-[12%] w-[min(250px,32vw)] object-contain',
          isDark ? 'opacity-15' : 'opacity-45'
        ].join(' ')}
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], x: [0, 8, 0] }}
        transition={floatingTransition(7)}
      />
      <motion.img
        src={figmaAssets.hero.cloud}
        alt=""
        className={[
          'asset-decoration right-[4%] top-[18%] w-[min(300px,36vw)] object-contain',
          isDark ? 'opacity-10' : 'opacity-35'
        ].join(' ')}
        animate={shouldReduceMotion ? undefined : { y: [0, 12, 0], x: [0, -10, 0] }}
        transition={floatingTransition(8, 0.4)}
      />
      {variant === 'ocean' ? <span className="ocean-glow left-[18%] top-[28%]" /> : null}
    </div>
  );
}
