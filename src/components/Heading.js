import React from "react";
import { Link } from "react-router-dom";

export const Heading = () => {
    return (
        <div>
            <div className="flex align-items-center">
                <div className='text-center'>
                    <h2 className='font-weight-bold'>Contact List</h2>
                </div>
                <div className="text-right px-4 py-2 m-2">
                    <Link to="/add">
                        <button className="btn-sm bg-success btn text-white rounded d-inline-flex align-items-center">
                            <span className='fa fa-plus-circle p-1 plus-font'></span>
                            <span className="">Add Employee</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};