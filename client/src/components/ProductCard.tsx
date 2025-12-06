import { Eye, Download, Heart } from 'lucide-react';

/**
 * ProductCard Component
 * Minimalist Brutalism Design
 * - Dashed green borders for brutalist aesthetic
 * - Clean product information layout
 * - Badge for Free/Credits status
 * - Metadata display (views, downloads, likes)
 * 
 * Props:
 * - image: Product image URL
 * - title: Product name
 * - brand: Creator/Brand name
 * - price: Price (optional, null for free items)
 * - isFree: Whether item is free
 * - credits: Number of credits required (if not free)
 * - views: Number of views
 * - downloads: Number of downloads
 * - likes: Number of likes
 * - date: Date posted (e.g., "26.10.2025")
 */

interface ProductCardProps {
  image: string;
  title: string;
  brand: string;
  price?: string;
  isFree: boolean;
  credits?: number;
  views: number;
  downloads: number;
  likes: number;
  date: string;
}

export default function ProductCard({
  image,
  title,
  brand,
  price,
  isFree,
  credits,
  views,
  downloads,
  likes,
  date,
}: ProductCardProps) {
  return (
    <div className="border-2 border-dashed border-green-400 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Image Container */}
      <div className="relative bg-gray-100 aspect-square flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"%3E%3Crect fill="%23e5e7eb" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="14" fill="%23666" text-anchor="middle" dominant-baseline="middle"%3EProduct Image%3C/text%3E%3C/svg%3E`;
          }}
        />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          {isFree ? (
            <span className="inline-block px-3 py-1 bg-yellow-300 text-gray-900 text-xs font-bold">
              Free
            </span>
          ) : (
            <span className="inline-block px-3 py-1 bg-green-400 text-gray-900 text-xs font-bold">
              {credits} Credits
            </span>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4">
        {/* Title */}
        <h3 className="heading-sm text-gray-900 mb-2 font-bold">
          {title}
        </h3>

        {/* Brand */}
        <p className="body-sm text-green-400 font-medium mb-3">
          {brand}
        </p>

        {/* Price and Stats Row */}
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200">
          {price && !isFree ? (
            <span className="text-lg font-bold text-gray-900">
              ${price}
            </span>
          ) : (
            <span className="text-sm text-gray-500">Free</span>
          )}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>{views}</span>
          </div>
        </div>

        {/* Metadata */}
        <div className="space-y-2 mb-3">
          {/* Views */}
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Eye size={14} />
            <span>{views} views</span>
          </div>

          {/* Downloads */}
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Download size={14} />
            <span>{downloads} downloads</span>
          </div>

          {/* Likes */}
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Heart size={14} />
            <span>{likes} likes</span>
          </div>
        </div>

        {/* Date */}
        <p className="text-xs text-gray-500 text-right">
          {date}
        </p>
      </div>
    </div>
  );
}
