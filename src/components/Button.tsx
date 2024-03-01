import React from "react";

const Button: React.FC<{
  children: React.ReactNode;
  className: string;
}> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

export default Button;
