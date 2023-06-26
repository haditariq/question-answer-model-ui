import React from 'react';

// component props
interface HeadingProps {
  /**
   * text title
   */
  title: string;
  /**
   * display heading level
   */
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * optional: classname
   */
  className?: string;
}
const Heading: React.FC<HeadingProps> = ({ title = '', level, className }) => {
  const Tag = level;
  return <Tag className={`${className}`}>{title}</Tag>;
};

export default Heading;
