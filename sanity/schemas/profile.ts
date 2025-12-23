import { defineType, defineField } from 'sanity'

export const profile = defineType({
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        defineField({
            name: 'aboutTitle',
            title: 'About Section Title',
            type: 'string',
            description: 'e.g., Passionate Developer',
        }),
        defineField({
            name: 'aboutBio',
            title: 'About Bio',
            type: 'text',
            rows: 4,
            description: 'Longer bio for the About section',
        }),
        defineField({
            name: 'highlights',
            title: 'Highlights',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'icon',
                            title: 'Icon Name',
                            type: 'string',
                            description: 'Lucide icon name: Rocket, Lightbulb, Award, etc.',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'aboutTitle',
        },
    },
})
