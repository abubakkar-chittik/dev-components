import React from 'react';
import './tailwind.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
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
  onClick,backgroundColor,size,label,textColor,hoverBg,disabled,style,autoFocus,className,
  ...props
}: ButtonProps) => {
  
  return (
    <button
    type="button"
    className={["inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm", 
               `storybook-button--${size}`,`${backgroundColor}`,`${hoverBg}`,`${textColor}`,`${className}`].join(' ')}
    //style={backgroundColor && { backgroundColor }}
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
