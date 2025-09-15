import ProductCard from './ProductCard';

export default function ProductGrid({ products, className = '' }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">No products found.</p>
      </div>
    );
  }
  
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}