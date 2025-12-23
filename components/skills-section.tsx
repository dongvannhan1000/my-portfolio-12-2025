import type React from "react"
import { Code2, Palette, Server, Database, GitBranch, Zap } from "lucide-react"
import { client, skillCategoriesQuery, type SkillCategory } from "@/lib/sanity"

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  GitBranch: <GitBranch className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
}

// Default fallback data
const defaultSkillCategories: SkillCategory[] = [
  {
    _id: "1",
    category: "Frontend",
    icon: "Palette",
    description: "Building responsive, accessible user interfaces",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "ShadCN/UI"],
  },
  {
    _id: "2",
    category: "Backend",
    icon: "Server",
    description: "Scalable server-side solutions and APIs",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "GraphQL", "Microservices"],
  },
  {
    _id: "3",
    category: "Database",
    icon: "Database",
    description: "Data modeling and query optimization",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "Supabase", "Prisma ORM"],
  },
  {
    _id: "4",
    category: "Tools & DevOps",
    icon: "GitBranch",
    description: "Development workflow and deployment",
    skills: ["Git", "Docker", "GitHub Actions", "Vercel", "AWS", "CI/CD"],
  },
  {
    _id: "5",
    category: "Languages",
    icon: "Code2",
    description: "Programming languages I work with",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS", "Bash"],
  },
  {
    _id: "6",
    category: "Emerging Tech",
    icon: "Zap",
    description: "New technologies I explore",
    skills: ["AI/ML APIs", "Web3", "WebAssembly", "Edge Computing", "Mobile Dev", "AR/VR"],
  },
]

async function getSkillCategories(): Promise<SkillCategory[]> {
  try {
    const categories = await client.fetch<SkillCategory[]>(skillCategoriesQuery)
    return categories?.length ? categories : defaultSkillCategories
  } catch (error) {
    console.error("Error fetching skill categories:", error)
    return defaultSkillCategories
  }
}

export async function SkillsSection() {
  const skillCategories = await getSkillCategories()

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Expertise</span>
          <h2 className="mt-3 text-text-balance">Skills & Technologies</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across different areas of software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((skillSet, index) => (
            <div
              key={skillSet._id}
              className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  {iconMap[skillSet.icon || "Code2"] || <Code2 className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{skillSet.category}</h3>
                  <p className="text-sm text-foreground/60 mt-1">{skillSet.description}</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {skillSet.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/30 hover:bg-secondary/60 text-foreground text-sm font-medium rounded-full transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
