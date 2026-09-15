import { Composition } from "remotion";
import { JetCarsShowcase } from "./JetCarsShowcase";
import { DURATION_IN_FRAMES, FPS } from "./timing";

export const ShowcaseCompositions: React.FC = () => {
  return (
    <>
      <Composition
        id="JetCarsFacebookReel"
        component={JetCarsShowcase}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="JetCarsReference"
        component={JetCarsShowcase}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={1252}
        height={900}
      />
    </>
  );
};
