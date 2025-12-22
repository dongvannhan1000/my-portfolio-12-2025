import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "/modern-ecommerce-platform.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team features, and productivity analytics.",
    image: "/task-management-dashboard.jpg",
    technologies: ["React", "Firebase", "Material UI", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "AI Content Generator",
    description:
      "Intelligent content generation tool powered by GPT-4, with custom templates and bulk processing capabilities.",
    image: "/ai-content-generation-tool.jpg",
    technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Data Visualization Dashboard",
    description:
      "Interactive analytics dashboard with real-time data visualization, custom reports, and data export features.",
    image: "/analytics-data-visualization.jpg",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Featured Work</span>
          <h2 className="mt-3 text-text-balance">Projects That Showcase My Skills</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            A selection of recent projects I've built, demonstrating full-stack development, modern tooling, and
            problem-solving abilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-48 overflow-hidden bg-secondary/20">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded-lg text-sm font-medium hover:bg-accent/10 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
