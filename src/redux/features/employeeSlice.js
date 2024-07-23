import { createSlice } from "@reduxjs/toolkit";
import { EmployeeService } from "../../services/EmployeeService";

const initialState = {
  employees: EmployeeService.getAllEmployees(),
};

const employeeSlice = createSlice({
  name: "employees",
  initialState: initialState,
  reducers: {
    updateSelected: function (state, action) {
      state.employees = state.employees.map((employee) =>
        employee.id === action.payload
          ? { ...employee, isSelected: !employee.isSelected }
          : employee
      );
    },
  },
});

export const { updateSelected } = employeeSlice.actions;
export default employeeSlice.reducer;