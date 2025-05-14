import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    setEmployees(state, action) {
      return action.payload;
    },
    addEmployee(state, action) {
      state.push(action.payload);
    },
    updateEmployee(state, action) {
      const { index, employee } = action.payload;
      state[index] = employee;
    },
    removeEmployee(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export const { setEmployees, addEmployee, updateEmployee, removeEmployee } =
  employeesSlice.actions;

export default employeesSlice.reducer;
