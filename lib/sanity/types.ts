import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

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
    image?: SanityImageSource
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
