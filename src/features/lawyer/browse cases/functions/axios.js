import axios from "axios";

const endpoint = 'http://localhost:3002/browse-cases';

function getAllCases() {
    return axios.get(endpoint, 
        {
            withCredentials: true
        })
}

export default getAllCases;