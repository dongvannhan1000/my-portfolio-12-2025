import { defineType, defineField } from 'sanity'

export const contactInfo = defineType({
    name: 'contactInfo',
    title: 'Contact Info',
    type: 'document',
    fields: [
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'contactTitle',
            title: 'Section Title',
            type: 'string',
            description: 'e.g., Let\'s Work Together',
        }),
        defineField({
            name: 'contactDescription',
            title: 'Section Description',
            type: 'text',
            rows: 2,
        }),
    ],
    preview: {
        select: {
            title: 'email',
            subtitle: 'location',
        },
    },
})
