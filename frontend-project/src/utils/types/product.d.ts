interface Product {
  _id: string;
  name: string;
  description: string;
  package: 'Budget' | 'Standard' | 'Deluxe';
  location: string;
  size: string;
  guests: number;
  bedrooms: string;
  price: number;
  rating: number;
  amenities: string[];
  facilities: string[];
  imgURLs: string[];
}