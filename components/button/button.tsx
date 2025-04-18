import React from "react";
import clsx from "clsx";

const sizes = {
  small: "px-3 py-1.5 text-xs",
  medium: "px-4 py-2 text-sm",
  large: "px-5 py-3 text-lg",
};

const colors = {
  black: "bg-black text-white hover:bg-primary",
  white: "bg-white text-black",
  gray: "bg-gray-light text-black",
  primary: "bg-primary text-white",
};

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  rounded?: boolean;
  fullWidth?: boolean;
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const Button = ({
  children,
  type = "button",
  size = "medium",
  color = "black",
  rounded = true,
  fullWidth = false,
  onClick,
  icon,
  className,
}: ButtonProps) => (
  <button
    type={type}
    className={clsx(
      "px-2 py-1 font-medium text-base active:translate-y-px hover:brightness-95 transition-all duration-200",
      fullWidth && "w-full",
      rounded ? "rounded-3xl" : "rounded-xl",
      icon && "flex items-center justify-center gap-2",
      sizes[size],
      colors[color],
      className
    )}
    onClick={(e) => {
      e.stopPropagation();
      e.stopPropagation();
      if (onClick) {
        onClick();
      }
    }}
  >
    {icon && icon}
    {children}
  </button>
);

export default Button;
