"use client";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "./ErrorInput";

type LoginProps = {};

const schema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Please enter a valid email",
    }),
  password: z
    .string()
    .min(3, { message: "Password must be atleast 3 characters" }),
});

type FormInputs = z.infer<typeof schema>;

const Login: FC<LoginProps> = ({}) => {
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

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[400px] gap-3"
      >
        <div>
          <Label>Email</Label>
          <Input
            {...register("email")}
            placeholder="Enter your email"
            className="backdrop-blur bg-slate-200/30 border-none shadow-md focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0"
          />
          {errors.email && (
            <ErrorInput message={errors?.email?.message || ""} />
          )}
        </div>

        <div>
          <Label>Password</Label>
          <Input
            {...register("password")}
            placeholder="Enter your password"
            type="password"
            className="backdrop-blur bg-slate-200/30 border-none shadow-md focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0"
          />
          {errors.password && (
            <ErrorInput message={errors?.password?.message || ""} />
          )}
        </div>

        <div className="flex gap-2 items-center ">
          <Checkbox />
          <p>Stay signed in</p>
        </div>

        <b className="cursor-pointer hover:text-violet-700">Forgot password?</b>

        <Button className="text-lg font-semibold mt-4">Login</Button>
      </form>
    </div>
  );
};

export default Login;
