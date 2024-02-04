"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/Login/Login";
import Register from "@/components/Login/Register";

type pageProps = {};

type FormInputs = {
  username: string;
  password: string;
};

enum GenderEnum {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

const style = {};

const page: FC<pageProps> = ({}) => {
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div
      className={cn(
        "min-h-[60vh] w-full flex flex-col justify-center items-center"
      )}
    >
      <Tabs defaultValue="login">
        <div className="backdrop-blur bg-slate-300/10 p-5 border-[1px] rounded-md border-zinc-300/20 shadow-lg ">
          <TabsList className="grid w-full grid-cols-2 mb-5 shadow-lg">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Login />
          </TabsContent>

          <TabsContent value="register">
            <Register />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default page;
