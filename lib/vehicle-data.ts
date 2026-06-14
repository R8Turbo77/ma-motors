import { sanityClient, hasSanityConfig } from './sanity.client';
import { vehicles as fallbackVehicles } from './vehicles';
import { Vehicle } from '@/types/vehicle';

type SanityVehicle = Omit<Vehicle, 'slug' | 'images'> & {
  slug?: { current?: string };
  images?: string[];
};

const vehicleQuery = `*[_type == "vehicle"] | order(featured desc, _createdAt desc) {
  make,
  model,
  derivative,
  price,
  year,
  mileage,
  registration,
  engineSize,
  fuelType,
  transmission,
  bodyType,
  color,
  doors,
  seats,
  highlights,
  features,
  description,
  status,
  featured,
  slug,
  "images": images[].asset->url
}`;

function normaliseVehicle(vehicle: SanityVehicle): Vehicle | null {
  const slug = vehicle.slug?.current;
  if (!slug || !vehicle.make || !vehicle.model || !vehicle.images?.length) return null;
  return {
    slug,
    make: vehicle.make,
    model: vehicle.model,
    derivative: vehicle.derivative || '',
    price: vehicle.price || 0,
    year: vehicle.year || new Date().getFullYear(),
    mileage: vehicle.mileage || 0,
    registration: vehicle.registration || '',
    engineSize: vehicle.engineSize || '',
    fuelType: vehicle.fuelType || '',
    transmission: vehicle.transmission || '',
    bodyType: vehicle.bodyType || '',
    color: vehicle.color || '',
    doors: vehicle.doors || 5,
    seats: vehicle.seats || 5,
    images: vehicle.images,
    highlights: vehicle.highlights || [],
    features: vehicle.features || [],
    description: vehicle.description || '',
    status: vehicle.status || 'available',
    featured: vehicle.featured ?? true
  };
}

export async function getVehicles(): Promise<Vehicle[]> {
  if (!hasSanityConfig) return fallbackVehicles;
  try {
    const data = await sanityClient.fetch<SanityVehicle[]>(vehicleQuery, {}, { next: { revalidate: 60 } });
    const cmsVehicles = data.map(normaliseVehicle).filter(Boolean) as Vehicle[];
    return cmsVehicles.length ? cmsVehicles : fallbackVehicles;
  } catch {
    return fallbackVehicles;
  }
}

export async function getFeaturedVehicles(): Promise<Vehicle[]> {
  const allVehicles = await getVehicles();
  return allVehicles.filter((vehicle) => vehicle.featured !== false && vehicle.status !== 'sold');
}

export async function getVehicleBySlugFromCms(slug: string): Promise<Vehicle | undefined> {
  const allVehicles = await getVehicles();
  return allVehicles.find((vehicle) => vehicle.slug === slug);
}
