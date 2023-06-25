import React from 'react';

// component props
interface SubStringModifierProps {
  /**
   * Main string as source string
   */
  str: string;
  /**
   * substring starting index
   */
  start: number;
  /**
   * substring ending index
   */
  end: number;
  /**
   * optional: classname
   */
  className?: string;
}

const SubStringBGDecorator: React.FC<SubStringModifierProps> = ({
  str,
  start,
  end,
  className,
}) => {
  const firstPart = str.substring(0, start); // slice string before the start of matching sub-string
  const foundPart = str.substring(start, end); // slice sub-string using start-end index, available by model
  const SecondPart = str.substring(end, str.length - 1); // slice ending after the end index

  // concatinating all parts of string, sliced above with found part having a className to have a highlight design
  return (
    <div>
      <span>{firstPart}</span>
      <span className={className}>{foundPart}</span>
      <span>{SecondPart}</span>
    </div>
  );
};

export default SubStringBGDecorator;
