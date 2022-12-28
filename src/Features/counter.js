import { createSlice } from "@reduxjs/toolkit";

const name = localStorage.getItem("todos");

const impLocalData = () => {
  if (name) {
    const data = localStorage.getItem("todos");
    const finalData = JSON.parse(data);
    return finalData;
  }
  return [];
};

export const showSlice = createSlice({
  name: "data",
  initialState: impLocalData,
  reducers: {
    addData: (state, action) => {
      state = state.push(action.payload);
    },
    removeAllData: (state, action) => {
      return action.payload;
    },
    removeData: (state, action) => {
      const newData = state.filter((obj, id) => {
        return id !== action.payload;
      });
      return newData;
    },
    staus: (state, action) => {
      let deepcopy = state[action.payload];
      if (deepcopy.stat === "pendingCard") {
        deepcopy.stat = "completeCard";
      } else {
        deepcopy.stat = "pendingCard";
      }
      let freshArray = state.map((obj, index) => {
        if (index === action.payload) {
          return deepcopy;
        }
        return obj;
      });
      state = freshArray;
    },
  },
});

export const { addData, removeAllData, removeData, staus } = showSlice.actions;

export default showSlice.reducer;
