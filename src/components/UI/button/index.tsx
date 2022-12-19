import React from "react";

import styles from "./button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};
