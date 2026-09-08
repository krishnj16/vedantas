import { defineField, defineType } from 'sanity';

export const event = defineType({
  name: 'event',
  title: 'Past Event',
  type: 'document',
  fields: [
    defineField({ name: 'date', title: 'Date', type: 'date', validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: 'link', title: 'Photo, video, or audio link', type: 'url' }),
  ],
  preview: { select: { title: 'description', subtitle: 'date' } },
});
