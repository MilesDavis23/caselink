import axios from "axios";

const endpoint = 'http://localhost:3002/lawyer/my-cases';

function getLawyerMyCases() {
    return axios.get(endpoint, 
        {
            withCredentials: true
        })
}

export default getLawyerMyCases;