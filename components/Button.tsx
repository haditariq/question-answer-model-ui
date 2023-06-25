import React from 'react';

// component props
interface ButtonProps {
  /**
   * classname for designing
   */
  className?: string;
  /**
   * button text title
   */
  title: string;
  /**
   * onClick function on button
   */
  onClick: (key: string) => void;
  /**
   * Is button interactable or not
   */
  disabled: boolean;
  /**
   * optional: state for button loading and disabled
   */
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  disabled,
  className,
  onClick,
  loading,
  ...props
}: ButtonProps) => {
  const mode = disabled
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      onClick={() => onClick(title)}
      type='button'
      disabled={disabled || loading}
      className={[
        className,
        mode,
        'flex justify-center items-center capitalize',
        'storybook-button',
      ].join(' ')}
      {...props}
    >
      {loading ? 'Processing Your Request ...' : title}
    </button>
  );
};

export default Button;
