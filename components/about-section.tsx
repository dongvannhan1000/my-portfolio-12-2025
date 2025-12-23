import { Award, Rocket, Lightbulb, Code2, Palette, Server, Database, GitBranch, Zap } from "lucide-react"
import {
  client,
  profileQuery,
  experiencesQuery,
  educationQuery,
  siteSettingsQuery,
  type Profile,
  type Experience,
  type Education,
  type SiteSettings,
} from "@/lib/sanity"

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-5 h-5 text-accent" />,
  Lightbulb: <Lightbulb className="w-5 h-5 text-accent" />,
  Award: <Award className="w-5 h-5 text-accent" />,
  Code2: <Code2 className="w-5 h-5 text-accent" />,
  Palette: <Palette className="w-5 h-5 text-accent" />,
  Server: <Server className="w-5 h-5 text-accent" />,
  Database: <Database className="w-5 h-5 text-accent" />,
  GitBranch: <GitBranch className="w-5 h-5 text-accent" />,
  Zap: <Zap className="w-5 h-5 text-accent" />,
}

// Default fallback data
const defaultExperiences: Experience[] = [
  {
    _id: "1",
    year: "2023 - Present",
    company: "Tech Innovators Inc.",
    position: "Senior Full-Stack Developer",
    description: "Leading development of scalable web applications and mentoring junior developers.",
    highlights: ["Led 5+ major projects", "Tech stack: Next.js, React, Node.js, PostgreSQL", "Team of 4 developers"],
  },
  {
    _id: "2",
    year: "2021 - 2023",
    company: "Digital Solutions Co.",
    position: "Full-Stack Developer",
    description: "Developed and maintained multiple client projects with focus on performance and UX.",
    highlights: ["Built 15+ production applications", "Improved performance by 40%", "Led frontend refactoring"],
  },
  {
    _id: "3",
    year: "2019 - 2021",
    company: "StartUp Labs",
    position: "Junior Developer",
    description: "Started my career building web applications and learning industry best practices.",
    highlights: ["First professional role", "Learned React & Node.js", "Shipped MVP products"],
  },
]

const defaultEducation: Education[] = [
  {
    _id: "1",
    year: "2019",
    school: "Tech University",
    degree: "Bachelor of Science",
    field: "Computer Science",
  },
  {
    _id: "2",
    year: "2020",
    school: "Online Platform",
    degree: "Professional Certificate",
    field: "Full-Stack Web Development",
  },
]

const defaultProfile: Profile = {
  aboutTitle: "Passionate Developer",
  aboutBio: "I'm a full-stack developer with 5+ years of experience building web applications. I love turning ideas into reality through clean, efficient code and thoughtful design.",
  highlights: [
    { icon: "Rocket", title: "Problem Solver", description: "I enjoy tackling complex challenges with creative solutions" },
    { icon: "Lightbulb", title: "Continuous Learner", description: "Always exploring new technologies and best practices" },
    { icon: "Award", title: "Quality Focused", description: "I prioritize clean code, performance, and user experience" },
  ],
}

async function getAboutData() {
  try {
    const [profile, experiences, education, settings] = await Promise.all([
      client.fetch<Profile>(profileQuery),
      client.fetch<Experience[]>(experiencesQuery),
      client.fetch<Education[]>(educationQuery),
      client.fetch<SiteSettings>(siteSettingsQuery),
    ])

    return {
      profile: profile || defaultProfile,
      experiences: experiences?.length ? experiences : defaultExperiences,
      education: education?.length ? education : defaultEducation,
      resumeUrl: settings?.resumeUrl || "/resume.pdf",
    }
  } catch (error) {
    console.error("Error fetching about data:", error)
    return {
      profile: defaultProfile,
      experiences: defaultExperiences,
      education: defaultEducation,
      resumeUrl: "/resume.pdf",
    }
  }
}

export async function AboutSection() {
  const { profile, experiences, education, resumeUrl } = await getAboutData()

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* About Content - Left Side */}
          <div className="lg:col-span-1 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Me</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">{profile.aboutTitle}</h2>

            <div className="mt-8 space-y-4">
              {/* Bio */}
              <p className="text-foreground/70 leading-relaxed">
                {profile.aboutBio}
              </p>

              {/* Highlights */}
              <div className="space-y-4 pt-4">
                {profile.highlights?.map((highlight, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      {iconMap[highlight.icon || "Rocket"] || <Rocket className="w-5 h-5 text-accent" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                      <p className="text-sm text-foreground/60">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a
                  href={resumeUrl}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Timeline - Right Side */}
          <div className="lg:col-span-2">
            {/* Experience */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h3 className="text-2xl font-bold text-foreground mb-8">Experience</h3>

              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div
                    key={exp._id}
                    className="relative pl-6 pb-8 border-l-2 border-accent/30 hover:border-accent transition-colors"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                    {/* Content */}
                    <div className="space-y-2">
                      <span className="text-sm text-accent font-semibold">{exp.year}</span>
                      <h4 className="text-lg font-bold text-foreground">{exp.position}</h4>
                      <p className="text-foreground/60 font-medium">{exp.company}</p>
                      <p className="text-foreground/70 text-sm pt-2">{exp.description}</p>

                      {/* Highlights */}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <ul className="pt-3 space-y-1">
                          {exp.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-2 text-sm text-foreground/60">
                              <span className="text-accent">✓</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl font-bold text-foreground mb-8">Education</h3>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu._id}
                    className="p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-foreground/60 text-sm">{edu.field}</p>
                      </div>
                      <span className="text-sm text-accent font-semibold">{edu.year}</span>
                    </div>
                    <p className="text-sm text-foreground/70">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
