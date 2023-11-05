import axios from "axios";

const endpoint = 'http://localhost:3002/make-a-case/create';

function createACase( title, briefDescription, detailedDescription, caseCategory, categoryTags, timestamp) {
    return axios.post(endpoint, 
        {
            title, 
            briefDescription, 
            detailedDescription, 
            caseCategory,
            categoryTags,
            timestamp
            
        },
        {
            headers: {
                'Content-type': 'application/json'
            }, 
            withCredentials: true
        })
}

export default createACase;