 import axios from 'axios';

const loginUser = (email, password, showPassword) => {
    return axios.post('http://localhost:3002/login', 
    {
        email, 
        password: showPassword ? password: undefined
    },
    {
        headers: {
            'Content-Type' : 'application/json'
        }, 
        withCredentials: true
    })
};

export default loginUser;

