import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { formatCurrency } from '../lib/format';
import Button from './ui/Button';

export default function CartSummary({ isCheckout = false }) {
  const { items, subtotal } = useCartStore();
  
  // Calculate shipping (free over $150)
  const shippingCost = subtotal >= 150 ? 0 : 10;
  
  // Calculate total
  const total = subtotal + shippingCost;
  
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6">
      <h2 className="text-xl font-serif font-bold mb-4">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span>Subtotal ({items.length} {items.length === 1 ? 'item' : 'items'})</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Shipping</span>
          {isCheckout ? (
            <span>{shippingCost === 0 ? 'Free' : formatCurrency(shippingCost)}</span>
          ) : (
            <span>Calculated at checkout</span>
          )}
        </div>
        
        {isCheckout && (
          <div className="flex justify-between font-bold text-lg pt-4 border-t">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        )}
      </div>
      
      {!isCheckout && (
        <>
          <Button
            to="/checkout"
            fullWidth
            className="mb-3"
          >
            Proceed to Checkout
          </Button>
          
          <Link to="/shop" className="block text-center text-deep-brown hover:text-saddle-tan">
            Continue Shopping
          </Link>
        </>
      )}
      
      {isCheckout && items.length > 0 && (
        <div className="text-sm text-gray-600">
          <p className="mb-2">We accept:</p>
          <div className="flex space-x-2">
            <span className="px-2 py-1 border rounded text-xs">Pay on Delivery</span>
            <span className="px-2 py-1 border rounded text-xs">Bank Transfer</span>
          </div>
        </div>
      )}
    </div>
  );
}