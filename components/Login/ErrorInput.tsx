import { cn } from "@/lib/utils";
import { FC } from "react";

type ErrorInputProps = {
  className?: string;
  message: string;
};

const ErrorInput: FC<ErrorInputProps> = ({ className, message }) => {
  return (
    <p className={cn("text-red-200 mt-2 w-fit pr-3", className)}>{message}</p>
  );
};

export default ErrorInput;
