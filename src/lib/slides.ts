export type SlideMeta = {
  /** URL fragment, also the section id */
  id: string;
  /** Short label used in the navigator and header */
  label: string;
  /** Longer descriptor shown in the slide index overlay */
  blurb: string;
};

export const SLIDES: SlideMeta[] = [
  { id: "cover", label: "Cover", blurb: "One platform — from concept to construction" },
  { id: "workflow", label: "Workflow", blurb: "From design to visualize to construct" },
  { id: "problem", label: "The Problem", blurb: "Connected tools, broken continuity" },
  { id: "continuity", label: "Intelligence Layer", blurb: "One project, one continuous context" },
  { id: "features", label: "Features", blurb: "Everything you need, in one platform" },
  { id: "drafting", label: "Floor Plan Drafting", blurb: "CAD-style control, enhanced by AI" },
  { id: "new-or-existing", label: "New or Existing", blurb: "Build new or reconstruct an existing home" },
  { id: "2d-to-3d", label: "2D to 3D", blurb: "Draw in 2D, see it in 3D instantly" },
  { id: "spatial-ai", label: "Spatial AI", blurb: "Choose a style, AI designs the space" },
  { id: "walkthrough", label: "Walkthrough", blurb: "Real-time 3D with daylight and night light" },
  { id: "mep", label: "MEP & Structural", blurb: "Integrated services on the structural frame" },
  { id: "mep-model", label: "MEP — Full Model", blurb: "The same services inside the finished model" },
  { id: "cinematic", label: "Cinematic Video", blurb: "4K walkthrough renders in minutes" },
  { id: "library", label: "Asset Library", blurb: "2K+ curated assets, real brands" },
  { id: "api", label: "Business API", blurb: "2D to 3D conversion for your applications" },
  { id: "vastu", label: "AI Vastu", blurb: "Traditional wisdom, modern technology" },
  { id: "thank-you", label: "Thank You", blurb: "Together, let us build a smarter tomorrow" },
];
