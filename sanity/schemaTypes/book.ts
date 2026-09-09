import { defineField, defineType } from 'sanity';

export const book = defineType({
  name: 'book', title: 'Book', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'cover', title: 'Cover image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'coverAlt', title: 'Cover description', type: 'string' }),
    defineField({ name: 'available', title: 'Available for sale', type: 'boolean', initialValue: true }),
    defineField({ name: 'orderRank', title: 'Display order', type: 'number', validation: (rule) => rule.required().integer().min(1) }),
  ], preview: { select: { title: 'title', subtitle: 'author', media: 'cover' } },
});
