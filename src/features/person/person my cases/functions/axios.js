import axios from "axios";

const endpoint = 'http://localhost:3002/person/my-cases'

function getAllMyCases() {
    return axios.get(endpoint, 
        {
            withCredentials: true
        })
}

export default getAllMyCases;