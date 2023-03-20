import React, { useRef } from "react";

import { useOutsideClick } from "hooks/useOutsideClick";

import styles from "./modal.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  closeModal: () => void;
}

export const Modal: React.FC<Props> = ({
  open,
  closeModal,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => closeModal());

  return (
    <>
      {open ? (
        <div className={styles.modal} ref={ref} {...props}>
          {children}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
