import React, { ChangeEvent, useId } from 'react';
import Container from './Container';
import Heading from './Heading';

// component props
interface TextareaProps {
  id?: string;
  name: string;
  /**
   * textarea value
   */
  value: string;
  /**
   * onChange function
   */
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
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
  /**
   * optional: value should be entered
   */
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  value,
  onChange,
  className,
  placeholder,
  required = false,
  title,
}) => {
  return (
    <Container className='flex-row w-full'>
      <Heading title={title} level='h4' className='ml-2' />
      <textarea
        id={id}
        key={useId()}
        name={name}
        rows={7}
        value={value}
        onChange={onChange}
        className={`p-3 my-5 ${className} resize-none	`}
        placeholder={placeholder}
        required={required}
      />
    </Container>
  );
};

export default Textarea;
