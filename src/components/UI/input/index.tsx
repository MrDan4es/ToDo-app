import React from "react";

import styles from "./input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <input className={`${styles.input} ${className}`} {...props}>
      {children}
    </input>
  );
};
