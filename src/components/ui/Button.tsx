import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false 
}) => {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl';
  
  const variants = {
    primary: 'bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black focus:ring-gray-500 border border-transparent',
    secondary: 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 hover:from-gray-100 hover:to-gray-200 focus:ring-gray-300 border border-gray-200 hover:border-gray-300',
    outline: 'border-2 border-gray-800 text-gray-800 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-300 focus:ring-gray-300 bg-transparent hover:border-gray-800'
  };
  
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-lg' : 'cursor-pointer';
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
