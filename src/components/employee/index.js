import { useState } from "react";
import { EmployeeService } from "../../services/EmployeeService";

const EmployeeRedux = () => {
  const [state, setState] = useState({
    employees: EmployeeService.getAllEmployees()
  });

  /* destructuring */
  let { employees } = state;

  const updateSelected = (empId) => {
    let selectedEmployees = employees.map((employee) => 
      (employee.id === empId ) ? { ...employee, isSelected: !employee.isSelected } : (employee)
    );

    setState({ employees: selectedEmployees });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 mb-4">
            <h3>Employee data</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              {employees.map((employee) => (
                <li key={employee.id} className="list-group-item">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={employee.isSelected}
                    onChange={() => updateSelected(employee.id)}
                  />{" "}
                  {employee.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            {employees.map((employee) => (
              <div key={employee.id}>
                {employee.isSelected && (
                  <ul className="list-group m-3">
                    <li className="list-group-item">
                      Name: {employee.name}
                    </li>
                    <li className="list-group-item">
                      Email: {employee.email}
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeRedux;
