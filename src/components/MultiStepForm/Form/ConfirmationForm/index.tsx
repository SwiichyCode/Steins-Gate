import RecrutementService from "@/services/recruitment.service";
import { useForm } from "react-hook-form";
import { useMultiStepFormStore } from "@/stores/multiStepForm";
import FormStepNavigator from "../../FormStepNavigator";
import { Form } from "../../styles";

export default function ConfirmationForm() {
  const { data } = useMultiStepFormStore();
  const { handleSubmit } = useForm();
  const { presentation, personnages } = data;

  const formattedPresentation = `Pseudo: ${presentation.pseudo}\nDisponibilités: ${presentation.disponibilites}\nDiscord: ${presentation.discord}`;

  const formattedClasse = personnages
    .map((c) => `Classe: ${c.classe}, iLvl: ${c.ilvl}`)
    .join("\n");

  const onSubmit = async () => {
    try {
      await RecrutementService.postRecrutement(
        data.presentation,
        data.personnages
      );
      console.log("Submit !");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Confirmation du formulaire</h1>
      <p>Voici les informations que vous avez saisies :</p>
      <p>{formattedPresentation}</p>
      <p>{formattedClasse}</p>
      <p>
        Si les informations sont correctes, veuillez soumettre le formulaire.
      </p>
      <FormStepNavigator isForm={true} />
    </Form>
  );
}
