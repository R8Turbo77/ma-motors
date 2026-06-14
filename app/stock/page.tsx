import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { StockFilters } from '@/components/StockFilters';
import { getVehicles } from '@/lib/vehicle-data';

export const metadata: Metadata = { title: 'Used Car Stock Slough', description: 'Search current used car stock at MA Motors Slough by make, model, price, year and mileage.' };

export default async function StockPage() {
  const vehicles = await getVehicles();
  return <main><PageHeader eyebrow="Current Stock" title="Premium vehicles ready to view" copy="Filter our Slough stock by make, model, price, year and mileage. Add and update cars from the phone-friendly admin studio." /><section className="section-pad bg-night"><div className="container-shell"><StockFilters vehicles={vehicles} /></div></section></main>;
}
