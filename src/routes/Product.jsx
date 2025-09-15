import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { formatCurrency } from '../lib/format';
import { getProductBySlug } from '../lib/slug';
import products from '../data/products';
import Accordion from '../components/Accordion';
import QuantityInput from '../components/QuantityInput';
import AddToCartButton from '../components/AddToCartButton';
import ProductCard from '../components/ProductCard';

export default function Product() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  useEffect(() => {
    // Find the product by slug
    const foundProduct = getProductBySlug(products, slug);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors?.[0] || '');
      setLoading(false);
      
      // Find related products (same category, excluding current product)
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      
      setRelatedProducts(related);
    } else {
      // Product not found, redirect to 404
      navigate('/not-found', { replace: true });
    }
  }, [slug, navigate]);
  
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };
  
  const handleIncrease = () => {
    setQuantity(prev => Math.min(prev + 1, 99));
  };
  
  const handleDecrease = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };
  
  const accordionItems = [
    {
      title: 'Materials',
      content: <p>{product?.materials}</p>
    },
    {
      title: 'Sizing',
      content: (
        <div>
          <p className="mb-2">Our products are true to size. If you're between sizes, we recommend sizing up.</p>
          <p>For specific measurements, please refer to the size chart or contact our customer service.</p>
        </div>
      )
    },
    {
      title: 'Care',
      content: <p>{product?.care}</p>
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div>
          <p className="mb-2">Free shipping on orders over $150.</p>
          <p className="mb-2">Standard shipping: 3-5 business days.</p>
          <p>Returns accepted within 30 days of delivery. Items must be unused and in original packaging.</p>
        </div>
      )
    }
  ];
  
  if (loading) {
    return (
      <div className="container py-12 text-center">
        <p>Loading product...</p>
      </div>
    );
  }
  
  if (!product) return null;
  
  return (
    <div className="container py-12">
      <div className="mb-6">
        <Link to="/shop" className="text-gray-600 hover:text-deep-brown inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Shop
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-4 aspect-square overflow-hidden rounded-2xl">
            <img 
              src={product.images[activeImage]} 
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    activeImage === index ? 'border-deep-brown' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.title} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{product.title}</h1>
          <p className="text-2xl font-medium mb-4">{formatCurrency(product.price)}</p>
          
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md capitalize ${
                      selectedColor === color
                        ? 'border-deep-brown bg-deep-brown text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Size Selection (if applicable) */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md uppercase ${
                      selectedSize === size
                        ? 'border-deep-brown bg-deep-brown text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Quantity</h3>
            <QuantityInput
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onQuantityChange={handleQuantityChange}
            />
          </div>
          
          {/* Add to Cart */}
          <div className="mb-8">
            <AddToCartButton
              product={product}
              quantity={quantity}
              options={{ color: selectedColor, size: selectedSize }}
              variant="full-width"
              className="py-3 text-lg"
            />
          </div>
          
          {/* Product Details */}
          <Accordion items={accordionItems} />
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}