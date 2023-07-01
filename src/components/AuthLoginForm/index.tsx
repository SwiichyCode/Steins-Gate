import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
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

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await signIn("credentials", {
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
      <Button text="Se connecter" size="medium" />
    </Form>
  );
}
