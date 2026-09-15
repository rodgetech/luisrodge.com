import { useCurrentFrame, useVideoConfig } from "remotion";
import { MovingPanel } from "../components/MovingPanel";
import { PageCrop } from "../components/PageCrop";
import { useCaptureConfig } from "../showcase-config";
import { between, expoIn, expoOut } from "./shared";

export const ShotSix: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const capture = useCaptureConfig();
  const panelWidth = width * 1.002;
  const x = between(frame, [0, 32], [width * 0.372, width * 0.051], expoOut);
  const y = between(frame, [32, 58], [height * 0.049, -height * 0.162], expoIn);

  return (
    <MovingPanel left={x} top={y} width={panelWidth} height={height * 0.929}>
      <PageCrop
        capture={capture}
        panelWidth={panelWidth}
        sourceY={capture.openingAnchors[5]}
        style={{ backgroundColor: "#092c3a" }}
      />
    </MovingPanel>
  );
};
