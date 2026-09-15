import { useVideoConfig } from "remotion";

export type CaptureConfig = {
  src: string;
  navSrc: string;
  sourceWidth: number;
  sourceHeight: number;
  openingAnchors: readonly number[];
  scrollAnchors: readonly number[];
};

const desktop: CaptureConfig = {
  src: "jetcars/desktop-clean.png",
  navSrc: "jetcars/desktop-clean-nav.png",
  sourceWidth: 1252,
  sourceHeight: 6357,
  openingAnchors: [108, 1008, 1840, 3840, 4380, 5580],
  // Reference-paced scrolls, with the first landing adjusted so the real
  // section heading clears the fixed navigation.
  scrollAnchors: [108, 948, 1718.022, 2451.875, 3174.815],
};

const mobile: CaptureConfig = {
  src: "jetcars/mobile-clean.png",
  navSrc: "jetcars/mobile-clean-nav.png",
  sourceWidth: 1080,
  sourceHeight: 15862,
  openingAnchors: [260, 2050, 4820, 9840, 11280, 14160],
  // Responsive landings retain section headings below the fixed header.
  scrollAnchors: [108, 1928, 3542.714, 5108.267, 6650.539],
};

export const useCaptureConfig = (): CaptureConfig => {
  const { width, height } = useVideoConfig();
  return height > width ? mobile : desktop;
};
