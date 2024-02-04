import { FC, forwardRef } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "../customComponents/CustomInput";
import ErrorInput from "./ErrorInput";

type RegisterProps = {};

const schema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z
      .string()
      .min(3, { message: "Password must be at least 3 characters" }),
    confirmPassword: z
      .string()
      .min(3, { message: "Password must be at least 3 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword", "password"],
  });

type FormInputs = z.infer<typeof schema>;

const Register: FC<RegisterProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  const onErrors: SubmitErrorHandler<FormInputs> = (errors) => {
    console.log(errors);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[400px] gap-3"
      >
        <div>
          <Label>Email</Label>
          <CustomInput
            {...register("email", { required: true })}
            placeholder="Enter your email"
          />
          {errors.email && (
            <ErrorInput message={errors?.email?.message || ""} />
          )}
        </div>

        <div>
          <Label>Password</Label>

          <CustomInput
            {...register("password")}
            placeholder="Enter your password"
          />
          {errors.password && (
            <ErrorInput message={errors?.password?.message || ""} />
          )}
        </div>

        <div>
          <Label>Confirm Password</Label>
          <CustomInput
            {...register("confirmPassword")}
            placeholder="Enter your password again"
          />
          {errors.confirmPassword && (
            <ErrorInput message={errors?.confirmPassword?.message || ""} />
          )}
        </div>

        <Button className="text-lg font-semibold mt-4 shadow-lg">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
