import { DetailImage } from "../../components/DetailImage"
import "./section02-cover.css"

const assetRoot = "/assets/section-02-cover"

/** Attach_App cover artwork from Figma node 65:2732. */
export default function Section02Cover() {
  return (
    <section className="attach-section-02" aria-label="Attach App project cover" data-node-id="65:2732">
      <div className="attach-section-02__copy">
        <h1>Attach</h1>
        <p>
          Connect with caring listeners anytime, anywhere. Share your thoughts in a safe,
          supportive space and feel heard whenever you need it.
        </p>
      </div>

      <div className="attach-section-02__phone attach-section-02__phone--splash" data-node-id="65:2749">
        <DetailImage src={`${assetRoot}/attach-splash.png`} alt="Attach app splash screen" />
      </div>
      <div className="attach-section-02__phone attach-section-02__phone--home" data-node-id="65:2763">
        <DetailImage src={`${assetRoot}/attach-home.png`} alt="Attach app listener home screen" />
      </div>
    </section>
  )
}
