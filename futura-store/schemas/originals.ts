import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'originals',
    title: 'Originals',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Project Name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Type Project',
            type: 'string',
        }),
        defineField({
            name: 'draft',
            title: 'Draft',
            type: 'boolean',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
        }),
        defineField({
            title: 'Videos',
            name: 'videos',
            type: 'array',
            of: [
                {
                  type: "object",
                  name: "Videos URL",
                  fields: [
                    { type: "string", name: "chapter" },
                    { type: "string", name: "description" },
                    { type: "string", name: "url" },
                  ]
                }
            ]
        })
    ]
})