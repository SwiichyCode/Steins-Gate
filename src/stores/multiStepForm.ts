import { create } from "zustand";

export type Data = {
  presentation: {
    pseudo: string;
    disponibilites: string;
    discord: string;
  };
  personnages: {
    classe: string;
    ilvl: number;
  }[];
};

interface MultiStepFormStore {
  data: Data;
  step: number;
  maxStep: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setPresentation: (presentation: Data["presentation"]) => void;
  setPersonnages: (classe: Data["personnages"]) => void;
}

export const useMultiStepFormStore = create<MultiStepFormStore>()((set) => ({
  data: {
    presentation: {
      pseudo: "",
      disponibilites: "",
      discord: "",
    },
    personnages: [
      {
        classe: "",
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
  setPersonnages: (personnages) =>
    set((state) => ({ data: { ...state.data, personnages } })),
}));
