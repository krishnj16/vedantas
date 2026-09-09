import { defineArrayMember, defineField, defineType } from 'sanity';

export const historyPage = defineType({
  name: 'historyPage', title: 'Our History', type: 'document',
  fields: [
    defineField({ name: 'intro', title: 'Introduction', type: 'text', rows: 3 }),
    defineField({ name: 'milestones', title: 'Milestones', type: 'array', of: [defineArrayMember({ type: 'object', fields: [
      defineField({ name: 'date', title: 'Milestone date', type: 'date' }),
      defineField({ name: 'label', title: 'Display label', type: 'string', description: 'For dates such as “Early Years” or “Present Day”.' }),
      defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
      defineField({ name: 'description', title: 'Description', type: 'text', rows: 5, validation: (rule) => rule.required() }),
    ] })] }),
  ],
});
