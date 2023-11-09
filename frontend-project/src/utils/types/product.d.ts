interface Product {
    _id: string;
    name: string;
    description: string;
    package: 'Budget' | 'Standard' | 'Deluxe';
    location: String;
    size: String;
    quests: Number;
    bedrooms: String
    price: Number;
    rating: Number;
    amenities: [];
    facilities: [];
    imgURLs: [];
    // Other product properties
  }