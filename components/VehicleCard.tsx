import { ArrowRight, Calendar, Fuel, Gauge, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency, formatNumber } from '@/lib/vehicles';
import { Vehicle } from '@/types/vehicle';

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const status = vehicle.status || 'available';
  const statusLabel = status === 'sold' ? 'Sold' : status === 'reserved' ? 'Reserved' : 'Available';
  const statusClass = status === 'sold' ? 'bg-red-950/85 text-red-100' : status === 'reserved' ? 'bg-gold/90 text-black' : 'bg-black/80 text-gold';

  return <article className="group overflow-hidden rounded-sm border border-white/10 bg-white/[.035] transition hover:-translate-y-1 hover:border-gold/55 hover:shadow-gold"><Link href={`/stock/${vehicle.slug}`} className="block"><div className="relative aspect-[16/10] overflow-hidden bg-charcoal"><Image src={vehicle.images[0]} alt={`${vehicle.make} ${vehicle.model}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" /><div className={`absolute left-4 top-4 rounded-sm px-3 py-2 text-xs font-black uppercase tracking-[0.18em] ${statusClass}`}>{statusLabel}</div></div><div className="p-5"><div className="flex items-start justify-between gap-4"><div><h3 className="text-xl font-black text-white">{vehicle.make} {vehicle.model}</h3><p className="mt-1 text-sm text-white/58">{vehicle.derivative}</p></div><p className="whitespace-nowrap text-lg font-black text-gold">{formatCurrency(vehicle.price)}</p></div><div className="mt-5 grid grid-cols-3 gap-2 text-xs text-white/62"><span className="flex items-center gap-1.5"><Calendar size={15} className="text-gold" />{vehicle.year}</span><span className="flex items-center gap-1.5"><Gauge size={15} className="text-gold" />{formatNumber(vehicle.mileage)}</span><span className="flex items-center gap-1.5"><Fuel size={15} className="text-gold" />{vehicle.fuelType.split(' ')[0]}</span></div><div className="mt-4 flex items-center gap-2 rounded-sm border border-white/10 bg-black/25 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/50"><MapPin size={14} className="text-gold" />Slough showroom</div><div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-bold"><span className="text-white/70">View details</span><ArrowRight size={18} className="text-gold transition group-hover:translate-x-1" /></div></div></Link></article>;
}
