import React, { ChangeEvent, useId } from 'react';
import Container from './Container';
import Heading from './Heading';

interface TextareaProps {
  value: string;
  onChange: (newValue: string) => void;
  className?: string;
  placeholder?: string;
  title: string;
}

const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  className,
  placeholder,
  title,
}) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Container className='flex-row w-full'>
      <Heading title={title} level='h4' className='ml-2'/>
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
