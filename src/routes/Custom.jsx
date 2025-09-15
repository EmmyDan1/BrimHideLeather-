import { useState } from 'react';
import { useUIStore } from '../store/useUIStore';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';

export default function Custom() {
  const { showToast } = useUIStore();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    projectType: '',
    description: '',
    file: null,
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const budgetOptions = [
    { value: '', label: 'Select a budget range' },
    { value: 'under-200', label: 'Under $200' },
    { value: '200-500', label: '$200 - $500' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: 'over-1000', label: 'Over $1,000' },
  ];
  
  const projectTypeOptions = [
    { value: '', label: 'Select project type' },
    { value: 'bag', label: 'Custom Bag' },
    { value: 'wallet', label: 'Custom Wallet' },
    { value: 'belt', label: 'Custom Belt' },
    { value: 'jacket', label: 'Custom Jacket' },
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
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, file }));
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
    
    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }
    
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your project';
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
        budget: '',
        projectType: '',
        description: '',
        file: null,
      });
      
      // Reset file input
      const fileInput = document.getElementById('file');
      if (fileInput) {
        fileInput.value = '';
      }
      
      showToast('Your custom project request has been submitted. We\'ll contact you shortly!', 'success');
    }, 1500);
  };
  

  const exampleProjects = [
    {
      title: 'Custom Messenger Bag',
      image: '/products/CustomVinBag1.png',
      description: 'Personalized messenger bag with custom dimensions, pockets, and monogram.',
    },
    {
      title: 'Bespoke Leather Jacket',
      image: '/products/CustomVinJacket.png',
      description: 'Made-to-measure leather jacket with custom hardware and lining options.',
    },
    {
      title: 'Personalized Wallet',
      image: '/products/CustomVinWallet1.png',
      description: 'Custom wallet with your choice of leather, stitching, and personalization.',
    },
  ];
  
  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Custom Leather Work</h1>
        <p className="text-xl text-gray-600">
          From personalized gifts to bespoke creations, our artisans can bring your vision to life.
        </p>
      </div>
      
      {/* Example Projects */}
      <div className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-8 text-center">Previous Custom Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exampleProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="aspect-square">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom Work Process */}
      <div className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-8 text-center">Our Custom Work Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-deep-brown rounded-full flex items-center justify-center mx-auto mb-4 text-bone text-2xl font-bold">1</div>
            <h3 className="font-serif font-bold text-xl mb-2">Consultation</h3>
            <p className="text-gray-600">
              Submit your request using the form below. Our team will review your project and contact you to discuss details.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-deep-brown rounded-full flex items-center justify-center mx-auto mb-4 text-bone text-2xl font-bold">2</div>
            <h3 className="font-serif font-bold text-xl mb-2">Design & Quote</h3>
            <p className="text-gray-600">
              We'll create sketches and provide a detailed quote based on materials, complexity, and timeline.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-deep-brown rounded-full flex items-center justify-center mx-auto mb-4 text-bone text-2xl font-bold">3</div>
            <h3 className="font-serif font-bold text-xl mb-2">Crafting</h3>
            <p className="text-gray-600">
              Once approved, our artisans will handcraft your custom piece with regular updates throughout the process.
            </p>
          </div>
        </div>
      </div>
      
      {/* Inquiry Form */}
      <div className="bg-bone rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-serif font-bold mb-8 text-center">Request a Custom Project</h2>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
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
              label="Budget Range"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              options={budgetOptions}
              error={errors.budget}
              required
            />
            
            <Select
              label="Project Type"
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              options={projectTypeOptions}
              error={errors.projectType}
              required
            />
            
            <div className="md:col-span-2">
              <label htmlFor="description" className="block mb-2 font-medium text-charcoal">
                Project Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-deep-brown focus:border-transparent ${
                  errors.description ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                required
              ></textarea>
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="file" className="block mb-2 font-medium text-charcoal">
                Reference Images (optional)
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-brown focus:border-transparent"
              />
              <p className="mt-1 text-sm text-gray-500">
                Upload sketches, inspiration photos, or reference images (Max 5MB)
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}