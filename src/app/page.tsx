import { Deck } from "@/components/Deck";
import { Api } from "@/components/slides/Api";
import { Cinematic } from "@/components/slides/Cinematic";
import { Continuity } from "@/components/slides/Continuity";
import { Cover } from "@/components/slides/Cover";
import { Drafting } from "@/components/slides/Drafting";
import { Features } from "@/components/slides/Features";
import { Library } from "@/components/slides/Library";
import { Mep } from "@/components/slides/Mep";
import { NewOrExisting } from "@/components/slides/NewOrExisting";
import { Problem } from "@/components/slides/Problem";
import { SpatialAI } from "@/components/slides/SpatialAI";
import { ThankYou } from "@/components/slides/ThankYou";
import { TwoDToThreeD } from "@/components/slides/TwoDToThreeD";
import { Vastu } from "@/components/slides/Vastu";
import { Walkthrough } from "@/components/slides/Walkthrough";
import { Workflow } from "@/components/slides/Workflow";

export default function Home() {
  return (
    <Deck>
      <Cover />
      <Workflow />
      <Problem />
      <Continuity />
      <Features />
      <Drafting />
      <NewOrExisting />
      <TwoDToThreeD />
      <SpatialAI />
      <Walkthrough />
      <Mep
        id="mep"
        hero="mep-frame"
        heroAlt="Structural frame of a building with colour-coded HVAC, plumbing, electrical and drainage runs"
      />
      <Mep
        id="mep-model"
        hero="mep-hero"
        heroAlt="The same building with walls and interiors in place, services routed through the finished model"
      />
      <Cinematic />
      <Library />
      <Api />
      <Vastu />
      <ThankYou />
    </Deck>
  );
}
