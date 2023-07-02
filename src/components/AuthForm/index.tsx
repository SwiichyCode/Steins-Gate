import styled from "styled-components";
import AuthService from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../Input";
import Button from "../Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  a {
    color: #f8f7f9;
  }
`;

interface AuthInputs {
  pseudo?: string;
  email: string;
  password: string;
}

export default function AuthForm({ isRegister }: { isRegister: boolean }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<AuthInputs> = async (data) => {
    try {
      if (isRegister) {
        if (data.pseudo) {
          await AuthService.register(data.pseudo, data.email, data.password);
          router.push("/login");
        }
      } else {
        await AuthService.login(data.email, data.password);
        console.log("Success login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isRegister && (
        <Input
          labelText="Pseudo"
          name="pseudo"
          type="text"
          placeholder="Swiichy"
          register={register}
        />
      )}
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
        text={isRegister ? "S'inscrire" : "Se connecter"}
        size="medium"
        type="submit"
      />

      <Link href={isRegister ? "/login" : "/register"}>
        {isRegister
          ? "Déjà inscrit ? Connectez-vous"
          : "Pas encore inscrit ? Inscrivez-vous"}
      </Link>
    </Form>
  );
}
