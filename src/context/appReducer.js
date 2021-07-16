export default function appReducer(state, action) {
    let {type, payload} = action
    switch (type) {
        case "ADD_EMPLOYEE":
            return {
                ...state,
                employees: [...state.employees, payload],
            };

        case "EDIT_EMPLOYEE":
            const updatedEmployee = payload;

            const updatedEmployees = state.employees.map((employee) => {
                if (employee.id === updatedEmployee.id) {
                    return updatedEmployee;
                }
                return employee;
            });

            return {
                ...state,
                employees: updatedEmployees,
            };

        case "REMOVE_EMPLOYEE":
            return {
                ...state,
                employees: state.employees.filter(
                    (employee) => employee.id !== payload
                ),
            };

        default:
            return state;
    }
};