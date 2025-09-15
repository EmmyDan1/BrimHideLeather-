import { Link, useLocation } from 'react-router-dom';

export default function CategoryFilter({ activeCategory, setActiveCategory }) {
  const location = useLocation();
  const isShopPage = location.pathname === '/shop' || location.pathname.startsWith('/shop/');
  
  const categories = [
    { id: 'all', name: 'All Products', path: '/shop' },
    { id: 'bags', name: 'Bags', path: '/shop/bags' },
    { id: 'wallets', name: 'Wallets', path: '/shop/wallets' },
    { id: 'belts', name: 'Belts', path: '/shop/belts' },
    { id: 'jackets', name: 'Jackets', path: '/shop/jackets' },
    { id: 'accessories', name: 'Accessories', path: '/shop/accessories' },
  ];
  
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };
  
  return (
<div className="pb-2">
  <div className="flex flex-wrap gap-2">
    {categories.map((category) => {
      const isActive = activeCategory === category.id;

      return isShopPage ? (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
            isActive
              ? 'bg-deep-brown text-bone'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {category.name}
        </button>
      ) : (
        <Link
          key={category.id}
          to={category.path}
          className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
            isActive
              ? 'bg-deep-brown text-bone'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {category.name}
        </Link>
      );
    })}
  </div>
</div>

  );
}