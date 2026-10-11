import { DetailImage } from "../../components/DetailImage"
import "./section04-gallery.css"

const asset = (name: string) => `/assets/section-04-gallery/${name}.png`

/** Each phone is an original image fill exported separately from Figma. */
export default function Section04Gallery() {
  return (
    <section className="attach-section-04" aria-label="Attach user app screens" data-node-id="69:3801">
      <div className="attach-section-04-panel">
        <div className="attach-section-04-column attach-section-04-column--one">
          <DetailImage src={asset("raw-01")} alt="Mission onboarding screen" />
          <DetailImage src={asset("raw-06")} alt="Attach home feed" />
        </div>
        <div className="attach-section-04-column attach-section-04-column--two">
          <DetailImage src={asset("raw-07")} alt="Attach earnings dashboard" />
          <DetailImage src={asset("raw-10")} alt="User story" />
        </div>
        <div className="attach-section-04-column attach-section-04-column--three">
          <DetailImage src={asset("raw-10")} alt="User story" />
          <DetailImage src={asset("raw-04")} alt="Wallet dashboard" />
          <DetailImage src={asset("raw-07")} alt="Attach earnings dashboard" />
        </div>
        <div className="attach-section-04-column attach-section-04-column--four">
          <DetailImage src={asset("raw-03")} alt="Mission onboarding screen" />
          <DetailImage src={asset("raw-11")} alt="No account found screen" />
        </div>
        <div className="attach-section-04-column attach-section-04-column--five">
          <DetailImage src={asset("raw-06")} alt="Attach home feed" />
        </div>
      </div>
    </section>
  )
}
