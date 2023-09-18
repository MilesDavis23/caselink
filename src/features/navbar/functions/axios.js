import axios from 'axios';

const getUserData = () => {
    return axios.get('http://localhost:3001/users/userdata',
    {
        headers: {
            'Content-Type' : 'application/json'
        },
        withCredentials: true
    })
};

export default getUserData;

