import axios from "axios";

/* function for getting fetching data from the my-cases endpoint */
async function fetchMyCases(endpoint, statefunction) {
    try {
        const response = await axios.get(endpoint);
        const data = response.data;
        console.log(data);
        statefunction(data);
        return data
    } catch (error) {
        console.error('Error fetchin the data: ', error.response ? error.response.data :  error )
    }
};




export {
    fetchMyCases
};
