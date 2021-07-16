import React, {useState, useContext, Fragment} from 'react';
import {Link, useHistory} from 'react-router-dom';

import {GlobalContext} from '../context/globalState';

export const AddEmployee = () => {
        let history = useHistory();

        const {addEmployee, employees} = useContext(GlobalContext);

        const [name, setName] = useState("");
        const [location, setLocation] = useState("");
        const [designation, setDesignation] = useState("");
        const [contact_number, setContact_number] = useState("");

        const onSubmit = (e) => {
            e.preventDefault();
            const newEmployee = {
                id: employees.length + 1,
                name,
                location,
                designation,
                contact_number,
            };
            addEmployee(newEmployee);
            history.push("/");
        }
        return (
            <Fragment>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <div className="card animated jumbotron jello">
                                <div className="card-header bg-info text-white">
                                    <h3>Add Employee</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name" className='font-weight-bold'> Name </label>
                                            <input required={true}
                                                   type='text'
                                                   name="username"
                                                   className='form-control'
                                                   value={name}
                                                   onChange={(e) => setName(e.target.value)}
                                                   placeholder="Enter name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="location" className='font-weight-bold'> Location </label>
                                            <input required={true}
                                                   className='form-control'
                                                   value={location}
                                                   onChange={(e) => setLocation(e.target.value)}
                                                   type="text"
                                                   placeholder="Enter location"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="designation" className='font-weight-bold'> Designation </label>
                                            <input required={true}
                                                   className="form-control"
                                                   value={designation}
                                                   onChange={(e) => setDesignation(e.target.value)}
                                                   type="text"
                                                   placeholder="Enter designation"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="contact_number" className='font-weight-bold'> Contact
                                                Number </label>
                                            <input required={true}
                                                   className="form-control"
                                                   value={contact_number}
                                                   onChange={(e) => setContact_number(e.target.value)}
                                                   type="text"
                                                   placeholder="Enter Contact Number"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <button
                                                className="btn btn-sm bg-success text-center text-white">
                                                Add Employee
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
    }
;