import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  subject: string;
  link?: string;
  file?: File | null; // Optional if you want to handle files
  radioValue: string;
  dropdownValue: string;
}

const initialState: FormState = {
  subject: "",
  link: "",
  file: null,
  radioValue: "",
  dropdownValue: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<FormState>) {
      return { ...state, ...action.payload };
    },
    resetFormData(state) {
      return initialState;
    },
  },
});

export const { setFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;
