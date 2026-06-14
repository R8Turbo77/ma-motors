import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Website Settings',
  type: 'document',
  fields: [
    defineField({ name: 'businessName', title: 'Business name', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'string' }),
    defineField({ name: 'homepageHeadline', title: 'Homepage headline', type: 'string' }),
    defineField({ name: 'homepageSubheading', title: 'Homepage subheading', type: 'string' })
  ]
});
