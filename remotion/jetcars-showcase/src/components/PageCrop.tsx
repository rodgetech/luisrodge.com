import type { CSSProperties } from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import type { CaptureConfig } from "../showcase-config";

type PageCropProps = {
  capture: CaptureConfig;
  panelWidth: number;
  sourceY: number;
  showNavigation?: boolean;
  style?: CSSProperties;
  imageStyle?: CSSProperties;
};

export const PageCrop: React.FC<PageCropProps> = ({
  capture,
  panelWidth,
  sourceY,
  showNavigation = false,
  style,
  imageStyle,
}) => {
  const scale = panelWidth / capture.sourceWidth;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#f4f1e9",
        overflow: "hidden",
        ...style,
      }}
    >
      <Img
        src={staticFile(capture.src)}
        style={{
          position: "absolute",
          left: 0,
          top: -sourceY * scale,
          width: panelWidth,
          height: "auto",
          maxWidth: "none",
          ...imageStyle,
        }}
      />
      {showNavigation && (
        <Img
          src={staticFile(capture.navSrc)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: panelWidth,
            height: "auto",
          }}
        />
      )}
    </AbsoluteFill>
  );
};
