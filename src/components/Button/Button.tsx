import type { FC, ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
