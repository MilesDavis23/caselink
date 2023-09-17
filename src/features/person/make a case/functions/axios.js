import axios from "axios";

const endpoint = 'http://localhost:3002/make-a-case/create';

function createACase( title, briefDescription, detailedDescription, caseCategory, fileUrl, fileType) {
    return axios.post(endpoint, 
        {
            title, 
            briefDescription, 
            detailedDescription, 
            caseCategory, 
            fileUrl, 
            fileType
        },
        {
            headers: {
                'Content-type': 'application/json'
            }, 
            withCredentials: true
        })
}

export default createACase;