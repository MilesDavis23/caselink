import axios from 'axios';

const getCase = (caseId) => {
    return axios.get(`http://localhost:3002/case-page/${caseId}`, 
        {
            headers: {
                'Content-Type' : 'application/json'
            }, 
            withCredentials: true
        }
    )
};

export default getCase;