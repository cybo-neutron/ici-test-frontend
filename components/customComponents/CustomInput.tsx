import { FC, forwardRef } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

// type CustomInputProps = {
//   className: string;
//   placeholder: string;
//   ref: React.ForwardedRef<HTMLInputElement>;
// };

const CustomInput = forwardRef(({ className, ref, ...props }: any) => {
  return (
    <Input
      {...props}
      className={cn(
        "backdrop-blur bg-slate-200/30 border-none shadow-md focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0",
        className
      )}
    />
  );
});

export default CustomInput;
