import React from 'react';
import { cn } from '../utils/cn';
const variants = {
  primary: 'bg-[#29aeb1] text-white hover:bg-[#238e91]',
  secondary: 'bg-gray-100 text-black hover:bg-gray-200',
  outline: 'border border-gray-300 text-black bg-transparent hover:bg-gray-100',
  danger: 'bg-red-500 text-white hover:bg-red-600',
};

const sizes = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button = ({
  children,
  type = 'button',
  className = 'cursor-pointer',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-semibold transition duration-200',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        disabled || isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
      ) : Icon && iconPosition === 'left' ? (
        <Icon className="mr-2 h-4 w-4" />
      ) : null}

      {children}

      {Icon && iconPosition === 'right' && !isLoading && (
        <Icon className="ml-2 h-4 w-4" />
      )}
    </button>
  );
};

export default Button;
