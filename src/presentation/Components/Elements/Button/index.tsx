import React from 'react';
import style from './styles.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  htmlType?: 'button' | 'submit';
  handleClick?: () => void;
}

function Button({ htmlType, handleClick, children }: ButtonProps) {
  return (
    <button
      className={style.btn}
      type={htmlType === 'button' ? 'button' : 'submit'}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  htmlType: 'button',
  handleClick: () => {},
};

export default Button;
