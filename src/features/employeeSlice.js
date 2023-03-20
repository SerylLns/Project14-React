import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      console.log(state.length)
      state = state.push({ ...action.payload});
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
