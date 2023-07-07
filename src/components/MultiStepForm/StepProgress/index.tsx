import { useMultiStepFormStore } from "@/stores/multiStepForm";
import { StepperItems } from "./data";
import * as S from "./styles";

export default function StepProgress() {
  const { step } = useMultiStepFormStore();

  return (
    <S.StepperContainer>
      <S.StepperList>
        {StepperItems.map(({ id, title }) => (
          <S.StepperItem key={id} step={step} id={id}>
            {title}
          </S.StepperItem>
        ))}
      </S.StepperList>
    </S.StepperContainer>
  );
}
