import React,{ useContext, useEffect, useState} from 'react';
import Employee from './Employee';
import { EmployeeContext } from '../context/EmployeeContext';


const EmployeeList = () => {

    const { data } = useContext(EmployeeContext);

    return (


        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <Employee data={data} />
            </tbody></table>

    );
}

export default EmployeeList;

/*  <Employee/>
{this.data.map(repo=>
    <div key={repo.id}>
        <b>Title: </b>{repo.name}<br></br>
        <b>Email: </b>{repo.email}<br></br>
        <b>Content: </b>{repo.body}<br></br>
    </div>
)}*/