import React, { createContext, useState, useEffect } from "react";
import getAllCases from "../functions/axios";
import useRequest from "../../../../functions/custom hooks/useRequest";
import { sortCases } from "../functions/filterFunctions";

const CaseContext = createContext();

export const CaseContextProvider = ({ children }) => {
    const { execute, data, loading, error } = useRequest(getAllCases);
    const [cases, setCases] = useState([]);
    useEffect(() => {
        const fetchCases = async () => {
            const casesData = await execute();
            if (casesData) {
                setCases(casesData);
            }
        };
        fetchCases();
    }, []); //if the execute is on and the browsecases is with the current setup, it fetches contantly. 

    /* Filtering the case data: */
    const sortCasesByDate = (order) => {
        setCases(cases => sortCases(cases, order));
    };
    useEffect(() => {
       console.log('cases data:', cases) 
    },[cases]);

    return (
        <CaseContext.Provider value={{ cases, loading, error, sortCasesByDate }}>
            {children}
        </CaseContext.Provider>
    );
};

export default CaseContext;