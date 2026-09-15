import { useCurrentFrame, useVideoConfig } from "remotion";
import { MovingPanel } from "../components/MovingPanel";
import { PageCrop } from "../components/PageCrop";
import { useCaptureConfig } from "../showcase-config";
import { SCROLL_BEATS } from "../timing";
import { between, firstScrollEase, referenceScrollEase } from "./shared";

const progressThroughStops = (
  frame: number,
  stops: readonly number[],
): number => {
  const { first, second, third, fourth, rewind } = SCROLL_BEATS;

  if (frame < first[0]) return stops[0];
  if (frame <= first[1]) {
    return between(frame, first, [stops[0], stops[1]], firstScrollEase);
  }
  if (frame < second[0]) return stops[1];
  if (frame <= second[1]) {
    return between(frame, second, [stops[1], stops[2]], referenceScrollEase);
  }
  if (frame < third[0]) return stops[2];
  if (frame <= third[1]) {
    return between(frame, third, [stops[2], stops[3]], referenceScrollEase);
  }
  if (frame < fourth[0]) return stops[3];
  if (frame <= fourth[1]) {
    return between(frame, fourth, [stops[3], stops[4]], referenceScrollEase);
  }
  if (frame < rewind[0]) return stops[4];
  if (frame <= rewind[1]) {
    return between(frame, rewind, [stops[4], stops[0]], referenceScrollEase);
  }
  return stops[0];
};

export const ScrollScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const capture = useCaptureConfig();
  const panelWidth = width * 0.898;
  const sourceY = progressThroughStops(frame, capture.scrollAnchors);

  return (
    <MovingPanel
      left={width * 0.051}
      top={height * 0.047}
      width={panelWidth}
      height={height * 0.906}
    >
      <PageCrop
        capture={capture}
        panelWidth={panelWidth}
        sourceY={sourceY}
        showNavigation
      />
    </MovingPanel>
  );
};
