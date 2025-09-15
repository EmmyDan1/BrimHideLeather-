import { forwardRef } from 'react';

const Input = forwardRef(({
  type = 'text',
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  className = '',
  ...props
}, ref) => {
  const inputClasses = `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-deep-brown focus:border-transparent transition-colors ${
    error 
      ? 'border-red-500 bg-red-50' 
      : 'border-gray-300 bg-white'
  } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`;
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block mb-2 font-medium text-charcoal">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;