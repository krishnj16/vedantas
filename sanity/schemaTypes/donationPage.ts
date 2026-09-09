import { defineArrayMember, defineField, defineType } from 'sanity';

export const donationPage = defineType({
  name: 'donationPage', title: 'Donation Page', type: 'document',
  fields: [
    defineField({ name: 'heroImages', title: 'Hero photos', type: 'array', of: [defineArrayMember({ type: 'object', fields: [
      defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true }, validation: (rule) => rule.required() }),
      defineField({ name: 'alt', title: 'Image description', type: 'string', validation: (rule) => rule.required() }),
    ] })], validation: (rule) => rule.max(3) }),
  ],
});
