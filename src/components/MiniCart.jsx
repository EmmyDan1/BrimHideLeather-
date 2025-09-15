import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { formatCurrency } from '../lib/format';
import Button from './ui/Button';

export default function MiniCart() {
  const { items, isOpen, closeCart, removeItem, subtotal } = useCartStore();
  const cartRef = useRef(null);
  
  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        closeCart();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling when cart is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);
  
  // Close cart when pressing escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeCart();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeCart]);
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      
      {/* Cart Drawer */}
      <div
        ref={cartRef}
        className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-lg z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-serif font-bold">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-gray-500 hover:text-gray-700"
            aria-label="Close cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Cart Items */}
        <div className="flex-grow overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-lg text-gray-600 mb-4">Your cart is empty</p>
              <Button onClick={closeCart} to="/shop">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.color}-${item.size}`} className="flex items-center border-b pb-4">
                  {/* Product Image */}
                  <Link to={`/product/${item.slug}`} onClick={closeCart} className="w-20 h-20 flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  
                  {/* Product Info */}
                  <div className="ml-4 flex-grow">
                    <Link to={`/product/${item.slug}`} onClick={closeCart} className="font-medium hover:text-saddle-tan">
                      {item.title}
                    </Link>
                    <div className="text-sm text-gray-600 mt-1">
                      {item.color && <span className="mr-2">Color: {item.color}</span>}
                      {item.size && <span>Size: {item.size}</span>}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span>{formatCurrency(item.price)}</span>
                      <div className="flex items-center">
                        <span className="mr-2">Qty: {item.quantity}</span>
                        <button
                          onClick={() => removeItem(index)}
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
              ))}
            </div>
          )}
        </div>
        
        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold">{formatCurrency(subtotal)}</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <div className="space-y-2">
              <Button
                to="/cart"
                onClick={closeCart}
                fullWidth
              >
                View Cart
              </Button>
              <Button
                to="/checkout"
                onClick={closeCart}
                variant="secondary"
                fullWidth
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}