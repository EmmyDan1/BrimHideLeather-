import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../lib/format';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    // In a real app, this would be an API call
    const blogPosts = [
      {
        id: 1,
        slug: 'leather-care-guide',
        title: 'The Complete Guide to Leather Care',
        excerpt: 'Learn how to properly care for your leather goods to ensure they last a lifetime and develop a beautiful patina.',
        category: 'care',
        image: '/images/brand/blog-leather-care.jpg',
        date: '2025-08-15T00:00:00Z',
        author: 'Lenny Curry'
      },
      {
        id: 2,
        slug: 'history-of-leather-crafting',
        title: 'The Rich History of Leather Crafting',
        excerpt: 'Explore the fascinating history of leatherworking, from ancient civilizations to modern artisanal techniques.',
        category: 'history',
        image: '/images/brand/blog-leather-history.jpg',
        date: '2025-07-22T00:00:00Z',
        author: 'Elena Rodriguez'
      },
      {
        id: 3,
        slug: 'sustainable-leather-sourcing',
        title: 'Sustainable Leather: Ethical Sourcing Practices',
        excerpt: 'Discover how modern tanneries are adopting environmentally friendly practices and what to look for in sustainable leather products.',
        category: 'sustainability',
        image: '/images/brand/blog-sustainable-leather.jpg',
        date: '2025-06-30T00:00:00Z',
        author: 'David Chen'
      },
      {
        id: 4,
        slug: 'leather-types-guide',
        title: 'Understanding Different Types of Leather',
        excerpt: 'From full-grain to suede, learn about the different types of leather and their unique characteristics and uses.',
        category: 'education',
        image: '/images/brand/blog-leather-types.jpg',
        date: '2025-06-10T00:00:00Z',
        author: 'Lenny Curry'
      },
      {
        id: 5,
        slug: 'custom-leather-projects',
        title: 'Behind the Scenes: Custom Leather Projects',
        excerpt: 'Take a look at some of our most interesting custom projects and the stories behind them.',
        category: 'projects',
        image: '/images/brand/blog-custom-projects.jpg',
        date: '2025-05-18T00:00:00Z',
        author: 'Elena Rodriguez'
      },
      {
        id: 6,
        slug: 'leather-tools-guide',
        title: 'Essential Tools for Leather Crafting',
        excerpt: 'A comprehensive guide to the tools every leather artisan needs, from beginner to professional.',
        category: 'education',
        image: '/images/brand/blog-leather-tools.jpg',
        date: '2025-04-25T00:00:00Z',
        author: 'David Chen'
      }
    ];
    
    setPosts(blogPosts);
  }, []);
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'care', name: 'Care & Maintenance' },
    { id: 'education', name: 'Education' },
    { id: 'history', name: 'History' },
    { id: 'projects', name: 'Projects' },
    { id: 'sustainability', name: 'Sustainability' }
  ];
  
  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category === activeCategory);
  
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">The Leather Journal</h1>
        <p className="text-xl text-gray-600">
          Stories, guides, and insights from the world of leather craftsmanship.
        </p>
      </div>
      
      {/* Category Filter */}
      <div className="mb-12 flex justify-center">
        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    isActive
                      ? 'bg-deep-brown text-bone'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </Link>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{formatDate(post.date)}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              <h2 className="text-xl font-serif font-bold mb-2">
                <Link to={`/blog/${post.slug}`} className="hover:text-saddle-tan">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-deep-brown hover:text-saddle-tan"
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No posts found in this category.</p>
        </div>
      )}
      
      {/* Newsletter */}
      <div className="mt-16 bg-bone rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">
            Get the latest articles, care tips, and product updates delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-brown"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-deep-brown text-bone font-medium rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-brown transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}