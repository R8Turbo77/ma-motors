import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';

const fallbackProjectId = 'mamotorsplaceholder';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || fallbackProjectId;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'ma_motors',
  title: 'MA Motors Admin',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('MA Motors')
          .items([
            S.documentTypeListItem('vehicle').title('All Car Adverts'),
            S.divider(),
            S.listItem()
              .title('Available Adverts')
              .child(
                S.documentList()
                  .title('Available Adverts')
                  .schemaType('vehicle')
                  .filter('_type == "vehicle" && (!defined(status) || status == "available")')
              ),
            S.listItem()
              .title('Reserved Adverts')
              .child(
                S.documentList()
                  .title('Reserved Adverts')
                  .schemaType('vehicle')
                  .filter('_type == "vehicle" && status == "reserved"')
              ),
            S.listItem()
              .title('Sold Adverts')
              .child(
                S.documentList()
                  .title('Sold Adverts')
                  .schemaType('vehicle')
                  .filter('_type == "vehicle" && status == "sold"')
              ),
            S.divider(),
            S.documentTypeListItem('siteSettings').title('Website Settings')
          ])
    })
  ],
  schema: { types: schemaTypes }
});
