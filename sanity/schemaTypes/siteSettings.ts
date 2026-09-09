import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'phone', title: 'Header phone number', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'email', title: 'Public email address', type: 'string', validation: (rule) => rule.required().email() }),
  ],
});
