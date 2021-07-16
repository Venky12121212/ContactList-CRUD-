import React, { createContext, useReducer } from 'react';

import appReducer from './appReducer';

const initialState = {
    employees: [
        {
            id: 1,
            name: "Venky",
            location: "Vijayawada",
            designation: "UI Developer",
            contact_number: "9885732314"
        }
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    function addEmployee(employee) {
        dispatch({
            type: "ADD_EMPLOYEE",
            payload: employee
        });
    }

    function editEmployee(employee) {
        dispatch({
            type: "EDIT_EMPLOYEE",
            payload: employee
        });
    }

    function removeEmployee(id) {
        dispatch({
            type: "REMOVE_EMPLOYEE",
            payload: id
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                employees: state.employees,
                addEmployee,
                editEmployee,
                removeEmployee
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};