import type { CSSProperties, PropsWithChildren } from "react";

type MovingPanelProps = PropsWithChildren<{
  left: number;
  top: number;
  width: number;
  height: number;
  transform?: string;
  transformOrigin?: string;
  style?: CSSProperties;
}>;

export const MovingPanel: React.FC<MovingPanelProps> = ({
  children,
  left,
  top,
  width,
  height,
  transform,
  transformOrigin,
  style,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width,
        height,
        overflow: "hidden",
        transform,
        transformOrigin,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
