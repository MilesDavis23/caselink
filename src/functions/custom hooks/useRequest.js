import { useState } from 'react';

function useRequest(requestFunction) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null)
    const [error, setError] = useState(null);

    const execute = async (...args) => {
        setLoading(true);
        try { 
            const response = await requestFunction(...args);
            setData(response.data);
            return response.data;
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return { execute, loading, data, error };
};

export default useRequest;