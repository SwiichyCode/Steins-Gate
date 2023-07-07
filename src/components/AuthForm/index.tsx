import AuthService from "@/services/auth.service";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import * as S from "./styles";

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
    reset,
  } = useForm<AuthInputs>();
  const [isLoading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  const onSubmit: SubmitHandler<AuthInputs> = async (data) => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      if (isRegister) {
        if (data.pseudo) {
          await AuthService.register(data.pseudo, data.email, data.password);
          setSuccessMessage("Votre compte a bien été créé");

          setTimeout(() => {
            router.push("/login");
          }, 1000);
        }
      } else {
        await AuthService.login(data.email, data.password);
        setSuccessMessage("Vous êtes connecté");

        setTimeout(() => {
          router.push("/home");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(
        "Une erreur s'est produite lors de la connexion ou de l'inscription"
      );
    } finally {
      setLoading(false);
      reset(); // Réinitialiser les champs du formulaire
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      {isRegister && (
        <Input
          labelText="Pseudo"
          name="pseudo"
          type="text"
          placeholder="Pseudo"
          register={register}
          theme="dark"
        />
      )}
      <Input
        labelText="Email"
        name="email"
        type="email"
        placeholder="emailexemple@gmail.com"
        register={register}
        theme="dark"
      />
      <Input
        labelText="Mot de passe"
        name="password"
        type="password"
        placeholder="********"
        register={register}
        theme="dark"
      />
      <Button
        text={
          isLoading
            ? "Chargement..."
            : isRegister
            ? "S'inscrire"
            : "Se connecter"
        }
        size="medium"
        type="submit"
        disabled={isLoading}
      />

      {successMessage && <S.SuccessMessage>{successMessage}</S.SuccessMessage>}
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

      <Link href={isRegister ? "/login" : "/register"}>
        {isRegister
          ? "Déjà inscrit ? Connectez-vous"
          : "Pas encore inscrit ? Inscrivez-vous"}
      </Link>
    </S.Form>
  );
}
