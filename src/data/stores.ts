export interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
  hours: string;
  features: string[];
  zipCode: string;
  city: string;
  state: string;
}

export const stores: Store[] = [
  {
    id: 1,
    name: "Downtown Market",
    address: "123 Main St, Downtown, CA 90210",
    phone: "(555) 123-4567",
    lat: 34.0522,
    lng: -118.2437,
    hours: "Mon-Sat: 8AM-8PM, Sun: 9AM-6PM",
    features: ["Kosher Certified", "All-Butter Crust", "Local Delivery"],
    zipCode: "90210",
    city: "Downtown",
    state: "CA"
  },
  {
    id: 2,
    name: "Fresh Foods Co-op",
    address: "456 Oak Ave, Midtown, CA 90211",
    phone: "(555) 234-5678",
    lat: 34.0622,
    lng: -118.2537,
    hours: "Mon-Sun: 7AM-9PM",
    features: ["Organic Options", "Gluten-Free Available", "Bulk Orders"],
    zipCode: "90211",
    city: "Midtown",
    state: "CA"
  },
  {
    id: 3,
    name: "Gourmet Grocery",
    address: "789 Pine St, Uptown, CA 90212",
    phone: "(555) 345-6789",
    lat: 34.0722,
    lng: -118.2637,
    hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
    features: ["Premium Selection", "Custom Orders", "Catering"],
    zipCode: "90212",
    city: "Uptown",
    state: "CA"
  },
  {
    id: 4,
    name: "Community Market",
    address: "321 Elm Blvd, Westside, CA 90213",
    phone: "(555) 456-7890",
    lat: 34.0822,
    lng: -118.2737,
    hours: "Mon-Sun: 8AM-8PM",
    features: ["Local Sourcing", "Seasonal Specials", "Fundraising Support"],
    zipCode: "90213",
    city: "Westside",
    state: "CA"
  },
  {
    id: 5,
    name: "Farmers Market Central",
    address: "567 Market St, Central District, CA 90214",
    phone: "(555) 567-8901",
    lat: 34.0922,
    lng: -118.2837,
    hours: "Wed-Sat: 8AM-2PM",
    features: ["Farm Fresh", "Seasonal Pies", "Local Vendors"],
    zipCode: "90214",
    city: "Central District",
    state: "CA"
  },
  {
    id: 6,
    name: "Artisan Bakery",
    address: "890 Baker Ave, Craft District, CA 90215",
    phone: "(555) 678-9012",
    lat: 34.1022,
    lng: -118.2937,
    hours: "Tue-Sun: 7AM-6PM",
    features: ["Artisan Breads", "Custom Decorations", "Wedding Cakes"],
    zipCode: "90215",
    city: "Craft District",
    state: "CA"
  }
];

export function getStoresByZipCode(zipCode: string): Store[] {
  return stores.filter(store => store.zipCode === zipCode);
}

export function getStoresByRadius(lat: number, lng: number, radiusMiles: number = 50): Store[] {
  return stores.filter(store => {
    const distance = calculateDistance(lat, lng, store.lat, store.lng);
    return distance <= radiusMiles;
  });
}

function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
} 