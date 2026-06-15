import { defineField, defineType } from 'sanity';

export const vehicleType = defineType({
  name: 'vehicle',
  title: 'Car Adverts',
  type: 'document',
  groups: [
    { name: 'basics', title: 'Advert Basics', default: true },
    { name: 'photos', title: 'Photos' },
    { name: 'specs', title: 'Vehicle Specs' },
    { name: 'details', title: 'Description' },
    { name: 'publishing', title: 'Publishing' }
  ],
  initialValue: {
    status: 'available',
    featured: true,
    doors: 5,
    seats: 5,
    fuelType: 'Diesel',
    transmission: 'Automatic'
  },
  fields: [
    defineField({ name: 'title', title: 'Advert title', type: 'string', group: 'basics', description: 'Example: 2020 Audi A3 35 TDI S line Sportback', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Website link', type: 'slug', group: 'publishing', description: 'Press Generate after entering the advert title.', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'status', title: 'Advert status', type: 'string', group: 'publishing', initialValue: 'available', options: { list: [{ title: 'Available - show for sale', value: 'available' }, { title: 'Reserved', value: 'reserved' }, { title: 'Sold', value: 'sold' }], layout: 'radio' } }),
    defineField({ name: 'featured', title: 'Show on homepage', type: 'boolean', group: 'publishing', initialValue: true, description: 'Turn this off if you only want the car on the stock page.' }),
    defineField({ name: 'make', title: 'Make', type: 'string', group: 'basics', validation: (Rule) => Rule.required() }),
    defineField({ name: 'model', title: 'Model', type: 'string', group: 'basics', validation: (Rule) => Rule.required() }),
    defineField({ name: 'derivative', title: 'Trim / model line', type: 'string', group: 'basics', description: 'Example: 35 TDI S line, M Sport, R-Design' }),
    defineField({ name: 'price', title: 'Advert price', type: 'number', group: 'basics', description: 'Enter numbers only. Example: 15995', validation: (Rule) => Rule.required().min(0) }),
    defineField({ name: 'year', title: 'Year', type: 'number', group: 'basics', validation: (Rule) => Rule.required().min(1950) }),
    defineField({ name: 'mileage', title: 'Mileage', type: 'number', group: 'basics', description: 'Enter numbers only. Example: 62000', validation: (Rule) => Rule.required().min(0) }),
    defineField({ name: 'images', title: 'Advert photos', type: 'array', group: 'photos', description: 'First photo becomes the main advert photo. Drag photos to reorder.', of: [{ type: 'image', options: { hotspot: true } }], validation: (Rule) => Rule.required().min(1) }),
    defineField({ name: 'registration', title: 'Registration', type: 'string', group: 'specs' }),
    defineField({ name: 'engineSize', title: 'Engine size', type: 'string', group: 'specs', description: 'Example: 2.0L' }),
    defineField({ name: 'fuelType', title: 'Fuel type', type: 'string', group: 'specs', options: { list: ['Petrol', 'Diesel', 'Hybrid', 'Plug-in Hybrid', 'Electric'] } }),
    defineField({ name: 'transmission', title: 'Transmission', type: 'string', group: 'specs', options: { list: ['Automatic', 'Manual', 'Semi-Automatic'] } }),
    defineField({ name: 'bodyType', title: 'Body type', type: 'string', group: 'specs', options: { list: ['Hatchback', 'Saloon', 'Estate', 'SUV', 'Coupe', 'Convertible', 'Van'] } }),
    defineField({ name: 'color', title: 'Colour', type: 'string', group: 'specs' }),
    defineField({ name: 'doors', title: 'Doors', type: 'number', group: 'specs' }),
    defineField({ name: 'seats', title: 'Seats', type: 'number', group: 'specs' }),
    defineField({ name: 'highlights', title: 'Key selling points', type: 'array', group: 'details', description: 'Short badges shown on the advert. Example: Full service history, ULEZ, Pan roof.', of: [{ type: 'string' }] }),
    defineField({ name: 'features', title: 'Features list', type: 'array', group: 'details', description: 'Example: Heated seats, Sat nav, Parking sensors.', of: [{ type: 'string' }] }),
    defineField({ name: 'description', title: 'Advert description', type: 'text', group: 'details', rows: 5, description: 'Write the full sales description here.' })
  ],
  preview: {
    select: { title: 'title', make: 'make', model: 'model', price: 'price', status: 'status', media: 'images.0' },
    prepare({ title, make, model, price, status, media }) {
      const priceLabel = typeof price === 'number' ? `£${price.toLocaleString('en-GB')}` : 'No price';
      const statusLabel = status ? status.toUpperCase() : 'AVAILABLE';
      return {
        title: title || `${make || ''} ${model || ''}`.trim() || 'Untitled advert',
        subtitle: `${statusLabel} - ${priceLabel}`,
        media
      };
    }
  }
});
