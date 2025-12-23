import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { client, siteSettingsQuery, type SiteSettings } from "@/lib/sanity"

// Default fallback data
const defaultSettings: SiteSettings = {
  name: "Your Name",
  title: "Full-Stack Developer",
  bio: "Full-stack developer crafting digital experiences with modern technologies.",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "hello@example.com",
  },
}

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resume", href: "/resume.pdf" },
      { label: "Blog", href: "/blog" },
      { label: "Articles", href: "/articles" },
      { label: "Guides", href: "/guides" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
]

async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const data = await client.fetch<SiteSettings>(siteSettingsQuery)
    return data || defaultSettings
  } catch (error) {
    console.error("Error fetching site settings:", error)
    return defaultSettings
  }
}

export async function Footer() {
  const settings = await getSiteSettings()
  const { name, bio, socialLinks } = { ...defaultSettings, ...settings }
  const currentYear = new Date().getFullYear()

  const socialLinksArray = [
    { icon: Github, href: socialLinks?.github, label: "GitHub" },
    { icon: Linkedin, href: socialLinks?.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: socialLinks?.twitter, label: "Twitter" },
    { icon: Mail, href: socialLinks?.email ? `mailto:${socialLinks.email}` : undefined, label: "Email" },
  ].filter((link) => link.href)

  return (
    <footer className="bg-secondary/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-primary">
              &lt;{name?.split(" ")[0] || "YourName"} /&gt;
            </Link>
            <p className="mt-4 text-foreground/70 text-sm leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-foreground/70 hover:text-accent transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links Column */}
          <div>
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinksArray.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-lg bg-secondary/20 text-foreground hover:bg-accent hover:text-accent-foreground transition-all transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; {currentYear} {name}. All rights reserved.</p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Next.js
            </a>
            {" & "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
