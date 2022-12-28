import { createSlice } from "@reduxjs/toolkit";

const storageReducer = createSlice({
  name: "storage",
  initialState: [],
  reducers: {
    addLocalData: (state, { payload }) => {
        localStorage.setItem("todos", JSON.stringify(payload));
        return (state = payload);
    },
    importData: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { addLocalData, importData } = storageReducer.actions;

export default storageReducer.reducer;
