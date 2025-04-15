import clsx from "clsx";
import { forwardRef, InputHTMLAttributes, useId } from "react";

const colors = {
  dark: "bg-[#26292D] placeholder:text-[#848484] placeholder:text-medium  focus:bg-white focus:text-black",
  white: "text-black bg-gray-light",
};

const sizes = {
  medium: "font-medium text-sm py-2.5 px-5",
  large: "font-medium text-lg py-3 px-6",
};

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  rows?: number;
  color?: keyof typeof colors;
  inputSize?: keyof typeof sizes;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ placeholder, rows = 3, color = "dark", inputSize = "medium", ...props }, ref) => {
    const id = useId();
    return (
      <div className="rounded-lg overflow-hidden">
        <textarea
          {...props}
          autoComplete="off"
          rows={rows}
          ref={ref}
          id={id}
          placeholder={placeholder}
          className={clsx(
            "rounded-[16px] w-full h-full  focus:outline-none",
            colors[color],
            sizes[inputSize]
          )}
        />
      </div>
    );
  }
);

export default Textarea;
