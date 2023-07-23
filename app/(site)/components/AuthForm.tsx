"use client";

import Button from "@/app/components/buttons/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import AuthSocialLoginButton from "./AuthSocialLoginButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // AXIOS REGISTER
    }

    if (variant === "LOGIN") {
      // NEXTAUTH SIGNIN
    }

    // setIsLoading(false);
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    // setIsLoading(false);
  };

  return (
    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
        {variant === "LOGIN"
          ? "Sign in to your account"
          : "Register your account"}
      </h2>
      <div className="bg-white px-4 pt-1 pb-8 shadow-lg sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              label="Name"
              id="name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            label="Email"
            id="email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            label="Password"
            id="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Button fullWidth={true} type="submit">
            {variant === "LOGIN" ? "Sign in" : "Register"}
          </Button>
        </form>

        <div className="mt-6 ">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialLoginButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialLoginButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center items-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "New to messenger?"
              : "Already have an account?"}
          </div>
          <div className="underline cursor-pointer" onClick={toggleVariant}>
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
