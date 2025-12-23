// Simplified Sanity image type (the internal type is not exported in newer @sanity/image-url versions)
export type SanityImage = {
    _type: 'image'
    asset: {
        _ref: string
        _type: 'reference'
    }
}

export interface SocialLinks {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
}

export interface SiteSettings {
    name: string
    title?: string
    tagline?: string
    bio?: string
    resumeUrl?: string
    socialLinks?: SocialLinks
}

export interface Highlight {
    icon?: string
    title?: string
    description?: string
}

export interface Profile {
    aboutTitle?: string
    aboutBio?: string
    highlights?: Highlight[]
}

export interface Experience {
    _id: string
    year: string
    company: string
    position: string
    description?: string
    highlights?: string[]
}

export interface Education {
    _id: string
    year: string
    school: string
    degree: string
    field?: string
}

export interface Project {
    _id: string
    title: string
    slug?: string
    description: string
    image?: SanityImage
    technologies?: string[]
    liveUrl?: string
    githubUrl?: string
    featured?: boolean
}

export interface SkillCategory {
    _id: string
    category: string
    icon?: string
    description?: string
    skills?: string[]
}

export interface ContactInfo {
    email: string
    phone?: string
    location?: string
    contactTitle?: string
    contactDescription?: string
}
