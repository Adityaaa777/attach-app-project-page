import { useRelatedCarousel } from "./useRelatedCarousel"
import "./section08-related-projects.css"

const projects = [
  {
    title: "Nzcu",
    description: "Book cars, scooters, e-rickshaws, and loaders—all from one platform.",
    category: "Mobile App Design",
    image: "/assets/related-covers/nzcu-cover.webp",
    href: "https://adityaaa777.github.io/nzcu-project-page/",
  },
  {
    title: "Cabzo",
    description: "A smart ride booking app designed for fast, convenient, and reliable travel.",
    category: "Mobile App Design",
    image: "/assets/related-covers/cabzo-cover.webp",
    href: "https://adityaaa777.github.io/cabzo-project-page/",
  },
  {
    title: "Safe 2 Destination",
    description: "Book safe daily or monthly rides with a seamless travel experience.",
    category: "Mobile App Design",
    image: "/assets/related-covers/safe-2-destination-cover.webp",
    href: "https://adityaaa777.github.io/safe2destination-project-page/",
  },
  {
    title: "Attach Website",
    description: "Explore a welcoming space for open conversations and support.",
    category: "Web Design",
    image: "/assets/related-covers/attach-website-cover.webp",
    href: "https://adityaaa777.github.io/attach-website-project-page/",
  },
  {
    title: "Cyrus 24",
    description: "Tap. Ride. Relax. A taxi service designed for simple, comfortable rides.",
    category: "Mobile App Design",
    image: "/assets/related-covers/cyrus-24-cover.webp",
    href: "https://adityaaa777.github.io/cyrus-24-project-page/",
  },
]

/** Standalone related project carousel from Figma node 67:3793. */
export default function Section08RelatedProjects() {
  const { track, move } = useRelatedCarousel()

  return (
    <section className="attach-section-08" aria-labelledby="attach-related-title" data-node-id="67:3793">
      <div className="attach-related-content">
        <header className="attach-related-header">
          <h2 id="attach-related-title">Related Projects</h2>
          <nav className="attach-related-controls" aria-label="Related project carousel">
            <button type="button" onClick={() => move(-1)} aria-label="Previous projects"><img src="/assets/arrow-left.svg" alt="" /></button>
            <button type="button" onClick={() => move(1)} aria-label="Next projects"><img src="/assets/arrow-left.svg" alt="" /></button>
          </nav>
        </header>
        <div className="attach-related-track" ref={track}>
          {projects.map((project) => (
            <div className="attach-related-card" key={project.title}>
              <a className="attach-related-card-main" href={project.href} aria-label={`View ${project.title} project`}>
                <img className="attach-related-cover" src={project.image} alt={`${project.title} project cover`} />
                <div className="attach-related-card-content">
                  <div className="attach-related-meta">
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
              <a className="attach-related-card-arrow" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} project in a new tab`}>
                <img src="/assets/section-08-related/project-arrow-alt.svg" alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
