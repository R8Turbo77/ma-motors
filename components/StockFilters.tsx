'use client';

import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Vehicle } from '@/types/vehicle';
import { VehicleCard } from './VehicleCard';

export function StockFilters({ vehicles }: { vehicles: Vehicle[] }) {
  const [query, setQuery] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minYear, setMinYear] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const makes = useMemo(() => Array.from(new Set(vehicles.map((vehicle) => vehicle.make))).sort(), [vehicles]);
  const models = useMemo(() => Array.from(new Set(vehicles.map((vehicle) => vehicle.model))).sort(), [vehicles]);

  const filtered = useMemo(() => {
    const text = query.toLowerCase();
    return vehicles.filter((vehicle) => {
      const haystack = `${vehicle.make} ${vehicle.model} ${vehicle.derivative}`.toLowerCase();
      return (!text || haystack.includes(text)) && (!make || vehicle.make === make) && (!model || vehicle.model === model) && (!maxPrice || vehicle.price <= Number(maxPrice)) && (!minYear || vehicle.year >= Number(minYear)) && (!maxMileage || vehicle.mileage <= Number(maxMileage));
    });
  }, [query, make, model, maxPrice, minYear, maxMileage, vehicles]);

  return <><div className="luxury-panel rounded-sm p-4 md:p-5"><div className="grid gap-3 lg:grid-cols-[1.4fr_repeat(5,1fr)]"><label className="relative"><Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gold" size={18} /><input className="input-field pl-10" placeholder="Search stock" value={query} onChange={(event) => setQuery(event.target.value)} /></label><select className="input-field" value={make} onChange={(event) => setMake(event.target.value)}><option value="">Make</option>{makes.map((item) => <option key={item}>{item}</option>)}</select><select className="input-field" value={model} onChange={(event) => setModel(event.target.value)}><option value="">Model</option>{models.map((item) => <option key={item}>{item}</option>)}</select><select className="input-field" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)}><option value="">Price</option><option value="15000">Up to £15k</option><option value="25000">Up to £25k</option><option value="40000">Up to £40k</option></select><select className="input-field" value={minYear} onChange={(event) => setMinYear(event.target.value)}><option value="">Year</option><option value="2020">2020+</option><option value="2016">2016+</option><option value="2013">2013+</option></select><select className="input-field" value={maxMileage} onChange={(event) => setMaxMileage(event.target.value)}><option value="">Mileage</option><option value="50000">Under 50k</option><option value="75000">Under 75k</option><option value="100000">Under 100k</option></select></div></div><div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map((vehicle) => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}</div>{filtered.length === 0 && <p className="mt-10 text-center text-white/62">No vehicles match these filters. Adjust your search to view more stock.</p>}</>;
}
