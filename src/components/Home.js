import React, {Fragment} from "react";
import { Heading } from "./Heading";
import { EmployeeList } from "./EmployeeList";

export const Home = () => {
    return (
        <Fragment>
            <div className="container mx-auto">
                <Heading />
                <EmployeeList />
            </div>
        </Fragment>
    );
};