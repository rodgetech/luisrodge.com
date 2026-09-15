import { AbsoluteFill, Sequence } from "remotion";
import { ScrollScene } from "./scenes/ScrollScene";
import { ShotFive } from "./scenes/ShotFive";
import { ShotFour } from "./scenes/ShotFour";
import { ShotOne } from "./scenes/ShotOne";
import { ShotSix } from "./scenes/ShotSix";
import { ShotThree } from "./scenes/ShotThree";
import { ShotTwo } from "./scenes/ShotTwo";
import { OPENING_SHOTS, SCROLL_SCENE } from "./timing";

const shotComponents = [
  ShotOne,
  ShotTwo,
  ShotThree,
  ShotFour,
  ShotFive,
  ShotSix,
] as const;

export const JetCarsShowcase: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#092c3a" }}>
      {OPENING_SHOTS.map((shot, index) => {
        const Shot = shotComponents[index];

        return (
          <Sequence
            key={shot.from}
            from={shot.from}
            durationInFrames={shot.duration}
            name={`Opening shot ${index + 1}`}
          >
            <Shot />
          </Sequence>
        );
      })}
      <Sequence
        from={SCROLL_SCENE.from}
        durationInFrames={SCROLL_SCENE.duration}
        name="Full-page scroll and rewind"
      >
        <ScrollScene />
      </Sequence>
    </AbsoluteFill>
  );
};
