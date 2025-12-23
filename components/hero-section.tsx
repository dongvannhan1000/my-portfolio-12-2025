import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { client, siteSettingsQuery, type SiteSettings } from "@/lib/sanity"

// Default fallback data
const defaultSettings: SiteSettings = {
  name: "Your Name",
  title: "Full-Stack Developer",
  tagline: "Building Digital Experiences",
  bio: "I specialize in creating high-performance web applications using modern technologies. Passionate about clean code, great design, and solving complex problems.",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "your.email@example.com",
  },
}

async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const data = await client.fetch(siteSettingsQuery)
    return data || defaultSettings
  } catch (error) {
    console.error("Error fetching site settings:", error)
    return defaultSettings
  }
}

export async function HeroSection() {
  const settings = await getSiteSettings()
  const { name, title, tagline, bio, socialLinks } = { ...defaultSettings, ...settings }

  return (
    <section id="home" className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 animate-fade-in">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-2">
              Hi, I&apos;m {name}
            </div>
            <h1 className="text-text-balance">
              <span className="text-primary">{title}</span>
              <br />
              {tagline}
            </h1>

            <p className="text-lg text-foreground/70 max-w-2xl text-pretty">
              {bio}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all hover:gap-3"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-8">
            <span className="text-foreground/60 font-medium">Follow</span>
            <div className="flex gap-4">
              {socialLinks?.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/20 text-foreground hover:bg-accent hover:text-accent-foreground transition-all transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {socialLinks?.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/20 text-foreground hover:bg-accent hover:text-accent-foreground transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {socialLinks?.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="p-3 rounded-lg bg-secondary/20 text-foreground hover:bg-accent hover:text-accent-foreground transition-all transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 flex justify-center animate-bounce">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
