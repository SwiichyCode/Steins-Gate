import { useMultiStepFormStore } from "@/stores/multiStepForm";
import StepProgress from "./StepProgress";
import PresentationForm from "./Form/PresentationForm";
import InformationsForm from "./Form/InformationsForm";
import PersonnagesForm from "./Form/PersonnagesForm";
import ConfirmationForm from "./Form/ConfirmationForm";
import * as S from "./styles";

export default function MultiStepForm() {
  const { step } = useMultiStepFormStore();

  return (
    <S.MultiStepFormContainer>
      <StepProgress />
      <S.FormLayoutContainer>
        {step === 1 ? <PresentationForm /> : null}
        {step === 2 ? <InformationsForm /> : null}
        {step === 3 ? <PersonnagesForm /> : null}
        {step === 4 ? <ConfirmationForm /> : null}
      </S.FormLayoutContainer>
    </S.MultiStepFormContainer>
  );
}
