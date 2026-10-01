// store.js
import { create } from "zustand";

export const useAnswersStore = create((set) => ({
  answers: {
    uuid: "",
    name: "",
    phone_number: "",
    email: "",
    age: "",
    gender: "",
    selfDescribe: "",
    therapistType: "",
    issues: [], // ✅ Must be initialized
    triedTherapy: "",
    connection: "",
    preferredDate: new Date().toISOString().split("T")[0],
    preferredTime: "",
    duration: 60,
  },
  handleInput: (field, value) =>
    set((state) => ({
      answers: { ...state.answers, [field]: value },
    })),
  toggleMulti: (field, value) =>
    set((state) => {
      const list = state.answers[field];
      return {
        answers: {
          ...state.answers,
          [field]: list.includes(value)
            ? list.filter((v) => v !== value)
            : [...list, value],
        },
      };
    }),
}));
