import clsx from "clsx";
import React from "react";

const colors = {
  black: "bg-black text-white hover:bg-gray-dark",
  white: "bg-white text-black",
  gray: "bg-gray-light text-black",
};

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: keyof typeof colors;
}

const IconButton = ({ children, color = "black", onClick, className }: IconButtonProps) => (
  <button
    type="button"
    className={clsx(
      "p-2 rounded-full active:translate-y-px hover:brightness-95 transition-all duration-200",
      colors[color],
      className && className
    )}
    onClick={(e) => {
      e.preventDefault();
      if (onClick) {
        onClick();
      }
    }}
  >
    {children}
  </button>
);

export default IconButton;
