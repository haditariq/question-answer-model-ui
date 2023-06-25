import React, { ChangeEvent, useId } from 'react';
import Container from './Container';
import Heading from './Heading';

// component props
interface TextareaProps {
  /**
   * textarea value
   */
  value: string;
  /**
   * onChange function
   */
  onChange: (newValue: string) => void;
  /**
   * optional: classname
   */
  className?: string;
  /**
   * optional: placeholder text for textarea
   */
  placeholder?: string;
  /**
   * label for textarea
   */
  title: string;
}

const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  className,
  placeholder,
  title,
}) => {
  // handle change of textarea
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Container className='flex-row w-full'>
      <Heading title={title} level='h4' className='ml-2' />
      <textarea
        key={useId()}
        rows={7}
        value={value}
        onChange={handleChange}
        className={`p-3 my-5 ${className} resize-none	`}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Textarea;
