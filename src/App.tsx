import Section01ProjectNavigation from "./sections/section-01-project-navigation/Section01ProjectNavigation"
import Section02Cover from "./sections/section-02-cover/Section02Cover"
import Section03Overview from "./sections/section-03-overview/Section03Overview"
import Section04Gallery from "./sections/section-04-gallery/Section04Gallery"
import Section05Onboarding from "./sections/section-05-onboarding/Section05Onboarding"
import Section06Gallery from "./sections/section-06-gallery/Section06Gallery"
import Section07DesignSystem from "./sections/section-07-design-system/Section07DesignSystem"
import Section08RelatedProjects from "./sections/section-08-related-projects/Section08RelatedProjects"
import Section09Footer from "./sections/section-09-footer/Section09Footer"

const sections: Record<string, React.ComponentType> = {
  "1": Section01ProjectNavigation,
  "2": Section02Cover,
  "3": Section03Overview,
  "4": Section04Gallery,
  "5": Section05Onboarding,
  "6": Section06Gallery,
  "7": Section07DesignSystem,
  "8": Section08RelatedProjects,
  "9": Section09Footer,
}

/** Sections are added in the order of the supplied Attach_App Figma frames. */
export default function App() {
  const section = new URLSearchParams(window.location.search).get("section")
  if (section && sections[section]) {
    const SelectedSection = sections[section]
    return <main className={`attach-section-preview${section === "1" ? " attach-section-preview--navigation" : ""}`}><SelectedSection /></main>
  }

  return (
    <main className="attach-project-page">
      <div className="attach-project-page__navigation">
        <Section01ProjectNavigation />
      </div>
      <Section02Cover />
      <Section03Overview />
      <Section04Gallery />
      <Section05Onboarding />
      <Section06Gallery />
      <Section07DesignSystem />
      <Section08RelatedProjects />
      <Section09Footer />
    </main>
  )
}
