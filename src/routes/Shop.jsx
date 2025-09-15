import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import products from '../data/products';
import { filterProductsByCategory, sortProducts } from '../lib/slug';

export default function Shop() {
  const { category } = useParams();
  const { activeCategory, sortOption } = useOutletContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    // Determine which category to use (from URL param or from context)
    const categoryToUse = category || activeCategory;
    
    // Filter products by category
    let filtered = filterProductsByCategory(products, categoryToUse);
    
    // Sort products
    filtered = sortProducts(filtered, sortOption);
    
    setFilteredProducts(filtered);
  }, [category, activeCategory, sortOption]);
  
  return (
    <div>
      <ProductGrid products={filteredProducts} />
    </div>
  );
}