import FormStepNavigator from "../../FormStepNavigator";
import { Form } from "../../styles";
import { useMultiStepFormStore } from "@/stores/multiStepForm";

export default function ConfirmationForm() {
  const { data, setClasse } = useMultiStepFormStore();

  console.log(data);
  return (
    <Form>
      <h1>Confirmation</h1>
      <FormStepNavigator />
    </Form>
  );
}
