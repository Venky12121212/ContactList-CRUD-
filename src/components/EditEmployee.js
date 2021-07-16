import React, {useState, useContext, useEffect, Fragment} from 'react';
import {useHistory, Link} from 'react-router-dom';

import {GlobalContext} from '../context/globalState';

export const EditEmployee = (route) => {
    let history = useHistory();

    const {employees, editEmployee} = useContext(GlobalContext);

    const [selectedUser, setSelectedUser] = useState({
        id: null,
        name: "",
        designation: "",
        location: "",
        contact_number: "",
    });

    const currentUserId = route.match.params.id;

    useEffect(() => {
        const employeeId = currentUserId;
        const selectedUser = employees.find(
            (currentEmployee) => currentEmployee.id === parseInt(employeeId)
        );
        setSelectedUser(selectedUser);
    }, [currentUserId, employees]);

    const onSubmit = (e) => {
        e.preventDefault();
        editEmployee(selectedUser);
        history.push("/");
    };

    const handleOnChange = (userKey, newValue) =>
        setSelectedUser({...selectedUser, [userKey]: newValue});

    if (!selectedUser || !selectedUser.id) {
        return <div>Invalid Employee ID.</div>;
    }

    return (
        <Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <div className="card animated jumbotron jello">
                            <div className="card-heder bg-info text-white">
                                <h3> Edit employee</h3>
                            </div>
                            <div className="card-boddy p-4">
                                <form onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name" className='font-weight-bold'> Name </label>
                                        <input required={true}
                                               className="form-control name"
                                               value={selectedUser.name}
                                               onChange={(e) => handleOnChange("name", e.target.value)}
                                               type="text"
                                               placeholder="Enter name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="location" className='font-weight-bold'> Location </label>
                                        <input required={true}
                                               className="form-control"
                                               value={selectedUser.location}
                                               onChange={(e) => handleOnChange("location", e.target.value)}
                                               type="text"
                                               placeholder="Enter location"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="designation" className='font-weight-bold'> Designation </label>
                                        <input required={true}
                                               className="form-control"
                                               value={selectedUser.designation}
                                               onChange={(e) => handleOnChange("designation", e.target.value)}
                                               type="text"
                                               placeholder="Enter designation"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact_number" className='font-weight-bold'> Contact
                                            Number </label>
                                        <input required={true}
                                               className="form-control"
                                               value={selectedUser.contact_number}
                                               onChange={(e) => handleOnChange("contact_number", e.target.value)}
                                               type="text"
                                               placeholder="Enter Contact Number"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <button className="btn btn-sm bg-secondary text-white">
                                            Edit Employee
                                        </button>

                                    </div>
                                </form>
                                <div className="text-right">
                                    <button className='btn btn-sm bg-warning text-white'>
                                        <Link to="/" className='text-white'>Cancel</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};