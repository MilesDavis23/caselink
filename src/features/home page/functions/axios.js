import axios from 'axios';

const getHighlights = () => {
    return axios.get(`http://localhost:3002/highlights`,
    {
        headers: {
            'Content-Type' : 'application/json'
        }, 
        withCredentials: true
    })
};


export {
    getHighlights
};