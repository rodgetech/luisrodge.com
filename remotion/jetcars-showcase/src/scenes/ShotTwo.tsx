import { useCurrentFrame, useVideoConfig } from "remotion";
import { MovingPanel } from "../components/MovingPanel";
import { PageCrop } from "../components/PageCrop";
import { useCaptureConfig } from "../showcase-config";
import { between, expoIn, expoOut } from "./shared";

export const ShotTwo: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const capture = useCaptureConfig();
  const panelWidth = width * 0.961;
  const x =
    frame <= 24
      ? between(frame, [0, 24], [width * 0.489, width * 0.024], expoOut)
      : between(frame, [24, 44], [width * 0.024, -width * 0.299], expoIn);

  return (
    <MovingPanel
      left={x}
      top={height * 0.056}
      width={panelWidth}
      height={height * 0.891}
    >
      <PageCrop
        capture={capture}
        panelWidth={panelWidth}
        sourceY={capture.openingAnchors[1]}
      />
    </MovingPanel>
  );
};
