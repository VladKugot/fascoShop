export type GoodsItem = {
  id: string | number;
  title: string;
  brand: string;
  rating: number;
  price: number;
  discountPrice: number;
  inStock: number;
  reviewCount: number;
  sizes: string[];
  colors: string[];
  imageUrls: string[];
  description?: string;
  category?: string;
};