/**
 * Get cart items from localStorage
 * @returns {Array} The cart items
 */
export function getCartItems() {
  try {
    const items = localStorage.getItem('brimhide_cart');
    return items ? JSON.parse(items) : [];
  } catch (error) {
    console.error('Error getting cart from localStorage:', error);
    return [];
  }
}

/**
 * Save cart items to localStorage
 * @param {Array} items - The cart items to save
 */
export function saveCartItems(items) {
  try {
    localStorage.setItem('brimhide_cart', JSON.stringify(items));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
}

/**
 * Generate a unique order ID
 * @returns {string} The order ID
 */
export function generateOrderId() {
  return 'IH' + Date.now().toString().slice(-6) + Math.floor(Math.random() * 1000);
}

/**
 * Save order to localStorage
 * @param {Object} order - The order to save
 */
export function saveOrder(order) {
  try {
    localStorage.setItem('brimhide_last_order', JSON.stringify(order));
    
    // Save to order history
    const orderHistory = getOrderHistory();
    orderHistory.push(order);
    localStorage.setItem('brimhide_order_history', JSON.stringify(orderHistory));
  } catch (error) {
    console.error('Error saving order to localStorage:', error);
  }
}

/**
 * Get the last order from localStorage
 * @returns {Object|null} The last order
 */
export function getOrder() {
  try {
    const order = localStorage.getItem('brimhide_last_order');
    return order ? JSON.parse(order) : null;
  } catch (error) {
    console.error('Error getting order from localStorage:', error);
    return null;
  }
}

/**
 * Get order history from localStorage
 * @returns {Array} The order history
 */
export function getOrderHistory() {
  try {
    const history = localStorage.getItem('brimhide_order_history');
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Error getting order history from localStorage:', error);
    return [];
  }
}

/**
 * Clear the cart
 */
export function clearCart() {
  try {
    localStorage.removeItem('brimhide_cart');
  } catch (error) {
    console.error('Error clearing cart from localStorage:', error);
  }
}