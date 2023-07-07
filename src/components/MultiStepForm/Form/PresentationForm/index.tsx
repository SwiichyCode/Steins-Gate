import GuildPresentation from "@/components/GuildPresentation";
import FormStepNavigator from "../../FormStepNavigator";
import { Form } from "../../styles";

export default function PresentationForm() {
  return (
    <Form>
      <GuildPresentation />
      <FormStepNavigator />
    </Form>
  );
}
