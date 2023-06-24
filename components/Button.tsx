import React from 'react';

interface ButtonProps {
  /**
   * What background color to use
   */
  className?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  title: string;
  /**
   * Optional click handler
   */
  onClick: (key: string) => void;
  /**
   * Is button interactable or not
   */
  disabled: boolean;
  /**
   * state for button loading and disabled
   */
  loading?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  size = 'medium',
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
        'storybook-button',
        `storybook-button--${size}`,
        className,
        mode,
        'flex justify-center items-center',
      ].join(' ')}
      {...props}
    >
      {loading ? 'Processing Your Request ...' : title}
    </button>
  );
};

export default Button;
