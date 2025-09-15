/**
 * Format a number as currency
 * @param {number} amount - The amount to format
 * @returns {string} The formatted currency string
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
}

/**
 * Format a date as a readable string
 * @param {string|Date} date - The date to format
 * @returns {string} The formatted date string
 */
export function formatDate(date) {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(dateObj);
}