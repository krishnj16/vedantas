import { defineField, defineType } from 'sanity';

export const faq = defineType({
  name: 'faq', title: 'Q&A item', type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 5, validation: (rule) => rule.required() }),
    defineField({ name: 'orderRank', title: 'Display order', type: 'number', validation: (rule) => rule.required().integer().min(1) }),
  ], preview: { select: { title: 'question' } },
});
