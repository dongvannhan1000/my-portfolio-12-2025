import { groq } from 'next-sanity'

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    name,
    title,
    tagline,
    bio,
    "resumeUrl": resumeFile.asset->url,
    socialLinks
  }
`

// Profile (About section)
export const profileQuery = groq`
  *[_type == "profile"][0] {
    aboutTitle,
    aboutBio,
    highlights
  }
`

// Experiences
export const experiencesQuery = groq`
  *[_type == "experience"] | order(order asc) {
    _id,
    year,
    company,
    position,
    description,
    highlights
  }
`

// Education
export const educationQuery = groq`
  *[_type == "education"] | order(order asc) {
    _id,
    year,
    school,
    degree,
    field
  }
`

// Projects
export const projectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl
  }
`

// All Projects (for projects page)
export const allProjectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl,
    featured
  }
`

// Skill Categories
export const skillCategoriesQuery = groq`
  *[_type == "skillCategory"] | order(order asc) {
    _id,
    category,
    icon,
    description,
    skills
  }
`

// Contact Info
export const contactInfoQuery = groq`
  *[_type == "contactInfo"][0] {
    email,
    phone,
    location,
    contactTitle,
    contactDescription
  }
`
