import { defineField, defineType } from 'sanity';

export const spiritualProgram = defineType({
  name: 'spiritualProgram', title: 'Spiritual Program', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 5, validation: (rule) => rule.required() }),
    defineField({ name: 'startDateTime', title: 'Start date and time', type: 'datetime' }),
    defineField({ name: 'endDateTime', title: 'End date and time', type: 'datetime' }),
    defineField({ name: 'recurrence', title: 'Recurring schedule label', type: 'string', description: 'For example: Sundays, 10:00 AM–11:30 AM.' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageAlt', title: 'Image description', type: 'string' }),
    defineField({ name: 'orderRank', title: 'Display order', type: 'number', validation: (rule) => rule.required().integer().min(1) }),
  ], preview: { select: { title: 'title', subtitle: 'recurrence', media: 'image' } },
});
