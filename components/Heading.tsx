import React from 'react';

interface HeadingProps {
  title: string;
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}
const Heading: React.FC<HeadingProps> = ({ title = '', level, className }) => {
  const Tag = level;
  return <Tag className={`${className}`}>{title}</Tag>;
};

export default Heading;
