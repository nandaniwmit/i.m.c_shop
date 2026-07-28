export interface Medicine {
  id: string;
  name: string;
  brand: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store-front' | 'interior' | 'products' | 'medical-devices';
  imageUrl: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export interface HealthTip {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Wellness' | 'Dosage' | 'Prevention' | 'Nutrition';
  date: string;
  readTime: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: string[];
}
