export const FPS = 30;
export const DURATION_IN_FRAMES = 779;

export const OPENING_SHOTS = [
  { from: 0, duration: 46 },
  { from: 46, duration: 45 },
  { from: 91, duration: 74 },
  { from: 165, duration: 40 },
  { from: 205, duration: 65 },
  { from: 270, duration: 59 },
] as const;

export const SCROLL_SCENE = { from: 329, duration: 450 } as const;

// Scene-local frames transcribed from the 30fps reference.
export const SCROLL_BEATS = {
  first: [61, 103],
  second: [145, 179],
  third: [224, 260],
  fourth: [298, 334],
  rewind: [371, 445],
} as const;
