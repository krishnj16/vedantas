import { defineField, defineType } from 'sanity';

export const membersPage = defineType({
  name: 'membersPage', title: 'Members & Volunteers', type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 3 }),
    defineField({ name: 'quoteAttribution', title: 'Quote attribution', type: 'string' }),
    defineField({ name: 'membershipTitle', title: 'Membership heading', type: 'string' }),
    defineField({ name: 'membershipContent', title: 'Membership content', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'volunteerTitle', title: 'Volunteer heading', type: 'string' }),
    defineField({ name: 'volunteerContent', title: 'Volunteer content', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'contactEmail', title: 'Enquiries email', type: 'string', validation: (rule) => rule.email() }),
  ],
});
