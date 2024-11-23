import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  value: number;
};

const initialState: initialStateType = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      value: state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
