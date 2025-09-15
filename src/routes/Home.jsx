import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import FeatureIcons from '../components/FeatureIcons';
import Newsletter from '../components/Newsletter';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

export default function Home() {
  const [bestsellers, setBestsellers] = useState([]);
  
  useEffect(() => {
    const bestsellerProducts = products.filter(product => product.bestseller).slice(0, 4);
    setBestsellers(bestsellerProducts);
  }, []);
  
  const categories = [
    {
      name: 'Bags',
      image: '/products/Bag.png',
      link: '/shop/bags',
    },
    {
      name: 'Wallets',
      image: '/products/Wallet.png',
      link: '/shop/wallets',
    },
    {
      name: 'Belts',
      image: '/products/Belt.png',
      link: '/shop/belts',
    },
    {
      name: 'Jackets',
      image: '/products/Jacket.png',
      link: '/shop/jackets',
    },
  ];
  
  return (
    <div>
      <Hero />
      
      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Shop by Category</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={category.link}
                className="group block relative overflow-hidden rounded-2xl aspect-square"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-serif font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bestsellers */}
      <section className="py-16 bg-bone">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Bestsellers</h2>
            <Link 
              to="/shop" 
              className="mt-4 md:mt-0 inline-flex items-center text-deep-brown hover:text-saddle-tan"
            >
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Craftsmanship Section */}
      <FeatureIcons />
      
      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Story</h2>
              <p className="mb-4 text-lg">
                BrimHide Leather Co. was founded in 2015 with a simple mission: create exceptional leather goods that get better with age.
              </p>
              <p className="mb-6">
                Our team of skilled artisans combines traditional techniques with modern design to craft products that stand the test of time. Each piece is meticulously handcrafted in our workshops using only the finest full-grain leathers and quality hardware.
              </p>
              <Link to="/about" className="inline-flex items-center text-deep-brown hover:text-saddle-tan">
                Learn More About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/images/brand/workshop.jpg" 
                alt="Leather workshop" 
                className="rounded-2xl shadow-soft w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-deep-brown rounded-full flex items-center justify-center text-bone font-serif text-center p-4 shadow-lg">
                <span>Handcrafted with Pride</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}