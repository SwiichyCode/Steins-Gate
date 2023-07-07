import styled from "styled-components";
import Button from "@/components/Button";
import { useMultiStepFormStore } from "@/stores/multiStepForm";
import { SubmitHandler } from "react-hook-form";

const FormStepperContainer = styled.div<{ step: number }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  justify-content: ${({ step }) => (step === 1 ? "flex-end" : "space-between")};
`;

type Props = {
  onSubmit?: SubmitHandler<any>;
};

export default function FormStepNavigator({ onSubmit }: Props) {
  const { step, nextStep, prevStep, maxStep } = useMultiStepFormStore();

  const handleNextStep = async () => {
    if (onSubmit) {
      onSubmit;

      setTimeout(() => {
        nextStep();
      }, 1000);
    } else {
      nextStep();
    }
  };

  return (
    <FormStepperContainer step={step}>
      {step === 1 ? null : (
        <Button text="Précédent" size="medium" onClick={() => prevStep()} />
      )}

      {step === maxStep ? (
        <Button text="Submit" size="medium" />
      ) : (
        <Button
          text="Suivant"
          size="medium"
          onClick={() => handleNextStep()}
          type="submit"
        />
      )}
    </FormStepperContainer>
  );
}
