import React, { createContext, useState, useEffect } from "react";
import getAllCases from "../functions/axios";
import useRequest from "../../../../functions/custom hooks/useRequest";
import { filterByCategories, sortCases, filterByTags } from "../functions/filterFunctions";

const CaseContext = createContext();

export const CaseContextProvider = ({ children }) => {
    const { execute, data, loading, error } = useRequest(getAllCases);
    const [originalCaseData, setOriginalCaseData] = useState([]);
    const [cases, setCases] = useState([]);    


    useEffect(() => {
        const fetchCases = async () => {
            const casesData = await execute();
            if (casesData) {
                setOriginalCaseData(casesData);
                setCases(casesData);
            }
        };
        fetchCases();
    }, []); 

    /* Filtering the case data: */
    const sortCasesByDate = (order) => {
        setCases(cases => sortCases(cases, order));
    };
    const filterCasesByCategory = (categoryInput) => {
        const filteredCases = filterByCategories(originalCaseData, categoryInput);
        setCases(filteredCases);
    };
    const filterCasesByTags = (tagInput) => {
        const filteredCases = filterByTags(originalCaseData, tagInput);
        setCases(filteredCases);
    }
    useEffect(() => {setCases(originalCaseData)}, [originalCaseData]); //if the original data changes, reset 


    return (
        <CaseContext.Provider value={{ cases, loading, error, sortCasesByDate, filterCasesByCategory, filterCasesByTags }}>
            {children}
        </CaseContext.Provider>
    );
};

export default CaseContext;