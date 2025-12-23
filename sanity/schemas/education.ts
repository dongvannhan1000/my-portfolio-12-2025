import { defineType, defineField } from 'sanity'

export const education = defineType({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'school',
            title: 'School/Institution',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'degree',
            title: 'Degree',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'field',
            title: 'Field of Study',
            type: 'string',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'degree',
            subtitle: 'school',
        },
    },
})
