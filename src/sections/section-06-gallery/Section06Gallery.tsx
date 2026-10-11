import { DetailImage } from "../../components/DetailImage"
import "./section06-gallery.css"

const columns = [
  [
    { file: "inbox-upper.png", alt: "Attach inbox" },
    { file: "user-profile.png", alt: "User profile and account settings" },
  ],
  [
    { file: "refer-upper.png", alt: "Refer and Earn rewards" },
    { file: "inbox-lower.png", alt: "Attach inbox conversations" },
  ],
  [
    { file: "notifications.png", alt: "Notifications" },
    { file: "chat.png", alt: "Dark theme chat" },
  ],
  [
    { file: "listener-profile.png", alt: "Listener profile" },
    { file: "refer-middle.png", alt: "Refer and Earn rewards" },
  ],
  [
    { file: "kyc.png", alt: "KYC submitted" },
    { file: "refer-right.png", alt: "Refer and Earn rewards" },
  ],
] as const

/** Staggered gallery of ten independent Figma image layers, frame 69:3803. */
export default function Section06Gallery() {
  return (
    <section className="attach-section-06" aria-label="Attach app screens" data-node-id="69:3803">
      {columns.map((screens, index) => (
        <div className={`attach-section-06-column attach-section-06-column--${index + 1}`} key={index}>
          {screens.map(({ file, alt }) => (
            <DetailImage key={file} src={`/assets/section-06-gallery/${file}`} alt={alt} />
          ))}
        </div>
      ))}
    </section>
  )
}
