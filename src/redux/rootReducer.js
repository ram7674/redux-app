import counterReducer from './features/counterSlice';
import employeeReducer from './features/employeeSlice'

const rootReducer = {
    counter: counterReducer,
    employees: employeeReducer,
}

export default rootReducer;