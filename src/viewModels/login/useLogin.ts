import { useMutation } from "@apollo/client/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { SIGN_IN } from "../../shared/queries/auth/login";
import { SetSessionParams, useUserStore } from "../../shared/store/auth";
import { LoginFormData, loginScheme } from "./login.scheme";

export const useLogin = () => {
  const { setSession } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [signIn, { data, loading, error }] =
    useMutation<SetSessionParams>(SIGN_IN);

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const user = await signIn({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });

      if (user.data) {
        setSession(user.data);
        router.push("/(private)/profile");
      }
    } catch (err) {
      console.log("Erro no login:", err);
    }
  });

  return {
    control,
    onSubmit,
    data,
    loading,
    error,
    errors,
  };
};
