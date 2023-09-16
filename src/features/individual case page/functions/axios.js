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

const submitOffer = (caseId, ofereeId, offerDescription, offerAmmount) => {
    return axios.post(``, 
    {
        caseId, 
        ofereeId, 
        offerDescription, 
        offerAmmount
    },
    {
        headers: {
            'Content-type': 'application/json'
        }, 
        withCredentials: true
    });
}

export {
    getCase, 
    submitOffer
};