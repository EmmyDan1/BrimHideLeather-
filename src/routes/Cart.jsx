import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { formatCurrency } from '../lib/format';
import QuantityInput from '../components/QuantityInput';
import CartSummary from '../components/CartSummary';
import Button from '../components/ui/Button';

export default function Cart() {
  const { items, updateQuantity, removeItem } = useCartStore();
  const [mounted, setMounted] = useState(false);
  
  // Fix hydration issues by waiting for client-side render
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleQuantityChange = (index, quantity) => {
    updateQuantity(index, quantity);
  };
  
  const handleRemove = (index) => {
    removeItem(index);
  };
  
  if (!mounted) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Your Cart</h1>
        <p>Loading cart...</p>
      </div>
    );
  }
  
  if (items.length === 0) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Your Cart</h1>
        
        <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 className="text-2xl font-serif font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button to="/shop">
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-serif font-bold">
                  {items.length} {items.length === 1 ? 'Item' : 'Items'}
                </h2>
                <Link to="/shop" className="text-deep-brown hover:text-saddle-tan">
                  Continue Shopping
                </Link>
              </div>
            </div>
            
            <div className="divide-y">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.color}-${item.size}`} className="p-6 flex flex-col sm:flex-row">
                  {/* Product Image */}
                  <Link to={`/product/${item.slug}`} className="w-full sm:w-24 h-24 flex-shrink-0 mb-4 sm:mb-0">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  
                  {/* Product Info */}
                  <div className="sm:ml-6 flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <div>
                        <Link to={`/product/${item.slug}`} className="font-medium text-lg hover:text-saddle-tan">
                          {item.title}
                        </Link>
                        <div className="text-sm text-gray-600 mt-1">
                          {item.color && <span className="mr-2">Color: {item.color}</span>}
                          {item.size && <span>Size: {item.size}</span>}
                        </div>
                        <div className="mt-2 mb-4 sm:mb-0">
                          <span className="font-medium">{formatCurrency(item.price)}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:items-end">
                        <div className="mb-4">
                          <QuantityInput
                            quantity={item.quantity}
                            onIncrease={() => handleQuantityChange(index, item.quantity + 1)}
                            onDecrease={() => handleQuantityChange(index, item.quantity - 1)}
                            onQuantityChange={(qty) => handleQuantityChange(index, qty)}
                          />
                        </div>
                        
                        <div className="flex justify-between sm:justify-end w-full">
                          <div className="sm:mr-8 font-medium">
                            {formatCurrency(item.price * item.quantity)}
                          </div>
                          <button
                            onClick={() => handleRemove(index)}
                            className="text-gray-500 hover:text-red-600"
                            aria-label="Remove item"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m4-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <CartSummary />
          
          {/* Shipping Policy */}
          <div className="mt-6 bg-white rounded-2xl shadow-soft p-6">
            <h3 className="font-serif font-bold text-lg mb-4">Shipping Policy</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-deep-brown mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free shipping on orders over $150</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-deep-brown mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Standard shipping: 3-5 business days</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-deep-brown mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Express shipping available at checkout</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-deep-brown mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>International shipping available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}