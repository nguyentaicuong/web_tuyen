const publicAsset = (fileName: string) => `${import.meta.env.BASE_URL}figma/${fileName}`;

export const figmaAssets = {
  logo: publicAsset('logo.webp'),
  hero: {
    eyebrow: publicAsset('hero-eyebrow.webp'),
    title: publicAsset('hero-title.webp'),
    copy: publicAsset('hero-copy.webp'),
    cloud: publicAsset('cloud.webp'),
    graphic: publicAsset('hero-future-makers.webp')
  },
  decorations: {
    confetti: publicAsset('confetti.webp'),
    balloons: publicAsset('balloons.webp'),
    medalGold: publicAsset('medal-gold.webp'),
    medalSilver: publicAsset('medal-silver.webp'),
    medalBronze: publicAsset('medal-bronze.webp'),
    trophy: publicAsset('trophy.webp')
  },
  journey: {
    dayOne: publicAsset('journey-day-1.webp'),
    dayTwo: publicAsset('journey-day-2.webp'),
    dayThree: publicAsset('journey-day-3.webp')
  },
  stages: {
    tug: publicAsset('stage-tug.webp'),
    team: publicAsset('stage-team.webp'),
    talent: publicAsset('stage-talent.webp')
  },
  experience: {
    pool: publicAsset('experience-pool.webp'),
    shore: publicAsset('experience-shore.webp'),
    night: publicAsset('experience-night.webp'),
    bar: publicAsset('experience-bar.webp'),
    gym: publicAsset('experience-gym.webp')
  },
  cta: {
    title: publicAsset('cta-title.webp'),
    footerTexture: publicAsset('footer-texture.webp')
  }
};

export type FigmaAssets = typeof figmaAssets;
