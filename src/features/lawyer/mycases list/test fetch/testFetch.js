
/* function for getting fetching data from the my-cases endpoint */
async function fetchMyCases(endpoint, statefunction) {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
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
