import React from 'react';
import style from './styles.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  htmlType?: 'button' | 'submit';
}

function Button({ htmlType, children }: ButtonProps) {
  return (
    <button
      className={style.btn}
      type={htmlType === 'button' ? 'button' : 'submit'}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  htmlType: 'button',
};

export default Button;
