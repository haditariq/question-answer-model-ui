import React from 'react';

// component props
interface ContainerProps {
  /**
   * childern to render
   */
  children: React.ReactNode;
  /**
   * option: classname
   */
  className?: string;
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default Container;
