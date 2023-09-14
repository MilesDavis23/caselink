import axios from "axios";
import { useState } from "react";

const endpoint = 'http://localhost:3002/putinto-mycases'

function useAddToMyCases(){
    const [added, setAdded] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError ] = useState(null);

    const addToMyCases = async (caseId) => {
        setIsLoading(true);
        try {
            await axios.post(endpoint,{ caseId }, { withCredentials: true } )
            setAdded(true);
        } catch (error) {
            setApiError(error.message);
        } finally {
            setIsLoading(false)
        };
    };
    return { isLoading, added, apiError, addToMyCases };
};

export default useAddToMyCases;