import type React from "react"
import { Code2, Palette, Server, Database, GitBranch, Zap } from "lucide-react"

interface SkillCategory {
  category: string
  icon: React.ReactNode
  skills: string[]
  description: string
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: <Palette className="w-6 h-6" />,
    description: "Building responsive, accessible user interfaces",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "ShadCN/UI"],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    description: "Scalable server-side solutions and APIs",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "GraphQL", "Microservices"],
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    description: "Data modeling and query optimization",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "Supabase", "Prisma ORM"],
  },
  {
    category: "Tools & DevOps",
    icon: <GitBranch className="w-6 h-6" />,
    description: "Development workflow and deployment",
    skills: ["Git", "Docker", "GitHub Actions", "Vercel", "AWS", "CI/CD"],
  },
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    description: "Programming languages I work with",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS", "Bash"],
  },
  {
    category: "Emerging Tech",
    icon: <Zap className="w-6 h-6" />,
    description: "New technologies I explore",
    skills: ["AI/ML APIs", "Web3", "WebAssembly", "Edge Computing", "Mobile Dev", "AR/VR"],
  },
]

export function SkillsSection() {
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
              key={skillSet.category}
              className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  {skillSet.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{skillSet.category}</h3>
                  <p className="text-sm text-foreground/60 mt-1">{skillSet.description}</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {skillSet.skills.map((skill) => (
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
