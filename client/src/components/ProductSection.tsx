import ProductCard from './ProductCard';

/**
 * ProductSection Component
 * Minimalist Brutalism Design
 * - Section title with dashed green border
 * - Responsive grid layout
 * - Reusable for Models, Scenes, Textures, and Works
 */

interface Product {
  id: string;
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

interface ProductSectionProps {
  title: string;
  products: Product[];
}

export default function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="py-12 md:py-16 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <div className="mb-8 md:mb-12">
          <div className="inline-block border-2 border-dashed border-green-400 px-6 py-3">
            <h2 className="heading-lg text-gray-900 font-bold">
              {title}
            </h2>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              brand={product.brand}
              price={product.price}
              isFree={product.isFree}
              credits={product.credits}
              views={product.views}
              downloads={product.downloads}
              likes={product.likes}
              date={product.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
