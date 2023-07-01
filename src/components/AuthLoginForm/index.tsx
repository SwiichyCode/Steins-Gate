import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Input } from "../Input";
import Button from "../Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

type Inputs = {
  email: string;
  password: string;
};

export default function AuthLoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await signIn("credentials", {
      // redirect: true,
      // callbackUrl: "/",
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        labelText="Email"
        name="email"
        type="email"
        placeholder="emailexemple@gmail.com"
        register={register}
      />
      <Input
        labelText="Mot de passe"
        name="password"
        type="password"
        placeholder="********"
        register={register}
      />
      <Button
        text="Se connecter"
        size="medium"
        // onClick={() => router.reload()}
      />
    </Form>
  );
}
