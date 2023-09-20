import axios from 'axios';

const endpoint = 'http://localhost:3002/change-status';

const changeStatus = (caseId, status) => {
    return axios.post(endpoint, 
        {
            caseId, 
            status
        },
        {
            headers: {
                'Content-type': 'application/json'
            }, 
            withCredentials: true
        }
    );
};

export default changeStatus;