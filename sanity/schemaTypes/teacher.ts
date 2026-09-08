import { defineField, defineType } from 'sanity';

export const teacher = defineType({
  name: 'teacher',
  title: 'Teacher',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'title', title: 'Subtitle', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 2, validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Biography', type: 'text', rows: 6, validation: (rule) => rule.required() }),
    defineField({ name: 'image', title: 'Portrait', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageAlt', title: 'Portrait description', type: 'string', initialValue: '[Portrait]' }),
    defineField({ name: 'orderRank', title: 'Display order', type: 'number', validation: (rule) => rule.required().integer().min(1) }),
    defineField({ name: 'color', title: 'Card colour classes', type: 'string', initialValue: 'from-vedanta-orange to-vedanta-brown', hidden: true }),
    defineField({ name: 'textColor', title: 'Text colour class', type: 'string', initialValue: 'text-vedanta-orange', hidden: true }),
  ],
  preview: { select: { title: 'name', subtitle: 'title', media: 'image' } },
});
