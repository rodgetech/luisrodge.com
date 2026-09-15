import { useCurrentFrame, useVideoConfig } from "remotion";
import { MovingPanel } from "../components/MovingPanel";
import { PageCrop } from "../components/PageCrop";
import { useCaptureConfig } from "../showcase-config";
import { between, expoIn, expoOut } from "./shared";

export const ShotOne: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const capture = useCaptureConfig();
  const panelWidth = width * 0.901;
  const panelHeight = height * (height > width ? 0.836 : 0.906);
  const x = between(frame, [25, 45], [width * 0.05, -width * 0.097], expoIn);
  const y = between(frame, [0, 25], [height * 0.44, height * 0.082], expoOut);

  return (
    <MovingPanel left={x} top={y} width={panelWidth} height={panelHeight}>
      <PageCrop
        capture={capture}
        panelWidth={panelWidth}
        sourceY={capture.openingAnchors[0]}
        showNavigation
      />
    </MovingPanel>
  );
};
