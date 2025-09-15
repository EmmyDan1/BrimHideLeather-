import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import SortMenu from '../components/SortMenu';

export default function ShopLayout() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOption, setSortOption] = useState('newest');
  
  return (
    <div className="container py-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <CategoryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        <SortMenu 
          sortOption={sortOption} 
          setSortOption={setSortOption} 
        />
      </div>
      
      <Outlet context={{ activeCategory, sortOption }} />
    </div>
  );
}