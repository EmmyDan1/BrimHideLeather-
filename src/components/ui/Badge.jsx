export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full';
  
  const variantClasses = {
    default: 'bg-deep-brown text-bone',
    secondary: 'bg-saddle-tan text-charcoal',
    outline: 'border border-deep-brown text-deep-brown',
    ghost: 'bg-deep-brown bg-opacity-10 text-deep-brown',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <span className={allClasses} {...props}>
      {children}
    </span>
  );
}