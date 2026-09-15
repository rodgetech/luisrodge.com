import { useCurrentFrame, useVideoConfig } from "remotion";
import { MovingPanel } from "../components/MovingPanel";
import { PageCrop } from "../components/PageCrop";
import { useCaptureConfig } from "../showcase-config";
import { between, expoIn, expoOut } from "./shared";

export const ShotFour: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const capture = useCaptureConfig();
  const panelWidth = width * 1.002;
  const x = between(frame, [18, 39], [width * 0.046, -width * 0.09], expoIn);
  const y =
    frame <= 18
      ? between(frame, [0, 18], [height * 0.52, height * 0.064], expoOut)
      : between(frame, [18, 39], [height * 0.064, -height * 0.078], expoIn);

  return (
    <MovingPanel left={x} top={y} width={panelWidth} height={height * 0.929}>
      <PageCrop
        capture={capture}
        panelWidth={panelWidth}
        sourceY={capture.openingAnchors[3]}
      />
    </MovingPanel>
  );
};
