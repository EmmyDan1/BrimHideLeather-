import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { formatCurrency } from '../lib/format';
import { getOrder } from '../lib/storage';

export default function CheckoutSuccess() {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const orderData = getOrder();
    if (!orderData) {
      navigate('/');
      return;
    }
    setOrder(orderData);
  }, [navigate]);
  
  if (!order) return null;
  
  const showBankDetails = order.paymentMethod === 'bank-transfer';
  
  return (
    <div className="container py-12 max-w-3xl">
      <div className="card p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-moss rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl mb-2">Order Confirmed</h1>
          <p className="text-gray-600">Order #{order.id}</p>
        </div>
        
        <div className="border-t border-b py-6 mb-6">
          <h2 className="text-xl mb-4">Order Summary</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">
                    {item.color && `Color: ${item.color}`}
                    {item.size && ` | Size: ${item.size}`}
                    {` | Qty: ${item.quantity}`}
                  </p>
                </div>
                <p className="font-medium">{formatCurrency(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p>{formatCurrency(order.totals.subtotal)}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping</p>
              <p>{formatCurrency(order.totals.shipping)}</p>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4 pt-2 border-t">
              <p>Total</p>
              <p>{formatCurrency(order.totals.total)}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">{order.customer.firstName} {order.customer.lastName}</p>
              <p>{order.shipping.address}</p>
              <p>{order.shipping.city}, {order.shipping.state} {order.shipping.zip}</p>
              <p>{order.customer.email}</p>
              <p>{order.customer.phone}</p>
            </div>
            <div>
              <p className="font-medium">Payment Method</p>
              <p>{order.paymentMethod === 'bank-transfer' ? 'Bank Transfer' : 'Pay on Delivery'}</p>
            </div>
          </div>
        </div>
        
        {showBankDetails && (
          <div className="bg-bone p-4 rounded-lg mb-8">
            <h3 className="font-medium mb-2">Bank Transfer Details</h3>
            <p className="mb-1">Please transfer the total amount to:</p>
            <p className="mb-1"><strong>Bank:</strong> First National Bank</p>
            <p className="mb-1"><strong>Account Name:</strong> BrimHide Leather Co.</p>
            <p className="mb-1"><strong>Account Number:</strong> 1234567890</p>
            <p className="mb-1"><strong>Routing Number:</strong> 987654321</p>
            <p className="mb-1"><strong>Reference:</strong> Order #{order.id}</p>
            <p className="text-sm mt-2">Your order will be processed once payment is received.</p>
          </div>
        )}
        
        <div className="text-center">
          <p className="mb-6">A confirmation email has been sent to {order.customer.email}</p>
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}