import styled from "styled-components";
import Button from "@/components/Button";
import { useMultiStepFormStore } from "@/stores/multiStepForm";

const FormStepperContainer = styled.div<{ step: number }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  justify-content: ${({ step }) => (step === 1 ? "flex-end" : "space-between")};
`;

type Props = {
  isForm?: boolean;
};

export default function FormStepNavigator({ isForm }: Props) {
  const { step, nextStep, prevStep, maxStep } = useMultiStepFormStore();

  const handleNextStep = () => {
    !isForm && nextStep();
  };

  return (
    <FormStepperContainer step={step}>
      {step === 1 ? null : (
        <Button text="Précédent" size="medium" onClick={() => prevStep()} />
      )}

      {step === maxStep ? (
        <Button text="Submit" size="medium" type="submit" />
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
