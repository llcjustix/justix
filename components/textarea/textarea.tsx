import { forwardRef, InputHTMLAttributes, useId } from "react";

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  rows?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ placeholder, rows = 3, ...props }, ref) => {
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
          className="font-medium text-sm py-2.5 px-5 rounded-[16px] bg-[#26292D] w-full h-full placeholder:text-[#848484] placeholder:text-medium  focus:bg-white focus:text-black focus:outline-none"
        />
      </div>
    );
  }
);

export default Textarea;
