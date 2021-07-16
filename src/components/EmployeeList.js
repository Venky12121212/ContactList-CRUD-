import React, {useContext, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../context/globalState';
import nodataImage from '../images/nodata.png'

export const EmployeeList = () => {
    const {employees, removeEmployee} = useContext(GlobalContext);
    return (
        <Fragment>
            <div className='container'>
                {
                    employees.length > 0 ?
                        <Fragment>
                            <table className='table table-primary table-sm text-center table-striped table-hover'>
                                <thead className='bg-primary text-white'>
                                <tr>
                                    <th>Emp Id</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Location</th>
                                    <th>Contact number</th>
                                    <th>Edit</th>
                                    <th>Remove</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    <Fragment>
                                        {
                                            employees.map(employee => {
                                                return (
                                                    <tr key={employee.id}>
                                                        <td>{employee.id}</td>
                                                        <td>
                                                            {employee.name}
                                                        </td>
                                                        <td>{employee.designation}</td>
                                                        <td>{employee.location}</td>
                                                        <td>{employee.contact_number}</td>
                                                        <td className='pt-3'>
                                                            <Link to={`/edit/${employee.id}`} className='mt-1 bg-success btn-sm text-white'>Edit
                                                                Employee</Link>
                                                        </td>
                                                        <td>
                                                            <button
                                                                onClick={() => removeEmployee(employee.id)}
                                                                className="btn btn-sm bg-danger text-white"
                                                                title="Remove Employee"
                                                            >Remove Employee
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })

                                        }
                                    </Fragment>
                                }
                                </tbody>
                            </table>

                        </Fragment> :
                        <img src={nodataImage} alt='NoDataImage'/>
                }
            </div>
        </Fragment>
    );
};