import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Your Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title/Role',
            type: 'string',
            description: 'e.g., Full-Stack Developer',
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            description: 'e.g., Building Digital Experiences',
        }),
        defineField({
            name: 'bio',
            title: 'Short Bio',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'resumeFile',
            title: 'Resume File',
            type: 'file',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'object',
            fields: [
                defineField({ name: 'github', title: 'GitHub URL', type: 'url' }),
                defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
                defineField({ name: 'twitter', title: 'Twitter URL', type: 'url' }),
                defineField({ name: 'email', title: 'Email', type: 'string' }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'title',
        },
    },
})
