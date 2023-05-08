import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'cart',
    title: 'Cart',
    type: 'document',
    fields: [
        defineField({
            name: 'user_id',
            title: 'User ID',
            type: 'string',
        }),
        defineField({
            name: 'has_items',
            title: 'Has Items',
            type: 'boolean',
        }),
        defineField({
            title: 'Shopping Items',
            name: 'items',
            type: 'array',
            of: [
                {
                  type: "object",
                  name: "Shopping Items",
                  fields: [
                    { type: "string", name: "title" },
                    { type: "slug", name: "slug" },
                    { type: "number", name: "price" },
                    { type: "number", name: "maxQuantity" },
                    { type: "number", name: "maxDays" },
                    { type: "image", name: "mainImage" },
                  ]
                }
            ]
        })
    ]
})