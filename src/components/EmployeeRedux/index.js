import { useDispatch, useSelector } from "react-redux";
import { updateSelected } from "../../redux/features/employeeSlice";

const EmployeeRedux = () => {

  let dispatch = useDispatch();

  /* getting data from store */
  let employeeState = useSelector((store) =>{
    return store["employees"];
  })

  /* destructuring */
  let { employees } = employeeState;

  const updateSelectedEmp = (empId) => {
    //dspatch an action
   dispatch(updateSelected(empId));
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
                    onChange={() => updateSelectedEmp(employee.id)}
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
                  <ul className="list-group mb-3">
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
