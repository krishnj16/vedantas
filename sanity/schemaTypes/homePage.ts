import { defineArrayMember, defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({ name: 'announcement', title: 'Special announcement', type: 'text', rows: 3 }),
    defineField({ name: 'weeklyThought', title: 'Thought of the week', type: 'text', rows: 3 }),
    defineField({ name: 'contactEmail', title: 'Contact email', type: 'string', validation: (rule) => rule.email() }),
    defineField({ name: 'quote', title: 'Home page quote', type: 'object', fields: [
      defineField({ name: 'text', title: 'Quote', type: 'text', rows: 4 }),
      defineField({ name: 'attribution', title: 'Attribution', type: 'string' }),
    ] }),
    defineField({
      name: 'schedule', title: 'Weekday schedule', type: 'array', of: [defineArrayMember({
        type: 'object', fields: [
          defineField({ name: 'days', title: 'Days', type: 'array', of: [defineArrayMember({ type: 'string' })], options: { list: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] }, validation: (rule) => rule.min(1) }),
          defineField({ name: 'startTime', title: 'Start time', type: 'string', description: 'Use 24-hour time, for example 17:30.', validation: (rule) => rule.required().regex(/^([01]\\d|2[0-3]):[0-5]\\d$/, { name: '24-hour time' }) }),
          defineField({ name: 'endTime', title: 'End time', type: 'string', description: 'Optional 24-hour end time.' }),
          defineField({ name: 'title', title: 'Event title', type: 'string', validation: (rule) => rule.required() }),
          defineField({ name: 'description', title: 'Details', type: 'text', rows: 3 }),
          defineField({ name: 'accent', title: 'Colour', type: 'string', options: { list: ['blue', 'orange'] }, initialValue: 'blue' }),
        ],
      })],
    }),
    defineField({
      name: 'gallery', title: 'Photo gallery', type: 'array', of: [defineArrayMember({
        type: 'object', fields: [
          defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true }, validation: (rule) => rule.required() }),
          defineField({ name: 'label', title: 'Caption', type: 'string', validation: (rule) => rule.required() }),
          defineField({ name: 'alt', title: 'Image description', type: 'string' }),
        ],
      })],
    }),
  ],
});
