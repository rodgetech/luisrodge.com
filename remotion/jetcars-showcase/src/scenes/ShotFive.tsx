import { useCurrentFrame, useVideoConfig } from "remotion";
import { MovingPanel } from "../components/MovingPanel";
import { PageCrop } from "../components/PageCrop";
import { useCaptureConfig } from "../showcase-config";
import { between, expoOut, referenceScrollEase } from "./shared";

export const ShotFive: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const capture = useCaptureConfig();
  const panelWidth = width * 1.003;
  const x = between(frame, [0, 22], [width * 0.174, width * 0.026], expoOut);
  const y = between(frame, [0, 22], [height * 0.191, height * 0.036], expoOut);
  // Keep complete booking controls in view. The narrow mobile form cannot
  // support the same magnification as the two-column desktop layout.
  const scale = between(
    frame,
    [42, 64],
    [1, height > width ? 1.06 : 1.55],
    referenceScrollEase,
  );

  return (
    <MovingPanel
      left={x}
      top={y}
      width={panelWidth}
      height={height * 0.931}
      transform={`scale(${scale})`}
      transformOrigin={height > width ? "50% 45%" : "0% 45%"}
    >
      <PageCrop
        capture={capture}
        panelWidth={panelWidth}
        sourceY={capture.openingAnchors[4]}
      />
    </MovingPanel>
  );
};
