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
    return axios.post(`http://localhost:3002/lawyer/send-offer`, 
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

/* No need to send userId, becasue it can easily be get from  */
const getOffersForUser = () => {
    return axios.get(`http://localhost:3002/person/checkOffer`,
    {
        withCredentials: true
    })
};

export {
    getCase, 
    submitOffer,
    getOffersForUser
};