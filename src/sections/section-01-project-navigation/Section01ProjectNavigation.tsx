import "./section01-project-navigation.css"

export type Section01ProjectNavigationProps = {
  backHref?: string
  nextHref?: string
}

/** Attach_App project navigation from Figma node 65:2754. */
export default function Section01ProjectNavigation({
  backHref = "#back",
  nextHref = "#next",
}: Section01ProjectNavigationProps) {
  return (
    <nav className="attach-section-01-nav" aria-label="Project navigation" data-node-id="65:2754">
      <a className="attach-section-01-link" href={backHref}>
        <img className="attach-section-01-arrow" src="/assets/arrow-left.svg" alt="" />
        <span>Go Back</span>
      </a>

      <a className="attach-section-01-link" href={nextHref}>
        <span>Next Project</span>
        <img className="attach-section-01-arrow attach-section-01-arrow--right" src="/assets/arrow-left.svg" alt="" />
      </a>
    </nav>
  )
}
