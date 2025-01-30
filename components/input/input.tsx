"use client";

import React, { forwardRef, InputHTMLAttributes, useId } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  label?: string;
  error?: string;
  rightIcon?: React.ReactElement | null;
  leftIcon?: React.ReactElement | null;
  status?: "default" | "error" | "success";
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  const id = useId();
  return (
    <div className="rounded-lg overflow-hidden">
      <input
        id={id}
        ref={ref}
        {...props}
        className="font-medium text-sm py-2.5 px-5 rounded-[23px] bg-[#26292D] w-full h-full placeholder:text-[#848484] placeholder:text-medium  focus:bg-white focus:text-black focus:outline-none"
      />
    </div>
  );
});

export default Input;
