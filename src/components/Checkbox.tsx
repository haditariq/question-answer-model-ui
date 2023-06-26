import React, { useId } from 'react';
import Heading from './Heading';
import { Languages } from '../types/languages';

// component props
interface ChexboxProps {
  /**
   * title text to display with checkbox
   */
  title: string;
  /**
   * status as in checkbox checked or unchecked
   */
  status: boolean;
  /**
   * optional: for designing
   */
  className?: string;
  /**
   * onClick to return selected language name
   */
  onClick: (title: string) => void;
  /**
   * bg-color for active checbox state
   */
  activeBg: string;
  /**
   * check box start interactable or not
   */
  disabled: boolean;
}
const Checkbox: React.FC<ChexboxProps> = ({
  status,
  title,
  className,
  onClick,
  activeBg,
  disabled,
}: ChexboxProps) => {
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
