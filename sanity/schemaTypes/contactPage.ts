import { defineField, defineType } from 'sanity';

export const contactPage = defineType({
  name: 'contactPage', title: 'Contact Us', type: 'document',
  fields: [
    defineField({ name: 'address', title: 'Address', type: 'text', rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: 'email', title: 'Email', type: 'string', validation: (rule) => rule.required().email() }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'overseasPhone', title: 'International phone', type: 'string' }),
    defineField({ name: 'directions', title: 'Visitor instructions', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'mapEmbedUrl', title: 'Google Maps embed URL', type: 'url', validation: (rule) => rule.uri({ scheme: ['https'] }) }),
    defineField({ name: 'mapImage', title: 'Map image (fallback)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'mapImageAlt', title: 'Map image description', type: 'string' }),
  ],
});
