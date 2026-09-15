import { Easing, interpolate } from "remotion";

// Normalize endpoints: Remotion's raw exponential leaves a small residual
// at rest, which otherwise snaps when an entrance changes into an exit.
export const expoIn = (t: number) => (2 ** (10 * t) - 1) / 1023;
export const expoOut = (t: number) => 1 - expoIn(1 - t);
export const firstScrollEase = Easing.bezier(0.6, 0, 0.4, 1);
export const referenceScrollEase = Easing.bezier(0.55, 0, 0.45, 1);

export const between = (
  frame: number,
  input: readonly [number, number],
  output: readonly [number, number],
  easing = referenceScrollEase,
) =>
  interpolate(frame, input, output, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });
