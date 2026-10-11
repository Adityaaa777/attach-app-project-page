import { DetailImage } from "../../components/DetailImage"
import "./section05-onboarding.css"

const screens = [
  { file: "mission.png", alt: "Mission onboarding screen" },
  { file: "conversations.png", alt: "Real Conversations onboarding screen" },
  { file: "mind-matters.png", alt: "Your Mind Matters onboarding screen" },
] as const

/** Three independently exported screens from Attach_App Figma frame 69:3802. */
export default function Section05Onboarding() {
  return (
    <section className="attach-section-05" aria-label="Attach onboarding screens" data-node-id="69:3802">
      <div className="attach-section-05-panel" aria-hidden="true" />
      <div className="attach-section-05-screens">
        {screens.map(({ file, alt }) => (
          <DetailImage
            key={file}
            src={`/assets/section-05-onboarding/${file}`}
            width="300"
            height="650"
            alt={alt}
          />
        ))}
      </div>
    </section>
  )
}
