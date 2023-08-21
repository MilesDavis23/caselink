import axios from "axios";

/* function for getting fetching data from the my-cases endpoint */
async function fetchMyCases(endpoint, statefunction) {
    axios.get(endpoint)
        .then(response => {
            const data = response.data
            console.log(data);
            statefunction(data);
        })
        .catch(error => {
            console.error('Error fetching the data: ', error)
        })
};




export {
    fetchMyCases
};
