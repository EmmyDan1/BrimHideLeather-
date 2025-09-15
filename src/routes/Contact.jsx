import { useState } from 'react';
import { useUIStore } from '../store/useUIStore';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';

export default function Contact() {
  const { showToast } = useUIStore();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const locationOptions = [
    { value: '', label: 'Select a location' },
    { value: 'Bronx', label: 'Bronx, NY' },
    { value: 'austin', label: 'Austin, TX' },
    { value: 'portland', label: 'Portland, OR' },
    { value: 'online', label: 'Online Store' },
  ];
  
  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'order', label: 'Order Inquiry' },
    { value: 'product', label: 'Product Question' },
    { value: 'custom', label: 'Custom Work' },
    { value: 'wholesale', label: 'Wholesale Inquiry' },
    { value: 'other', label: 'Other' },
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        subject: '',
        message: '',
      });
      
      showToast('Your message has been sent. We\'ll get back to you soon!', 'success');
    }, 1500);
  };
  
  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">
          Have a question or need assistance? We're here to help.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-bone rounded-2xl p-8 h-full">
            <h2 className="text-2xl font-serif font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Customer Service</h3>
                <p className="mb-1">
                  <a href="mailto:info@brimhideleather.co" className="text-deep-brown hover:text-saddle-tan">
                    info@brimhideleather.com
                  </a>
                </p>
                {/* <p>
                  <a href="tel:+18005551234" className="text-deep-brown hover:text-saddle-tan">
                    (800) 555-1234
                  </a>
                </p> */}
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Hours</h3>
                <p className="mb-1">Monday - Friday: 9AM - 5PM EST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Locations</h3>
                <p className="mb-3">Visit one of our stores:</p>
                <ul className="space-y-3">
                  <li>
                    <a href="/locations#Bronx" className="text-deep-brown hover:text-saddle-tan font-medium">
                      Bronx, NY
                    </a>
                  </li>
                  <li>
                    <a href="/locations#austin" className="text-deep-brown hover:text-saddle-tan font-medium">
                      Austin, TX
                    </a>
                  </li>
                  <li>
                    <a href="/locations#portland" className="text-deep-brown hover:text-saddle-tan font-medium">
                      Portland, OR
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* <div>
                <h3 className="font-bold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-deep-brown hover:text-saddle-tan">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-deep-brown hover:text-saddle-tan">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                    </svg>
                  </a>
                  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-deep-brown hover:text-saddle-tan">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Name"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
                
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                
                <Input
                  label="Phone (optional)"
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
                
                <Select
                  label="Location"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  options={locationOptions}
                />
                
                <div className="md:col-span-2">
                  <Select
                    label="Subject"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    options={subjectOptions}
                    error={errors.subject}
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block mb-2 font-medium text-charcoal">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-deep-brown focus:border-transparent ${
                      errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-serif font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="font-serif font-bold text-xl mb-3">What is your return policy?</h3>
            <p className="text-gray-600">
              We accept returns within 30 days of delivery. Items must be unused and in original packaging. Custom orders are non-returnable.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="font-serif font-bold text-xl mb-3">How long does shipping take?</h3>
            <p className="text-gray-600">
              Standard shipping takes 3-5 business days within the US. International shipping typically takes 7-14 business days.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="font-serif font-bold text-xl mb-3">Do you offer gift wrapping?</h3>
            <p className="text-gray-600">
              Yes, we offer complimentary gift wrapping. Simply select the gift wrap option during checkout and include your gift message.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="font-serif font-bold text-xl mb-3">How do I care for my leather products?</h3>
            <p className="text-gray-600">
              We recommend regular cleaning with a damp cloth and conditioning with leather balm every 3-6 months. Visit our Leather Care page for detailed instructions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}