import { defineField, defineType } from 'sanity';

export const vehicleType = defineType({
  name: 'vehicle',
  title: 'Vehicles',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Listing title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'URL slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'status', title: 'Status', type: 'string', initialValue: 'available', options: { list: ['available', 'reserved', 'sold'], layout: 'radio' } }),
    defineField({ name: 'featured', title: 'Show on homepage', type: 'boolean', initialValue: true }),
    defineField({ name: 'make', title: 'Make', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'model', title: 'Model', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'derivative', title: 'Derivative / trim', type: 'string' }),
    defineField({ name: 'price', title: 'Price', type: 'number', validation: (Rule) => Rule.required().min(0) }),
    defineField({ name: 'year', title: 'Year', type: 'number', validation: (Rule) => Rule.required().min(1950) }),
    defineField({ name: 'mileage', title: 'Mileage', type: 'number', validation: (Rule) => Rule.required().min(0) }),
    defineField({ name: 'registration', title: 'Registration', type: 'string' }),
    defineField({ name: 'engineSize', title: 'Engine size', type: 'string' }),
    defineField({ name: 'fuelType', title: 'Fuel type', type: 'string' }),
    defineField({ name: 'transmission', title: 'Transmission', type: 'string' }),
    defineField({ name: 'bodyType', title: 'Body type', type: 'string' }),
    defineField({ name: 'color', title: 'Colour', type: 'string' }),
    defineField({ name: 'doors', title: 'Doors', type: 'number' }),
    defineField({ name: 'seats', title: 'Seats', type: 'number' }),
    defineField({ name: 'images', title: 'Photos', type: 'array', of: [{ type: 'image', options: { hotspot: true } }], validation: (Rule) => Rule.required().min(1) }),
    defineField({ name: 'highlights', title: 'Highlights', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 })
  ],
  preview: {
    select: { title: 'title', subtitle: 'status', media: 'images.0' }
  }
});
