import { Link } from 'react-router-dom';
import { formatCurrency } from '../lib/format';
import AddToCartButton from './AddToCartButton';
import Badge from './ui/Badge';

export default function ProductCard({ product }) {
  const { id, slug, title, price, images, shortDescription, bestseller } = product;
  
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl mb-4">
        {/* Product Image */}
        <Link to={`/product/${slug}`} className="block aspect-square">
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        
        {/* Bestseller Badge */}
        {bestseller && (
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" size="sm">Bestseller</Badge>
          </div>
        )}
        
        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <AddToCartButton product={product} variant="quick" />
        </div>
      </div>
      
      {/* Product Info */}
      <div>
        <Link to={`/product/${slug}`} className="block">
          <h3 className="font-serif font-bold text-lg mb-1 hover:text-saddle-tan transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-lg font-medium mb-2">{formatCurrency(price)}</p>
        <p className="text-gray-600 text-sm line-clamp-2">{shortDescription}</p>
      </div>
    </div>
  );
}