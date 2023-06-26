import React, { MouseEvent } from 'react';

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
  onClick?: () => void;
  /**
   * Is button interactable or not
   */
  disabled: boolean;
  /**
   * optional: state for button loading and disabled
   */
  loading?: boolean;
  /**
   * optional: button type, default button
   */
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  title,
  disabled,
  className,
  onClick,
  loading,
  type = 'button',
  ...props
}: ButtonProps) => {
  const mode = disabled
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      onClick={onClick}
      type={type}
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
