import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  to,
  type = 'button',
  disabled = false,
  onClick,
  fullWidth = false,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-deep-brown text-bone hover:bg-opacity-90 focus:ring-deep-brown',
    secondary: 'bg-saddle-tan text-charcoal hover:bg-opacity-90 focus:ring-saddle-tan',
    outline: 'border-2 border-deep-brown text-deep-brown hover:bg-deep-brown hover:text-bone focus:ring-deep-brown',
    ghost: 'text-deep-brown hover:bg-deep-brown hover:bg-opacity-10 focus:ring-deep-brown',
    danger: 'bg-red-600 text-white hover:bg-opacity-90 focus:ring-red-600',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClasses} ${className}`;
  
  // If href is provided, render an anchor tag
  if (href) {
    return (
      <a href={href} className={allClasses} {...props}>
        {children}
      </a>
    );
  }
  
  // If to is provided, render a Link component
  if (to) {
    return (
      <Link to={to} className={allClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  // Otherwise render a button
  return (
    <button
      type={type}
      className={allClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}