import React, { useEffect, createContext, useState } from "react";
import axios from 'axios';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

 

    const [data, setEmployees] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
            alert(response.data);
            setEmployees(response.data);
        }
        fetchData();
    }, []);

    return (
        <EmployeeContext.Provider value={{data}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;