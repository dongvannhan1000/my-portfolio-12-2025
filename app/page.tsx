import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { client, siteSettingsQuery, type SiteSettings } from "@/lib/sanity"

async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return await client.fetch(siteSettingsQuery)
  } catch (error) {
    console.error("Error fetching site settings in Home:", error)
    return null
  }
}

export default async function Home() {
  const settings = await getSiteSettings()
  const name = settings?.name || "Your Name"

  return (
    <main className="bg-background">
      <Navigation siteName={name} />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
