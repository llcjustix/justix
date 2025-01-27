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
};

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  rounded?: boolean;
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
}

const Button = ({
  children,
  type = "button",
  size = "medium",
  color = "black",
  rounded = false,
}: ButtonProps) => (
  <button
    type={type}
    className={clsx(
      "px-2 py-1 font-medium text-base",
      rounded ? "rounded-3xl" : "rounded-xl",
      sizes[size],
      colors[color]
    )}
  >
    {children}
  </button>
);

export default Button;
