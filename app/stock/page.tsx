import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { StockFilters } from '@/components/StockFilters';
export const metadata: Metadata = { title: 'Used Car Stock', description: 'Search current premium used car stock at MA Motors by make, model, price, year and mileage.' };
export default function StockPage() { return <main><PageHeader eyebrow="Current Stock" title="Premium vehicles ready to view" copy="Filter our stock by make, model, price, year and mileage. Every listing is structured for an admin-backed inventory workflow." /><section className="section-pad bg-night"><div className="container-shell"><StockFilters /></div></section></main>; }
