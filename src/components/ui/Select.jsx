import { forwardRef } from 'react';

const Select = forwardRef(({
  label,
  id,
  name,
  options = [],
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  placeholder = 'Select an option',
  className = '',
  ...props
}, ref) => {
  const selectClasses = `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-deep-brown focus:border-transparent transition-colors appearance-none bg-white bg-no-repeat ${
    error 
      ? 'border-red-500 bg-red-50' 
      : 'border-gray-300'
  } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`;
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block mb-2 font-medium text-charcoal">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          className={selectClasses}
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
            backgroundPosition: `right 0.5rem center`,
            backgroundSize: `1.5em 1.5em`,
            paddingRight: `2.5rem`
          }}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;