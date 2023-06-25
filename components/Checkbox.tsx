import React, { useId } from 'react';
import Heading from './Heading';
import { Languages } from '../types/languages';

interface ChexboxProps {
  title: string;
  status: boolean;
  className?: string;
  onClick: (title: Languages) => void;
  activeBg: string;
  disabled: boolean;
}
const Checkbox: React.FC<ChexboxProps> = ({
  status,
  title,
  className,
  onClick,
  activeBg,
  disabled,
}) => {
  return (
    <button
      className={`flex align-center ${className}`}
      onClick={() => onClick(title)}
    >
      <div
      aria-disabled={disabled}
        className={`rounded-full h-6 w-6 ${status ? activeBg : 'bg-gray-200 '}`}
      />
      <Heading title={title} level='h6' className='ml-2 capitalize' />
    </button>
  );
};

export default Checkbox;
