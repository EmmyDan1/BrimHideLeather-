import { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { useUIStore } from '../store/useUIStore';
import Button from './ui/Button';

export default function AddToCartButton({ 
  product, 
  quantity = 1, 
  options = {}, 
  variant = 'default',
  className = '',
  showQuantity = false,
  onAddedToCart = () => {}
}) {
  const [isAdding, setIsAdding] = useState(false);
  const { addItem, openCart } = useCartStore();
  const { showToast } = useUIStore();
  
  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Simulate a slight delay for better UX
    setTimeout(() => {
      addItem(product, quantity, options);
      setIsAdding(false);
      
      // Show success toast
      showToast(`${product.title} added to cart`, 'success');
      
      // Call the callback function
      onAddedToCart();
    }, 300);
  };
  
  if (variant === 'quick') {
    return (
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`w-full py-2 px-4 bg-deep-brown text-bone font-medium rounded-md hover:bg-opacity-90 transition-colors ${className}`}
      >
        {isAdding ? 'Adding...' : 'Quick Add'}
      </button>
    );
  }
  
  return (
    <Button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={className}
      fullWidth={variant === 'full-width'}
    >
      {isAdding ? 'Adding to Cart...' : 'Add to Cart'}
    </Button>
  );
}