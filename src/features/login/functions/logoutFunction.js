import axios from "axios";


const logOut = () => {
    return axios.post('http://localhost:3002/logout', 
    {
        headers: {
            'Content-Type' : 'application/json'
        },
        withCredentials: true
    }).then(response => {
        window.location.href = '/';
    }).catch(error => {
        console.error('Error during logging out: ', error);
    })
};

export {
    logOut
};