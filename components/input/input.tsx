"use client";

import clsx from "clsx";
import React, { forwardRef, InputHTMLAttributes, useId } from "react";

const colors = {
  white: "text-black bg-gray-light",
  dark: "bg-[#26292D] placeholder:text-[#848484] placeholder:text-medium  focus:bg-white focus:text-black",
};

const sizes = {
  medium: "font-medium text-sm py-2.5 px-5",
  large: "font-medium text-lg py-3 px-6",
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  label?: string;
  error?: string;
  rightIcon?: React.ReactElement | null;
  leftIcon?: React.ReactElement | null;
  status?: "default" | "error" | "success";
  containerClassName?: string;
  color?: keyof typeof colors;
  inputSize?: keyof typeof sizes;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ color = "dark", inputSize = "medium", ...props }, ref) => {
    const id = useId();
    return (
      <div className="rounded-lg overflow-hidden">
        <input
          id={id}
          ref={ref}
          {...props}
          className={clsx(
            "rounded-[23px] w-full h-full focus:outline-none",
            colors[color],
            sizes[inputSize]
          )}
        />
      </div>
    );
  }
);

export default Input;
