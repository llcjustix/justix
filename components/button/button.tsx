import React from "react";
import clsx from "clsx";

const sizes = {
  small: "px-3 py-1.5 text-xs",
  medium: "px-4 py-2 text-sm",
  large: "px-4 py-3 text-lg",
};

const colors = {
  black: "bg-black text-white",
  white: "bg-white text-black",
  gray: "bg-gray-light text-black",
};

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  rounded?: boolean;
  fullWidth?: boolean;
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  onClick?: () => void;
}

const Button = ({
  children,
  type = "button",
  size = "medium",
  color = "black",
  rounded = false,
  fullWidth = false,
  onClick,
}: ButtonProps) => (
  <button
    type={type}
    className={clsx(
      "px-2 py-1 font-medium text-base",
      fullWidth && "w-full",
      rounded ? "rounded-3xl" : "rounded-xl",
      sizes[size],
      colors[color]
    )}
    onClick={(e) => {
      e.stopPropagation();
      e.stopPropagation();
      if (onClick) {
        onClick();
      }
    }}
  >
    {children}
  </button>
);

export default Button;
