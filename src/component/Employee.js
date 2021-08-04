import React,{ useContext, useState, useEffect } from 'react';
import {EmployeeContext} from '../context/EmployeeContext';

const Employee = ({ data }) => {

    return (
        <React.Fragment>
            {
                data.map((employee) => (

                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.website}</td>
                        <td>{employee.phone}</td>
                        <td>
                            <a href="#editEmployeeModal" id="asd" className="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                        </td>
                    </tr>
                ))
            }
        </React.Fragment>

    );
}

export default Employee;