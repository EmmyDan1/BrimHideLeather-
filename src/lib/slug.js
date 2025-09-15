/**
 * Convert a string to a URL-friendly slug
 * @param {string} text - The text to slugify
 * @returns {string} The slugified text
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/&/g, '-and-')   // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-');  // Replace multiple - with single -
}

/**
 * Get a product by its slug
 * @param {Array} products - The products array
 * @param {string} slug - The slug to search for
 * @returns {Object|undefined} The product with the matching slug
 */
export function getProductBySlug(products, slug) {
  return products.find(product => product.slug === slug);
}

/**
 * Filter products by category
 * @param {Array} products - The products array
 * @param {string} category - The category to filter by
 * @returns {Array} The filtered products
 */
export function filterProductsByCategory(products, category) {
  if (!category || category === 'all') {
    return products;
  }
  
  return products.filter(product => product.category === category);
}

/**
 * Sort products by the given option
 * @param {Array} products - The products array
 * @param {string} sortOption - The sort option
 * @returns {Array} The sorted products
 */
export function sortProducts(products, sortOption) {
  const productsCopy = [...products];
  
  switch (sortOption) {
    case 'price-low':
      return productsCopy.sort((a, b) => a.price - b.price);
    case 'price-high':
      return productsCopy.sort((a, b) => b.price - a.price);
    case 'newest':
      return productsCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    default:
      return productsCopy;
  }
}