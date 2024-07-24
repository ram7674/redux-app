import counterReducer from './features/counterSlice';
import employeeReducer from './features/employeeSlice';
import usersReducer from './features/userSlice';

const rootReducer = {
    counter: counterReducer,
    employees: employeeReducer,
    users: usersReducer
}

export default rootReducer;