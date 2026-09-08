import { defineArrayMember, defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({ name: 'announcement', title: 'Special announcement', type: 'text', rows: 3 }),
    defineField({ name: 'weeklyThought', title: 'Thought of the week', type: 'text', rows: 3 }),
    defineField({ name: 'contactEmail', title: 'Contact email', type: 'string', validation: (rule) => rule.email() }),
    defineField({
      name: 'schedule', title: 'Weekday schedule', type: 'array', of: [defineArrayMember({
        type: 'object', fields: [
          defineField({ name: 'time', title: 'Time', type: 'string', validation: (rule) => rule.required() }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, validation: (rule) => rule.required() }),
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
