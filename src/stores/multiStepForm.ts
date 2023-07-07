import { create } from "zustand";

export type Data = {
  presentation: {
    pseudo: string;
    description: string;
    discord: string;
  };
  classe: [
    {
      name: string;
      ilvl: number;
    }
  ];
};

interface MultiStepFormStore {
  data: Data;
  step: number;
  maxStep: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setPresentation: (presentation: Data["presentation"]) => void;
  setClasse: (classe: Data["classe"]) => void;
}

export const useMultiStepFormStore = create<MultiStepFormStore>()((set) => ({
  data: {
    presentation: {
      pseudo: "",
      description: "",
      discord: "",
    },
    classe: [
      {
        name: "",
        ilvl: 0,
      },
    ],
  },
  step: 1,
  maxStep: 4,
  setStep: (step) => set(() => ({ step })),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  setPresentation: (presentation) =>
    set((state) => ({ data: { ...state.data, presentation } })),
  setClasse: (classe) => set((state) => ({ data: { ...state.data, classe } })),
}));
