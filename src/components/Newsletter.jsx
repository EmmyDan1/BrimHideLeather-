import { useState } from 'react';
import { useUIStore } from '../store/useUIStore';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useUIStore();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      showToast('Please enter your email address', 'error');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      showToast('Thank you for subscribing!', 'success');
    }, 1000);
  };
  
  return (
    <section className="py-16 bg-moss text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Join Our Community</h2>
          <p className="mb-8">
            Subscribe to our newsletter for exclusive offers, new product announcements, and leather care tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md text-charcoal focus:outline-none focus:ring-2 focus:ring-deep-brown"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-deep-brown text-bone font-medium rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-brown transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          <p className="mt-4 text-sm opacity-80">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
}