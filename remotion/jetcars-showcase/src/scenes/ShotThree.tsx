import { useCurrentFrame, useVideoConfig } from "remotion";
import { MovingPanel } from "../components/MovingPanel";
import { PageCrop } from "../components/PageCrop";
import { useCaptureConfig } from "../showcase-config";
import { between, expoIn, expoOut } from "./shared";

export const ShotThree: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const capture = useCaptureConfig();
  const panelWidth = width * 1.014;
  const x = between(frame, [0, 50], [width * 0.498, 0], expoOut);
  const y = between(frame, [54, 73], [height * 0.042, -height * 0.231], expoIn);

  return (
    <MovingPanel
      left={x}
      top={y}
      width={panelWidth}
      height={height * 0.94}
      style={{ backgroundColor: "#12343b" }}
    >
      <PageCrop
        capture={capture}
        panelWidth={panelWidth}
        sourceY={capture.openingAnchors[2]}
      />
    </MovingPanel>
  );
};
