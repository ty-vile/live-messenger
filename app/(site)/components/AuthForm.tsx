"use client";

import Button from "@/app/components/buttons/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
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

    setIsLoading(false);
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 pt-1 pb-8 shadow-lg sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input label="Name" id="name" register={register} errors={errors} />
          )}
          <Input
            label="Email"
            id="email"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            label="Password"
            id="password"
            register={register}
            errors={errors}
          />
          <Button fullWidth={true}>Test</Button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
