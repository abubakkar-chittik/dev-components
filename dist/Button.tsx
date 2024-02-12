import React from 'react';
import './tailwind.css';

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: any;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  disabled?:boolean;
  textColor?:string;
  hoverBg?:string;
  style?:any;
  autoFocus?:boolean;
  className?:string

}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  onClick,backgroundColor,label,textColor,hoverBg,disabled,style,autoFocus,className,
  ...props
}: ButtonProps) => {
  
  return (
    <button
    type="button"
    className={["inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm", 
               `${backgroundColor}`,`${hoverBg}`,`${textColor}`,`${className}`].join(' ')}
    {...props}
    disabled={disabled}
    onClick={onClick}
    style={style}
    autoFocus={autoFocus}
    role="button"
  >
    {label}
  </button>
  );
};
