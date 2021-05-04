import React from 'react';

interface ButtonProps {
  onClick: any;
  children: any;
  className?: string;
}

export function Button(props: ButtonProps) {
  const { onClick, children, className } = props;
  return (
    <button className={`${className}`} type="submit" onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: 'mx-4 sm-mx-2 w-10',
};

export default Button;
