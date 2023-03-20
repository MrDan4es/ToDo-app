import React from "react";

import styles from "./button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "red" | "blue";
}

export const Button: React.FC<Props> = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <button
      className={`${
        variant === "red"
          ? styles.buttonRed
          : variant === "blue"
          ? styles.buttonBlue
          : styles.buttonDefault
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
